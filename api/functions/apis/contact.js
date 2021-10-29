const {db} = require("../util/admin");
const nodemailer = require("nodemailer");
const functions = require("firebase-functions");
// const fetch = require("isomorphic-fetch");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: functions.config().api.email_username,
    pass: functions.config().api.email_password,
  },
  secure: true,
});

exports.saveContactMessage = (request, response) => {
  if (request.body.message.trim() === "") {
    return response.status(400).json({body: "Must not be empty"});
  }

  if (request.body.name.trim() === "") {
    return response.status(400).json({title: "Must not be empty"});
  }

  if (request.body.email.trim() === "") {
    return response.status(400).json({title: "Must not be empty"});
  }

  // const secretKey = functions.config().api.secret_key;
  // const token = request.body.token;
  // const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  // // validate recaptcha
  // fetch(url, {
  //   method: "post",
  // })
  //     .then((response) => response.json())
  //     .then((googleResponse) => {
  //       if (googleResponse.success) {
  // save to database
  const newContactMessage = {
    name: request.body.name,
    email: request.body.email,
    subject: request.body.subject,
    message: request.body.message,
    createdAt: new Date().toISOString(),
  };
  db
      .collection("contact")
      .add(newContactMessage)
      .then((doc)=>{
        const responseToContactMessage = newContactMessage;
        responseToContactMessage.id = doc.id;
        return response.json(responseToContactMessage);
      })
      .catch((err) => {
        response.status(500).json({error: "Something went wrong"});
      });

  // email
  const emailData = {
    from: request.body.name + " <" + request.body.email + ">",
    to: "website@chelseahouser.com",
    message: {
      subject: request.body.subject,
      text: request.body.message,
    },
  };

  transporter.sendMail(emailData);
  // }
  // })
  // .catch((e) => {
  //   return response.status(500).json({title: "Failed Validation."});
  // });
};

const {db} = require("../util/admin");
const nodemailer = require("nodemailer");
const functions = require("firebase-functions");

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

  // response.set("Access-Control-Allow-Origin", "https://chelseahouser.com/");

  // save to database
  const newContactMessage = {
    name: request.body.name,
    email: request.body.email,
    subject: request.body.subject,
    message: request.body.message,
    createdAt: new Date().toISOString(),
    token: request.body.token,
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
    from: "\"CHOUSER Website\" website@chelseahouser.com",
    replyTo: "\"" + request.body.name + "\" " + request.body.email,
    to: "website@chelseahouser.com",
    subject: request.body.subject,
    text: request.body.message,
  };

  transporter.sendMail(emailData);
};

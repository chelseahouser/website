require("dotenv").config();
const {db} = require("../util/admin");
const nodemailer = require("nodemailer");
const fetch = require("isomorphic-fetch");

const transporter = nodemailer.createTransport({
  port: 465, // true for 465, false for other ports
  host: "smtp.gmail.com",
  auth: {
    user: "website@chelseahouser.com",
    pass: process.env.EMAIL_PASSWORD,
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

  const secretKey = process.env.SECRET_KEY;
  const token = request.body.token;
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  // validate recaptcha
  fetch(url, {
    method: "post",
  })
      .then((response) => response.json())
      .then((googleResponse) => {
        if (googleResponse.success) {
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
                console.error(err);
              });

          // email
          const emailData = {
            name: request.body.name,
            from: request.body.email,
            to: "website@chelseahouser.com",
            subject: request.body.subject,
            text: request.body.message,
          };

          transporter.sendMail(emailData);
        }
      })
      .catch((e) => {
        return response.status(500).json({title: "Failed Validation."});
      });
};

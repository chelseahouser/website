const {db} = require("../util/admin");
const {transporter} = require("../util/email");
const {appCheckVerification} = require("../util/appcheck");

exports.saveContactMessage = (request, response, next) => {
  appCheckVerification(request, response, next);

  if (response.status == 401) {
    return response;
  }

  if (request.body.message.trim() === "") {
    return response.status(400).json({body: "Must not be empty"});
  }

  if (request.body.name.trim() === "") {
    return response.status(400).json({title: "Must not be empty"});
  }

  if (request.body.email.trim() === "") {
    return response.status(400).json({title: "Must not be empty"});
  }

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
    from: "\"CHOUSER Website\" website@chelseahouser.com",
    replyTo: "\"" + request.body.name + "\" " + request.body.email,
    to: "website@chelseahouser.com",
    subject: request.body.subject,
    text: request.body.message,
  };

  transporter.sendMail(emailData);
  return response.status(200);
};

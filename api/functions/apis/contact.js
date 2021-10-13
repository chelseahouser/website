const {db} = require("../util/admin");

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
};

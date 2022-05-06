const {db} = require("../util/admin");
const {transporter} = require("../util/email");

exports.subscribe = (request, response) => {
  if (request.body.email.trim() === "") {
    return response.status(400).json({title: "Must not be empty"});
  }

  // save to database
  const newSubscriber = {
    email: request.body.email,
    createdAt: new Date().toISOString(),
  };

  db
      .collection("subscription")
      .add(newSubscriber)
      .then((doc)=>{
        const responseToAddSubscriber = newSubscriber;
        responseToAddSubscriber.id = doc.id;
        return response.json(responseToAddSubscriber);
      })
      .catch((err) => {
        response.status(500).json({error: "Something went wrong"});
      });
};

exports.unsubscribe = (request, response) => {
  if (request.body.email === "") {
    return response.status(400).json({title: "Must not be empty"});
  }

  const query = db
      .collection("subscription")
      .where("email", "==", request.body.email);
  query.get().then(function(snapshot) {
    snapshot.forEach(function(doc) {
      doc.ref.delete();
    });
  });
  return response;
};

exports.publishBlogPost = (request, response) => {
  if (request.body.message === "") {
    return response.status(400).json({title: "You need to send a message."});
  }

  db
      .collection("blog")
      .doc(`${request.params.blogid}`)
      .get()
      .then((blogPost) => {
        const emailMessage = `<p>${request.body.message}  <a href='https://chelseahouser.com/blog/${request.params.blogid}'>${blogPost.data().title}</a></p><p>To unsubscribe from these emails: <a href='https://chelseahouser.com/unsubscribe'>unsubscribe</a></p>`;

        db
            .collection("subscription")
            .get()
            .then((data) => {
              data.forEach((subscriber) => {
                const emailData = {
                  from: "\"Chelsea Houser\" admin@chelseahouser.com",
                  to: subscriber.data().email,
                  subject: "New Blog Post: " + blogPost.data().title,
                  html: emailMessage,
                };
                transporter.sendMail(emailData);
              });
            });
      });
  return response;
};

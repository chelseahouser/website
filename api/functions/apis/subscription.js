const {db} = require("../util/admin");

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

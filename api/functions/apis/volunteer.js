const {db} = require("../util/admin");

exports.getAllVolunteer = (request, response) => {
  db
      .collection("volunteer")
      .get()
      .then((data) => {
        const volunteer = [];
        data.forEach((doc) => {
          volunteer.push({
            volunteerId: doc.id,
            organization: doc.data().organization,
            description: doc.data().description,
          });
        });
        return response.json(volunteer);
      })
      .catch((err) => {
        return response.status(500).json({error: err.code});
      });
};

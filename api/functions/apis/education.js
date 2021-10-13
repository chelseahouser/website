const {db} = require("../util/admin");

exports.getAllEducation = (request, response) => {
  db
      .collection("education")
      .get()
      .then((data) => {
        const education = [];
        data.forEach((doc) => {
          education.push({
            educationId: doc.id,
            school: doc.data().school,
            degree: doc.data().degree,
            graduation: doc.data().graduation,
            description: doc.data().description,
          });
        });
        return response.json(education);
      })
      .catch((err) => {
        console.error(err);
        return response.status(500).json({error: err.code});
      });
};

const {db} = require("../util/admin");

exports.getAllCertifications = (request, response) => {
  db
      .collection("certifications")
      .get()
      .then((data) => {
        const certifications = [];
        data.forEach((doc) => {
          certifications.push({
            certificationId: doc.id,
            name: doc.data().name,
            date: doc.data().date,
          });
        });
        return response.json(certifications);
      })
      .catch((err) => {
        console.error(err);
        return response.status(500).json({error: err.code});
      });
};

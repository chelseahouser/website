const {db} = require("../util/admin");

exports.getAllSkills = (request, response) => {
  db
      .collection("skills")
      .get()
      .then((data) => {
        const skills = [];
        data.forEach((doc) => {
          skills.push({
            skillId: doc.id,
            name: doc.data().name,
            type: doc.data().type,
          });
        });
        return response.json(skills);
      })
      .catch((err) => {
        console.error(err);
        return response.status(500).json({error: err.code});
      });
};

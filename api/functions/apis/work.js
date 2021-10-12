const {db} = require("../util/admin");

exports.getAllWork = (request, response) => {
  db
      .collection("work")
      .get()
      .then((data) => {
        const work = [];
        data.forEach((doc) => {
          work.push({
            workId: doc.id,
            companyName: doc.data().CompanyName,
            title: doc.data().Title,
            description: doc.data().Description,
            startDate: doc.data().StartDate,
            endDate: doc.data().EndDate,
          });
        });
        return response.json(work);
      })
      .catch((err) => {
        console.error(err);
        return response.status(500).json({error: err.code});
      });
};

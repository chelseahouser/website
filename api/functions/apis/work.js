const {db} = require("../util/admin");

exports.getAllWork = (request, response) => {
  db
      .collection("work")
      .orderBy("startDate", "desc")
      .get()
      .then((data) => {
        const work = [];
        data.forEach((doc) => {
          work.push({
            workId: doc.id,
            companyName: doc.data().companyName,
            title: doc.data().title,
            description: doc.data().description,
            startDate: doc.data().startDate,
            endDate: doc.data().endDate,
            current: doc.data().current,
          });
        });
        return response.json(work);
      })
      .catch((err) => {
        console.error(err);
        return response.status(500).json({error: err.code});
      });
};

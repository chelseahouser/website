const { db } = require('../util/admin');

exports.getAllWork = (request, response) => {
	db
		.collection('work')
		.get()
		.then((data) => {
			let work = [];
			data.forEach((doc) => {
				work.push({
                    workId: doc.id,
                    companyName: doc.data().companyName,
					title: doc.data().title,
					description: doc.data().description,
					startDate: doc.data().startDate,
					endDate: doc.data().endDate,
				});
			});
			return response.json(work);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};
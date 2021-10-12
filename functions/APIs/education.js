const { db } = require('../util/admin');

exports.getAllEducation = (request, response) => {
	db
		.collection('education')
		.get()
		.then((data) => {
			let education = [];
			data.forEach((doc) => {
				education.push({
                    educationId: doc.id,
                    school: doc.data().School,
					degree: doc.data().Degree,
					graduation: doc.data().Graduation,
					description: doc.data().Description,
				});
			});
			return response.json(education);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};
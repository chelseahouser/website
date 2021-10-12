const { db } = require('../util/admin');

exports.getAllSkills = (request, response) => {
	db
		.collection('skills')
		.orderBy('createdAt', 'desc')
		.get()
		.then((data) => {
			let skills = [];
			data.forEach((doc) => {
				skills.push({
                    skillId: doc.id,
                    name: doc.data().Name,
					yearsExperience: doc.data().YearsExperience,
					type: doc.data().Type,
				});
			});
			return response.json(skills);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};
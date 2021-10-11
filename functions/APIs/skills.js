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
                    name: doc.data().name,
					yearsExperience: doc.data().yearsExperience,
					type: doc.data().type,
				});
			});
			return response.json(skills);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};
const { db } = require('../util/admin');

exports.getAllBlogs = (request, response) => {
	db
		.collection('blog')
		.orderBy('Date', 'desc')
		.get()
		.then((data) => {
			let blogs = [];
			data.forEach((doc) => {
				blogs.push({
                    blogId: doc.id,
                    title: doc.data().Title,
					post: doc.data().post,
					tags: doc.data().tags,
					sources: doc.data().sources
				});
			});
			return response.json(blogs);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};
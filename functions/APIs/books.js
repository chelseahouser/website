const { db } = require('../util/admin');

exports.getAllBooks = (request, response) => {
	db
		.collection('books')
		.get()
		.then((data) => {
			let books = [];
			data.forEach((doc) => {
				books.push({
                    bookId: doc.id,
                    title: doc.data().Title,
					author: doc.data().Author,
					description: doc.data().description,
					currentlyReading: doc.data().currentlyReading,
					completedReading: doc.data().completedReading,
					recommended: doc.data.recommendeded,
					toRead: doc.data().toRead,
				});
			});
			return response.json(books);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};
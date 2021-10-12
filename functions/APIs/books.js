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
					description: doc.data().Description,
					currentlyReading: doc.data().CurrentlyReading,
					completedReading: doc.data().CompletedReading,
					recommended: doc.data.Recommended,
					toRead: doc.data().ToRead,
				});
			});
			return response.json(books);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};
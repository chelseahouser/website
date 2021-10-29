const {db} = require("../util/admin");

exports.getAllBooks = (request, response) => {
  db
      .collection("books")
      .get()
      .then((data) => {
        const books = [];
        data.forEach((doc) => {
          books.push({
            bookId: doc.id,
            title: doc.data().title,
            author: doc.data().author,
            description: doc.data().description,
            currentlyReading: doc.data().currentlyReading,
            completedReading: doc.data().completedReading,
            recommended: doc.data().recommended,
            toRead: doc.data().toRead,
            link: doc.data().link,
          });
        });
        return response.json(books);
      })
      .catch((err) => {
        return response.status(500).json({error: err.code});
      });
};

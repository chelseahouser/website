const {db} = require("../util/admin");

exports.getAllBlogs = (request, response) => {
  db
      .collection("blog")
      .orderBy("Date", "desc")
      .get()
      .then((data) => {
        const blogs = [];
        data.forEach((doc) => {
          blogs.push({
            blogId: doc.id,
            title: doc.data().Title,
            post: doc.data().Post,
            tags: doc.data().Tags,
            sources: doc.data().Sources,
          });
        });
        return response.json(blogs);
      })
      .catch((err) => {
        console.error(err);
        return response.status(500).json({error: err.code});
      });
};

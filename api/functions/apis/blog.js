const {db} = require("../util/admin");

exports.getAllBlogs = (request, response) => {
  db
      .collection("blog")
      .get()
      .then((data) => {
        const blogs = [];
        data.forEach((doc) => {
          blogs.push({
            blogId: doc.id,
            title: doc.data().title,
            post: doc.data().post,
            tags: doc.data().tags,
            sources: doc.data().sources,
            date: doc.data().date,
            description: doc.data().description,
          });
        });
        return response.json(blogs);
      })
      .catch((err) => {
        return response.status(500).json({error: err.code});
      });
};

exports.getCountOfBlogs = (request, response) => {
  db
      .collection("blog")
      .orderBy("date", "desc")
      .limit(request.params.count*1)
      .get()
      .then((data) => {
        const blogs = [];
        data.forEach((doc) => {
          blogs.push({
            blogId: doc.id,
            title: doc.data().title,
            post: doc.data().post,
            tags: doc.data().tags,
            sources: doc.data().sources,
            date: doc.data().date,
            description: doc.data().description,
          });
        });
        return response.json(blogs);
      })
      .catch((err) => {
        return response.status(500).json({error: err.code});
      });
};

exports.getBlogById = (request, response) => {
  db
      .collection("blog")
      .doc(`${request.params.blogid}`)
      .get()
      .then((data) => {
        if (!data.exists || data == null || data == undefined) {
          return response.status(404).json({message: "Blog post not found."});
        }
        return response.json({
          blogId: data.id,
          title: data.data().title,
          post: data.data().post,
          tags: data.data().tags,
          sources: data.data().sources,
          date: data.data().date,
          description: data.data().description,
        });
      })
      .catch((err) => {
        return response.status(500).json({error: err.code});
      });
};

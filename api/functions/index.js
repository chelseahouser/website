const functions = require("firebase-functions");
const app = require("express")();

app.use(function(req, res, next) {
  res.set("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// const {
//   getAllBlogs,
// } = require('./apis/blog');

// app.get('/blog', getAllBlogs);

const {
  getAllBooks,
} = require("./apis/books");

app.get("/book", getAllBooks);

// const {
//   getAllEducation,
// } = require('./apis/education');

// app.get('/education', getAllEducation);


// const {
//   getAllSkills,
// } = require('./apis/skills');

// app.get('/skill', getAllSkills);

// const {
//   getAllWork,
// } = require('./apis/work');

// app.get('/work', getAllWork);

exports.api = functions.https.onRequest(app);

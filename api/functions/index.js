const functions = require("firebase-functions");
const app = require("express")();

app.use(function(req, res, next) {
  res.set("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const {
  getAllBlogs,
  getBlogById,
} = require("./apis/blog");

app.get("/blogs", getAllBlogs);
app.get("/blog/:blogid", getBlogById);

const {
  getAllBooks,
} = require("./apis/book");

app.get("/book", getAllBooks);

const {
  getAllEducation,
} = require("./apis/education");

app.get("/education", getAllEducation);

const {
  getAllCertifications,
} = require("./apis/certification");

app.get("/certification", getAllCertifications);

const {
  getAllSkills,
} = require("./apis/skill");

app.get("/skill", getAllSkills);

const {
  getAllWork,
} = require("./apis/work");

app.get("/work", getAllWork);

const {
  getAllVolunteer,
} = require("./apis/volunteer");

app.get("/volunteer", getAllVolunteer);

const {
  saveContactMessage,
} = require("./apis/contact");

app.post("/contact", saveContactMessage);

exports.api = functions.https.onRequest(app);

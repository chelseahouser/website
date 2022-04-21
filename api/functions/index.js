const functions = require("firebase-functions");
const app = require("express")();
const cors = require("cors")({origin: "*"});

app.use(function(req, res, next) {
  cors(req, res, () => {
    next();
  });
});

const {
  getAllBlogs,
  getBlogById,
  getCountOfBlogs,
} = require("./apis/blog");

app.get("/blogs", getAllBlogs);
app.get("/blogs/:count", getCountOfBlogs);
app.get("/blog/:blogid", getBlogById);

const {
  subscribe,
  unsubscribe,
} = require("./apis/subscription");

app.post("/subscribe", subscribe);
app.post("/unsubscribe", unsubscribe);

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

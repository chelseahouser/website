const functions = require('firebase-functions');
const app = require('express')();

// const {
//     loginUser
// } = require('./APIs/users')

// // Users
// app.post('/login', loginUser);

const {
    getAllBlogs
} = require('./APIs/blog')

app.get('/blogPosts', getAllBlogs);

const {
    getAllBooks
} = require('./APIs/books')

app.get('/allBooks', getAllBooks);

const {
    getAllEducation
} = require('./APIs/education')

app.get('/education', getAllEducation);


const {
    getAllSkills
} = require('./APIs/skills')

app.get('/skills', getAllSkills);

const {
    getAllWork
} = require('./APIs/work')

app.get('/work', getAllWork);

exports.api = functions.https.onRequest(app);
const functions = require('firebase-functions');
const app = require('express')();

const {
    getAllSkills
} = require('./APIs/skills')

app.get('/skills', getAllSkills);
exports.api = functions.https.onRequest(app);
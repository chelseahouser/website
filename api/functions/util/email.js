const nodemailer = require("nodemailer");
const functions = require("firebase-functions");

module.exports.transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: functions.config().api.email_username,
    pass: functions.config().api.email_password,
  },
  secure: true,
});

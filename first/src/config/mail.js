const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
    host:"sandbox.smtp.mailtrap.io",// "smtp.example.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "9bbffbd4f98e41",
      pass: "3b566024d724b9",
    },
  });
const transporter = require('../config/mail')

module.exports = (()=>{
    var message = {
        from: "sender@server.com",
        to: "receiver@sender.com",
        subject: "Message title",
        text: "Plaintext version of the message",
        html: "<p>HTML version of the message1</p>",
      };
      transporter.sendMail(message)
})



  
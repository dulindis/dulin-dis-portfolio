const nodemailer = require('nodemailer');
const config = require('../../config.js');

var transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  sender:'gmail',
  auth: {
    user: config.nodemailerConfig.user,
    pass:config.nodemailerConfig.pass,
  }
});

async function sendEmailMessage (data){
  const {email, subject, message} = data;
  const mailOptions = {
    from: config.nodemailerConfig.user,
    to:email,
    subject: subject,
    text:'we ceceived your message',
  };
     const result = await transport.sendMail(mailOptions, (error, info) => {
      if (!error) return {status:'ok', data:info};
      return {status:'error',data:'something went wrong', error:error}      

  });
  return result
}

module.exports = sendEmailMessage
const express = require('express');
const nodemailer = require('nodemailer');
const config = require('../config');

// const sendEmailMessage = require('../controllers/Mailing/contact-controller.jsx');
const mailingController = express.Router();

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,

  // sender:'gmail',
  // service:"gmail",
  auth: {
    user: config.nodemailerConfig.user,
    pass:config.nodemailerConfig.pass,
  },
  tls:{
    rejectUnauthorized:false
  }
});


mailingController.post('/send',  async (req, res) => {
 try {
  console.log("body",req.body);
  const {email,name, subject, message } = req.body;


  const mailOptions = {
    from:email,

    to: config.nodemailerConfig.user,
    // subject: subject,
    subject: 'you received a new message from: ' + name,
    text:`Email: ${email}, Subject: ${subject}, Message: ${message}`
  
  };

transporter.sendMail(mailOptions, (error, info) => {
   if (error) {
    console.log(mailOptions);
    res.json({status:'error',sent:false, data:'something went wrong', error:error})
  } else {
    console.log(mailOptions);

   res.json({status:'ok',sent:true,  data:info, body:req.body});

  }
  transporter.close();

});

 } catch (error) {
   res.send(500).json('something went wrong', error)
 }
})


module.exports = {
    routes:mailingController
}





































// const express = require('express');
// const nodemailer = require('nodemailer');
// const xoauth2 = require('xoauth2');
// const config = require('../config.js');
// const { google } = require('googleapis');
// const { OAuth2 } = google.auth;

// const router = express.Router();

// router.post('/send', (req, res) => {
//     let data = req.body;

//     const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';

//     const oauth2Client = new OAuth2(
//       config.mailingServiceConfig.MAILING_SERVICE_CLIENT_ID,
//       config.mailingServiceConfig.MAILING_SERVICE_CLIENT_SECRET,
//       OAUTH_PLAYGROUND
//     );

//     oauth2Client.setCredentials({
//       refresh_token: config.mailingServiceConfig.MAILING_SERVICE_REFRESH_TOKEN,
//     });
//     const accessToken = oauth2Client.getAccessToken();


//     const mail = {
//       from: data.email,
//       to: config.nodemailerConfig.user,
//       subject: `Message from: ${data.email}. Subject:${data.subject}`,
//       message:data.message
//     }

//     /**
//  * Send Email
//  */
  


//     let transporter = nodemailer.createTransport({
//       service:'gmail',
//       auth: {
//         // // xoauth2: xoauth2.createXOAuth2Generator(config.nodemailerConfig)
//         // type: 'OAuth2',
//         // user: config.nodemailerConfig.user,
//         // pass:config.nodemailerConfig.pass,
//         // clientId: config.mailingServiceConfig.MAILING_SERVICE_CLIENT_ID,
//         // clientSecret: config.mailingServiceConfig.MAILING_SERVICE_CLIENT_SECRET,
//         // refreshToken: config.mailingServiceConfig.MAILING_SERVICE_REFRESH_TOKEN,
//         // accessToken,
//         XOAuth2:{
//           user: config.nodemailerConfig.user,
//           clientId: config.mailingServiceConfig.MAILING_SERVICE_CLIENT_ID,
//           clientSecret: config.mailingServiceConfig.MAILING_SERVICE_CLIENT_SECRET,
//           refreshToken: config.mailingServiceConfig.MAILING_SERVICE_REFRESH_TOKEN,
//         }
//       }
    
//     })
    

//     transporter.sendMail(mail,(err,info)=>{
//       if(err) {console.log('error',err);return err};
//       return     res.status(200).json({ message: 'email sent successfully',info });

//     });
//   });



// module.exports = {
//     routes:router
// }
const express = require('express');
const nodemailer = require('nodemailer');

const {Mailing} = require('../controllers/Mailing/contact-controller.jsx');
// import { SOME_THING_WENT_WRONG } from '../store/constant';
// import { generateServerErrorCode } from '../store/utils';

const mailingController = express.Router();

/**
 * POST/ User subscribe to App
 */
 mailingController.post('/send', (req, res) => {
  try {

   Mailing.sendEmail( req);
    // Mailing.sendEmail(req.query);

    res.status(200).json({ message: 'email sent successfully' });
  } catch (e) {
    res.status(500).json({message:e.message})
  }
});


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
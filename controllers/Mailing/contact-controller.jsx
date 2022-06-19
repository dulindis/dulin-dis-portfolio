const nodemailer = require('nodemailer');
const ejs = require( 'ejs');
const config = require('../../config.js');
const { google } = require('googleapis');
const { OAuth2 } = google.auth;
const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';

const Mailing = {};

const oauth2Client = new OAuth2(
    config.mailingServiceConfig.MAILING_SERVICE_CLIENT_ID,
    config.mailingServiceConfig.MAILING_SERVICE_CLIENT_SECRET,
    OAUTH_PLAYGROUND
  );
  oauth2Client.setCredentials({
    refresh_token: config.mailingServiceConfig.MAILING_SERVICE_REFRESH_TOKEN,
  });

  const TEMPLATES = {
    contactCustomer: {
      fileName: 'contactCustomer.ejs',
      subject: 'Dulin Dis received your message.',
    },
    contactOwner:{
      filename:'contactOwner.ejs',
      subject:'New message from customer.'
    }
  };

  // const sendEmailMessage = async data => {
  //   try {

  //   }
  // }

 Mailing.sendEmail = async data => {

  try {
    const accessToken = await oauth2Client.getAccessToken();
    const smtpTransport = nodemailer.createTransport({
      // service: 'gmail',
      // service: 'SendPulse',
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: config.nodemailerConfig.user,
        clientId: config.mailingServiceConfig.MAILING_SERVICE_CLIENT_ID,
        clientSecret: config.mailingServiceConfig.MAILING_SERVICE_CLIENT_SECRET,
        refreshToken: config.mailingServiceConfig.MAILING_SERVICE_REFRESH_TOKEN,
        accessToken,
        expires: 1484314697598,

      },
      tls: {
        rejectUnauthorized: false
    }
    });
    // smtpTransport.set("oauth2_provision_cb", (user, renew, callback) => {
    //   let accessToken = userTokens[user];
    //   if (!accessToken) {
    //     return callback(new Error("Unknown user"));
    //   } else {
    //     return callback(null, accessToken);
    //   }
    // });


    const dataToSend = data.body;
    // const filePath = `${__dirname}/templates/${TEMPLATES[contactOwner].fileName}`;


    const mailOptions = {
      from: dataToSend.email, 
      to: config.nodemailerConfig.user,
      subject: dataToSend.subject,
      text:dataToSend.message,
    };

   const result =  await smtpTransport.sendMail(mailOptions, (err, info) => {
      if (err) {console.log('err',err); return err};
      console.log('info:',info)
      return info;
    
    })
 return result
    // ejs.renderFile(`/templates/contactOwner.ejs`, dataToSend, (e, content) => {
    //       if (e) return e;

    //       const mailOptions = {
    //         from: dataToSend.email, 
    //         to: config.nodemailerConfig.user,
    //         subject: TEMPLATES[contactOwner].subject,
    //         message:dataToSend.message,
    //         html: content,
    //       };
    //     smtpTransport.sendMail(mailOptions, (err, info) => {
    //     if (err) {console.log('err',err); return err};
    //     console.log('info:',info)
    //     return info;
    //   });

    //     });



    // const mailOptions = {
    //     from: dataToSend.email,
    //     to: config.nodemailerConfig.user,
    //     subject:'You received new message from ${dataToSend.name} (${dataToSend.email}) in your Dulin Dis Art mailbox',
    //     text:dataToSend.message,
    //     html: "<div><h1>New message from: `${dataToSend.email}`</h1><div><h2>Subject: ${dataToSend.subject}</h2><p>${dataToSend.message}</p></div></div>"
    // };

    //    smtpTransport.sendMail(mailOptions, (err, info) => {
    //     if (err) {console.log('err',err); return err};
    //     console.log('info:',info)
    //     return info;
    //   });

    // const filePath = `${__dirname}/templates/${TEMPLATES[data.template].fileName}`;
    // ejs.renderFile(`/templates/contactCustomer.ejs`, data.query, dataToSend, (e, content) => {
    //   if (e) return e;

    //   const mailOptions = {
    //     from: config.nodemailerConfig.user,
    //     to: dataToSend.email,
    //     subject: TEMPLATES[contactCustomer].subject,
    //     message:dataToSend.message,
    //     html: content,
    //   };

    //   smtpTransport.sendMail(mailOptions, (err, info) => {
    //     if (err) return err;
    //     return info;
    //   });

    // });

    // ejs.renderFile(`templates/contactOwner.ejs`, data.query, dataToSend, (e, content) => {
    //   if (e) return e;

    //   const mailOptions = {
    //     from: config.nodemailerConfig.user,
    //     to: dataToSend.email,
    //     subject: TEMPLATES[contactOwner].subject,
    //     message:dataToSend.message,
    //     html: content,
    //   };
      
    //   smtpTransport.sendMail(mailOptions, (err, info) => {
    //     if (err) return err;
    //     return info;
    //   });
    // });




      } catch (e) {
        console.log('error occured here', e)
        return e
      }

  };
  // export default Mailing;
  module.exports = {
    Mailing
  }
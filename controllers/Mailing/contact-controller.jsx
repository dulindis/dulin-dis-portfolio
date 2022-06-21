const nodemailer = require('nodemailer');
const config = require('../../config.js');

// let mailTransporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//         user: config.nodemailerConfig.user,
//         pass:config.nodemailerConfig.pass,
//   }
// });

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
    // from: email, 
    // to: config.nodemailerConfig.user,
    subject: subject,
    text:'we ceceived your message',
    // html:contentHtml
  };

     const result = await transport.sendMail(mailOptions, (error, info) => {
      if (!error) return {status:'ok', data:info};
      return {status:'error',data:'something went wrong', error:error}      
      
      // if (error) {
      //     return console.log(error);
      // }
      // console.log('Message sent: %s', info.messageId);
  });
  return result

}


module.exports = sendEmailMessage

// const config = require('../../config.js');
// const { google } = require('googleapis');
 
// const oauth2Client = new google.auth.OAuth2(
//   config.mailingServiceConfig.MAILING_SERVICE_CLIENT_ID,
//   config.mailingServiceConfig.MAILING_SERVICE_CLIENT_SECRET,
//   config.mailingServiceConfig.MAILING_REDIRECT_URI
// );

// oauth2Client.setCredentials({
//   refresh_token: config.mailingServiceConfig.MAILING_SERVICE_REFRESH_TOKEN,
// });

// const sendEmailMessage = async data => {
//   try{

//     const accessToken = await oauth2Client.getAccessToken();

//     let transporter = nodemailer.createTransport({
//       service:'gmail',
//       auth: {
//         type: "OAuth2",
//         user: config.nodemailerConfig.user,
//         pass:config.nodemailerConfig.pass,
//         accessToken
//       },
//       tls: {rejectUnauthorized: false}

//     });


//     const {email, subject, message} = data;
//     const mailOptions = {
//       from: email, 
//       to: config.nodemailerConfig.user,
//       // to: 'tavayir869@runqx.com',
//       subject: subject,
//       text:message,
//       // html:contentHtml
//     };
  

// //  const result = await transporter.sendMail(mailOptions, (error, info) => {
// //       let emailMessage={message,mailStatus};
// //               if (error)  {
// //                 emailMessage.message = "there was an error :-(, and it was this: " + error.message;
// //                 emailMessage.mailStatus=error
// //                 // return error;

// //             }  else {
// //               emailMessage.message = "Message sent: " + info.response;
// //               emailMessage.mailStatus=info;
// //               // return info;
// //           }
// //           transporter.close();
// //           return emailMessage
// //       })
// const result = await transporter.sendMail(mailOption, (error, info) => {
//   if (error) {
//       return console.log(error);
//   } else{
//       console.log('Email has been sent');
//       res.send(info);
//   }
// });


// console.log('result',result)
//     return result;


//     // const transporter = nodemailer.createTransport({
//     //   service:'gmail',
//     //   name:"smtp.gmail.com",
//     //   host: "smtp.gmail.com",
//     //   port: 465,
//     //   secure: true,
//     //   auth: {
//     //     type: 'OAuth2',
//     //     user: config.nodemailerConfig.user,
//     //     clientId: config.mailingServiceConfig.MAILING_SERVICE_CLIENT_ID,
//     //     clientSecret: config.mailingServiceConfig.MAILING_SERVICE_CLIENT_SECRET,
//     //     refreshToken: config.mailingServiceConfig.MAILING_SERVICE_REFRESH_TOKEN,
//     //     accessToken:accessToken,
//     //     // expires: 1484314697598,
//     //   }
//     // });
    
//     // const accessToken = await oauth2Client.getAccessToken();
//     // const transporter = nodemailer.createTransport({
//     //   service:'gmail',
//     //   name:"smtp.gmail.com",
//     //   host: "smtp.gmail.com",
//     //   port: 465,
//     //   secure: true,
//     //   auth: {
//     //     type: 'OAuth2',
//     //     user: config.nodemailerConfig.user,
//     //     clientId: config.mailingServiceConfig.MAILING_SERVICE_CLIENT_ID,
//     //     clientSecret: config.mailingServiceConfig.MAILING_SERVICE_CLIENT_SECRET,
//     //     refreshToken: config.mailingServiceConfig.MAILING_SERVICE_REFRESH_TOKEN,
//     //     accessToken:accessToken,
//     //     // expires: 1484314697598,
//     //   }
//     // });
  
//     // const result = await transporter.sendMail(mailOptions, (error, info) => {
//     //   let emailMessage={message,mailStatus};
//     //           if (error)  {
//     //             emailMessage.message = "there was an error :-(, and it was this: " + error.message;
//     //             emailMessage.mailStatus=error
//     //             // return error;

//     //         }  else {
//     //           emailMessage.message = "Message sent: " + info.response;
//     //           emailMessage.mailStatus=info;
//     //           // return info;
//     //       }
//     //       transporter.close();
//     //       return emailMessage
//     //   })
//     //   return result

//   } catch (error)  {
//     return error
//   }
// }

// module.exports = 
//   sendEmailMessage






















// const Mailing = {};

// const oauth2Client = new OAuth2(
//     config.mailingServiceConfig.MAILING_SERVICE_CLIENT_ID,
//     config.mailingServiceConfig.MAILING_SERVICE_CLIENT_SECRET,
//     OAUTH_PLAYGROUND
//   );
//   oauth2Client.setCredentials({
//     refresh_token: config.mailingServiceConfig.MAILING_SERVICE_REFRESH_TOKEN,
//   });

//   const TEMPLATES = {
//     contactCustomer: {
//       fileName: 'contactCustomer.ejs',
//       subject: 'Dulin Dis received your message.',
//     },
//     contactOwner:{
//       filename:'contactOwner.ejs',
//       subject:'New message from customer.'
//     }
//   };

//   // const sendEmailMessage = async data => {
//   //   try {

//   //   }
//   // }

//  Mailing.sendEmail = async data => {

//   try {
//     const accessToken = await oauth2Client.getAccessToken();
//     const smtpTransport = nodemailer.createTransport({
//       // service: 'gmail',
//       // service: 'SendPulse',
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         type: 'OAuth2',
//         user: config.nodemailerConfig.user,
//         clientId: config.mailingServiceConfig.MAILING_SERVICE_CLIENT_ID,
//         clientSecret: config.mailingServiceConfig.MAILING_SERVICE_CLIENT_SECRET,
//         refreshToken: config.mailingServiceConfig.MAILING_SERVICE_REFRESH_TOKEN,
//         accessToken,
//         expires: 1484314697598,

//       },
//       tls: {
//         rejectUnauthorized: false
//     }
//     });
//     // smtpTransport.set("oauth2_provision_cb", (user, renew, callback) => {
//     //   let accessToken = userTokens[user];
//     //   if (!accessToken) {
//     //     return callback(new Error("Unknown user"));
//     //   } else {
//     //     return callback(null, accessToken);
//     //   }
//     // });


//     const dataToSend = data.body;
//     // const filePath = `${__dirname}/templates/${TEMPLATES[contactOwner].fileName}`;


//     const mailOptions = {
//       from: dataToSend.email, 
//       to: config.nodemailerConfig.user,
//       subject: dataToSend.subject,
//       text:dataToSend.message,
//     };

//    const result =  await smtpTransport.sendMail(mailOptions, (err, info) => {
//       if (err) {console.log('err',err); return err};
//       console.log('info:',info)
//       return info;
    
//     })
//  return result
//     // ejs.renderFile(`/templates/contactOwner.ejs`, dataToSend, (e, content) => {
//     //       if (e) return e;

//     //       const mailOptions = {
//     //         from: dataToSend.email, 
//     //         to: config.nodemailerConfig.user,
//     //         subject: TEMPLATES[contactOwner].subject,
//     //         message:dataToSend.message,
//     //         html: content,
//     //       };
//     //     smtpTransport.sendMail(mailOptions, (err, info) => {
//     //     if (err) {console.log('err',err); return err};
//     //     console.log('info:',info)
//     //     return info;
//     //   });

//     //     });



//     // const mailOptions = {
//     //     from: dataToSend.email,
//     //     to: config.nodemailerConfig.user,
//     //     subject:'You received new message from ${dataToSend.name} (${dataToSend.email}) in your Dulin Dis Art mailbox',
//     //     text:dataToSend.message,
//     //     html: "<div><h1>New message from: `${dataToSend.email}`</h1><div><h2>Subject: ${dataToSend.subject}</h2><p>${dataToSend.message}</p></div></div>"
//     // };

//     //    smtpTransport.sendMail(mailOptions, (err, info) => {
//     //     if (err) {console.log('err',err); return err};
//     //     console.log('info:',info)
//     //     return info;
//     //   });

//     // const filePath = `${__dirname}/templates/${TEMPLATES[data.template].fileName}`;
//     // ejs.renderFile(`/templates/contactCustomer.ejs`, data.query, dataToSend, (e, content) => {
//     //   if (e) return e;

//     //   const mailOptions = {
//     //     from: config.nodemailerConfig.user,
//     //     to: dataToSend.email,
//     //     subject: TEMPLATES[contactCustomer].subject,
//     //     message:dataToSend.message,
//     //     html: content,
//     //   };

//     //   smtpTransport.sendMail(mailOptions, (err, info) => {
//     //     if (err) return err;
//     //     return info;
//     //   });

//     // });

//     // ejs.renderFile(`templates/contactOwner.ejs`, data.query, dataToSend, (e, content) => {
//     //   if (e) return e;

//     //   const mailOptions = {
//     //     from: config.nodemailerConfig.user,
//     //     to: dataToSend.email,
//     //     subject: TEMPLATES[contactOwner].subject,
//     //     message:dataToSend.message,
//     //     html: content,
//     //   };
      
//     //   smtpTransport.sendMail(mailOptions, (err, info) => {
//     //     if (err) return err;
//     //     return info;
//     //   });
//     // });




//       } catch (e) {
//         console.log('error occured here', e)
//         return e
//       }

//   };
//   // export default Mailing;
//   module.exports = {
//     Mailing
//   }
'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const config = require('./config');
const artworkRoutes = require('./routes/artwork-routes');
const contactRoutes = require('./routes/contact-routes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', artworkRoutes.routes);
app.use('/api',contactRoutes.routes);
// app.post('/send', (req, res) => {
//     let data = req.body;

//     let transporter = nodemailer.createTransport("SMTP",{
//       service:'Gmail',
//       auth: {
//         xoauth2: xoauth2.createXOAuth2Generator(config.nodemailerConfig)
//     }
    
//     })

//     const mail = {
//       from: data.email,
//       to: config.nodemailerConfig.user,
//       subject: `Message from: ${data.mail}`,
//       html: `<>
//         <h3>${data.subject}</h3>
//         <ul>
//           <li>${data.name}</li>
//           <li>${data.subject}</li>
//           <li>${data.mail}</li>
//         </ul>
//         <p>
//           ${data.message}
//         </p>
//       </>`
//     }
    
//     transporter.sendMail(mail, (error, response) => {
//       if (error) {
//         res.send(error)
//       } else {
//         res.send('success')
//       }
//       transporter.close();
//     });
  
//   });

  

app.listen(config.port,()=>console.log('App is listening on url http://localhost:'+config.port));

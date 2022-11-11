'use strict';
const express = require('express');
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");
const compression = require("compression");
const cors = require('cors');
const bodyParser = require('body-parser');

const config = require('./config');
const artworkRoutes = require('./routes/artwork-routes');
const contactRoutes = require('./routes/contact-routes.jsx');

const PORT = process.env.PORT || config.app.port;
const HOST = process.env.HOST || config.app.host;
const HOST_URI = process.env.HOST_URI || config.app.hostUri

const app = express();

app.use(express.json());
app.use(compression());

app.use((req, res, next) => {  
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "OPTIONS, HEAD, GET, PUT, POST, DELETE"
  );  
  
  next();
});

app.use(morgan("tiny"));
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: false, limit: "25mb" }));
app.use(bodyParser.json());

app.use('/api', artworkRoutes.routes);
app.use('/api',contactRoutes.routes);

// app.use(express.static(path.join(__dirname, "/client/public")));

if (process.env.NODE_ENV === `production` || process.env.NODE_ENV === `staging`) {
// <<<<<<< HEAD
  app.use(express.static(path.join(__dirname, "/client/build")));
// =======
//   app.use(express.static(path.join(__dirname, "client/build")));
// >>>>>>> 908f685a57985ce5f2004dde64e9a3592c38a663
  app.get(`*`, (req, res) => {
  res.sendFile(path.join(__dirname + `/client/build/index.html`));
  });
 }

 
app.listen(PORT,HOST, ()=>console.log(`App is listening on host ${HOST} and port: ${PORT}`));

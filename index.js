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


const app = express();

app.use(express.json());
app.use(compression());
app.use((req, res, next) => {  
  res.header(
    "Access-Control-Allow-Methods",
    "OPTIONS, HEAD, GET, PUT, POST, DELETE"
  );  
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
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

// if (process.env.NODE_ENV === "developement") {
//   app.use("/", express.static(__dirname + "/"));
// }

app.use(bodyParser.json());
app.use('/api', artworkRoutes.routes);
app.use('/api',contactRoutes.routes);


// The section below is to serve React on heroku server
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  console.log('we are on production!')

  app.use(express.static(path.resolve(__dirname, "/client/build")));
   // Handle React routing, return all requests to React app  
   app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "client","build", "index.html"));
  });
} 


app.listen(PORT,HOST, ()=>console.log(`App is listening on url http://${HOST}:${PORT}`));

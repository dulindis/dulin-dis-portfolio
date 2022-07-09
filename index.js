'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const config = require('./config');
const artworkRoutes = require('./routes/artwork-routes');
const contactRoutes = require('./routes/contact-routes.jsx');

const PORT = process.env.PORT || config.port
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/api', artworkRoutes.routes);
app.use('/api',contactRoutes.routes);

if(process.env.NODE_ENV==='production') {
    app.use(express.static('./client/build'))
}
app.listen(PORT,()=>console.log('App is listening on url http://localhost:'+PORT));

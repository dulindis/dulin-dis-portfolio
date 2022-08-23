'use strict';

const dotenv = require('dotenv');
const assert = require('assert');
const env = process.env.NODE_ENV;

dotenv.config();
const {
    PORT,
    HOST,
    HOST_URI_DEV,
    HOST_URI_PROD,
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
    MEASUREMENT_ID,
    NODEMAILER_USER,
    NODEMAILER_PASS,
    MAILING_PROJECT_ID,
    MAILING_SENDER_EMAIL_ADDRESS,
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN,
    MAILING_SERVICE_ACCESS_TOKEN,
    MAILING_REDIRECT_URI
}=process.env;

assert(PORT,'PORT is required')
assert(HOST,'HOST is required');

let app = {};
if (env==="development" || env==="test") {
    app = {
        port:PORT,
        host:HOST,
        hostUri: HOST_URI_DEV,
    }

} else {
    app={
        port:process.env.PORT,
        hostUri:process.env.HOST_URI_PROD,
        host: process.env.HOST
    }
}

module.exports={
    port:PORT,
    host:HOST,
    // url:HOST_URL,
    app:app,
    firebaseConfig: {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID,
        measurementId: MEASUREMENT_ID
    },
    nodemailerConfig: {
        user: NODEMAILER_USER,
        pass: NODEMAILER_PASS
    },
    mailingServiceConfig:{
        MAILING_SERVICE_CLIENT_ID,
        MAILING_SERVICE_CLIENT_SECRET,
        MAILING_SERVICE_REFRESH_TOKEN,
        MAILING_SERVICE_ACCESS_TOKEN,
        MAILING_REDIRECT_URI
    }
}
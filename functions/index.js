const functions = require('firebase-functions');
const express = require('express');

// We have to import the built version of the server middleware.
const { sapperServer } = require('./__sapper__/build/server/server');

exports.ssr = functions.https.onRequest(sapperServer);
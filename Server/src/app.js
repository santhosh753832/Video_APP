"use strict"
const express = require('express');
const app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
var cors = require('cors');
app.use(cors());
app.use('/api', require('./videoApi/router'));
app.use(express.static('images'))

module.exports = app;
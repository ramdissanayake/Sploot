const mongoose = require('mongoose'),
requestM = require('../models/requestM');

newRequest = (req,res,next) => {
    console.log('New Request Received');
}

exports.name="hi";

module.exports.newRequest = newRequest;
const express = require('express');
const requests = express.Router();
const parser = require('body-parser');

// Imports the relevant controller 
const Controller = require('../controllers/requestC');


// Handles the child routers for the main router /requests
requests.route('/')
.post(parser.urlencoded(),(req,res,next)=>{
    Controller.newRequest(req,res,next);
})
.get( (req,res)=>{
    //Code here
})
.delete()
.put();

module.exports = requests;
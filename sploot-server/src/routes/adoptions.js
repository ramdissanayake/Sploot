const express = require('express');
const adoptions = express.Router({ mergeParams: true });
const parser = require('body-parser');
const multer = require('multer');
const withAuth = require('../middleware/withauth');
// const withOwner = require('../middleware/withowner');
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./public/adoptions')
    },
    filename: function(req,file,cb){
        cb(null,req.body.stamp+'-'+Date.now())
    }
})
const upload = multer({storage:storage});

// Imports the relevant controller 
const   Controller = require('../controllers/adoptionC');
adoptions.use(parser.json())


// Handles the child routers for the main router /requests by ID ----------------------------------------------------
adoptions.get('/show/:id?', 
(req,res,next)=>{
    console.log(req.body)
    // Changes request path if no ID was specified as a Parameter
    req.path=='/show/'|| req.path=='/show/all'?req.params.id="0":req.params.id=req.params.id;
    Controller.getAdoption(req,res,next);
  
}); 
// --------------------------------------------------------------------------------------------------------------------

// Saves new adoption entry=----------------------------------------------------------------------------------------------
adoptions.post('/new',withAuth,upload.array('picture'), 
(req,res,next)=>{
    console.log(req.body)
    Controller.newAnimal(req.body,res)
});
//------------------------------------------------------------------------------------------------------------------
//Hadnles the child routers for fetching static assets of requests--------------------------------------------------
adoptions.get('/static/:stamp?',
(req,res,next)=>{
    console.log('Fetch Static for'+req.params.stamp);
    Controller.serveStatic(req.params.stamp,res);
}
)
//------------------------------------------------------------------------------------------------------------------




module.exports = adoptions;

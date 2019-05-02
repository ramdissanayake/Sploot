const express = require('express');
const requests = express.Router({ mergeParams: true });
const parser = require('body-parser');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./public/requests')
    },
    filename: function(req,file,cb){
        cb(null,req.body.stamp+'-'+Date.now())
    }
})
const upload = multer({storage:storage});
// Imports the relevant controller 
const   Controller = require('../controllers/requestC');
requests.use(parser.json())


// Handles the child routers for the main router /requests by ID ----------------------------------------------------
    requests.get('/show/:id?', 
        (req,res,next)=>{
            // Changes request path if no ID was specified as a Parameter
            req.path=='/show/'|| req.path=='/show/all'?req.params.id="0":req.params.id=req.params.id;
            Controller.getRequest(req,res,next);
          
        });
    
// ------------------------------------------------------------------------------------------------------------------
// Handles the child routers for the main router /requests by type --------------------------------------------------
    requests.get('/location/:location?',
        (req,res,next)=>{
            req.path=='/location/'|| req.path=='loaction/all'?req.params.loc="0":req.params.loc=req.params.loc;
            Controller.byLocation(req,res,next);
            console.log(req.body);
       
        });
// -----------------------------------------------------------------------------------------------------------------
// Handles the child routers for Inserting new requests ------------------------------------------------------------
    requests.post('/new', upload.array('picture'),
        (req,res,next)=>{
            console.log(req.body);
            Controller.newAnimal(req.body);
        });


//------------------------------------------------------------------------------------------------------------------
//Hadnles the child routers for fetching static assets of requests--------------------------------------------------
    requests.get('/static/:stamp?',
    (req,res,next)=>{
        console.log('Fetch Static for'+req.params.stamp);
        Controller.serveStatic(req.params.stamp,res);
    }
    )
//------------------------------------------------------------------------------------------------------------------



module.exports = requests;

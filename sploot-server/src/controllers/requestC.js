const mongoose = require('mongoose'),
requestM = require('../models/requestM');

// Retrieves Requests from the rescueRequests Collection
getRequest = (req,res,next) => {
    console.log('Showing Requests on  ' + req.path);
    // Test for Show all
    req.params.id == 0?
    
    (requestM.find({}, function(err,result){
        res.json(result);
        console.log('Fetched all documents');
    }))
    :(requestM.findOne({id:req.params.id}, function(err,result){
        res.json(result)
        console.log('Fetched Request by ID'+ req.params.id);
    
    }));
}

//Retrieves requests by location
byLocation = (req,res,next)=>{
    res.json('Showing by Location')

}


module.exports.getRequest = getRequest;
module.exports.byLocation = byLocation;
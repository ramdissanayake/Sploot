const mongoose = require('mongoose'),
requestM = require('../models/requestM');

// Retrieves Requests from the rescueRequests Collection-----------------------------------------------------------
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
//------------------------------------------------------------------------------------------------------------------
//Retrieves requests by location------------------------------------------------------------------------------------
byLocation = (req,res,next)=>{
    res.json({body:'Showing by Location'})
}

//------------------------------------------------------------------------------------------------------------------
//Writes a new animal request to database---------------------------------------------------------------------------
newAnimal = (form)=>{
    console.log(form);
}
//todo: Check the animal for similar entries
//todo: initiate automated rescuer lookup


module.exports.getRequest = getRequest;
module.exports.byLocation = byLocation;
module.exports.newAnimal = newAnimal;
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
    :(requestM.findOne({_id:req.params.id}, function(err,result){
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
    console.log(form.title);
    const requestNew = new requestM({
        title:form.title,
        location:form.location,
        track:form.track,
        contact:form.contact,
        medical:form.medical,
        lost:form.lost,
        tresspassable:form.tresspassable,
        aggression:form.aggression,
        trackingid:000,
        additional:form.additional
    });

    requestNew.save().then(()=>console.log("Performed IO on Database")).catch((err)=>console.log(err));
}
//todo: Check the animal for similar entries
//todo: initiate automated rescuer lookup
//todo: initiate animal tracker for this id


module.exports. getRequest = getRequest;
module.exports.byLocation = byLocation;
module.exports.newAnimal = newAnimal;
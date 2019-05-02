const mongoose = require('mongoose'),
requestM = require('../models/requestM');
const fileSys = require('fs');

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
    res.json({body:'Showing by Locations'})
}

//------------------------------------------------------------------------------------------------------------------
//Writes a new animal request to database---------------------------------------------------------------------------
newAnimal = (form)=>{
    if(form.tracker.length!=0){
        const requestNew = new requestM({
            title:form.title,
            location:form.location,
            track:form.track,
            volunteer:form.contact,
            medical:form.medical,
            lost:form.lost,
            tresspassable:form.tresspassable,
            aggression:form.aggression,
            additional:form.additional,
            tracker:form.tracker,
            stamp:form.stamp,
            rescuers: [],
        });
        requestNew.save().then(()=>console.log("Performed IO on Database")).catch((err)=>console.log(err));
    }
  

}
//todo: Check the animal for similar entries
//todo: initiate automated rescuer lookup
//todo: initiate animal tracker for this id

serveStatic =(stamp,res)=>{
    var files=[]
    var dir = fileSys.readdir( './public/requests',(err,filenames)=>{
        filenames.forEach((file)=>{
            var prefix = file.split('-')[0];
            var suffix = file.split('-')[1].split('.')[0];
            
            if(prefix==stamp){files.push(suffix)}
        })
        res.json({files:files});
        
    })
}


module.exports. getRequest = getRequest;
module.exports.byLocation = byLocation;
module.exports.newAnimal = newAnimal;
module.exports.serveStatic = serveStatic;
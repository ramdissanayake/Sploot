const mongoose = require('mongoose'),
requestM = require('../models/requestM');
const fileSys = require('fs');
var ObjectID = require('mongodb').ObjectID;

// Retrieves Requests from the rescueRequests Collection-----------------------------------------------------------
getRequest = (req,res,next) => {
    console.log('Showing Requests on  ' + req.path);
    // Test for Show all
    if(req.params.id == 0){
        // console.log(req.body)
        if(req.body=="*"){

            requestM.find({}, function(err,result){
                res.json(result);
                console.log('Fetched all documents')})
            }
            else{
                console.log("here")
            requestM.find({$or: [ 
            { 
              $text: {
                $search: req.body
              }
            }
            // ,
            // {
            //   'title': {
            //     $regex: 'uper',
            //     $options: 'i'
            // }
          ]}, 
        function(err,result){
            res.json(result);
            console.log('Fetched all documents');
        }).skip(req.page).limit()
    }

    }
    else{

        requestM.findOne({_id:req.params.id}, function(err,result){
            res.json(result)
            console.log('Fetched Request by ID'+ req.params.id);
        
        }   );
    }

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
            milestones:JSON.parse(form.milestones),
            closed:false
        });
        requestNew.save().then(()=>{
            // console.log(JSON.parse(form.milestones));
            console.log("Performed IO on Database")
        }).catch((err)=>console.log(err));
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
            var suffix = file.split('-')[1]
            
            if(prefix==stamp){files.push(suffix)}
        })
        res.json({files:files});
        
    })
}

//Assign a Rescuer to a Request
assignrescuer = (email,request,milestone,res)=>{

 requestM.findOne({_id:request},function(err,d){
     if(!err){
         d.rescuers.push(email);
         d.rescuer = email;
         d.milestones.push(JSON.parse(milestone))
         d.save();
         res.status(200).send();
     }
     else{
         res.status(500).send()
     }
 })


}

markFound = (email,req,res)=>{
requestM.findOne({_id:req, rescuer:email},function(err,d){
    if(!err){
        d.found = true
        d.save()
        res.status(200).send()
    }
    else{
        res.status(500).send()
    }
})
}
markClosed = (email,req,res)=>{
    requestM.findOne({_id:req,rescuer:email},function(err,d){
        if(!err){
            d.closed = true
            d.save()
            res.status(200).send()
        }
        else{
            res.status(500).send()
        }
    })
}
markAdoptable = (email,req,res)=>{

    requestM.findOne({_id:req,rescuer:email},function(err,d){
        if(!err){
            d.adoptable = true
            d.closed = true
            d.save()
            res.status(200).send()
        }
        else{
            res.status(500).send()
        }
    })
}


module.exports.getRequest = getRequest;
module.exports.byLocation = byLocation;
module.exports.newAnimal = newAnimal;
module.exports.serveStatic = serveStatic;
module.exports.assignrescuer = assignrescuer;
module.exports.markFound = markFound;
module.exports.markAdoptable = markAdoptable;
module.exports.markClosed = markClosed;
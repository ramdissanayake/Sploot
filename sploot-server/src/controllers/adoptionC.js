const mongoose = require('mongoose'),
adoptionM = require('../models/adoptionM');
const fileSys = require('fs');
var ObjectID = require('mongodb').ObjectID;

// Retrieve Adoption Animals from the database-----------------------------------------------------------------------------
getAdoption = (req,res,next) => {
    console.log('Showing Adoptions on  ' + req.path);
    // Test for Show all
    req.params.id == 0?
    
    (adoptionM.find({}, function(err,result){
        res.json(result);
        console.log('Fetched all documents');
    }))
    :(adoptionM.findOne({_id:req.params.id}, function(err,result){
        res.json(result)
        console.log('Fetched Request by ID'+ req.params.id);
    
    }));
}
//------------------------------------------------------------------------------------------------------------------------
newAnimal = (form,res)=>{
    if(true){
        const animalNew = new adoptionM({
            name:form.name,
            age:form.age,
            species:form.species,
            breed:form.breed,
            sex:form.sex,
            specialneeds:form.specialneeds,
            chronic:form.chronic.split(","),
            terminal:form.terminal.split(","),
            additional:form.additional,
            vaccines:form.vaccine,
            stamp:1
        });
        animalNew.save().then(()=>{
            // console.log(JSON.parse(form.milestones));
            console.log("Performed IO on Database")
            res.status(200).send()
        }).catch((err)=>console.log(err));
    }
  

}

// -------------------------------------------------------------------------------------------------------------------------
// Serve Static files ------------------------------------------------------------------------------------------------------
serveStatic =(stamp,res)=>{
    var files=[]
    var dir = fileSys.readdir( './public/adoptions',(err,filenames)=>{
        filenames.forEach((file)=>{
            var prefix = file.split('-')[0];
            var suffix = file.split('-')[1]
            
            if(prefix==stamp){files.push(suffix)}
        })
        res.json({files:files});
        
    })
}
// -------------------------------------------------------------------------------------------------------------------------

module.exports.newAnimal = newAnimal;
module.exports.getAdoption = getAdoption;
module.exports.serveStatic = serveStatic;
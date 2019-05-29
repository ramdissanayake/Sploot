const mongoose = require('mongoose'),
usersM = require('../models/userM');
const fileSys = require('fs');
const jwt = require('jsonwebtoken');
// Use env variable
const secret="mysecretsshhh"

const register = (req,res)=>{

    userNew = new usersM({
        email:req.email,
        password: req.password,

        name: req.name,
        address: req.address,
        contactno: req.contactno,
        idnumber: req.idnumber,
        city: req.city,
        gender: req.gender,
        role: req.role
    })

    // validate email here
    if (true){
        userNew.save(function(err) {
            if (err) {
                console.log(err);
              res.status(500)
                .send("Error registering new user please try again.");
            } else {
              res.status(200).send("Welcome to the club!");
            }
          });
    }
  
}


// Checks if the email already exists
// const findEmail =(req)=>{
//     console.log('finding email');
//   usersM.findOne({email:req}, function(err,result){
//     res.json(result)
//     console.log('Fetched Request by ID'+ req.params.id);

// })
    
// }

const auth=(req,res)=>{

  const reqparse = JSON.parse(req);

  const {email,pw} = reqparse;

  users = new usersM({
    email:email,
    password: pw
  })
  usersM.findOne({email:email}, function(err,user){
    if(err){
      res.status(500).json({error:'Sploot Server Error 51'})
    }
    else if(!user){
      res.status(401).json({error:'User not found'})
    }
    else{
      user.isCorrectPassword(pw,function(err,same){
        if(err){
          res.status(500).json({error:'Sploot Server Error 59'})
        }
        else if(!same){
          res.status(401).json({error:'User not found'})
        }
        else{
      
          // res.send('User Found')
          const payload = { email };
          const token = jwt.sign(payload, secret, {
            expiresIn: '1h'
          });
          res.cookie('token', token, { httpOnly: true })
            .sendStatus(200);
        }
      })
    }
  })  
}


    const logout =(req,res)=>{
      console.log(req.cookies.token);

      const token = jwt.sign({}, secret, {
        expiresIn: '0s'
      });
      res.cookie('token', token, { httpOnly: true })
        .sendStatus(200);
      // res.status(401).json({error:'User not found'})
    }


module.exports.register = register;
module.exports.auth = auth;
module.exports.logout = logout;
const express = require('express');
const users = express.Router({mergeParams:true});
const parser = require('body-parser');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./public/users')
    },
    filename: function(req,file,cb){
        cb(null,req.body.stamp+'-'+Date.now())
    }
})


const upload = multer({storage:storage});
// Imports the relevant controller 
const   Controller = require('../controllers/usersC');
users.use(parser.json())

// User Routes
// Registers New Users
users.post('/register', upload.array('picture'),
(req,res,next)=>{
    const { email, password } = req.body;
    Controller.register(req.body,res)
}
)

// Checks if the Email Already Exists
users.post('/register/validate', upload.array('picture'),
(req,res,next)=>{
    const { email, password } = req.body;
    Controller.findEmail(req.body,res)
}
)

// Authenticate User Login
users.post('/auth',
(req,res,next)=>{
    Controller.auth(req.body,res)
}
)

users.get('/logout',
(req,res,next)=>{
    Controller.logout(req,res)
}
)

module.exports = users;


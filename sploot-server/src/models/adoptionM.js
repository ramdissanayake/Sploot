const mongoose = require('mongoose');

// mongoose.Promise = global.Promise; LEGACY CODE lu!

// Mongoose model schema for the Rescue Request Collection goes here.
const animal = mongoose.model('animal',
    {
       name:String,
       age:String,
       species:String,
       breed:String,
       sex:Number,
       specialneeds:Array,
       chronic:Array,
       terminal:Array,
       additional:String,
       vaccines:Array,
       stamp:Number
        
    });

module.exports = animal;
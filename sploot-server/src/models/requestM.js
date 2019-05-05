const mongoose = require('mongoose');

// mongoose.Promise = global.Promise; LEGACY CODE lu!

// Mongoose model schema for the Rescue Request Collection goes here.
const rescueRequest = mongoose.model('rescueRequest',
    {
        title:String,
        location:String,
        track:String,
        volunteer:Number,
        medical:String,
        lost:String,
        tresspassable:String,
        aggression:String,
        additional:String,
        tracker:Array,
        // volunteer: Number,
        rescuers: Array,
        stamp:String,
        milestones:Object
        
    });

module.exports = rescueRequest;
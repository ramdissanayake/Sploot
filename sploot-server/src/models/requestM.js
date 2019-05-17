const mongoose = require('mongoose');

// mongoose.Promise = global.Promise; LEGACY CODE lu!

// Mongoose model schema for the Rescue Request Collection goes here.
const rescueRequest = mongoose.model('rescueRequest',
    {
        title:String,
        location:String,
        track:String,
        volunteer:String,
        // medical:String,
        found:Boolean,
        adoptable:Boolean,
        closed:Boolean,
        // tresspassable:String,
        // aggression:String,
        additional:String,
        tracker:Array,
        // volunteer: Number,
        rescuers: Array,
        rescuer: String,
        stamp:String,
        milestones:Array,
        
    });

module.exports = rescueRequest;
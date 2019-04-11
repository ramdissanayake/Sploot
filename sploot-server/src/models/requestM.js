const mongoose = require('mongoose');

// mongoose.Promise = global.Promise; LEGACY CODE lu!

// Mongoose model schema for the Rescue Request Collection goes here.
const rescueRequest = mongoose.model('rescueRequest',
    {
        id:Number,
        title:String,
        location:String,
        track:Boolean,
        volunteer:Number,
        medical:Boolean,
        lost:Boolean,
        tresspassable:Boolean,
        aggression:Boolean,
        additional:String,
        trackingid:Number,
        // volunteer: Number,
        rescuers: Array,
        
    });

module.exports = rescueRequest;
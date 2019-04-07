const mongoose = require('mongoose');

// mongoose.Promise = global.Promise; LEGACY CODE lu!

// Mongoose model schema for the Rescue Request Collection goes here.
const rescueRequest = mongoose.model('rescueRequest',
    {
        id:Number,
        title:String,
        volunteer: Number,
        rescuers: Array,
        description:String,
        
    });

module.exports = rescueRequest;
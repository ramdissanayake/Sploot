const mongoose = require('mongoose');

// mongoose.Promise = global.Promise; LEGACY CODE lu!

// Mongoose model schema for the Rescue Request Collection goes here.
const requestSchema = mongoose.Schema(
    {
        title:{ type: String},
        location:{type:String},
        track:{type:String},
        volunteer:{type:String},
        // medical:String,
        found:{type:Boolean},
        adoptable:{type:Boolean},
        closed:{type:Boolean},
        // tresspassable:String,
        // aggression:String,
        additional:{type:String},
        tracker:{type:Array},
        // volunteer: Number,
        rescuers: {type:Array},
        rescuer: {type:String},
        stamp:{type:String},
        milestones:{type:Array},
    }
)

requestSchema.index({title:"text",additional:"text",location:"text"})

const rescueRequest = mongoose.model('rescueRequest',requestSchema);


module.exports = rescueRequest;
const mongoose = require('mongoose');

var Analytic = mongoose.Schema(
    {
       browserName:{type:String},
       userIP:{type:String},
       eventType:{type:String},
       userId:{type:String},
    }
);


let analytic = module.exports = mongoose.model('analytic', Analytic);
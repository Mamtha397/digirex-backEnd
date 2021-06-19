const mongoose = require('mongoose');

var Report = mongoose.Schema(
    {
       name:{type:String},
       dateTo:{type:Date},
       dateFrom:{type:Date},
       note:{type:String},
    }
);


let report = module.exports = mongoose.model('medicalReport', Report);
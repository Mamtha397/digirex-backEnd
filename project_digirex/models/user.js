const mongoose = require('mongoose');

var User = mongoose.Schema(
    {
       userName:{type:String},
       email:{type:String},
       password:{type:String},
    }
);


let user = module.exports = mongoose.model('user', User);
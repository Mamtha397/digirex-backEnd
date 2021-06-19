let User = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/*
    Add User to mongoDB
*/
exports.addUser = (req, res) => {
    const saltRounds = 10;
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    bcrypt.hash(password, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        User.create({
            "userName": name,
            "email": email,
            "password": hash,
        })
        .then(user => {
            res.send({status: true, msg:"created user"})
        })
        .catch((err) => {
            console.log(err);
            res.send({status: false, msg:"Not able to create user"})
        });
    });

}

function generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

/*
get data from DB
*/
exports.signIn = (req, res) => {
    const userName = req.body.username;
    const password = req.body.password;

    User.findOne({userName:userName}).then(result=>{
        bcrypt.compare(password, result.password, function(err, result) {
            const token = generateAccessToken({ username: userName });
            res.send({
                status: "true",
                result: result,
                token: token
            })
        });
    }).catch(err=>{
        console.log(err);
        res.send({
            status:"false",
            result:err,
        })
    })
}
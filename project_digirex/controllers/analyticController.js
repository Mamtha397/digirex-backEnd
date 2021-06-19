let Analytic = require('../models/analytic')
let useragent = require('express-useragent');
/*
    Add analytics to mongoDB
*/
exports.addAnalytic = (req, res) => {
    var source = req.headers['user-agent'],
    ua = useragent.parse(source);
    var userIP = req.header('x-forwarded-for') || req.connection.remoteAddress;
    var name = ua.browser
    var eventType = req.body.eventType;
    var userId = req.body.userId;

    Analytic.create({
        "browserName": name,
        "userIP": userIP,
        "eventType": eventType,
        "userId": userId
    })
        .then(user => {
            res.send({status: true, msg:"created analytic"})
        })
        .catch((err) => {
            console.log(err);
            res.send({status: false, msg:"Not able to create analytic"})
        });
}
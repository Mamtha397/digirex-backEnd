let medicalReport = require('../models/medicalReport')

/*
    Add medicalReport to mongoDB
*/
exports.addMedicalReport = (req, res) => {
    var name = req.body.name;
    var dateTo = req.body.dateTo;
    var dateFrom = req.body.dateFrom;
    var note = req.body.note;

    medicalReport.create({
        "name": name,
        "dateTo": dateFrom,
        "dateFrom": dateTo,
        "note":note
    })
        .then(report => {
            res.send({status: true, msg:"created medical report"})
        })
        .catch((err) => {
            console.log(err);
            res.send({status: false, msg:"Not able to create medical report"})
        });
}

/*
    Search in mongoDB
*/
exports.searchMedicalReport  = (req, res) => {
    var name = req.body.name;
    var dateTo = req.body.dateTo;
    var dateFrom = req.body.dateFrom;

    if(name){
        medicalReport.findOne({name:name}).then(result=>{
            res.send({
                status:"true",
                result:result,
            })
        }).catch(err=>{
            console.log(err);
            res.send({
                status:"false",
                result:err,
            })
        })
    }
    else{
        medicalReport.find({
            dateTo: {
                $gte: dateTo,
            },
            dateFrom: {
                $lt: dateFrom,
            }
        }).then(result=>{
            res.send({
                status:"true",
                result:result,
            })
        }).catch(err=>{
            console.log(err);
            res.send({
                status:"false",
                result:err,
            })
        })
    }
}
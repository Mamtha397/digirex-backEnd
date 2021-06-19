const port = 8000;
const bodyParser = require('body-parser');
const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// get config vars
dotenv.config();

const users = require('./routes/user');
const medicals = require('./routes/medical');
const analytics = require('./routes/analytics');

var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
    next();
});

const mongoAtlasUri = "mongodb+srv://mamatha:db@use321@cluster0.0j4gp.mongodb.net/medical"

try {
    // Connect to the MongoDB cluster
     mongoose.connect(
      mongoAtlasUri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/user', users);
app.use('/analytic', analytics);
app.use('/medical', medicals);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
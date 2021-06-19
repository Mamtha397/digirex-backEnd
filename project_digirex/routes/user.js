const express = require("express");
const router = express.Router();

const {addUser, signIn} = require('../controllers/userController');

router.post('/signUp', addUser);
router.post('/signIn', signIn); 

module.exports = router;
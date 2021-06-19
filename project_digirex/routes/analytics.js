const express = require("express");
const router = express.Router();

const {addAnalytic} = require('../controllers/analyticController');
const {authenticateToken} = require('../middlewares/verify');

router.post('/add',authenticateToken , addAnalytic);

module.exports = router;
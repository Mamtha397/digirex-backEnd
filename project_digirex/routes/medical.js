const express = require("express");
const router = express.Router();

const {addMedicalReport, searchMedicalReport} = require('../controllers/medicalController');
const {authenticateToken} = require('../middlewares/verify');

router.post('/add', authenticateToken, addMedicalReport);
router.post('/search', authenticateToken, searchMedicalReport);

module.exports = router;
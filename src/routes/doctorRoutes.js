const express = require('express');
const router = express.Router();
const { getAllDoctors, getDoctorDetails, addDoctor } = require('../controllers/doctorController');

// Route: GET /api/doctors
router.get('/', getAllDoctors);

// Route: GET /api/doctors/:id
router.get('/:id', getDoctorDetails);

router.post('/', addDoctor); // 🔥 POST endpoint

module.exports = router;

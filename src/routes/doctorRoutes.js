const express = require('express');
const router = express.Router();
const { getAllDoctors, getDoctorDetails, addDoctor } = require('../controllers/doctorController');

/**
 * @swagger
 * tags:
 *   name: Doctors
 *   description: Doctor management endpoints
 */

// Route: GET /api/doctors
/**
 * @swagger
 * /api/doctors:
 *   get:
 *     summary: Get all doctors
 *     tags: [Doctors]
 *     responses:
 *       200:
 *         description: List of doctors
 */
router.get('/', getAllDoctors);

// Route: GET /api/doctors/:id
/**
 * @swagger
 * /api/doctors/{id}:
 *   get:
 *     summary: Get a doctor by ID
 *     tags: [Doctors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Doctor ID
 *     responses:
 *       200:
 *         description: Doctor details
 *       404:
 *         description: Doctor not found
 */
router.get('/:id', getDoctorDetails);

// Route: POST /api/doctors
/**
 * @swagger
 * /api/doctors:
 *   post:
 *     summary: Add a new doctor
 *     tags: [Doctors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - specialization
 *               - experience
 *               - location
 *               - description
 *               - img
 *             properties:
 *               name:
 *                 type: string
 *               specialization:
 *                 type: string
 *               experience:
 *                 type: string
 *               location:
 *                 type: string
 *               description:
 *                 type: string
 *               img:
 *                 type: string
 *     responses:
 *       201:
 *         description: Doctor added successfully
 *       400:
 *         description: Invalid doctor data
 */
router.post('/', addDoctor); // 🔥 POST endpoint

module.exports = router;

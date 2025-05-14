const express = require('express');
const router = express.Router();
const { login, signup, resetPassword } = require('../controllers/authController');
const { 
  validateLogin, 
  validateSignup, 
  validateResetPassword 
} = require('../middleware/validateRequest');

// Login route with validation for required fields
router.post('/login', validateLogin, login);

// Signup route with validation for required fields
router.post('/signup', validateSignup, signup);

// Reset Password route with validation for required fields
router.post('/reset-password', validateResetPassword, resetPassword);

module.exports = router;

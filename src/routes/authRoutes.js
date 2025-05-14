const express = require('express');
const router = express.Router();
const { login, signup, resetPassword } = require('../controllers/authController');
const { validateLogin, validateSignup, validateResetPassword } = require('../middleware/validateRequest');

router.post('/login', validateLogin, login);
router.post('/signup', validateSignup, signup);
router.post('/reset-password', validateResetPassword, resetPassword);

module.exports = router;

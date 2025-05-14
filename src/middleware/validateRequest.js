const { body, validationResult } = require('express-validator');

// Validation for Login
const validateLogin = [
  body('email').isEmail().withMessage('Email is required and must be a valid email address'),
  body('password').notEmpty().withMessage('Password is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Validation for Signup
const validateSignup = [
  body('email').isEmail().withMessage('Email is required and must be a valid email address'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Passwords must match');
    }
    return true;
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Validation for Reset Password
const validateResetPassword = [
  body('email').isEmail().withMessage('Email is required and must be a valid email address'),
  body('newPassword').isLength({ min: 6 }).withMessage('New Password must be at least 6 characters long'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateLogin, validateSignup, validateResetPassword };

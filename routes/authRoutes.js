const express = require('express');
const { body } = require('express-validator');
const authController = require('../controllers/authController');
const validationMiddleware = require('../middlewares/validationMiddleware');

const router = express.Router();

// POST /api/auth/register
router.post(
    '/register',
    [
        body('username').notEmpty().withMessage('Username is required'),
        body('email').isEmail().withMessage('Valid email is required'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    ],
    validationMiddleware,
    authController.register
);

// POST /api/auth/login
router.post(
    '/login',
    [
        body('email').isEmail().withMessage('Valid email is required'),
        body('password').notEmpty().withMessage('Password is required')
    ],
    validationMiddleware,
    authController.login
);

module.exports = router;

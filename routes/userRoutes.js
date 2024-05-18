const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const userController = require('../controllers/userController');

const router = express.Router();

// Protected routes, require authentication
router.use(authMiddleware);

// GET /api/users/profile
router.get('/profile', userController.getUserProfile);

// PUT /api/users/profile
router.put('/profile', userController.updateUserProfile);

// DELETE /api/users/profile
router.delete('/profile', userController.deleteUserProfile);

module.exports = router;
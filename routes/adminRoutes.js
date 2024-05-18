const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const adminController = require('../controllers/adminController');

const router = express.Router();

// Protected routes, require authentication
router.use(authMiddleware);

// GET /api/admin/users
router.get('/users', adminController.getAllUsers);

// DELETE /api/admin/users/:userId
router.delete('/users/:userId', adminController.deleteUser);

// GET /api/admin/playlists
router.get('/playlists', adminController.getAllPlaylists);

// DELETE /api/admin/playlists/:playlistId
router.delete('/playlists/:playlistId', adminController.deletePlaylist);

module.exports = router;

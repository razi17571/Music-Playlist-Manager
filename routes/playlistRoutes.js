const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const playlistController = require('../controllers/playlistController');

const router = express.Router();

// Protected routes, require authentication
router.use(authMiddleware);

// POST /api/playlists
router.post('/', playlistController.createPlaylist);

// GET /api/playlists
router.get('/', playlistController.getPlaylists);

// PUT /api/playlists/:id
router.put('/:id', playlistController.updatePlaylist);

// DELETE /api/playlists/:id
router.delete('/:id', playlistController.deletePlaylist);

module.exports = router;

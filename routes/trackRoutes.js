const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const trackController = require('../controllers/trackController');

const router = express.Router();

// Protected routes, require authentication
router.use(authMiddleware);

// POST /api/tracks/:playlistId
router.post('/:playlistId', trackController.addTrack);

// DELETE /api/tracks/:playlistId/:trackId
router.delete('/:playlistId/:trackId', trackController.removeTrack);

// GET /api/tracks/:playlistId
router.get('/:playlistId', trackController.getTracks);

module.exports = router;

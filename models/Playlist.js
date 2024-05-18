const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, default: '' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tracks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Track' }]
}, { timestamps: true });

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;

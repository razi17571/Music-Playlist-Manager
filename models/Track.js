const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String, default: '' },
    duration: { type: Number, required: true },
    genre: { type: String, default: '' },
    url: { type: String, required: true }
}, { timestamps: true });

const Track = mongoose.model('Track', trackSchema);

module.exports = Track;

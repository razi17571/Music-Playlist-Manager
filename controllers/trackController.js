const Playlist = require('../models/Playlist');
const Track = require('../models/Track');

exports.addTrack = async (req, res) => {
    const { playlistId } = req.params; // Correctly destructure playlistId from params
    const track = req.body;
    try {
        const playlist = await Playlist.findById(playlistId);
        if (!playlist) {
            return res.status(404).json({ error: 'Playlist not found' });
        }
        const newTrack = new Track(track);
        playlist.tracks.push(newTrack);
        await newTrack.save(); // Ensure the new track is saved to the database
        await playlist.save();
        res.status(201).json(newTrack);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.removeTrack = async (req, res) => {
    const { playlistId, trackId } = req.params;
    try {
        const playlist = await Playlist.findById(playlistId);
        if (!playlist) {
            return res.status(404).json({ error: 'Playlist not found' });
        }
        const trackIndex = playlist.tracks.findIndex(track => track._id.equals(trackId));
        if (trackIndex === -1) {
            return res.status(404).json({ error: 'Track not found' });
        }
        playlist.tracks.splice(trackIndex, 1);
        await playlist.save();
        res.status(200).json({ message: 'Track removed' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getTracks = async (req, res) => {
    const { playlistId } = req.params;
    try {
        const playlist = await Playlist.findById(playlistId).populate('tracks');
        if (!playlist) {
            return res.status(404).json({ error: 'Playlist not found' });
        }
        res.status(200).json(playlist.tracks);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

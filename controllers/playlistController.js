const Playlist = require('../models/Playlist');

exports.createPlaylist = async (req, res) => {
    const { name, description } = req.body;
    try {
        const playlist = new Playlist({ name, description, user: req.user.userId });
        await playlist.save();
        res.status(201).json(playlist);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getPlaylists = async (req, res) => {
    try {
        const playlists = await Playlist.find({ user: req.user.userId });
        res.status(200).json(playlists);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.updatePlaylist = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
        const playlist = await Playlist.findByIdAndUpdate(
            id,
            { name, description },
            { new: true }
        );
        if (!playlist) {
            return res.status(404).json({ error: 'Playlist not found' });
        }
        res.status(200).json(playlist);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.deletePlaylist = async (req, res) => {
    const { id } = req.params;
    try {
        const playlist = await Playlist.findByIdAndDelete(id);
        if (!playlist) {
            return res.status(404).json({ error: 'Playlist not found' });
        }
        res.status(200).json({ message: 'Playlist deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

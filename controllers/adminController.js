const User = require('../models/User');
const Playlist = require('../models/Playlist');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.deleteUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getAllPlaylists = async (req, res) => {
    try {
        const playlists = await Playlist.find();
        res.status(200).json(playlists);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.deletePlaylist = async (req, res) => {
    const { playlistId } = req.params;
    try {
        const playlist = await Playlist.findByIdAndDelete(playlistId);
        if (!playlist) {
            return res.status(404).json({ error: 'Playlist not found' });
        }
        res.status(200).json({ message: 'Playlist deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

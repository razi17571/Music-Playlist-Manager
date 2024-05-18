// Import necessary modules/models
const Playlist = require('../models/Playlist');

// Function to create a new playlist
exports.createPlaylist = async (name, description, userId) => {
    try {
        const playlist = new Playlist({ name, description, user: userId });
        await playlist.save();
        return playlist;
    } catch (error) {
        throw new Error('Failed to create playlist');
    }
};

// Function to get all playlists of a user
exports.getPlaylistsByUser = async (userId) => {
    try {
        const playlists = await Playlist.find({ user: userId });
        return playlists;
    } catch (error) {
        throw new Error('Failed to get playlists');
    }
};

// Function to update a playlist
exports.updatePlaylist = async (playlistId, name, description) => {
    try {
        const playlist = await Playlist.findByIdAndUpdate(
            playlistId,
            { name, description },
            { new: true }
        );
        return playlist;
    } catch (error) {
        throw new Error('Failed to update playlist');
    }
};

// Function to delete a playlist
exports.deletePlaylist = async (playlistId) => {
    try {
        const playlist = await Playlist.findByIdAndDelete(playlistId);
        return playlist;
    } catch (error) {
        throw new Error('Failed to delete playlist');
    }
};

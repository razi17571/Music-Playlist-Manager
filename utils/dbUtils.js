// Import necessary modules/models
const User = require('../models/User');
const Playlist = require('../models/Playlist');
const Track = require('../models/Track');

// Function to find a user by ID
exports.findUserById = async (userId) => {
    try {
        const user = await User.findById(userId);
        return user;
    } catch (error) {
        throw new Error('Failed to find user by ID');
    }
};

// Function to find a playlist by ID
exports.findPlaylistById = async (playlistId) => {
    try {
        const playlist = await Playlist.findById(playlistId);
        return playlist;
    } catch (error) {
        throw new Error('Failed to find playlist by ID');
    }
};

// Function to find a track by ID
exports.findTrackById = async (trackId) => {
    try {
        const track = await Track.findById(trackId);
        return track;
    } catch (error) {
        throw new Error('Failed to find track by ID');
    }
};

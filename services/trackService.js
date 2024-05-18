// Import necessary modules/models
const Playlist = require('../models/Playlist');
const Track = require('../models/Track');

// Function to add a track to a playlist
exports.addTrackToPlaylist = async (playlistId, trackData) => {
    try {
        const playlist = await Playlist.findById(playlistId);
        if (!playlist) {
            throw new Error('Playlist not found');
        }
        const newTrack = new Track(trackData);
        playlist.tracks.push(newTrack);
        await playlist.save();
        return newTrack;
    } catch (error) {
        throw new Error('Failed to add track to playlist');
    }
};

// Function to remove a track from a playlist
exports.removeTrackFromPlaylist = async (playlistId, trackId) => {
    try {
        const playlist = await Playlist.findById(playlistId);
        if (!playlist) {
            throw new Error('Playlist not found');
        }
        playlist.tracks = playlist.tracks.filter(t => t._id != trackId);
        await playlist.save();
    } catch (error) {
        throw new Error('Failed to remove track from playlist');
    }
};

// Function to get all tracks of a playlist
exports.getTracksByPlaylist = async (playlistId) => {
    try {
        const playlist = await Playlist.findById(playlistId).populate('tracks');
        if (!playlist) {
            throw new Error('Playlist not found');
        }
        return playlist.tracks;
    } catch (error) {
        throw new Error('Failed to get tracks from playlist');
    }
};

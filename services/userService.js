// Import necessary modules/models
const User = require('../models/User');

// Function to get user profile
exports.getUserProfile = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error('Failed to get user profile');
    }
};

// Function to update user profile
exports.updateUserProfile = async (userId, username, email) => {
    try {
        const user = await User.findByIdAndUpdate(
            userId,
            { username, email },
            { new: true }
        );
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error('Failed to update user profile');
    }
};

// Function to delete user profile
exports.deleteUserProfile = async (userId) => {
    try {
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error('Failed to delete user profile');
    }
};

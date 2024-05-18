// Import necessary modules/models
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { jwtSecret, jwtExpiration } = require('../config/jwt');

// Function to register a new user
exports.register = async (username, email, password) => {
    try {
        let user = await User.findOne({ email });
        if (user) {
            throw new Error('User already exists');
        }
        user = new User({ username, email, password });
        await user.save();
        const payload = { userId: user._id };
        const token = jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiration });
        return token;
    } catch (error) {
        throw new Error('Failed to register user');
    }
};

// Function to login a user
exports.login = async (email, password) => {
    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            throw new Error('Invalid credentials');
        }
        const payload = { userId: user._id };
        const token = jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiration });
        return token;
    } catch (error) {
        throw new Error('Failed to login');
    }
};

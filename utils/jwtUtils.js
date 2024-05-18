const jwt = require('jsonwebtoken');
const { jwtSecret, jwtExpiration } = require('../config/jwt');

// Function to generate JWT token
exports.generateToken = (userId) => {
    const payload = { userId };
    const token = jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiration });
    return token;
};

// Function to verify JWT token
exports.verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, jwtSecret);
        return decoded;
    } catch (error) {
        throw new Error('Failed to verify token');
    }
};

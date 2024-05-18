const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { jwtSecret, jwtExpiration } = require('../config/jwt');

exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ error: 'User already exists' });
        }
        user = new User({ username, email, password });
        await user.save();
        const payload = { userId: user._id };
        const token = jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiration });
        res.status(201).json({ token });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        const payload = { userId: user._id };
        const token = jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiration });
        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

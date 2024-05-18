const User = require('../models/User');

exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.updateUserProfile = async (req, res) => {
    const { username, email } = req.body;
    try {
        const user = await User.findByIdAndUpdate(
            req.user.userId,
            { username, email },
            { new: true }
        );
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.deleteUserProfile = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.user.userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

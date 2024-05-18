const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const playlistRoutes = require('./routes/playlistRoutes');
const trackRoutes = require('./routes/trackRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

// Connect to MongoDB
connectDB();

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/playlists', playlistRoutes);
app.use('/api/tracks', trackRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

# Music Playlist Manager

Music Playlist Manager is a web application that allows users to manage their music playlists. It provides features such as user authentication, playlist creation, track management, user profile management, and administrative functionalities.

## Features

- **User Authentication**: Users can register and log in to the application to access their playlists and manage their profiles.
- **Playlist Management**: Users can create, update, and delete playlists.
- **Track Management**: Users can add and remove tracks from their playlists.
- **User Profile Management**: Users can view and update their profiles.
- **Administrative Functionality**: Admin users have access to additional functionalities such as managing users and playlists.

## Technologies Used

- **Node.js**: A JavaScript runtime for building server-side applications.
- **Express.js**: A web application framework for Node.js used for building APIs and web applications.
- **MongoDB**: A NoSQL database used for storing user data, playlists, and tracks.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **JSON Web Tokens (JWT)**: Used for user authentication and authorization.
- **dotenv**: Used for loading environment variables from a .env file.
- **bcryptjs**: Used for hashing passwords.
- **express-validator**: Used for request validation.
- **nodemon**: Development dependency for automatically restarting the server during development.

## Getting Started

To get started with the Music Playlist Manager application, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/music-playlist-manager.git
   ```

2. Install dependencies:
   ```bash
   cd music-playlist-manager
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory of the project and define the following variables:
   ```plaintext
   DB_URI=mongodb://localhost:27017/music-playlist-manager
   JWT_SECRET=your_jwt_secret_key
   PORT=3000
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Explore the API endpoints and documentation.

## API Documentation

### User Authentication

#### Register User

- **Endpoint**: `POST /api/auth/register`
- **Request Body**:
  ```json
  {
      "username": "example_user",
      "email": "example@example.com",
      "password": "password123"
  }
  ```

#### Login User

- **Endpoint**: `POST /api/auth/login`
- **Request Body**:
  ```json
  {
      "email": "example@example.com",
      "password": "password123"
  }
  ```

### Playlist Management

#### Create Playlist

- **Endpoint**: `POST /api/playlists`
- **Request Body**:
  ```json
  {
      "name": "My Playlist",
      "description": "This is a test playlist"
  }
  ```

#### Get Playlists

- **Endpoint**: `GET /api/playlists`

#### Update Playlist

- **Endpoint**: `PUT /api/playlists/:id`
- **Request Body**:
  ```json
  {
      "name": "Updated Playlist Name",
      "description": "Updated playlist description"
  }
  ```

#### Delete Playlist

- **Endpoint**: `DELETE /api/playlists/:id`

### Track Management

#### Add Track to Playlist

- **Endpoint**: `POST /api/tracks/:playlistId`
- **Request Body**:
  ```json
  {
      "title": "Track Title",
      "artist": "Artist Name",
      "album": "Album Name",
      "duration": 180,
      "genre": "Genre",
      "url": "https://example.com/track.mp3"
  }
  ```

#### Remove Track from Playlist

- **Endpoint**: `DELETE /api/tracks/:playlistId/:trackId`

#### Get Tracks of Playlist

- **Endpoint**: `GET /api/tracks/:playlistId`

### User Profile Management

#### Get User Profile

- **Endpoint**: `GET /api/users/profile`

#### Update User Profile

- **Endpoint**: `PUT /api/users/profile`
- **Request Body**:
  ```json
  {
      "username": "Updated Username",
      "email": "updated@example.com"
  }
  ```

#### Delete User Profile

- **Endpoint**: `DELETE /api/users/profile`


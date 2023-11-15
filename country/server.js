// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/userManagement', { useNewUrlParser: true, useUnifiedTopology: true });

// Define user schema and model
const userSchema = new mongoose.Schema({
  username: String,
  country: String,
});

const User = mongoose.model('User', userSchema);

// API routes
app.get('/api/users', (req, res) => {
  // Fetch all users from the database
  User.find({}, (err, users) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(users);
    }
  });
});

app.post('/api/users', (req, res) => {
  // Create a new user
  const newUser = new User(req.body);
  newUser.save((err, user) => {
    if (err) {
      console.error('Error saving user:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(user);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
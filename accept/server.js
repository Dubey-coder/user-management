const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/userManagement', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.json());
app.use(cors());

// User model
const User = mongoose.model('User', { username: String });

// API routes
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/users', async (req, res) => {
  const { username } = req.body;

  try {
    const newUser = new User({ username });
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

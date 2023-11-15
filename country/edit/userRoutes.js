const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Define your User model

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add more routes for user CRUD operations as needed

module.exports = router;
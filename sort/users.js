const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Assuming you have a User model

// Get all users with optional sorting
router.get('/', async (req, res) => {
  const { sortBy } = req.query;
  let sortQuery = {};

  if (sortBy) {
    sortQuery[sortBy] = 1; // 1 for ascending order, -1 for descending order
  }

  try {
    const users = await User.find().sort(sortQuery);
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

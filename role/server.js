// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true });

// Create mongoose models for User and Role (Assuming you have User and Role schemas defined)

// Middleware
app.use(bodyParser.json());

// API routes
app.use('/api/users', require('./routes/userRoutes'));
// Add routes for roles if needed

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

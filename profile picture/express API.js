const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/users', UserController.getAllUsers);
router.get('/users/:userId', UserController.getUserById);
router.post('/users', UserController.createUser);
router.put('/users/:userId', UserController.updateUser);
router.post('/users/:userId/profile-picture', UserController.uploadProfilePicture);

module.exports = router;

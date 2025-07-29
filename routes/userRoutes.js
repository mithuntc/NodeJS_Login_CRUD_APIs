const express = require('express');
const router = express.Router();
const {
  login, getUsers, createUser, updateUser, deleteUser
} = require('../controllers/userController');

const authenticateToken = require('../middleware/authMiddleware');

router.post('/login', login);
router.get('/users', authenticateToken, getUsers);
router.post('/users', authenticateToken, createUser);
router.put('/users/:id', authenticateToken, updateUser);
router.delete('/users/:id', authenticateToken, deleteUser);

module.exports = router;

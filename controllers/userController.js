const jwt = require('jsonwebtoken');
let users = require('../utils/users');

const login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};

const getUsers = (req, res) => {
  res.json(users);
};

const createUser = (req, res) => {
  const newUser = { id: Date.now(), ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const index = users.findIndex(u => u.id == id);

  if (index === -1) return res.status(404).json({ message: 'User not found' });

  users[index] = { ...users[index], ...req.body };
  res.json(users[index]);
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter(u => u.id != id);
  res.json({ message: 'User deleted' });
};

module.exports = { login, getUsers, createUser, updateUser, deleteUser };
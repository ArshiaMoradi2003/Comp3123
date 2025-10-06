// routes/users.js
const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const router = express.Router();


function getUserFilePath() {
  return path.resolve(__dirname, '..', 'data', 'user.json');
}

async function loadUsers() {
  const filePath = getUserFilePath();
  let raw;
  try {
    raw = await fs.readFile(filePath, 'utf-8');
  } catch (err) {
    if (err.code === 'ENOENT') {
      const e = new Error('user.json not found');
      e.status = 404;
      throw e;
    }
    throw err;
  }

  try {
    const parsed = JSON.parse(raw);
    return parsed.users || [];
  } catch {
    const e = new Error('Invalid JSON in user.json');
    e.status = 500;
    throw e;
  }
}


router.get('/profile', async (req, res, next) => {
  try {
    const filePath = getUserFilePath();
    const raw = await fs.readFile(filePath, 'utf-8');
    // validate JSON before sending
    JSON.parse(raw);
    res.type('json').send(raw);
  } catch (err) {
    if (err.code === 'ENOENT') {
      return res.status(404).json({ status: false, message: 'user.json not found' });
    }
    if (err.name === 'SyntaxError') {
      return res.status(500).json({ status: false, message: 'Invalid JSON in user.json' });
    }
    next(err);
  }
});


router.post('/login', async (req, res, next) => {
  try {
    let { username, password } = req.body || {};

    // normalize & validate inputs
    if (typeof username === 'string') username = username.trim();
    if (typeof password === 'string') password = password.trim();

    if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
      return res.status(400).json({
        status: false,
        message: 'username and password are required as strings'
      });
    }

    const users = await loadUsers();
    const user = users.find(u => u.username === username);

    if (!user) {
      return res.json({ status: false, message: 'User Name is invalid' });
    }

    if (user.password !== password) {
      return res.json({ status: false, message: 'Password is invalid' });
    }

    return res.json({ status: true, message: 'User Is valid' });
  } catch (err) {
    next(err);
  }
});


router.get('/logout/:username', (req, res) => {
  const { username } = req.params;
  res.type('html').send(`<b>${username}</b> successfully logged out.`);
});

module.exports = router;

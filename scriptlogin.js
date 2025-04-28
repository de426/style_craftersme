const express = require('express');
const router = express.Router();
const User = require('./models.js'); // sahi path do

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials!' });
    }

    // Password match check
    if (user.password !== password) {
      return res.status(400).json({ message: 'Invalid credentials!' });
    }

    res.status(200).json({ message: 'Login successful!' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error!' });
  }
});

module.exports = router;

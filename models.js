const mongoose = require('mongoose');

// Define User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  // Verification
  verified: {
    type: Boolean,
    default: false
  },
  verificationCode: {
    type: String
  },
  verificationExpires: {
    type: Date
  }
});

// Create Model
const User = mongoose.model('User', userSchema);

// Export Model
module.exports = User;

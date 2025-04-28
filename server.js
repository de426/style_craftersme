const mongoose = require('mongoose');

// MongoDB URI
const mongoURI = 'mongodb+srv://dhruv:Dhruv%40123@cluster0.jt8a9dr.mongodb.net/ClusterO?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected successfully!'))
.catch((error) => console.error('❌ MongoDB connection failed:', error));

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect MongoDB (Tumne already connect kar liya hai ✅)

// Import and use user routes
const userRoutes = require('./models'); // sahi path dena
app.use('/api', userRoutes);

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const mongoose = require('mongoose');

// Connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/socialNetworkDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

module.exports = mongoose.connection;

const mongoose = require('mongoose');

// Connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;

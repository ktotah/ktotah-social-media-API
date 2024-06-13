const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// Add prefix of `/users` to routes created in `userRoutes.js`
router.use('/users', userRoutes);

// Add prefix of `/thoughts` to routes created in `thoughtRoutes.js`
router.use('/thoughts', thoughtRoutes);

module.exports = router;
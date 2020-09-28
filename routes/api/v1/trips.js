const express = require('express');
const router = express.Router();

// @route   GET api/trips
// @desc    Trips route
// @access  Public
router.get('/', (req, res) => {
	res.send('trips route');
});

module.exports = router;

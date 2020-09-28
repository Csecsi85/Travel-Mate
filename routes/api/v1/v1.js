const express = require('express');

const router = express.Router();

router.use('/users', require('./users'));
router.use('/auth', require('./auth'));
router.use('/trips', require('./trips'));

module.exports = router;
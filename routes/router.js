const express = require('express');
const router =express.Router();
const dev = require('../controller/devController');

router.get('/', dev.app);

module.exports = router;
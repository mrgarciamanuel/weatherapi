const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

router.get('/getLocation', weatherController.getLocation);

module.exports = router;
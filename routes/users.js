var express = require('express');
var router = express.Router();

const { validateToken } = require('../middleware/auth');
const { profile } = require('../controller/users');

router.get('/profile', validateToken, profile)

module.exports = router;

var express = require('express');
var router = express.Router();

const { signUp, generateToken } = require('../controller/auth');
const { validatePassword } = require('../middleware/auth');

router.post('/sign-up', signUp);

router.post('/token', validatePassword, generateToken);

module.exports = router;

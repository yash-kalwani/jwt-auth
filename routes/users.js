var express = require('express');
var router = express.Router();

const { validateToken } = require('../middleware/auth');

router.get('/profile', validateToken, (req, res, next) => {
  const { user } = req.locals || {};
  res.json({ user })
})

module.exports = router;

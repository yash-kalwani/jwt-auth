var express = require('express');
var router = express.Router();

/* GET root endpoint */
router.get('/', function (req, res, next) {
  res.send({ hello: 'world' });
});

module.exports = router;

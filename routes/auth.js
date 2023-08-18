var express = require('express');
var router = express.Router();

// var jwt = require('jsonwebtoken');
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

const sign = require('jwt-encode');
const secret = 'secret';

router.post('/', (req, res, next) => {
  const { id, password } = req.body;

  const data = {
    sub: '1234567890',
    id,
    password,
    iat: 1516239022
  };
  

  const jwt = sign(data, secret);
  console.log(jwt);

  res.json(jwt);
})

module.exports = router;


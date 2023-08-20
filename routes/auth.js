var express = require('express');
var router = express.Router();

const User = require('../models/user');
const db = require('../dummyDB/index');

const { validatePassword } = require('../middleware/authentication');

// var jwt = require('jsonwebtoken');
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

const sign = require('jwt-encode');

// Secret, get this from a really secure place
const secret = 'secret';

router.post('/sign-up', (req, res, next) => {
  const { firstName, lastName, org, emailId, password } = req.body;

  // do user validation here
  // 1. validate user details
  // 2. validate password
  // 3. check if the user already exists
  // 4. multiple other things
  const user = new User(emailId, password, firstName, lastName, org).get();
  db.push(user);

  res.json(user);
});

router.post('/token', validatePassword, (req, res, next) => {
  const { id, password } = req.body;

  const data = {
    sub: id,
    id,
    password,
    iat: Date.now()
  };
  
  const jwt = sign(data, secret);

  res.json({ token: `Bearer ${jwt}` });
})

module.exports = router;


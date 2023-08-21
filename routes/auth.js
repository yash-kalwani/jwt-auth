var express = require('express');
var router = express.Router();

const User = require('../models/user');
const db = require('../dummyDB/index');

const { validatePassword } = require('../middleware/auth');

var jwt = require('jsonwebtoken');

// We need to get this secret via env vars from a secrets manager in a secure way
const secret = 'secret';

router.post('/sign-up', (req, res, next) => {
  const { firstName, lastName, org, emailId, password } = req.body;

  // do user validation here
  // 1. validate user details
  // 2. validate password
  // 3. check if the user already exists
  // 4. multiple other things
  const user = new User(emailId, firstName, lastName, org).get();
  db.push({ ...user, password });

  res.json(user);
});

router.post('/token', validatePassword, (req, res, next) => {
  const { user } = req.locals || {};

  const { emailId, id, password } = user;

  const data = {
    sub: emailId,
    id: id,
    password,
  };

  const token = jwt.sign(data, secret, { expiresIn: 60 });

  res.json({ token: `Bearer ${token}` });
})

module.exports = router;


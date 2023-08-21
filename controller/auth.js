const User = require('../models/user');
const db = require('../dummyDB/index');

var jwt = require('jsonwebtoken');

// We need to get this secret via env vars from a secrets manager in a secure way
const secret = 'secret';

// Ideally we would have the database level interactions on the service level but since we dont really have a
// database i am not moving this to service

const signUp = async (req, res, next) => {
  const { firstName, lastName, org, emailId, password } = req.body;

  // do user validation here
  // 1. validate user details
  // 2. validate password
  // 3. check if the user already exists
  // 4. multiple other things
  const user = new User(emailId, firstName, lastName, org).get();
  db.push({ ...user, password });

  res.json(user);
}

const generateToken = async (req, res, next) => {
  const { user } = req.locals || {};

  const { emailId, id, password } = user;

  const data = {
    sub: emailId,
    id: id,
    password,
  };

  const token = jwt.sign(data, secret, { expiresIn: 60 });

  res.json({ token: `Bearer ${token}` });
}

module.exports = {
  signUp,
  generateToken
}
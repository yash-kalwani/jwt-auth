const createError = require('http-errors');

const db = require('../dummyDB/index');
const jwt = require('jsonwebtoken');

// We need to get this secret via env vars from a secrets manager in a secure way
const secret = 'secret';

const validateToken = (req, res, next) => {
  // Do authentication here
  const { authorization: jwtToken } = req.headers;
  const token = jwtToken.split(' ')[1];

  const decoded = jwt.verify(token, secret);
  const { sub: emailId, password } = decoded;

  const user = getUser(emailId, password);

  if (!user) {
    next(createError(401));
  }

  req.locals = { user };
  next();
};

const getUser = (emailId, password) => {
  for (let i = 0; i < db.length; i++) {
    const dbUser = db[i];
    if (dbUser.emailId === emailId && dbUser.password === password) {
      const clonedObj = { ...dbUser };
      delete clonedObj.password;
      return clonedObj;
    }
  }
};

const validatePassword = (req, res, next) => {
  const { emailId, password } = req.body;

  const user = getUser(emailId, password);

  if (!user) {
    next(createError(401));
  }

  user.password = password;

  req.locals = { user };
  next();
};

module.exports = {
  validatePassword,
  validateToken,
};

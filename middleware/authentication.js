const createError = require('http-errors');

const db = require('../dummyDB/index');

const authenticator = (req, res, next) => {

  // Do authentication here
  const { token } = req.headers;

  const { id } = decodeToken(token);

  db.forEach((dbUser) => {
    if (dbUser.id === parseInt(id)) {
      req.locals = {
        user: dbUser
      }
    }
  })

  if (!req.locals || !req.locals.user) {
    next(createError(401));
  }

  next();
}

const decodeToken = (token) => {
  // get id from decoding & authenticating jwt token 
  return { id: token }
}

module.exports = authenticator;
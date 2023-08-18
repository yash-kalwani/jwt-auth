const db = require('../dummyDB/index');

// decoding the token to verify if everything is fine


const authenticator = (req, res, next) => {

  // Do authentication here
  const { token } = req.headers;

  const { id } = decodeToken(token);

  db.forEach((dbUser) => {
    if (`${dbUser.id}` === id) {
      req.locals = {
        user: dbUser,
        isAuthenticated: true
      }
    } else {
      req.locals = {
        user: null,
        isAuthenticated: false
      }
    }
  })
  next();
}

const decodeToken = (token) => {
  // get id from decoding & authenticating jwt token 
  return { id: token }
}

const isAuthenticated = () => {
  return true
}

module.exports = authenticator;
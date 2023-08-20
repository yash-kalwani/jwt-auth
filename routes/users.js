var express = require('express');
var router = express.Router();

const db = require('../dummyDB/index');
const User = require('../models/user');
const authentication = require('../middleware/authentication');

router.post('/', (req, res, next) => {
  const { firstName, lastName, org, emailId, password } = req.body;

  // do user validation here
  // 1. validate user details
  // 2. validate password
  // 3. check if the user already exists
  // 4. multiple other things
  const user = new User(emailId, password, firstName, lastName, org).get();
  db.push(user);

  res.json(user);
})

router.get('/profile', authentication, () => {

})

router.get('/', authentication, (req, res, next) => {
  let user = req.locals.user;

  // accessing from middleware
  // nothing is happening here
  res.json(user)
});

module.exports = router;

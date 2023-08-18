var express = require('express');
var router = express.Router();

const db = require('../dummyDB/index');
const user = require('../models/user');
const authenticator = require('../middleware/authentication');

/* GET users listing. */
router.get('/super-user', function(req, res, next) {
  const superUser = user[0];
  console.log(superUser);
  res.send(superUser);
});

router.post('/', (req, res, next) => {
  const { firstName, lastName, org, dateAdded } = req.body;

  // do validation here
  const userObj = new user(firstName, lastName, org, dateAdded)
  const final = userObj.get();

  db.push(final);

  res.json(final);
})

router.get('/', authenticator, function(req, res, next) {
  let user = req.locals.user;

  // accessing from middleware
  // nothing is happening here
  res.json(user)
});

module.exports = router;

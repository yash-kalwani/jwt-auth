const db = require('../dummyDB/index');

class User {
  constructor(emailId, password, firstName, lastName, org) {
    this.firstName = firstName
    this.lastName = lastName
    this.org = org
    this.dateAdded = Date.now();
    this.id = db.length;
    this.emailId = emailId;
    this.password = this.encodePassword(password);
  }

  encodePassword(password) {
    return password
  }

  get() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      org: this.org,
      dateAdded: this.dateAdded,
      id: this.id
    }
  }
}

module.exports = User;
const db = require('../dummyDB/index');

class User {
  constructor(emailId, firstName, lastName, org) {
    this.firstName = firstName
    this.lastName = lastName
    this.org = org
    this.dateAdded = Date.now();
    this.id = db.length;
    this.emailId = emailId;
  }

  get() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      emailId: this.emailId,
      org: this.org,
      dateAdded: this.dateAdded,
      id: this.id
    }
  }
}

module.exports = User;
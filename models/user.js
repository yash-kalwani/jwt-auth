const db = require('../dummyDB/index');

class User {
  constructor(firstName, lastName, org) {
    console.log(firstName, lastName, org);
    this.firstName = firstName
    this.lastName = lastName
    this.org = org
    this.dateAdded = Date.now();
    console.log('b',db.length);
    this.id = db.length;
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
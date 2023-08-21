/* This is a protected db */

// 1. We are managing it in an array for the sake of the assignment
// 2. This would have been a strcutured PostgreSQL db with columns

// assume this is users table in the postgres db
const users = [
  {
    first_name: 'SUPER USER',
    last_name: 'ADMIN',
    org: 'goGlocal',
    date_added: '	2023-08-18T08:17:52Z',
    id: 0,
    emailId: 'superadmin@gmail.com',
    password: 'password',
  },
];

module.exports = users;

const pgp = require('pg-promise')();

const db = pgp({
  user: 'genious',
  database: 'genious',
  application_name: 'genious',
});

module.exports = exports = db;
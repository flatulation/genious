const pgp = require('pg-promise')();

module.exports = exports = pgp({
  user: 'genious',
  database: 'genious',
  application_name: 'genious',
});

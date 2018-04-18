const pgp = require('pg-promise')();

const db = pgp({
  user: 'genious',
  database: 'genious',
  application_name: 'genious',
});

async function connect() {
  await db.connect();
}

module.exports = exports = {
  connect,
};
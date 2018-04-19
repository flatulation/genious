const db = require('..');
const sql = require('../sql');

module.exports = exports = {};

module.exports.create = async () => {
  return db.none(sql.create);
};

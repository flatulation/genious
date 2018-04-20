const db = require('..');
const sql = require('../sql').pairs;

module.exports = {
  create: async () => {
    return db.none(sql.create); 
  }
};

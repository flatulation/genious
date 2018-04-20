const db = require('..');
const sql = require('../sql').pairs;

/**
 * Create the pairs table, indexes and the get_third_word(text, text) function.
 */
async function create() {
    return db.none(sql.create); 
  }
};

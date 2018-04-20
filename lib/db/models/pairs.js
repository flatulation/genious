const db = require('..');
const sql = require('../sql').pairs;

/**
 * Create the pairs table, indexes and the get_third_word(text, text) function.
 */
async function create() {
  return db.none(sql.create);
}
exports.create = create;

/**
 * Insert a new combination into the table of pairs.
 * @param {string} userID - the ID of the user that wrote the words
 * @param {string} first - the first word
 * @param {string} second - the second word
 * @param {string} third - the word associated with the first two
 */
async function insert(userID, first, second, third) {
  return db.none(sql.insert, {
    userID, first, second, third
  });
}
exports.insert = insert;

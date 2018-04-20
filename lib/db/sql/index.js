const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

const queryFileOptions = {
  minify: true,
  compress: true,
};

module.exports = {
  pairs: {
    create: loadSql('./pairs/create.sql'),
    insert: loadSql('./pairs/insert.sql'),
  },
};

/**
 * Return a pgp.QueryFile object from a file path.
 * @param {string} filePath 
 * @returns {QueryFile}
 * @throws {Error}
 */
function loadSql(filePath) {
  filePath = path.join(__dirname, filePath);
  const queryFile = new QueryFile(filePath, queryFileOptions);
  if (queryFile.error) {
    throw new Error(queryFile.error);
  }
  return queryFile;
}

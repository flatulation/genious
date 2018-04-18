const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

const queryFileOptions = {
  minify: true,
  compress: true,
};

module.exports = exports = {
  pairs: {
    create: sql('pairs/create.sql'),
  }
};

function sql(filePath) {
  filePath = path.join(__dirname, filePath);
  const queryFile = new QueryFile(filePath, queryFileOptions);
  if (queryFile.error) {
    throw new Error(queryFile.error);
  }
  return queryFile;
}
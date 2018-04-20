const client = require('./client');
const db = require('./db');
const pairs = require('./db/models/pairs');

async function main() {
  await db.connect();
  await pairs.create();
  let token;
  try {
    token = process.env.GENIOUS_TOKEN.trim();
  } catch (ex) {
    if (ex instanceof TypeError) {
      throw new Error('you need to put the bot token in $GENIOUS_TOKEN');
    } else {
      throw ex;
    }
  }
  await client.login(token);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

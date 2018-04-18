const client = require('./client');
const db = require('./db');

async function main() {
  await db.connect();
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
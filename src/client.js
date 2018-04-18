const commando = require('discord.js-commando');
const logger = require('./logger');

const client = new commando.CommandoClient({
  commandPrefix: '.',
  unknownCommandResponse: false,
  commandEditableDuration: 0,
  nonCommandEditable: false,
});

client.on('ready', function() {
  logger.info('Ready.');
});

module.exports = exports = client;
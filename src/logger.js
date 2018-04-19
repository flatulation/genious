const winston = require('winston');

module.exports = exports = winston.createLogger({
  transports: [
    new winston.transports.Console,
  ],
  exceptionHandlers: [
    new winston.transports.Console,
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(info => `${info.timestamp} - ${info.level}: ${info.message}`),
  ),
});
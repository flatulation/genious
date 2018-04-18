const winston = require('winston');

const logger = winston.createLogger({
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
})

module.exports = exports = logger;
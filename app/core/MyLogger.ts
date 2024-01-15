import { LoggerService } from '@nestjs/common';
import { format, transports } from 'winston';
import winston = require('winston');

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const level = () => {
  const env = process.env.NODE_ENV || 'development';
  const isDevelopment = env === 'development';
  return isDevelopment ? 'debug' : 'warn';
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

winston.addColors(colors);

const formatter = (context?: string, label?: string) =>
  format.combine(
    format.label({ label, message: false }),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    format.colorize({ all: true }),
    format.printf(
      (info) =>
        `[${context ? context : 'APP'}] - ${info.timestamp} ${info.level}: ${
          info.message
        }`,
    ),
    // winston.format.json(),
  );

const transporters = [
  new transports.File({
    filename: 'storage/logs/error.log',
    level: 'error',
  }),
  new transports.File({
    level: 'info',
    filename: 'storage/logs/all.log',
    handleExceptions: false,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
  }),
  new transports.Console({
    level: 'debug',
    handleExceptions: false,
  }),
];

export class MyLogger implements LoggerService {
  public context?: string;

  constructor(label?: string) {
    this._logger = winston.createLogger({
      levels,
      level: level(),
      transports: transporters,
      format: formatter(label),
    });
  }

  private _logger: winston.Logger;

  error(message: string, ...meta: any[]) {
    this._logger.error(message, meta);
  }

  warn(message: string, ...meta: any[]) {
    this._logger.warn(message, meta);
  }

  log(message: string, ...meta: any[]) {
    this._logger.info(message, meta);
  }

  verbose(message: string, ...meta: any[]) {
    this._logger.verbose(message, meta);
  }

  debug(message: string, ...meta: any[]) {
    this._logger.debug(message, meta);
  }

  silly(message: string, ...meta: any[]) {
    this._logger.silly(message, meta);
  }

  http(message: string, ...meta: any[]) {
    this._logger.http(message, meta);
  }

  clear() {
    this._logger.clear();
  }
}

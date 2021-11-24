"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pool = exports.isProduction = exports.connectionString = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _pg = require("pg");

if (process.env.NODE_ENV !== 'production') {
  _dotenv["default"].config();
}

var isProduction = process.env.NODE_ENV === 'production';
exports.isProduction = isProduction;
var connectionString = "postgres://".concat(process.env.DB_USER, ":").concat(process.env.DB_PASSWORD, "@").concat(process.env.DB_HOST, ":").concat(process.env.DB_PORT, "/").concat(process.env.DB_DATABASE);
exports.connectionString = connectionString;
var pool = new _pg.Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});
exports.pool = pool;
console.log(connectionString);
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.estacionid = exports.estacionNom = exports.estacion = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _require = require('../conexiones/configDB'),
    pool = _require.pool;

var pusher = require('../conexiones/configPusher');

var pgClient;
pool.connect(function (err, client) {
  if (err) {
    console.log(err);
  }

  console.log("conexion ala base estacion");
  pgClient = client;
  client.on('notification', function (msg) {
    pusher.trigger('watch_dato_sensor', 'new_record', JSON.parse(msg.payload));
  });
  var query = client.query('LISTEN watch_dato_sensor');
});

var estacion = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var data, query;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = "SELECT * FROM public.estacion ";
            _context.next = 3;
            return pgClient.query(data, function select(error, result, fields) {
              if (error) {
                console.log(error);
                return query;
              }

              res.send(result.rows);
            });

          case 3:
            query = _context.sent;
            console.log("fin.");

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function estacion(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.estacion = estacion;

var estacionid = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var data, query;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = "SELECT * FROM public.estacion WHERE \"idEstacion\"=".concat(req.params.idEstacion);
            _context2.next = 3;
            return pgClient.query(data, function select(error, result, fields) {
              if (error) {
                console.log(error);
                return query;
              }

              res.send(result.rows);
            });

          case 3:
            query = _context2.sent;
            console.log("fin.");

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function estacionid(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.estacionid = estacionid;

var estacionNom = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var data, query;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            data = "SELECT \"idSensor\", \"maxSensor\", \"minSensor\",\"nombreSensor\", \"nombreEstacion\"\nFROM public.sensor INNER JOIN public.tiposensores ON sensor.fk_sensores = \"id_tipoSensor\"\nINNER JOIN public.estacion ON sensor.fk_estacion = \"idEstacion\"\nWHERE \"nombreEstacion\"='".concat(req.params.nombreEstacion, "'");
            _context3.next = 3;
            return pgClient.query(data, function select(error, result, fields) {
              if (error) {
                console.log(error);
                return query;
              }

              res.send(result.rows);
            });

          case 3:
            query = _context3.sent;
            console.log("fin.");

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function estacionNom(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.estacionNom = estacionNom;
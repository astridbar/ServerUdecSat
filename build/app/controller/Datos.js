"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.datosfks = exports.datosfk = exports.datose = exports.datosPersonalzados = exports.datosHora = exports.datosFechaHora = exports.datosFecha = exports.datos = void 0;

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

  console.log("conexion ala base datos");
  pgClient = client;
  client.on('notification', function (msg) {
    pusher.trigger('watch_dato_sensor', 'new_record', JSON.parse(msg.payload));
  });
  var query = client.query('LISTEN watch_dato_sensor');
});

var datosfk = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var data, query;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = "SELECT * FROM public.dato_sensor where \"fk_sensor\"='".concat(req.params.fk_sensor, "'");
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

  return function datosfk(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.datosfk = datosfk;

var datosfks = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var data, query;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = "SELECT * FROM public.dato_sensor where \"fk_sensor\"\n='".concat(req.params.fk_sensor, "'");
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

  return function datosfks(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.datosfks = datosfks;

var datos = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var data, query;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            data = "SELECT*FROM public.dato_sensor";
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

  return function datos(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //ultimos 5 datos 


exports.datos = datos;

var datose = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var data, query;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            data = "SELECT * FROM public.dato_sensor\n    where \"fk_sensor\"= ".concat(req.params.fk_idSensor, "\n    ORDER BY \"fecha\" desc, \"hora\" desc limit 5");
            _context4.next = 3;
            return pgClient.query(data, function select(error, result, fields) {
              if (error) {
                console.log(error);
                return query;
              }

              res.send(result.rows);
            });

          case 3:
            query = _context4.sent;
            console.log("fin.");

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function datose(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.datose = datose;

var datosPersonalzados = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var data, query;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            data = "SELECT \"idSensor\",\"valor\", \"fecha\", \"hora\",\"nombreSensor\", \"nombreEstacion\",\"maxSensor\", \"minSensor\"\n        FROM public.dato_sensor  INNER JOIN public.sensor ON dato_sensor.fk_sensor = \"idSensor\"\n        INNER JOIN public.estacion ON sensor.fk_estacion = \"idEstacion\"\n        INNER JOIN public.tiposensores ON sensor.fk_sensores = \"id_tipoSensor\"";
            _context5.next = 3;
            return pgClient.query(data, function select(error, result, fields) {
              if (error) {
                console.log(error);
                return query;
              }

              res.send(result.rows);
            });

          case 3:
            query = _context5.sent;
            console.log("fin.");

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function datosPersonalzados(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.datosPersonalzados = datosPersonalzados;

var datosFecha = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var data, query;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            data = "SELECT \"idSensor\",\"valor\", \"fecha\", \"hora\",\"nombreSensor\", \"nombreEstacion\",\"maxSensor\", \"minSensor\"\n            FROM public.dato_sensor  INNER JOIN public.sensor ON dato_sensor.fk_sensor = \"idSensor\"\n            INNER JOIN public.estacion ON sensor.fk_estacion = \"idEstacion\"\n            INNER JOIN public.tiposensores ON sensor.fk_sensores = \"id_tipoSensor\" WHERE \"fecha\"=".concat(req.params.fecha);
            _context6.next = 3;
            return pgClient.query(data, function select(error, result, fields) {
              if (error) {
                console.log(error);
                return query;
              }

              res.send(result.rows);
            });

          case 3:
            query = _context6.sent;
            console.log("fin.");

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function datosFecha(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.datosFecha = datosFecha;

var datosHora = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var data, query;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            data = "SELECT \"idSensor\",\"valor\", \"fecha\", \"hora\",\"nombreSensor\", \"nombreEstacion\",\"maxSensor\", \"minSensor\"\n                FROM public.dato_sensor  INNER JOIN public.sensor ON dato_sensor.fk_sensor = \"idSensor\"\n                INNER JOIN public.estacion ON sensor.fk_estacion = \"idEstacion\"\n                INNER JOIN public.tiposensores ON sensor.fk_sensores = \"id_tipoSensor\" WHERE \"hora\"=".concat(req.params.hora);
            _context7.next = 3;
            return pgClient.query(data, function select(error, result, fields) {
              if (error) {
                console.log(error);
                return query;
              }

              res.send(result.rows);
            });

          case 3:
            query = _context7.sent;
            console.log("fin.");

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function datosHora(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.datosHora = datosHora;

var datosFechaHora = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var data, query;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            data = "SELECT \"idSensor\",\"valor\", \"fecha\", \"hora\",\"nombreSensor\", \"nombreEstacion\",\"maxSensor\", \"minSensor\"\n                    FROM public.dato_sensor  INNER JOIN public.sensor ON dato_sensor.fk_sensor = \"idSensor\"\n                    INNER JOIN public.estacion ON sensor.fk_estacion = \"idEstacion\"\n                    INNER JOIN public.tiposensores ON sensor.fk_sensores = \"id_tipoSensor\" WHERE \"hora\"=".concat(req.params.hora, " AND \"fecha\"=").concat(req.params.fecha);
            _context8.next = 3;
            return pgClient.query(data, function select(error, result, fields) {
              if (error) {
                console.log(error);
                return query;
              }

              res.send(result.rows);
            });

          case 3:
            query = _context8.sent;
            console.log("fin.");

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function datosFechaHora(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.datosFechaHora = datosFechaHora;
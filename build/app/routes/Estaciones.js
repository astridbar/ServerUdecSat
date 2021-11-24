"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _Estaciones = require("../controller/Estaciones");

var rEstacion = _express["default"].Router();

/* GET users listing. */
rEstacion.get("/estacion", _Estaciones.estacion);
rEstacion.get("/estacionid/:idEstacion", _Estaciones.estacionid);
rEstacion.get("/estacionNombre/:nombreEstacion", _Estaciones.estacionNom);
var _default = rEstacion;
exports["default"] = _default;
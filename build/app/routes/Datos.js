"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _Datos = require("../controller/Datos");

var rDatos = _express["default"].Router();

/* GET users listing. */
rDatos.get("/datosid/:fk_sensor", _Datos.datosfk);
rDatos.get("/datosS/:fk_sensor", _Datos.datosfks);
rDatos.get("/datos", _Datos.datos);
rDatos.get("/ultimo/:fk_idSensor", _Datos.datose);
rDatos.get("/reporte", _Datos.datosPersonalzados);
rDatos.get("/buscarFecha/:fecha", _Datos.datosFecha);
rDatos.get("/buscarHora/:hora", _Datos.datosHora);
rDatos.get("/fechaHora/:fecha/:hora", _Datos.datosFechaHora);
var _default = rDatos;
exports["default"] = _default;
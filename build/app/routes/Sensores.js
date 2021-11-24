"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _Sensores = require("../controller/Sensores");

var rSensor = _express["default"].Router();

/* GET home page. */
rSensor.get("/sensor", _Sensores.sensores);
rSensor.get("/sensorid/:idSensor", _Sensores.sensoresid);
var _default = rSensor;
exports["default"] = _default;
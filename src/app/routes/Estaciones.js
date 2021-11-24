import express from 'express';
var rEstacion = express.Router();
import {estacion,estacionid,estacionNom}  from"../controller/Estaciones";
/* GET users listing. */


rEstacion.get("/estacion",estacion);
rEstacion.get("/estacionid/:idEstacion",estacionid);
rEstacion.get("/estacionNombre/:nombreEstacion",estacionNom);

export default rEstacion;

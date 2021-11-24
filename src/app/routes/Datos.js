import express from 'express';
var rDatos = express.Router();
import {datosfk,datosfks,datos,datose,datosPersonalzados,datosFecha,datosHora,datosFechaHora} from"../controller/Datos";
/* GET users listing. */


rDatos.get("/datosid/:fk_sensor", datosfk); 
rDatos.get("/datosS/:fk_sensor",datosfks); 
rDatos.get("/datos",datos); 
rDatos.get("/ultimo/:fk_idSensor",datose); 
rDatos.get("/reporte",datosPersonalzados); 
rDatos.get("/buscarFecha/:fecha",datosFecha); 
rDatos.get("/buscarHora/:hora",datosHora);
rDatos.get("/fechaHora/:fecha/:hora",datosFechaHora);
export default rDatos ;

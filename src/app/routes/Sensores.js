import express from 'express';
var rSensor = express.Router();
import  {sensores,sensoresid} from "../controller/Sensores";

/* GET home page. */

rSensor.get("/sensor",sensores);
rSensor.get("/sensorid/:idSensor",sensoresid);

export default rSensor;

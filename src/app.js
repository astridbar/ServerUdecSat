
import express from 'express';
import bodyParser from'body-parser';
import favicon from'serve-favicon';
var cors = require("cors");
import path  from "path";
const app = express();
import cookieParser from'cookie-parser';
import logger from'morgan';


import rDatos from'./app/routes/Datos';
import rEstacion from'./app/routes/Estaciones';
import rSensor from'./app/routes/Sensores';  

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", rDatos);
app.use("/api", rEstacion);
app.use("/api", rSensor);

  app.get('/', async(req, res) => {
   return res.send("este es el servidor de udecSat alertas tempranas");
  })
  
  export default app;
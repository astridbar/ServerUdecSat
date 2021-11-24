const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
var cors = require("cors");
const path  = require( "path");
const app = express();
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const rDatos = require('./src/app/routes/Datos');
const rEstacion = require('./src/app/routes/Estaciones');
const rSensor = require('./src/app/routes/Sensores');  

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

  app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

  
module.exports= app;
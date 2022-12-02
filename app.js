var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var user_routes = require('./rutas/usuarioRuta');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//configurar cabeceras http

//ruta base

app.use('/api', user_routes);



module.exports = app;
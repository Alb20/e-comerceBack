var express = require('express');
var UsuarioControl = require('../controlador/usuarioControl');

var api = express.Router();

api.post('/registro', UsuarioControl.registrarUsuario);
api.post('/login', UsuarioControl.accesoUsuario);
api.put('/actualizarUsuario/:id', UsuarioControl.actualizarUsuario);
api.delete('/borrarUsuario/:id',UsuarioControl.borrarUsuario);
module.exports = api;
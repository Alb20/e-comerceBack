var mongoose = require('mongoose');
var Shema = mongoose.Schema;


var EsquemaUsuarios = Shema({
    nombre: String,
    apellidoPa: String,
    apellidoMa:String,
    direccion:String,
    numero:Number,
    email: String,
    password: String
});


module.exports = mongoose.model('Usuarios', EsquemaUsuarios);
var mongodb = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongodb.connect('mongodb+srv://Transformer:Bichotabb@cluster0.x6t8vgs.mongodb.net/e-comerce', (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log("Conexion Exitosa");
        app.listen(port, function() {
            console.log("El servidor api rest de musica escuchando en http://localhost:" + port);
        });
    }
});
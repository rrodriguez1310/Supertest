const express = require("express");
require('./database');

var Funciones = require('./controllers/funciones');

const app = express();
var enrutador = express.Router();

bodyParser = require('body-parser'),

 app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Credentials', true);
    res.set('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
    if (req.method == 'OPTIONS') return res.status(200).send();
    next();
}) 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(enrutador);

enrutador.get('/', function (req, res) {
    res.status(401).send('Hola Estas en Casa!');
  });
  

enrutador.route('/insert').post(Funciones.insertar);
enrutador.route('/edit').put(Funciones.editar);

module.exports = app;
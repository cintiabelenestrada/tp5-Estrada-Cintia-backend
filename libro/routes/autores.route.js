//defino controlador para el manejo de CRUD
const autoresCtrl = require('../controllers/autores.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de autores
router.post('/', autoresCtrl.createAutores);
router.get('/', autoresCtrl.getAutores);
module.exports = router;
//defino controlador para el manejo de CRUD
const libroCtrl = require('../controllers/libro.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de autores
router.post('/', libroCtrl.createLibro);
router.get('/', libroCtrl.getLibros);
router.get('/:id', libroCtrl.getLibrosByCodigoAutor);

module.exports = router;
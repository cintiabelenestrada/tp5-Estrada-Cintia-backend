//defino controlador para el manejo de CRUD
const productoCtrl = require('./../controllers/producto.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de producto
router.post('/', productoCtrl.createProducto);
router.get('/', productoCtrl.getProductos);
router.put('/:id', productoCtrl.editProducto);
router.delete('/:id', productoCtrl.deleteProducto);
router.get('/destacados', productoCtrl.getProductoDestacado);
module.exports = router;
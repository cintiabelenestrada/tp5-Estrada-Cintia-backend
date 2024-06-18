const express = require('express');
const router = express.Router();

const transaccionController = require('../controllers/transaccion.controller');

//definimos las rutas para la gestion de transacciones
router.post('/', transaccionController.create);
router.get('/', transaccionController.getAllTransacciones);

module.exports = router;

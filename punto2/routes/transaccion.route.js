const express = require('express');
const router = express.Router();

const transaccionController = require('../controllers/transaccion.controller');

router.post('/', transaccionController.create);
// router.get('/', transaccionController.getAll);

module.exports = router;

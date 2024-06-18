const TransaccionModel = require('../models/transaccion.model');
const transaccionController = {};

transaccionController.create = async (req, res) => {
  var transaccion = new TransaccionModel(req.body);
  try {
    await transaccion.save();
    console.log("Create Transcaccion");
    res.json({
      'status': '1',
      'msg': 'Transaccion guardada.'
    })
  } catch (err) {
    res.status(400).json({
      status: '400',
      message: 'Error procesando operacion.',
    });
  }
};

//get all transacciones
transaccionController.getAllTransacciones = async (req, res) => {
  var transacciones = await TransaccionModel.find();
  res.json({transacciones });
};

//get para traer transacciones por email
transaccionController.getTransaccionesByEmail = async (req, res) => {
  const emailCliente = req.query.emailCliente;

  if (!emailCliente) {
    return res.status(400).json({ message: 'El email del cliente es requerido' });
  }

  try {
    const transaccionesEmail = await TransaccionModel.find({emailCliente});
    return res.json({transacciones: transaccionesEmail});
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener transacciones', error });
  }
};

module.exports = transaccionController;
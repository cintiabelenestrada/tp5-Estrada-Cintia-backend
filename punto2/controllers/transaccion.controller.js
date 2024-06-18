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

// get transacciones por modena origen y moneda destino
transaccionController.getTransaccionesByMoneda = async (req, res) => {
  const { monedaOrigen, monedaDestino } = req.query;

  if (!monedaOrigen || !monedaDestino) {
    return res.status(400).json({ message: 'Las monedas de origen y destino son requeridas' });
  }

  try {
    const transaccionesByMoneda = await TransaccionModel.find({monedaOrigen,monedaDestino});
    return res.json({ transacciones: transaccionesByMoneda });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener transacciones', error: error.message });
  }
};

module.exports = transaccionController;
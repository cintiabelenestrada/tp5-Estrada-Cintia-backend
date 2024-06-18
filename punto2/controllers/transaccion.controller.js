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

module.exports = transaccionController;
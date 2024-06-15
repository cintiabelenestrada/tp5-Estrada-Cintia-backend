const Espectador = require('../models/espectador');
const espectadorCtrl = {}

//POST que crea un nuevo espectador
espectadorCtrl.createEspectador = async (req, res) => {
  var espectador = new Espectador(req.body);
  try {
      await espectador.save();
      res.json({
          'status': '1',
          'msg': 'Espectador Creado.'
      })
  } catch (error) {
      res.status(400).json({
          'status': '0',
          'msg': 'Error procesando operacion.'
      })
  }
}

//get que trae todos los espectadores
espectadorCtrl.getEspectadores = async (req, res) => {
  var espectadores = await Espectador.find();
  res.json(espectadores);
}

//get para obtener un Espectador por id
espectadorCtrl.getEspectador = async (req, res) => {
  const espectador = await Espectador.findById(req.params.id);
  res.json(espectador);
}

module.exports = espectadorCtrl;
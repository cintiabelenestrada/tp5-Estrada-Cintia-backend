const Autores = require('../models/autores');
const autoresCtrl = {}
autoresCtrl.createAutores = async (req, res) => {
  var autores = new Autores(req.body);
  try {
      await autores.save();
      console.log("Create Autores");
      res.json({
          'status': '1',
          'msg': 'Autor guardado.'
      })
  } catch (error) {
      res.status(400).json({
          'status': '0',
          'msg': 'Error procesando operacion.'
      })
  }
}

autoresCtrl.getAutores = async (req, res) => {
    var autores = await Autores.find();
    res.json(autores);
}
module.exports = autoresCtrl;
const Libro = require('../models/libro');
const libroCtrl = {}
libroCtrl.createLibro = async (req, res) => {
  var libros = new Libro(req.body);
  try {
      await libros.save();
      console.log("Create Libro");
      res.json({
          'status': '1',
          'msg': 'Libro guardado.'
      })
  } catch (error) {
      res.status(400).json({
          'status': '0',
          'msg': 'Error procesando operacion.'
      })
  }
}


libroCtrl.getLibros = async (req, res) => {
    var libros = await Libro.find().populate("autor");;
    res.json(libros);
}

// consultar libros por codigo y autor
libroCtrl.getLibrosByCodigoAutor = async (req, res) => {
  const { codigo } = req.query;
    try {
      const LibrosAutores = await libro.find({ codigo });
      return res.json(LibrosAutores);
    } catch (error) {
      res.status(500).json({ message: 'Error', error });
    }
  };

module.exports = libroCtrl;
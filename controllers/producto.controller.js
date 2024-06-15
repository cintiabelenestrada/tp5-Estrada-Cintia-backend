const Producto = require('../models/producto');
const productoCtrl = {}
productoCtrl.createProducto = async (req, res) => {
  var producto = new Producto(req.body);
  try {
      await producto.save();
      console.log("Create Product");
      res.json({
          'status': '1',
          'msg': 'Producto guardado.'
      })
  } catch (error) {
      res.status(400).json({
          'status': '0',
          'msg': 'Error procesando operacion.'
      })
  }
}

//get que trae todos los Productos
productoCtrl.getProductos = async (req, res) => {
  var productos = await Producto.find();
  res.json(productos);
}

module.exports = productoCtrl;
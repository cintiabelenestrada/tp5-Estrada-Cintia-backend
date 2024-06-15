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

//UPDATE
productoCtrl.editProducto = async (req, res) => {
  try {
      await Producto.updateOne({ _id: req.params.id }, req.body);
      res.json({
          'status': '1',
          'msg': 'Producto updated'
      })
  } catch (error) {
      res.status(400).json({
          'status': '0',
          'msg': 'Error procesando la operacion, Edicion'
      })
  }
}

//DELETE
productoCtrl.deleteProducto = async (req, res) => {
  try {
      await Producto.deleteOne({ _id: req.params.id });
      res.json({
          status: '1',
          msg: 'Producto removed'
      })
  } catch (error) {
      res.status(400).json({
          'status': '0',
          'msg': 'Error procesando la operacion de Eliminación'
      })
  }
}

//get que trae solo los productos destacados
productoCtrl.getProductoDestacado = async (req, res) => {
  try {
    const productosDestacados = await Producto.find({ destacado: true });
    res.json(productosDestacados);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos destacados', error });
  }
};


module.exports = productoCtrl;
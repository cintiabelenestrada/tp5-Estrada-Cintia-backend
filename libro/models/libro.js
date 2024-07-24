const mongoose = require('mongoose');
const { Schema } = mongoose;
const LibroSchema = new Schema({
   codigo: { type: String, required: true },
   titulo: { type: String, required: true },
   cantidadPaginas: { type: Number, required: true },
   añoEdicion: { type: Number, required: true },
   autor: { type: Schema.Types.ObjectId, ref: 'Autores', required: true}
})
module.exports = mongoose.models.Libro || mongoose.model('Libro', LibroSchema);

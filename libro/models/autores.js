const mongoose = require('mongoose');
const { Schema } = mongoose;
const AutoresSchema = new Schema({
   apellido: { type: String, required: true },
   nombres: { type: String, required: true },
   dni: { type: Number, required: true }
})
module.exports = mongoose.models.Autores || mongoose.model('Autores', AutoresSchema);

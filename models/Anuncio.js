'use strict'

const mongoose = require('mongoose');

// primero creamos el esquema
const anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]
});


// y por último creamos el modelo
const Anuncio = mongoose.model('Anuncio', anuncioSchema);
// y lo exportamos
module.exports = Anuncio;
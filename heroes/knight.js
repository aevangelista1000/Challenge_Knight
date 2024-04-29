const mongoose = require('mongoose');
const { Schema } = mongoose;

const knightSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  idade: {
    type: Number,
    require: false
  },
  armas: {
    type: Number,
    require: false
  },
  atributo: {
    type: String,
    require: false
  },
  ataque: {
    type: Number
  },
  exp: {
    type: Number,
    require: false
  }
});

module.exports = mongoose.model('tblknight', knightSchema);
const mongoose = require("mongoose");

/**
 * Cria o schema do banco de dados com as informações listadas
 */
const VeiculoSchema = new mongoose.Schema(
  {
    placa: {
      type: String,
      require: true,
      max: 8,
    },
    chassi: {
      type: String,
      required: true,
      unique: true,
      max: 17,
    },
    renavam: {
      type: Number,
      required: true,
    },
    modelo: {
      type: String,
      required: true,
    },
    marca: {
      type: String,
      required: true,
    },
    ano: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Veiculo", VeiculoSchema);

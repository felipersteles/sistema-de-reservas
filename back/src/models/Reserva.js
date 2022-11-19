const mongoose = require("mongoose");

// Schema mongoose:
const ReservaSchema = new mongoose.Schema({
  responsavel: { type: String, required: true },
  qtdAdultos: { type: number, required: true },
  qtdCriancas: { type: numer, required: true },
  dataEntrada: { type: Date, required: true },
  dataSaida: { type: Date, required: true },
  observacoes: { type: String },
});

module.exports =
  mongoose.models.reservas || mongoose.model("Reservas", ReservaSchema);

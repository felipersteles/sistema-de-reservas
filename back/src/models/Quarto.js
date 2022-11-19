const mongoose = require("mongoose");

// Schema mongoose:
const QuartoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  desc: { type: String, required: true },
  imgs: [{ type: String}],
  preco: { type: Number, required: true },
  camas: { type: Number, default: 1 },
});

module.exports =
  mongoose.models.quartos || mongoose.model("Quartos", QuartoSchema);

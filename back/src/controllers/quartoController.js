const Quarto = require("../models/Quarto.js");

const ControladorQuarto = {
  async listaQuartos(req, res) {
      try {
          const quartosListado = await Quarto.find()
          return res.status(200).json(quartosListado)
      } catch (error) {
          return res.status(400).json(error)
      }
  },

  // rota para adms
  async inserirQuarto(req, res) {
    try {
      const novoQuarto = await Quarto.create(req.body);

      console.log(novoQuarto);
      return res.status(200).json(novoQuarto);
    } catch (error) {
        console.log(error)
      return res
        .status(400)
        .json({ error: "Não foi possível criar um novo quarto" });
    }
  },
};

module.exports = ControladorQuarto;

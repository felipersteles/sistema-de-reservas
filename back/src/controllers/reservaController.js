const Reserva = require('../models/Reserva')

const ControladorReserva = {
  async fazerReserva(req, res) {
    try {
      const novaReserva = await Reserva.create(req.body);

      console.log(novaReserva);
      return res.status(200).json(novaReserva);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ error: "Não foi possível criar um novo quarto" });
    }
  },

  async listarReserva(req, res) {},
};

module.exports = ControladorReserva;

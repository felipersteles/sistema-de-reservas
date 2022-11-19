
const { Router } = require('express')
const quartoController = require('../controllers/quartoController')
const reservaController = require('../controllers/reservaController')

const rotas = Router();

//get executando uma função passando requisicao e resposta
rotas.get('/', (req, res) => {
    res.send('Olá mundo') //funcao retornando uma resposta 'hello world'
})

//Rotas utilizadas na aplicação
rotas.get('/quartos', quartoController.listaQuartos) //rota para criar o usuario
rotas.post('/quartos', quartoController.inserirQuarto) //rota para criar o usuario

rotas.post('/reservas', reservaController.fazerReserva) //rota para criar o usuario
rotas.get('/reservas', reservaController.listarReserva) //rota para criar o usuario

module.exports = rotas;
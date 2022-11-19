const express = require("express"); //Biblioteca para realizar a transmissao do server
const mongoose = require("mongoose"); //Acesso ao mongoDB
const cors = require("cors"); //Facilitar conexão

require("dotenv").config();

//Conectando com o banco de dados
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB Atlas Conectado"))
  .catch((error) => console.log(error));

const rotas = require("./routes");

// iniciando a aplicação
const app = express();
app.use(cors());
app.use(express.json()); //analisa requests
app.use(rotas);

const PORT = process.env.PORT || 3333; //se n tiver porta ele hospeda no 3333

return app.listen(PORT, () => console.log("Server running on port " + PORT));

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const mongooseUtil = require("./src/database");

const app = express();
app.use(bodyParser.json())
app.use(cors());

require("./src/controller/veiculoController")(app)

/**
 * Roda o servidor na porta 3000
 */
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Servidor iniciado na porta: ${port}`);

module.exports = app;

require("dotenv").config();
const mongoose = require("mongoose");

// URL de conexão está no arquivo .env
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});
mongoose.Promise = global.Promise;

module.exports = { mongoose };

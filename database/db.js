const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(process.env.URL_CONECT)
    .then(() => console.log("MongoDB Atlas conectado com sucesso!"))
    .catch((error) => console.log(error));
};

module.exports = connectToDb;

const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://root:admin@cluster0.wwapqog.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      // {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      // }
    )
    .then(() => console.log("MongoDB Atlas conectado com sucesso!"))
    .catch((error) => console.log(error));
};

module.exports = connectToDb;

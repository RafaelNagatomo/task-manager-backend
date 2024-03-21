const express = require("express");
const cors = require("cors");

const routes = require("./routes/routes");
const connectToDb = require("./database/db");

const app = express();
app.use(cors());
app.use(express.json());

connectToDb();

app.use("/", routes);

const port = 3001;
app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);

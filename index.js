const express = require("express");
const routes = require("./routes/routes");
const connectToDb = require("./database/db");

connectToDb();
const app = express();
const port = 3001;
app.set("view engine", "ejs");
app.use(routes);

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const routes = require("./routes/routes");
const connectToDb = require("./database/db");

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();
connectToDb();

app.use("/", routes);

/* 
const port = 3001;
app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
123
*/

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});

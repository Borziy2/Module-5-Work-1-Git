require("dotenv").config();

const express = require("express");

const app = express();

const database = require("./database");

database();

const api = require("./api/routes");

const errorHandler = require("./infrastucture/errorHandler");
const { auth } = require("./middlewares/auth");

app.use(express.json());

const PORT = 8090;

app.use(auth);

app.use("/api", api);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server starded on port ${PORT}`);
});

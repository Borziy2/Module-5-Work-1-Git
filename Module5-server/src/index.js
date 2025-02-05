const express = require("express");

const app = express();

const api = require("./api/routes");

const errorHandler = require("./infrastucture/errorHandler");

const PORT = 8090;

app.use("/api", api);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server starded on port ${PORT}`);
});

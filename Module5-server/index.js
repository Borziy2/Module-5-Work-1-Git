const express = require("express");

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.listen(PORT, () => {
  console.log(`Server starded on port ${PORT}`);
});

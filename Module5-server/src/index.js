const express = require("express");

const app = express();

const api = require("./api/routes")

const PORT = 8090;

app.use("/api", api)

// app.get("/", (req, res) => {
//   res.send("Hello from express");
// });

app.listen(PORT, () => {
  console.log(`Server starded on port ${PORT}`);
});

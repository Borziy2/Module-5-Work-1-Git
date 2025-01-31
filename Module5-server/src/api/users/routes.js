const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("<h1>users from routes!</h1>");
});
router.post("/", (req, res) => {
  res.send("Good");
});

module.exports = router;

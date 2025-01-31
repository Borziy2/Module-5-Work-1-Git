const { Router } = require("express");

const router = Router();

router.use("/users", require("./users/routes"));
router.use("/articles", require("./articles/routes"));


module.exports = router;

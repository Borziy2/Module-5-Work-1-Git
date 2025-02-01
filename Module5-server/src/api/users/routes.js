const { Router } = require("express");
const { createNewUser, getAllUsers } = require("./controlerUsers");

const router = Router();

router.get("/", getAllUsers);
router.post("/", createNewUser);

module.exports = router;

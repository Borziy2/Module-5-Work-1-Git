const { Router } = require("express");
const {
  getAllUsers,
  createNewUser,
  getUser,
  creatNewUser,
  updateUser,
  removeUser,
  removeUserForce,
} = require("./controlerUsers");

const router = Router();

router.get("/", getAllUsers);

router.get("/:id", getUser);

router.post("/", creatNewUser);

router.put("/:id", updateUser);

router.delete("/:id", removeUser);

router.delete("/force/:id", removeUserForce);

module.exports = router;

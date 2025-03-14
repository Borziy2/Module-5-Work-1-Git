const { Router } = require("express");
const {
  getAllUsers,
  createNewUser,
  getUser,
  registerUser,
  updateUser,
  removeUser,
  removeUserForce,
} = require("./controlerUsers");

const router = Router();

router.get("/", getAllUsers);

router.get("/:id", getUser);

router.post("/", registerUser);

router.put("/:id", updateUser);

router.delete("/:id", removeUser);

router.delete("/force/:id", removeUserForce);

module.exports = router;

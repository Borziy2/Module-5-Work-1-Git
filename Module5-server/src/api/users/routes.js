const { Router } = require("express");
const {
  getAllUsers,
  getUser,
  registerUser,
  updateUser,
  removeUser,
  removeUserForce,
  loginUser,
  getMe,
} = require("./controlerUsers");
const { protected } = require("../../middlewares/auth");

const router = Router();

router.get("/", getAllUsers);

router.get("/me", getMe);

router.get("/:id", getUser);

router.post("/", registerUser);

router.post("/login", loginUser);

router.put("/:id", updateUser);

router.delete("/:id", removeUser);

router.delete("/force/:id", removeUserForce);

module.exports = router;

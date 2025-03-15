const userService = require("../../service/userService");

module.exports = {
  getAllUsers: async (req, res, next) => {
    try {
      const Users = await userService.getAllUsers();
      res.send(Users);
    } catch (error) {
      next(error);
    }
  },

  getUser: async (req, res) => {
    const userId = req.params.id;
    const user = await userService.findUser(userId);
    res.send(user);
  },
  registerUser: async (req, res, next) => {
    try {
      const user = req.user;
      const data = req.body;

      const User = await userService.creatNewUser(user, data);
      res.send(User);
    } catch (error) {
      next(error);
    }
  },
  loginUser: async (req, res, next) => {
    try {
      const data = req.body;
      const user = (await userService.loginUser(data));
      res.send(user);
    } catch (error) {
      next(error);
    }
  },


  updateUser: async (req, res) => {
    const userId = req.params.id;
    const data = req.body;
    const updateUser = await userService.updateUser(userId, data);
    res.send(updateUser);
  },

  removeUser: async (req, res) => {
    const userId = req.params.id;
    await userService.removeUser(userId);
    res.send("User deleted!");
  },

  removeUserForce: async (req, res) => {
    const userId = req.params.id;
    await userService.removeUserForce(userId);
    res.send("User deleted!");
  },
};

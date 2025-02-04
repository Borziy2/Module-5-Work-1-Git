const userService = require("../../service/userService");

module.exports = {
  getAllUsers: (req, res) => {
    const users = userService.getAllUsers();
    res.send(users);
  },
  createNewUser: (req, res) => {
    const newUsers = userService.createNewUser();
    res.send(newUsers);
  },
};

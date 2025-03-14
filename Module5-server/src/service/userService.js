const usersRepository = require("../repository/usersRepository");
const ExistingEntityError = require("../infrastucture/errors/ExistingEntityError ")

module.exports = {
  getAllUsers: async () => {
    const Users = await usersRepository.findAllUser();
    return Users;
  },
  findUser: async (userId) => {
    const User = await usersRepository.findUser(userId);
    return User;
  },
  creatNewUser: async (user, userData) => {
    const existingUser = await usersRepository.findUserByEmail(userData.email);
    if (existingUser) {
      throw new ExistingEntityError("User with email already exist");
    }
    const newUser = await usersRepository.createUser(userData);
    return newUser;
  },
  updateUser: async (userId, data) => {
    const updatedUser = await usersRepository.updateUser(userId, data);
    return updatedUser;
  },
  removeUser: async (userId) => {
    await usersRepository.removeUser(userId);
  },
  removeUserForce: async (userId) => {
    await usersRepository.removeUserForse(userId);
  },
};

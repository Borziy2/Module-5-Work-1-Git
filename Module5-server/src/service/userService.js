const usersRepository = require("../repository/usersRepository");
const ExistingEntityError = require("../infrastucture/errors/ExistingEntityError ");
const InvalidDataError = require("../infrastucture/errors/InvalidDataError");
const { generateJWTToken } = require("../utils/jwtToken");
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

  loginUser: async (userData) => {
    const { email, password } = userData;

    const existingUser = await usersRepository.findUserByEmail(email);

    if (existingUser && (await existingUser.matchPasswords(password))) {
      const jwtToken = generateJWTToken(existingUser._id);

      return {
        _id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
        token: jwtToken,
      };
    } else {
      throw new InvalidDataError("Email or password s wrong!");
    }
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

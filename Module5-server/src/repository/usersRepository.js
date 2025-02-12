const { User } = require("../database/models");

module.exports = {
  createArticle: async (article) => {
    const newUser = new User(article);
    const result = await newUser.save();
    return result;
  },

  findAllUser: async () => {
    const users = User.find({});
    return users;
  },

  findUser: async (userId) => {
    const user = await User.findId(userId); //By
    return user;
  },

  updateUser: async (userId, data) => {
    const updateUser = await User.findByIdAndUpdate(userId, data, {
      new: true,
    });

    return updateUser;
  },

  removeUser: async (userId) => {
    await User.findByIdAndUpdate(userId, { isDeleted: true });
  },

  removeUserForse: async (userId) => {
    await User.findByIdAndRemove(userId);
  },
};

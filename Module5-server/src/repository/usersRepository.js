const { User } = require("../database/models");

module.exports = {
  createUser: async (user) => {
    const newUser = new User(user);
    const result = await newUser.save();
    return { _id: result._id, name: result.name, email: result.email };
  },

  findAllUser: async () => {
    const users = User.find({ isDeleted: { $ne: true } });
    return users;
  },

  findUser: async (userId) => {
    const user = await User.findOne({
      _id: userId,
      isDeleted: { $ne: true },
    }).select("-password");
    return user;
  },

  findUserWithArticles: async (userId) => {
    const user = await User.findOne({
      _id: userId,
      isDeleted: { $ne: true },
    })
      .select("-password")
      .populate("articles");
    return user;
  },

  findUserByEmail: async (email) => {
    const user = await User.findOne({
      email: email,
      isDeleted: { $ne: true },
    });
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
    await User.findByIdAndDelete(userId);
  },
};

const jwt = require("jsonwebtoken");
const usersRepository = require("../repository/usersRepository");
const InvalidDataError = require("../infrastucture/errors/InvalidDataError");
const NotImplementedError = require("../infrastucture/errors/NotemplementedError");

module.exports = {
  auth: async (req, res, next) => {
    try {
      const token =
        req.headers.authorization && req.headers.authorization?.split(" ")[1];

      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_KEY);

        req.user = await usersRepository.findUser(decoded.userId);
      }

      next();
    } catch (error) {
      next(new InvalidDataError("Authenfication faild"));
    }
  },
  protected: async (req, res, next) => {
    if (!req.user) {
      next(new NotImplementedError());
    }
    next();
  },
};

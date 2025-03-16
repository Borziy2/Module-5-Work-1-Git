const jwt = require("jsonwebtoken");
const usersRepository = require("../repository/usersRepository");
const InvalidDataError = require("../infrastucture/errors/InvalidDataError");

module.exports = {
  auth: async (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];

      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_KEY);


        req.user = await usersRepository.findUser(decoded.userId);
      }

      next();
    } catch (error) {
      next(new InvalidDataError("Authenfication faild"));
    }
  },
};

const NotImplementedError = require("./errors/NotemplementedError");
const ExistingEntityError = require("./errors/ExistingEntityError ");
const errorHandler = (err, req, res, next) => {
  console.error("Error - ", err);
  if (err instanceof NotImplementedError) {
    res.sendStatus(404);
  } else if (err instanceof ExistingEntityError) {
    res.status(400).send(err.message);
  } else {
    res.status(500).send("Something goes wrong");
  }
};
module.exports = errorHandler;

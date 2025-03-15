const NotImplementedError = require("./errors/NotemplementedError");
const ExistingEntityError = require("./errors/ExistingEntityError ");
const InvalidDataError = require("./errors/InvalidDataError");

const errorHandler = (err, req, res, next) => {
  console.error("Error - ", err);

  switch (true) {
    case err instanceof NotImplementedError:
      res.sendStatus(404);

      break;
    case err instanceof ExistingEntityError:
      res.status(400).send(err.message);
      break;

    case err instanceof InvalidDataError:
      res.status(401).send(err.message);
      break;

    default:
      res.status(500).send("Something goes wrong");
      break;
  }
};
module.exports = errorHandler;

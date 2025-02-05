const NotImplementedError = require("./errors/NotemplementedError");

const errorHandler = (err, req, res, next) => {
  console.error("Error - ", err);
  if (err instanceof NotImplementedError) {
    res.sendStatus(404);
  } else {
    res.status(500).send("Something goes wrong");
  }
};
module.exports = errorHandler;

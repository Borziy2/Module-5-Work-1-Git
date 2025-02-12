const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    // name: String,
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestemps: true,
  }
);

module.exports = mongoose.model("User", userSchema);

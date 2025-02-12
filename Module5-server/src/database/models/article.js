const mongoose = require("mongoose");

const articleSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    text: {
      type: String,
      require: true,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestemps: true,
  }
);

module.exports = mongoose.model("article", articleSchema);
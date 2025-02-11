const mongoose = require("mongoose");

module.exports = async () => {
  await mongoose.connect(
    "mongodb+srv://admin:admin@nodeblogwork.yi7rf.mongodb.net/?retryWrites=true&w=majority&appName=NodeBlogWork"
  );

  console.log("MongoDb connected!");
};

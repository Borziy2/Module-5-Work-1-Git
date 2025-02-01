module.exports = {
  getAllUsers: (req, res) => {
    res.send("<h1>users from routes!</h1>");
  },
  createNewUser: (req, res) => {
    res.send("Good users");
  },
};

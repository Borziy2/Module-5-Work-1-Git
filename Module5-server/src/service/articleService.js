const NotImplementedError = require("../infrastucture/errors/NotemplementedError");

module.exports = {
  getAllArticles: () => {
    throw new NotImplementedError("Not implemented");
    return "<h1>Article number 3!</h1>";
  },
  creatNewArticle: (articleData) => {
    const { name, text } = articleData || {};
    return `Good article name '${name}' and text '${text}'`;
  },
};

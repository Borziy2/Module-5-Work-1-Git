const articleService = require("../../service/articleService");

module.exports = {
  getAllArticles: (req, res) => {
    const article = articleService.getAllArticles();
    res.send(article);
  },
  creatNewArticle: (req, res) => {
    const newAticle = articleService.creatNewArticle();
    res.send(newAticle);
  },
};

const articleService = require("../../service/articleService");

module.exports = {
  getAllArticles: (req, res, next) => {
    try {
      const article = articleService.getAllArticles();
      res.send(article);
    } catch (error) {
      next(error);
    }
  },
  creatNewArticle: (req, res, next) => {
    try {
      let data = req.body;
      const newAticle = articleService.creatNewArticle(data);
      res.send(newAticle);
    } catch (error) {
      next(error);
    }
  },
}; 

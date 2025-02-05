const articleService = require("../../service/articleService");

module.exports = {
  getAllArticles: (req, res, next) => {
    try {
      let a = 43;
      let g = 67;
      let b = a + g;
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

const articleService = require("../../service/articleService");

module.exports = {
  getAllArticles: async (req, res, next) => {
    try {
      const article = await articleService.getAllArticles();
      res.send(article);
    } catch (error) {
      next(error);
    }
  },

  getArticle: async (req, res) => {
    const articleId = req.params.id;
    const article = await articleService.findArticle(articleId);
    res.send(article);
  },
  creatNewArticle: async (req, res, next) => {
    try {
      const user = req.user;
      const data = req.body;

      const article = await articleService.creatNewArticle(user, data);
      res.send(article);
    } catch (error) {
      next(error);
    }
  },
  updateArticle: async (req, res) => {
    const articleId = req.params.id;
    const data = req.body;
    const updateArticle = await articleService.updateArticle(articleId, data);
    res.send(updateArticle);
  },

  removeArticle: async (req, res) => {
    const articleId = req.params.id;
    await articleService.removeArticle(articleId);
    res.send("Article deleted!");
  },

  removeArticleForce: async (req, res) => {
    const articleId = req.params.id;
    await articleService.removeArticleForce(articleId);
    res.send("Article deleted!");
  },
};

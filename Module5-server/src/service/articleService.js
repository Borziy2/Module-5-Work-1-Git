// const article = require("../database/models/article");
const articlesRepository = require("../repository/articlesRepository");

module.exports = {
  getAllArticles: async () => {
    const articles = await articlesRepository.findAllArticle();
    return articles;
  },
  findArticle: async (articleId) => {
    const article = await articlesRepository.findArticle(articleId);
    return article;
  },
  creatNewArticle: async (user, articleData) => {
    const newArticle = await articlesRepository.createArticle(articleData);
    return newArticle;
  },
  updateArticle: async (articleId, data) => {
    const updatedArticle = await articlesRepository.updateArticle(
      articleId,
      data
    );
    return updatedArticle;
  },
  removeArticle: async (articleId) => {
    await articlesRepository.removeArticle(articleId);
  },
  removeArticleForce: async (articleId) => {
    await articlesRepository.removeArticleForse(articleId);
  },
};

// const article = require("../database/models/article");
const articlesRepository = require("../repository/articlesRepository");
const NotImplementedError = require("../infrastucture/errors/NotemplementedError");

module.exports = {
  getAllArticles: async () => {
    const articles = await articlesRepository.findAllArticle();
    return articles;
  },
  findArticle: async (articleId) => {
    const article = await articlesRepository.findArticle(articleId);
    return article;
  },

  getMyArticles: async (userId) => {
    const usersArticles = await articlesRepository.findUsersArticles(userId);
    return usersArticles;
  },

  creatNewArticle: async (articleData) => {
    const newArticle = await articlesRepository.createArticle(articleData);
    return newArticle;
  },
  updateArticle: async (articleId, data, userId) => {
    const article = await articlesRepository.findUserArticle(articleId, userId);
    if (!article) {
      throw new NotImplementedError("Article not found");
    }

    const updatedArticle = await articlesRepository.updateArticle(
      articleId,
      data
    );
    return updatedArticle;
  },
  removeArticle: async (articleId, userId) => {
    const article = await articlesRepository.findUserArticle(articleId, userId);
    if (!article) {
      throw new NotImplementedError("Article not found");
    }
    await articlesRepository.removeArticle(articleId);
  },
  removeArticleForce: async (articleId, userId) => {
    const article = await articlesRepository.findUserArticle(articleId, userId);
    if (!article) {
      throw new NotImplementedError("Article not found");
    }
    await articlesRepository.removeArticleForse(articleId);
  },
};

const { Article } = require("../database/models");

module.exports = {
  createArticle: async (article) => {
    const newArticle = new Article(article);
    const result = await newArticle.save();
    return result;
  },

  findAllArticle: async () => {
    const articles = Article.find({});
    return articles;
  },

  findArticle: async (articleId) => {
    const article = await Article.findId(articleId);
    return article;
  },

  updateArticle: async (articleId, data) => {
    const updateArticle = await Article.findByIdAndUpdate(articleId, data, {
      new: true,
    });

    return updateArticle;
  },

  removeArticle: async (articleId) => {
    await Article.findByIdAndUpdate(articleId, { isDeleted: true });
  },

  removeArticleForse: async (articleId) => {
    await Article.findByIdAndRemove(articleId);
  },
};

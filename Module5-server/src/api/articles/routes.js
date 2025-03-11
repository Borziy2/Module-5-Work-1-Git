const { Router } = require("express");
const {
  getAllArticles,
  creatNewArticle,
  getArticle,
  updateArticle,
  removeArticle,
  removeArticleForce,
} = require("./controlerArticle");
const router = Router();

router.get("/", getAllArticles);

router.get("/:id", getArticle);

router.post("/", creatNewArticle);

router.put("/:id", updateArticle);

router.delete("/:id", removeArticle);

router.delete("/force/:id", removeArticleForce);

module.exports = router;

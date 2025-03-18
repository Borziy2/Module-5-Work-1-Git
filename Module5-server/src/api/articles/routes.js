const { Router } = require("express");
const {
  getAllArticles,
  creatNewArticle,
  getArticle,
  updateArticle,
  removeArticle,
  removeArticleForce,
  getMyArticles,
} = require("./controlerArticle");

const { protected } = require("../../middlewares/auth");
const router = Router();
router.get("/", getAllArticles);

router.get("/my", protected, getMyArticles);

router.get("/:id", getArticle);

router.post("/", protected, creatNewArticle);

router.put("/:id", protected, updateArticle);

router.delete("/:id", protected, removeArticle);

router.delete("/force/:id", removeArticleForce);

module.exports = router;

const router = require("express").Router();
const controller = require("../controllers/blogs.controller");

router.get("/blog", controller.getAllBlogs);
router.get("/blog/:id", controller.getBlogById);
router.post("/blog", controller.addNewBlog);

module.exports = router;

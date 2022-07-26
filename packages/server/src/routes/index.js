const router = require("express").Router();

router.use(require("./blog.route"));
router.use(require("./comment.route"));

module.exports = router;

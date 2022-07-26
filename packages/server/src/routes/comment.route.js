const router = require("express").Router();
const controller = require("../controllers/comment.controller");

router.post("/comment", controller.addNewComment);

module.exports = router;

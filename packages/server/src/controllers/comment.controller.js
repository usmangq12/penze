const commentModel = require("../models/comment.model");

exports.addNewComment = async (req, res) => {
  const comment = req.body;
  try {
    const newComment = await commentModel.create(comment);
    return res.status(200).send({ newComment });
  } catch (e) {
    return res
      .status(500)
      .send({
        error: "Something went wrong while adding the comment!",
        message: e,
      });
  }
};

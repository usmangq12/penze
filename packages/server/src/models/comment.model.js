const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
  senderName: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  blogId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
});
const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;

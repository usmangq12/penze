const blog = require("../models/blog.model");
const mongoose = require("mongoose");

exports.addNewBlog = async (req, res) => {
  const blogData = req.body;
  try {
    const newBlog = await blog.create(blogData);
    return res.status(200).send(newBlog);
  } catch (e) {
    return res.status(500).send({
      error: "Something went wrong while creating the blog!",
      message: e,
    });
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await blog.find();
    console.log({ blogs });
    return res.status(200).send(blogs);
  } catch (e) {
    return res.status(500).send(e);
  }
};

exports.getBlogById = async (req, res) => {
  if (!req.params.id) {
    return res.status(400).send({ error: "Blog id is missing!" });
  }
  const blogRecord = await blog.aggregate([
    { $match: { _id: mongoose.Types.ObjectId(`${req.params.id}`) } },
    {
      $lookup: {
        from: "Comment",
        localField: "id",
        foreignField: "blogId",
        as: "comments",
      },
    },
  ]);
  if (!blogRecord) {
    return res.status(404).send({ error: "Blog not found!" });
  }
  return res.status(200).send(blogRecord);
};

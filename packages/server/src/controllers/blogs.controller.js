const blog = require("../models/blog.model");

exports.addNewBlog = async (req, res) => {
  const blogData = req.body;
  try {
    console.log("sdsadsac", blogData);
    const newBlog = await blog.create(blogData);
    return res.status(200).send({ newBlog });
  } catch (e) {
    return res.status(500).send({
      error: "Something went wrong while creating the blog!",
      message: e,
    });
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    console.log("--------------Blogs caught");
    const blogs = await blog.find();
    return res.status(200).send({ blogs, test: "bsdjabsjcb " });
  } catch (e) {
    return res.status(500).send(e);
  }
};

exports.getBlogById = async (req, res) => {
  const id = req.params["íd"];
  if (!id) {
    return res.status(400).send({ error: "Blog id is missing!" });
  }
  const blog = await blog.aggregate([
    { $match: { id } },
    {
      $lookup: {
        from: "Comment",
        localField: "id",
        foreignField: "blogId",
        as: "comments",
      },
    },
  ]);
  if (!blog) {
    return res.status(404).send({ error: "Blog not found!" });
  }
  return res.status(200).send({ blog });
};

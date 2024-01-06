// postController.js
const Post = require("../models/post");
const { uploadOnCloudinary } = require("../utils/cloudinary");

const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.json(posts)
};



const createPost = async (req, res) => {
  try {
    const { text } = req.body;
    const { path } = req.file;
    console.log(__dirname,path)
    const cloudinaryResponse = await uploadOnCloudinary(path);
    console.log(cloudinaryResponse)

    // Create a new post in MongoDB
    const newPost = new Post({
      text,
      image: cloudinaryResponse.url
    });

    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {createPost, getPosts}

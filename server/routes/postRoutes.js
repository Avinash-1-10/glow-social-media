// postRoutes.js

const express = require("express");
const { createPost, getPosts } = require("../controller/postController.js");
const upload = require("../middleware/multer.middleware.js"); // Fix the path here
const postRouter = express.Router();

postRouter.post("/post", upload.single("image"), createPost);
postRouter.get("/post", getPosts)

module.exports = postRouter;

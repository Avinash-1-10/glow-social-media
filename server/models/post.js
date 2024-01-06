const mongoose = require("mongoose")


const postSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
      maxlength: 280,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "user",
    //   required: true,
    // },
    // likes: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "user",
    //   },
    // ],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;



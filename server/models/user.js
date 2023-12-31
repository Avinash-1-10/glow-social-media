const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      required: true,
      type: String,
      unique: true,
      trim: true,
    },
    email: {
      required: true,
      type: String,
      unique: true,
      trim: true,
    },
    password: {
      required: true,
      type: String,
      minLength: 6,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    profilePicture: String,
    coverPicture: String,
    about: String,
    livesin: String,
    worksAt: String,
    followers: [],
    following: [],
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);
module.exports = User;

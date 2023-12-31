const express = require("express");
const userRouter = express.Router();

const {
  deleteUser,
  followUser,
  getUser,
  UnFollowUser,
  updateUser,
} = require("../controller/userController");

userRouter.get("/:id", getUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id/follow", followUser);
userRouter.put("/:id/unfollow", UnFollowUser);

module.exports = userRouter;

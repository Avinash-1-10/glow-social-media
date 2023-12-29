const express = require("express");
const userRoutes = require("../controller/userController");
const userRouter = express.Router();

// Signup Route
userRouter.post("/signup", userRoutes.createUser);

// Login Route
userRouter.post("/login", userRoutes.loginUser);

module.exports = userRouter;

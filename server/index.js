require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const Post = require("./models/post");
const DATABASE_URL = process.env.DATABASE_URL;

const port = process.env.PORT || 8080;

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Connect to DATABASE
mongoose.connect(DATABASE_URL);
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Connected to the database"));

app.use("/api/v1", authRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", postRoutes);

app.get("/posts", async(req, res)=>{
    try {
        const posts = await Post.find().sort({ createdAt: -1 }); // Sorting by createdAt in descending order
        res.json(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
})

app.listen(port, () => console.log(`App listening on port ${port}!`));

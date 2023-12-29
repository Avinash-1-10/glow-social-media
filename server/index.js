require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const DATABASE_URL = process.env.DATABASE_URL;

const port = process.env.PORT || 8080;

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Connect to DATABASE
mongoose.connect(DATABASE_URL);
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("connected to database"));

app.use("/api/v1", userRoutes);

app.listen(port, () => console.log(`App listening on port ${port}!`));

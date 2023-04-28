const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const authController = require("./controllers/authController");
const blogController = require("./controllers/blogController");
const app = express();

// Connect to MongoDB
mongoose.set("strictQuery", false);
mongoose.connect(
	process.env.MONGO_URL,
	console.log("MongoDB has been started successfully")
);

// MiddleWareZ
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/auth", authController);
app.use("/blog", blogController);

// Start BackEnd Server
app.listen(process.env.PORT, () =>
	console.log(`Server has been started on Port: ${process.env.PORT}`)
);

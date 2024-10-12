const express = require("express");
const server = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");

// Middleware
server.use(cors());
server.use(bodyparser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/Blogs")
    .then(() => {
        console.log("Connected to MongoDB...");
    })
    .catch((err) => {
        console.log(err);
    });

// Create the schema
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now // Automatically set the date when a new blog is created
    },
});

// Create the model
const Blog = mongoose.model("userBlogs", blogSchema);

// Create POST route with file upload
server.post("/Blog/User", async(req, res) => {
    try {
        // req.body contains the text fields (title, content)
        const newBlog = new Blog({
            title: req.body.title,
            content: req.body.content,
        });

        await newBlog.save(); // Save to MongoDB
        res.status(201).send("Blog created successfully!");
    } catch (err) {
        res.status(500).send("Error while saving blog: " + err.message);
    }
});

// Get the data
server.get("/Blog/User", async(_req, res) => {
    try {
        const dataget = await Blog.find();
        res.json(dataget);
    } catch (err) {
        res.send(err);
    }
});

// Start the server
server.listen(2000, () => {
    console.log("Server is running on port 2000...");
});
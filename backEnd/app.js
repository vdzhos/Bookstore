const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");

const Book = require("./models/Book.js");
const Author = require("./models/Author.js");
const Genre = require("./models/Genre.js");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const connectionString = "mongodb+srv://admin:admin@cluster0.tn0cl.mongodb.net/books-db?retryWrites=true&w=majority&authSource=admin";
const mongoose = require('mongoose');
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/books", async(req, res) => {
    const books = await Book.find();
    res.json(books);
});

app.get("/books/:id", async(req, res) => {
    const books = await Book.findById(req.params.id);
    res.json(books);
});

app.get("/authors", async(req, res) => {
    const authors = await Author.find();
    res.json(authors);
});

app.get("/authors/:id", async(req, res) => {
    const authors = await Author.findById(req.params.id);
    res.json(authors);
});

app.get("/genres", async(req, res) => {
    const genres = await Genre.find();
    res.json(genres);
});

app.get("/genres/:id", async(req, res) => {
    const genres = await Genre.findById(req.params.id);
    res.json(genres);
});

app.listen(3001, function(err) {
    console.log("Server listens");
})
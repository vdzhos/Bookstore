const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");

const Book = require("./models/Book.js");
const Author = require("./models/Author.js");
const Genre = require("./models/Genre.js");

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

const connectionString = "mongodb+srv://admin:admin@cluster0.tn0cl.mongodb.net/books-db?retryWrites=true&w=majority&authSource=admin";
const mongoose = require('mongoose');
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});

app.get("/books", async (req, res) => {
    let books = await Book.find();
    const authors = await Author.find();
    const genres = await Genre.find();
    let bbooks = [];
    books.forEach((book, index) => {
        let author = book.authors[0];
        let a = authors.find((a) => {
            if (a.id == author) return true;
        }).name
        let g = book.genres.map((g) => genres.find(fg => {
            if (fg.id == g) return true
        }).name)
        bbooks.push({authors: [a], genres: g, title: book.title, id: book._id, image: book.image, price: book.price})
    });
    res.json(bbooks);
});

app.get("/books/:id", async (req, res) => {
    const book = await Book.findById(req.params.id);
    let author = await Author.findById(book.authors[0]);
    let genres = [];
    for (let i = 0; i < book.genres.length; i++) {
        let g = await Genre.findById(book.genres[i]);
        genres.push(g.name);
        console.log(genres);
    }
    let foundBook = {
        genres: genres,
        authors: [author.name],
        title: book.title,
        id: book._id,
        image: book.image,
        price: book.price
    };
    res.json(foundBook);
});

app.get("/authors", async (req, res) => {
    const authors = await Author.find();
    const allBooks = await Book.find();
    let authorsRes = [];
    for (let j = 0; j < authors.length; j++) {
        let author = authors[j];
        let books = [];
        for (let i = 0; i < author.books.length; i++) {
            let book = allBooks.find((b) => {
                if (b.id == author.books[i]) return true;
            });
            books.push(book);
        }
        authorsRes.push({name: author.name, id: author.id, books: [books]});
    }

    res.json(authorsRes);
});

app.get("/authors/top10", async (req, res) => {
    const authors = await Author.find();
    const allBooks = await Book.find();
    let authorsRes = [];
    for (let j = 0; j < authors.length; j++) {
        let author = authors[j];
        if (author.books.length < 4)
            continue;
        console.log(1);
        let books = [];
        for (let i = 0; i < author.books.length; i++) {
            let book = allBooks.find((b) => {
                if (b.id == author.books[i]) return true;
            });
            books.push({authors: [author.name], title: book.title, id: book._id, image: book.image, price: book.price});
        }
        authorsRes.push({name: author.name, id: author.id, books: [books]});
    }

    res.json(authorsRes);
});

app.get("/authors/:id", async (req, res) => {
    const author = await Author.findById(req.params.id);
    let authorRes = {};
    let books = [];
    for (let i = 0; i < author.books.length; i++) {
        let book = await Book.findById(author.books[i]);
        books.push({authors: [author.name], title: book.title, id: book._id, image: book.image, price: book.price});
    }
    res.json({name: author.name, id: author.id, books: books});
});

app.get("/genres", async (req, res) => {
    const genres = await Genre.find();
    res.json(genres);
});

app.get("/genres/:id", async (req, res) => {
    const genres = await Genre.findById(req.params.id);
    res.json(genres);
});

app.listen(3001, function (err) {
    console.log("Server listens");
})
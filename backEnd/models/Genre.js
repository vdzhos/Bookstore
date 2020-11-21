const mongoose = require("mongoose");
let GenreSchema = new mongoose.Schema({
    name: String,
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        }
    ],
});
module.exports = mongoose.model("Genre", GenreSchema, "Genres");
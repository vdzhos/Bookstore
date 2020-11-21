const mongoose = require("mongoose");
let BookSchema = new mongoose.Schema({
    title: String,
    authors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Author"
        }
    ],
    image: String,
    description: String,
    price: Number,
    genres: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Genre"
        }
    ],
});
module.exports = mongoose.model("Books", BookSchema, "Books");
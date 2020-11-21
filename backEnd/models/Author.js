const mongoose = require("mongoose");
let AuthorSchema = new mongoose.Schema({
    name: String,
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        }
    ],
});
module.exports = mongoose.model("Author", AuthorSchema, "Authors");
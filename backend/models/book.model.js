const mongoose = require('mongoose')

const schema = mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
            required: [true, "Please enter product name"]
        },
        desp: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }
)

const Book = mongoose.model("Book", schema);

module.exports = Book;
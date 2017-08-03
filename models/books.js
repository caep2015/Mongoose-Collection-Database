const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  yearPublished: {
    type: Number,
    required: true
  },
  pages: {
    type: Number,
    required: true
  },
  isbn: {
    type: Number,
    unique: true
  },
  synopsis: {
    subject: {
      type: String
    },
    review: [String],
    shopUrl: {
      type: String
    } // URL
  }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;

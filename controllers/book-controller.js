const Book = require('../models/books');

module.exports = {
  home: function(req, res) {
    Book.find().then(results => {
      res.render('index', {
        model: results
      });
    });
  },

  addBook: function(req, res) {
    let title = req.body.title,
      author = req.body.author,
      yearPublished = req.body.year,
      pages = req.body.pages,
      isbn = req.body.isbn;  
    let addBook = new Book({
      title: title,
      author: author,
      yearPublished: yearPublished,
      pages: pages,
      isbn: isbn
    });
    addBook.save().then(function() {
      res.redirect('/');
    });
  },

  viewBook: function(req, res) {
    let book = req.params._id;
    Book.findOne({
      _id: book
    }).then(result => {
      res.render('book', result);
    });
  },

  updateBook: function(req, res) {
    let subject = req.body.subject,
      review = req.body.review,
      shopUrl = req.body.url,
      book = req.body.book;

    Book.findOne({
      _id: book
    }).then(result => {
      result.synopsis.subject = subject;
      result.synopsis.review = review;
      result.synopsis.shopUrl = shopUrl;
      result.save().then(function() {
        res.redirect('/book/' + book);
      });
    })
  },
  deleteBook: function(req, res) {
    let book = req.body.book;
    Book.findOneAndRemove({
      _id: book
    }).then(function() {
      res.redirect('/');
    });
  }
}

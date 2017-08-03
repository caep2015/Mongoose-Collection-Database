const mongoose = require('mongoose');
const Book = require('./models/books');

mongoose.connect('mogodb://localhost:27017/books');

let book1 = new Book({
  title: 'Get ready for CSS grid Layout',
  author: 'Rachel Andrew',
  yearPublished: 2016,
  pages: 56,
  isbn: 9781937557263
});
//https://abookapart.com/products/get-ready-for-css-grid-layout

let book2 = new Book({
  title: 'Working Effectively with Legacy Code',
  author: 'Michael Feathers ',
  yearPublished: 2004,
  pages: 456,
  isbn: 0131177052
});
//https://www.amazon.com/dp/0131177052

let book3 = new Book({
  title: 'Design Patterns',
  author: 'Erich Gamma ',
  yearPublished: 1994,
  pages: 395,
  isbn: 0201633612
});
//https://www.amazon.com/dp/0201633612

let book4 = new Book({
  title: 'Clean Code',
  author: 'Robert C. Martin',
  yearPublished: 2008,
  pages: 464,
  isbn: 0132350882
});
//https://www.amazon.com/dp/0132350882
let book5 = new Book({
  title: 'Java Concurrency in Practice',
  author: 'Brian Goetz',
  yearPublished: 2006,
  pages: 384,
  isbn: 0321349601
});
//https://www.amazon.com/dp/0321349601
let book6 = new Book({
  title: 'The Healthy Programmer: Get Fit, Feel Better, and Keep Coding',
  author: 'Joe Kutner',
  yearPublished: 2013,
  pages: 254,
  isbn: 1937785319
});
//https://www.amazon.com/Healthy-Programmer-Better-Pragmatic-Programmers/dp/1937785319

book1.save();
book2.save();
book3.save();
book4.save();
book5.save();
book6.save();


//console.log('book saved');

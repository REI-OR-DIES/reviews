/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/products', { useNewUrlParser: true });

const { connection } = mongoose;

connection.once('open', (err) => {
  if (err) {
    throw err;
  } else {
    console.log('Connected to MongoDB');
  }
});

const { Schema } = mongoose;

const review = new Schema(
  {
    userName: String,
    reviewCount: Number,
    title: String,
    createdAt: Date,
    helpfulYes: Number,
    helpfulNo: Number,
    body: String,
    location: String,
    inappropriate: Boolean,
    recommend: Boolean,
  },
  { versionKey: false },
  { collection: 'products' },
);

module.exports = mongoose.model('reviews', review);

/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/products', { useNewUrlParser: true });

const { connection } = mongoose;

connection.once('open', (err) => {
  if (err) {
    throw err;
  }
});

const { Schema } = mongoose;

const review = new Schema(
  {
    rating: Number,
    userName: String,
    age: String,
    reviewCount: Number,
    title: String,
    createdAt: Date,
    helpfulYes: Number,
    helpfulNo: Number,
    body: String,
    photo: String,
    location: String,
    inappropriate: Boolean,
    recommend: Boolean,
    email: String,
    yesClicked: Boolean,
    noClicked: Boolean,
  },
  { versionKey: false },
  { collection: 'products' },
);

module.exports = mongoose.model('reviews', review);

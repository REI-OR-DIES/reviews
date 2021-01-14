const mongoose = require('mongoose');

const { Schema } = mongoose;

let product = new Schema(
  {
    name: { String, unique: false },
    poster: {
      username: [String],
      reviewcount: [Number],
    },
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

module.exports = mongoose.model('products', product);

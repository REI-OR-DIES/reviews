/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const product = require('../Database/model.js');

const url = 'mongodb://127.0.0.1:27017/products';

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });

const { connection } = mongoose;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const app = express();

const PORT = 3000;

app.listen(PORT, ((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Listening on port on localHost 3000');
  }
}));

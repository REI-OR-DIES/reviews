const express = require('express');
const mongoose = require('mongoose');
let product = require ('../Database/model.js');

let url = 'mongodb://127.0.0.1:27017/products';

mongoose.connect()

const app = express();

const PORT = 3000;

app.listen(PORT, ((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Listening on port on localHost 3000');
  }
}));
/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const db = require('../Database/index.js');

const PORT = 3000;
const app = express();
app.use(express.json());

app.get('/api/reviews', (req, res) => {
  db.find((err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200);
      res.send(data);
    }
  });
});

app.listen(PORT, ((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Listening on port on localHost 3000');
  }
}));

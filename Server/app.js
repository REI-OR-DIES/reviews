/* eslint-disable array-callback-return */
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

app.post('/api/reviews', (req, res) => {
  console.log(req.body);
  const item = {
    userName: req.body.userName,
    reviewCount: req.body.count,
    title: req.body.title,
    createdAt: req.body.createdAt,
    helpfulYes: req.body.helpfulYes,
    body: req.body.body,
    location: req.body.city,
    inappropriate: req.body.inappropriate,
    recommend: req.body.recommend,
  };
  db.create(item, (err, data) => {
    if (err) {
      res.status(400);
      console.log('no');
    } else {
      res.status(201);
      res.send(data);
      console.log('posted');
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

/* eslint-disable array-callback-return */
/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const db = require('../DataBase/index.js');
const cors = require('cors');

const PORT = 3002;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/../public`));

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
  const item = {
    userName: req.body.userName,
    age: req.body.age,
    email: req.body.email,
    rating: req.body.rating,
    title: req.body.title,
    createdAt: req.body.createdAt,
    helpfulYes: 0,
    helpfulNo: 0,
    body: req.body.body,
    photo: req.body.imageUrl,
    location: req.body.location,
    inappropriate: req.body.inappropriate,
    recommend: req.body.recommend,
    yesClicked: false,
    noClicked: false,
  };
  db.create(item, (err, data) => {
    if (err) {
      res.status(400);
      console.log(err);
    } else {
      res.status(201);
      res.send(data);
      console.log('posted');
    }
  });
});

app.put('/api/reviews/:id/helpfulYes', (req, res) => {
  const query = { _id: req.params.id };
  const newValues = { $inc: { helpfulYes: 1 } };
  db.updateOne(query, newValues, (err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200);
      res.send(data);
    }
  });
});

app.put('/api/reviews/:id/helpfulYesClicked', (req, res) => {
  const query = { _id: req.params.id };
  const clicked = { $set: { yesClicked: true } };
  db.updateOne(query, clicked, (err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200);
      res.send(data);
    }
  });
});

app.put('/api/reviews/:id/helpfulNo', (req, res) => {
  const query = { _id: req.params.id };
  const newValues = { $inc: { helpfulNo: 1 } };
  db.updateOne(query, newValues, (err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200);
      res.send(data);
    }
  });
});

app.put('/api/reviews/:id/helpfulNoClicked', (req, res) => {
  const query = { _id: req.params.id };
  const clicked = { $set: { noClicked: true } };
  db.updateOne(query, clicked, (err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200);
      res.send(data);
    }
  });
});

app.put('/api/reviews/:id/inappropriate', (req, res) => {
  const query = { _id: req.params.id };
  const newValues = { $set: { inappropriate: true } };
  db.updateOne(query, newValues, (err, data) => {
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
    console.log('Listening on port on localHost', `${PORT}`);
  }
}));

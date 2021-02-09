/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable camelcase */
const { Pool, Client } = require('pg');
const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('../DataBase/index.js');
const nr= require('newrelic');

const PORT = 3002;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/../public`));

// connecting to the database
const pool = new Pool({
  user: 'postgres',
  host: 'postgres',
  database: 'reviews',
  password: 'root',
  port: '5432',
});

app.get('/api/reviews', (req, res) => {
  pool.query(`SELECT reviews.reviews_id, users.username, reviews.rating, reviews.title, reviews.created_at, reviews.helpfulYes, reviews.helpfulNo, reviews.body, users.location, reviews.inappropriate, reviews.recommend, users.email, users.age FROM users INNER JOIN reviews ON reviews.user_id = users.user_id ORDER BY reviews.reviews_id DESC LIMIT 10;`)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post('/api/reviews', (req, res) => {
  console.log(req.body);
  pool.query(`INSERT INTO users (username, age, email, location) VALUES ('${req.body.userName}', ${req.body.age}, '${req.body.email}', '${req.body.location}');`)
    .then(() => pool.query(`SELECT user_id FROM users WHERE username = '${req.body.userName}';`))
    .then((data) => {
      const { user_id } = data.rows[0];
      console.log(user_id);
      const product_id = 1;

      return pool.query(`INSERT INTO reviews (user_id, product_id, title, created_at, body, rating, recommend, helpfulYes, helpfulNo, inappropriate) VALUES (${user_id}, ${product_id}, '${req.body.title}', '${req.body.createdAt}', '${req.body.body}', ${req.body.rating}, ${req.body.recommend}, 0, 0, false);`);
    })
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.put('/api/reviews/:id/inappropriate', (req, res) => {
  const { id } = req.params;

  pool.query(`UPDATE reviews SET inappropriate = true WHERE reviews_id = ${id};`)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.put('/api/reviews/:id/helpfulYes', (req, res) => {
  const { id } = req.params;
  pool.query(`UPDATE reviews SET helpfulYes = helpfulYes + 1 WHERE reviews_id = ${id};`)
    .then((data) => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.put('/api/reviews/:id/helpfulNo', (req, res) => {
  const { id } = req.params;
  pool.query(`UPDATE reviews SET helpfulNo = helpfulNo + 1 WHERE reviews_id = ${id};`)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.listen(PORT, ((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Listening on port on localHost', `${PORT}`);
  }
}));

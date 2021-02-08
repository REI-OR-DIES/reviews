const {Pool, Client} = require('pg');
const express = require('express');
const path = require('path');
const db = require('../DataBase/index.js');
const cors = require('cors');

const PORT = 3002;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/../public`));

//connecting to the database
const pool = new Pool ({
  user: "postgres",
  host: "localhost",
  database: "reviews",
  password: "root",
  port: "5432"
})

app.get('/api/reviews', (req, res) => {
  let numOfReviews = Math.floor(Math.random() * 100);

  pool.query(`SELECT users.username, reviews.rating, photos.photo_url, reviews.title, reviews.created_at, reviews.helpfulYes, reviews.helpfulNo, reviews.body, users.location, reviews.inappropriate, reviews.recommend, users.email, users.age FROM users INNER JOIN reviews ON reviews.user_id = users.user_id INNER JOIN photos ON photos.reviews_id = reviews.reviews_id INNER JOIN products ON products.product_id = reviews.product_id LIMIT ${numOfReviews};`)
  .then((data)=> {
    res.status(200).send(data);
  })
  .catch((err) => {
    res.send(err);
  })
});

app.post('/api/reviews', (req, res) => {

  pool.query(`INSERT INTO users (username, age, email, location) VALUES ('${req.body.userName}', ${req.body.age}, '${req.body.email}', '${req.body.location}');`)
  .then(() => {
    return pool.query(`SELECT user_id FROM users WHERE username = '${req.body.userName}';`)
  })
  .then((data) => {
    let user_id = data.rows[0].user_id;
    console.log(user_id);
    let product_id = Math.floor(Math.random() * 10000) + 1;

    return pool.query(`INSERT INTO reviews (user_id, product_id, title, created_at, body, rating, recommend, helpfulYes, helpfulNo, inappropriate) VALUES (${user_id}, ${product_id}, '${req.body.title}', '${req.body.createdAt}', '${req.body.body}', ${req.body.rating}, ${req.body.recommend}, 0, 0, false);`)
  })
  .then((results)=> {
    res.status(200).send(results);
  })
  .catch((err) => {
    res.send(err);
  })
});

app.put('/api/reviews/:id/inappropriate', (req, res) => {
  const id= req.params.id;

  pool.query(`UPDATE reviews SET inappropriate = true WHERE reviews_id = ${id};`)
  .then((data) => {
    res.status(200).send(data);
  })
  .catch((err) => {
    res.status(404).send(err);
  })
});

app.put('/api/reviews/:id/helpfulYes', (req, res) => {
  const id = req.params.id;
  pool.query(`UPDATE reviews SET helpfulYes = helpfulYes + 1 WHERE reviews_id = ${id};`)
  .then((data) => {
    res.status(200).send(data);
  })
  .catch((err) => {
    res.status(404).send(err);
  })
});

app.put('/api/reviews/:id/helpfulNo', (req, res) => {
  const id = req.params.id;
  pool.query(`UPDATE reviews SET helpfulNo = helpfulNo + 1 WHERE reviews_id = ${id};`)
  .then((data) => {
    res.status(200).send(data);
  })
  .catch((err) => {
    res.status(404).send(err);
  })
});

app.listen(PORT, ((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Listening on port on localHost', `${PORT}`);
  }
}));


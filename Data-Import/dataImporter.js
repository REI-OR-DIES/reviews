/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-console */
const { Pool } = require('pg');

// connecting to the database
const pool = new Pool({
  user: 'postgres',
  host: 'postgres',
  database: 'reviews',
  password: 'root',
  port: '5432',
});

// query to import USERS into the postgres table
pool.query("COPY users FROM '/Users/sabateklu/DEN09/GAR-FEC-REVIEWS/Data-Import/users.csv' DELIMITER ',' CSV HEADER;")
  .then(() => pool.query('ALTER TABLE users ADD COLUMN user_id BIGSERIAL PRIMARY KEY;'))
  .then(() =>
  // query to import PRODUCTS into the table
    pool.query("COPY products FROM '/Users/sabateklu/DEN09/GAR-FEC-REVIEWS/Data-Import/products.csv' DELIMITER ',' CSV HEADER;"))
  .then(() => pool.query('ALTER TABLE products ADD COLUMN product_id BIGSERIAL PRIMARY KEY;'))
  .then(() =>
  // query to import REVIEWS into the table
    pool.query("COPY reviews FROM '/Users/sabateklu/DEN09/GAR-FEC-REVIEWS/Data-Import/reviews.csv' DELIMITER ',' CSV HEADER;"))
  .then(() => pool.query('ALTER TABLE reviews ADD COLUMN reviews_id BIGSERIAL PRIMARY KEY;'))
  .then(() => pool.query('ALTER TABLE reviews ADD FOREIGN KEY(user_id) REFERENCES users(user_id);'))
  .then(() => pool.query('ALTER TABLE reviews ADD FOREIGN KEY(product_id) REFERENCES products(product_id);'))
  .then(() =>
  // query to import PHOTOS into the table
    pool.query("COPY photos FROM '/Users/sabateklu/DEN09/GAR-FEC-REVIEWS/Data-Import/photos.csv' DELIMITER ',' CSV HEADER;"))
  .then(() => pool.query('ALTER TABLE photos ADD COLUMN photo_id BIGSERIAL PRIMARY KEY;'))
  .then(() => pool.query('ALTER TABLE photos ADD FOREIGN KEY(reviews_id) REFERENCES reviews(reviews_id);'))
  .then((res) => {
    console.log(res);
    pool.end();
  })
  .catch((err) => {
    console.log(err);
  });

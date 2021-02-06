const {Pool, Client} = require('pg');

//connecting to the database
const pool = new Pool ({
  user: "postgres",
  host: "localhost",
  database: "reviews",
  password: "root",
  port: "5432"
})

//query to import USERS into the postgres table
pool.query("COPY users FROM '/Users/sabateklu/DEN09/GAR-FEC-REVIEWS/Data-Import/users.csv' DELIMITER ',' CSV HEADER;")
.then(()=> {
  return pool.query("ALTER TABLE users ADD COLUMN user_id BIGSERIAL PRIMARY KEY;")
})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})

// query to import PRODUCTS into the table
pool.query("COPY products FROM '/Users/sabateklu/DEN09/GAR-FEC-REVIEWS/Data-Import/products.csv' DELIMITER ',' CSV HEADER;")
.then(() => {
  return pool.query("ALTER TABLE products ADD COLUMN product_id BIGSERIAL PRIMARY KEY;")
})
.then((res) => {
  console.log(res)
})
.catch((err) => {
  console.log(err);
})

// query to import REVIEWS into the table
pool.query("COPY reviews FROM '/Users/sabateklu/DEN09/GAR-FEC-REVIEWS/Data-Import/reviews.csv' DELIMITER ',' CSV HEADER;")
.then(() => {
  return pool.query("ALTER TABLE reviews ADD COLUMN reviews_id BIGSERIAL PRIMARY KEY;")
})
.then(() => {
  return pool.query("ALTER TABLE reviews ADD CONSTRAINT FK_user_id FOREIGN KEY(user_id) REFERENCES users(user_id);")
})
.then(() => {
  return pool.query("ALTER TABLE reviews ADD CONSTRAINT FK_product_id FOREIGN KEY(product_id) REFERENCES products(product_id);")
})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})

// query to import PHOTOS into the table
pool.query("COPY photos FROM '/Users/sabateklu/DEN09/GAR-FEC-REVIEWS/Data-Import/photos.csv' DELIMITER ',' CSV HEADER;")
.then(()=> {
  return pool.query("ALTER TABLE photos ADD COLUMN photo_id BIGSERIAL PRIMARY KEY;")
})
.then(()=> {
  return pool.query("ALTER TABLE photos ADD CONSTRAINT FK_reviews_id FOREIGN KEY(reviews_id) REFERENCES reviews(review_id);")
})
.then((res) => {
  console.log(res);
  pool.end();
})
.catch((err) => {
  console.log(err);
})

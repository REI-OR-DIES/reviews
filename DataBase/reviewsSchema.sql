CREATE TABLE users (
  user_id BIGSERIAL NOT NULL PRIMARY KEY,
  username VARCHAR(200) NOT NULL,
  age INT,
  email VARCHAR(100),
  location VARCHAR(200)
);

CREATE TABLE products (
  product_id BIGSERIAL NOT NULL PRIMARY KEY,
  product_type VARCHAR(100) NOT NULL,
  product_name VARCHAR(200) NOT NULL
);

CREATE TABLE reviews (
  reviews_id BIGSERIAL NOT NULL PRIMARY KEY,
  user_id INT NOT NULL,
  product_id INT NOT NULL,
  title VARCHAR(150) NOT NULL,
  created_at DATE NOT NULL,
  body VARCHAR(1000) NOT NULL,
  rating NUMERIC NOT NULL,
  recommend BOOLEAN NOT NULL,
  helpfulYes INT,
  helpfulNo INT,
  inappropriate BOOLEAN,
  FOREIGN KEY(user_id) REFERENCES users(user_id),
  FOREIGN KEY(product_id) REFERENCES products(product_id)
);

CREATE TABLE photos (
  photo_id BIGSERIAL NOT NULL PRIMARY KEY,
  photo_url VARCHAR(200) NOT NULL,
  reviews_id INT NOT NULL,
  FOREIGN KEY(reviews_id) REFERENCES reviews(reviews_id)
);

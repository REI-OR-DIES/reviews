DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

\c reviews;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS photos;

CREATE TABLE users (
  username VARCHAR(200) NOT NULL,
  age INT,
  email VARCHAR(100),
  location VARCHAR(200)
);

CREATE TABLE products (
  product_type VARCHAR(100) NOT NULL,
  product_name VARCHAR(200) NOT NULL
);

CREATE TABLE reviews (
  user_id INT NOT NULL,
  product_id INT NOT NULL,
  title VARCHAR(150) NOT NULL,
  created_at DATE NOT NULL,
  body VARCHAR(1000) NOT NULL,
  rating NUMERIC NOT NULL,
  recommend BOOLEAN NOT NULL,
  helpfulYes INT,
  helpfulNo INT,
  inappropriate BOOLEAN
);

CREATE TABLE photos (
  photo_url VARCHAR(200) NOT NULL,
  reviews_id INT NOT NULL
);

/* eslint-disable no-console */
/* eslint-disable no-plusplus */
const faker = require('faker');
const { MongoClient } = require('mongodb');
const _ = require('lodash');

const url = 'mongodb://localhost:27017';

const dbName = 'products';

MongoClient.connect(url, (err, client) => {
  if (err) {
    throw err;
  }
  const db = client.db(dbName);

  const reviewsCollection = db.collection('reviews');

  const reviews = [];

  for (let i = 0; i < 100; i++) {
    const review = {
      userName: faker.internet.userName(),
      reviewCount: Math.floor(Math.random() * 20),
      title: faker.lorem.words(7),
      createdAt: faker.date.recent(),
      helpfulYes: faker.random.boolean(),
      body: faker.lorem.words(30),
      location: faker.address.city(),
      inappropriate: false,
      recommend: faker.random.boolean(),
    };
    reviews.push(review);
  }
  reviewsCollection.insertMany(reviews);
  console.log('Seeded');
  client.close();
});

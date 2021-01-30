/* eslint-disable no-console */
/* eslint-disable no-plusplus */
const faker = require('faker');
const { MongoClient } = require('mongodb');

const url = 'mongodb://mongo:27017';

const dbName = 'products';

MongoClient.connect(url, (err, client) => {
  if (err) {
    throw err;
  }
  const db = client.db(dbName);

  const reviewsCollection = db.collection('reviews');

  const reviews = [];

  for (let i = 0; i < 5; i++) {
    const review = {
      userName: faker.internet.userName(),
      rating: Math.floor(Math.random() * 4) + 1,
      photo: faker.image.imageUrl(),
      reviewCount: Math.floor(Math.random() * 20),
      title: faker.lorem.words(7),
      createdAt: faker.date.recent(),
      helpfulYes: Math.floor(Math.random() * 4),
      helpfulNo: Math.floor(Math.random() * 2),
      body: faker.lorem.words(20),
      location: faker.address.city(),
      inappropriate: false,
      recommend: faker.random.boolean(),
      email: faker.internet.email(),
      age: Math.floor(Math.random() * 82) + 18,
      yesClicked: false,
      noClicked: false,
    };
    reviews.push(review);
  }
  reviewsCollection.insertMany(reviews);
  console.log('Seeded');
  client.close();
});

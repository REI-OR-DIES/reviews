/* eslint-disable no-console */
const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');
const db = require('../../Database/index.js');

describe('insert', () => {
  beforeAll(async () => {
    mongoose.connect('mongodb://localhost:27017/products', { useNewUrlParser: true });

    const { connection } = mongoose;

    connection.once('open', (err) => {
      if (err) {
        throw err;
      }
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should insert a review into collection', async () => {
    const review = {
      userName: 'testUser',
      age: 24,
      email: 'testEmail@test.com',
      rating: 3,
      title: 'Title',
      helpfulYes: 0,
      body: 'Text',
      photo: 'url',
      location: 'Denver',
      inappropriate: false,
      recommend: true,
    };

    db.create(review);

    const createdReview = await db.findOne({ userName: 'testUser' });
    expect(createdReview.email).toEqual(review.email);
  });
});

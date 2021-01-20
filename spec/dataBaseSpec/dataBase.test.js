const { MongoNetworkError } = require('mongodb');
const { MongoClient } = require('mongodb');

describe('dataBase', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
    });
    db = await connection.db(global.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should insert a doc into collection', async () => {
    const users = db.collection('users');

    const mockUser = { _id: 'some-user-id', name: 'John' };
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({ _id: 'some-user-id' });
    expect(insertedUser).toEqual(mockUser);
  });

  it('should update a doc based off an id', async () => {
    const users = db.collection('users');

    const mockUser = { _id: '1234', name: 'Bob' };
    await users.insertOne(mockUser);

    const query = { _id: '1234' };
    const newValues = { $set: { name: 'Ryan' } };

    users.updateOne(query, newValues);
    const updatedUser = await users.findOne({ _id: '1234' });
    expect(updatedUser.name).toEqual('Ryan');
  });
});

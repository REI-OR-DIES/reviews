const {Pool, Client} = require('pg');
const fs = require('fs');
const faker = require('faker');

const pool = new Pool ({
  user: "sabateklu",
  host: "localhost",
  database: "reviews",
  password: "Saxum345$",
  port: "5432"
})


for (let i = 0; i < 10; i++) {
  const user = {
    username: faker.internet.userName(),
    age: Math.floor(Math.random() * 82) + 18,
    email: faker.internet.email(),
    location: faker.address.city()
  }
  fs.writeFile('data.txt', JSON.stringify(user), { flag: 'a+' }, function(err) {
    if (err) return console.log(err);
    console.log('done')
  })
}
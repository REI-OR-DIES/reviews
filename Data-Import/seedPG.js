const {Pool, Client} = require('pg');

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
    age: Math.floor(Math.ranom() * 82) + 18,
    email: faker.internet.email(),
    location: faker.address.city()
  }
}
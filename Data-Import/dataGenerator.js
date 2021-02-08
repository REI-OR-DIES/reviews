const fs = require('fs');
const faker = require('faker');
const csv = require('csvtojson');
const { Parser } = require('json2csv');

//USERS IMPORT TO CSV
let userHeader = ["username", "age", "email", "location"];
let userData = [];
for (let i = 0; i < 10000; i++) {
  userData[i] = {
    "username": faker.internet.userName(),
    "age": `${Math.floor(Math.random() * 82) + 18}`,
    "email": faker.internet.email(),
    "location": faker.address.city()
  };
}
//turning the user header and arra into csv format
const usersInCsv = new Parser({ fields: userHeader }).parse(userData);

//writing to the users.csv file
let usersWriter = fs.createWriteStream('users.csv');
usersWriter.write(usersInCsv);


//PRODUCTS IMPORT TO CSV
let productsHeader = ["product_type", "product_name"];
let productsData = [];
for(let i = 0; i < 10000; i++) {
  productsData[i] = {
    "product_type": faker.commerce.productMaterial(),
    "product_name": faker.commerce.productName()
  }
}
const productsInCsv = new Parser ({ fields: productsHeader }).parse(productsData);
let productWriter = fs.createWriteStream('products.csv');
productWriter.write(productsInCsv);

// REVIEWS IMPORT TO CSV
let n = 0;

let oneAtATime = ()=> {
  let reviewsHeader = ["user_id", "product_id", "title", "created_at", "body", "rating", "recommend", "helpfulYes", "helpfulNo", "inappropriate"];
  let reviewsData = [];
  for(let i = 0; i< 100000; i++) {
    reviewsData[i] = {
      "user_id": Math.floor(Math.random() * 10000) + 1,
      "product_id": Math.floor(Math.random() * 10000) +1,
      "title": faker.random.words(),
      "created_at": faker.date.past(),
      "body": faker.lorem.paragraph(),
      "rating": Math.floor(Math.random() * 4) + 1,
      "recommend": faker.random.boolean(),
      "helpfulYes": Math.floor(Math.random() * 4),
      "helpfulNo": Math.floor(Math.random() * 2),
      "inappropriate": false
    }
  }

  let reviewsInCsv = new Parser ({ fields: reviewsHeader }).parse(reviewsData).replace('"user_id","product_id","title","created_at","body","rating","recommend","helpfulYes","helpfulNo","inappropriate"', '');

  let reviewWriter = fs.createWriteStream('reviews.csv', {flags: 'a'});
  reviewWriter.write(reviewsInCsv);
  n = n+1;
};

while (n < 100) {
  oneAtATime();
};

//PHOTOS
function picUrl() {
  let num = Math.floor(Math.random() * 510);
  const base = `https://reviews9000.s3.us-west-1.amazonaws.com/athleticPics/review_pics_${num}.jpg`;

  base.replace(/'/g, '"');
  return base;
};

let photosHeader = ["photo_url", "reviews_id"];
let photosData = [];
for (let i = 0; i < 10000; i++) {
  photosData[i] = {
    "photo_url": picUrl(),
    "reviews_id": Math.floor(Math.random() * 10000000)
  }
};

const photosInCsv = new Parser ({ fields: photosHeader }).parse(photosData);
let photoWriter = fs.createWriteStream('photos.csv');
photoWriter.write(photosInCsv);

//currently missing:
// the reference to the user_id as a foreign key in the reviews table
// the same issue occurring for all primary keys in tables and associated foreign keys in other tables
// need to figure out how to add the primary key after the fact
// ALTER TABLE tablename ADD COLUMN column_name DATATYPE PRIMARY KEY
// ALTER TABLE tablename
// ADD CONSTRAINT FK_theColumnYourTargeting
// FOREIGN KEY(theColumnYourTargeting) REFERENCES theOriginalTableWhereItsFrom(theColumnName)


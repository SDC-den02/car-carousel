const mariadb = require('mariadb');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const faker = require('faker');
const fs = require('fs');
// import app from '../app';

const app = express();
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json()); 
app.use(cors());

// const connection = mariadb
// .createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'venicle'
// });
// const arr = [['toyota', 'prius', '2009'], ['jeep', 'compass', 2018]];
// connection.batch('INSERT INTO cars (make, model, year) VALUES (?, ?, ?)', arr);
const createFakeVenicle = () => ([
  faker.name.firstName(),
  faker.name.lastName(),
  faker.random.number({min: 1950, max: 2020 })
]);

// const seedData = async () => {
//   connection.query('DELETE FROM cars WHERE id > 8');
//   let maxLimit = 5000000;
//   let venicleBatch = [];
//   for( let i = 0; i <= maxLimit; i++){
//     venicleBatch.push(createFakeVenicle());
//     connection
//       .query(`INSERT INTO cars (make, model, year) VALUES (?, ?, ?)`,venicleBatch);

//       if (i % 1000 === 0){
//         console.log('First Batch: ', i);
//       }
//   }

//   for( let i = 0; i <= maxLimit; i++){
//     venicleBatch.push(createFakeVenicle());
//     connection
//       .query(`INSERT INTO cars (make, model, year) VALUES (?, ?, ?)`,venicleBatch);

//       if (i % 1000 === 0){
//         console.log('Second Batch: ', i);
//       }
//   }
// }
// seedData();

app.get('/cars', (req, res) => {
  const getQuery = 'SELECT * FROM cars LIMIT 100'
  connection.query(getQuery, (err, results) => {
    if (err){
      res.status(400).send(err);
        } else {
      res.status(200).json({results: results});   
    }
  })
})

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
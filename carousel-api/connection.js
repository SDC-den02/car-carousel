require('newrelic');
const mariadb = require('mariadb/callback');

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
const connection = mariadb
.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'venicle'
});

// const createFakeVenicle = () => ([
//   faker.name.firstName(),
//   faker.name.lastName(),
//   faker.random.number({min: 1950, max: 2020 })
// ]);

app.get('/cars', (req, res) => {
  const getQuery = 'SELECT * FROM cars where id < 100'
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
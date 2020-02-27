const mariadb = require('mariadb');
require('dotenv').config();
const faker = require('faker');

// import app from '../app';

const connection = mariadb
.createPool({
  connectionLimit: 30,
  acquireTimeout: 100000,
  host: 'localhost',
  user: 'root',
  database: 'venicle',
});

// const createFakeVenicle = () => ({
//         make: faker.name.firstName(),
//         model: faker.name.lastName(),
//         year: faker.random.number({min: 1950, max: 2020 })
// });
const createCarArray = () => ([
  faker.name.firstName(), faker.name.lastName(), faker.random.number({min: 1950, max: 2020 }) 
  ]);

const seedDb = async () => {
  connection.query('DELETE FROM cars WHERE id > 8;')
    .then(() => {connection.query('ALTER TABLE cars AUTO_INCREMENT = 9;')})
    .then(() => {
      let maxLimit = 500;
      for(let i = 0; i < maxLimit; i++){
        let venicleBatch = [];
        for(let j =0; j < 20000; j++) {
          // inner array
          venicleBatch.push(createCarArray());
        } 
        connection.batch(`INSERT INTO cars (make, model, year) VALUES (?, ?, ?)`,venicleBatch)
        .then(res => {console.log('Batch Complete')})
        .catch( err => {console.log('Error inserting into query: ', err)})
          //batch created
          console.log("Batch created: ", i)
      };
    })
    .catch( err => {console.log('Error deleting into query: ', err)})      
  };
seedDb();
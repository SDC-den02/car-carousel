
 const faker = require("faker");
 const MongoClient = require("mongodb").MongoClient;
 const assert = require("assert");
 const _ = require("lodash");
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3002;
const app = express();

 // connection URL
 const url = "mongodb://localhost:27017";

 // Database Name
 const dbName = "cars_mongo_database";

 // Use connect method to connect to the server
 MongoClient.connect(url, function(err, client) {
   assert.equal(null, err);
   const db = client.db(dbName);

   // get access to the relevant connections
   const carsCollection = db.collection("cars");
   // generate a bunch of cars

   let cars = [];
   for (let i =0; i < 10; i += 1) {
     const make = faker.name.firstName();
     const model = faker.name.lasttName();
     const year = faker.random.number({min: 1950, max: 2020 });

     let newCars = {
       make,
       model,
       year
     }
     cars.push(newCars)
   }
   carsCollection.insertMany(cars);
   console.log("MongoDB Seeded! :))");
   

 });

 app.get('/cars', (req, res) => {
  db.collection('cars').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.json({cars: result});
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}!`);
})
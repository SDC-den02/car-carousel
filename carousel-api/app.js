import express from 'express';
import cors from 'cors';

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

const app = express();
app.use(express.json());
app.use(cors());

// Get all Cars
app.get('/cars', async (req, res) => {
  try {
    const cars = await database('cars').select();
    if (!cars.length) return res.status(404).json('Cars Not Found');
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ err });
  }
});

// Get all images for specific car
app.get('/cars/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  database('images')
    .where('car_id', id)
    .then(images => {
      if (images.length) {
        return res.status(200).json(images);
      } else {
        return res.status(404).json(`Images Not found with id: ${id}`);
      }
    })
    .catch(err => res.status(500).json({ err }));
});

// Get all images
app.get('/images', async (req, res) => {
  try {
    const images = await database('images').select();
    res.status(200).json(images);
  } catch (err) {
    res.status(500).json({ err });
  }
});

export default app;
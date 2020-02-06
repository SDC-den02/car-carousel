const request = require('supertest');
import app from './app';
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

describe('api', () => {

  // beforeEach(async () => {
  //   await database.seed.run();
  // });

  describe('GET /cars', () => {
    it('should return 200 and all cars in the database', async () => {
      const expected = await database('cars').select();
      const response = await request(app).get('/cars');
      expect(response.status).toEqual(200);
      expect(response.body.length).toEqual(expected.length);
    });
  });

  describe('GET /images', () => {
    it('should return 200 and all images in the database', async () => {
      const expected = await database('images').select();
      const response = await request(app).get('/images');
      expect(response.status).toEqual(200);
      expect(response.body.length).toEqual(expected.length);
    });
  });

  describe('GET /cars/:id', () => {
    it('should return 200 with a specific car if it exists in the db', async () => {
      const expectedCar = await database('images').first();
      const { car_id } = expectedCar;
      const res = await request(app).get(`/cars/${car_id}`);
      const result = res.body[0];
      expect(res.status).toBe(200);
      expect(result.image).toEqual(expectedCar.image);
      expect(result.car_id).toEqual(expectedCar.car_id);
    });

    it('should return a status of 404 if car is not in db', async () => {
      const id = -1;
      const res = await request(app).get(`/cars/${id}`);
      const status = res.status;
      expect(status).toBe(404);
    })

  });
});
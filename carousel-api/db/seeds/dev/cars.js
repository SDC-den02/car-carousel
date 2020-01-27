const data = require('../../data/seedData');

const createCar = (knex, car) => {
  return knex('cars').insert({
    make: car.make,
    model: car.model,
    year: car.year
  }, 'id')
    .then(car_id => {
      let imagePromises = [];
      car.images.forEach(image => {
        imagePromises.push(
          createImage(knex, {
            image,
            car_id: car_id[0]
          })
        );
      });
      return Promise.all(imagePromises);
    });
}

const createImage = (knex, image) => {
  return knex('images').insert(image);
}


exports.seed = function (knex) {
  return knex('cars').del()
    .then(() => knex('images').del())
    .then(() => {
      let carPromises = [];
      data.forEach(car => {
        carPromises.push(createCar(knex, car));
      });
      return Promise.all(carPromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};

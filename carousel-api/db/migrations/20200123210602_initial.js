exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('cars', function (table) {
      table.increments('id').primary();
      table.string('make');
      table.string('model');
      table.integer('year');

      table.timestamps(true, true);
    }),
    knex.schema.createTable('images', function (table) {
      table.increments('id').primary();
      table.string('image_1');
      table.string('image_2');
      table.string('image_3');
      table.string('image_4');
      table.string('image_5');
      table.string('image_6');
      table.integer('car_id').unsigned();
      table.foreign('cars_id')
        .references('cars.id');

      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('cars'),
    knex.schema.dropTable('images'),
  ]);
};

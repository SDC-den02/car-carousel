exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('cars', function(table) {
      table.increments('id').primary();
      table.string('make');
      table.string('model');
    }),
    knex.schema.createTable('images', function (table) {
      table.increments('id').primary();
      
    })
  ])
};

exports.down = function(knex) {

};

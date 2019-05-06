exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.hasTable('dealers').then(exists => {
      if (!exists) {
        return knex.schema.createTable('dealers', t => {
          t.increments('id').primary();
          t.string('name');
          t.string('street');
          t.string('suite');
          t.string('city');
          t.string('zip');
          t.string('state');
          t.string('country');
          t.string('email');
          t.integer('phone');
          t.string('website');
          t.float('lat');
          t.float('lng');
        });
      }
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('dealers')]);
};

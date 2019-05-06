exports.up = function(knex, Promise) {
  return Promise.all([
    // Vendors table depends on following
    knex.schema.hasTable('vendors').then(exists => {
      if (!exists) {
        return knex.schema.createTable('vendors', t => {
          t.increments('id').primary();
          t.string('name').notNullable();
          t.string('handle').notNullable();
          t.string('logo_url').notNullable();
          t.boolean('is_featured').defaultTo(false);
          t.boolean('is_top_six').defaultTo(false);
          t.integer('top_six_position');
          t.string('description', 2000).notNullable();
        });
      }
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('vendors')]);
};

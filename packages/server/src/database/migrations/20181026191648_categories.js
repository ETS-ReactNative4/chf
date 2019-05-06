exports.up = function(knex, Promise) {
  return Promise.all([
    // Vendors table depends on following
    knex.schema.hasTable('categories').then(exists => {
      if (!exists) {
        return knex.schema.createTable('categories', t => {
          t.increments('id').primary();
          //t.string('shopify_id').notNullable();
          t.string('name').notNullable();
          t.string('handle').notNullable();
        });
      }
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('categories')]);
};

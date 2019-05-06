exports.up = function(knex, Promise) {
  return Promise.all([
    // Vendors table depends on following
    knex.schema.hasTable('category_vendor_link').then(exists => {
      if (!exists) {
        return knex.schema.createTable('category_vendor_link', t => {
          t.increments('id').primary();
          t.integer('category_id')
            .references('categories.id')
            .onDelete('CASCADE');
          t.integer('vendor_id')
            .references('vendors.id')
            .onDelete('CASCADE');
        });
      }
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('category_vendor_link')]);
};

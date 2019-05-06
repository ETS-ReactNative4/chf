exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.hasTable('comparable_qualities').then(exists => {
      if (!exists) {
        return knex.schema.createTable('comparable_qualities', t => {
          t.increments('id').primary();
          t.string('name');
        });
      }
    }),
    knex.schema.hasTable('product_comparisons').then(exists => {
      if (!exists) {
        return knex.schema.createTable('product_comparisons', t => {
          t.increments('id').primary();
          t.integer('product_id')
            .references('products.id')
            .onDelete('CASCADE');
          t.integer('comparable_quality_id')
            .references('comparable_qualities.id')
            .onDelete('CASCADE');
          t.string('value');
        });
      }
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('product_comparisons'), knex.schema.dropTable('comparable_qualities')]);
};

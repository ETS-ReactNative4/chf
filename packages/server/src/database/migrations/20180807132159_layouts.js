exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.hasTable('layouts').then(exists => {
      if (!exists) {
        return knex.schema.createTable('layouts', t => {
          t.increments('id').primary();
          t.string('name');
          t.jsonb('layout_content');
        });
      }
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('layouts')]);
};

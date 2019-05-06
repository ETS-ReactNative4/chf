exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.hasTable('page_meta').then(exists => {
      if (!exists) {
        return knex.schema.createTable('page_meta', t => {
          t.increments('id').primary();
          t.string('key');
          t.integer('page_id');
          t.jsonb('value');
          t.string('edited_by');
          t.enu('status', ['draft', 'published']).defaultTo('draft');
          t.timestamps(true, true);
        });
      }
    }),
    knex.schema.hasTable('page_contents').then(exists => {
      if (!exists) {
        return knex.schema.createTable('page_contents', t => {
          t.increments('id').primary();
          t.integer('page_id');
          t.string('edited_by');
          t.jsonb('page_content');
          t.enu('status', ['draft', 'published']).default('draft');
          t.timestamps(true, true);
        });
      }
    }),
    knex.schema.hasTable('pages').then(exists => {
      if (!exists) {
        return knex.schema.createTable('pages', t => {
          t.increments('id').primary();
          t.string('title');
          t.string('name');
          t.string('author');
          t.string('edited_by');
          t.enu('status', ['draft', 'published']).defaultTo('draft');
          t.integer('page_content_id')
            .references('page_contents.id')
            .onDelete('CASCADE');
          t.integer('page_meta_id')
            .references('page_meta.id')
            .onDelete('CASCADE');
          t.timestamps(true, true);
        });
      }
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('pages'),
    knex.schema.dropTable('page_contents'),
    knex.schema.dropTable('page_meta')
  ]);
};

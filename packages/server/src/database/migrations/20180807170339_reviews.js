exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.hasTable('product_reviews').then(exists => {
      if (!exists) {
        return knex.schema.createTable('product_reviews', t => {
          t.increments('id').primary();
          t.string('name').notNullable();
          t.integer('product_id')
            .references('products.id')
            .onDelete('CASCADE');
          t.integer('user_id')
            .references('users.id')
            .onDelete('CASCADE');
          t.integer('rating');
          t.string('title').notNullable();
          t.string('body').notNullable();
          t.enu('status', ['posted', 'flagged', 'removed'])
            .defaultTo('posted')
            .notNull();
          t.enu('removal_reason', ['user', 'inappropriate', null]).defaultTo(null);
          t.timestamps(true, true);
        });
      }
    }),
    knex.schema.hasTable('review_votes').then(exists => {
      if (!exists) {
        return knex.schema.createTable('review_votes', t => {
          t.increments('id').primary();
          t.integer('product_review_id')
            .references('product_reviews.id')
            .onDelete('CASCADE');
          t.integer('user_id')
            .references('users.id')
            .onDelete('CASCADE');
          t.enu('vote', ['upvote', 'downvote', null]);
          t.timestamps(true, true);
        });
      }
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('review_votes'), knex.schema.dropTable('product_reviews')]);
};

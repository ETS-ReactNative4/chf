exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.hasTable('users').then(exists => {
      if (!exists) {
        return knex.schema.createTable('users', t => {
          t.increments('id').primary();
          t.uuid('uuid')
            .unique()
            .notNullable();
          t.string('username');
          t.string('first_name');
          t.string('last_name');
          t.string('telephone');
          t.string('email')
            .unique()
            .notNullable();
          t.string('password');
          t.string('role').defaultTo('user');
          t.boolean('is_active').defaultTo(false);
          t.timestamps(false, true);
        });
      }
    }),
    knex.schema.hasTable('address_types').then(exists => {
      if (!exists) {
        return knex.schema.createTable('address_types', t => {
          t.increments('id').primary();
          t.string('name')
            .unique()
            .notNullable();
        });
      }
    }),
    knex.schema.hasTable('user_addresses').then(exists => {
      if (!exists) {
        return knex.schema.createTable('user_addresses', t => {
          t.increments('id').primary();
          t.integer('user_id')
            .references('users.id')
            .onDelete('CASCADE');
          t.string('first_name');
          t.string('last_name');
          t.string('street');
          t.string('suite');
          t.string('city');
          t.string('state');
          t.string('zip');
          t.string('country');
          t.enu('address_type', ['billing', 'shipping']);
        });
      }
    }),
    // Keeping from original schema
    knex.schema.hasTable('auth_certificate').then(exists => {
      if (!exists) {
        return knex.schema.createTable('auth_certificate', t => {
          t.increments('id').primary();
          t.string('serial').unique();
          t.integer('user_id')
            .references('user.id')
            .onDelete('CASCADE');
        });
      }
    }),
    knex.schema.hasTable('auth_facebook').then(exists => {
      if (!exists) {
        return knex.schema.createTable('auth_facebook', t => {
          t.increments('id').primary();
          t.string('fb_id').unique();
          t.string('display_name');
          t.integer('user_id')
            .references('user.id')
            .onDelete('CASCADE');
          t.timestamps(false, true);
        });
      }
    }),
    knex.schema.hasTable('auth_google').then(exists => {
      if (!exists) {
        return knex.schema.createTable('auth_google', t => {
          t.increments('id').primary();
          t.string('google_id').unique();
          t.string('display_name');
          t.integer('user_id')
            .references('user.id')
            .onDelete('CASCADE');
        });
      }
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('address_types'),
    knex.schema.dropTable('user_addresses'),
    knex.schema.dropTable('users')
  ]);
};

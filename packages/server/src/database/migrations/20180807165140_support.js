exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.hasTable('warranties').then(exists => {
      if (!exists) {
        return knex.schema.createTable('warranties', t => {
          t.increments('id').primary();
          t.integer('product_id')
            .references('products.id')
            .onDelete('CASCADE');
          t.string('code').notNullable();
          t.integer('duration').notNullable();
          t.string('description');
          t.boolean('is_active')
            .notNullable()
            .defaultTo('true');
        });
      }
    }),
    knex.schema.hasTable('user_warranties').then(exists => {
      if (!exists) {
        return knex.schema.createTable('user_warranties', t => {
          t.increments('id').primary();
          t.string('first_name');
          t.string('last_name');
          t.string('email');
          t.string('serial_number')
            .unique()
            .notNullable();
          t.integer('warranty_id')
            .references('warranties.id')
            .onDelete('CASCADE');
          t.integer('product_id')
            .references('products.id')
            .onDelete('CASCADE');
          t.integer('user_id')
            .references('users.id')
            .onDelete('CASCADE');
          t.integer('order_id')
            .references('orders.id')
            .onDelete('CASCADE');
          t.date('date_of_purchase');
          t.string('model');
          t.string('additional_options');
          t.string('address');
          t.string('suite');
          t.string('city');
          t.string('state');
          t.string('zip');
          t.string('telephone');
          t.string('age');
          t.string('occupation');
          t.string('referral_source');
          t.string('other_referral_source');
          t.timestamps(true, true);
          t.enu('status', ['non-defective', 'defective', 'replaced'])
            .defaultTo('non-defective')
            .notNull(0);
          t.string('notes');
        });
      }
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('user_warranties'), knex.schema.dropTable('warranties')]);
};

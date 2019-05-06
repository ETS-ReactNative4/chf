exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.hasTable('orders').then(exists => {
      if (!exists) {
        return knex.schema.createTable('orders', t => {
          t.increments('id').primary();
          t.string('captured_transaction_id');
          t.integer('applied_discount');
          t.boolean('is_submitted').defaultTo('false');
          t.integer('user_id')
            .references('user.id')
            .onDelete('CASCADE');
          t.integer('order_shipping_id')
            .references('user_addresses.id')
            .onDelete('CASCADE');
          t.integer('order_billing_id')
            .references('user_addresses.id')
            .onDelete('CASCADE');
          t.timestamps(true, true);
          t.boolean('is_deleted').defaultTo('false');
        });
      }
    }),
    knex.schema.hasTable('discount_types').then(exists => {
      if (!exists) {
        return knex.schema.createTable('discount_types', t => {
          t.increments('id').primary();
          t.string('type').unique();
        });
      }
    }),
    knex.schema.hasTable('discounts').then(exists => {
      if (!exists) {
        return knex.schema.createTable('discounts', t => {
          t.increments('id').primary();
          t.string('title');
          t.string('code');
          t.decimal('value');
          t.integer('discount_type_id')
            .references('discount_types.id')
            .onDelete('CASCADE');
          t.timestamp('start_date').defaultTo(knex.fn.now());
          t.timestamp('end_date').notNullable();
        });
      }
    }),
    knex.schema.hasTable('discounted_products').then(exists => {
      if (!exists) {
        return knex.schema.createTable('discounted_products', t => {
          t.integer('discount_id')
            .references('discounts.id')
            .onDelete('CASCADE');
          t.integer('product_id')
            .references('products.id')
            .onDelete('CASCADE');
        });
      }
    }),
    knex.schema.hasTable('ordered_products').then(exists => {
      if (!exists) {
        return knex.schema.createTable('ordered_products', t => {
          t.increments('id').primary();
          t.integer('order_id')
            .references('orders.id')
            .onDelete('CASCADE');
          t.integer('product_id')
            .references('products.id')
            .onDelete('CASCADE');
          t.integer('product_quantity');
          t.decimal('product_price');
          t.integer('discount_id')
            .references('discounts.id')
            .onDelete('CASCADE');
          t.timestamps(true, true);
        });
      }
    }),
    knex.schema.hasTable('order_status').then(exists => {
      if (!exists) {
        return knex.schema.createTable('order_status', t => {
          t.increments('id').primary();
          t.integer('order_id')
            .references('orders.id')
            .onDelete('CASCADE');
          t.string('status_description');
        });
      }
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('discounted_products'),
    knex.schema.dropTable('ordered_products'),
    knex.schema.dropTable('order_status'),
    knex.schema.dropTable('discounts'),
    knex.schema.dropTable('discount_types'),
    knex.schema.dropTable('orders')
  ]);
};

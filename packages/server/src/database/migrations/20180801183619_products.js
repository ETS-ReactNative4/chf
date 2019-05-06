exports.up = function(knex, Promise) {
  return Promise.all([
    //Products table depends on following
    knex.schema.hasTable('product_locations').then(exists => {
      if (!exists) {
        return knex.schema.createTable('product_locations', t => {
          t.increments('id').primary();
          t.string('location').notNullable();
        });
      }
    }),
    knex.schema.hasTable('manufacturers').then(exists => {
      if (!exists) {
        return knex.schema.createTable('manufacturers', t => {
          t.increments('id').primary();
          t.string('name')
            .unique()
            .notNullable();
        });
      }
    }),
    knex.schema.hasTable('products').then(exists => {
      if (!exists) {
        return knex.schema.createTable('products', t => {
          t.increments('id').primary();
          t.string('name', 64).notNullable();
          t.text('short_description', 255);
          t.string('sku', 100);
          t.string('upc', 100);
          t.string('ean', 100);
          t.string('jan', 100);
          t.string('isbn', 100);
          t.string('mpn', 100);
          t.integer('location_id')
            .references('product_locations.id')
            .onDelete('CASCADE');
          t.integer('quantity', 100)
            .unsigned()
            .notNullable();
          t.integer('availability_id', 11).notNullable();
          t.jsonb('images');
          t.string('image', 255).notNullable();
          t.integer('manufacturer_id')
            .references('manufacturers.id')
            .onDelete('CASCADE');
          t.decimal('price', 15, 2)
            .notNullable()
            .unsigned()
            .defaultTo('0.00');
          t.integer('tax_class_id', 11).defaultTo(1);
          t.decimal('weight', 15, 3).defaultTo('0.000');
          t.decimal('length', 15, 3).defaultTo('0.000');
          t.decimal('width', 15, 3).defaultTo('0.000');
          t.decimal('height', 15, 3).defaultTo('0.000');
          t.integer('length_class_id', 11).defaultTo('0');
          t.jsonb('layout');
          t.jsonb('design');
          t.integer('viewed', 5);
          t.timestamps(true, true);
        });
      }
    }),
    knex.schema.hasTable('product_attributes').then(exists => {
      if (!exists) {
        return knex.schema.createTable('product_attributes', t => {
          t.increments('id').primary();
          t.integer('product_id')
            .references('products.id')
            .onDelete('CASCADE');
          t.jsonb('attributes');
        });
      }
    }),
    knex.schema.hasTable('product_option_groups').then(exists => {
      if (!exists) {
        return knex.schema.createTable('product_option_groups', t => {
          t.increments('id').primary();
          t.string('group_name').unique();
        });
      }
    }),
    knex.schema.hasTable('product_options').then(exists => {
      if (!exists) {
        return knex.schema.createTable('product_options', t => {
          t.increments('id').primary();
          t.integer('product_id')
            .references('products.id')
            .onDelete('CASCADE');
          t.integer('option_group_id')
            .references('product_option_groups.id')
            .onDelete('CASCADE');
          t.string('value');
        });
      }
    }),
    knex.schema.hasTable('product_relations').then(exists => {
      if (!exists) {
        return knex.schema.createTable('product_relations', t => {
          t.increments('id').primary();
          t.integer('parent_product_id')
            .references('products.id')
            .onDelete('CASCADE');
          t.integer('product_id')
            .references('products.id')
            .onDelete('CASCADE');
        });
      }
    }),
    knex.schema.hasTable('related_products').then(exists => {
      if (!exists) {
        return knex.schema.createTable('related_products', t => {
          t.increments('id').primary();
          t.string('product_name').notNullable();
          t.string('product_handle').notNullable();
          t.string('related_name').notNullable();
          t.string('related_handle').notNullable();
        });
      }
    }),
    knex.schema.hasTable('product_data').then(exists => {
      if (!exists) {
        return knex.schema.createTable('product_data', t => {
          t.increments('id').primary();
          t.string('product_name').defaultTo('');
          t.string('sku').defaultTo('');
          t.string('handle').notNullable();
          t.text('shock_absorption').defaultTo('');
          t.text('console').defaultTo('');
          t.text('user_ids').defaultTo('');
          t.text('workouts').defaultTo('');
          t.text('hrt_monitoring').defaultTo('');
          t.text('stride_technology').defaultTo('');
          t.text('power').defaultTo('');
          t.text('design').defaultTo('');
          t.text('drive_system').defaultTo('');
          t.text('handlebars').defaultTo('');
          t.text('seat').defaultTo('');
          t.text('pedals').defaultTo('');
          t.text('frame').defaultTo('');
          t.text('finish').defaultTo('');
          t.text('motion').defaultTo('');
          t.text('exercises').defaultTo('');
          t.text('weight_stack').defaultTo('');
          t.text('included_accessories').defaultTo('');
          t.text('optional_weight_stack').defaultTo('');
          t.text('running_area').defaultTo('');
          t.text('motor').defaultTo('');
          t.text('speed').defaultTo('');
          t.text('incline').defaultTo('');
          t.text('resistance_levels').defaultTo('');
          t.text('resistance_system').defaultTo('');
          t.text('stride').defaultTo('');
          t.text('max_user_weight').defaultTo('');
          t.text('ramp').defaultTo('');
          t.text('stored_vertical_height').defaultTo('');
          t.text('seat_floor_distance').defaultTo('');
          t.text('warranty').defaultTo('');
        });
      }
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('product_attributes'),
    knex.schema.dropTable('product_options'),
    knex.schema.dropTable('product_relations'),
    knex.schema.dropTable('related_products'),
    knex.schema.dropTable('product_option_groups'),
    knex.schema.dropTable('products'),
    knex.schema.dropTable('manufacturers'),
    knex.schema.dropTable('product_locations'),
    knex.schema.dropTable('product_data')
  ]);
};

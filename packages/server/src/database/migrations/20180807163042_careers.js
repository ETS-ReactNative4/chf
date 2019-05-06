exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.hasTable('careers').then(exists => {
      if (!exists) {
        return knex.schema.createTable('careers', t => {
          t.increments('id').primary();
          t.string('title');
          t.string('department');
          t.string('location');
          t.string('responsibilities');
          t.json('requirements');
          t.boolean('status').notNullable();
          t.timestamps(true, true);
        });
      }
    }),
    knex.schema.hasTable('applications').then(exists => {
      if (!exists) {
        return knex.schema.createTable('applications', t => {
          t.increments('id').primary();
          t.integer('career_id')
            .references('careers.id')
            .onDelete('CASCADE');
          t.string('first_name');
          t.string('last_name');
          t.string('email');
          t.string('phone');
          t.string('street');
          t.string('suite');
          t.string('city');
          t.string('state');
          t.string('zip');
          t.string('resume');
          t.string('referral');
          t.boolean('eligibility');
          t.boolean('deleted').defaultTo('false');
          t.timestamps(true, true);
        });
      }
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('applications'), knex.schema.dropTable('careers')]);
};

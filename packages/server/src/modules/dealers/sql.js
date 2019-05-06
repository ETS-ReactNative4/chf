/*eslint-disable no-unused-vars*/
import knex from '../../sql/connector';

export default class Dealers {
  static alterDealers = async () => {
    try {
      const done = await knex.schema.alterTable('dealers', t => {
        t.string('image_url');
        t.text('description');
        t.string('url_name');
        t.string('hours');
        t.string('handle');
      });
      if (done) {
        return true;
      }
    } catch (e) {
      throw new Error(e);
    }
  };
  get = {
    async dealers() {
      try {
        const dealers = await knex('dealers').select('*').orderBy('name');
        const isUpdated = await knex.schema.hasColumn('dealers', 'image_url');

        if (!isUpdated) {
          const updated = await Dealers.alterDealers();
          if (updated) {
            return { isUpdated: true };
          }
        }
        return dealers;
      } catch (e) {
        return e;
      }
    },
    async dealerByHandle({ handle }) {
      console.log('DEALER HANDLE IN SQL::', handle);
      try {
        const dealer = await knex('dealers')
          .where({ handle })
          .select('*')
          .first();
        return dealer;
      } catch (e) {
        console.log('Dealer by handle error', e);
        return e;
      }
    }
  };
  insertOrUpdate = {
    async updateDealer(input) {
      console.log('INSERT HANDLE:', input.handle);
      try {
        const update = await knex('dealers').where({ handle: input.handle });
        if (update.length == 0) {
          console.log('HANDLE::', input.handle);
          await knex('dealers').insert({ ...input });
          return knex('dealers')
            .select('*')
            .where({ handle: input.handle })
            .first();
        } else {
          await knex('dealers')
            .where({ handle: input.handle })
            .update({ ...input });

          return knex('dealers')
            .where({ handle: input.handle })
            .select('*')
            .first();
        }
      } catch (e) {
        return e;
      }
    }
  };
  update = {};
  delete = {};
}

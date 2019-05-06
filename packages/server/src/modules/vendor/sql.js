/*eslint-disable no-unused-vars*/
import knex from '../../sql/connector';

export default class Vendor {
  get = {
    async vendors() {
      return knex
        .select()
        .from('vendors')
        .orderBy('id')
        .catch(err => console.log('Error retrieving vendors', err));
    },
    async vendorById(id, select = '*') {
      return await knex
        .select(select)
        .from('vendors')
        .where({ id })
        .first()
        .catch(err => console.log('Error retrieving the category data', err));
    },
    async vendorByHandle(handle, select = '*') {
      return await knex
        .select(select)
        .from('vendors')
        .where({ handle })
        .first()
        .catch(err => console.log('Error retrieving the category data', err));
    },
    async vendorCategories(vendor_id, select = '*') {
      return await knex
        .select('c.*')
        .from('category_vendor_link AS cvl')
        .innerJoin('categories AS c', 'c.id', 'cvl.category_id')
        .where('cvl.vendor_id', '=', vendor_id)
        .catch(err => console.log('Error retrieving Categories related Vendors data', err));
    }
  };
  insertOrUpdate = {
    async vendorInfo({ id, ...vendor }) {
      try {
        const update = await knex('vendors').where({ id });
        if (update.length == 0) {
          await knex('vendors')
            .insert(vendor)
            .returning([
              'id',
              'name',
              'handle',
              'logo_url',
              'is_featured',
              'is_top_six',
              'top_six_position',
              'description'
            ]);
        } else {
          return await knex('vendors')
            .where({ id })
            .update(vendor)
            .returning([
              'id',
              'name',
              'handle',
              'logo_url',
              'is_featured',
              'is_top_six',
              'top_six_position',
              'description'
            ]);
        }
      } catch (e) {
        console.log('ERROR UPDATING VENDOR:', e);
      }
    }
  };
}

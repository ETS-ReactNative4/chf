/*eslint-disable no-unused-vars*/
import knex from '../../sql/connector';

export default class Categories {
  get = {
    async categories(select = '*') {
      return await knex
        .select(select)
        .from('categories')
        .catch(err => console.log('Error retrieving categories data', err));
    },
    async categoryByHandle(handle, select = '*') {
      return await knex
        .select(select)
        .from('categories')
        .where({ handle })
        .first()
        .catch(err => console.log('Error retrieving the category data', err));
    },
    async categoryVendors(category_id, select = '*') {
      return await knex
        .select('v.*')
        .from('category_vendor_link AS cvl')
        .innerJoin('vendors AS v', 'v.id', 'cvl.vendor_id')
        .where('cvl.category_id', '=', category_id)
        .catch(err => console.log('Error retrieving Category related Vendors data', err));
    }
  };
  add = {};
  update = {};
  delete = {};
}

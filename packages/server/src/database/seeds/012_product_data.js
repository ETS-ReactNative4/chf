import productData from '../seedSupport/productData';
/* eslint-disable no-unused-vars */
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('product_data')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('product_data').insert(productData);
    });
};

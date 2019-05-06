import relatedProducts from '../seedSupport/relatedProducts';
/* eslint-disable no-unused-vars */
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('related_products')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('related_products').insert(relatedProducts);
    });
};

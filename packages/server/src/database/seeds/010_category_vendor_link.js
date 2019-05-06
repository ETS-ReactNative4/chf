/* eslint-disable no-unused-vars */
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('category_vendor_link')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('category_vendor_link').insert([
        {
          category_id: 1,
          vendor_id: 4
        },
        {
          category_id: 1,
          vendor_id: 2
        },
        {
          category_id: 1,
          vendor_id: 1
        },
        {
          category_id: 2,
          vendor_id: 4
        },
        {
          category_id: 2,
          vendor_id: 7
        },
        {
          category_id: 2,
          vendor_id: 2
        },
        {
          category_id: 2,
          vendor_id: 1
        },
        {
          category_id: 3,
          vendor_id: 4
        },
        {
          category_id: 3,
          vendor_id: 3
        },
        {
          category_id: 3,
          vendor_id: 7
        },
        {
          category_id: 3,
          vendor_id: 1
        },
        {
          category_id: 4,
          vendor_id: 1
        },
        {
          category_id: 4,
          vendor_id: 3
        },
        {
          category_id: 5,
          vendor_id: 3
        },
        {
          category_id: 5,
          vendor_id: 1
        },
        {
          category_id: 6,
          vendor_id: 6
        },
        {
          category_id: 9,
          vendor_id: 4
        },
        {
          category_id: 9,
          vendor_id: 5
        },
        {
          category_id: 10,
          vendor_id: 4
        },
        {
          category_id: 10,
          vendor_id: 11
        },
        {
          category_id: 10,
          vendor_id: 2
        },
        {
          category_id: 10,
          vendor_id: 1
        },
        {
          category_id: 11,
          vendor_id: 4
        },
        {
          category_id: 11,
          vendor_id: 3
        },
        {
          category_id: 11,
          vendor_id: 7
        },
        {
          category_id: 11,
          vendor_id: 11
        },
        {
          category_id: 11,
          vendor_id: 2
        },
        {
          category_id: 11,
          vendor_id: 1
        },
        {
          category_id: 12,
          vendor_id: 17
        },
        {
          category_id: 12,
          vendor_id: 5
        },
        {
          category_id: 12,
          vendor_id: 1
        },
        {
          category_id: 12,
          vendor_id: 13
        },
        {
          category_id: 12,
          vendor_id: 2
        },
        {
          category_id: 7,
          vendor_id: 8
        }
      ]);
    });
};

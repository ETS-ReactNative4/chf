/* eslint-disable no-unused-vars */
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('categories').insert([
        {
          //shopify_id: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzc3NzQ3MTU5MTIz',
          name: 'Ellipticals',
          handle: 'ellipticals'
        },
        {
          //shopify_id: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzc3NzQ3MzIyOTYz',
          name: 'Treadmills',
          handle: 'treadmills'
        },
        {
          //shopify_id: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzc3NzQ3Mzg4NDk5',
          name: 'Rowers',
          handle: 'rowers'
        },
        {
          //shopify_id: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzc3NzQ3NDg2ODAz',
          name: 'Strength Training',
          handle: 'strength-training'
        },
        {
          //shopify_id: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzc3NzYzNDc3NTg3',
          name: 'Home Gyms',
          handle: 'home-gyms'
        },
        {
          //shopify_id: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzc3NzYzNTEwMzU1',
          name: 'Laterals',
          handle: 'laterals'
        },
        {
          //shopify_id: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzc3ODUxNTI1MjAz',
          name: 'Vibration',
          handle: 'vibration'
        },
        {
          //shopify_id: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzc3NzYzNjA4NjU5',
          name: 'Used/Clearance',
          handle: 'used-clearance'
        },
        {
          //shopify_id: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzc3NzYzNjQxNDI3',
          name: 'Climbers/Steppers',
          handle: 'climbers-steppers'
        },
        {
          //shopify_id: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzc3NzYzNjc0MTk1',
          name: 'Upright Bikes',
          handle: 'upright-bikes'
        },
        {
          //shopify_id: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzc3NzYzNzA2OTYz',
          name: 'Recumbent Bikes',
          handle: 'recumbent-bikes'
        },
        {
          //shopify_id: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzc3NzYzNzM5NzMx',
          name: 'Accessories',
          handle: 'accessories'
        }
      ]);
    });
};

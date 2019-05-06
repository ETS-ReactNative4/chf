/* eslint import/prefer-default-export: 0 */
import { truncateTables } from '../../sql/helpers';

export async function seed(knex, Promise) {
  await truncateTables(knex, Promise, ['products']);
  return await Promise.all(
    [...Array(13).keys()].map(() => {
      return knex('products').insert({
        name: 'FT2 functional trainer',
        short_description: 'with pull up bar, smith bar, dual weight stacks, and 6 pulleys.',
        sku: `xxxxxxxxxxxxx`.replace(/x/g, () => Math.floor(Math.random() * 9) + 1),
        upc: null,
        ean: null,
        jan: null,
        isbn: null,
        mpn: null,
        // location_id: 1,
        quantity: Math.floor(Math.random() * 40) + 0,
        availability_id: 1,
        image: 'https://picsum.photos/300?image=25',
        // manufacturer_id: 1,
        price: Math.random() * 1000 + 1000,
        tax_class_id: 1,
        weight: Math.random() * 100 + 100,
        // weight_class_id: 1,
        length: Math.random() * 70 + 30,
        width: Math.random() * 50 + 20,
        height: Math.random() * 70 + 50,
        length_class_id: 1,
        viewed: Math.floor(Math.random() * 500) + 1
      });
    })
  );
}

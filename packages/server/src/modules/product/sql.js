/*eslint-disable no-unused-vars*/
import knex from '../../sql/connector';

export default class Product {
  get = {
    async productsPagination(limit = 10, after, select = '*') {
      const where = (after => {
        if (after > 0) return `id < ${after}`;
        else return ``;
      })(after);

      return await knex
        .select(select)
        .from('products')
        .whereRaw(where)
        .limit(limit)
        .catch(err => console.log('Error retrieving multiple products', err));
    },
    async product(id, select = '*') {
      if (id === 0) return null;
      return knex
        .select(select)
        .from('products')
        .where('id', '=', id)
        .first()
        .catch(err => console.log('Error retrieving single product data', err));
    },
    async productsCount() {
      const { count } = await knex('products')
        .count('id')
        .first()
        .catch(err => console.log('Error retrieving product count', err));
      return count;
    },
    async productsNoCategory(select = '*') {
      return await knex
        .select(select)
        .from('products')
        .where('category_id', '=', 'null')
        .catch(err => console.log('Error retrieving products without categories', err));
    },
    async productAttributes(id) {
      return await knex('product_attributes')
        .where({ id })
        .first()
        .catch(err => console.log('Error retrieving product attributes', err));
    },
    async productData(where, select = '*') {
      return await knex('product_data')
        .select(select)
        .where({ ...where })
        .first()
        .catch(err => console.log('Error retrieving product data', err));
    },
    async productSeo(handle) {
      try {
        const exists = await knex.schema.hasTable('seo');
        if (!exists) {
          await knex.schema.createTable('seo', function(t) {
            t.increments('id').primary();
            t.string('handle', 100);
            t.string('title', 100);
            t.text('description');
            t.text('keywords');
          });
        }
        return await knex('seo')
          .select('*')
          .where({ handle })
          .first();
      } catch (e) {
        return e;
      }
    },
    async relatedProducts(product_handle, select = '*') {
      return knex
        .select(select)
        .from('related_products')
        .where({ product_handle })
        .catch(err => console.log('Error retrieving related products', err));
    }
  };
  add = {
    async product(product) {
      console.log('what is product', product);
      return await knex('products')
        .insert(product)
        .returning('*')
        .catch(err => console.log('Error inserting new product', err));
    },
    async productData(product) {
      return await knex('product_data')
        .insert(product)
        .returning('*')
        .catch(err => console.log('Error inserting new product', err));
    },
    async relatedProducts(relatedProducts) {
      return await knex('related_products')
        .insert(relatedProducts)
        .returning('*')
        .catch(err => console.log('Error inserting related products', err));
    }
  };
  update = {
    async product({ id, ...productData }, returning = '*') {
      return await knex('products')
        .where({ id })
        .update(productData)
        .returning(returning)
        .catch(err => console.log('Error updating product', err));
    },
    async productData({ handle, ...productData }, returning = '*') {
      return await knex('product_data')
        .where({ handle })
        .update(productData)
        .returning(returning)
        .catch(err => console.log('Error updating product', err));
    },
    async products(where, update, returning = '*') {
      return await knex('products')
        .where(where)
        .update(update)
        .returning(returning)
        .catch(err => console.log('Error updating products', err));
    },
    async productLayout(id, template) {
      return await knex('products')
        .where({ id })
        .update({ layout: JSON.stringify(template) })
        .returning('layout')
        .catch(err => console.log('Error updating the product layout', err));
    },
    async productDesignMeta(id, meta) {
      return await knex('products')
        .where({ id })
        .update({ design: JSON.stringify(meta) })
        .catch(err => console.log('Error updating product design meta', err));
    },
    async productSeo({ handle, ...seo }) {
      try {
        const update = await knex('seo').where({ handle });
        if (update.length == 0) {
          // console.log('NOTHING::');
          return await knex('seo')
            .insert({ handle, ...seo })
            .returning(['handle', 'title', 'description', 'keywords']);
        } else {
          // console.log('WE HAVE A PRODUCT:', update);
          return await knex('seo')
            .where({ handle })
            .update(seo)
            .returning(['handle', 'title', 'description', 'keywords']);
        }
      } catch (e) {
        return e;
      }
    }
  };
  delete = {
    async productSubCategories(product_id) {
      return await knex('product_sub_categories')
        .where({ product_id })
        .del();
    },
    async relatedProducts(product_handle) {
      return await knex('related_products')
        .where({ product_handle })
        .del();
    },
    async relatedProductsByRelatedHandle(product_handle, relatedIds) {
      return await knex('related_products')
        .where({ product_handle })
        .andWhere('related_handle', 'in', relatedIds)
        .del();
    }
  };
}

/*eslint-disable no-unused-vars*/
import knex from '../../sql/connector';

export default class Admin {
  get = {
    async pages() {
      try {
        return await knex('pages').select('*');
      } catch (e) {
        return e;
      }
    },
    async pageById(id) {
      try {
        return await knex('pages')
          .select('*')
          .where('id', id)
          .first();
      } catch (e) {
        return e;
      }
    },
    async pageByTitle(title) {
      try {
        const exists = await knex('pages')
          .select('*')
          .where('title', title)
          .first();
        if (!exists) {
          const [page] = await knex('pages')
            .insert({ title, name: title.toLowerCase() })
            .returning(['id', 'title', 'name']);
          return page;
        } else {
          return exists;
        }
      } catch (e) {
        return e;
      }
    },
    async vendorByHandle(handle) {
      try {
        const exists = await knex.schema.hasTable('vendor_seo');
        if (!exists) {
          await knex.schema.createTable('vendor_seo', function(t) {
            t.increments('id').primary();
            t.string('handle', 100);
            t.string('title', 100);
            t.text('description');
            t.text('keywords');
          });
        }
        return await knex('vendor_seo')
          .select('*')
          .where({ handle })
          .first();
      } catch (e) {
        return e;
      }
    },
    async collectionByHandle(handle) {
      try {
        const exists = await knex.schema.hasTable('collection_seo');
        if (!exists) {
          await knex.schema.createTable('collection_seo', function(t) {
            t.increments('id').primary();
            t.string('handle', 100);
            t.string('title', 100);
            t.text('description');
            t.text('keywords');
          });
        }
        return await knex('collection_seo')
          .select('*')
          .where({ handle })
          .first();
      } catch (e) {
        return e;
      }
    },
    async pageContents(page_id) {
      try {
        return await knex('page_contents')
          .select('page_content')
          .where('page_id', page_id)
          .first();
      } catch (e) {
        return e;
      }
    }
  };
  insert = {
    async page({ name }) {
      try {
        const data = await knex('pages')
          .returning(['id', 'name'])
          .insert({ name });
        await knex('page_contents').insert({ page_id: data[0].id });
        return data;
      } catch (e) {
        return e;
      }
    },
    async vendorSeo(handle) {
      try {
        const data = await knex('vendor_seo')
          .returning(['id', 'handle'])
          .insert({ handle });
        return data;
      } catch (e) {
        return e;
      }
    },
    async collectionSeo(handle) {
      try {
        const data = await knex('collection_seo')
          .returning(['id', 'handle'])
          .insert({ handle });
        return data;
      } catch (e) {
        return e;
      }
    }
  };
  update = {
    async pageContent({ page_id, content }) {
      try {
        return await knex('page_contents')
          .where('page_id', page_id)
          .update({ page_content: JSON.stringify(content) }, ['page_content']);
      } catch (e) {
        return e;
      }
    },
    async seo({ path, handle, seo }) {
      try {
        const update = await knex(`${path}_seo`).where({ handle });
        if (update.length == 0) {
          // console.log('NOTHING::');
          return await knex(`${path}_seo`)
            .insert({ handle, ...seo })
            .returning(['handle', 'title', 'description', 'keywords']);
        } else {
          // console.log('WE HAVE A PRODUCT:', update);
          return await knex(`${path}_seo`)
            .where({ handle })
            .update(seo)
            .returning(['handle', 'title', 'description', 'keywords']);
        }
      } catch (e) {
        return e;
      }
    }
  };
  delete = {};
}

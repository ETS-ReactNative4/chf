import FileUploader from '../util/FileUploader';

const getField = (field, values) => {
  if (values.hasOwnProperty(field)) {
    return values[field];
  }
};
// const handleLocationsCheck = async (context) => {
//  const check = await context.get.dealers();
//  console.log('CHECK::', check);
//  return check;
// }
/*eslint-disable no-unused-vars*/
export default pubsub => ({
  Query: {
    async pages(obj, input, { Admin }) {
      try {
        const pages = await Admin.get.pages();
        // console.log('PAGES:::', pages);
        if (pages.length == 0) {
          const page = await Admin.insert.page({ id: 0, name: 'home' });
          // console.log('PAGE::', page);
          return page;
        }
        return pages;
      } catch (e) {
        return e;
      }
    },
    async page(obj, { id, pageTitle }, { Admin, Dealers }) {
      try {
        if (id) {
          return { id };
        } else {
          // console.log('NO ID:::', pageTitle);
          const page = await Admin.get.pageByTitle(pageTitle);
          if (page.name === 'locations') {
            // const check = await handleLocationsCheck(Dealers);
            // console.log('LOCATIONSCHECK DONE', check);
          }
          // console.log('PAGE::', page);
          return { id: page.id, title: page.title, name: page.name };
        }
      } catch (e) {
        console.log('ERRROR GETTING PAGE:', e);
        return e;
      }
    },
    async vendorData(_, { handle }, { Admin }) {
      // console.log('Vendor HANDLE:', handle);
      try {
        const data = await Admin.get.vendorByHandle(handle);
        // console.log('DATA::', data, handle.length);
        if (typeof data == 'undefined' && handle.length > 0) {
          const vendor = await Admin.insert.vendorSeo(handle);
          // console.log('VENDOR::', vendor);
          return vendor;
        }
        if (handle.length == 0) {
          return null;
        }
        if (data) {
          return { handle, seo: data };
        }
      } catch (e) {
        return e;
      }
    },
    async collectionData(_, { handle }, { Admin }) {
      // console.log('COLLECTION HANDLE:', handle);
      try {
        const data = await Admin.get.collectionByHandle(handle);
        // console.log('COLLECTION DATA::', data, handle);
        if ((typeof data == 'undefined' || !data) && handle.length > 0) {
          const collection = await Admin.insert.collectionSeo(handle);
          // console.log('VENDOR::', collection);
          return collection;
        }
        if (handle.length == 0) {
          return null;
        }
        if (data) {
          const { id, ...rest } = data;
          const collection = { id, seo: rest };
          // console.log('WE SHOULD SEND DATA::;', collection);
          return collection;
        }
      } catch (e) {
        return e;
      }
      return null;
    }
  },
  Page: {
    async fields(obj, { field_names }, { Admin }, info) {
      // console.log('PAGE ID::', obj);
      const { page_content } = await Admin.get.pageContents(obj.id);
      const requestedFields = field_names
        .map(([section, field]) => {
          return page_content
            .map(({ field_value, ...rest }) => {
              const values = JSON.parse(field_value);
              if (section == rest.section_name) {
                const combined = Object.assign({}, rest, { [field]: getField(field, values) });
                return combined;
              }
            })
            .reduce(
              (accum, curr) => {
                const field_value = curr[field];
                delete curr[field];
                accum = Object.assign({}, accum, curr, { field_value: { [field]: field_value } });
                return accum;
              },
              { field_value: null }
            );
        })
        .reduce((accum, curr) => {
          accum['field_value'] = Object.assign({}, accum['field_value'], curr['field_value']);
          delete curr['field_value'];
          accum = Object.assign({}, accum, curr);
          return accum;
        }, {});
      // console.log('REQUESTED FIELDS:', requestedFields);
      const { field_value, ...fields } = requestedFields;
      const stringValues = JSON.stringify(field_value);
      const data = { ...fields, field_value: stringValues };
      return [data];
    }
  },
  Mutation: {
    async signS3(obj, { filename, filetype }) {
      const signedRequest = await FileUploader.getSignedUrl({ filename, filetype });
      // console.log('signedRequest::??', signedRequest);
      return signedRequest;
    },
    async uploadPageContent(obj, { pageContent }, { Admin }) {
      try {
        const [data] = await Admin.update.pageContent(pageContent);
        return data.page_content;
      } catch (e) {
        console.log('EERROO', e);
      }
    },
    async uploadSeo(obj, { path, handle, seo }, { Admin }) {
      console.log('PATH::', path);
      console.log('HANDLE::', handle);
      console.log('SEO::', seo);
      try {
        const [data] = await Admin.update.seo({ path, handle, seo });
        console.log('DATA::', data);
        return data;
      } catch (e) {
        console.log('ERROR UPDATING SEO DATA::', e);
      }
    }
  },
  Subscription: {}
});

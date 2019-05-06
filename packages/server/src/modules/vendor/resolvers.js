/*eslint-disable no-unused-vars*/
export default pubsub => ({
  Query: {
    async vendors(_, __, context) {
      try {
        return await context.Vendor.get.vendors();
      } catch (err) {
        console.log('Error resolving query of vendors', err);
      }
    },
    async vendor(_, { input }, context) {
      const { handle, id } = input;
      try {
        if (id) {
          return await context.Vendor.get.vendorById(id);
        }
        if (handle) {
          return await context.Vendor.get.vendorByHandle(handle);
        }
      } catch (err) {
        console.log('Error resolving query of single Vendor', err);
      }
    }
  },
  Vendor: {
    async categories(obj, _, context) {
      const { id } = obj;
      try {
        return await context.Vendor.get.vendorCategories(id);
      } catch (err) {
        console.log('Error resolving categories inside of Vendor', err);
      }
    },
    async vendorData(
      obj,
      {
        input: { handle }
      },
      { Admin }
    ) {
      // console.log('OBJ::', obj);
      // console.log(' input', handle);
      // const handle = '';
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
    }
  },
  Mutation: {
    async updateBrand(_, { input }, { Vendor }) {
      // console.log('INPUT::;', input);
      try {
        const [brand] = await Vendor.insertOrUpdate.vendorInfo(input);
        console.log('BRAND::', brand);
        return brand;
      } catch (e) {
        console.log('ERROR IN UPDATE MUTATION', e);
      }
      return null;
    }
  }
});

/*eslint-disable no-unused-vars*/
export default pubsub => ({
  Query: {
    async categories(_, __, context) {
      try {
        return await context.Categories.get.categories();
      } catch (err) {
        console.log('Error resolving query of Categories', err);
      }
    },
    async category(_, { handle }, context) {
      try {
        return await context.Categories.get.categoryByHandle(handle);
      } catch (err) {
        console.log('Error resolving query of single Category', err);
      }
    }
  },
  Category: {
    async vendors(obj, _, context) {
      const { id } = obj;
      try {
        return await context.Categories.get.categoryVendors(id);
      } catch (err) {
        console.log('Error resolving vendors inside of Category', err);
      }
    }
  }
});

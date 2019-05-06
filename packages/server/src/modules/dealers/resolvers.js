const defaultDealer = {
  id: '0',
  handle: '',
  name: ' ',
  street: ' ',
  suite: ' ',
  city: ' ',
  zip: ' ',
  state: ' ',
  country: ' ',
  email: ' ',
  phone: null,
  website: ' ',
  lat: ' ',
  lng: ' '
};
/*eslint-disable no-unused-vars*/
export default pubsub => ({
  Query: {
    async dealers(obj, { first, after }, { Dealers }) {
      const edgesArray = [];
      console.log('AFTER::', after);
      try {
        const dealers = await Dealers.get.dealers(first, after);
        console.log('DEALERS', dealers);
        const updated = dealers.hasOwnProperty('isUpdated');
        console.log('UPDATED::', updated);
        const edgesArray = [];
        dealers.map((dealer, idx) => edgesArray.push({ cursor: after + idx, node: dealer }));
        const endCursor = edgesArray.length > 0 ? edgesArray[edgesArray.length - 1].cursor : 0;
        const dealers_count = edgesArray.length;
        const hasNextPage = dealers_count > after + first;

        if (updated) {
          return {
            dealers_count,
            edges: edgesArray,
            dealer_info: { hasNextPage, end_cursor: endCursor }
          };
        } else if (dealers.length == 0) {
          console.log('LENGTH WAS ZERO::', dealers);
          return {
            dealers_count,
            edges: edgesArray,
            dealer_info: { hasNextPage, end_cursor: endCursor }
          };
        }
        console.log('WE SHOULD HIT HERE::', dealers);
        console.log('DEALERS IN ELSE BLOCK;', edgesArray);
        return {
          dealers_count,
          edges: edgesArray,
          dealer_info: { hasNextPage, end_cursor: endCursor }
        };
      } catch (e) {
        console.log('ERROR ON DEALERS:', e);
      }
    },
    async dealerByHandle(obj, input, { Dealers }) {
      try {
        const handle = input.handle;
        console.log('HANDLE:::', handle);
        const dealer = await Dealers.get.dealerByHandle({ handle });
        console.log('DEALER BY HANDLE RAN:::', dealer);
        if (typeof dealer == 'undefined' || !dealer) {
          console.log('DEALER IF', defaultDealer);
          return defaultDealer; //{ dealerByHandle: defaultDealer };
        }
        console.log('WHY RETURN HERE YET::', dealer);
        return dealer;
      } catch (e) {
        console.log('ERR GETTING DEALER:', e);
        return e;
      }
    }
  },
  Mutation: {
    async addDealer(obj, { dealer }, { Dealers }) {
      const data = dealer;
      try {
        const dealer = await Dealers.insertOrUpdate.updateDealer(data);
        console.log('ADD DEALER::', dealer);
      } catch (e) {
        console.log('ERROR ADDING DEALER', e);
      }
    },
    async updateDealer(obj, { dealer }, { Dealers }) {
      const data = dealer;
      try {
        console.log('UPDATE DEALER INPUT::', data);

        const dealer = await Dealers.insertOrUpdate.updateDealer(data);
        console.log('DEALER RETURN ::', dealer);
        return dealer;
      } catch (e) {
        console.log('ERROR::', e);
      }
    }
  },
  Subscription: {}
});

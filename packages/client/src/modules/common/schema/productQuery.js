import { graphql } from 'react-apollo';

import { PRODUCT_FULL_QUERY } from '../graphql';

export default (id, queryString = PRODUCT_FULL_QUERY) =>
  graphql(queryString, {
    options: {
      variables: { id }
    },
    props({ data: { loading, error, product } }) {
      if (error) throw new Error(`Error in product query ${error}`);
      if (product) {
        const { images } = product;
        const parsedImages = JSON.parse(images);
        const mergedProductData = Object.assign({}, product, {
          images: parsedImages
        });

        return { loading, product: mergedProductData };
      }
      return { loading };
    }
  });

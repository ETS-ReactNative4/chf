import { graphql } from 'react-apollo';

import { PRODUCTS_FULL_QUERY } from '../graphql';

export default (limit = 50, after = 0, queryString = PRODUCTS_FULL_QUERY) =>
  graphql(queryString, {
    options: () => {
      return {
        variables: { limit, after }
      };
    },
    props: ({ data }) => {
      const { loading, error, products, fetchMore } = data;
      //console.log('products', products);
      const loadMoreRows = () => {
        return fetchMore({
          variables: {
            after: products.pageInfo.endCursor
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            const totalCount = fetchMoreResult.products.totalCount;
            const newEdges = fetchMoreResult.products.edges;
            const pageInfo = fetchMoreResult.products.pageInfo;

            return {
              products: {
                totalCount,
                edges: [...previousResult.products.edges, ...newEdges],
                pageInfo,
                __typename: 'Products'
              }
            };
          }
        });
      };
      if (error) throw new Error(`Error in Products Query: ${error}`);
      return { loading, products, loadMoreRows };
    }
  });

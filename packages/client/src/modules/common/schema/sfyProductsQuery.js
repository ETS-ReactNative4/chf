import { graphql } from 'react-apollo';

import { SFY_PRODUCTS_QUERY } from '../graphql/SFY/sfyProductsQuery.graphql';

export default (first = 12, after = 0, query, queryString = SFY_PRODUCTS_QUERY) =>
  graphql(queryString, {
    options: () => {
      return {
        variables: { [`first`]: first, [`after`]: after, [`query`]: query }
      };
    },
    props: ({ data }) => {
      const { loading, error, sfy_shop, fetchMore } = data;
      const { products } = sfy_shop;
      const loadMoreRows = () => {
        return fetchMore({
          variables: {
            after: products[products.length - 1].cursor
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            const newEdges = fetchMoreResult.products.edges;
            const pageInfo = fetchMoreResult.products.pageInfo;

            return {
              products: {
                edges: [...previousResult.products.edges, ...newEdges],
                pageInfo,
                __typename: 'sfy_ProductConnection'
              }
            };
          }
        });
      };
      if (error) throw new Error(`Error in Products Query: ${error}`);
      return { loading, products, loadMoreRows };
    }
  });

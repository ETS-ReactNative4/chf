import { graphql } from 'react-apollo';
import ADMIN_PRODUCTS_QUERY from '../graphql/SFY/sfyAdminProductsQuery.graphql';

export default (queryString, first) =>
  graphql(queryString ? queryString : ADMIN_PRODUCTS_QUERY, {
    options: () => {
      return { variables: { [`first`]: first ? first : 250 } };
    },
    props: ({ data }) => {
      const { loading: productsLoading, error, sfy_shop, fetchMore, variables } = data;
      let currEndCursor, hasNextPage, hasPreviousPage;
      if (!productsLoading && sfy_shop) {
        const { products } = sfy_shop;
        //console.log('products', products);
        if (products.edges.length > 0) currEndCursor = products.edges[products.edges.length - 1].cursor;
        hasNextPage = products.pageInfo.hasNextPage;
        hasPreviousPage = products.pageInfo.hasPreviousPage;
      }
      const loadMore = (first = 250, after = currEndCursor) => {
        const updatedVars = { ...variables, after, first };
        return fetchMore({
          variables: updatedVars,
          updateQuery: (prevResult, { fetchMoreResult }) => {
            if (fetchMoreResult.sfy_shop.products.edges.length === 0) return prevResult;
            const updatedResult = JSON.parse(JSON.stringify(prevResult));
            updatedResult.sfy_shop.products.edges = [
              ...prevResult.sfy_shop.products.edges,
              ...fetchMoreResult.sfy_shop.products.edges
            ];
            updatedResult.sfy_shop.products.pageInfo = fetchMoreResult.sfy_shop.products.pageInfo;
            //console.log('udpatedres', updatedResult);
            return updatedResult;
          }
        });
      };
      if (error) throw new Error(`Error in Admin Products Query: ${error}`);
      if (productsLoading || !sfy_shop) return { productsLoading, sfy_shop };
      if (!productsLoading && sfy_shop) {
        return {
          productsLoading,
          sfy_shop,
          currEndCursor,
          hasNextPage,
          hasPreviousPage,
          loadMore
        };
      }
    }
  });

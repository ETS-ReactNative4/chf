import { graphql } from 'react-apollo';
import PRODUCTS_QUERY from '../graphql/SFY/sfyProductsQuery.graphql';

const capFirstLtr = str => str[0].toUpperCase() + str.slice(1);

const searchFormat = (str, joiner) => {
  return str
    .split('-')
    .map(str => capFirstLtr(str))
    .join(joiner);
};

const vendorFilter = params => {
  if ('vendor_name' in params) {
    const vendorFormatted = searchFormat(params.vendor_name, ' ');
    return `vendor:${vendorFormatted}`;
  } else {
    return undefined;
  }
};

const searchFilter = (queryStr, queryStrParam) => {
  let filterValue = '';
  if (queryStr && queryStr.includes(queryStrParam)) {
    filterValue = queryStr.slice(queryStr.indexOf('=') + 1);
  }
  // console.log('fitlerValue', filterValue);
  return filterValue.replace(/(-|%20)+/gi, ' ');
};

const filteredProductsQuery = (queryString = PRODUCTS_QUERY) =>
  graphql(queryString, {
    options: props => {
      let filterVal = '';
      const { pathname } = props.location;
      if (pathname.includes('/brands')) {
        const { params } = props.match;
        filterVal = vendorFilter(params);
      } else if (pathname === '/search') {
        const { search } = props.location;
        filterVal = searchFilter(search, 'q');
      }
      return { variables: { [`first`]: 48, [`query`]: filterVal } };
    },
    props: ({ data }) => {
      const { loading, error, sfy_shop, fetchMore, variables } = data;
      const { query: searchPhrase } = variables;
      let currEndCursor, hasNextPage, hasPreviousPage;
      if (!loading && sfy_shop) {
        const { products } = sfy_shop;
        if (products.edges.length > 0) currEndCursor = products.edges[products.edges.length - 1].cursor;
        hasNextPage = products.pageInfo.hasNextPage;
        hasPreviousPage = products.pageInfo.hasPreviousPage;
      }
      const loadMore = (first = 12, after = currEndCursor) => {
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
            return updatedResult;
          }
        });
      };
      //
      if (error) throw new Error(`Error in Products Query: ${error}`);
      return { loading, sfy_shop, currEndCursor, hasNextPage, hasPreviousPage, loadMore, searchPhrase };
    }
  });

export default filteredProductsQuery;

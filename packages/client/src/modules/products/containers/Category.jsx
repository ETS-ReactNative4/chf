/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import CategoryView from '../components/CategoryView';

//import CATEGORY_QUERY from '../../common/graphql/SFY/sfySingleCategory.graphql';
import CATEGORY_QUERY from '../../common/graphql/SFY/sfySingleCategoryByHandle.graphql';
import ADMIN_CAT_QUERY from '../../common/graphql/SFY/sfyAdminCollectionByHandle.graphql';
import VENDORS_QUERY from '../../common/graphql/VendorsQuery.graphql';
import LOC_CATEGORY_QUERY from '../../common/graphql/CategoryQuery.graphql';

export const filter = (item, filterVal) => {
  if (item && item.includes(filterVal)) {
    const id = item.slice(item.indexOf('=') + 1);
    return { id };
  } else return { id: null };
};
class Category extends React.Component {
  render() {
    return <CategoryView {...this.props} />;
  }
}

const CategoryWithApollo = compose(
  graphql(CATEGORY_QUERY, {
    options: props => {
      const { category: handle } = props.match.params;
      // const page = props.location.search;
      // console.log('PROPS HERE::', props);
      // console.log('PAGE', page);
      const reg = /[=](\d)/;
      const first = parseInt(reg.exec(props.location.search)[1]);
      // console.log('FIRST ', first);
      const displayLim = 12;
      const fetchNum = first * displayLim;
      // console.log('FETCHNUM:', fetchNum);
      return { variables: { handle, first: fetchNum }, fetchPolicy: 'cache-first' };
    },
    props: ({ data }) => {
      const { loading, error, sfy_shop, fetchMore, variables } = data;
      // console.log('LOADING:??', data);
      let currEndCursor, hasNextPage, hasPreviousPage;
      if (!loading && sfy_shop) {
        const { products } = sfy_shop.collectionByHandle;
        if (products.edges.length > 0) currEndCursor = products.edges[products.edges.length - 1].cursor;
        hasNextPage = products.pageInfo.hasNextPage;
        hasPreviousPage = products.pageInfo.hasPreviousPage;
      }
      // console.log('Products length',sfy_shop);
      const loadMore = async (first = 12, after = currEndCursor) => {
        const updatedVars = { ...variables, after, first };
        const data = await fetchMore({
          variables: updatedVars,
          updateQuery: (prevResult, { fetchMoreResult }) => {
            if (fetchMoreResult.sfy_shop.collectionByHandle.products.edges.length === 0) return prevResult;
            // console.log('PREVRESULT:', prevResult);
            const updatedResult = JSON.parse(JSON.stringify(prevResult));
            updatedResult.sfy_shop.collectionByHandle.products.edges = [
              ...prevResult.sfy_shop.collectionByHandle.products.edges,
              ...fetchMoreResult.sfy_shop.collectionByHandle.products.edges
            ];
            updatedResult.sfy_shop.collectionByHandle.products.pageInfo =
              fetchMoreResult.sfy_shop.collectionByHandle.products.pageInfo;

            return updatedResult;
          }
        });
        // console.log('IS THIS RUNNING EVERYTIME ?', data);
        return data;
      };
      // console.log('WHAT THE FUCKK::', sfy_shop);
      if (error) throw new Error(`Error in Products Query: ${error}`);
      if (loading || !sfy_shop) return { loading };
      if (!loading && sfy_shop) {
        return {
          loading,
          category: sfy_shop.collectionByHandle,
          currEndCursor,
          hasNextPage,
          hasPreviousPage,
          loadMore
        };
      }
    }
  }),
  graphql(VENDORS_QUERY, {
    props: ({ data: { loading, error, vendors } }) => {
      if (error) throw new Error(`Error in Vendors Query: ${error}`);
      return { loading, vendors };
    }
  }),
  graphql(LOC_CATEGORY_QUERY, {
    options: props => {
      const { category: handle } = props.match.params;
      return { variables: { handle } };
    },
    props: ({ data: { loading, error, category: locCategory } }) => {
      if (error) throw new Error(`Error in Vendors Query: ${error}`);
      return { loading, locCategory };
    }
  }),
  graphql(ADMIN_CAT_QUERY, {
    options: props => {
      const { category: handle } = props.match.params;
      return { variables: { handle } };
    },
    props: ({ data: { admin_collectionByHandle, loading, error } }) => {
      // console.log('LOADING::', loading);
      if (!loading && !error) {
        const { productsCount } = admin_collectionByHandle;
        return { productsCount, loadingCount: loading };
      }
      if (error) {
        return { countError: error, productsCount: null };
      }
      return { loadingCount: loading, productsCount: null };

      // if (loadingProductCount) {
      //   return { loadingProductCount };
      // }
      // if (!error) {
      //   return { loadingProductCount, productsCount };
      // } else {
      //   return { countError: error };
      // }
    }
  })
)(Category);

Category.propTypes = {
  location: PropTypes.object,
  search: PropTypes.string
};

export default CategoryWithApollo;

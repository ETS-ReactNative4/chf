import React from 'react';
//import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import HomeView from '../components/HomeView';
import PRODUCTS_QUERY from '../../common/graphql/SFY/sfyProductsQuery.graphql';
import VENDORS_QUERY from '../../common/graphql/VendorsQuery.graphql';
import CURRENT_USER_QUERY from '../../common/schema/currentUserQuery';
import PAGE_QUERY from '../graphql/PageQuery.graphql';

class Home extends React.Component {
  render() {
    return <HomeView {...this.props} />;
  }
}

const HomeWithApollo = compose(
  graphql(PAGE_QUERY, {
    options: () => {
      return { variables: { pageTitle: 'Home', fieldNames: [['hero', 'images'], ['hero', 'carouselActive']] } };
    },
    props: ({ data }) => {
      const { page, loading: loadingPage, error } = data;
      if (loadingPage && !error) {
        return { loadingPage, page: null };
      } else {
        return { page, loadingPage };
      }
    }
  }),
  graphql(PRODUCTS_QUERY, {
    options: () => ({ variables: { query: 'tag:Featured_Home', first: 50 } }),
    props: ({ data: { error, loading, sfy_shop } }) => {
      if (error) throw new Error(`Error in Products Query: ${error}`);
      return { loading, sfy_shop };
    }
  }),
  graphql(VENDORS_QUERY, {
    props: ({ data: { loading, error, vendors } }) => {
      if (error) throw new Error(`Error in Vendors Query: ${error}`);
      return { loading, vendors };
    }
  }),
  CURRENT_USER_QUERY()
)(Home);

export default HomeWithApollo;

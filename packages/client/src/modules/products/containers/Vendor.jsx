import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import VendorView from '../components/VendorView';
import { FILTERED_PRODUCTS_QUERY } from '../../common/schema';
import COLLECTIONS_QUERY from '../../common/graphql/SFY/sfyCollectionsQuery.graphql';
import VENDOR_QUERY from '../../common/graphql/VendorQuery.graphql';

class Vendor extends React.Component {
  render() {
    return <VendorView {...this.props} />;
  }
}

const VendorWithApollo = compose(
  FILTERED_PRODUCTS_QUERY(),
  graphql(COLLECTIONS_QUERY, {
    options: () => {
      return { variables: { [`first`]: 250 } };
    },
    props: ({ data }) => {
      const { loading, error, sfy_shop: sfy_shop_collections } = data;
      if (error) throw new Error(`Error in Categories (Vendor Page) Query: ${error}`);
      return { loading, sfy_shop_collections };
    }
  }),
  graphql(VENDOR_QUERY, {
    options: props => {
      console.log('PROPS MATCH::', props.match.params);
      return { variables: { input: { handle: props.match.params.vendor_name } } };
    },
    props: ({ data }) => {
      const { loading, error, vendor } = data;
      // console.log('DATA:::', data);
      if (error) throw new Error(`Error in Categories (Vendor Page) Query: ${error}`);
      return { loading, vendor };
    }
  })
)(Vendor);

Vendor.propTypes = {
  location: PropTypes.object,
  search: PropTypes.string
};

export default VendorWithApollo;

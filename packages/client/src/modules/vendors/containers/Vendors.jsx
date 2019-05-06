import React from 'react';
import { graphql, compose } from 'react-apollo';
import VendorsView from '../components/VendorsView';
import VENDORS_QUERY from '../../common/graphql/VendorsQuery.graphql';

class Vendors extends React.Component {
  render() {
    return <VendorsView {...this.props} />;
  }
}

const VendorsWithApollo = compose(
  graphql(VENDORS_QUERY, {
    props: ({ data: { loading, error, vendors } }) => {
      if (error) throw new Error(`Error in Vendors Query: ${error}`);
      return { loading, vendors };
    }
  })
)(Vendors);

export default VendorsWithApollo;

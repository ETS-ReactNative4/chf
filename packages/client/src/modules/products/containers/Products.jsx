import React from 'react';
import { graphql, compose } from 'react-apollo';
import ProductsView from '../components/ProductsView';
import COLLECTIONS_QUERY from '../../common/graphql/SFY/sfyCollectionsQuery.graphql';

class Products extends React.Component {
  render() {
    return <ProductsView {...this.props} />;
  }
}

const ProductsWithApollo = compose(
  graphql(COLLECTIONS_QUERY, {
    options: () => {
      return { variables: { [`first`]: 50 } };
    },
    props: ({ data }) => {
      const { loading, error, sfy_shop } = data;
      if (error) throw new Error(`Error in Categories (Products Page) Query: ${error}`);
      return { loading, sfy_shop };
    }
  })
)(Products);

export default ProductsWithApollo;

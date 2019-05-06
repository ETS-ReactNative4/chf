import React from 'react';
import Helmet from 'react-helmet';
import { PropTypes } from 'prop-types';
import { PageLayout } from '../../common/components/web';

const renderMetaData = () => (
  <Helmet
    title="Product"
    meta={[
      {
        name: 'description',
        content: 'Product page'
      }
    ]}
  />
);

const ProductView = props => {
  if (props.loading) return <div> Loading...</div>;

  return (
    <PageLayout>
      {renderMetaData()}
      <h2>{"Product SKU's:"}</h2>
      <div className="text-center mt-4 mb-4">
        {props.products.edges.map(({ node }) => <div key={node.id}>{node.sku}</div>)}
      </div>
    </PageLayout>
  );
};

ProductView.propTypes = {
  loading: PropTypes.bool,
  products: PropTypes.object
};

export default ProductView;

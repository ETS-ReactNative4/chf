/*eslint-disable no-unused-vars*/
import React from 'react';
import { compose } from 'react-apollo';
import gql from 'graphql-tag';
import { PRODUCTS_QUERY, PRODUCT_QUERY } from '../../common/schema';
import {
  PRODUCT_FULL_FRAG,
  PRODUCT_ATTRIBUTES_FRAG,
  PRODUCT_LAYOUT_FRAG,
  PRODUCT_SEO_FRAG,
  PRODUCT_RELATED_PRODUCTS_FRAG
} from '../../common/graphql';

import ProductView from '../components/ProductView';

class Product extends React.Component {
  render() {
    return <ProductView {...this.props} />;
  }
}

const query = gql`
  query products($limit: Int!, $after: Int) {
    products(limit: $limit, after: $after) {
      total_count
      edges {
        cursor
        node {
          ...ProductFull
        }
      }
      product_info {
        end_cursor
        has_next_page
      }
    }
  }
  ${PRODUCT_FULL_FRAG}
  ${PRODUCT_ATTRIBUTES_FRAG}
  ${PRODUCT_LAYOUT_FRAG}
  ${PRODUCT_SEO_FRAG}
  ${PRODUCT_RELATED_PRODUCTS_FRAG}
`;

const product_query = gql`
  query product($id: Int!) {
    product(id: $id) {
      ...ProductFull
    }
  }
  ${PRODUCT_FULL_FRAG}
  ${PRODUCT_ATTRIBUTES_FRAG}
  ${PRODUCT_LAYOUT_FRAG}
  ${PRODUCT_SEO_FRAG}
  ${PRODUCT_RELATED_PRODUCTS_FRAG}
`;

const ProductWithApollo = compose(
  PRODUCTS_QUERY(20, 0, query),
  PRODUCT_QUERY(2, product_query)
)(Product);

export default ProductWithApollo;

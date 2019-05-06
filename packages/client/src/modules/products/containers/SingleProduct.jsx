/* eslint-disable no-undef */
import React from 'react';
import { graphql, compose, withApollo } from 'react-apollo';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SingleProductView from '../components/SingleProductView';
//import { filter } from './Category';
//import SINGLE_PRODUCT_QUERY from '../../common/graphql/SFY/sfySingleProduct.graphql';
import SINGLE_PRODUCT_QUERY from '../../common/graphql/SFY/sfySingleProductByHandle.graphql';
import CREATE_CART from '../../common/graphql/SFY/sfyCheckoutCreate.graphql';
import ADD_CART_ITEM from '../../common/graphql/SFY/sfyCheckoutLineItemsAdd.graphql';
import VENDORS_QUERY from '../../common/graphql/VendorsQuery.graphql';
import RELATED_PRODUCTS_QUERY from '../../common/graphql/RelatedProductsQuery.graphql';
import PRODUCT_DATA_QUERY from '../../common/graphql/ProductDataQuery.graphql';

//TODO: Add to common file
const toggleCart = () => ({ type: 'TOGGLE_CART' });
const updateQty = cartQty => {
  return { type: 'UPDATE_CART_QTY', cartQty };
};
const cartQty = lineItemEdges => {
  if (lineItemEdges.length === 0) return 0;
  return lineItemEdges.reduce((acc, { node: { quantity: qty } }) => {
    return acc + qty;
  }, 0);
};

class ProductView extends React.Component {
  render() {
    return <SingleProductView {...this.props} />;
  }
}

const ProductViewWithApollo = compose(
  withApollo,
  graphql(SINGLE_PRODUCT_QUERY, {
    options: props => {
      // console.log('PROPS::', props);
      const regex = /(?:=)([a-zA-Z0-9].*)/gm;
      const handle = props.location.state ? props.location.state : regex.exec(props.location.search)[1];
      // console.log('HANDLE:', handle);

      return { variables: { handle } };
    },
    props: ({ data }) => {
      // console.log('DATA::::', data);
      const { loading, sfy_shop, error } = data;
      if (error) throw new Error(`Error in Products Query: ${error}`);
      else if (loading || !sfy_shop) return { loading };
      else if (!loading && sfy_shop) return { loading, product: sfy_shop.productByHandle };
    }
  }),
  graphql(CREATE_CART, {
    props: ({ ownProps: { updateCartQty }, mutate }) => ({
      createInitialCheckout: async addedItem => {
        try {
          const {
            data: {
              sfy_checkoutCreate: { checkout, checkoutUserErrors: userErrors }
            }
          } = await mutate({
            variables: { input: addedItem }
          });
          if (Array.isArray(userErrors) && userErrors.length > 0) {
            return { errors: userErrors.map(err => err.message) };
          } else {
            if ('id' in checkout && checkout.id && typeof window !== 'undefined') {
              updateCartQty(cartQty(checkout.lineItems.edges));
              localStorage.setItem('sfy-checkout-id', checkout.id);
              return checkout;
            }
          }
        } catch (e) {
          console.log(e.graphQLErrors);
        }
      }
    })
  }),
  graphql(ADD_CART_ITEM, {
    props: ({ ownProps: { updateCartQty }, mutate }) => ({
      addCartItem: async addedItem => {
        try {
          const {
            data: {
              sfy_checkoutLineItemsAdd: { checkout, checkoutUserErrors: userErrors }
            }
          } = await mutate({
            variables: addedItem
          });
          if (Array.isArray(userErrors) && userErrors.length > 0) {
            return { errors: userErrors.map(err => err.message) };
          } else {
            if ('id' in checkout && checkout.id && typeof window !== 'undefined') {
              updateCartQty(cartQty(checkout.lineItems.edges));
              localStorage.setItem('sfy-checkout-id', checkout.id);
              return checkout;
            }
          }
        } catch (e) {
          console.log(e.graphQLErrors);
        }
      }
    })
  }),
  graphql(VENDORS_QUERY, {
    props: ({ data: { loading, error, vendors } }) => {
      if (error) throw new Error(`Error in Vendors Query: ${error}`);
      return { loading, vendors };
    }
  }),
  graphql(PRODUCT_DATA_QUERY, {
    options: props => {
      const regex = /(?:=)([a-zA-Z0-9].*)/gm;
      const handle = props.location.state ? props.location.state : regex.exec(props.location.search)[1];

      return { variables: { handle } };
    },
    props: ({ data }) => {
      const { loading, error, productData } = data;
      // console.log('product data::::', productData);
      if (error) throw new Error(`Error in Product Data Query: ${error}`);
      return { loading, productData };
    }
  }),
  graphql(RELATED_PRODUCTS_QUERY, {
    options: props => {
      const regex = /(?:=)([a-zA-Z0-9].*)/gm;
      // console.log('RELATED PRODUCTS QUERY PROPS::', props);
      const product_handle = props.location.state ? props.location.state : regex.exec(props.location.search)[1];

      return { variables: { product_handle } };
    },
    props: ({ data }) => {
      // console.log('REL PROD DATA', data);
      const { loading, error, relatedProducts } = data;
      if (error) throw new Error(`Error in Related Prodcuts Query: ${error}`);
      return { loading, relatedProducts };
    }
  })
)(ProductView);

const ProductViewWithRedux = connect(
  null,
  dispatch => ({
    toggleCart: () => dispatch(toggleCart()),
    updateCartQty: cartQty => dispatch(updateQty(cartQty))
  })
)(ProductViewWithApollo);

ProductView.propTypes = {
  location: PropTypes.object
};

export default ProductViewWithRedux;

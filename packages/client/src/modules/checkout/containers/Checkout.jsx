/* eslint-disable no-undef */
import React from 'react';
import { graphql, compose } from 'react-apollo';
import CheckoutView from '../components/CheckoutView';
import ADD_CHECKOUT_ADDRESS from '../../common/graphql/SFY/sfyCheckoutShippingAddressUpdate.graphql';
import ADD_CUSTOMER_ADDRESS from '../../common/graphql/SFY/sfyCustomerAddressCreate.graphql';
import ADD_CART_ITEM from '../../common/graphql/SFY/sfyCheckoutLineItemsAdd.graphql';

class Checkout extends React.Component {
  render() {
    return <CheckoutView {...this.props} />;
  }
}

const CheckoutWithApollo = compose(
  graphql(ADD_CHECKOUT_ADDRESS, {
    props: ({ mutate }) => ({
      addCheckoutAddress: async checkoutInfo => {
        try {
          const {
            data: {
              sfy_checkoutShippingAddressUpdate: { checkout, userErrors }
            }
          } = await mutate({
            variables: checkoutInfo
          });
          if (Array.isArray(userErrors) && userErrors.length > 0) {
            return { errors: userErrors.map(err => err.message) };
          } else return { checkout };
        } catch (e) {
          console.log(e.graphQLErrors);
        }
      }
    })
  }),
  graphql(ADD_CUSTOMER_ADDRESS, {
    props: ({ mutate }) => ({
      addCustomerAddress: async addressInfo => {
        try {
          const {
            data: {
              sfy_customerAddressCreate: { customerAddress, userErrors }
            }
          } = await mutate({
            variables: addressInfo
          });
          if (Array.isArray(userErrors) && userErrors.length > 0) {
            return { errors: userErrors.map(err => err.message) };
          } else {
            return { customerAddress };
          }
        } catch (e) {
          console.log(e.graphQLErrors);
        }
      }
    })
  }),
  graphql(ADD_CART_ITEM, {
    props: ({ mutate }) => ({
      addShipping: async addedItem => {
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
          } else return checkout;
        } catch (e) {
          console.log(e.graphQLErrors);
        }
      }
    })
  })
)(Checkout);

export default CheckoutWithApollo;

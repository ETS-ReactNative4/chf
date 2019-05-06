/*eslint-disable no-unused-vars*/
import React from 'react';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import CartView from '../components/CartView';
import { optimisticUpdate, optimisticUpdateObj, currQtyByVarId } from '../utils/cartHelpers';
import CUSTOMER_QUERY from '../../common/schema/customerQuery';
import CURRENT_CART_QUERY from '../../common/graphql/SFY/sfyCheckoutQuery.graphql';
import ADD_CART_ITEM from '../../common/graphql/SFY/sfyCheckoutLineItemsAdd.graphql';
import DEL_CART_ITEM from '../../common/graphql/SFY/sfyCheckoutLineItemsRemove.graphql';
import UPDATE_CART_ITEM from '../../common/graphql/SFY/sfyCheckoutLineItemsUpdate.graphql';
import { getLocalSfyToken } from '../../common/utils/commonHelpers';

const _ = null;
const toggleCart = () => ({ type: 'TOGGLE_CART' });
const toggleDeleteModal = productToDelete => {
  return { type: 'TOGGLE_DELETE_MODAL', productToDelete };
};
const updateQty = cartQty => {
  return { type: 'UPDATE_CART_QTY', cartQty };
};
const cartQty = lineItemEdges => {
  if (lineItemEdges.length === 0) return 0;
  return lineItemEdges.reduce((acc, { node: { quantity: qty } }) => {
    return acc + qty;
  }, 0);
};

const cartSkip = tokenType => {
  let authToken = '';
  if (typeof window !== 'undefined') {
    authToken = getLocalSfyToken(tokenType);
  }
  return !__CLIENT__ || !authToken;
};

class Cart extends React.Component {
  constructor(props) {
    super(props);
    const { showCart, toggleCart } = this.props;
    if (showCart) {
      toggleCart();
    }
  }
  render() {
    return <CartView {...this.props} />;
  }
}
/*eslint-disable no-undef*/
const CartWithApollo = compose(
  CUSTOMER_QUERY('cache-first', cartSkip('sfy-access-token')),
  graphql(CURRENT_CART_QUERY, {
    skip: () => cartSkip('sfy-checkout-id'),
    options: () => ({ variables: { ['id']: getLocalSfyToken('sfy-checkout-id') } }),
    props: ({ ownProps: { updateCartQty }, data }) => {
      const { loading } = data;
      if (loading) return loading;
      else if (!loading && 'error' in data && data.error) return { loading, error: data.error };
      else if (!loading && 'sfy_node' in data) {
        updateCartQty(cartQty(data.sfy_node.lineItems.edges));
        return { loading, cart: data.sfy_node };
      }
    }
  }),
  graphql(ADD_CART_ITEM, {
    props: ({ ownProps: { cart, updateCartQty }, mutate }) => ({
      addCartItem: async addedItem => {
        try {
          const { variantId } = addedItem.lineItems[0];
          const oldQty = currQtyByVarId(cart, variantId);
          const optimisticData = optimisticUpdate(cart, variantId, _, oldQty + 1);
          const {
            data: {
              sfy_checkoutLineItemsAdd: { checkout, checkoutUserErrors: userErrors }
            }
          } = await mutate({
            variables: addedItem,
            optimisticResponse: {
              __typename: 'Mutation',
              sfy_checkoutLineItemsAdd: {
                ...optimisticUpdateObj(optimisticData)
              }
            }
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
  graphql(UPDATE_CART_ITEM, {
    props: ({ ownProps: { cart, updateCartQty }, mutate }) => ({
      updateCartItem: async updatedItem => {
        try {
          const { variantId, quantity } = updatedItem.lineItems[0];
          const optimisticData = optimisticUpdate(cart, variantId, _, quantity);
          const {
            data: {
              sfy_checkoutLineItemsUpdate: { checkout, checkoutUserErrors: userErrors }
            }
          } = await mutate({
            variables: updatedItem,
            optimisticResponse: {
              __typename: 'Mutation',
              sfy_checkoutLineItemsUpdate: {
                ...optimisticUpdateObj(optimisticData)
              }
            }
          });
          if (Array.isArray(userErrors) && userErrors.length > 0) {
            return { errors: userErrors.map(err => err.message) };
          }
          updateCartQty(cartQty(checkout.lineItems.edges));
          return checkout;
        } catch (e) {
          console.log(e.graphQLErrors);
        }
      }
    })
  }),
  graphql(DEL_CART_ITEM, {
    props: ({ ownProps: { cart, updateCartQty }, mutate }) => ({
      removeCartItem: async removedItem => {
        try {
          const lineItemId = removedItem.lineItemIds[0];
          const optimisticData = optimisticUpdate(cart, _, lineItemId, 0);
          const {
            data: {
              sfy_checkoutLineItemsRemove: { checkout, checkoutUserErrors: userErrors }
            }
          } = await mutate({
            variables: removedItem,
            optimisticResponse: {
              __typename: 'Mutation',
              sfy_checkoutLineItemsRemove: {
                ...optimisticUpdateObj(optimisticData)
              }
            }
          });
          if (Array.isArray(userErrors) && userErrors.length > 0) {
            return { errors: userErrors.map(err => err.message) };
          }
          updateCartQty(cartQty(checkout.lineItems.edges));
          return checkout;
        } catch (e) {
          console.log(e.graphQLErrors);
        }
      }
    })
  })
)(Cart);

const CartWithRedux = connect(
  state => {
    return {
      showCart: state.cart.showCart,
      showDeleteModal: state.cart.showDeleteModal,
      productToDelete: state.cart.productToDelete
    };
  },
  dispatch => ({
    toggleCart: () => dispatch(toggleCart()),
    toggleDeleteModal: id => dispatch(toggleDeleteModal(id)),
    updateCartQty: cartQty => dispatch(updateQty(cartQty))
  })
)(CartWithApollo);

export default CartWithRedux;

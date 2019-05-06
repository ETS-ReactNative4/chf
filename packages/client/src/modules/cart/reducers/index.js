const defaultState = {
  showCart: false,
  showDeleteModal: false,
  showProductModal: false,
  product_hasOptions: false,
  cartQty: 0
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case 'TOGGLE_CART': {
      return Object.assign({}, state, {
        showCart: !state.showCart
      });
    }
    case 'TOGGLE_DELETE_MODAL': {
      let productToDelete;

      if (state.showDeleteModal) {
        productToDelete = null;
      } else {
        productToDelete = action.productToDelete;
      }

      return Object.assign({}, state, {
        showDeleteModal: !state.showDeleteModal,
        productToDelete: productToDelete
      });
    }
    case 'UPDATE_CART_QTY': {
      return Object.assign({}, state, {
        cartQty: action.cartQty
      });
    }
    default:
      return state;
  }
}

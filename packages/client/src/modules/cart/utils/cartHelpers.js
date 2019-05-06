export const currQtyByVarId = (cart, variantId) => {
  const edge = cart.lineItems.edges.filter(({ node }) => node.variant.id === variantId);
  return edge[0].node.quantity;
};

export const optimisticUpdate = (cart, variantId, id, newQty) => {
  const cartToMod = JSON.parse(JSON.stringify(cart));
  let idxToUpdate;
  if (id) idxToUpdate = cartToMod.lineItems.edges.findIndex(({ node }) => node.id === id);
  else if (variantId) idxToUpdate = cartToMod.lineItems.edges.findIndex(({ node }) => node.variant.id === variantId);

  const { totalPrice } = cartToMod;
  const { node } = cartToMod.lineItems.edges[idxToUpdate];
  const {
    quantity: oldQty,
    variant: { price }
  } = node;
  const updatedTotPrice = (parseFloat(totalPrice) + (parseFloat(newQty) - parseFloat(oldQty)) * price).toFixed(2);
  cartToMod.totalPrice = updatedTotPrice;

  if (newQty > 0) {
    cartToMod.lineItems.edges[idxToUpdate].node.quantity = newQty;
  } else {
    const filteredEdges = cartToMod.lineItems.edges.filter((el, i) => i !== idxToUpdate);
    cartToMod.lineItems.edges = filteredEdges;
  }
  return cartToMod;
};

export const optimisticUpdateObj = optimisticCartData => {
  return {
    __typename: 'sfy_Checkout',
    checkout: {
      ...optimisticCartData
    },
    /*eslint-disable no-dupe-keys*/
    userErrors: {
      __typename: ['[UserError!]!'],
      field: '',
      message: ''
    }
  };
};

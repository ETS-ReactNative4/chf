/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withRouter } from 'react-router';
import { MdClose, MdExpandLess, MdExpandMore } from 'react-icons/md';
// import { connect } from 'react-redux';
import '../styles/modules/cart.scss';

class UserCart extends React.Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', this.handleKeypress, false);
    }
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeypress, false);
  }
  handleKeypress = e => {
    const { toggleCart, showCart } = this.props;
    if (e.keyCode === 27 && showCart) {
      toggleCart();
    }
  };
  removeItem = async lineItemId => {
    const checkoutId = localStorage.getItem('sfy-checkout-id');
    const removedItem = { lineItemIds: [lineItemId], checkoutId };
    this.props.removeCartItem(removedItem);
  };
  updateQuantity = async (id, variantId, method, currQty) => {
    const checkoutId = localStorage.getItem('sfy-checkout-id');
    if (method === '+') {
      const addedItem = { lineItems: [{ variantId, quantity: 1 }], checkoutId };
      this.props.addCartItem(addedItem);
    }
    if (method === '-') {
      const modItem = { lineItems: [{ id, variantId, quantity: currQty - 1 }], checkoutId };
      this.props.updateCartItem(modItem);
    }
    return;
  };
  isCheckoutDisabled = () => {
    const { cart } = this.props;
    if (!cart || !('webUrl' in cart) || !cart.webUrl) return true;
    if (cart && cart.lineItems.edges.length === 0) return true;
    return false;
  };
  handleToCheckout = e => {
    e.preventDefault();
    const {
      history,
      customer,
      toggleCart,
      cart: { webUrl }
    } = this.props;
    toggleCart();
    const location = { pathname: '/checkout', state: { webUrl } };
    if (customer && 'defaultAddress' in customer && customer.defaultAddress) {
      location.state.defaultAddress = JSON.stringify(customer.defaultAddress);
    }
    history.push(location);
  };
  render() {
    const { toggleCart, showCart, cart } = this.props;
    return (
      <div
        className={classnames('cart-container', { 'cart-container--open': showCart })}
        onClick={e => {
          if (e.target.classList.contains('cart-container')) {
            toggleCart();
          }
        }}
      >
        <div className="cart">
          <button className="cart__dismiss" onClick={() => toggleCart()}>
            <span>Close</span>
            <MdClose size={'2em'} />
          </button>
          <div className="cart__item-list">
            {typeof cart !== 'undefined' && cart.lineItems.edges.length > 0 ? (
              cart.lineItems.edges.map(({ node: { id, quantity, title, variant: { id: varId } } }) => (
                <div key={`${id}-${quantity}`} data-item-id={id} data-variant-id={varId} className="cart__item">
                  <div className="cart__item-title">
                    <span className="cart__item-name">{title}</span>
                    <span className="cart__quantity-container">
                      Quantity <MdClose />
                      <span className="cart__item-quantity">{quantity}</span>
                    </span>
                  </div>
                  <div className="cart__item-buttons">
                    <div className="cart__item-updates">
                      <button
                        title={`Add another ${title} to cart`}
                        onClick={() => this.updateQuantity(id, varId, '+')}
                        className="cart__item-update cart__item-update--add"
                      >
                        <span hidden>Add one</span>
                        <MdExpandLess />
                      </button>
                      <button
                        title={`Remove one ${title} from cart`}
                        onClick={() => this.updateQuantity(id, varId, '-', quantity)}
                        className="cart__item-update cart__item-update--subtract"
                      >
                        <span hidden>Remove one</span>
                        <MdExpandMore />
                      </button>
                    </div>
                    <button
                      title="Remove item from cart"
                      onClick={() => this.removeItem(id)}
                      className="cart__item-remove"
                    >
                      <span hidden>Remove item</span>
                      <MdClose />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <span className="cart__item-none">There are currently no items in your cart. Try adding one!</span>
            )}
          </div>
          <div className="cart__summary">
            <div className="cart__price-container">
              <span className="cart__total">
                <h1>Total:</h1>
              </span>
              <span className="cart__price">
                <h2>
                  {typeof cart !== 'undefined' && cart.lineItems.edges.length > 0 ? `$${cart.totalPrice}` : `$0.00`}
                </h2>
              </span>
            </div>
            <button
              disabled={this.isCheckoutDisabled()}
              onClick={e => this.handleToCheckout(e)}
              className="button button--primary cart__checkout"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

UserCart.propTypes = {
  showCart: PropTypes.bool,
  toggleCart: PropTypes.func,
  cartItems: PropTypes.array,
  cart: PropTypes.object,
  addCartItem: PropTypes.func,
  removeCartItem: PropTypes.func,
  updateCartItem: PropTypes.func,
  customer: PropTypes.object,
  history: PropTypes.object
};

export default withRouter(UserCart);

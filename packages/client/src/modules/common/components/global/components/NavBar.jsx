/*eslint-disable no-undef*/
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { compose } from 'react-apollo';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { MdPersonOutline } from 'react-icons/md';
import '../styles/modules/navbar.scss';
import { DELETE_TOKEN, CUSTOMER_QUERY, LOGOUT_ADMIN, CURRENT_USER_QUERY } from '../../../schema';

//TODO: Add to common file
const toggleCart = () => {
  return { type: 'TOGGLE_CART' };
};

const NavAccountBtns = ({ isLoggedIn, customer }) => {
  if (typeof customer === 'undefined') return null;
  return isLoggedIn ? (
    // <button className="navbar__trigger-item navbar__trigger-item--profile" onClick={() => signOut()}>
    //   <MdPersonOutline size="1.5em" className="navbar__trigger-item-icon" />
    //   Sign Out
    // </button>
    <Link className="navbar__trigger-item navbar__trigger-item--profile" to="/profile">
      <MdPersonOutline size="1.5em" className="navbar__trigger-item-icon" />
      Profile
    </Link>
  ) : (
    <Link className="navbar__trigger-item navbar__trigger-item--profile" to="/signin">
      <MdPersonOutline size="1.5em" className="navbar__trigger-item-icon" />
      Sign In
    </Link>
  );
};

NavAccountBtns.propTypes = {
  isLoggedIn: PropTypes.bool,
  customer: PropTypes.object
  // signOut: PropTypes.func
};

class NavBar extends React.Component {
  state = {
    hamburgerIsOpen: false,
    height: null,
    width: null
  };
  componentDidMount() {
    this.measureNavBar();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.measureNavBar, false);
    }
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.measureNavBar, false);
  }
  saveRef = ref => (this.containerNode = ref);
  measureNavBar = () => {
    const { clientWidth, clientHeight } = this.containerNode;
    this.setState({
      width: clientWidth,
      height: clientHeight
    });
  };
  // signOut = async () => {
  //   if (typeof window !== 'undefined') {
  //     await this.props.deleteRemoteToken();
  //     await this.props.refetch({ customerAccessToken: '' });
  //     await this.props.logoutAdmin();
  //
  //     const { location, history } = this.props;
  //     if (location.pathname.includes('/profile')) {
  //       history.push('/signin');
  //     }
  //   }
  // };
  toggleHamburger = () => this.setState({ hamburgerIsOpen: !this.state.hamburgerIsOpen });
  render() {
    const { appName, navbarLinks, logoImage, toggleCart, cartQty, customer, customerError } = this.props;
    const { hamburgerIsOpen, width } = this.state;

    let isLoggedIn = false;
    if (!customerError && customer && customer.hasOwnProperty('email') && customer.email) {
      isLoggedIn = true;
    }

    return (
      <nav ref={this.saveRef} className={classnames('main-layout__navbar navbar')}>
        {/* Logo */}
        <div className="navbar__logo">
          <Link to="/" className="navbar__logo-link">
            <img src={width >= 1109 ? logoImage.linkLarge : logoImage.linkSmall} alt={appName} />
          </Link>
        </div>
        {/* Content */}
        <div className="navbar__content">
          {/* Collapse items */}
          <div className={classnames('navbar__collapse', { open: hamburgerIsOpen })}>
            {'navbarLinks' in this.props && navbarLinks.length > 0
              ? navbarLinks.map((link, i) => {
                  if (link.title === 'Profile' && !isLoggedIn) {
                    return null;
                  }
                  return (
                    <Link key={i} className="navbar__collapse-item" to={link.location}>
                      {link.title}
                    </Link>
                  );
                })
              : null}
          </div>
          {/* Trigger items */}
          <div className="navbar__triggers">
            {/* TODO: Make login dropdown */}
            <Link to="/search" className="navbar__trigger-item navbar__trigger-item--search">
              <span className="navbar__search-text" hidden={width <= 500 ? true : false}>
                Search
              </span>
              <FaSearch className="navbar__search-icon" />
            </Link>
            <NavAccountBtns customer={customer} isLoggedIn={isLoggedIn} /*signOut={this.signOut}*/ />
            <button
              data-cart-count={cartQty}
              onClick={() => toggleCart()}
              className="navbar__trigger-item navbar__trigger-item--cart"
            >
              Cart
            </button>
            <div
              className={classnames('navbar__hamburger', { open: hamburgerIsOpen })}
              onClick={() => this.toggleHamburger()}
            >
              <span className="navbar__hamburger-item" />
              <span className="navbar__hamburger-item" />
              <span className="navbar__hamburger-item" />
              <span className="navbar__hamburger-item" />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const NavBarWithApollo = compose(
  CURRENT_USER_QUERY(),
  CUSTOMER_QUERY('network-only'),
  DELETE_TOKEN(),
  LOGOUT_ADMIN()
)(NavBar);

NavBar.propTypes = {
  appName: PropTypes.string,
  navbarLinks: PropTypes.array,
  logoImage: PropTypes.object,
  toggleCart: PropTypes.func,
  cartQty: PropTypes.number,
  customer: PropTypes.object,
  customerError: PropTypes.object
  // deleteRemoteToken: PropTypes.func,
  // refetch: PropTypes.func,
  // logoutAdmin: PropTypes.func
};
NavBar.defaultProps = {
  logoImage: {
    name: 'California Home Fitness',
    linkLarge: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo_chf.png',
    linkSmall: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo_chf-icon.svg'
  },
  navbarLinks: [
    { title: 'Home', location: '/' },
    { title: 'Products', location: '/products' },
    { title: 'Brands', location: '/brands' },
    { title: 'Locations', location: '/locations' },
    { title: 'Resources', location: '/resources' },
    { title: 'About', location: '/about' },
    { title: 'Workouts', location: '/workouts' },
    { title: 'Profile', location: '/profile' }
  ]
};

const NavBarWithRedux = connect(
  state => {
    return { cartQty: state.cart.cartQty };
  },
  dispatch => ({ toggleCart: () => dispatch(toggleCart()) })
)(NavBarWithApollo);

export default withRouter(NavBarWithRedux);

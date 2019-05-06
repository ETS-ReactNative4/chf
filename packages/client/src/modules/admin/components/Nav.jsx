/*eslint-disable no-undef*/
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { compose } from 'react-apollo';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { MdPersonOutline } from 'react-icons/md';
import '../styles/navbar.scss';
// import { DELETE_TOKEN, CUSTOMER_QUERY, LOGOUT_ADMIN, CURRENT_USER_QUERY } from '../../../schema';


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
      <nav ref={this.saveRef} className={classnames('admin__navbar')}>
        {/* Logo */}
        <div className="admin__navbar__header">
          <Link to="/" className="admin__navbar__logo-link">
            <img src={width >= 1109 ? logoImage.linkLarge : logoImage.linkSmall} alt={'California Home Fitness'} />
          </Link>
        </div>
        {/* Content */}
        {/* <div className=""> */}
          {/* Collapse items */}
          {/* <div className={classnames('', { open: hamburgerIsOpen })}>
            {'navbarLinks' in this.props && navbarLinks.length > 0
              ? navbarLinks.map((link, i) => {
                  if (link.title === 'Profile' && !isLoggedIn) {
                    return null;
                  }
                  return (
                    <Link key={i} className="" to={link.location}>
                      {link.title}
                    </Link>
                  );
                })
              : null}
          </div> */}
          {/* Trigger items */}
          {/* <div className=""> */}
            {/* TODO: Make login dropdown */}
            {/* <div
              className={classnames('', { open: hamburgerIsOpen })}
              onClick={() => this.toggleHamburger()}
            >
              <span className="" />
              <span className="" />
              <span className="" />
              <span className="" />
            </div> */}
          {/* </div> */}
        {/* </div> */}
      </nav>
    );
  }
}
//
// const NavBarWithApollo = compose(
//   CURRENT_USER_QUERY(),
//   CUSTOMER_QUERY('network-only'),
//   DELETE_TOKEN(),
//   LOGOUT_ADMIN()
// )(NavBar);

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
    { title: 'Dashboard', location: '/admin/dashboard' },

  ]
};

// const NavBarWithRedux = connect(
//   state => {
//     return { cartQty: state.cart.cartQty };
//   },
//   dispatch => ({ toggleCart: () => dispatch(toggleCart()) })
// )(NavBar);

export default withRouter(NavBar);

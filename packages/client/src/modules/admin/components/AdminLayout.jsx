import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './Nav';
// import '../../../graphql/SFY/sfyCheckoutQuery.graphql';
// import Cart from '../../../../cart/containers/Cart';
//import CartHOC from '../../../../cart/containers/CartHOC';
// import settings from '../../../../../../../../settings';
import '../styles/main-layout.scss';

class AdminLayout extends React.Component {
  state = {
    cookieBannerIsOpen: false
  };
  componentDidMount() {
    // if (typeof window !== 'undefined') {
    //   const cookiesAccepted = localStorage.getItem('cookieAcceptance'); // eslint-disable-line no-undef
    //   switch (cookiesAccepted) {
    //     case null:
    //       localStorage.setItem('cookieAcceptance', 'false'); // eslint-disable-line no-undef
    //       this.setState({ cookieBannerIsOpen: true });
    //       break;
    //     case 'true':
    //       this.setState({ cookieBannerIsOpen: false });
    //       break;
    //     case 'false':
    //       this.setState({ cookieBannerIsOpen: true });
    //       break;
    //   }
    // }
  }
  dismissCookieBanner = () => {
    this.setState({ cookieBannerIsOpen: false });
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookieAcceptance', 'true'); // eslint-disable-line no-undef
      this.setState({ showCookieBanner: false });
    }
  };
  render() {
    const { children, navBar } = this.props;
    // console.log('NAV BAR::', navBar);
    const { cookieBannerIsOpen } = this.state;
    return (
      <div className="admin-layout">
        {/* <NavBar /> */}
        <div id="content" className="admin-layout__content">
          {children}
        </div>
      </div>
    );
  }
}

AdminLayout.propTypes = {
  children: PropTypes.node,
  navBar: PropTypes.bool
};

export default AdminLayout;

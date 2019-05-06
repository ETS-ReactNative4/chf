import React from 'react';
import PropTypes from 'prop-types';
import { NavBar, Footer, InfoBanner } from '../';
import '../../../graphql/SFY/sfyCheckoutQuery.graphql';
import Cart from '../../../../cart/containers/Cart';
//import CartHOC from '../../../../cart/containers/CartHOC';
import settings from '../../../../../../../../settings';
import '../styles/layout/main-layout.scss';

class PageLayout extends React.Component {
  state = {
    cookieBannerIsOpen: false
  };
  componentDidMount() {
    if (typeof window !== 'undefined') {
      const cookiesAccepted = localStorage.getItem('cookieAcceptance'); // eslint-disable-line no-undef
      switch (cookiesAccepted) {
        case null:
          localStorage.setItem('cookieAcceptance', 'false'); // eslint-disable-line no-undef
          this.setState({ cookieBannerIsOpen: true });
          break;
        case 'true':
          this.setState({ cookieBannerIsOpen: false });
          break;
        case 'false':
          this.setState({ cookieBannerIsOpen: true });
          break;
      }
    }
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
      <div className="main-layout">
        {navBar !== false && <NavBar appName={settings.app.name} toggleCart={this.toggleCart} />}
        <Cart />
        <div id="content" className="main-layout__content">
          {children}
        </div>
        <InfoBanner bannerType={'info'} bannerIsOpen={cookieBannerIsOpen} dismissBanner={this.dismissCookieBanner}>
          <span>By using this site, you are agreeing to our use of cookies.</span>
        </InfoBanner>
        <Footer appName={settings.app.name} />
      </div>
    );
  }
}

PageLayout.propTypes = {
  children: PropTypes.node,
  navBar: PropTypes.bool
};

export default PageLayout;

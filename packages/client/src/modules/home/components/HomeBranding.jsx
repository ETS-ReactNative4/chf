import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ResponsivePicture } from '../../common/components/global';

import '../styles/home-branding.scss';

class HomeBranding extends React.Component {
  renderImage = image => {
    const options = {
      image: image.link,
      altText: image.name,
      className: 'hero__image',
      image_size: '1440X690',
      sources: [
        {
          image: image.link,
          image_size: '500X900',
          size: '(min-width: 990px)'
        },
        {
          image: image.link,
          image_size: '300X500',
          size: '(max-width: 450px)'
        }
      ]
    };
    return <ResponsivePicture options={options} />;
  };
  render() {
    const { phoneImage, lowPriceImage } = this.props;
    return (
      <section className="home-branding">
        <div className="home-branding__phone">
          <Link to="/resources">{this.renderImage(phoneImage)}</Link>
        </div>
        <div className="home-branding__content">
          <div className="home-branding__low-price">
            <h3 className="home-branding__title home-branding__title--low-price">Low Price Guarantee</h3>
            <p className="home-branding__text home-branding__text--low-price">
              {`We'll beat any competitors price! At the time of purchase, we will beat the current price for a new,
              identical, immediately available product from any authorized competitor store.`}
              <Link to="/" className="home-branding__more-info">
                more info
              </Link>
            </p>
            <div className="home-branding__low-price-image">{this.renderImage(lowPriceImage)}</div>
          </div>
          <div className="home-branding__mobile-app">
            <h3 className="home-branding__title home-branding__title--mobile-app">
              Mobile App <br /> Coming Soon
            </h3>
            <p className="home-branding__text home-branding__text--mobile-app">
              Download our app for exclusive deals, workout content, and product information.
            </p>
            {/* Will Add When App Goes Live */}
            {/* <div className="home-branding__app-links">
              <div className="home-branding__app-link">
                <a href="#">
                  <img src="https://s3-us-west-2.amazonaws.com/chf-rcomm/appstore_apple.png" alt="Download for iOS" />
                </a>
              </div>
              <div className="home-branding__app-link">
                <a href="#">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/chf-rcomm/appstore_google.png"
                    alt="Download for Android"
                  />
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

HomeBranding.propTypes = {
  phoneImage: PropTypes.object,
  lowPriceImage: PropTypes.object
};

HomeBranding.defaultProps = {
  phoneImage: {
    name: 'CHF App',
    link: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/chf_app_1.png'
  },
  lowPriceImage: {
    name: 'Low Price Guarantee',
    link: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/badge_best-price.png'
  }
};

export default HomeBranding;

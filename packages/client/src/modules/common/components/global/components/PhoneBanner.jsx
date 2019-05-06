import React from 'react';
import PropTypes from 'prop-types';
import '../styles/modules/phone-banner.scss';

const PhoneBanner = props => {
  const { bannerImage, phoneImage } = props;
  return (
    <div className="phone-banner">
      <img className="phone-banner__banner" src={bannerImage.link} alt={bannerImage.name} />
      <img className="phone-banner__phone" src={phoneImage.link} alt={phoneImage.name} />
    </div>
  );
};

PhoneBanner.propTypes = {
  bannerImage: PropTypes.object,
  phoneImage: PropTypes.object
};
PhoneBanner.defaultProps = {
  bannerImage: {
    name: 'CHF App',
    link: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/resources_banner.png'
  },
  phoneImage: {
    name: 'CHF App',
    link: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/chf_app_1.png'
  }
};

export default PhoneBanner;

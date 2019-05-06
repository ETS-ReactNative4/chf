import React from 'react';
import '../styles/modules/low-price-banner.scss';

const LowPriceBanner = () => {
  return (
    <div className="low-price-banner">
      <div className="low-price-banner__banner">
        <img src="https://via.placeholder.com/1600x200" alt="banner" />
      </div>
      <div className="low-price-banner__text">
        <div className="low-price-banner__text--upper">California Home Fitness</div>
        <div className="low-price-banner__text--lower">Low Price Guaranteed</div>
      </div>
      <div className="low-price-banner__badge">
        <img src="https://via.placeholder.com/190x225" alt="badge" />
      </div>
    </div>
  );
};

export default LowPriceBanner;

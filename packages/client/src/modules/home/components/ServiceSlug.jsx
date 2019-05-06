import React from 'react';
import PropTypes from 'prop-types';
// import CheckIcon from '../assets/icon_check.png';
import { ResponsivePicture } from '../../common/components/global';

import '../styles/service-slug.scss';

class ServiceSlug extends React.Component {
  renderImage = image => {
    const className = image.hasOwnProperty('className') ? image.className : '';
    const options = {
      image: image.link,
      altText: image.name,
      className,
      image_size: '52X52',
      sources: [
        {
          image: image.link,
          image_size: '52X52',
          sizes: '(min-width: 990px) 52px'
        }
      ]
    };
    return <ResponsivePicture options={options} />;
  };
  render() {
    const { checkIcon_1, checkIcon_2, checkIcon_3 } = this.props;
    return (
      <div className="service-slug">
        <div className="service-slug__item">
          <div className="service-slug__icon">
            {this.renderImage(checkIcon_1)}
            {/* <img src={CheckIcon} alt="Best Brands" /> */}
          </div>
          <span className="service-slug__text">Best Brands</span>
        </div>
        <div className="service-slug__item">
          <div className="service-slug__icon">
            {this.renderImage(checkIcon_2)}
            {/* <img src={CheckIcon} alt="Lowest Prices" /> */}
          </div>
          <span className="service-slug__text">Lowest Prices</span>
        </div>
        <div className="service-slug__item">
          <div className="service-slug__icon">
            {this.renderImage(checkIcon_3)}
            {/* <img src={CheckIcon} alt="Friendly Service" /> */}
          </div>
          <span className="service-slug__text">Friendly Service</span>
        </div>
      </div>
    );
  }
}

ServiceSlug.propTypes = {
  checkIcon_1: PropTypes.object,
  checkIcon_2: PropTypes.object,
  checkIcon_3: PropTypes.object
};

ServiceSlug.defaultProps = {
  checkIcon_1: {
    link: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/icon_check.png',
    name: 'Best Brands'
  },
  checkIcon_2: {
    link: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/icon_check.png',
    name: 'Lowest Prices'
  },
  checkIcon_3: {
    link: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/icon_check.png',
    name: 'Friendly Service'
  }
};

export default ServiceSlug;

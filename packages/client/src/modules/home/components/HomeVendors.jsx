import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { ResponsivePicture } from '../../common/components/global';

import '../styles/home-vendors.scss';

class HomeVendors extends React.Component {
  renderImage = image => {
    const options = {
      image: image.link,
      altText: image.name,
      className: image.className,
      image_size: '237X63',
      sources: [
        {
          image: image.link,
          image_size: '237X63',
          size: '(min-width: 990px)'
        },
        {
          image: image.link,
          image_size: '100X50',
          size: '(max-width: 450px)'
        }
      ]
    };
    // <img className="hero__image" src={image.link} alt={image.name} />
    return <ResponsivePicture options={options} />;
  };
  vendorLocation = (id, handle) => ({ pathname: `/products/brands/${handle}`, search: `?page=${1}` });
  render() {
    const { vendors } = this.props;
    // console.log('location', location);
    return (
      <div className="home-vendors">
        {'vendors' in this.props && vendors.length > 0 ? (
          vendors.map(({ id, name, image, handle }) => (
            <Link key={id} to={this.vendorLocation(id, handle)} className="home-vendors__item">
              {this.renderImage({ link: image, name, className: 'home-vendors__image' })}
            </Link>
          ))
        ) : (
          <span>No vendor(s) to display</span>
        )}
      </div>
    );
  }
}

HomeVendors.propTypes = {
  location: PropTypes.object,
  vendors: PropTypes.array
};

HomeVendors.defaultProps = {
  vendors: [
    {
      id: '1',
      name: 'Life Fitness',
      image: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-lifefitness.png',
      handle: 'life-fitness'
    },
    {
      id: '3',
      name: 'Inspire',
      image: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-inspire.png',
      handle: 'inspire-fitness'
    },
    {
      id: '2',
      name: 'Precor',
      image: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-precor.png',
      handle: 'precor'
    },
    {
      id: '6',
      name: 'Helix',
      image: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-helix.png',
      handle: 'helix'
    },
    {
      id: '4',
      name: 'Spirit',
      image: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-spirit.png',
      handle: 'spirit-fitness'
    }
  ]
};

export default withRouter(HomeVendors);

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ResponsivePicture from './ResponsivePicture';
import settings from '../../../../../../../../settings';
import '../styles/modules/featured-vendors.scss';

class FeaturedVendors extends React.Component {
  state = {
    width: null,
    height: null
  };
  componentDidMount() {
    this.measureFeaturedVendors();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.measureFeaturedVendors, false);
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.width !== nextState.width || this.state.height !== nextState.height;
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.measureFeaturedVendors, false);
  }
  renderImage = image => {
    const className = image.hasOwnProperty('className') ? image.className : '';
    const options = {
      image: image.link,
      altText: image.name,
      className,
      image_size: '500X100',
      sources: [
        {
          image: image.link,
          image_size: '500x100',
          size: '(min-width: 990px)'
        },
        {
          image: image.link,
          image_size: '200x50',
          size: '(max-width: 450px)'
        }
      ]
    };
    return <ResponsivePicture options={options} />;
  };
  saveRef = ref => (this.containerNode = ref);
  measureFeaturedVendors = () => {
    const { clientWidth, clientHeight } = this.containerNode;
    this.setState({
      width: clientWidth,
      height: clientHeight
    });
  };
  vendorLocation = (id, handle) => ({ pathname: `/products/brands/${handle}`, search: `?page=${1}` });
  render() {
    const { vendors } = this.props;
    const { width } = this.state;
    return (
      <section
        ref={this.saveRef}
        className={classnames(
          'featured-vendors',
          {
            'featured-vendors--xsmall': width < settings.breakpoints.small
          },
          {
            'featured-vendors--small': width >= settings.breakpoints.small && width < settings.breakpoints.medium
          },
          {
            'featured-vendors--medium': width >= settings.breakpoints.medium && width < settings.breakpoints.large
          },
          {
            'featured-vendors--large': width >= settings.breakpoints.large
          }
        )}
      >
        {'vendors' in this.props && vendors.length > 0 ? (
          vendors.map(({ id, name, handle, logo_url }) => (
            <Link key={id} to={this.vendorLocation(id, handle)} className="featured-vendors__link">
              {this.renderImage({ link: logo_url, name, className: 'featured-vendors__image' })}
              {/* <img
                src={logo_url || 'https://via.placeholder.com/200x100'}
                alt={name}
                className="featured-vendors__image"
              /> */}
            </Link>
          ))
        ) : (
          <span>No vendors to display</span>
        )}
      </section>
    );
  }
}

FeaturedVendors.propTypes = {
  vendors: PropTypes.array
};

FeaturedVendors.defaultProps = {
  // vendors: [
  //   {
  //     name: 'LifeFitness',
  //     image: 'https://via.placeholder.com/800x250',
  //     location: '/vendors'
  //   },
  //   {
  //     name: 'Precor',
  //     image: 'https://via.placeholder.com/800x250',
  //     location: '/vendors'
  //   }
  // ]
};

export default FeaturedVendors;

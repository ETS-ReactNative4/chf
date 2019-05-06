import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ResponsivePicture from './ResponsivePicture';
import settings from '../../../../../../../../settings';
import '../styles/modules/vendor-list.scss';

class VendorList extends React.Component {
  state = {
    width: null,
    height: null
  };
  componentDidMount() {
    this.measureVendorList();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.measureVendorList, false);
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.width !== nextState.width || this.state.height !== nextState.height;
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.measureVendorList, false);
  }
  renderImage = image => {
    const className = image.hasOwnProperty('className') ? image.className : '';
    const options = {
      image: image.link,
      altText: image.name,
      className,
      image_size: '237X63',
      sources: [
        {
          image: image.link,
          image_size: '200x60',
          size: '(min-width: 900px)'
        },
        {
          image: image.link,
          image_size: '237x63',
          size: '(max-width: 450px)'
        }
      ]
    };
    return <ResponsivePicture options={options} />;
  };
  saveRef = ref => (this.containerNode = ref);
  measureVendorList = () => {
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
          'vendor-list',
          {
            'vendor-list--xsmall': width < settings.breakpoints.small
          },
          {
            'vendor-list--small': width >= settings.breakpoints.small && width < settings.breakpoints.medium
          },
          {
            'vendor-list--medium': width >= settings.breakpoints.medium && width < settings.breakpoints.large
          },
          {
            'vendor-list--large': width >= settings.breakpoints.large
          }
        )}
      >
        {'vendors' in this.props && vendors.length > 0 ? (
          vendors.map(({ id, name, handle, logo_url }) => (
            <Link key={id} to={this.vendorLocation(id, handle)} className="vendor-list__link">
              {this.renderImage({ link: logo_url, name, className: 'vendor-list__image' })}
              {/* <img src={logo_url || 'https://via.placeholder.com/200x100'} alt={name} className="vendor-list__image" /> */}
            </Link>
          ))
        ) : (
          <span>No vendors to display</span>
        )}
      </section>
    );
  }
}

VendorList.propTypes = {
  vendors: PropTypes.array
};

export default VendorList;

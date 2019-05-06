import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ResponsivePicture from './ResponsivePicture';

import '../styles/modules/vendor-filter.scss';

class LinkList extends React.Component {
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
          image_size: '237x63',
          sizes: ''
        }
      ]
    };
    return <ResponsivePicture options={options} />;
  };
  handleVendorSelect = vendorId => {
    const { selectVendor } = this.props;
    selectVendor(vendorId);
  };
  render() {
    const { vendors, selectedVendor } = this.props;
    return (
      <div className="vendor-filter">
        {'vendors' in this.props && vendors.length > 0 ? (
          vendors.map(vendor => (
            <div
              key={vendor.id}
              onClick={() => this.handleVendorSelect(vendor.id)}
              className={classnames('vendor-filter__item', {
                'vendor-filter__item--selected': selectedVendor === vendor.id
              })}
            >
              {this.renderImage({ link: vendor.image, name: vendor.name })}
              {/* <img src={vendor.image} alt={vendor.name} /> */}
            </div>
          ))
        ) : (
          <span>No vendor(s) to display</span>
        )}
      </div>
    );
  }
}

LinkList.propTypes = {
  vendors: PropTypes.array,
  selectVendor: PropTypes.func,
  selectedVendor: PropTypes.string
};

LinkList.defaultProps = {
  // vendors: [
  //   { id: '1', name: 'LifeFitness', image: 'https://via.placeholder.com/200x100' },
  //   { id: '2', name: 'Inspire', image: 'https://via.placeholder.com/200x100' },
  //   { id: '3', name: 'Precor', image: 'https://via.placeholder.com/200x100' },
  //   { id: '4', name: 'StairMaster', image: 'https://via.placeholder.com/200x100' },
  //   { id: '5', name: 'Spirit', image: 'https://via.placeholder.com/200x100' }
  // ]
};

export default LinkList;

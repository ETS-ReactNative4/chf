import React from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import { Link } from 'react-router-dom';
//import removeVendorName from '../utils/helpers';
//import { toUrlName } from '../../common/components/global/components/PageBreadcrumbs';
import ResponsiveShpfyPicture from '../../common/components/global/components/ResponsiveShpfyPicture';

import '../styles/similar-products.scss';

class SimilarProducts extends React.Component {
  location = handle => ({ pathname: `/product/${handle}` });
  renderImage = image => {
    const className = image.hasOwnProperty('className') ? image.className : '';
    const options = {
      image: image.link,
      altText: image.name,
      className,
      image_size: '300X300',
      sources: [
        {
          image: image.link,
          image_size: '700X700',
          size: '(min-width: 990px)'
        },
        {
          image: image.link,
          image_size: '370X370',
          size: '(max-width: 450px)'
        }
      ]
    };
    return <ResponsiveShpfyPicture options={options} />;
  };
  productLocation = (vendor, handle, id, title, productType) => {
    // console.log('ID', id, 'TITLE', title, 'PRODUCT TYPE', productType);
    // console.log('NODE::', node);
    const regex = /(\/|["])/gm;
    const subst = ``;

    // The substituted value will be contained in the result variable
    const result = title.replace(regex, subst);
    const path = vendor
      .split(' ')
      .join('-')
      .toLowerCase();
    // console.log('HANDLE:::', `/product/${path}/${handle}`);

    return {
      pathname: `/product/${path}/${result
        .split(' ')
        .join('-')
        .toLowerCase()}/${productType
        .split('/')
        .join('-')
        .toLowerCase()}`,
      state: handle,
      search: `handle=${handle}`
    };
  };

  render() {
    const { relatedProducts } = this.props;
    if (!relatedProducts || (Array.isArray(relatedProducts) && relatedProducts.length === 0)) return null;
    return (
      <div className="similar-products">
        <h2 className="similar-products__header">Similar items related to this product.</h2>
        <div className="similar-products__description">
          Based on your selection, here are similar items you may be interested in.
        </div>
        <div className="similar-products__item-container">
          {Array.isArray(relatedProducts) && relatedProducts.length > 0 ? (
            relatedProducts.map(({ id, handle, image, vendor, title, productType }) => (
              <Link
                key={id}
                to={this.productLocation(vendor, handle, id, title, productType)}
                className="similar-products__item"
              >
                {/* <img src={image} alt={title} /> */}
                {this.renderImage({ link: image, name: title })}

                <div className="similar-products__item-name">{`${vendor} ${title}`}</div>
              </Link>
            ))
          ) : (
            <span>No similar product(s) to display</span>
          )}
        </div>
      </div>
    );
  }
}

SimilarProducts.propTypes = {
  relatedProducts: PropTypes.array
};

export default SimilarProducts;

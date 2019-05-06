import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Badge, ResponsiveShpfyPicture, ResponsivePicture } from '../../common/components/global';
import '../styles/popular-items-carousel.scss';

class PopularItemsCarousel extends React.Component {
  renderImage = image => {
    const className = image.hasOwnProperty('className') ? image.className : '';
    const options = {
      image: image.link,
      altText: image.name,
      className,
      image_size: '331X331',
      sources: [
        {
          image: image.link,
          image_size: '331X331',
          size: '(min-width: 990px)'
        }
      ]
    };
    return <ResponsiveShpfyPicture options={options} />;
  };
  renderLogo = image => {
    const className = image.hasOwnProperty('className') ? image.className : '';
    const options = {
      image: image.link,
      altText: image.name,
      className,
      image_size: '331X331',
      sources: [
        {
          image: image.link,
          image_size: '331X331',
          sizes: '(min-width: 990px) 331px'
        }
      ]
    };
    return <ResponsivePicture options={options} />;
  };
  firstImg = node => node.images.edges[0].node;
  getPrice = node => node.variants.edges[0].node.price;
  getCompareAtPrice = node => node.variants.edges[0].node.compareAtPrice;
  getDisplayPrice = input =>
    parseInt(input)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,');
  vendorLogo = vendorName => {
    const formatVendor = name => {
      return name.replace(/[\s/-]/g, '').toLowerCase();
    };
    const { vendors } = this.props;
    const [match] = vendors.filter(v => formatVendor(v.name) === formatVendor(vendorName));
    return match.logo_url;
  };
  toUrlName = str => str.replace(/(\s\/\s|\/|\s|_)/gi, '-').toLowerCase();
  productLocation = ({ handle, title, productType, vendor }) => {
    const vendorName = vendor
      .split(' ')
      .join('-')
      .toLowerCase();
    // console.log('NODE :::', title);

    return {
      pathname: `/product/${vendorName}/${title
        .split(' ')
        .join('-')
        .toLowerCase()}/${productType.toLowerCase()}`,
      state: handle,
      search: `handle=${handle}`
    };
  };
  render() {
    const { products } = this.props;
    return (
      <div className="popular-items-carousel">
        {products && products.edges.length > 0 ? (
          products.edges.map(({ node }) => (
            <Link key={node.id} to={this.productLocation(node)} className="popular-items-carousel__item">
              <div className="popular-items-carousel__item-image">
                {this.renderImage({ link: this.firstImg(node).originalSrc, name: this.firstImg(node).altText })}
                {/* <img alt={this.firstImg(node).altText} src={this.firstImg(node).originalSrc} /> */}
                {this.getCompareAtPrice(node) !== null ? <Badge badgeType="sale" /> : null}
              </div>
              {this.renderLogo({
                link: this.vendorLogo(node.vendor),
                name: node.vendor,
                className: 'popular-items-carousel__vendor-image'
              })}
              {/* <img
                alt={node.vendor}
                src={this.vendorLogo(node.vendor) || 'https://via.placeholder.com/200x100'}
                className="popular-items-carousel__vendor-image"
              /> */}
              <h3 className="popular-items-carousel__item-name">{node.title}</h3>
              {this.getCompareAtPrice(node) !== null ? (
                <div className="popular-items-carousel__item-price-group">
                  <div className="popular-items-carousel__item-price popular-items-carousel__item-price--original">
                    ${this.getDisplayPrice(this.getCompareAtPrice(node))}
                  </div>
                  <div className="popular-items-carousel__item-price popular-items-carousel__item-price--sale">
                    ${this.getDisplayPrice(this.getPrice(node))}
                  </div>
                </div>
              ) : (
                <div className="popular-items-carousel__item-price">${this.getDisplayPrice(this.getPrice(node))}</div>
              )}
            </Link>
          ))
        ) : (
          <span>No popular item(s) to display</span>
        )}
      </div>
    );
  }
}

PopularItemsCarousel.propTypes = {
  products: PropTypes.object,
  vendors: PropTypes.array
};

export default PopularItemsCarousel;

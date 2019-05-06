import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Badge } from '../../common/components/global';
//import { toUrlName } from '../../common/components/global/components/PageBreadcrumbs';
import ResponsiveShpfyPicture from '../../common/components/global/components/ResponsiveShpfyPicture';

import '../styles/shop-grid.scss';

class ShopGrid extends React.Component {
  componentDidMount() {
    const { selectedCategory, selectedVendor, priceConfirmed } = this.props;
    if (priceConfirmed || selectedCategory || selectedVendor) {
      const filtered = this.applyFilter(this.props.products.edges);
      return this.props.setFilteredFinalIdx(filtered);
    }
  }
  componentDidUpdate(prevProps) {
    const { selectedCategory, selectedVendor, priceConfirmed } = this.props;
    const {
      selectedCategory: prevCategory,
      selectedVendor: prevVendor,
      priceConfirmed: prevPriceConfirmed
    } = prevProps;
    const filtered = this.applyFilter(this.props.products.edges);
    if (selectedCategory !== prevCategory && selectedCategory) {
      return this.props.setFilteredFinalIdx(filtered);
    }
    if (selectedVendor !== prevVendor && selectedVendor) {
      return this.props.setFilteredFinalIdx(filtered);
    }
    if (priceConfirmed !== prevPriceConfirmed && priceConfirmed) {
      return this.props.setFilteredFinalIdx(filtered);
    }
  }
  getDisplayPrice = input =>
    parseInt(input)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,');
  formatVendor = name => {
    return name.replace(/[\s/-]/g, '').toLowerCase();
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
  applySort = prods => {
    const { sortMethod } = this.props;
    let shopProducts = [...prods];
    switch (sortMethod) {
      case 'alpha':
        shopProducts = _.orderBy(shopProducts, ['node.title'], ['asc']);
        break;
      case 'alphaReverse':
        shopProducts = _.orderBy(shopProducts, ['node.title'], ['desc']);
        break;
      case 'price':
        shopProducts = _.orderBy(shopProducts, p => parseFloat(p.node.variants.edges[0].node.price), ['asc']);
        break;
      case 'priceReverse':
        shopProducts = _.orderBy(shopProducts, p => parseFloat(p.node.variants.edges[0].node.price), ['desc']);
        break;
      case 'featured':
        break;
    }
    return shopProducts;
  };
  applyFilter = prods => {
    const { selectedCategory, selectedVendor, priceConfirmed, priceFilterUpper: u, priceFilterLower: l } = this.props;
    let shopProducts = [...prods];
    // First filter layer
    if (priceConfirmed && u && l) {
      shopProducts = shopProducts.filter(({ node: { variants: { edges } } }) => {
        const parsedPr = parseFloat(edges[0].node.price);
        return parseFloat(l) <= parsedPr && parsedPr <= parseFloat(u);
      });
    }
    // Second filter layer
    if (selectedCategory) {
      return shopProducts.filter(({ node: { collections: { edges } } }) => {
        const res = edges.some(({ node: { id } }) => id === selectedCategory);
        return res;
      });
    }
    if (selectedVendor) {
      return shopProducts.filter(p => this.formatVendor(p.node.vendor) === this.formatVendor(selectedVendor));
    }
    return shopProducts;
  };
  firstImg = node => node.images.edges[0].node;
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
  render() {
    const { products, displayLim, startDisplayIdx } = this.props;
    const lowerLim = startDisplayIdx;
    const upperLim = startDisplayIdx + (displayLim - 1);
    // console.log('PRODUCTS::', products);
    // Apply any chosen sort and/or filter
    const sorted = this.applySort(products.edges);
    const sortedAndFiltered = this.applyFilter(sorted);

    return (
      <div className="shop-grid">
        {sortedAndFiltered.length > 0
          ? sortedAndFiltered.map(({ node: { id, title, vendor, handle, productType, images }, node }, i) => {
              // console.log('LOWER::', lowerLim, 'UPPER', upperLim);
              const { compareAtPrice, price } = node.variants.edges[0].node;
              if (i >= lowerLim && i <= upperLim) {
                return (
                  <Link
                    key={id}
                    to={this.productLocation(vendor, handle, id, title, productType, node)}
                    className="shop-grid__item"
                  >
                    <div className="shop-grid__item-image">
                      {'edges' in images && images.edges.length > 0 ? (
                        // <img src={this.firstImg(node).originalSrc} alt={this.firstImg(node).altText} />
                        this.renderImage({ link: this.firstImg(node).originalSrc, name: this.firstImg(node).altText })
                      ) : (
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" />
                      )}
                      {compareAtPrice !== null ? <Badge badgeType="sale" /> : null}
                    </div>
                    <h3 className="shop-grid__item-name">{`${vendor} ${title}`}</h3>
                    <h4 className="shop-grid__item-category">{productType}</h4>
                    {compareAtPrice !== null ? (
                      <div className="shop-grid__item-price-group">
                        <span className="shop-grid__item-price shop-grid__item-price--sale">
                          {`$${this.getDisplayPrice(price)}`}
                        </span>
                        <span className="shop-grid__item-price shop-grid__item-price--original">
                          {`$${this.getDisplayPrice(compareAtPrice)}`}
                        </span>
                      </div>
                    ) : (
                      <div className="shop-grid__item-price">{`$${this.getDisplayPrice(price)}`}</div>
                    )}
                  </Link>
                );
              } else {
                return null;
              }
            })
          : null}
      </div>
    );
  }
}

ShopGrid.propTypes = {
  selectedPriceRange: PropTypes.string,
  selectedPromotion: PropTypes.string,
  selectedCategory: PropTypes.string,
  selectedVendor: PropTypes.string,
  sortMethod: PropTypes.string,
  products: PropTypes.object,
  categories: PropTypes.array,
  promotions: PropTypes.array,
  priceRanges: PropTypes.array,
  category: PropTypes.object,
  displayLim: PropTypes.number,
  startDisplayIdx: PropTypes.number,
  setFilteredFinalIdx: PropTypes.func,
  priceConfirmed: PropTypes.bool,
  priceFilterUpper: PropTypes.string,
  priceFilterLower: PropTypes.string
};

export default ShopGrid;

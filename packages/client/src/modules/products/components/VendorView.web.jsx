import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import classnames from 'classnames';
import {
  PageLayout,
  ScrollToTop,
  // Hero,
  CollapseMenu,
  PageBreadcrumbs
} from '../../common/components/global';
import { toUrlName } from '../../common/components/global/components/PageBreadcrumbs';
import ShopBreadcrumbs from './ShopBreadcrumbs';
import ShopGrid from './ShopGrid';
import ShopGridSort from './ShopGridSort';
// import ShopGridPages from './ShopGridPages';
import Loader from '../../common/components/global/components/Loader';

import settings from '../../../../../../settings';
import '../styles/category-view.scss';

const capFirstLtr = str => str[0].toUpperCase() + str.slice(1);

class VendorView extends React.Component {
  constructor(props) {
    super(props);
    const { location } = props;
    let filters = {};
    if (
      typeof location !== 'undefined' &&
      'state' in location &&
      typeof location.state !== 'undefined' &&
      'filters' in location.state &&
      typeof location.state.filters !== 'undefined'
    ) {
      filters = location.state.filters;
    }
    this.state = {
      priceFilterLower: '',
      priceFilterUpper: '',
      priceConfirmed: false,
      priceErr: null,
      selectedPriceRange: null,
      selectedPromotion: null,
      selectedCategory: null,
      selectedVendor: null,
      sortMethod: 'featured',
      displayLim: 48,
      startDisplayIdx: 0,
      currPg: 1,
      filteredFinalIdx: null,
      ...filters
    };
  }
  handleInput = e => this.setState({ [e.target.name]: e.target.value });
  scrollToGridTop = () => {
    return window.scrollTo({
      top: 200,
      left: 0,
      behavior: 'smooth'
    });
  };
  applyPriceFilter = e => {
    e.preventDefault();
    this.setState({ priceErr: null });
    const { priceFilterUpper: u, priceFilterLower: l } = this.state;

    // Validate limits
    if (!u || !l) return this.setState({ priceErr: 'Please enter an upper and lower price limit.' });
    const isPrice = new RegExp(/^\d+(\.\d{2})?$/, 'i');
    if ([u, l].map(lim => isPrice.test(lim)).some(res => res == false)) {
      return this.setState({ priceErr: 'Please enter valid prices.' });
    }
    // If validated, apply filter
    this.setState({ priceConfirmed: true });
  };
  clearPriceFilter = e => {
    e.preventDefault();
    this.setState({ priceConfirmed: false, priceFilterLower: '', priceFilterUpper: '' });
  };
  getIdxsAndLims = () => {
    const { edges } = this.props.sfy_shop.products;
    const { startDisplayIdx, displayLim, currPg } = this.state;
    const edgesFinalIdx = edges.length - 1;
    const finalDisplayIdx = startDisplayIdx + displayLim - 1;
    return { startDisplayIdx, displayLim, currPg, edgesFinalIdx, finalDisplayIdx };
  };
  setFilteredFinalIdx = filteredProds => {
    this.setState({ filteredFinalIdx: filteredProds.length - 1 });
  };
  isPaginationDisabled = type => {
    const { hasNextPage } = this.props;
    const { selectedVendor, selectedCategory, filteredFinalIdx } = this.state;
    const { startDisplayIdx, finalDisplayIdx, edgesFinalIdx } = this.getIdxsAndLims();
    if (type === 'forward') {
      if (selectedVendor || selectedCategory) {
        if (finalDisplayIdx < filteredFinalIdx) return false;
        else return true;
      }
      if (finalDisplayIdx < edgesFinalIdx) return false;
      else {
        if (hasNextPage) return false;
        else return true;
      }
    }
    if (type === 'back') {
      if (startDisplayIdx > 0) return false;
      else return true;
    }
  };
  handleLimChange = e => {
    const newLim = parseInt(e.target.value);
    const { displayLim: oldLim, edgesFinalIdx } = this.getIdxsAndLims();
    const nextFinalDisplayIdx = newLim - 1;
    if (newLim > oldLim) {
      if (nextFinalDisplayIdx > edgesFinalIdx) {
        const first = nextFinalDisplayIdx - edgesFinalIdx;
        this.props.loadMore(first);
      }
    }
    return this.setState({ startDisplayIdx: 0, displayLim: newLim, currPg: 1 });
  };
  handlePageForward = () => {
    const { startDisplayIdx, displayLim, edgesFinalIdx, currPg } = this.getIdxsAndLims();
    const nextStartDisplayIdx = startDisplayIdx + displayLim;
    const nextFinalDisplayIdx = nextStartDisplayIdx + displayLim - 1;
    if (nextFinalDisplayIdx > edgesFinalIdx) {
      const first = nextFinalDisplayIdx - edgesFinalIdx;
      this.props.loadMore(first);
    }
    this.setState({ startDisplayIdx: nextStartDisplayIdx, currPg: currPg + 1 }, () => this.scrollToGridTop());
  };
  handlePageBack = () => {
    const { startDisplayIdx, displayLim, currPg } = this.getIdxsAndLims();
    const backLog = startDisplayIdx - displayLim;
    if (backLog >= 0) this.setState({ startDisplayIdx: backLog, currPg: currPg - 1 }, () => this.scrollToGridTop());
    else this.setState({ startDisplayIdx: 0, currPg: 1 }, () => this.scrollToGridTop());
  };
  selectSortMethod = sortMethod => this.setState({ sortMethod: sortMethod });
  selectPriceRange = priceRangeId => {
    const { selectedPriceRange } = this.state;
    if (selectedPriceRange && selectedPriceRange === priceRangeId) {
      this.setState({ selectedPriceRange: null });
    } else {
      this.setState({ selectedPriceRange: priceRangeId });
    }
  };
  selectPromotion = promotionId => {
    const { selectedPromotion } = this.state;
    if (selectedPromotion && selectedPromotion === promotionId) {
      this.setState({ selectedPromotion: null });
    } else {
      this.setState({ selectedPromotion: promotionId });
    }
  };
  selectCategory = categoryId => {
    const { selectedCategory } = this.state;
    if (selectedCategory && selectedCategory === categoryId) {
      this.setState({ selectedCategory: null, startDisplayIdx: 0, currPg: 1 });
    } else {
      if (this.props.hasNextPage) this.props.loadMore(100);
      this.setState({ selectedCategory: categoryId, startDisplayIdx: 0, currPg: 1 });
    }
  };
  selectVendor = vendorId => {
    const { selectedVendor } = this.state;
    if (selectedVendor && selectedVendor === vendorId) {
      this.setState({ selectedVendor: null, startDisplayIdx: 0, currPg: 1 });
    } else {
      if (this.props.hasNextPage) this.props.loadMore(100);
      this.setState({ selectedVendor: vendorId, startDisplayIdx: 0, currPg: 1 });
    }
  };
  parseCategories = () => {
    const {
      sfy_shop_collections: {
        collections: { edges: categories }
      }
    } = this.props;
    return categories.map(({ node: { id, title: name } }) => ({ id, name, url_name: toUrlName(name) }));
  };
  render() {
    const { selectedPriceRange, selectedPromotion, selectedCategory } = this.state;
    const {
      promotions,
      priceRanges,
      vendor,
      // heroImage,
      bannerImage,
      loading,
      sfy_shop,
      sfy_shop_collections
    } = this.props;
    const { priceConfirmed, priceFilterUpper, priceFilterLower } = this.state;
    const filtersToPass = { priceConfirmed, priceFilterUpper, priceFilterLower };
    // console.log("BRAND PROPS", vendor);
    const renderMetaData = vendor => (
      <Helmet
        title={vendor.title}
        meta={[
          {
            name: 'description',
            content: `${vendor.description}`
          },
          {
            name: 'keywords',
            content: `${vendor.keywords}`
          }
        ]}
      />
    );
    if (loading || !sfy_shop || !sfy_shop_collections || !vendor) {
      return (
        <PageLayout>
          {/* {renderMetaData(vendor)} */}
          <Loader />
        </PageLayout>
      );
    } else if (vendor && !sfy_shop) {
      return (
        <PageLayout>
          {renderMetaData(vendor.vendorData.seo)}
          <Loader />
        </PageLayout>
      );
    } else {
      const { products } = sfy_shop;
      const { collections: categories } = sfy_shop_collections;
      return (
        <PageLayout>
          {renderMetaData(vendor.vendorData.seo)}
          <ScrollToTop />
          {/* <Hero overlayNav={true} image={heroImage} /> */}
          {/* <LowPriceBanner /> */}
          <img src={bannerImage.link} alt={bannerImage.name} />
          <PageBreadcrumbs {...this.props} />
          <div className="category-view">
            <div className="category-view__sidebar">
              <div className="category-view__collapse-label">FILTER BY</div>
              <div className="category-view__collapse-menu">
                {categories && categories.edges.length > 0 ? (
                  <div className="category-view__collapse">
                    <CollapseMenu label="CATEGORY">
                      {categories.edges.map(({ node: { id, title } }) => (
                        <div
                          key={id}
                          className={classnames('category-view__collapse-item', {
                            'category-view__collapse-item--active': selectedCategory === id
                          })}
                          onClick={() => this.selectCategory(id)}
                        >
                          <span className="category-view__collapse-name">{title}</span>
                        </div>
                      ))}
                    </CollapseMenu>
                  </div>
                ) : null}
              </div>
              <div className="category-view__collapse-menu">
                <div className="category-view__collapse">
                  <CollapseMenu label="PRICE">
                    <form className="category-view__collapse-item">
                      <div>
                        <label>Lower Limit</label>
                        <div>
                          <span>$</span>
                          <input
                            style={{ width: '60%' }}
                            type="text"
                            name="priceFilterLower"
                            value={this.state.priceFilterLower}
                            placeholder="0"
                            onChange={e => this.handleInput(e)}
                          />
                        </div>
                      </div>
                      <div>
                        <label>Upper Limit</label>
                        <div>
                          <span>$</span>
                          <input
                            style={{ width: '60%' }}
                            type="text"
                            name="priceFilterUpper"
                            value={this.state.priceFilterUpper}
                            placeholder="0"
                            onChange={e => this.handleInput(e)}
                          />
                        </div>
                      </div>
                      <button disabled={this.state.priceConfirmed} onClick={e => this.applyPriceFilter(e)}>
                        Confirm
                      </button>
                      {this.state.priceConfirmed ? (
                        <button onClick={e => this.clearPriceFilter(e)}> Clear </button>
                      ) : null}
                      {this.state.priceErr ? <div>{this.state.priceErr}</div> : null}
                    </form>
                  </CollapseMenu>
                </div>
              </div>
              <div className="category-view__collapse-menu">
                {'promotions' in this.props && promotions.length > 0 ? (
                  <div className="category-view__collapse">
                    <CollapseMenu label="PROMOTIONS">
                      {promotions.map(promotion => (
                        <div
                          key={promotion.id}
                          className={classnames('category-view__collapse-item', {
                            'category-view__collapse-item--active': selectedPromotion === promotion.id
                          })}
                          onClick={() => this.selectPromotion(promotion.id)}
                        >
                          <span className="category-view__collapse-name">{promotion.name}</span>
                        </div>
                      ))}
                    </CollapseMenu>
                  </div>
                ) : null}
              </div>
              <div className="category-view__collapse-menu">
                {'priceRanges' in this.props && priceRanges.length > 0 ? (
                  <div className="category-view__collapse">
                    <CollapseMenu label="PRICE RANGE">
                      {priceRanges.map(priceRange => (
                        <div
                          key={priceRange.id}
                          className={classnames('category-view__collapse-item', {
                            'category-view__collapse-item--active': selectedPriceRange === priceRange.id
                          })}
                          onClick={() => this.selectPriceRange(priceRange.id)}
                        >
                          <span className="category-view__collapse-name">{priceRange.name}</span>
                        </div>
                      ))}
                    </CollapseMenu>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="category-view__main">
              <h1 className="header header--upper header--primary category-view__main-header">
                {products.edges.length > 0
                  ? `${products.edges[0].node.vendor} Equipment`
                  : this.props.match.params.vendor_name
                      .split('-')
                      .map(item => capFirstLtr(item))
                      .join(' ')}
              </h1>
              <ShopBreadcrumbs
                categories={vendor.categories}
                for="category"
                filtersToPass={filtersToPass}
                vendorUrlName={this.props.match.params.vendor_name}
              />
              <ShopGridSort
                selectSortMethod={this.selectSortMethod}
                handleLimChange={this.handleLimChange}
                {...this.state}
              />
              <ShopGrid
                {...this.state}
                {...this.props}
                products={products}
                setFilteredFinalIdx={this.setFilteredFinalIdx}
              />
              {/* <ShopGridPages
                {...this.props}
                {...this.state}
                isDisabled={this.isPaginationDisabled}
                handlePageForward={this.handlePageForward}
                handlePageBack={this.handlePageBack}
              /> */}
            </div>
          </div>
        </PageLayout>
      );
    }
  }
}

VendorView.propTypes = {
  location: PropTypes.object,
  promotions: PropTypes.array,
  priceRanges: PropTypes.array,
  vendor: PropTypes.object,
  heroImage: PropTypes.object,
  bannerImage: PropTypes.object,
  vendors: PropTypes.array,
  loading: PropTypes.bool,
  sfy_shop: PropTypes.object,
  hasNextPage: PropTypes.bool,
  loadMore: PropTypes.func,
  match: PropTypes.object,
  sfy_shop_collections: PropTypes.object
};
VendorView.defaultProps = {
  heroImage: {
    name: 'Shop',
    link: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/shop_hero.png'
  },
  bannerImage: {
    name: 'Low Price Guaranteed',
    link: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/shop_banner.png'
  }
};

export default VendorView;

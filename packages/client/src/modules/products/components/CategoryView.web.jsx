import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import classnames from 'classnames';
import {
  PageLayout,
  ScrollToTop,
  // Hero,
  // LowPriceBanner,
  CollapseMenu,
  PageBreadcrumbs
} from '../../common/components/global';
import ShopBreadcrumbs from './ShopBreadcrumbs';
import ShopGrid from './ShopGrid';
import ShopGridSort from './ShopGridSort';
import ShopGridPages from './ShopGridPages';
import Loader from '../../common/components/global/components/Loader';

import ResponsivePicture from '../../common/components/global/components/ResponsivePicture';

import settings from '../../../../../../settings';
import '../styles/category-view.scss';

class CategoryView extends React.Component {
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
      selectedCategory: null,
      selectedVendor: null,
      sortMethod: 'featured',
      displayLim: 12,
      startDisplayIdx: 0,
      currentPageIdx: 0,
      currPg: 1,
      filteredFinalIdx: null,
      lastPageLoaded: 1,
      ...filters
    };
    this.unListen = null;
  }
  componentDidMount() {
    this.unListen = this.props.history.listen((location, action) => {
      // console.log('LOCATION::', location);
      // console.log('ACTION::', action);
      this.scrollToGridTop();
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('Component DID UPDATE');
    // const prevPageTotal = prevProps.productsCount;
    // const totalProducts = this.props.productsCount;
    const reg = /[=](\d)/;
    const { startDisplayIdx, displayLim, currPg } = this.state;
    const action = this.props.history.action;
    const prevPage = parseInt(reg.exec(prevProps.location.search)[1]);
    const currentPage = parseInt(reg.exec(this.props.location.search)[1]);
    const totalPages = Math.ceil(this.props.productsCount / displayLim);
    // console.log('CURRENTPAGE ', currPg, prevState.currPg);
    if (this.props.category) {
      if (prevPage !== 1 && displayLim !== prevState.displayLim) {
        // console.log('EDGES FINAL IDX', edgesFinalIdx, 'CURR PAGE:', currentPage);
        // console.log('START DISPALY INDEX ', startDisplayIdx);
        this.setState({ startDisplayIdx: displayLim, currPg: 1 });
        return this.props.history.push({ pathname: this.props.location.pathname, search: `page=${1}` });
      }
      const { edges } = this.props.category.products;

      const edgesFinalIdx = edges.length;
      let finalStartIdx;
      if (currentPage !== 1) {
        finalStartIdx = edgesFinalIdx - currentPage + 1;
      } else {
        finalStartIdx = 0;
      }

      if (startDisplayIdx == 0 && currentPage !== 1 && currentPage !== totalPages) {
        // console.log(' 1ST IF HIT START DISPLAY INDEX:', startDisplayIdx);
        const nextStartIdX = edgesFinalIdx / 2;
        // console.log('nextStartIdX', nextStartIdX);
        return this.setState({ startDisplayIdx: nextStartIdX, currPg: currentPage });
      } else if (currentPage == totalPages && startDisplayIdx !== finalStartIdx) {
        // console.log('CURRENT PAGE:', currentPage);
        // console.log('DISPLAY LIM::', this.state.displayLim);
        // console.log('TOTAL Pages::', totalPages);
        // console.log('TOTAL PRODUCTS', totalProducts);
        // console.log('FINAL START:', finalStartIdx);
        return this.setState({ startDisplayIdx: finalStartIdx, currPg: currentPage });
      } else if (currentPage !== prevPage) {
        // console.log('ELSE HIT:::', nextIdx);
        let nextIdx = 0;
        nextIdx = prevState.startDisplayIdx - displayLim;
        if (currentPage < prevPage) {
          return this.setState({ startDisplayIdx: nextIdx, currPg: currentPage });
        }
        if (currentPage == 1 && nextIdx !== 0) {
          return this.setState({ startDisplayIdx: 0, currPg: currentPage });
        } else if (currPg !== prevState.currPg) {
          if (currentPage == 1 && nextIdx !== 0) {
            return this.setState({ startDisplayIdx: 0, currPg: currentPage });
          }
          const nextStartIdX = edgesFinalIdx / 2;
          // console.log('THIS SHOULD HIT');
          return this.setState({ startDisplayIdx: nextStartIdX, currPg: currentPage });
        }
        // if (currentPage == 1) {
        // return this.setState({ startDisplayIdx: finalStartIdx, currPg: currentPage });

        // }
      }

      return; //this.loadNext(currentPage, startIdx);
    }
  }
  componentWillUnmount() {
    this.unListen();
  }

  handleInput = e => this.setState({ [e.target.name]: e.target.value });
  scrollToGridTop = () => {
    // console.log('FIRE SCROLL TO TOP');
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
    // console.log('RUNNING GET IDX AND LIMS');
    // console.log('THIS PROPS CATEGORIES:', this.props.category);
    const { edges } = this.props.category.products;
    const { startDisplayIdx, displayLim, currPg } = this.state;
    const edgesFinalIdx = edges.length - 1;
    const finalDisplayIdx = startDisplayIdx + displayLim - 1;
    return { startDisplayIdx, displayLim, currPg, edgesFinalIdx, finalDisplayIdx };
  };
  setFilteredFinalIdx = filteredProds => {
    // console.log('SETTING STATE::');
    this.setState({ filteredFinalIdx: filteredProds.length - 1 });
  };
  isPaginationDisabled = type => {
    // console.log('PAGE DISABLED RUNNING');
    const { hasNextPage } = this.props;
    const { selectedVendor, selectedCategory, filteredFinalIdx, priceConfirmed } = this.state;
    const { startDisplayIdx, finalDisplayIdx, edgesFinalIdx } = this.getIdxsAndLims();
    if (type === 'forward') {
      if (selectedVendor || selectedCategory || priceConfirmed) {
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
    const { currPg } = this.getIdxsAndLims();
    // const nextStartDisplayIdx = startDisplayIdx + displayLim;
    // const nextFinalDisplayIdx = nextStartDisplayIdx + displayLim - 1;
    // if (nextFinalDisplayIdx > edgesFinalIdx) {
    //   const first = nextFinalDisplayIdx - edgesFinalIdx;
    //   this.props.loadMore(first);
    // }
    // console.log('currPage', currPg);
    // this.setState({ startDisplayIdx: nextStartDisplayIdx, currPg: currPg + 1 }, () => this.scrollToGridTop());
    this.props.history.push({ pathname: this.props.location.pathname, search: `page=${currPg + 1}` });
  };
  handlePageBack = () => {
    const { startDisplayIdx, displayLim, currPg } = this.getIdxsAndLims();
    const backLog = startDisplayIdx - displayLim;
    if (backLog >= 0) {
      this.setState({ currPg: currPg - 1 });
      // this.props.history.goBack();
      this.props.history.push({ pathname: this.props.location.pathname, search: `page=${currPg - 1}` });
    } else {
      this.props.history.push({ pathname: this.props.location.pathname, search: `page=${1}` });
    }
  };
  selectSortMethod = sortMethod => this.setState({ sortMethod: sortMethod });
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
  selectVendor = vendorName => {
    const { selectedVendor } = this.state;
    if (selectedVendor && selectedVendor === vendorName) {
      this.setState({ selectedVendor: null, startDisplayIdx: 0, currPg: 1 });
    } else {
      if (this.props.hasNextPage) this.props.loadMore(100);
      this.setState({ selectedVendor: vendorName, startDisplayIdx: 0, currPg: 1 });
    }
  };
  renderImage = image => {
    const className = image.hasOwnProperty('className') ? image.className : '';
    const options = {
      image: image.link,
      altText: image.name,
      className,
      image_size: '1440X300',
      sources: [
        {
          image: image.link,
          image_size: '1400X300',
          size: '(min-width: 990px)'
        },
        {
          image: image.link,
          image_size: '450X100',
          size: '(max-width: 450px)'
        }
      ]
    };
    return <ResponsivePicture options={options} />;
  };
  calcTotalPages = (totalProducts, lim) => {
    // console.log('TOTAL PRODUCTS::', totalProducts);
    const total = Math.ceil(totalProducts / lim);
    let pages = [];
    let count;
    for (count = 0; count < total; count += 1) {
      pages.push(count + 1);
    }
    // console.log('PAGES::', pages);
    return pages;
  };
  pageClick = page => {
    // console.log('value::', page, currIdx);
    this.setState({ currPg: page });
    this.props.history.push({ pathname: this.props.location.pathname, search: `page=${page}` });
    // const startIdx =
  };
  render() {
    const { priceConfirmed, priceFilterUpper, priceFilterLower, selectedVendor, displayLim } = this.state;
    const { bannerImage, vendors, category, locCategory, loading, loadingCount } = this.props;
    const filtersToPass = { priceConfirmed, priceFilterUpper, priceFilterLower };
    // console.log('THE STATE:;', this.state);
    // console.log('the props:::', this.props);
    const renderMetaData = () => (
      <Helmet
        title={`${settings.app.name}:  Quality Home Fitness Equipment for Sale.`}
        meta={[
          {
            name: 'description',
            content: `Shop local and save!  CA Home Fitness offers the best brands in home fitness equipment at the guaranteed best prices, including treadmills, ellipticals, bikes, rowers, strength training equipment, and more.  `
          },
          {
            name: 'keywords',
            content: `Treadmill, Elliptical machines, Cross Trainer, Exercise Bike, Home Gym, Rower, Commercial Equipment, Life Fitness, Precor, Spirit Fitness, Inspire Fitness, GoFit, Helix`
          }
        ]}
      />
    );

    if (loading || !category || loadingCount) {
      return (
        <PageLayout>
          {renderMetaData()}
          <Loader />
        </PageLayout>
      );
    } else {
      return (
        <PageLayout>
          {renderMetaData()}
          <ScrollToTop />
          {/* <Hero overlayNav={true} image={heroImage} /> */}
          {/* <LowPriceBanner /> */}
          {/* <img src={bannerImage.link} alt={bannerImage.name} /> */}
          {this.renderImage({ link: bannerImage.link, name: bannerImage.name })}
          <PageBreadcrumbs {...this.props} />
          <div className="category-view">
            <div className="category-view__sidebar">
              <div className="category-view__collapse-label">FILTER BY</div>
              <div className="category-view__collapse-menu">
                {'vendors' in this.props && vendors.length > 0 ? (
                  <div className="category-view__collapse">
                    <CollapseMenu label="VENDOR">
                      {vendors.map(({ id, name }) => (
                        <div
                          key={id}
                          className={classnames('category-view__collapse-item', {
                            'category-view__collapse-item--active': selectedVendor === name
                          })}
                          onClick={() => this.selectVendor(name)}
                        >
                          <span className="category-view__collapse-name">{name}</span>
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
            </div>
            <div className="category-view__main">
              <h1 className="header header--upper header--primary category-view__main-header">
                {category.title} Equipment
              </h1>
              <ShopBreadcrumbs for="vendor" vendors={locCategory.vendors} filtersToPass={filtersToPass} />
              <ShopGridSort
                selectSortMethod={this.selectSortMethod}
                handleLimChange={this.handleLimChange}
                {...this.state}
              />
              <ShopGrid
                {...this.state}
                {...this.props}
                category={category}
                products={category.products}
                setFilteredFinalIdx={this.setFilteredFinalIdx}
              />
              <ShopGridPages
                {...this.props}
                {...this.state}
                currentPageIdx={this.state.currentPageIdx}
                pageClick={this.pageClick}
                pages={this.calcTotalPages(this.props.productsCount, displayLim)}
                currentPage={this.props.page}
                isDisabled={this.isPaginationDisabled}
                handlePageForward={this.handlePageForward}
                handlePageBack={this.handlePageBack}
              />
            </div>
          </div>
        </PageLayout>
      );
    }
  }
}

CategoryView.propTypes = {
  categories: PropTypes.array,
  category: PropTypes.object,
  heroImage: PropTypes.object,
  bannerImage: PropTypes.object,
  vendors: PropTypes.array,
  sfy_shop: PropTypes.object,
  loading: PropTypes.bool,
  hasNextPage: PropTypes.bool,
  location: PropTypes.object,
  locCategory: PropTypes.object,
  loadMore: PropTypes.func
};
CategoryView.defaultProps = {
  heroImage: {
    name: 'Shop',
    link: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/shop_hero.png'
  },
  bannerImage: {
    name: 'Low Price Guaranteed',
    link: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/shop_banner.png'
  }
};

export default CategoryView;

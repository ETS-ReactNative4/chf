import React from 'react';
// import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// import classnames from 'classnames';
import { PageLayout, ScrollToTop } from '../../common/components/global';
import SearchBox from './SearchBox';
// import ShopBreadcrumbs from '../../products/components/ShopBreadcrumbs';
import ShopGrid from '../../products/components/ShopGrid';
import ShopGridSort from '../../products/components/ShopGridSort';
import ShopGridPages from '../../products/components/ShopGridPages';
import settings from '../../../../../../settings';
import '../styles/search-view.scss';

class SearchView extends React.Component {
  constructor(props) {
    super(props);
    // const { location } = props;
    this.state = {
      sortMethod: 'featured',
      displayLim: 12,
      startDisplayIdx: 0,
      currPg: 1,
      filteredFinalIdx: null
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
    const { startDisplayIdx, finalDisplayIdx, edgesFinalIdx } = this.getIdxsAndLims();
    if (type === 'forward') {
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
  search = search => {
    console.log(`Search for '${search}' here.`);
  };
  render() {
    const { sfy_shop, searchPhrase, loading } = this.props;
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
    return (
      <PageLayout>
        {renderMetaData()}
        <ScrollToTop />
        <SearchBox {...this.props} />
        {/* <PageBreadcrumbs {...this.props} /> */}
        <div className="search-view">
          <div className="search-view__main">
            <h1 className="header header--upper header--primary search-view__main-header">{`SEARCH RESULTS: ${searchPhrase}`}</h1>
            <ShopGridSort
              selectSortMethod={this.selectSortMethod}
              handleLimChange={this.handleLimChange}
              {...this.state}
            />
            {loading ? (
              <div>Loading...</div>
            ) : (
              <div>
                <ShopGrid
                  {...this.state}
                  {...this.props}
                  products={sfy_shop.products}
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
            )}
          </div>
        </div>
      </PageLayout>
    );
  }
}

SearchView.propTypes = {};
SearchView.defaultProps = {};

export default SearchView;

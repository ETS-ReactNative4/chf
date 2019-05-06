import React from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import '../styles/shop-grid-sort.scss';

class ShopGridSort extends React.Component {
  state = {
    selectedSort: 'featured'
  };
  handleSelect = e =>
    this.setState({ selectedSort: e.target[e.target.selectedIndex].getAttribute('data-sort') }, () => {
      const { selectedSort } = this.state;
      const { selectSortMethod } = this.props;
      selectSortMethod(selectedSort);
    });
  render() {
    const { sortBy, viewNum, handleLimChange } = this.props;
    return (
      <div className="shop-grid-sort">
        {/* TODO: Determine whether data below can be gathered from Shopify RESTful API */}
        {/*<div className="shop-grid-sort__num">
          <span className="shop-grid-sort__num--shown">Showing 1 - 12 </span>
          <span className="shop-grid-sort__num--total">of 12 Products</span>
        </div>*/}
        <div className="shop-grid-sort__filters">
          {'viewNum' in this.props && viewNum.length > 0 ? (
            <div className="shop-grid-sort__filter">
              <span className="shop-grid-sort__label">View: </span>
              <select
                value={this.props.displayLim}
                className="shop-grid-sort__select shop-grid-sort__select--view"
                onChange={e => handleLimChange(e)}
              >
                {viewNum.map((viewOption, i) => (
                  <option key={i} value={`${viewOption}`} className="shop-grid-sort__option">
                    {viewOption}
                  </option>
                ))}
              </select>
            </div>
          ) : null}
          {'sortBy' in this.props && sortBy.length > 0 ? (
            <div className="shop-grid-sort__filter">
              <span className="shop-grid-sort__label">Sort By: </span>
              <select className="shop-grid-sort__select shop-grid-sort__select--sort" onChange={this.handleSelect}>
                {sortBy.map((sortOption, i) => (
                  <option key={i} className="shop-grid-sort__option" data-sort={sortOption.method}>
                    {sortOption.name}
                  </option>
                ))}
              </select>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

ShopGridSort.propTypes = {
  sortBy: PropTypes.array,
  viewNum: PropTypes.array,
  selectSortMethod: PropTypes.func,
  handleLimChange: PropTypes.func,
  displayLim: PropTypes.number
};
ShopGridSort.defaultProps = {
  sortBy: [
    { name: 'Featured', method: 'featured' },
    { name: 'Name (A-Z)', method: 'alpha' },
    { name: 'Name (Z-A)', method: 'alphaReverse' },
    { name: 'Price (Low-High)', method: 'price' },
    { name: 'Price (High-Low)', method: 'priceReverse' }
    // { name: 'Avg. Rating (High-Low)', method: 'rating' },
    // { name: 'Avg. Rating (Low-High)', method: 'ratingReverse' }
  ],
  viewNum: ['12', '24', '48']
};

export default ShopGridSort;

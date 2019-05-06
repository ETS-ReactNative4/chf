import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import '../styles/shop-grid-pages.scss';

class ShopGridPages extends React.Component {
  render() {
    const { currentPageIdx, isDisabled, currPg, handlePageBack, handlePageForward, pages, pageClick } = this.props;
    // console.log('CURR PAGE', pages);

    return (
      <div className="shop-grid-pages">
        <button
          onClick={() => handlePageBack()}
          disabled={isDisabled('back')}
          className={classnames('shop-grid-pages__button', { 'shop-grid-pages__button--disabled': isDisabled('back') })}
        >
          Previous Page
          <FaAngleLeft className="shop-grid-pages__button-icon" />
        </button>
        {/* TODO: Show up to 5 lower pages */}
        {/* {currPg > 1 ? (
          <button disabled className="shop-grid-pages__button shop-grid-pages__button--current">
            {currPg}
          </button>
        ) : null} */}
        {typeof pages !== 'undefined' && pages.length == 1 ? (
          <button className="shop-grid-pages__button shop-grid-pages__button--current">{currPg}</button>
        ) : (
          pages.map(page => {
            // console.log('IDX', idx);
            return (
              <button
                key={page}
                className="shop-grid-pages__button shop-grid-pages__button--current"
                onClick={() => pageClick(page, currentPageIdx)}
              >
                {page}
              </button>
            );
          })
        )}
        {/* TODO: Show up to 5 higher pages */}
        <button
          onClick={() => handlePageForward()}
          disabled={isDisabled('forward')}
          className={classnames('shop-grid-pages__button', {
            'shop-grid-pages__button--disabled': isDisabled('forward')
          })}
        >
          Next Page
          <FaAngleRight className="shop-grid-pages__button-icon" />
        </button>
      </div>
    );
  }
}

ShopGridPages.propTypes = {
  loadMore: PropTypes.func,
  handlePageForward: PropTypes.func,
  handlePageBack: PropTypes.func,
  isDisabled: PropTypes.func,
  currPg: PropTypes.number,
  category: PropTypes.object
};

export default ShopGridPages;

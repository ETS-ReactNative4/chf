import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import '../styles/shop-breadcrumbs.scss';

const location = (id, baseUrl, handle, filters) => {
  const state = { filters };
  const location = { pathname: `${baseUrl}/${handle}`, state, search: '?page=1' };
  if (baseUrl.includes('brands')) location.search = `?$page=${1}`;
  return location;
};

class ShopBreadcrumbs extends React.Component {
  render() {
    const { filtersToPass, for: type } = this.props;
    let crumbsToRender, baseUrl;
    // console.log('TYPE::', type);
    if (type && type == 'brands') {
      crumbsToRender = this.props.vendors;
      baseUrl = '/products/brands';
    } else if (type && type == 'category') {
      crumbsToRender = this.props.categories;
      baseUrl = '/products';
    } else crumbsToRender = [];
    return (
      <div className="shop-breadcrumbs">
        {Array.isArray(crumbsToRender) && crumbsToRender.length > 0 && typeof crumbsToRender[0] !== 'undefined'
          ? crumbsToRender.map(({ id, name, handle }) => (
              <span key={id} className="shop-breadcrumbs__item">
                <Link to={location(id, baseUrl, handle, filtersToPass)} className="shop-breadcrumbs__link">
                  {name}
                </Link>
                <span className="shop-breadcrumbs__separator">/</span>
              </span>
            ))
          : null}
      </div>
    );
  }
}

ShopBreadcrumbs.propTypes = {
  vendors: PropTypes.array,
  categories: PropTypes.array,
  filtersToPass: PropTypes.object,
  for: PropTypes.string
};

export default ShopBreadcrumbs;

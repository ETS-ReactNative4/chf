import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import '../styles/modules/page-breadcrumbs.scss';

const capFirstLtr = str => str[0].toUpperCase() + str.slice(1);
export const toUrlName = str => str.replace(/(\s\/\s|\/|\s|_)/gi, '-').toLowerCase();

const createPath = (pathArr, currIdx) => {
  return pathArr
    .slice(1, currIdx + 1)
    .map(pathItem => toUrlName(pathItem))
    .reduce((acc, curr) => acc + `/${curr}`, '');
};

const formatCrumbs = ({ location, match, ...rest }) => {
  const { pathname: path } = location;
  const { params } = match;
  const subCrumbs = path
    .split('/')
    .splice(1)
    .map((pathItem, i, arr) => {
      if (pathItem.includes('-')) {
        if (params && 'category' in params && arr[i - 1] === 'products') return rest.category.title;
        return pathItem
          .split('-')
          .map(item => capFirstLtr(item))
          .join(' ');
      }
      return capFirstLtr(pathItem);
    });
  return ['Home', ...subCrumbs];
};

const PageBreadcrumbs = props => {
  return (
    <div className="page-breadcrumbs">
      {formatCrumbs(props).map((crumb, i, arr) => {
        if (i !== arr.length - 1) {
          if (crumb === 'Brands') {
            return (
              <span key={crumb}>
                <Link to={'/brands'} className="page-breadcrumbs__link">
                  {crumb}
                </Link>
                <span className="page-breadcrumbs__separator">/</span>
              </span>
            );
          } else {
            return (
              <span key={crumb}>
                <Link to={i === 0 ? '/' : createPath(arr, i)} className="page-breadcrumbs__link">
                  {crumb}
                </Link>
                <span className="page-breadcrumbs__separator">/</span>
              </span>
            );
          }
        }
        return (
          <span key={crumb} className="page-breadcrumbs__current">
            {crumb}
          </span>
        );
      })}
    </div>
  );
};

PageBreadcrumbs.propTypes = {
  location: PropTypes.object
};

export default withRouter(PageBreadcrumbs);

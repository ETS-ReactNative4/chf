import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import SearchView from '../components/SearchView';
import { FILTERED_PRODUCTS_QUERY } from '../../common/schema';

// handleClick = () => {
//   const toUrlName = str => str.trim().replace(/[/\s_]+/gi, '-');
//   const term = toUrlName('Recumbent Bike');
//   console.log('term', term);
//   this.props.history.push({ pathname: '/search', search: `?q=${term}` });
// };

class Search extends React.Component {
  render() {
    return <SearchView {...this.props} />;
  }
}

const SearchWithApollo = compose(FILTERED_PRODUCTS_QUERY())(Search);

Search.propTypes = {
  location: PropTypes.object,
  search: PropTypes.string
};

export default SearchWithApollo;

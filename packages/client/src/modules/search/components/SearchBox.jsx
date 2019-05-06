import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { Route } from 'react-router-dom';
import '../styles/search-box.scss';

class SearchBox extends React.Component {
  state = {
    searchIsActive: false,
    searchQuery: ''
  };
  onKeyDown = (e, history) => {
    const { searchIsActive } = this.state;
    // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    if (searchIsActive && e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      this.handleSubmit(history);
    }
  };
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      const { searchQuery } = this.state;
      if (searchQuery !== '') this.setState({ searchIsActive: true });
      else this.setState({ searchIsActive: false });
    });
  };
  handleSubmit = history => {
    const { searchQuery } = this.state;
    this.setState({ searchQuery: '' });
    const formattedQueryStr = searchQuery.trim().replace(/[/\s_]+/gi, '-');
    history.push(`/search?$q=${formattedQueryStr}`);
  };
  render() {
    const { searchQuery } = this.state;
    return (
      <Route
        render={({ history }) => (
          <div className="search-box">
            <input
              className="search-box__input"
              type="search"
              name="searchQuery"
              placeholder="Search for products"
              value={searchQuery}
              onChange={this.handleInputChange}
              onKeyDown={e => this.onKeyDown(e, history)}
            />

            <button className="button button--transparent search-box__link" onClick={() => this.handleSubmit(history)}>
              <FaSearch size={'1em'} />
              <span hidden>Search</span>
            </button>
          </div>
        )}
      />
    );
  }
}

SearchBox.propTypes = {
  vendors: PropTypes.array,
  categories: PropTypes.array,
  filtersToPass: PropTypes.object,
  for: PropTypes.string
};

export default SearchBox;

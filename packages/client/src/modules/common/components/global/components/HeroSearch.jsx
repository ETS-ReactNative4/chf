import React from 'react';
import PropTypes from 'prop-types';
import '../styles/modules/hero-search.scss';

class HeroSearch extends React.Component {
  state = {
    resourceSearch: ''
  };

  handleInput = e => this.setState({ [e.target.name]: e.target.value });
  handleSearch = e => {
    const { resourceSearch } = this.state;
    const { search } = this.props;
    e.preventDefault();
    search(resourceSearch);
    this.setState({ resourceSearch: '' });
  };

  render() {
    // const {  } = this.props;
    const { resourceSearch } = this.state;
    return (
      <form className="hero-search" onSubmit={this.handleSearch}>
        <label htmlFor="resourceSearch" className="hero-search__label">
          Begin by searching a topic or locate information by vendor.
        </label>
        <div className="hero-search__input-group">
          <input
            type="search"
            placeholder="Search"
            name="resourceSearch"
            onChange={this.handleInput}
            value={resourceSearch}
            id="resourceSearch"
            className="hero-search__input"
          />
          <button
            type="submit"
            className="button button--primary button--padded hero-search__button hero-search__button--submit"
          >
            Search
          </button>
        </div>
      </form>
    );
  }
}

HeroSearch.propTypes = {
  search: PropTypes.func
};
HeroSearch.defaultProps = {};

export default HeroSearch;

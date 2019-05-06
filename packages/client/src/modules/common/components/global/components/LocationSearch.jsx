import React from 'react';
import PropTypes from 'prop-types';
import { FaLocationArrow, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import '../styles/modules/location-search.scss';

class LocationSearch extends React.Component {
  state = {
    search: '',
    searching: false
  };
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  getCurrentLocation = e => {
    e.preventDefault();
    this.setState({ searching: true }, () => {
      // Once state is set to searching...
      console.log('Get user location here');
      this.setState({ search: 'Denver, CO' }, () => {
        // const { searchLocation } = this.props;
        const { search } = this.state;
        console.log(`Search ${search} here`);
        // searchLocation(search);
        this.setState({ search: '', searching: false });
      });
    });
  };
  submitLocation = e => {
    e.preventDefault();
    // const { searchLocation } = this.props;
    const { search } = this.state;
    console.log(`Search ${search} here`);
    // searchLocation(search);
    this.setState({ search: '' });
  };
  render() {
    const { search } = this.state;
    return (
      <section className="location-search">
        <form onSubmit={this.submitLocation} className="location-search__input-container">
          <FaMapMarkerAlt size="1.5em" className="location-search__icon location-search__icon--pin" />
          <input
            onChange={this.handleInput}
            type="text"
            className="location-search__input"
            name="search"
            value={search}
          />
          <button type="submit" className="location-search__input-icon">
            <FaSearch size="1.05em" className="location-search__icon location-search__icon--search" />
            <span hidden>Search</span>
          </button>
        </form>
        <button onClick={this.getCurrentLocation} className="location-search__submit">
          <FaLocationArrow className="location-search__icon location-search__icon--arrow" />
          <span>USE MY CURRENT LOCATION</span>
        </button>
      </section>
    );
  }
}

LocationSearch.propTypes = {
  pins: PropTypes.array,
  searchLocation: PropTypes.func
};

LocationSearch.defaultProps = {
  pins: [
    {
      lat: '',
      lon: ''
    }
  ]
};

export default LocationSearch;

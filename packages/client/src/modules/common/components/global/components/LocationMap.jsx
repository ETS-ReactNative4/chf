import React from 'react';
import PropTypes from 'prop-types';
import '../styles/modules/location-map.scss';

class LocationMap extends React.Component {
  render() {
    // const { pins } = this.props;
    return (
      <section className="location-map">
        <img alt="map" src="https://via.placeholder.com/1000x1000" />
      </section>
    );
  }
}

LocationMap.propTypes = {
  pins: PropTypes.array
};

LocationMap.defaultProps = {
  pins: [
    {
      lat: '',
      lon: ''
    }
  ]
};

export default LocationMap;

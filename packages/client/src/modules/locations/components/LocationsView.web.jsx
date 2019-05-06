import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { FaLocationArrow } from 'react-icons/fa';
import {
  PageLayout,
  ScrollToTop,
  LocationList
  // LocationMap,
  // LocationSearch
} from '../../common/components/global';
import settings from '../../../../../../settings';
import Map from './Map';
import SearchBox from './SearchBox';
import '../styles/locations-view.scss';

const LoadingIcon = () => (
  <div className="loading-wrapper">
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

class LocationsView extends React.Component {
  state = {
    selectedLocation: null,
    isValidAddress: true,
    isiOSDevice: null,
    loading: false,
    search: false,
    markers: [],
    bounds: {
      NorthEast: { lat: 34.2, lng: -118.25 },
      SouthWest: { lat: 33.5, lng: -116.7 }
    },
    center: {
      lat: 33.9,
      lng: -118.1
    },
    zoom: 10
  };
  componentDidMount() {
    // console.log('state?', this.state);
    // TODO: Quick Fix for Scrolling Issue
    // window.scrollTo(0, 0);
    if (typeof window !== 'undefined') {
      this.isiOSDevice();
    }
    this.setState({ markers: this.props.locations });
  }
  selectLocation = locationAddress => this.setState({ selectedLocation: locationAddress });
  resetBounds = position => {
    if (this.state.center.lat !== 0) {
      return new google.maps.LatLngBounds(position);
    }
    // check if center is different
    // return new bounds to state.bounds
  };
  invalidAddress = bool => {
    this.setState({
      isValidAddress: bool
    });
    // console.log('updated?', this.state.isValidAddress);
  };
  clearLocation = () => this.setState({ selectedLocation: null });
  loadPosition = async () => {
    this.setState({ loading: true });
    try {
      const position = await this.getCurrentPosition();

      if (position.code === 1) throw new Error(position.message);

      const { latitude, longitude } = position.coords;

      const dealer = this.getClosestDealer(this.props.locations, { lat: latitude, lng: longitude });
      const bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(Math.min(latitude, dealer.lat), Math.min(longitude, dealer.lng)),
        new google.maps.LatLng(Math.max(latitude, dealer.lat), Math.max(longitude, dealer.lng))
      );
      this.setState({
        search: true,
        bounds,
        center: {
          lat: latitude,
          lng: longitude
        },
        zoom: 10,
        loading: false,
        selectedLocation: dealer.address_1
      });
    } catch (error) {
      this.setState({ loading: false });
      console.log(error);
    }
  };

  getCurrentPosition = (options = {}) => {
    return new Promise((resolve, reject) => {
      window.navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  updateMap = (location, bounds, center) => {
    this.setState({ location, bounds, center, search: true, selectedLocation: location.address_1 });
  };

  updateMarkers = markers => {
    this.setState({ markers });
  };
  calculateDistance(center, markers) {
    const lat1 = center.lat;
    const lon1 = center.lng;

    const lat2 = markers.markerLat;
    const lon2 = markers.markerLng;

    const R = 6371e3; // earth radius in meters
    const φ1 = lat1 * (Math.PI / 180);
    const φ2 = lat2 * (Math.PI / 180);
    const Δφ = (lat2 - lat1) * (Math.PI / 180);
    const Δλ = (lon2 - lon1) * (Math.PI / 180);

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * (Math.sin(Δλ / 2) * Math.sin(Δλ / 2));

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;
    return distance; // in meters
  }
  getClosestDealer = (dealers, center) => {
    if (dealers && center) {
      let distance = 10.0e15;
      let markerDistance;
      dealers.forEach(({ node }) => {
        // console.log('/NODE::', node);
        const { lat: markerLat, lng: markerLng } = node;
        // console.log('MARKERS:::', markerLat, markerLng);
        const distanceFromCenter = this.calculateDistance(center, { markerLat, markerLng });
        if (distanceFromCenter < distance) {
          distance = distanceFromCenter;
          markerDistance = { ...node, distanceFromCenter };
        }
      });
      return markerDistance;
    }
  };
  isiOSDevice = () => {
    this.setState({
      isiOSDevice: !!window.navigator.platform.match(/iPhone|iPod|iPad/)
    });
  };
  render() {
    // const {  } = this.props;
    const { isiOSDevice, selectedLocation } = this.state;
    const { locations } = this.props;
    // console.log('THE LOCATIONS::', locations);
    let closest; // eslint-disable-line no-unused-vars
    if (this.state.search) {
      closest = this.getClosestDealer(this.props.locations, this.state.center);
    }

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
    if (this.props.loadingLocations) {
      return (
        <PageLayout>
          <div>Loading</div>
        </PageLayout>
      );
    }
    return (
      <PageLayout>
        {renderMetaData()}
        <ScrollToTop />
        <div className="locations-view">
          <div className="locations-view__sidebar">
            <div className="locations-view__search">
              {/* <LocationSearch /> */}
              <SearchBox
                dealers={this.props.locations}
                updateMap={this.updateMap}
                closestDealer={this.getClosestDealer}
                zoom={this.state.zoom}
                invalidAddress={this.invalidAddress}
              >
                {!this.state.loading ? (
                  <button className="location-search__submit" onClick={this.loadPosition}>
                    <FaLocationArrow className="location-search__icon location-search__icon--arrow" />
                    Use My Current Location
                  </button>
                ) : (
                  <LoadingIcon />
                )}
              </SearchBox>
            </div>
            <div className="locations-view__list">
              <LocationList
                locations={locations}
                selectLocation={this.selectLocation}
                selectedLocation={selectedLocation}
              />
            </div>
          </div>
          <div className="locations-view__map">
            {/* <LocationMap /> */}
            <Map
              markers={this.props.locations}
              bounds={this.state.bounds}
              updateMarkers={this.updateMarkers}
              center={this.state.center}
              zoom={this.state.zoom}
              search={this.state.search}
              fullscreenControl={isiOSDevice ? false : true}
              clearLocation={this.clearLocation}
              selectLocation={this.selectLocation}
              selectedLocation={selectedLocation}
            />
          </div>
        </div>
      </PageLayout>
    );
  }
}

LocationsView.propTypes = {
  locations: PropTypes.array,
  loadingLocations: PropTypes.bool
};
LocationsView.defaultProps = {};

export default LocationsView;

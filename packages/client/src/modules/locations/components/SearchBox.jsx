import React from 'react';
import { compose, withProps, lifecycle } from 'recompose';
import { withScriptjs } from 'react-google-maps';
import StandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

const SearchBox = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=AIzaSyCb-6kBhsPsodgVOuaG6AubbqcmFx3sJiA&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div className={'map-loading-ele'} style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />
  }),
  lifecycle({
    componentWillMount() {
      const refs = {};

      this.setState({
        places: [],
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          const { dealers } = this.props;
          try {
            const center = { lat: places[0].geometry.location.lat(), lng: places[0].geometry.location.lng() };
            const dealer = this.props.closestDealer(dealers, center);
            // console.log('closest dealer', dealer);
            const bounds = new google.maps.LatLngBounds(
              new google.maps.LatLng(Math.min(center.lat, dealer.lat), Math.min(center.lng, dealer.lng)),
              new google.maps.LatLng(Math.max(center.lat, dealer.lat), Math.max(center.lng, dealer.lng))
            );
            this.props.updateMap(dealer, bounds, center);
            this.props.invalidAddress(true);
            this.props.selectLocation(dealer.address_1);
          } catch (e) {
            // console.log('error!', e);
            // console.log('props!!!', this.props);
            this.props.invalidAddress(false);
          }
        }
      });
    }
  }),
  withScriptjs
)(props => (
  <section className={'location-search'} data-standalone-searchbox="">
    <StandaloneSearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      onPlacesChanged={props.onPlacesChanged}
      defaultZoom={props.zoom}
    >
      <div className="location-search__input-container">
        <FaMapMarkerAlt size="1.5em" className="location-search__icon location-search__icon--pin" />
        <input type="search" id="mapSearch" placeholder="" className="location-search__input" />
        <button
          className="location-search__input-icon"
          onClick={() => {
            // const mapSearch = document.getElementById('mapSearch');
            // var e = new Event('keydown');
            // e.keyCode = 13;
            // // e.which = e.keyCode;
            // // e.altKey = false;
            // // e.ctrlKey = true;
            // // e.shiftKey = false;
            // // e.metaKey = false;
            // // e.bubbles = true;
            // window.dispatchEvent(e);
            // console.log('mapSearch', mapSearch);
            // props.onPlacesChanged;
          }}
          disabled
        >
          <FaSearch size="1.05em" className="location-search__icon location-search__icon--search" />
          <span hidden>Search</span>
        </button>
      </div>
    </StandaloneSearchBox>
    {props.children}
  </section>
));

export default SearchBox;

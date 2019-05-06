import React from 'react';
import { compose, withProps, withStateHandlers, lifecycle } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
// import { FaLocationArrow, FaMapMarkerAlt } from 'react-icons/fa';
import UserLocation from '../assets/UserLocation.png';
import MapMarker from '../assets/MapMarker.png';
import '../styles/map.scss';

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=AIzaSyCb-6kBhsPsodgVOuaG6AubbqcmFx3sJiA&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div className={'map-loading-ele'} style={{ height: `100%` }} />,
    containerElement: <div className={'map__container'} style={{ height: `100%` }} />,
    mapElement: <div className={'map__map-element'} style={{ height: `100%` }} />
  }),
  withStateHandlers(() => ({ isOpen: null }), {
    onToggleOpen: () => marker => ({
      isOpen: marker.street
    })
  }),
  lifecycle({
    componentWillMount() {
      const refs = {};
      this.setState({
        onMapMounted: ref => {
          refs.map = ref;
        },
        onBoundsChanged: () => {
          // probs need to bring this back long term
        },
        onPlacesChanged: bounds => {
          // console.log('BOUNDS:;', bounds);
          // if (bounds.j.j === bounds.j.l && bounds.l.j === bounds.l.l) {
          //   const center = this.props.center;
          //   const { dealers } = this.props;
          //   const dealer = this.props.closestDealer(dealers, center);
          //   refs.map.fitBounds(bounds.extend({ lat: dealer.lat, lng: dealer.lng }));
          // } else {
          refs.map.fitBounds(bounds);
          // }
        }
      });
    },
    componentWillReceiveProps(nextProps) {
      if (nextProps.center !== this.props.center) {
        this.state.onPlacesChanged(nextProps.bounds);
      }
    }
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  if (props.selectedLocation) props.onToggleOpen({ street: props.selectedLocation });

  return (
    <GoogleMap
      options={{
        fullscreenControl: props.fullscreenControl
      }}
      ref={props.onMapMounted}
      onBoundsChanged={props.onBoundsChanged}
      defaultZoom={props.zoom}
      defaultCenter={props.center}
    >
      {props.markers
        ? props.markers.map(({ node: marker }) => {
            // console.log('MARKER::', parseFloat(marker.lat));
            return marker ? (
              <Marker
                key={marker.id}
                // ref={c => (this[`marker_${marker.id}`] = c)}
                icon={{ url: MapMarker }}
                position={{ lat: parseFloat(marker.lat), lng: parseFloat(marker.lng) }}
                onClick={() => {
                  props.selectLocation(marker.street);
                  props.onToggleOpen(marker);
                }}
              >
                {props.isOpen === marker.street && (
                  <InfoWindow
                    className={'map__info-window'}
                    onCloseClick={() => {
                      props.clearLocation();
                      props.onToggleOpen({ street: null });
                    }}
                  >
                    <div className={'map__info-window-text-container'} data-marker-id={marker.id}>
                      <p className={'map__info-window-text'}>{marker.name}</p>
                      <p className={'map__info-window-text'}>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`https://www.google.com/maps/dir/?api=1&destination=${marker.street.replace(
                            ' ',
                            '+'
                          )}+${marker.city.replace(' ', '+')}+${marker.country.replace(' ', '+')}`}
                        >
                          {marker.street} {marker.address_2 ? `, ${marker.address_2}` : null}
                          <br />
                          {marker.city}, {marker.state} {marker.zip}
                        </a>
                      </p>
                      <p className={'map__info-window-text'}>
                        <a href={`tel:${marker.phone}`}>{marker.phone}</a>
                      </p>
                      <p className={'map__info-window-text'}>
                        <a href={`mailto:${marker.email}`}>{marker.email}</a>
                      </p>
                      <p className={'map__info-window-text'}>
                        <a
                          className={'map__info-window-text'}
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`https://${marker.website}`}
                        >
                          {marker.website}
                        </a>
                      </p>
                    </div>
                  </InfoWindow>
                )}
              </Marker>
            ) : null;
          })
        : null}
      {props.search && props.center ? (
        <Marker
          position={props.center}
          icon={{
            url: UserLocation
          }}
        />
      ) : null}
    </GoogleMap>
  );
});

export default Map;

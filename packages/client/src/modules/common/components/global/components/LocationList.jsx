import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
// import { MdChevronRight } from 'react-icons/md';
import settings from '../../../../../../../../settings';
import '../styles/modules/location-list.scss';

class LocationList extends React.Component {
  state = {
    width: null,
    height: null
  };
  componentDidMount() {
    this.measureLocationList();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.measureLocationList, false);
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.width !== nextState.width || this.state.height !== nextState.height || this.props !== nextProps;
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.measureLocationList, false);
  }
  saveRef = ref => (this.containerNode = ref);
  measureLocationList = () => {
    const { clientWidth, clientHeight } = this.containerNode;
    this.setState({
      width: clientWidth,
      height: clientHeight
    });
  };

  render() {
    const { locations, selectLocation, selectedLocation } = this.props;
    const { width } = this.state;
    return (
      <section
        ref={this.saveRef}
        className={classnames(
          'location-list',
          {
            'location-list--xsmall': width < settings.breakpoints.small
          },
          {
            'location-list--small': width >= settings.breakpoints.small && width < settings.breakpoints.medium
          },
          {
            'location-list--medium': width >= settings.breakpoints.medium && width < settings.breakpoints.large
          },
          {
            'location-list--large': width >= settings.breakpoints.large
          }
        )}
      >
        {'locations' in this.props && locations.length > 0 ? (
          locations.map(({ node }) => (
            <button
              key={node.id}
              className={classnames('location-list__item', {
                'location-list__item--selected': node.street === selectedLocation
              })}
              onClick={() => {
                selectLocation(node.street);
              }}
            >
              <FaMapMarkerAlt size="1.5em" className="location-list__icon location-list__icon--pin" />
              <address className="location-list__address">
                <h5 className="header header--secondary location-list__address-header">{node.name}</h5>
                <div className="location-list__address-item">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={`https://www.google.com/maps/dir/?api=1&destination=${node.street.replace(
                      ' ',
                      '+'
                    )}+${node.city.replace(' ', '+')}+${node.country.replace(' ', '+')}`}
                  >
                    {node.street}
                  </a>
                </div>
                <div className="location-list__address-item">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={`https://www.google.com/maps/dir/?api=1&destination=${node.street.replace(
                      ' ',
                      '+'
                    )}+${node.city.replace(' ', '+')}+${node.country.replace(' ', '+')}`}
                  />
                  {node.city}, {node.state} {node.zip}
                </div>
                <div className="location-list__address-item">
                  Phone: <a href={`tel:${node.phone}`}>{node.phone}</a>
                </div>
                <div className="location-list__address-item">{node.hours}</div>
              </address>
              <Link to={`/locations/${node.handle}`} className="location-list__arrow" />
              {/* <MdChevronRight size="2em" className="location-list__icon location-list__icon--arrow" /> */}
            </button>
          ))
        ) : (
          <span>No location(s) to display</span>
        )}
      </section>
    );
  }
}

LocationList.propTypes = {
  locations: PropTypes.array,
  selectLocation: PropTypes.func,
  selectedLocation: PropTypes.string
};
LocationList.defaultProps = {};

export default LocationList;

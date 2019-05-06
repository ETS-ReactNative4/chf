import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { PageLayout, ScrollToTop, Article, Hero } from '../../common/components/global';
import settings from '../../../../../../settings';
import '../styles/location-info.scss';
import Loader from '../../common/components/global/components/Loader';

class LocationInfo extends React.Component {
  render() {
    const { loadingLocation, locationObj } = this.props;

    const renderMetaData = () => (
      // <Helmet
      //   title={`${settings.app.name} - ${locationObj.city}`}
      //   meta={[
      //     {
      //       name: 'description',
      //       content: `${settings.app.name} - ${locationObj.city} page`
      //     }
      //   ]}
      // />
      <Helmet
        title={`${locationObj.name}:  Quality Home Fitness Equipment for Sale.`}
        meta={[
          {
            name: 'description',
            content: `${locationObj.description}`
          },
          {
            name: 'keywords',
            content: `Treadmill, Elliptical machines, Cross Trainer, Exercise Bike, Home Gym, Rower, Commercial Equipment, Life Fitness, Precor, Spirit Fitness, Inspire Fitness, GoFit, Helix`
          }
        ]}
      />
    );
    if (loadingLocation) {
      return (
        <PageLayout>
          {typeof window !== 'undefined' && !loadingLocation ? renderMetaData() : null}
          <Loader />
        </PageLayout>
      );
    }
    return (
      <PageLayout>
        {renderMetaData()}
        <ScrollToTop />
        <Hero
          overlayNav={false}
          image={{
            name: locationObj.city,
            link: locationObj.image_url
          }}
        />
        <div className="location-info">
          <Article
            article={{
              title: locationObj.city,
              locationInfo: locationObj
            }}
          />
        </div>
      </PageLayout>
    );
  }
}

LocationInfo.propTypes = {
  loadingLocation: PropTypes.bool,
  locationObj: PropTypes.object
};

export default LocationInfo;

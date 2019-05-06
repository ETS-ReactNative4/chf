import React from 'react';
// import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// import { Link } from 'react-router-dom';
import { PageLayout, ScrollToTop, LinkList } from '../../common/components/global';
import settings from '../../../../../../settings';
import '../styles/maintenance-view.scss';

class MaintenanceView extends React.Component {
  render() {
    // const {  } = this.props;

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
    const linkList = [
      { name: 'Contact Us', location: '/contact', type: 'internal' },
      // { name: 'Services', location: '/services', type: 'internal' },
      { name: 'Maintenance & Repairs', location: '/maintenance', type: 'internal' },
      { name: 'Delivery & Installations', location: '/delivery', type: 'internal' }
    ];
    return (
      <PageLayout>
        {renderMetaData()}
        <ScrollToTop />
        <div className="maintenance-view sidebar-layout">
          <section className="maintenance-view__sidebar sidebar-layout__sidebar">
            <LinkList links={linkList} />
          </section>
          <section className="maintenance-view__content sidebar-layout__content">
            <h1 className="sidebar-layout__header">Maintenance &amp; Repairs</h1>
            <p className="sidebar-layout__text">
              For service in L.A. or Orange County please contact AK Service at
              <a href="tel:+13105597338"> (310) 559-7338</a>. Or L.A. County Xtrem Fitness Service
              <a href="tel:+18666650152"> (866) 665-0152</a>.
            </p>
          </section>
        </div>
      </PageLayout>
    );
  }
}

MaintenanceView.defaultProps = {};
MaintenanceView.propTypes = {};

export default MaintenanceView;

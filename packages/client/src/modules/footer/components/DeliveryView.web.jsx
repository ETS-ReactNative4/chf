import React from 'react';
// import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// import { Link } from 'react-router-dom';
import { PageLayout, ScrollToTop, LinkList } from '../../common/components/global';
import settings from '../../../../../../settings';
import '../styles/delivery-view.scss';

class DeliveryView extends React.Component {
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
        <div className="delivery-view sidebar-layout">
          <section className="delivery-view__sidebar sidebar-layout__sidebar">
            <LinkList links={linkList} />
          </section>
          <section className="delivery-view__content sidebar-layout__content">
            <h1 className="sidebar-layout__header">Delivery &amp; Installations</h1>
            <p className="sidebar-layout__text">Information coming soon.</p>
          </section>
        </div>
      </PageLayout>
    );
  }
}

DeliveryView.defaultProps = {};
DeliveryView.propTypes = {};

export default DeliveryView;

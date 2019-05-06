import React from 'react';
// import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// import { Link } from 'react-router-dom';
import { PageLayout, ScrollToTop, LinkList } from '../../common/components/global';
import settings from '../../../../../../settings';
import '../styles/warranty-view.scss';

class WarrantyView extends React.Component {
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
      { name: 'Warranty', location: '/warranty', type: 'internal' },
      { name: 'Financing', location: '/financing', type: 'internal' },
      { name: 'Terms & Conditions', location: '/terms', type: 'internal' }
    ];
    return (
      <PageLayout>
        {renderMetaData()}
        <ScrollToTop />
        <div className="warranty-view sidebar-layout">
          <section className="warranty-view__sidebar sidebar-layout__sidebar">
            <LinkList links={linkList} />
          </section>
          <section className="warranty-view__content sidebar-layout__content">
            <h1 className="sidebar-layout__header">Warranty</h1>
            <p className="sidebar-layout__text">
              New product manufacturer warranties vary. CA Home Fitness may be able to sell you an extended warranty for
              your new product. Warranties may also be available for purchase on used fitness equipment purchased at CA
              Home Fitness. Please see stores for details.
            </p>
          </section>
        </div>
      </PageLayout>
    );
  }
}

WarrantyView.defaultProps = {};
WarrantyView.propTypes = {};

export default WarrantyView;

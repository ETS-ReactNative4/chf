import React from 'react';
// import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// import { Link } from 'react-router-dom';
import { PageLayout, ScrollToTop, LinkList } from '../../common/components/global';
import settings from '../../../../../../settings';
import '../styles/terms-view.scss';

class TermsView extends React.Component {
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
        <div className="terms-view sidebar-layout">
          <section className="terms-view__sidebar sidebar-layout__sidebar">
            <LinkList links={linkList} />
          </section>
          <section className="terms-view__content sidebar-layout__content">
            <h1 className="sidebar-layout__header">Terms &amp; Conditions</h1>
            <p className="sidebar-layout__text">
              Merchandise may be returned within 15 days for a 20% restocking fee. Special order items are
              nonrefundable. Delivery and Pickup fees may apply to all returns. All cardio equipment is pre-assembled
              and tested prior to delivery and installation. Our standard delivery and installation area is within 25
              miles of your local CA Home Fitness store.
            </p>
          </section>
        </div>
      </PageLayout>
    );
  }
}

TermsView.defaultProps = {};
TermsView.propTypes = {};

export default TermsView;

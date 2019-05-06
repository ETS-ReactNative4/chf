import React from 'react';
// import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// import { Link } from 'react-router-dom';
import { PageLayout, ScrollToTop, LinkList } from '../../common/components/global';
import settings from '../../../../../../settings';
import '../styles/financing-view.scss';

class FinancingView extends React.Component {
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
        <div className="financing-view sidebar-layout">
          <section className="financing-view__sidebar sidebar-layout__sidebar">
            <LinkList links={linkList} />
          </section>
          <section className="financing-view__content sidebar-layout__content">
            <h1 className="sidebar-layout__header">Financing</h1>
            <p className="sidebar-layout__text">
              On approved credit CA Home Fitness offers financing through GreenSky and Synchrony Financial. Minimum
              purchase amount may apply. Please see store for details.
            </p>
          </section>
        </div>
      </PageLayout>
    );
  }
}

FinancingView.defaultProps = {};
FinancingView.propTypes = {};

export default FinancingView;

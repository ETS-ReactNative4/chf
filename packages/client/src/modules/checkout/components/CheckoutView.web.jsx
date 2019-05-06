import React from 'react';
// import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { PageLayout, ScrollToTop, CheckoutForm } from '../../common/components/global';
import settings from '../../../../../../settings';
import '../styles/checkout-view.scss';

class CheckoutView extends React.Component {
  render() {
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

    return (
      <PageLayout>
        {renderMetaData()}
        <ScrollToTop />
        <div className="checkout-view">
          <div className="checkout-view__checkout-form-title">
            <h2 className="header header--primary header--centered header--upper">Checkout - Shipping Address</h2>
          </div>
          <div className="checkout-view__checkout-form">
            <CheckoutForm {...this.props} />
          </div>
        </div>
      </PageLayout>
    );
  }
}

CheckoutView.propTypes = {};
CheckoutView.defaultProps = {};

export default CheckoutView;

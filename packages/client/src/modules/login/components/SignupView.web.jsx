import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { PageLayout, ScrollToTop, SignupForm } from '../../common/components/global';
import settings from '../../../../../../settings';
import '../styles/signup-view.scss';

class SignupView extends React.Component {
  render() {
    const { registerRemote, registerLocal } = this.props;
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
        <div className="signup-view">
          <div className="login-view__login-form-title">
            <h2 className="header header--primary header--centered header--upper">Sign Up</h2>
          </div>
          <div className="signup-view__signup-form">
            <SignupForm registerRemote={registerRemote} registerLocal={registerLocal} />
          </div>
        </div>
      </PageLayout>
    );
  }
}

SignupView.defaultProps = {};
SignupView.propTypes = {
  registerRemote: PropTypes.func,
  registerLocal: PropTypes.func
};

export default SignupView;

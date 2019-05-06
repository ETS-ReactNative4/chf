import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { PageLayout, ScrollToTop, SigninForm } from '../../common/components/global';
import settings from '../../../../../../settings';
import '../styles/login-view.scss';

class SigninView extends React.Component {
  render() {
    const renderMetaData = () => (
      <Helmet
        title={`Sign in - ${settings.app.name}`}
        meta={[
          {
            name: 'description',
            content: `Sign in to shop and save on fitness equipment with California Home Fitness.  Fast delivery on treadmills, bikes, ellipticals and more.`
          },
          {
            name: 'keywords',
            content: `Treadmill, Elliptical machines, Cross Trainer, Exercise Bike, Home Gym, Rower, Commercial Equipment, Life Fitness, Precor, Spirit Fitness, Inspire Fitness, GoFit, Helix`
          }
        ]}
      />
    );
    const { login, authenticateAdmin } = this.props;
    return (
      <PageLayout>
        {renderMetaData()}
        <ScrollToTop />
        <div className="login-view">
          <div className="login-view__login-form-title">
            <h2 className="header header--primary header--centered header--upper">Sign In</h2>
          </div>
          <div className="login-view__login-form">
            <SigninForm login={login} authenticateAdmin={authenticateAdmin} />
          </div>
        </div>
      </PageLayout>
    );
  }
}

SigninView.defaultProps = {};
SigninView.propTypes = {
  login: PropTypes.func,
  authenticateAdmin: PropTypes.func
};

export default SigninView;

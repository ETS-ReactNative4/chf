import React from 'react';
import PropTypes from 'prop-types';
// import Helmet from 'react-helmet';
// import classnames from 'classnames';
import { compose } from 'react-apollo';
import { IoMdExit } from 'react-icons/io';
import { withRouter } from 'react-router-dom';
// import {  } from '../../common/components/global';
// import settings from '../../../../../../settings';
import '../styles/profile-overview.scss';
import { DELETE_TOKEN, CUSTOMER_QUERY, LOGOUT_ADMIN, CURRENT_USER_QUERY } from '../../common/schema';

class ProfileOverview extends React.Component {
  signOut = async () => {
    if (typeof window !== 'undefined') {
      await this.props.deleteRemoteToken();
      await this.props.refetch({ customerAccessToken: '' });
      await this.props.logoutAdmin();

      const { location, history } = this.props;
      if (location.pathname.includes('/profile')) {
        history.push('/');
      }
    }
  };
  render() {
    // const {  } = this.state;
    // const {  } = this.props;
    console.log('this.props', this.props);
    return (
      <section className="profile-overview">
        <span>Hello, welcome to your profile!</span>
        <button className="navbar__trigger-item navbar__trigger-item--profile" onClick={() => this.signOut()}>
          <IoMdExit size="1.5em" className="navbar__trigger-item-icon" />
          Sign Out
        </button>
      </section>
    );
  }
}

const ProfileOverviewWithApollo = compose(
  CURRENT_USER_QUERY(),
  CUSTOMER_QUERY('network-only'),
  DELETE_TOKEN(),
  LOGOUT_ADMIN()
)(ProfileOverview);

ProfileOverview.propTypes = {
  deleteRemoteToken: PropTypes.func,
  refetch: PropTypes.func,
  logoutAdmin: PropTypes.func
};
ProfileOverview.defaultProps = {};

export default withRouter(ProfileOverviewWithApollo);

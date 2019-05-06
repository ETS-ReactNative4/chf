import React from 'react';
// import PropTypes from 'prop-types';
import { compose, withApollo } from 'react-apollo';
import ProfileView from '../components/ProfileView';
import { ADMIN_PRODUCTS_QUERY, CURRENT_USER_QUERY, DELETE_TOKEN, LOGOUT_ADMIN } from '../../common/schema';

class Profile extends React.Component {
  render() {
    return <ProfileView {...this.props} />;
  }
}

const ProfileWithApollo = compose(
  withApollo,
  DELETE_TOKEN(),
  LOGOUT_ADMIN(),
  ADMIN_PRODUCTS_QUERY(),
  CURRENT_USER_QUERY()
)(Profile);

Profile.propTypes = {};
Profile.defaultProps = {};

export default ProfileWithApollo;

import React from 'react';
// import PropTypes from 'prop-types';
// import Helmet from 'react-helmet';
// import classnames from 'classnames';
import { MdLock } from 'react-icons/md';
// import {  } from '../../common/components/global';
// import settings from '../../../../../../settings';
import '../styles/profile-password.scss';

class ProfilePassword extends React.Component {
  state = {
    currentPassword: '',
    newPassword: '',
    newPasswordConfirm: '',
    error: null
  };
  checkMatch = (a, b) => a === b;
  checkCurrentPassword = pass => {
    // TODO: Check currentPassword is correct
    console.log('pass', pass);
    return true;
  };
  handleInput = e => this.setState({ [e.target.name]: e.target.value });
  handleChangeSubmit = e => {
    const { currentPassword, newPassword, newPasswordConfirm } = this.state;
    const newPasswordsMatch = this.checkMatch(newPassword, newPasswordConfirm);
    const currentPasswordVerified = this.checkCurrentPassword(currentPassword);
    e.preventDefault();
    if (!currentPasswordVerified) {
      this.setState({ error: { message: 'Please verify you have entered your current password correctly.' } });
      return;
    }
    if (!newPasswordsMatch) {
      this.setState({
        error: {
          message: 'New password does not match, please make sure you have typed it in correctly in both fields.'
        }
      });
      return;
    }
    if (currentPasswordVerified && newPasswordsMatch) {
      // TODO: Update pw in shopify
      this.setState({
        currentPassword: '',
        newPassword: '',
        newPasswordConfirm: '',
        error: null
      });
    }
  };
  render() {
    const { currentPassword, newPassword, newPasswordConfirm, error } = this.state;
    // const {  } = this.props;

    return (
      <section className="profile-password">
        <form className="profile-password__form" onSubmit={this.handleChangeSubmit}>
          <label htmlFor="current-password">Current Password:</label>
          <input
            id="current-password"
            type="password"
            name="currentPassword"
            value={currentPassword}
            onChange={this.handleInput}
          />
          <label htmlFor="new-password">New Password:</label>
          <input id="new-password" type="password" name="newPassword" value={newPassword} onChange={this.handleInput} />
          <label htmlFor="new-password-confirm">Confirm New Password:</label>
          <input
            id="new-password-confirm"
            type="password"
            name="newPasswordConfirm"
            value={newPasswordConfirm}
            onChange={this.handleInput}
          />
          <button type="submit">
            <MdLock />
            <span>Set New Password</span>
          </button>
        </form>
        {error !== null ? <div className="profile-password__error">{error.message}</div> : null}
      </section>
    );
  }
}

ProfilePassword.propTypes = {};
ProfilePassword.defaultProps = {};

export default ProfilePassword;

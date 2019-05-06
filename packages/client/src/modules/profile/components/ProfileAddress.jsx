import React from 'react';
// import PropTypes from 'prop-types';
// import Helmet from 'react-helmet';
// import classnames from 'classnames';
import { MdSave } from 'react-icons/md';
// import {  } from '../../common/components/global';
// import settings from '../../../../../../settings';
import '../styles/profile-address.scss';

class ProfileAddress extends React.Component {
  state = {
    address1: '',
    address2: '',
    city: '',
    company: '',
    firstName: '',
    lastName: '',
    phone: '',
    province: '',
    zip: '',
    error: null
  };
  handleInput = e => this.setState({ [e.target.name]: e.target.value });
  handleAddressSubmit = e => {
    e.preventDefault();
    // TODO: Update address in shopify
    this.setState({
      currentPassword: '',
      newPassword: '',
      newPasswordConfirm: '',
      error: null
    });
  };
  render() {
    const { address1, address2, city, company, firstName, lastName, phone, province, zip, error } = this.state;
    // const {  } = this.props;

    return (
      <section className="profile-password">
        <form className="profile-password__form" onSubmit={this.handleChangeSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input id="firstName" type="text" name="firstName" value={firstName} onChange={this.handleInput} />
          <label htmlFor="lastName">Last Name:</label>
          <input id="lastName" type="text" name="lastName" value={lastName} onChange={this.handleInput} />
          <label htmlFor="phone">Phone:</label>
          <input id="phone" type="tel" name="phone" value={phone} onChange={this.handleInput} />
          <label htmlFor="company">Company:</label>
          <input id="company" type="text" name="company" value={company} onChange={this.handleInput} />
          <label htmlFor="address1">Address:</label>
          <input id="address1" type="text" name="address1" value={address1} onChange={this.handleInput} />
          <label htmlFor="address2">Address Line 2 (optional):</label>
          <input id="address2" type="text" name="address2" value={address2} onChange={this.handleInput} />
          <label htmlFor="city">City:</label>
          <input id="city" type="text" name="city" value={city} onChange={this.handleInput} />
          <label htmlFor="province">State:</label>
          <input id="province" type="text" name="province" value={province} onChange={this.handleInput} />
          <label htmlFor="zip">Zip Code:</label>
          <input id="zip" type="number" name="zip" value={zip} onChange={this.handleInput} />
          <button type="submit">
            <MdSave />
            <span>Save Address</span>
          </button>
        </form>
        {error !== null ? <div className="profile-password__error">{error.message}</div> : null}
      </section>
    );
  }
}

ProfileAddress.propTypes = {};
ProfileAddress.defaultProps = {};

export default ProfileAddress;

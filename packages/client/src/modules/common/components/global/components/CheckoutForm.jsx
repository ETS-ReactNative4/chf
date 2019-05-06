/* eslint-disable no-undef */
import React from 'react';
import { pick } from 'lodash';
import PropTypes from 'prop-types';
//import classnames from 'classnames';
import SubmissionError from './SubmissionError';
// import settings from '../../../../../../../../settings';
import '../styles/modules/checkout-form.scss';

const smShipVarId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMzYwNDgxMDkxNTkyMw==';
const lgShipVarId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMzYwNDgzMzkxOTA1OQ==';

const plusFiftyShip = [
  '101460007',
  '101460006',
  '101460005',
  '101660050',
  '121460011',
  '121460010',
  '121460009',
  '121660033',
  '121660063'
];
const plusEightyShip = ['121660050', '121660071', '201190001', '201190002', '201190003', '201190004'];
const baseUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDzl9tw6LTknc5Heft9oXxqqog_maAg9GM&address=`;
// const baseUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCb-6kBhsPsodgVOuaG6AubbqcmFx3sJiA&address=`;
const formInputs = ['address1', 'address2', 'city', 'company', 'firstName', 'lastName', 'phone', 'province', 'zip'];
const addressErr = {
  outOfState: [`Sorry, we currently ship to only addresses located in California.`],
  tooFarNorth: [`Sorry, we currently do not serve that region of California.`]
};
const baseState = { submitDisabled: false, submissionErrors: [] };
const blankForm = {
  address1: '',
  address2: '',
  city: '',
  company: '',
  firstName: '',
  lastName: '',
  phone: '',
  province: '',
  zip: '',
  isGroundLevel: false
};

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    const { location } = props;
    if (
      location &&
      'state' in location &&
      typeof location.state !== 'undefined' &&
      'defaultAddress' in location.state &&
      typeof location.state.defaultAddress !== 'undefined'
    ) {
      const defaultAddress = JSON.parse(location.state.defaultAddress);
      const { address1, address2, city, company, firstName, lastName, phone, province, zip } = defaultAddress;
      this.state = {
        ...baseState,
        address1: address1 || '',
        address2: address2 || '',
        city: city || '',
        company: company || '',
        firstName: firstName || '',
        lastName: lastName || '',
        phone: phone || '',
        province: province || '',
        zip: zip || '',
        isGroundLevel: false
      };
    } else {
      this.state = {
        ...baseState,
        ...blankForm
      };
    }
  }
  handleInput = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };
  inDeliveryRegion = async shippingAddress => {
    const formattedAddr = ['address1', 'city', 'province']
      .map(str => shippingAddress[str].replace(/\s/g, '+'))
      .join(',');
    const url = `${baseUrl}${formattedAddr}`;
    console.log('url to fetch', url);
    const [result] = await fetch(url)
      .then(res => res.json())
      .then(({ results }) => {
        console.log('results from geocode api', results);
        return results;
      })
      .catch(e => console.log(e));
    console.log('result from fetch', result);
    const { lat } = result.geometry.location;
    if (lat > 35.31161) return false;
    else return true;
  };
  checkShipping = lineItems => {
    const skuAndQtyArr = lineItems.map(({ node: { quantity: qty, variant: { sku } } }) => ({ qty, sku }));
    const [plusFiftyQty, plusEightyQty] = [plusFiftyShip, plusEightyShip].map(skus => {
      return skuAndQtyArr.filter(o => skus.includes(o.sku)).reduce((acc, { qty }) => {
        return acc + qty;
      }, 0);
    });
    return { plusFiftyQty, plusEightyQty };
  };
  directToShopify = webUrl => {
    localStorage.removeItem('sfy-checkout-id');
    window.location.href = webUrl;
    // window.location.href = window.location.protocol + '//' + window.location.host;
    // window.open(webUrl, '_blank');
  };
  checkoutUser = async e => {
    e.preventDefault();
    this.setState({ submissionErrors: [], submitDisabled: true });
    const { addCheckoutAddress, addShipping } = this.props;
    const checkoutId = localStorage.getItem('sfy-checkout-id');
    const shippingAddress = pick(this.state, formInputs);

    // Confirm shipping address in CA
    const enteredState = shippingAddress.province.toLowerCase();
    if (enteredState !== 'ca' && enteredState !== 'california') {
      return this.setState({ submissionErrors: addressErr.outOfState, submitDisabled: false });
    }

    // If shipping address in CA, confirm it is within deliverable region
    shippingAddress.province = 'CA';
    const inRegion = await this.inDeliveryRegion(shippingAddress);
    if (!inRegion) return this.setState({ submissionErrors: addressErr.tooFarNorth, submitDisabled: false });

    const checkoutInfo = { checkoutId, shippingAddress: { ...shippingAddress, country: 'US' } };
    const result = await addCheckoutAddress(checkoutInfo);
    if ('errors' in result) return this.setState({ submissionErrors: result.errors, submitDisabled: false });

    // Determine whether additional shipping ($50/$80) applies, clear checkout token, and proceed Shopify checkout
    let lineItems = [];
    const { plusFiftyQty: smQty, plusEightyQty: lgQty } = this.checkShipping(result.checkout.lineItems.edges);

    const { webUrl } = result.checkout;
    if (this.state.isGroundLevel || (!smQty && !lgQty)) {
      this.directToShopify(webUrl);
    } else {
      if (smQty) lineItems = [{ variantId: smShipVarId, quantity: smQty }];
      if (lgQty) lineItems = [...lineItems, { variantId: lgShipVarId, quantity: lgQty }];
      const addedItem = { lineItems, checkoutId: result.checkout.id };
      await addShipping(addedItem);
      this.directToShopify(webUrl);
    }
  };

  render() {
    const {
      address1,
      address2,
      city,
      company,
      firstName,
      lastName,
      phone,
      province,
      zip,
      isGroundLevel,
      submissionErrors
    } = this.state;

    return (
      <form className="form checkout-form">
        <div className="form__item form__item--half form__item--split-right checkout-form__item">
          <label htmlFor="firstName" className="checkout-form__label">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            className="checkout-form__input"
            placeholder="John"
            onChange={this.handleInput}
          />
        </div>
        <div className="form__item form__item--half checkout-form__item">
          <label htmlFor="lastName" className="checkout-form__label">
            Last Name
          </label>
          <input
            required
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            className="checkout-form__input"
            placeholder="Smith"
            onChange={this.handleInput}
          />
        </div>
        <div className="form__item form__item--half form__item--split-right checkout-form__item">
          <label htmlFor="phone" className="checkout-form__label">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={phone}
            className="checkout-form__input"
            placeholder="310-000-000"
            onChange={this.handleInput}
          />
        </div>
        <div className="form__item form__item--half checkout-form__item">
          <label htmlFor="company" className="checkout-form__label">
            Company
          </label>
          <input
            type="text"
            name="company"
            id="company"
            value={company}
            className="checkout-form__input"
            placeholder=""
            onChange={this.handleInput}
          />
        </div>
        <div className="form__item form__item form__item--half form__item--split-right checkout-form__item">
          <label htmlFor="address1" className="checkout-form__label">
            Address
          </label>
          <input
            required
            type="text"
            name="address1"
            id="address1"
            value={address1}
            className="checkout-form__input"
            placeholder="Street and number, P.O. box, c/o."
            onChange={this.handleInput}
          />
        </div>
        <div className="form__item form__item form__item--half checkout-form__item">
          <label htmlFor="address1" className="checkout-form__label">
            Address Line 2 (optional)
          </label>
          <input
            type="text"
            name="address2"
            id="address2"
            value={address2}
            className="checkout-form__input"
            placeholder="Apartment, suite, unit, building, floor, etc."
            onChange={this.handleInput}
          />
        </div>
        <div className="form__item form__item checkout-form__item">
          <label htmlFor="isGroundLevel" className="checkout-form__label">
            Address is on ground level
          </label>
          <input
            type="checkbox"
            name="isGroundLevel"
            id="isGroundLevel"
            checked={isGroundLevel}
            className="checkout-form__input"
            onChange={this.handleInput}
          />
        </div>
        <div className="form__item form__item form__item--third form__item--split-right checkout-form__item">
          <label htmlFor="city" className="checkout-form__label">
            City
          </label>
          <input
            required
            type="text"
            name="city"
            id="city"
            value={city}
            className="checkout-form__input"
            placeholder=""
            onChange={this.handleInput}
          />
        </div>
        <div className="form__item form__item form__item--third form__item--split-right checkout-form__item">
          <label htmlFor="province" className="checkout-form__label">
            State / Province / Region
          </label>
          <input
            required
            type="text"
            name="province"
            id="province"
            value={province}
            className="checkout-form__input"
            placeholder=""
            onChange={this.handleInput}
          />
        </div>
        <div className="form__item form__item form__item--third checkout-form__item">
          <label htmlFor="zip" className="checkout-form__label">
            Zip
          </label>
          <input
            required
            type="text"
            name="zip"
            id="zip"
            value={zip}
            className="checkout-form__input"
            placeholder=""
            onChange={this.handleInput}
          />
        </div>
        <button
          disabled={this.state.submitDisabled}
          className="button button--primary"
          onClick={e => this.checkoutUser(e)}
        >
          Confirm Address
        </button>
        {submissionErrors.length > 0 ? <SubmissionError errors={submissionErrors} /> : null}
      </form>
    );
  }
}

CheckoutForm.propTypes = {
  location: PropTypes.object
};

CheckoutForm.defaultProps = {};

export default CheckoutForm;

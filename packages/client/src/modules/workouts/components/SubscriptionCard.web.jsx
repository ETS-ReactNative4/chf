import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SubscriptionCard extends Component {
  render() {
    const {
      subscriptionInfo: { price, subHeader, text, subText }
    } = this.props;
    let subPeriod = subHeader[0];
    if (subPeriod === 'M') subPeriod = 1;
    else if (subPeriod === '6') subPeriod = 6;
    else if (subPeriod === '1') subPeriod = 12;

    return (
      <div className="subscription-card">
        <div className="subscription-card-content">
          <div className="subscription-card-content__header">
            ${price.split('.')[0]}
            <span className="subscription-card-content__header-super">{price.split('.')[1]}</span>
            <span className="subscription-card-content__header-sub">/mo</span>
          </div>
          <div className="subscription-card-content__text-container">
            <div className="subscription-card-content__sub-header">{subHeader}</div>
            <div className="subscription-card-content__text">{text}</div>
            <div className="subscription-card-content__sub-text">{subText}</div>
          </div>
          <div className="subscription-card-content__shadow" />
        </div>
        <Link to={`/new-subscription/${subPeriod}`}>
          <button className="subscription-card-content__button">BUY NOW</button>
        </Link>
      </div>
    );
  }
}

SubscriptionCard.propTypes = {
  subscriptionInfo: PropTypes.object
};

export default SubscriptionCard;

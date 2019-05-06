import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PromoSplitBg extends Component {
  static propTypes = {
    readField: PropTypes.func,
    formatText: PropTypes.func,
    handleClick: PropTypes.func,
    content: PropTypes.object
  };

  static defaultProps = {
    content: {
      header: 'TRAIN WITH ONLY THE BEST',
      body:
        'Tune in to new workouts, every day, led by world class Inspire Fitness trainers. We’re bringing the best of the best into your home. Each with their own unique style, personality, and music taste, you’re sure to find your match.',
      // Link Needs Updated
      image: 'https://s3-us-west-2.amazonaws.com/rcomm/phone_hand.jpg'
    }
  };

  render() {
    const {
      formatText,
      content: { header, body, image },
      handleClick
    } = this.props;
    return (
      <section className="promo-split-bg">
        <div className="promo-split-bg__text-container">
          {formatText(header.toUpperCase(), 'promo-split-bg__header', 'h3', false)}
          <div className="promo-split-bg__text"> {body} </div>
          <button name={`subscriptions`} className="promo-split-bg__button" onClick={e => handleClick(e)} disabled>
            {/* TRY FOR FREE */}
            COMING SOON
          </button>
        </div>
        <div className="promo-split-bg__image">
          <img src={image} alt="promo-image" />
        </div>
      </section>
    );
  }
}

export default PromoSplitBg;

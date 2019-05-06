import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeatureCard extends Component {
  render() {
    const {
      featureInfo: { feature_header, feature_text, feature_logo, position }
    } = this.props;
    return (
      <section
        name={`feature-${position}`}
        className="feature-card"
        onMouseEnter={() => this.props.onMouseEnter(position)}
        onMouseLeave={() => this.props.onMouseLeave()}
      >
        {typeof feature_logo !== 'undefined' ? (
          <div className="feature-card__logo-container">
            <img src={feature_logo} alt="Feature icon" />
          </div>
        ) : null}
        <div className="feature-card__header">{feature_header}</div>
        <div className="feature-card__text">{feature_text}</div>
      </section>
    );
  }
}

FeatureCard.propTypes = {
  featureInfo: PropTypes.object,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
};

export default FeatureCard;

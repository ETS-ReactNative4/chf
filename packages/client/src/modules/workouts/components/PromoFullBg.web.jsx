import React from 'react';
import PropTypes from 'prop-types';

const PromoFullBg = props => {
  const {
    content: { body, link, image }
  } = props;
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)),  url(${image})`
      }}
      className="promo-full-bg"
    >
      <div className="promo-full-bg__text-container">
        <h3 className="promo-full-bg__header">INSPIRE FITNESS</h3>
        <div className="promo-split-bg__text">{body}</div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="promo-full-bg__button">LEARN MORE</button>
        </a>
      </div>
    </section>
  );
};

PromoFullBg.propTypes = {
  formatText: PropTypes.func,
  readField: PropTypes.func,
  content: PropTypes.object
};

PromoFullBg.defaultProps = {
  content: {
    body:
      'You asked for a community to learn from top instructors. We answered the call. We created a full workout facility in Southern California where we are recording all of our workouts for you at home. In the area? Come sweat with us in person!',
    link: 'http://inspirefitnessstudios.com/',
    // Link Needs Updated
    image: 'https://s3-us-west-2.amazonaws.com/rcomm/promo_full.jpg'
  }
};

export default PromoFullBg;

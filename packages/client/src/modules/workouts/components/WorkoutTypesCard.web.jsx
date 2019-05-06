import React from 'react';
import PropTypes from 'prop-types';

const WorkoutTypesCard = props => {
  const {
    workoutInfo: { header, text, image }
  } = props;
  return (
    <section className="workout-types-card">
      <div className="workout-types-card__image-container">
        <div style={{ zIndex: 1, position: 'absolute' }}>
          <img src={image} alt="workouts-img" />
        </div>
        <div className="workout-types-card__text-shadow" />
        <div className="workout-types-card__image-shadow" />
      </div>
      <div className="workout-types-card__text-container">
        <h5 className="workout-types-card__header">{header}</h5>
        <div className="workout-types-card__text">{text}</div>
      </div>
    </section>
  );
};

WorkoutTypesCard.propTypes = {
  workoutInfo: PropTypes.object
};

export default WorkoutTypesCard;

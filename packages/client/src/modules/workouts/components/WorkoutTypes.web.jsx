import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WorkoutTypesCard from './WorkoutTypesCard';

class WorkoutTypes extends Component {
  render() {
    const { fields } = this.props;
    return (
      <div className="workout-types">
        {fields.map(item => (
          <WorkoutTypesCard workoutInfo={item} />
        ))}
      </div>
    );
  }
}

WorkoutTypes.propTypes = {
  fields: PropTypes.array
};

WorkoutTypes.defaultProps = {
  fields: [
    {
      header: 'Cycle',
      text: 'Sweat through high energy Cycle rides of all types in our extensive library.',
      // Link Needs Updated
      image: 'https://s3-us-west-2.amazonaws.com/rcomm/cycle.jpg'
    },
    {
      header: 'Rower',
      text: 'Endure a full body burn with high-intensity workouts on our CrossRow.',
      // Link Needs Updated
      image: 'https://s3-us-west-2.amazonaws.com/rcomm/rower.jpg'
    },
    {
      header: 'Strength',
      text: 'Follow strength training workouts on a number of different resistance machines.',
      // Link Needs Updated
      image: 'https://s3-us-west-2.amazonaws.com/rcomm/strength_2.jpg'
    },
    {
      header: 'Strider',
      text: 'Torch calories when strength & endurance team up in our smooth Strider workouts.',
      // Link Needs Updated
      image: 'https://s3-us-west-2.amazonaws.com/rcomm/strider.jpg'
    }
  ]
};

export default WorkoutTypes;

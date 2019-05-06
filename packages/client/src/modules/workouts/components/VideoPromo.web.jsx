import React from 'react';
import PropTypes from 'prop-types';
// import placeholderVideo from '../assets/placeholder_video.mp4';

const VideoPromo = props => {
  return (
    <section className="video-promo">
      <video className="video-promo__video-container" autoPlay muted playsInline webkit-playsinline="true" loop>
        <source src={props.videoSrc} type="video/mp4" />
      </video>
      <div className="video-promo__overlay" />
      <div className="video-promo-content">
        <h3 className="video-promo-content__header">LET&#39;S GET MOVING</h3>
        <div className="video-promo-content__text">
          Now you have access to first class workouts from Inspire Fitness trainers. Join a live class. Stream on
          demand. Get inspired.
        </div>
      </div>
    </section>
  );
};

VideoPromo.propTypes = {
  readField: PropTypes.func,
  videoSrc: PropTypes.string
};

VideoPromo.defaultProps = {
  // Need Updated Link
  videoSrc: 'https://s3-us-west-2.amazonaws.com/rcomm/workout_mashup.mp4'
};

export default VideoPromo;

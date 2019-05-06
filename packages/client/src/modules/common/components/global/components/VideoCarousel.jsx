import React from 'react';
import PropTypes from 'prop-types';
import '../styles/modules/video-carousel.scss';

const VideoCarousel = ({ children }) => <section className={'video-carousel'}>{children}</section>;

VideoCarousel.propTypes = {
  children: PropTypes.node
};

VideoCarousel.defaultProps = {};

export default VideoCarousel;

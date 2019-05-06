import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from './Slider';

class AppFeaturesCarousel extends Component {
  render() {
    const { images, slidePosition, onClick } = this.props;
    const positions = [1, 2, 3];
    return (
      <section className="app-features-carousel">
        <div className="app-features-carousel__phone-container">
          {/* Need Updated Phone Image */}
          {/* <img src="https://s3-us-west-2.amazonaws.com/rcomm/workouts_phone.png" /> */}
          <Slider images={images} slidePosition={slidePosition} />
        </div>
        <div className="app-features-carousel__indicators">
          {positions.map((pos, i) => {
            const baseClass = 'app-features-carousel__indicator';
            const className = slidePosition === i + 1 ? `${baseClass} ${baseClass}--active` : baseClass;
            return <span key={i} className={className} onClick={() => onClick(i + 1)} />;
          })}
        </div>
      </section>
    );
  }
}

AppFeaturesCarousel.propTypes = {
  images: PropTypes.array,
  slidePosition: PropTypes.number,
  onClick: PropTypes.func
};

export default AppFeaturesCarousel;

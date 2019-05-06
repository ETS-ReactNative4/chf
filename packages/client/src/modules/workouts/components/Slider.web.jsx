import React from 'react';
import PropTypes from 'prop-types';

const imgStyle = {
  display: `inline-block`,
  transition: `all .4s ease-out`
};

class Slider extends React.Component {
  setSlidePosition = () => {
    const { slidePosition } = this.props;
    const percentShift = (slidePosition - 1) * 100;
    return { transform: `translateX(${percentShift}%)` };
  };

  render() {
    const { images } = this.props;
    return (
      <div className="app-features-carousel__image-container">
        {images.map(image => (
          <img
            key={image.position}
            style={{ ...imgStyle, ...this.setSlidePosition() }}
            src={image.url}
            name={`image-${image.position}`}
            alt="photo"
          />
        ))}
      </div>
    );
  }
}

Slider.propTypes = {
  images: PropTypes.array,
  slidePosition: PropTypes.number
};

export default Slider;

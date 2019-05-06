import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '../styles/modules/hero.scss';
import ResponsivePicture from './ResponsivePicture';

class Hero extends Component {
  renderImage = image => {
    const options = {
      image: image.link,
      altText: image.name,
      className: 'hero__image',
      image_size: '1440X690',
      sources: [
        {
          image: image.link,
          widthDescription: '1440w',
          image_size: '1440X690',
          size: '(min-width: 990px)'
        },
        {
          image: image.link,
          widthDescription: '400w',
          image_size: '600x400',
          size: '(max-width: 450px)'
        }
      ]
    };
    // <img className="hero__image" src={image.link} alt={image.name} />
    return <ResponsivePicture options={options} />;
  };
  render() {
    const { children, overlayNav, image } = this.props;
    return (
      <section className={classnames('hero', { 'hero--overlayed': overlayNav })}>
        {'image' in this.props ? this.renderImage(image) : null}
        {children}
      </section>
    );
  }
}

Hero.propTypes = {
  children: PropTypes.node,
  overlayNav: PropTypes.bool,
  image: PropTypes.object
};
Hero.defaultProps = {
  overlayNav: false,
  image: {
    link: 'https://via.placeholder.com/1600x600',
    name: 'Hero'
  }
};

export default Hero;

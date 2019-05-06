import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import settings from '../../../../../../../../settings';
import ResponsivePicture from './ResponsivePicture';

import '../styles/modules/image-text.scss';

class ImageText extends React.Component {
  state = {
    width: null,
    height: null
  };
  componentDidMount() {
    this.measureImageText();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.measureImageText, false);
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.width !== nextState.width || this.state.height !== nextState.height;
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.measureImageText, false);
  }
  saveRef = ref => (this.containerNode = ref);
  measureImageText = () => {
    const { clientWidth, clientHeight } = this.containerNode;
    this.setState({
      width: clientWidth,
      height: clientHeight
    });
  };
  renderImage = image => {
    const options = {
      image: image.link,
      altText: image.name,
      className: 'hero__image',
      image_size: '590X400',
      sources: [
        {
          image: image.link,
          image_size: '590X400',
          sizes: '(min-width: 990px) 100vw'
        }
      ]
    };
    // <img className="hero__image" src={image.link} alt={image.name} />
    return <ResponsivePicture options={options} />;
  };
  render() {
    const { children, image, imagePosition, imageOverflow, shadow } = this.props;
    const { width } = this.state;
    return (
      <section
        ref={this.saveRef}
        className={classnames(
          'image-text',
          {
            'image-text--xsmall': width < settings.breakpoints.small
          },
          {
            'image-text--small': width >= settings.breakpoints.small && width < settings.breakpoints.medium
          },
          {
            'image-text--medium': width >= settings.breakpoints.medium && width < settings.breakpoints.large
          },
          {
            'image-text--large': width >= settings.breakpoints.large
          }
        )}
      >
        <div
          className={classnames(
            'image-text__content',
            { 'image-text__content--bottom': imagePosition === 'top' },
            { 'image-text__content--top': imagePosition === 'bottom' }
          )}
        >
          {children}
        </div>
        <div
          className={classnames(
            'image-text__image',
            { 'image-text__image--top': imagePosition === 'top' },
            { 'image-text__image--bottom': imagePosition === 'bottom' },
            { 'image-text__image--over image-text__image--over-left': imageOverflow === 'left' },
            { 'image-text__image--over image-text__image--over-right': imageOverflow === 'right' },
            { 'image-text__image--shadow': shadow }
          )}
        >
          {this.renderImage(image)}
          {/* <img src={image.link} alt={image.name} /> */}
        </div>
      </section>
    );
  }
}

ImageText.propTypes = {
  children: PropTypes.node,
  image: PropTypes.object,
  imagePosition: PropTypes.string,
  imageOverflow: PropTypes.string,
  shadow: PropTypes.bool
};

ImageText.defaultProps = {
  // image: {
  //   name: 'Image',
  //   link: 'https://via.placeholder.com/640x360'
  // }
};

export default ImageText;

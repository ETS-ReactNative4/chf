import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Hero } from '../../common/components/global';
import '../styles/carousel-min.scss';

export default class HeroCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('PROPS:::', this.props);
    const { images } = this.props;
    return (
      <Carousel
        className="hero__image"
        showThumbs={false}
        showStatus={false}
        emulateTouch={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        {Array.from(images.entries()).map(entry => {
          const image = { link: entry[1].url, name: entry[1].name };
          return <Hero key={entry[1].name} overlayNav={false} image={image} />;
        })}
      </Carousel>
    );
  }
}

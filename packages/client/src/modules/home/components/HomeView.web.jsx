import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import {
  PageLayout,
  ScrollToTop,
  Hero,
  VideoText,
  ImageText,
  FeaturedVendors,
  VendorList
  // InfoBanner
} from '../../common/components/global';
import HomeVendors from './HomeVendors';
import HomeBranding from './HomeBranding';
import ServiceSlug from './ServiceSlug';
import PopularItemsCarousel from './PopularItemsCarousel';
import HeroCarousel from './Carousel';

import settings from '../../../../../../settings';
import '../styles/home-view.scss';

const filterFields = (fields, fieldName) =>
  fields.find(field => field.fieldName === fieldName) !== undefined
    ? fields.filter(field => field.fieldName === fieldName)[0].fieldValue
    : '';

const renderMetaData = () => (
  <Helmet
    title={`Quality Home Fitness Equipment - ${settings.app.name}`}
    meta={[
      {
        name: 'description',
        content: `CA Home Fitness offers the best brands in home fitness equipment at the guaranteed best prices, including treadmills, ellipticals, bikes, and much more. `
      },
      {
        name: 'keywords',
        content: `Treadmill, Elliptical machines, Cross Trainer, Exercise Bike, Home Gym, Rower, Commercial Equipment, Life Fitness, Precor, Spirit Fitness, Inspire Fitness, GoFit, Helix`
      }
    ]}
  />
);

class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselActive: false,
      images: new Map(),
      defaultImage: {
        name: 'California Home Fitness',
        link: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/home_hero-v2.png'
      }
    };
  }
  componentDidMount() {
    const { location } = this.props;
    if (this.props.page) {
      const { fields } = this.props.page;
      const data = JSON.parse(fields[0].field_value);
      // console.log('FIELDS::', data);
      const { images, carouselActive } = data;
      const carouselImages = new Map([...images]);
      const firstImgKey = carouselImages.keys().next().value;
      const firstImage = carouselImages.get(firstImgKey);
      const defaultImage = { name: firstImage.name, link: firstImage.url };
      // console.log('FIST::', defaultImage);
      // for (var [key, value] of carouselImages.entries()) {
      //   console.log('KEY::', key);
      //   console.log('VALUE::', value);
      // }
      return this.setState({ images: carouselImages, carouselActive, defaultImage });
    }

    if (location && location.hasOwnProperty('state') && typeof location.state !== 'undefined') {
      if ('referrer' in location.state) {
        const { referrer } = location.state;
        //TODO: Replace alert with modal or other notification
        if (referrer == 'signup-success') window.alert(`Congratulations - you've successfully registered your account`);
        else if (referrer === 'login-success') window.alert(`You've successfully logged in!`);
      }
    }
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log('THIS PROPS PAGE::', this.props, prevProps);
    if (this.props.page !== prevProps.page) {
      const { fields } = this.props.page;
      const data = JSON.parse(fields[0].field_value);
      // console.log('FIELDS::', data);
      const { images, carouselActive } = data;
      const carouselImages = new Map([...images]);
      const firstImgKey = carouselImages.keys().next().value;
      const firstImage = carouselImages.get(firstImgKey);
      const defaultImage = { name: firstImage.name, link: firstImage.url };
      // console.log('FIST::', defaultImage);
      // for (var [key, value] of carouselImages.entries()) {
      //   console.log('KEY::', key);
      //   console.log('VALUE::', value);
      // }
      return this.setState({ images: carouselImages, carouselActive, defaultImage });
    }
  }
  filterVendors = filter => {
    if (filter === 'topSix') {
      const filtered = this.props.vendors.filter(v => v.is_top_six);
      return _.orderBy(filtered, ['top_six_position'], ['asc']);
    }
    if (filter === 'featured') return this.props.vendors.filter(v => v.is_featured);
  };
  render() {
    const { homeGymsImage, commercialGymsImage, loading, sfy_shop, vendors } = this.props;
    const { carouselActive, images, defaultImage } = this.state;
    // console.log('THE STATE:::', this.state);
    if (loading || !sfy_shop || !vendors) {
      return (
        <PageLayout>
          {renderMetaData()}
          <Hero overlayNav={false} image={defaultImage} />
          {/* <div>Loading...</div> */}
        </PageLayout>
      );
    }
    return (
      <PageLayout>
        {renderMetaData()}
        <ScrollToTop />
        {carouselActive ? (
          <HeroCarousel overlayNav={false} images={images} />
        ) : (
          <Hero overlayNav={false} image={defaultImage} />
        )}
        <div className="home-view">
          <HomeVendors />
          <div className="home-view__content-container">
            <div className="home-view__popular-container">
              <h2 className="header header--primary header--upper header--centered home-view__header">Popular Items</h2>
              <PopularItemsCarousel products={sfy_shop.products} vendors={vendors} />
            </div>
            <div className="home-view__video-container">
              <VideoText videoSide="left" videoLink="https://www.youtube.com/embed/pEl3zYnH7FY" iframeVideo={true}>
                <h3 className="header header--secondary video-text__header">Customer Oriented</h3>
                <p className="video-text__text">
                  We pride ourselves on building strong relationships with our clientele by always being there for them.
                  From the initial contact, through product selection, purchase, delivery, installation as well as use
                  and maintenance, we want to always make sure that their needs are being met.
                </p>
              </VideoText>
            </div>
            <div className="home-view__image-container">
              <ImageText imagePosition="bottom" imageOverflow="left" image={homeGymsImage} shadow={false}>
                <span className="header header--secondary header--upper image-text__header">Home Gym</span>
                <span> - </span>
                <p className="image-text__text">
                  We are the authorized dealer for the top brands in the industry such as Precor, Life Fitness, Inspire
                  and others. We bring gym quality equipment into your home appropriate to each customer’s unique goals,
                  lifestyle, and budget.
                </p>
              </ImageText>
              <ImageText imagePosition="top" imageOverflow="right" image={commercialGymsImage} shadow={true}>
                <span className="header header--secondary header--upper image-text__header">Commercial Gym</span>
                <span> - </span>
                <p className="image-text__text">
                  California Home Fitness offers high quality, practical products for a variety of commercial
                  environments. Our reliable products look great, are easy to use, and will increase the longevity of
                  your office, multi-family, school, fire, police, studio, club, or hospitality facility.
                </p>
              </ImageText>
            </div>
            <div className="home-view__vendor-container">
              <h2 className="header header--primary header--upper header--centered home-view__header">
                Vendor Section
              </h2>
              <div className="home-view__vendor-card">
                <FeaturedVendors vendors={this.filterVendors('featured')} />
                <VendorList vendors={this.filterVendors('topSix')} />
                <Link
                  to="/brands"
                  className="header header--primary header--lower header--centered home-view__vendors-link"
                >
                  see more
                </Link>
              </div>
            </div>
            <div className="home-view__service-slug">
              <ServiceSlug />
            </div>
          </div>
          <div className="home-view__home-branding">
            <HomeBranding />
          </div>
        </div>
      </PageLayout>
    );
  }
}

HomeView.defaultProps = {
  heroImage: {
    name: 'California Home Fitness',
    link: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/home_hero-v2.png'
  },
  homeGymsImage: {
    name: 'Home Gyms',
    link: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/home_homegym.png'
  },
  commercialGymsImage: {
    name: 'Commercial Gyms',
    link: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/home_commercialgym.png'
  }
};
HomeView.propTypes = {
  heroImage: PropTypes.object,
  homeGymsImage: PropTypes.object,
  commercialGymsImage: PropTypes.object,
  location: PropTypes.object,
  loading: PropTypes.bool,
  sfy_shop: PropTypes.object,
  vendors: PropTypes.array
};

export default HomeView;

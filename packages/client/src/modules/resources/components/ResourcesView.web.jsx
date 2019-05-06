import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {
  PageLayout,
  ScrollToTop,
  Hero,
  // HeroSearch,
  VideoCarousel,
  VideoCard,
  // Content Needed
  // ArticleImageGrid,
  // ArticleImage,
  PhoneBanner,
  VendorFilter
} from '../../common/components/global';
import settings from '../../../../../../settings';
import '../styles/resources-view.scss';

const API_KEY = 'AIzaSyBjhon0-cIYtELUMFxUT0isynUMCxaNp9Y';
const baseVideoUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&key=${API_KEY}&id=`;

class ResourcesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVendor: null,
      videos: []
    };
  }
  async componentDidMount() {
    const videos = await this.getVideos();
    this.setState({ videos });
  }
  // May implement to truncate either video title or description
  truncateText = (text, limit) => {
    if (text.length <= limit) return text;
    const truncateOn = text.split('').findIndex((char, i) => i > limit && char === ' ');
    return `${text.slice(0, truncateOn + 1)}...`;
  };
  getVideos = () => {
    const { videos } = this.props;
    const videoIds = videos.map(v => v.video_yt_id);

    const ids = videoIds.length === 1 ? videoIds[0] : videoIds.join(',');
    const url = `${baseVideoUrl}${ids}`;
    return fetch(url)
      .then(res => res.json())
      .then(({ items }) => items)
      .catch(err => console.error(err));
  };
  selectVendor = vendorId => {
    const { selectedVendor } = this.state;
    if (selectedVendor === vendorId) this.setState({ selectedVendor: null });
    else this.setState({ selectedVendor: vendorId }, () => console.log('this.state', this.state));
  };
  search = search => {
    console.log(`Search for '${search}' here.`);
  };
  render() {
    const { heroImage } = this.props;
    const { videos } = this.state;
    const vendors = [
      { id: '1', name: 'LifeFitness', image: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-lifefitness.png' },
      { id: '2', name: 'Inspire', image: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-inspire.png' },
      { id: '3', name: 'Precor', image: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-precor.png' },
      { id: '6', name: 'Helix', image: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-helix.png' },
      { id: '4', name: 'Spirit', image: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo-spirit.png' }
    ];
    const renderMetaData = () => (
      <Helmet
        title={`${settings.app.name}:  Quality Home Fitness Equipment for Sale.`}
        meta={[
          {
            name: 'description',
            content: `Shop local and save!  CA Home Fitness offers the best brands in home fitness equipment at the guaranteed best prices, including treadmills, ellipticals, bikes, rowers, strength training equipment, and more.  `
          },
          {
            name: 'keywords',
            content: `Treadmill, Elliptical machines, Cross Trainer, Exercise Bike, Home Gym, Rower, Commercial Equipment, Life Fitness, Precor, Spirit Fitness, Inspire Fitness, GoFit, Helix`
          }
        ]}
      />
    );

    return (
      <PageLayout>
        {renderMetaData()}
        <ScrollToTop />
        <Hero overlayNav={false} image={heroImage}>
          <div className="hero__content">
            <h2 className="header header--secondary hero__header">
              Welcome, Here you will find training videos and a host of digital media
            </h2>
            {/* <HeroSearch search={this.search} /> */}
          </div>
        </Hero>
        <div className="resources-view">
          <div className="resources-view__vendor-filter">
            <h3 className="header header--primary header--upper header--centered vendor-filter__header">
              Vendor Content
            </h3>
            <VendorFilter vendors={vendors} selectVendor={this.selectVendor} {...this.state} />
          </div>
          <div className="resources-view__popular-videos">
            <h2 className="header header--primary header--centered header--upper resources-view__header">
              Popular Videos
            </h2>
            <VideoCarousel>
              {videos.length ? videos.map(video => <VideoCard key={video.video_yt_id} video={video} />) : null}
            </VideoCarousel>
          </div>
          <div className="resources-view__phone-banner">
            <PhoneBanner />
          </div>
          {/* Content Needed: Add Back Later */}
          {/* <div className="resources-view__popular-articles">
            <h2 className="header header--primary header--centered header--upper resources-view__header">
              Popular Articles
            </h2>
            <p className="resources-view__header-sub">
              Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life
              One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the World of
              Grammar
            </p>
            <ArticleImageGrid>
              <ArticleImage width={2} image="https://via.placeholder.com/632x300" shadow={true} />
              <ArticleImage width={1} image="https://via.placeholder.com/300x300" shadow={true} />
              <ArticleImage width={1} image="https://via.placeholder.com/300x300" shadow={true} />
              <ArticleImage width={1} image="https://via.placeholder.com/300x300" shadow={false} />
              <ArticleImage width={1} image="https://via.placeholder.com/300x300" shadow={true} />
            </ArticleImageGrid>
          </div> */}
        </div>
      </PageLayout>
    );
  }
}

ResourcesView.propTypes = {
  heroImage: PropTypes.object,
  videos: PropTypes.array
};
ResourcesView.defaultProps = {
  heroImage: {
    name: 'Resources',
    link: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/resources_hero.png'
  },
  videos: [
    {
      vendor_name: 'Precor',
      vendor_id: 1,
      video_url: 'https://www.youtube.com/watch?v=Sk7bcKhLezE',
      video_yt_id: 'Sk7bcKhLezE'
    },
    {
      vendor_name: 'Life Fitness',
      vendor_id: 2,
      video_url: 'https://www.youtube.com/watch?v=D6xklIK2EoI',
      video_yt_id: 'D6xklIK2EoI'
    },
    {
      vendor_name: 'Inspire Fitness',
      vendor_id: 3,
      video_url: 'https://www.youtube.com/watch?v=qYQw0CqCeNs',
      video_yt_id: 'qYQw0CqCeNs'
    },
    {
      vendor_name: 'Spirit',
      vendor_id: 5,
      video_url: 'https://www.youtube.com/watch?v=SGZ4pNVJSe8',
      video_yt_id: 'SGZ4pNVJSe8'
    }
  ]
};

export default ResourcesView;

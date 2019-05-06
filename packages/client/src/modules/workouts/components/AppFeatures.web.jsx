import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeatureCard from './FeatureCard';
import AppFeaturesCarousel from './AppFeaturesCarousel';
// import AppStoreLinks from './AppStoreLinks';

class AppFeatures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slidePosition: 1
    };
  }

  featureNum = featureName => {
    // eslint-disable-next-line
    const [_, __, num] = featureName.split('_');
    return parseInt(num);
  };

  onMouseEnter = pos => {
    this.setState({ slidePosition: pos });
  };

  onMouseLeave = () => {
    this.setState({ slidePosition: 1 });
  };

  onClick = pos => {
    this.setState({ slidePosition: pos });
  };

  render() {
    const { fields, images } = this.props;
    const featureArr = fields.filter(o => o.fieldName.includes('app_feature'));

    return (
      <section className="app-features">
        <AppFeaturesCarousel images={images} slidePosition={this.state.slidePosition} onClick={this.onClick} />
        <div className="app-features-content">
          <h1 className="app-features-content__header">
            <span>New App</span> New Goals
          </h1>
          {featureArr.map(({ fieldName, fieldValue }) => {
            const num = this.featureNum(fieldName);
            return (
              <FeatureCard
                key={num}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                featureInfo={{ ...fieldValue, position: num }}
              />
            );
          })}
          {/* Needs Links to App Store */}
          {/* <AppStoreLinks section="features" /> */}
        </div>
      </section>
    );
  }
}

AppFeatures.propTypes = {
  formatText: PropTypes.func,
  fields: PropTypes.array,
  readField: PropTypes.func,
  featureArr: PropTypes.array,
  images: PropTypes.array
};

AppFeatures.defaultProps = {
  fields: [
    {
      fieldName: 'app_feature_1',
      fieldValue: {
        // Link Needs Updated
        feature_logo: 'https://s3-us-west-2.amazonaws.com/rcomm/play_logo.png',
        feature_header: 'Stream Video Workouts',
        feature_text:
          'Follow along with 3 different types of cardio classes or take a strength training class with one of our world-class trainers.'
      }
    },
    {
      fieldName: 'app_feature_2',
      fieldValue: {
        // Link Needs Updated
        feature_logo: 'https://s3-us-west-2.amazonaws.com/rcomm/heart.png',
        feature_header: 'Follow Training Programs',
        feature_text:
          'Tap into full training programs, specific to the machine you have. All designed by our very own Inspire Fitness trainers.'
      }
    },
    {
      fieldName: 'app_feature_3',
      fieldValue: {
        // Link Needs Updated
        feature_logo: 'https://s3-us-west-2.amazonaws.com/rcomm/meter.png',
        feature_header: 'Track Your Progress',
        feature_text:
          'Log every class or training program that you take and keep track of important progress like weight and other measurements.'
      }
    }
  ],
  images: [
    // Links Need Updated
    { url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/chf_app_1.png', position: 1 },
    { url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/chf_app_4.png', position: 2 },
    { url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/chf_app_3.png', position: 3 }
  ]
};

export default AppFeatures;

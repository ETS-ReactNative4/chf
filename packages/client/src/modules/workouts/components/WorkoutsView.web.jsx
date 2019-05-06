import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { PageLayout, ScrollToTop } from '../../common/components/global';
import VideoPromo from './VideoPromo';
import AppFeatures from './AppFeatures';
import PromoSplitBg from './PromoSplitBg';
import PromoFullBg from './PromoFullBg';
import Subscriptions from './Subscriptions';
import WorkoutTypes from './WorkoutTypes';
import settings from '../../../../../../settings';
import '../styles/workouts-view.scss';

class WorkoutsView extends React.Component {
  setParentRef = (name, childRef) => {
    this[name] = childRef;
  };
  render() {
    const renderMetaData = () => (
      <Helmet
        title={`Workouts - ${settings.app.name}`}
        meta={[
          {
            name: 'description',
            content: `Get inspired with new workout videos to help you meet your fitness goals at California Home Fitness.  Stop in and talk to one of our fitnesss consultants now.`
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
        <div className="workouts-view">
          <VideoPromo />
          <AppFeatures />
          <WorkoutTypes />
          <PromoSplitBg formatText={this.props.formatText} />
          <Subscriptions formatText={this.props.formatText} setParentRef={this.setParentRef} />
          <PromoFullBg formatText={this.props.formatText} />
        </div>
      </PageLayout>
    );
  }
}

WorkoutsView.defaultProps = {};
WorkoutsView.propTypes = {
  formatText: PropTypes.func.isRequired
};

export default WorkoutsView;

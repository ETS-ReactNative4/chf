import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { PageLayout, ScrollToTop, Article, Hero } from '../../common/components/global';
import settings from '../../../../../../settings';
import '../styles/about-view.scss';

class AboutView extends React.Component {
  render() {
    const { heroImage } = this.props;

    const renderMetaData = () => (
      <Helmet
        title={`About - ${settings.app.name}`}
        meta={[
          {
            name: 'description',
            content: `California Home Fitness is Los Angeles, Orange and San Diego Counties #1 dealer of Life Fitness, Precor, Inspire Fitness and Spirit Fitness equipment.  Best price guarantee!`
          },
          {
            name: 'keywords',
            content: `Treadmill, Elliptical machines, Cross Trainer, Exercise Bike, Home Gym, Rower, Commercial Equipment, Life Fitness, Precor, Spirit Fitness, Inspire Fitness, GoFit, Helix`
          }
        ]}
      />
    );
    const aboutArticle = {
      title: 'CHF Story',
      paragraphs: [
        `California Home Fitness specializes in selling premium fitness equipment for the home and commercial locations at the best prices.  Our stores are stocked with everything you need from beginner to expert level treadmills, elliptical cross trainers, exercise bikes, functional trainers, home gyms, vibration trainers, dumbbells and more.  Our product line consists of the strongest brands in the industry such as Precor, Life Fitness, Cybex, Spirit, Inspire, Bodycraft, Cascade, DKN, Power Block and Go Fit.  We bring more than 25 years industry experience and knowledge to assist you in finding the equipment to satisfy your fitness needs.  We pride ourselves in building strong relationships with our clientele and always being there for them, from the initial contact, through the purchase and install, and continuing to make sure your needs are being met.  We are here to help you achieve your fitness goals.`,
        `Our typical customer can range from anyone looking to outfit a gym for their home, someone rehabilitating an injury, starting a family, simply don't have time to get to the gym, or are intimidated of the health club scene.   Whatever you are looking for our expert fitness consultants can help you.  Referral business is HUGE in our industry and therefore we need to make sure each customer has a great experience.`
      ]
    };

    return (
      <PageLayout>
        {renderMetaData()}
        <ScrollToTop />
        <Hero overlayNav={false} image={heroImage} />
        <div className="about-view">
          <Article article={aboutArticle} />
        </div>
      </PageLayout>
    );
  }
}

AboutView.propTypes = {
  heroImage: PropTypes.object
};
AboutView.defaultProps = {
  heroImage: {
    name: 'About',
    link: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/about_hero.png'
  }
};

export default AboutView;

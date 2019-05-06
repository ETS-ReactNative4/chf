import React from 'react';
// import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// import { Link } from 'react-router-dom';
import { PageLayout, ScrollToTop, LinkList } from '../../common/components/global';
import settings from '../../../../../../settings';
import '../styles/contact-view.scss';

class ContactView extends React.Component {
  render() {
    // const {  } = this.props;

    const renderMetaData = () => (
      <Helmet
        title={`Contact Us - ${settings.app.name}`}
        meta={[
          {
            name: 'description',
            content: `At California Fitness we are here to help with your home fitness questions and needs. Please contact us here or at your local California Fitness location.`
          },
          {
            name: 'keywords',
            content: `Treadmill, Elliptical machines, Cross Trainer, Exercise Bike, Home Gym, Rower, Commercial Equipment, Life Fitness, Precor, Spirit Fitness, Inspire Fitness, GoFit, Helix`
          }
        ]}
      />
    );
    const linkList = [
      { name: 'Contact Us', location: '/contact', type: 'internal' },
      // { name: 'Services', location: '/services', type: 'internal' },
      { name: 'Maintenance & Repairs', location: '/maintenance', type: 'internal' },
      { name: 'Delivery & Installations', location: '/delivery', type: 'internal' }
    ];
    return (
      <PageLayout>
        {renderMetaData()}
        <ScrollToTop />
        <div className="contact-view sidebar-layout">
          <section className="contact-view__sidebar sidebar-layout__sidebar">
            <LinkList links={linkList} />
          </section>
          <section className="contact-view__content sidebar-layout__content">
            <h1 className="sidebar-layout__header">Contact Us</h1>
            <p className="sidebar-layout__text">
              <a href="mailto:info@cahomefitness.com">Info@CAHomeFitness.com </a>
              or call your local CA Home Fitness store.
            </p>
          </section>
        </div>
      </PageLayout>
    );
  }
}

ContactView.defaultProps = {};
ContactView.propTypes = {};

export default ContactView;

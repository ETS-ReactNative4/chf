import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { PageLayout, ScrollToTop, Hero } from '../../common/components/global';
import translate from '../../../i18n';
import settings from '../../../../../../settings';

const PageNotFound = ({ staticContext = {}, t }) => {
  staticContext.pageNotFound = true;
  return (
    <PageLayout>
      <Helmet
        title={`${settings.app.name} - ${t('title')}`}
        meta={[
          {
            name: 'description',
            content: `${settings.app.name} - ${t('meta')}`
          }
        ]}
      />
      <ScrollToTop />
      <Hero overlayNav={false} />
      <h1 className="header header--centered header--secondary">
        <div>Page not found (404)</div>
        <div>Do we want a search box here?</div>
        <Link to="/" className="button button--primary">
          Return Home
        </Link>
      </h1>
    </PageLayout>
  );
};

PageNotFound.propTypes = {
  staticContext: PropTypes.object,
  t: PropTypes.func
};

export default translate('notFound')(PageNotFound);

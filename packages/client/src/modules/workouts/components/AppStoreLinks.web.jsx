import React from 'react';
import PropTypes from 'prop-types';
// import AppStore from '../../home/assets/appstore_ios.svg';
// import Google from '../../home/assets/appstore_android.png';

const AppStoreLinks = ({ section }) => (
  <div className={`app-store-links--${section}`}>
    <a className="app-store-links__link" href="https://itunes.apple.com/us/app/if-live/id1324164741" rel="noopener">
      <img className="app-store-links_image" src={'https://s3-us-west-2.amazonaws.com/chf-rcomm/apple.svg'} />
    </a>
    <a
      className="app-store-links__link"
      href="https://play.google.com/store/apps/details?id=com.inspirefit"
      rel="noopener"
    >
      <img className="app-store-links_image" src={'https://s3-us-west-2.amazonaws.com/chf-rcomm/google.png'} />
    </a>
  </div>
);

AppStoreLinks.propTypes = {
  section: PropTypes.string
};

export default AppStoreLinks;

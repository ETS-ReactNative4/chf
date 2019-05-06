import React from 'react';
import PropTypes from 'prop-types';
import {
  // IconContext,
  FaGooglePlusG,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa';
import '../styles/modules/social-icons.scss';

class SocialIcons extends React.Component {
  constructor(props) {
    super(props);
  }
  getIcon = (link, key) => {
    switch (link.name) {
      case 'linkGoogle':
        return (
          <a key={key} href={link.location} target="_blank" rel="noopener noreferrer" className="social-icons__link">
            <FaGooglePlusG />
            <span hidden>Share on Google</span>
          </a>
        );
      case 'linkFacebook':
        return (
          <a key={key} href={link.location} target="_blank" rel="noopener noreferrer" className="social-icons__link">
            <FaFacebookF />
            <span hidden>Share on Facebook</span>
          </a>
        );
      case 'linkTwitter':
        return (
          <a key={key} href={link.location} target="_blank" rel="noopener noreferrer" className="social-icons__link">
            <FaTwitter />
            <span hidden>Share on Twitter</span>
          </a>
        );
      case 'linkPinterest':
        return (
          <a key={key} href={link.location} target="_blank" rel="noopener noreferrer" className="social-icons__link">
            <FaPinterestP />
            <span hidden>Share on Pinterest</span>
          </a>
        );
      case 'linkYoutube':
        return (
          <a key={key} href={link.location} target="_blank" rel="noopener noreferrer" className="social-icons__link">
            <FaYoutube />
            <span hidden>Share on YouTube</span>
          </a>
        );
      case 'linkInstagram':
        return (
          <a key={key} href={link.location} target="_blank" rel="noopener noreferrer" className="social-icons__link">
            <FaInstagram />
            <span hidden>Share on Instagram</span>
          </a>
        );
      case 'linkLinkedIn':
        return (
          <a key={key} href={link.location} target="_blank" rel="noopener noreferrer" className="social-icons__link">
            <FaLinkedinIn />
            <span hidden>Share on LinkedIn</span>
          </a>
        );
    }
  };
  render() {
    const { /* iconColor, */ socialLinks } = this.props;
    return (
      // <IconContext.Provider value={{ color: iconColor, className: 'social-icons__icon', size: '2em' }}>
      <div className="social-icons">
        {'socialLinks' in this.props && socialLinks.length > 0
          ? socialLinks.map((link, i) => this.getIcon(link, i))
          : null}
      </div>
      // </IconContext.Provider>
    );
  }
}

SocialIcons.propTypes = {
  iconColor: PropTypes.string,
  socialLinks: PropTypes.array
};
SocialIcons.defaultProps = {
  iconColor: 'blue',
  socialLinks: [
    { name: 'linkGoogle', location: 'https://google.com' },
    { name: 'linkFacebook', location: 'https://facebook.com' },
    { name: 'linkTwitter', location: 'https://twitter.com' }
  ]
};

export default SocialIcons;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { EmailSubscribe, SocialIcons, LinkList } from '../';
import '../styles/modules/footer.scss';

class Footer extends React.Component {
  submitEmailSubscription = () => {
    const emailSubForm = document[`mc-embedded-subscribe-form`];
    emailSubForm.submit();
    setTimeout(() => emailSubForm.reset(), 2000);
  };
  render() {
    const { appName, logoImage } = this.props;
    const linkListOne = [
      { name: 'Contact Us', location: '/contact', type: 'internal' },
      { name: 'Locations', location: '/locations', type: 'internal' },
      // { name: 'Services', location: '/services', type: 'internal' },
      { name: 'Maintenance & Repairs', location: '/maintenance', type: 'internal' },
      { name: 'Delivery & Installations', location: '/delivery', type: 'internal' }
    ];
    const linkListTwo = [
      { name: 'Warranty', location: '/warranty', type: 'internal' },
      { name: 'Financing', location: '/financing', type: 'internal' },
      { name: 'Terms & Conditions', location: '/terms', type: 'internal' },
      { name: 'Sitemap', location: '/sitemap.xml', type: 'external' }
    ];
    const socialLinks = [
      { name: 'linkFacebook', location: 'https://facebook.com/cahomefitness/' },
      { name: 'linkInstagram', location: 'https://www.instagram.com/cahomefitness/' }
    ];
    return (
      <footer className="main-layout__footer footer">
        {/* Logo */}
        <Link to="/" className="footer__logo">
          <img src={logoImage.link} alt={appName} />
        </Link>
        {/* Links */}
        <div className="footer__content">
          <div className="footer__section footer__section--links">
            {/* <FooterTitle title="Contact Us" /> */}
            <LinkList links={linkListOne} />
          </div>
          <div className="footer__section footer__section--links">
            {/* <FooterTitle title="Locations" /> */}
            <LinkList links={linkListTwo} />
          </div>
          {/* Social */}
          <div className="footer__section footer__section--social">
            <FooterTitle title="Follow us" />
            <SocialIcons socialLinks={socialLinks} />
          </div>
          {/* Email */}
          <div className="footer__section footer__section--email">
            <FooterTitle title="Subscribe for fitness tips and sales" />
            <EmailSubscribe placeholder={'name@example.com'} submitEmailSubscription={this.submitEmailSubscription} />
          </div>
        </div>
      </footer>
    );
  }
}
Footer.propTypes = {
  appName: PropTypes.string,
  logoImage: PropTypes.object
};
Footer.defaultProps = {
  logoImage: {
    name: 'California Home Fitness',
    link: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo_chf-icon.svg'
  }
};

const FooterTitle = ({ title }) => {
  return <h3 className="footer__title">{title}</h3>;
};

FooterTitle.propTypes = {
  title: PropTypes.string
};

export default Footer;

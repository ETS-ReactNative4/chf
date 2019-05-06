import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { MdClose } from 'react-icons/md';
import '../styles/modules/info-banner.scss';

class InfoBanner extends React.Component {
  state = {
    bannerTimeout: null
  };
  componentDidMount() {
    const { autoDismiss, autoDismissAfter, bannerIsOpen, dismissBanner } = this.props;
    if (typeof window !== 'undefined') {
      if (autoDismiss && bannerIsOpen) {
        this.setState({ bannerTimeout: window.setTimeout(dismissBanner, autoDismissAfter) });
      }
    }
  }
  handleDismiss = () => {
    const { autoDismiss, bannerIsOpen, dismissBanner } = this.props;
    const { bannerTimeout } = this.state;
    if (typeof window !== 'undefined') {
      if (autoDismiss && bannerIsOpen) {
        this.setState({ bannerTimeout: window.clearTimeout(bannerTimeout) });
      }
    }
    dismissBanner();
  };
  render() {
    // const {  } = this.state;
    const { children, bannerIsOpen, bannerType } = this.props;
    return (
      <div
        className={classnames(
          'info-banner',
          { 'info-banner--closed': !bannerIsOpen },
          { 'info-banner--success': bannerType === 'success' },
          { 'info-banner--warn': bannerType === 'warn' },
          { 'info-banner--info': bannerType === 'info' },
          { 'info-banner--error': bannerType === 'error' }
        )}
      >
        <div className="info-banner__content">{children}</div>
        <button className="info-banner__dismiss" onClick={this.handleDismiss}>
          <MdClose size={'1em'} />
          <span hidden>Dismiss</span>
        </button>
      </div>
    );
  }
}

InfoBanner.propTypes = {
  children: PropTypes.node,
  bannerIsOpen: PropTypes.bool,
  dismissBanner: PropTypes.func,
  bannerType: PropTypes.string,
  autoDismiss: PropTypes.bool,
  autoDismissAfter: PropTypes.number
};
InfoBanner.defaultProps = {
  bannerIsOpen: true,
  autoDismiss: false,
  autoDismissAfter: 10000
};

export default InfoBanner;

import React from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import '../styles/modules/badge.scss';

class Badge extends React.Component {
  state = {};
  render() {
    const { badgeType } = this.props;
    if (badgeType === 'sale') return <span className="badge badge--sale">SALE</span>;
  }
}

Badge.propTypes = {
  badgeType: PropTypes.string
};
Badge.defaultProps = {};

export default Badge;

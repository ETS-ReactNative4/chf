import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '../styles/modules/collapse-menu.scss';

class CollapseMenu extends React.Component {
  state = {
    isOpen: false
  };
  toggleMenu = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    const { children, label } = this.props;
    const { isOpen } = this.state;
    return (
      <div className={classnames('collapse-menu', { 'collapse-menu--open': isOpen })}>
        <div onClick={this.toggleMenu} className="collapse-menu__label">
          {label}
        </div>
        <div className="collapse-menu__content">{children}</div>
      </div>
    );
  }
}

CollapseMenu.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  startOpen: PropTypes.bool
};
CollapseMenu.defaultProps = {
  startOpen: false
};

export default CollapseMenu;

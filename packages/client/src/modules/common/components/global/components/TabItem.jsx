import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '../styles/modules/tab-item.scss';

class TabItem extends React.Component {
  state = {
    width: 0
  };
  componentDidMount() {
    if (typeof window !== 'undefined') window.addEventListener('resize', this.measureTabHeight, false);
    this.measureTabHeight();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.width !== prevState.width) this.measureTabHeight();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.measureTabHeight, false);
  }
  saveRef = ref => (this.containerNode = ref);
  measureTabHeight = () => {
    const { updateHeight, tabNumber } = this.props;
    const { clientHeight } = this.containerNode;
    updateHeight(tabNumber, clientHeight);
  };
  render() {
    const { children, tabNumber, activeTab, tabName, height, isMobile } = this.props;
    return (
      <div
        style={isMobile ? null : { minHeight: height }}
        ref={this.saveRef}
        className={classnames('tab-item', { 'tab-item--active': tabNumber === activeTab })}
      >
        <div className={'tab-item__name'}>{tabName}</div>
        {children}
      </div>
    );
  }
}

TabItem.propTypes = {
  children: PropTypes.node,
  tabNumber: PropTypes.number,
  activeTab: PropTypes.number,
  tabName: PropTypes.string,
  height: PropTypes.number,
  updateHeight: PropTypes.func,
  isMobile: PropTypes.bool
};

TabItem.defaultProps = {};

export default TabItem;

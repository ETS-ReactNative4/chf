import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import settings from '../../../../../../../../settings';
import '../styles/modules/tab-container.scss';

class TabContainer extends React.Component {
  state = {
    isMobile: false,
    activeTab: 0,
    totalTabs: 0,
    tabMaxHeight: null,
    tabHeights: []
  };
  componentDidMount() {
    const { defaultTab, tabs } = this.props;
    const { activeTab, totalTabs } = this.state;
    if (activeTab !== defaultTab) this.setState({ activeTab: defaultTab });
    if (totalTabs !== tabs.length) this.setState({ totalTabs: tabs.length });
    if (typeof window !== 'undefined') window.addEventListener('resize', this.measureTabContainer, false);
    this.measureTabContainer();
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.isMobile !== this.state.isMobile) this.measureTabContainer();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.measureTabContainer, false);
  }
  getLargest = arr => {
    let largest = 0;
    arr.forEach(item => {
      if (item > largest) largest = item;
    });
    return largest;
  };
  measureTabContainer = () =>
    this.setState({ isMobile: window.innerWidth >= settings.breakpoints.medium ? false : true });
  updateTabHeight = (tabNumber, newHeight) => {
    const { tabHeights } = this.state;
    tabHeights[tabNumber] = newHeight;
    this.setState({ tabHeights: tabHeights }, () => {
      const { tabMaxHeight, isMobile } = this.state;
      const largestHeight = this.getLargest(tabHeights);
      if (largestHeight > tabMaxHeight && !isMobile) this.setState({ tabMaxHeight: largestHeight + 48 });
    });
  };
  saveRef = ref => (this.containerNode = ref);
  selectTab = tabNum => this.setState({ activeTab: tabNum });
  render() {
    const { activeTab, totalTabs, tabMaxHeight, isMobile } = this.state;
    const { children, tabs } = this.props;
    return (
      <div ref={this.saveRef} className={'tab-container'} data-tab-total={totalTabs}>
        <div className={'tab-container__buttons'}>
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={classnames('tab-container__button', {
                'tab-container__button--active': activeTab === i
              })}
              onClick={() => this.selectTab(i)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className={'tab-container__items'} style={isMobile ? null : { minHeight: tabMaxHeight }}>
          {React.Children.map(children, (child, i) =>
            React.cloneElement(child, {
              activeTab: activeTab,
              tabNumber: i,
              tabName: tabs[i].name,
              height: tabMaxHeight,
              updateHeight: this.updateTabHeight,
              isMobile: isMobile
            })
          )}
        </div>
      </div>
    );
  }
}

TabContainer.propTypes = {
  children: PropTypes.node,
  tabs: PropTypes.array,
  defaultTab: PropTypes.number
};

TabContainer.defaultProps = {
  tabs: [{ name: 'Tab One' }, { name: 'Tab Two' }, { name: 'Tab Three' }],
  defaultTab: 0
};

export default TabContainer;

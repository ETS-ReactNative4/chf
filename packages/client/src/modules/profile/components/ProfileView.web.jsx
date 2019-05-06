import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// import classnames from 'classnames';
//import SubComponent from './SubComponent';
import { PageLayout, ScrollToTop } from '../../common/components/global';
import settings from '../../../../../../settings';
import ProfileMenu, { isAdminVerified } from './ProfileMenu';
import ProfileOverview from './ProfileOverview';
import ProfilePassword from './ProfilePassword';
import ProfileAddress from './ProfileAddress';
import ManageAdmins from './ManageAdmins';
import ManageCarousel from './ManageCarousel';
import ManageSpecs from './ManageSpecs';
import '../styles/profile-view.scss';

const adminViews = [
  { view: 'manageAdmins', component: ManageAdmins },
  { view: 'manageCarousel', component: ManageCarousel },
  { view: 'manageSpecs', component: ManageSpecs }
];

class ProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'profileOverview'
    };
  }

  componentDidMount() {
    this.tryFetchMore();
  }

  tryFetchMore = () => {
    const { productsLoading, sfy_shop, hasNextPage, loadMore } = this.props;
    if (productsLoading || !sfy_shop) {
      return setTimeout(() => this.tryFetchMore(), 500);
    }
    if (!productsLoading && sfy_shop && 'products' in sfy_shop && hasNextPage) {
      return loadMore();
    }
  };

  changeView = selectedView => this.setState({ currentView: selectedView });

  handleProductSelect = e => this.setState({ selectedProduct: e.target.value });

  renderAdminView = viewList => {
    if (!isAdminVerified(this.props)) return null;
    const { currentView } = this.state;
    const [selectedView] = viewList.filter(v => v.view === currentView);
    if (!selectedView) return null;
    const { component: Component } = selectedView;
    return <Component {...this.state} {...this.props} />;
  };

  render() {
    const { loading } = this.props;
    const { currentView } = this.state;
    const renderMetaData = () => (
      <Helmet
        title={`${settings.app.name}:  Quality Home Fitness Equipment for Sale.`}
        meta={[
          {
            name: 'description',
            content: `Shop local and save!  CA Home Fitness offers the best brands in home fitness equipment at the guaranteed best prices, including treadmills, ellipticals, bikes, rowers, strength training equipment, and more.  `
          },
          {
            name: 'keywords',
            content: `Treadmill, Elliptical machines, Cross Trainer, Exercise Bike, Home Gym, Rower, Commercial Equipment, Life Fitness, Precor, Spirit Fitness, Inspire Fitness, GoFit, Helix`
          }
        ]}
      />
    );
    if (loading) {
      return (
        <PageLayout>
          <div>Loading...</div>
        </PageLayout>
      );
    } else {
      return (
        <PageLayout>
          {renderMetaData()}
          <ScrollToTop />
          <div className="profile-view">
            <aside className="profile-view__sidebar">
              <ProfileMenu {...this.state} {...this.props} changeView={this.changeView} />
            </aside>
            <section className="profile-view__content">
              {currentView === 'profileOverview' ? <ProfileOverview /> : null}
              {currentView === 'profilePassword' ? <ProfilePassword /> : null}
              {currentView === 'profileAddress' ? <ProfileAddress /> : null}
              {this.renderAdminView(adminViews)}
            </section>
          </div>
        </PageLayout>
      );
    }
  }
}

ProfileView.propTypes = {
  loading: PropTypes.bool,
  productsLoading: PropTypes.bool,
  sfy_shop: PropTypes.object,
  hasNextPage: PropTypes.bool,
  loadMore: PropTypes.func
};
ProfileView.defaultProps = {
  loading: false
};

export default ProfileView;

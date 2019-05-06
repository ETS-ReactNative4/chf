import React from 'react';
import Helmet from 'react-helmet';
import AdminLayout from './AdminLayout';
import ProfileMenu, { isAdminVerified } from '../../profile/components/ProfileMenu';
import ProfileOverview from '../../profile/components/ProfileOverview';
import ProfilePassword from '../../profile/components/ProfilePassword';
import ProfileAddress from '../../profile/components/ProfileAddress';
// import ManageCarousel from '../../profile/components/ManageCarousel';
import Carousel from './CarouselImages';
import Menu from './Menu';

import ManageSpecs from '../../profile/components/ManageSpecs';
import ManageSeo from './Seo';
import ManageLocations from './Locations';

import '../../profile/styles/profile-view.scss';

// import ProfileView from '../../profile/containers/Profile';

// const renderMetaData = () => (
//   <Helmet
//     title="Admin"
//     meta={[
//       {
//         name: 'description',
//         content: 'Admin page'
//       }
//     ]}
//   />
// );
// const adminViews = [
//   // { view: 'manageAdmins', component: ManageAdmins },
//   { view: 'manageCarousel', component: Carousel },
//   { view: 'manageSpecs', component: ManageSpecs },
//   { view: 'manageSeo', component: ManageSeo },
//   { view: 'manageLocations', component: ManageLocations }
// ];
class AdminView extends React.Component {
  render() {
    // const { currentView } = this.state;
    return (
      <AdminLayout>
        {/* {renderMetaData()} */}
        <div className=" profile-view admin">
          <aside className="profile-view__sidebar">
            <Menu {...this.state} {...this.props} changeView={this.changeView} />
          </aside>
          <section className="profile-view__content">{this.props.children}</section>
        </div>
      </AdminLayout>
    );
  }
}

export default AdminView;

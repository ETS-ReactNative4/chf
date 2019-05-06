import React from 'react';

import ManageSeo from '../components/Seo';
/*eslint-disable no-unused-vars*/

import AdminView from '../components/AdminView';

class Seo extends React.Component {
  render() {
    console.log('The props::::', this.props);
    return (
      <AdminView {...this.props}>
        <ManageSeo {...this.props} />
      </AdminView>
    );
  }
}

export default Seo;

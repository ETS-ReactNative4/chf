/*eslint-disable no-unused-vars*/
import React from 'react';

import AdminView from '../components/AdminView';
import ManageSpecs from '../../profile/components/ManageSpecs';

class ProductSpecs extends React.Component {
  render() {
    // console.log('The props::::', this.props);
    return (
      <AdminView {...this.props}>
        <ManageSpecs {...this.props} />
      </AdminView>
    );
  }
}

export default ProductSpecs;

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { compose, graphql, withApollo } from 'react-apollo';
// import gql from 'graphql-tag';
// import { MdSearch } from 'react-icons/md';

import AdminView from '../components/AdminView';
import Loader from '../../common/components/global/components/Loader';
import '../styles/vendors.scss';
import VendorTable from '../components/Vendors/VendorTable';
// import { ADMIN_PRODUCTS_QUERY /*MODIFY_PRODUCT_DATA*/ } from '../../common/schema';
// import PRODUCTS_QUERY from '../graphql/Products.graphql';
import VENDORS_QUERY from '../../common/graphql/VendorsQuery.graphql';

const columns = [
  {
    title: '',
    dataIndex: 'node',
    key: 'logo_url',
    // eslint-disable-next-line
    render: (image, record) => {
      return (
        <div>
          <img src={image ? image : ''} alt="" />
          {/* <Link to={{ pathname: `/admin/locations/${record.node.handle}` }}>{text}</Link> */}
        </div>
      );
    }
  },
  {
    title: '',
    dataIndex: 'node',
    key: 'name',
    // eslint-disable-next-line
    render: (text, record) => {
      return (
        <div>
          {text}
          {/* <Link to={{ pathname: `/admin/locations/${record.node.handle}` }}>{text}</Link> */}
        </div>
      );
    }
  },
  {
    key: 'handle',
    // eslint-disable-next-line
    render: (text, record) => {
      return (
        <div>
          <Link to={{ pathname: `/admin/brands/${text}`, state: { vendor: record } }}>Edit</Link>
        </div>
      );
    }
  }
];

class Vendors extends Component {
  render() {
    const { loadingVendors, vendors } = this.props;
    // const { searchActive, searchValue, filteredProducts } = this.state;
    if (loadingVendors) {
      return (
        <AdminView {...this.props}>
          <Loader />
        </AdminView>
      );
    }
    return (
      <AdminView {...this.props}>
        <h2>Vendors</h2>
        <div className="admin__tableview">
          <div className="admin__vendors">
            <div className="admin__addvendor">
              <Link to={{ pathname: `/admin/brands/add-brand`, state: { vendor: null } }}>
                <h6>Add Vendor</h6>
              </Link>
            </div>
            <VendorTable dataSource={vendors} columns={columns} />
          </div>
        </div>
      </AdminView>
    );
  }
}
const VendorsApollo = compose(
  withApollo,
  graphql(VENDORS_QUERY, {
    props: ({ data: { loading, error, vendors } }) => {
      if (error) throw new Error(`Error in Vendors Query: ${error}`);
      return { loadingVendors: loading, vendors };
    }
  })
)(Vendors);

export default VendorsApollo;

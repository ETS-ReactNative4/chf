import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { PageLayout, ScrollToTop, FeaturedVendors, VendorList } from '../../common/components/global';
import settings from '../../../../../../settings';

const renderMetaData = () => (
  <Helmet
    title={`Home Fitness Brands We Carry - ${settings.app.name}`}
    meta={[
      {
        name: 'description',
        content: `Looking for a specific brand of home fitness equipment? We offer name brands such as Life Fitness, Precor, StairMaster and many more. Find your brand today!`
      },
      {
        name: 'keywords',
        content: `Treadmill, Elliptical machines, Cross Trainer, Exercise Bike, Home Gym, Rower, Commercial Equipment, Life Fitness, Precor, Spirit Fitness, Inspire Fitness, GoFit, Helix`
      }
    ]}
  />
);
class VendorsView extends React.Component {
  filterVendors = filter => {
    if (filter === 'featured') return this.props.vendors.filter(v => v.is_featured);
    if (filter === 'rest') return this.props.vendors.filter(v => !v.is_featured);
  };
  render() {
    const { vendors, loading } = this.props;

    if (loading || !vendors) {
      return (
        <PageLayout>
          {renderMetaData()}
          <div>Loading...</div>
        </PageLayout>
      );
    }
    return (
      <PageLayout>
        {renderMetaData()}
        <ScrollToTop />
        {/* <h1 className="page-header">Vendors</h1> */}
        <FeaturedVendors vendors={this.filterVendors('featured')} />
        <VendorList vendors={this.filterVendors('rest')} />
      </PageLayout>
    );
  }
}

VendorsView.propTypes = {
  loading: PropTypes.bool,
  vendors: PropTypes.array
};

export default VendorsView;

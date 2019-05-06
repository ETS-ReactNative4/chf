import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { PageLayout, ScrollToTop, CategoryGrid } from '../../common/components/global';
import settings from '../../../../../../settings';
import '../styles/products-view.scss';

class ProductsView extends React.Component {
  render() {
    const { loading } = this.props;
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

    return (
      <PageLayout>
        {renderMetaData()}
        <ScrollToTop />
        <div className="products-view">
          <h2 className="header header--upper header--centered header--primary">Product Categories</h2>
          {!loading ? <CategoryGrid categories={this.props.sfy_shop.collections.edges} /> : null}
        </div>
      </PageLayout>
    );
  }
}

ProductsView.propTypes = {
  sfy_shop: PropTypes.object,
  loading: PropTypes.bool
};

export default ProductsView;

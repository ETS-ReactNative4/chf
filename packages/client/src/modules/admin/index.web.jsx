import React from 'react';
// import { Route } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import Carousel from './containers/Carousel';
import ProductSpecs from './containers/ProductSpecs';
import Seo from './containers/Seo';
import Locations from './containers/Locations';
import Location from './containers/Location';
import Products from './containers/Products';
// import Products from './containers/Products';
import Vendors from './containers/Vendors';
import Vendor from './containers/Vendor';

import reducers from './reducers';
import { AuthRoute /*withLoadedUser,*/ } from '../user/containers/Auth';

import Feature from '../connector';

export default new Feature({
  route: [
    <AuthRoute exact path="/admin/dashboard" role={['admin']} component={Dashboard} />,
    <AuthRoute exact path="/admin/carousel" role={['admin']} component={Carousel} />,
    // <AuthRoute exact path="/admin/product-specs" role={['admin']} component={ProductSpecs} />,
    <AuthRoute exact path="/admin/seo" role={['admin']} component={Seo} />,
    <AuthRoute exact path="/admin/locations" role={['admin']} component={Locations} />,
    <AuthRoute exact path="/admin/locations/:location_handle" role={['admin']} component={Location} />,
    <AuthRoute exact path="/admin/products" role={['admin']} component={Products} />,
    <AuthRoute exact path="/admin/products/:product" role={['admin']} component={ProductSpecs} />,
    <AuthRoute exact path="/admin/brands" role={['admin']} component={Vendors} />,
    <AuthRoute exact path="/admin/brands/:brand" role={['admin']} component={Vendor} />
  ],
  reducer: { admin: reducers }
});

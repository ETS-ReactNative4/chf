import React from 'react';
import { Route } from 'react-router-dom';
import Feature from '../connector';
import Delivery from './containers/Delivery';
import Financing from './containers/Financing';
import Maintenance from './containers/Maintenance';
// import Services from './containers/Services';
import Terms from './containers/Terms';
import Contact from './containers/Contact';
import Warranty from './containers/Warranty';

export default new Feature({
  route: [
    <Route exact path="/delivery" component={Delivery} />,
    <Route exact path="/financing" component={Financing} />,
    <Route exact path="/maintenance" component={Maintenance} />,
    // <Route exact path="/services" component={Services} />,
    <Route exact path="/terms" component={Terms} />,
    <Route exact path="/contact" component={Contact} />,
    <Route exact path="/warranty" component={Warranty} />
  ]
});

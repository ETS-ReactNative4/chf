import React from 'react';
import { Route } from 'react-router-dom';
import Feature from '../connector';
import Checkout from './containers/Checkout';

export default new Feature({
  route: <Route exact path="/checkout" component={Checkout} />
});

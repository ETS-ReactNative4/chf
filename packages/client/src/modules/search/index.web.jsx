import React from 'react';
import { Route } from 'react-router-dom';
import Search from './containers/Search';
import Feature from '../connector';

export default new Feature({
  route: <Route exact path="/search" component={Search} />
});

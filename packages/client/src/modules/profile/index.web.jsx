import React from 'react';
import { Route } from 'react-router-dom';
import Profile from './containers/Profile';
import Feature from '../connector';

export default new Feature({
  route: <Route exact path="/profile" component={Profile} />
});

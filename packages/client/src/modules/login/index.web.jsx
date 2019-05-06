import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import translate from '../../i18n';
import { MenuItem } from '../../modules/common/components/web';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import resources from './locales';
import Feature from '../connector';

const NavLinkWithI18n = translate('signin')(({ t }) => (
  <NavLink to="/signin" className="nav-link" activeClassName="active">
    {t('navLink')}
  </NavLink>
));
export default new Feature({
  route: [<Route exact path="/signin" component={Signin} />, <Route exact path="/signup" component={Signup} />],
  navItem: (
    <MenuItem key="/Signin">
      <NavLinkWithI18n />
    </MenuItem>
  ),
  localization: { ns: 'signin', resources }
});

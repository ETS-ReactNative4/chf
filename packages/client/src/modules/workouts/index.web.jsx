import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import translate from '../../i18n';
import { MenuItem } from '../../modules/common/components/web';
import Workouts from './containers/Workouts';
import resources from './locales';
import Feature from '../connector';

const NavLinkWithI18n = translate('workouts')(({ t }) => (
  <NavLink to="/workouts" className="nav-link" activeClassName="active">
    {t('navLink')}
  </NavLink>
));
export default new Feature({
  route: <Route exact path="/workouts" component={Workouts} />,
  navItem: (
    <MenuItem key="/Workouts">
      <NavLinkWithI18n />
    </MenuItem>
  ),
  localization: { ns: 'workouts', resources }
});

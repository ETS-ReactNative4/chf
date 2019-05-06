import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import translate from '../../i18n';
import { MenuItem } from '../../modules/common/components/web';
import About from './containers/About';
import resources from './locales';
import Feature from '../connector';

const NavLinkWithI18n = translate('about')(({ t }) => (
  <NavLink to="/about" className="nav-link" activeClassName="active">
    {t('navLink')}
  </NavLink>
));
export default new Feature({
  route: <Route exact path="/about" component={About} />,
  navItem: (
    <MenuItem key="/About">
      <NavLinkWithI18n />
    </MenuItem>
  ),
  localization: { ns: 'about', resources }
});

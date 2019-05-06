import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import translate from '../../i18n';
import { MenuItem } from '../../modules/common/components/web';
import Resources from './containers/Resources';
import resources from './locales';
import Feature from '../connector';

const NavLinkWithI18n = translate('resources')(({ t }) => (
  <NavLink to="/resources" className="nav-link" activeClassName="active">
    {t('navLink')}
  </NavLink>
));
export default new Feature({
  route: <Route exact path="/resources" component={Resources} />,
  navItem: (
    <MenuItem key="/Resources">
      <NavLinkWithI18n />
    </MenuItem>
  ),
  localization: { ns: 'resources', resources }
});

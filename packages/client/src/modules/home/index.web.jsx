import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import reducers from './reducers';
import translate from '../../i18n';
import { MenuItem } from '../../modules/common/components/web';
import Home from './containers/Home';
import resources from './locales';
import Feature from '../connector';

const NavLinkWithI18n = translate('home')(({ t }) => (
  <NavLink to="/" className="nav-link" activeClassName="active">
    {t('navLink')}
  </NavLink>
));
export default new Feature({
  route: <Route exact path="/" component={Home} />,
  navItem: (
    <MenuItem key="/Home">
      <NavLinkWithI18n />
    </MenuItem>
  ),
  localization: { ns: 'home', resources },
  reducer: { home: reducers }
});

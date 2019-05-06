import React from 'react';
import { Route } from 'react-router-dom';

// import translate from '../../i18n';
// import { MenuItem } from '../../modules/common/components/web';
import Vendors from './containers/Vendors';
import resources from './locales';
import Feature from '../connector';

// const NavLinkWithI18n = translate('vendors')(({ t }) => (
//   <NavLink to="/vendors" className="nav-link" activeClassName="active">
//     {t('navLink')}
//   </NavLink>
// ));
export default new Feature({
  route: <Route exact path="/brands" component={Vendors} />,
  // navItem: (
  //   <MenuItem key="/vendors">
  //     <NavLinkWithI18n />
  //   </MenuItem>
  // ),
  localization: { ns: 'vendors', resources }
});

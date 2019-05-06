import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import translate from '../../i18n';
import { MenuItem } from '../../modules/common/components/web';
import Locations from './containers/Locations';
// import LocationLosAngeles from './containers/LocationLosAngeles';
// import LocationNewportBeach from './containers/LocationNewportBeach';
// import LocationTorrace from './containers/LocationTorrace';
// import LocationPasadena from './containers/LocationPasadena';
// import LocationIrvine from './containers/LocationIrvine';
// import LocationShermanOaks from './containers/LocationShermanOaks';
import LocationWestHollywood from './containers/LocationWestHollywood';
import resources from './locales';
import Feature from '../connector';

const NavLinkWithI18n = translate('locations')(({ t }) => (
  <NavLink to="/locations" className="nav-link" activeClassName="active">
    {t('navLink')}
  </NavLink>
));
export default new Feature({
  route: [
    <Route exact path="/locations" component={Locations} />,
    // <Route exact path="/locations/los-angeles" component={LocationLosAngeles} />,
    // <Route exact path="/locations/newport-beach" component={LocationNewportBeach} />,
    // <Route exact path="/locations/torrace" component={LocationTorrace} />,
    // <Route exact path="/locations/pasadena" component={LocationPasadena} />,
    // <Route exact path="/locations/irvine" component={LocationIrvine} />,
    // <Route exact path="/locations/sherman-oaks" component={LocationShermanOaks} />,
    <Route exact path="/locations/:location_handle" component={LocationWestHollywood} />
  ],
  navItem: (
    <MenuItem key="/Locations">
      <NavLinkWithI18n />
    </MenuItem>
  ),
  localization: { ns: 'locations', resources }
});

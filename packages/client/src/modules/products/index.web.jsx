import React from 'react';
import { Route } from 'react-router-dom';

// import translate from '../../i18n';
// import { MenuItem } from '../../modules/common/components/web';
import Products from './containers/Products';
import Category from './containers/Category';
import Vendor from './containers/Vendor';
import SingleProduct from './containers/SingleProduct';
import resources from './locales';
import Feature from '../connector';

// const NavLinkWithI18n = translate('products')(({ t }) => (
//   <NavLink to="/products" className="nav-link" activeClassName="active">
//     {t('navLink')}
//   </NavLink>
// ));
export default new Feature({
  route: [
    <Route exact path="/products" component={Products} />,
    <Route exact path="/products/:category" component={Category} />,
    <Route exact path="/products/brands/:vendor_name" component={Vendor} />,
    <Route exact path="/product/:vendor_name/:product_name/:category" component={SingleProduct} />
  ],
  localization: { ns: 'products', resources }
});

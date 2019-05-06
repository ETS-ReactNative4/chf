import admin from './admin';
import product from './product';
import defaultRouter from './defaultRouter';
import i18n from './i18n';
import cart from './cart';
import home from './home';
import footer from './footer';
import checkout from './checkout';
import products from './products';
import workouts from './workouts';
import vendors from './vendors';
import locations from './locations';
import resources from './resources';
import profile from './profile';
import about from './about';
import user from './user';
import search from './search';
import pageNotFound from './pageNotFound';
import login from './login';
import './favicon';

import Feature from './connector';

export default new Feature(
  defaultRouter,
  admin,
  cart,
  login,
  home,
  footer,
  checkout,
  products,
  vendors,
  locations,
  resources,
  workouts,
  profile,
  about,
  product,
  user,
  search,
  pageNotFound,
  i18n
);

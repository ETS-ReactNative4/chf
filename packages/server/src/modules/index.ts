import dealers from './dealers';
import admin from './admin';
import vendor from './vendor';
import categories from './categories';
import product from './product';
import cookies from './cookies';
import i18n from './i18n';
import user from './user';
import contact from './contact';
import mailer from './mailer';
import graphqlTypes from './graphqlTypes';
import './debug';

import Feature from './connector';

export default new Feature(dealers, admin, categories, product, vendor, cookies, i18n, user, contact, mailer, graphqlTypes);

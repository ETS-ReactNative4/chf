require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/products/containers/Vendor.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/defineProperty");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/core-js/json/stringify");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_VendorView__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../client/src/modules/products/components/VendorView.web.jsx");
/* harmony import */ var _common_schema__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../client/src/modules/common/schema/index.js");
/* harmony import */ var _common_graphql_SFY_sfyCollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../client/src/modules/common/graphql/SFY/sfyCollectionsQuery.graphql");
/* harmony import */ var _common_graphql_SFY_sfyCollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_SFY_sfyCollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _common_graphql_VendorQuery_graphql__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../client/src/modules/common/graphql/VendorQuery.graphql");
/* harmony import */ var _common_graphql_VendorQuery_graphql__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_VendorQuery_graphql__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _common_graphql_SFY_sfySingleCategoryByHandle_graphql__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../client/src/modules/common/graphql/SFY/sfySingleCategoryByHandle.graphql");
/* harmony import */ var _common_graphql_SFY_sfySingleCategoryByHandle_graphql__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_SFY_sfySingleCategoryByHandle_graphql__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _common_graphql_SFY_sfyAdminCollectionByHandle_graphql__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../client/src/modules/common/graphql/SFY/sfyAdminCollectionByHandle.graphql");
/* harmony import */ var _common_graphql_SFY_sfyAdminCollectionByHandle_graphql__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_SFY_sfyAdminCollectionByHandle_graphql__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../client/src/modules/common/graphql/VendorsQuery.graphql");
/* harmony import */ var _common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _common_graphql_CategoryQuery_graphql__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("../client/src/modules/common/graphql/CategoryQuery.graphql");
/* harmony import */ var _common_graphql_CategoryQuery_graphql__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_CategoryQuery_graphql__WEBPACK_IMPORTED_MODULE_21__);












var _this2 = undefined;













var Vendor = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10___default()(Vendor, _React$Component);

  function Vendor() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, Vendor);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default()(this, (Vendor.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default()(Vendor)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(Vendor, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_VendorView__WEBPACK_IMPORTED_MODULE_14__["default"], this.props);
    }
  }]);

  return Vendor;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

var VendorWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_13__["compose"])(Object(_common_schema__WEBPACK_IMPORTED_MODULE_15__["FILTERED_PRODUCTS_QUERY"])(), Object(react_apollo__WEBPACK_IMPORTED_MODULE_13__["graphql"])(_common_graphql_SFY_sfySingleCategoryByHandle_graphql__WEBPACK_IMPORTED_MODULE_18___default.a, {
  options: function options(props) {
    var handle = props.match.params.category;
    // const page = props.location.search;
    // console.log('PROPS HERE::', props);
    // console.log('PAGE', page);

    var reg = /[=](\d)/;
    var first = parseInt(reg.exec(props.location.search)[1]);
    // console.log('FIRST ', first);
    var displayLim = 12;
    var fetchNum = first * displayLim;
    // console.log('FETCHNUM:', fetchNum);
    return { variables: { handle: handle, first: fetchNum }, fetchPolicy: 'cache-first' };
  },
  props: function props(_ref) {
    var data = _ref.data;
    var loading = data.loading,
        error = data.error,
        sfy_shop = data.sfy_shop,
        fetchMore = data.fetchMore,
        variables = data.variables;
    // console.log('LOADING:??', data);

    var currEndCursor = void 0,
        hasNextPage = void 0,
        hasPreviousPage = void 0;
    if (!loading && sfy_shop) {
      var products = sfy_shop.collectionByHandle.products;

      if (products.edges.length > 0) currEndCursor = products.edges[products.edges.length - 1].cursor;
      hasNextPage = products.pageInfo.hasNextPage;
      hasPreviousPage = products.pageInfo.hasPreviousPage;
    }
    // console.log('Products length',sfy_shop);
    var loadMore = function () {
      var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
        var after = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currEndCursor;
        var updatedVars, data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                updatedVars = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, variables, { after: after, first: first });
                _context.next = 3;
                return fetchMore({
                  variables: updatedVars,
                  updateQuery: function updateQuery(prevResult, _ref3) {
                    var fetchMoreResult = _ref3.fetchMoreResult;

                    if (fetchMoreResult.sfy_shop.collectionByHandle.products.edges.length === 0) return prevResult;
                    // console.log('PREVRESULT:', prevResult);
                    var updatedResult = JSON.parse(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(prevResult));
                    updatedResult.sfy_shop.collectionByHandle.products.edges = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(prevResult.sfy_shop.collectionByHandle.products.edges), babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(fetchMoreResult.sfy_shop.collectionByHandle.products.edges));
                    updatedResult.sfy_shop.collectionByHandle.products.pageInfo = fetchMoreResult.sfy_shop.collectionByHandle.products.pageInfo;

                    return updatedResult;
                  }
                });

              case 3:
                data = _context.sent;
                return _context.abrupt('return', data);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function loadMore() {
        return _ref2.apply(this, arguments);
      };
    }();
    // console.log('WHAT THE FUCKK::', sfy_shop);
    if (error) throw new Error('Error in Products Query: ' + error);
    if (loading || !sfy_shop) return { loading: loading };
    if (!loading && sfy_shop) {
      return {
        loading: loading,
        category: sfy_shop.collectionByHandle,
        currEndCursor: currEndCursor,
        hasNextPage: hasNextPage,
        hasPreviousPage: hasPreviousPage,
        loadMore: loadMore
      };
    }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_13__["graphql"])(_common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_20___default.a, {
  props: function props(_ref4) {
    var _ref4$data = _ref4.data,
        loading = _ref4$data.loading,
        error = _ref4$data.error,
        vendors = _ref4$data.vendors;

    if (error) throw new Error('Error in Vendors Query: ' + error);
    return { loading: loading, vendors: vendors };
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_13__["graphql"])(_common_graphql_CategoryQuery_graphql__WEBPACK_IMPORTED_MODULE_21___default.a, {
  options: function options(props) {
    var handle = props.match.params.category;

    return { variables: { handle: handle } };
  },
  props: function props(_ref5) {
    var _ref5$data = _ref5.data,
        loading = _ref5$data.loading,
        error = _ref5$data.error,
        locCategory = _ref5$data.category;

    if (error) throw new Error('Error in Vendors Query: ' + error);
    return { loading: loading, locCategory: locCategory };
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_13__["graphql"])(_common_graphql_SFY_sfyAdminCollectionByHandle_graphql__WEBPACK_IMPORTED_MODULE_19___default.a, {
  options: function options(props) {
    var handle = props.match.params.category;

    return { variables: { handle: handle } };
  },
  props: function props(_ref6) {
    var _ref6$data = _ref6.data,
        admin_collectionByHandle = _ref6$data.admin_collectionByHandle,
        loading = _ref6$data.loading,
        error = _ref6$data.error;

    // console.log('LOADING::', loading);
    if (!loading && !error) {
      var productsCount = admin_collectionByHandle.productsCount;

      return { productsCount: productsCount, loadingCount: loading };
    }
    if (error) {
      return { countError: error, productsCount: null };
    }
    return { loadingCount: loading, productsCount: null };

    // if (loadingProductCount) {
    //   return { loadingProductCount };
    // }
    // if (!error) {
    //   return { loadingProductCount, productsCount };
    // } else {
    //   return { countError: error };
    // }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_13__["graphql"])(_common_graphql_SFY_sfyCollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_16___default.a, {
  options: function options() {
    return { variables: babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'first', 50) };
  },
  props: function props(_ref7) {
    var data = _ref7.data;
    var loading = data.loading,
        error = data.error,
        sfy_shop_collections = data.sfy_shop;

    if (error) throw new Error('Error in Categories (Vendor Page) Query: ' + error);
    return { loading: loading, sfy_shop_collections: sfy_shop_collections };
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_13__["graphql"])(_common_graphql_VendorQuery_graphql__WEBPACK_IMPORTED_MODULE_17___default.a, {
  options: function options(props) {
    console.log('PROPS MATCH::', props.match.params);
    return { variables: { input: { handle: props.match.params.vendor_name } } };
  },
  props: function props(_ref8) {
    var data = _ref8.data;
    var loading = data.loading,
        error = data.error,
        vendor = data.vendor;
    // console.log('DATA:::', data);

    if (error) throw new Error('Error in Categories (Vendor Page) Query: ' + error);
    return { loading: loading, vendor: vendor };
  }
}))(Vendor);

Vendor.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object,
  search: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string
};

/* harmony default export */ __webpack_exports__["default"] = (VendorWithApollo);

/***/ }),

/***/ "../client/src/modules/user/index.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../client/src/i18n/index.ts");
/* harmony import */ var _access__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../client/src/modules/user/access/index.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../client/src/modules/user/resolvers/index.jsx");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../client/src/modules/user/locales/index.js");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_locales__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_common_components_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/common/components/web/index.jsx");
/* harmony import */ var _containers_Register__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../client/src/modules/user/containers/Register.jsx");
/* harmony import */ var _containers_Login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/user/containers/Login.jsx");
/* harmony import */ var _containers_Auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/user/containers/Auth.web.jsx");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/connector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withUser", function() { return _containers_Auth__WEBPACK_IMPORTED_MODULE_12__["withUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasRole", function() { return _containers_Auth__WEBPACK_IMPORTED_MODULE_12__["hasRole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withLoadedUser", function() { return _containers_Auth__WEBPACK_IMPORTED_MODULE_12__["withLoadedUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IfLoggedIn", function() { return _containers_Auth__WEBPACK_IMPORTED_MODULE_12__["IfLoggedIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IfNotLoggedIn", function() { return _containers_Auth__WEBPACK_IMPORTED_MODULE_12__["IfNotLoggedIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withLogout", function() { return _containers_Auth__WEBPACK_IMPORTED_MODULE_12__["withLogout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthRoute", function() { return _containers_Auth__WEBPACK_IMPORTED_MODULE_12__["AuthRoute"]; });




var _this = undefined;









// import ProfileView from './components/ProfileView';

// import Users from './containers/Users';
// import UserEdit from './containers/UserEdit';
// import UserAdd from './containers/UserAdd';


// import ForgotPassword from './containers/ForgotPassword';
// import ResetPassword from './containers/ResetPassword';





// const ProfileName = withLoadedUser(
//   ({ currentUser }) => (currentUser ? currentUser.fullName || currentUser.username : null)
// );

var LogoutLink = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Object(_containers_Auth__WEBPACK_IMPORTED_MODULE_12__["withLogout"])(function (_ref) {
  var logout = _ref.logout,
      history = _ref.history;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
    'a',
    {
      href: 'javascript:void(0)',
      onClick: function onClick(e) {
        e.preventDefault();
        babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return logout();

                case 2:
                  history.push('/');

                case 3:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }))();
      },
      className: 'nav-link'
    },
    'Logout'
  );
}));



var NavLinkUsersWithI18n = Object(_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('user')(function (_ref3) {
  var t = _ref3.t;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
    react_router_dom__WEBPACK_IMPORTED_MODULE_4__["NavLink"],
    { to: '/users', className: 'nav-link', activeClassName: 'active' },
    t('navLink.users')
  );
});
var NavLinkLoginWithI18n = Object(_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('user')(function (_ref4) {
  var t = _ref4.t;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
    react_router_dom__WEBPACK_IMPORTED_MODULE_4__["NavLink"],
    { to: '/login', className: 'nav-link', activeClassName: 'active' },
    t('navLink.sign')
  );
});

/* harmony default export */ __webpack_exports__["default"] = (new _connector__WEBPACK_IMPORTED_MODULE_13__["default"](_access__WEBPACK_IMPORTED_MODULE_6__["default"], {
  route: [
  // <AuthRoute exact path="/profile" role={['user', 'admin']} redirect="/login" component={ProfileView} />,
  // <AuthRoute exact path="/users" redirect="/profile" role="admin" component={Users} />,
  // <AuthRoute exact path="/users/new" role={['admin']} component={UserAdd} />,
  // <AuthRoute path="/users/:id" redirect="/profile" role={['user', 'admin']} component={UserEdit} />,
  react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_Auth__WEBPACK_IMPORTED_MODULE_12__["AuthRoute"], { exact: true, path: '/register', redirectOnLoggedIn: true, redirect: '/admin/dashboard', component: _containers_Register__WEBPACK_IMPORTED_MODULE_10__["default"] }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_Auth__WEBPACK_IMPORTED_MODULE_12__["AuthRoute"], {
    exact: true,
    path: '/admin/login',
    redirectOnLoggedIn: true,
    redirect: '/admin/dashboard',
    component: Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(function (_ref5) {
      var history = _ref5.history;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_Login__WEBPACK_IMPORTED_MODULE_11__["default"], { onLogin: function onLogin() {
          return history.push('/admin/dashboard');
        } });
    })
  })],
  // navItem: [
  //   <IfLoggedIn key="/users" role="admin">
  //     <MenuItem>
  //       <NavLinkUsersWithI18n />
  //     </MenuItem>
  //   </IfLoggedIn>
  // ],
  // navItemRight: [
  //   // <IfLoggedIn key="/profile">
  //   //   <MenuItem>
  //   //     <NavLink to="/profile" className="nav-link" activeClassName="active">
  //   //       <ProfileName />
  //   //     </NavLink>
  //   //   </MenuItem>
  //   // </IfLoggedIn>,
  //   <IfLoggedIn key="/logout">
  //     <MenuItem>
  //       <LogoutLink />
  //     </MenuItem>
  //   </IfLoggedIn>,
  //   <IfNotLoggedIn key="/login">
  //     <MenuItem>
  //       <NavLinkLoginWithI18n />
  //     </MenuItem>
  //   </IfNotLoggedIn>
  // ],
  resolver: _resolvers__WEBPACK_IMPORTED_MODULE_7__["default"],
  localization: { ns: 'user', resources: _locales__WEBPACK_IMPORTED_MODULE_8___default.a },
  // eslint-disable-next-line react/display-name
  rootComponentFactory: function rootComponentFactory(req) {
    return req ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_cookie__WEBPACK_IMPORTED_MODULE_3__["CookiesProvider"], { cookies: req.universalCookies }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_cookie__WEBPACK_IMPORTED_MODULE_3__["CookiesProvider"], null);
  }
}));

/***/ })

};
//# sourceMappingURL=index.97a5b2264da16b69ccd9.js.map
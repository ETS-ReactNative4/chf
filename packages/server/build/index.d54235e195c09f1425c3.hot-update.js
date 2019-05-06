require("source-map-support").install();
exports.id = "index";
exports.modules = {

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

/***/ }),

/***/ "./src/middleware/website.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/core-js/json/stringify");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var apollo_link_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("apollo-link-schema");
/* harmony import */ var apollo_link_schema__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(apollo_link_schema__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _net__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/net.js");
/* harmony import */ var _common_createApolloClient__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../common/createApolloClient.js");
/* harmony import */ var _common_createReduxStore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../common/createReduxStore.js");
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/middleware/html.jsx");
/* harmony import */ var _client_src_app_Routes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../client/src/app/Routes.jsx");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/modules/index.ts");
/* harmony import */ var _api_schema__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./src/api/schema.js");





var _this = undefined;






















var assetMap = void 0;
var playgroundUrl = '/graphiql';

var renderServerSide = function () {
  var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {
    var clientModules, schema, schemaLink, client, initialState, store, context, App, sheet, html, css, helmet, apolloState, page;
    return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // console.log('EXECUTING RENDER ', new Date().getMinutes(), new Date().getSeconds());
            clientModules = __webpack_require__("../client/src/modules/index.js").default;
            // console.log('ABOUT TO CREATE SCHEMA;::', new Date().getMinutes(), new Date().getSeconds());

            _context.next = 3;
            return Object(_api_schema__WEBPACK_IMPORTED_MODULE_21__["default"])();

          case 3:
            schema = _context.sent;
            _context.t0 = apollo_link_schema__WEBPACK_IMPORTED_MODULE_6__["SchemaLink"];
            _context.t1 = schema;
            _context.next = 8;
            return _modules__WEBPACK_IMPORTED_MODULE_20__["default"].createContext(req, res);

          case 8:
            _context.t2 = _context.sent;
            _context.t3 = {
              schema: _context.t1,
              context: _context.t2
            };
            schemaLink = new _context.t0(_context.t3);
            client = Object(_common_createApolloClient__WEBPACK_IMPORTED_MODULE_16__["default"])({
              apiUrl: _net__WEBPACK_IMPORTED_MODULE_15__["apiUrl"],
              createNetLink: !_net__WEBPACK_IMPORTED_MODULE_15__["isApiExternal"] ? function () {
                return schemaLink;
              } : undefined,
              links: clientModules.link,
              clientResolvers: clientModules.resolvers
            });
            initialState = {};

            console.log('CLIENT::', babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(client));
            store = Object(_common_createReduxStore__WEBPACK_IMPORTED_MODULE_17__["default"])(initialState, client);
            context = {};
            // const App = clientModules.getWrappedRoot(
            //   <Provider store={store}>
            //     <ApolloProvider client={client}>
            //       {clientModules.getDataRoot(
            //         <StaticRouter location={req.url} context={context}>
            //           {Routes}
            //         </StaticRouter>
            //       )}
            //     </ApolloProvider>
            //   </Provider>,
            //   req
            // );

            App = clientModules.getWrappedRoot(

            // <CookiesProvider cookies={req.universalCookies}>
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              react_redux__WEBPACK_IMPORTED_MODULE_9__["Provider"],
              { store: store },
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                react_apollo__WEBPACK_IMPORTED_MODULE_8__["ApolloProvider"],
                { client: client },
                clientModules.getDataRoot(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                  react_router__WEBPACK_IMPORTED_MODULE_10__["StaticRouter"],
                  { location: req.url, context: context },
                  _client_src_app_Routes__WEBPACK_IMPORTED_MODULE_19__["default"]
                ))
              )
            ), req
            // </CookiesProvider>
            );
            _context.next = 19;
            return Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["getDataFromTree"])(App);

          case 19:
            console.log('CLIENT: AFTER:::', babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(client));
            sheet = new styled_components__WEBPACK_IMPORTED_MODULE_11__["ServerStyleSheet"]();
            html = react_dom_server__WEBPACK_IMPORTED_MODULE_5___default.a.renderToString(sheet.collectStyles(App)
            // sheet.collectStyles(
            //   // clientModules.getWrappedRoot(
            //   <CookiesProvider cookies={req.universalCookies}>
            //     <Provider store={store}>
            //       <ApolloProvider client={client}>
            //         {/* {clientModules.getDataRoot( */}
            //         <StaticRouter location={req.url} context={context}>
            //           {Routes}
            //         </StaticRouter>
            //         {/* )} */}
            //       </ApolloProvider>
            //     </Provider>
            //   </CookiesProvider>
            //   // )
            // )
            );
            css = sheet.getStyleElement().map(function (el, idx) {
              return el ? react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(el, { key: idx }) : el;
            });
            helmet = react_helmet__WEBPACK_IMPORTED_MODULE_14___default.a.renderStatic(); // Avoid memory leak while tracking mounted instances

            if (context.pageNotFound === true) {
              res.status(404);
              // res.end();
            } else {
              if (context.url) {
                res.writeHead(301, { Location: context.url });
                res.end();
              } else {
                if (true) {
                  assetMap = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_12___default.a.readFileSync(path__WEBPACK_IMPORTED_MODULE_13___default.a.join("../client/build", 'assets.json')));
                }
                apolloState = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, client.cache.extract());
                page = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_html__WEBPACK_IMPORTED_MODULE_18__["default"], { content: html, state: apolloState, assetMap: assetMap, css: css, helmet: helmet });

                res.send('<!doctype html>\n' + react_dom_server__WEBPACK_IMPORTED_MODULE_5___default.a.renderToStaticMarkup(page));
                res.end();
              }
            }

          case 25:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function renderServerSide(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = ((function () {
  var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(req, res, next) {
    return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            if (!(req.url === playgroundUrl)) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt('return', next());

          case 5:
            if (!(req.path.indexOf('.') < 0 && true)) {
              _context2.next = 11;
              break;
            }

            _context2.next = 8;
            return renderServerSide(req, res);

          case 8:
            return _context2.abrupt('return', _context2.sent);

          case 11:
            if (false) {} else {
              next();
            }

          case 12:
            _context2.next = 17;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2['catch'](0);

            next(_context2.t0);

          case 17:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[0, 14]]);
  }));

  return function (_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
})());

/***/ })

};
//# sourceMappingURL=index.6e765c1db2fb4d45af60.js.map
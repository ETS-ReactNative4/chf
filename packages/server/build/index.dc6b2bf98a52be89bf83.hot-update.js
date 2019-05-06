require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/user/containers/Auth.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoute", function() { return AuthRoute; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AuthBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../client/src/modules/user/containers/AuthBase.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withUser", function() { return _AuthBase__WEBPACK_IMPORTED_MODULE_5__["withUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasRole", function() { return _AuthBase__WEBPACK_IMPORTED_MODULE_5__["hasRole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withLoadedUser", function() { return _AuthBase__WEBPACK_IMPORTED_MODULE_5__["withLoadedUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IfLoggedIn", function() { return _AuthBase__WEBPACK_IMPORTED_MODULE_5__["IfLoggedIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IfNotLoggedIn", function() { return _AuthBase__WEBPACK_IMPORTED_MODULE_5__["IfNotLoggedIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withLogout", function() { return _AuthBase__WEBPACK_IMPORTED_MODULE_5__["withLogout"]; });









var AuthRoute = Object(_AuthBase__WEBPACK_IMPORTED_MODULE_5__["withLoadedUser"])(function (_ref) {
  var currentUser = _ref.currentUser,
      role = _ref.role,
      _ref$redirect = _ref.redirect,
      redirect = _ref$redirect === undefined ? '/admin/login' : _ref$redirect,
      redirectOnLoggedIn = _ref.redirectOnLoggedIn,
      Component = _ref.component,
      rest = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ['currentUser', 'role', 'redirect', 'redirectOnLoggedIn', 'component']);

  var RenderComponent = function RenderComponent(props) {
    console.log('CURRENTUER:::', currentUser, role);
    // The users is not logged in
    if (redirectOnLoggedIn && currentUser) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], { to: { pathname: redirect } });
    }

    return isRoleMatch(role, currentUser) ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ currentUser: currentUser }, props, rest)) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], { to: { pathname: redirect } });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rest, { render: RenderComponent }));
});

AuthRoute.propTypes = {
  role: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),
  redirect: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  redirectOnLoggedIn: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};

var isRoleMatch = function isRoleMatch(role, currentUser) {
  if (!role) {
    return true;
  }
  return currentUser && (Array.isArray(role) ? role : [role]).includes(currentUser.role);
};




/***/ })

};
//# sourceMappingURL=index.1b833d953cbc453e86a7.js.map
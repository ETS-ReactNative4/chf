require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/admin/containers/Seo.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../client/src/modules/admin/components/Seo/index.js");
/* harmony import */ var _components_AdminView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../client/src/modules/admin/components/AdminView.web.jsx");








/*eslint-disable no-unused-vars*/



var Seo = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Seo, _React$Component);

  function Seo() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Seo);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Seo.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(Seo)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Seo, [{
    key: 'render',
    value: function render() {
      console.log('The props::::', this.props);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        _components_AdminView__WEBPACK_IMPORTED_MODULE_7__["default"],
        this.props,
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Seo__WEBPACK_IMPORTED_MODULE_6__["default"], this.props)
      );
    }
  }]);

  return Seo;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Seo);

/***/ }),

/***/ "../client/src/modules/admin/index.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_Dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../client/src/modules/admin/containers/Dashboard.jsx");
/* harmony import */ var _containers_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../client/src/modules/admin/containers/Carousel.jsx");
/* harmony import */ var _containers_ProductSpecs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../client/src/modules/admin/containers/ProductSpecs.jsx");
/* harmony import */ var _containers_Seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../client/src/modules/admin/containers/Seo.jsx");
/* harmony import */ var _containers_Locations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../client/src/modules/admin/containers/Locations.jsx");
/* harmony import */ var _containers_Locations__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_containers_Locations__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../client/src/modules/admin/reducers/index.js");
/* harmony import */ var _user_containers_Auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../client/src/modules/user/containers/Auth.web.jsx");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../client/src/modules/connector.ts");

// import { Route } from 'react-router-dom';











/* harmony default export */ __webpack_exports__["default"] = (new _connector__WEBPACK_IMPORTED_MODULE_8__["default"]({
  route: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthRoute"], { exact: true, path: '/admin/dashboard', role: ['admin'], component: _containers_Dashboard__WEBPACK_IMPORTED_MODULE_1__["default"] }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthRoute"], { exact: true, path: '/admin/carousel', role: ['admin'], component: _containers_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"] }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthRoute"], { exact: true, path: '/admin/product-specs', role: ['admin'], component: _containers_ProductSpecs__WEBPACK_IMPORTED_MODULE_3__["default"] }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthRoute"], { exact: true, path: '/admin/seo', role: ['admin'], component: _containers_Seo__WEBPACK_IMPORTED_MODULE_4__["default"] }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthRoute"], { exact: true, path: '/admin/locations', role: ['admin'], component: _containers_Locations__WEBPACK_IMPORTED_MODULE_5___default.a })],
  reducer: { admin: _reducers__WEBPACK_IMPORTED_MODULE_6__["default"] }
}));

/***/ })

};
//# sourceMappingURL=index.59a3a6672c179af368dc.js.map
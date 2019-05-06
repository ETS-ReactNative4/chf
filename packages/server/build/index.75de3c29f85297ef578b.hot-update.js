require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/admin/containers/Locations.jsx":
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
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../client/src/modules/admin/graphql/Dealers.graphql");
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../client/src/modules/admin/graphql/DealerQuery.graphql");
/* harmony import */ var _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../client/src/modules/admin/graphql/UpdateDealer.graphql");
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Locations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/admin/components/Locations/index.js");
/* harmony import */ var _components_AdminView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../client/src/modules/admin/components/AdminView.web.jsx");












/*eslint-disable no-unused-vars*/



var ProductSpecs = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ProductSpecs, _React$Component);

  function ProductSpecs() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ProductSpecs);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (ProductSpecs.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(ProductSpecs)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ProductSpecs, [{
    key: 'render',
    value: function render() {
      console.log('The props::::', this.props);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        _components_AdminView__WEBPACK_IMPORTED_MODULE_10__["default"],
        this.props,
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Locations__WEBPACK_IMPORTED_MODULE_9__["default"], this.props)
      );
    }
  }]);

  return ProductSpecs;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProductSpecs);

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
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../client/src/modules/admin/reducers/index.js");
/* harmony import */ var _user_containers_Auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../client/src/modules/user/containers/Auth.web.jsx");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../client/src/modules/connector.ts");

// import { Route } from 'react-router-dom';











/* harmony default export */ __webpack_exports__["default"] = (new _connector__WEBPACK_IMPORTED_MODULE_8__["default"]({
  route: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthRoute"], { exact: true, path: '/admin/dashboard', role: ['admin'], component: _containers_Dashboard__WEBPACK_IMPORTED_MODULE_1__["default"] }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthRoute"], { exact: true, path: '/admin/carousel', role: ['admin'], component: _containers_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"] }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthRoute"], { exact: true, path: '/admin/product-specs', role: ['admin'], component: _containers_ProductSpecs__WEBPACK_IMPORTED_MODULE_3__["default"] }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthRoute"], { exact: true, path: '/admin/seo', role: ['admin'], component: _containers_Seo__WEBPACK_IMPORTED_MODULE_4__["default"] }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_7__["AuthRoute"], { exact: true, path: '/admin/locations', role: ['admin'], component: _containers_Locations__WEBPACK_IMPORTED_MODULE_5__["default"] })],
  reducer: { admin: _reducers__WEBPACK_IMPORTED_MODULE_6__["default"] }
}));

/***/ })

};
//# sourceMappingURL=index.d4ec46908f7b8f2f4500.js.map
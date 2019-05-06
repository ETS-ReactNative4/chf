require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/admin/containers/Locations.jsx":
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/modules/admin/containers/Seo.jsx":
/***/ (function(module, exports) {



/***/ }),

/***/ "../client/src/modules/admin/index.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../client/src/modules/admin/containers/Dashboard.jsx");
/* harmony import */ var _containers_Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../client/src/modules/admin/containers/Carousel.jsx");
/* harmony import */ var _containers_ProductSpecs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../client/src/modules/admin/containers/ProductSpecs.jsx");
/* harmony import */ var _containers_ProductSpecs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_containers_ProductSpecs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _containers_Seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../client/src/modules/admin/containers/Seo.jsx");
/* harmony import */ var _containers_Seo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_containers_Seo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _containers_Locations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../client/src/modules/admin/containers/Locations.jsx");
/* harmony import */ var _containers_Locations__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_containers_Locations__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../client/src/modules/admin/reducers/index.js");
/* harmony import */ var _user_containers_Auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../client/src/modules/user/containers/Auth.web.jsx");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/connector.ts");













/* harmony default export */ __webpack_exports__["default"] = (new _connector__WEBPACK_IMPORTED_MODULE_9__["default"]({
  route: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_8__["AuthRoute"], { exact: true, path: '/admin/dashboard', role: ['admin'], component: _containers_Dashboard__WEBPACK_IMPORTED_MODULE_2__["default"] }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_8__["AuthRoute"], { exact: true, path: '/admin/carousel', role: ['admin'], component: _containers_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"] }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_8__["AuthRoute"], { exact: true, path: '/admin/product-specs', role: ['admin'], component: _containers_ProductSpecs__WEBPACK_IMPORTED_MODULE_4___default.a }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_8__["AuthRoute"], { exact: true, path: '/admin/seo', role: ['admin'], component: _containers_Seo__WEBPACK_IMPORTED_MODULE_5___default.a }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_8__["AuthRoute"], { exact: true, path: '/admin/seo', role: ['admin'], component: _containers_Locations__WEBPACK_IMPORTED_MODULE_6___default.a })],
  reducer: { admin: _reducers__WEBPACK_IMPORTED_MODULE_7__["default"] }
}));

/***/ })

};
//# sourceMappingURL=index.8fb2e288e888dce18372.js.map
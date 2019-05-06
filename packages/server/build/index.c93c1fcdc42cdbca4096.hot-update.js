require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/products/index.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_Products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../client/src/modules/products/containers/Products.jsx");
/* harmony import */ var _containers_Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../client/src/modules/products/containers/Category.jsx");
/* harmony import */ var _containers_Vendor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../client/src/modules/products/containers/Vendor.jsx");
/* harmony import */ var _containers_SingleProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../client/src/modules/products/containers/SingleProduct.jsx");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../client/src/modules/products/locales/index.js");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_locales__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../client/src/modules/connector.ts");



// import translate from '../../i18n';
// import { MenuItem } from '../../modules/common/components/web';







// const NavLinkWithI18n = translate('products')(({ t }) => (
//   <NavLink to="/products" className="nav-link" activeClassName="active">
//     {t('navLink')}
//   </NavLink>
// ));
/* harmony default export */ __webpack_exports__["default"] = (new _connector__WEBPACK_IMPORTED_MODULE_7__["default"]({
  route: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: '/products', component: _containers_Products__WEBPACK_IMPORTED_MODULE_2__["default"] }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: '/products/:category', component: _containers_Category__WEBPACK_IMPORTED_MODULE_3__["default"] }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: '/products/brands/:vendor_name', component: _containers_Vendor__WEBPACK_IMPORTED_MODULE_4__["default"] }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: '/product/:vendor_name/:product_name/:category', component: _containers_SingleProduct__WEBPACK_IMPORTED_MODULE_5__["default"] })],
  localization: { ns: 'products', resources: _locales__WEBPACK_IMPORTED_MODULE_6___default.a }
}));

/***/ })

};
//# sourceMappingURL=index.5c8f6d4a430587106130.js.map
require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/products/containers/Vendor.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/defineProperty");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_VendorView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/products/components/VendorView.web.jsx");
/* harmony import */ var _common_schema__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../client/src/modules/common/schema/index.js");
/* harmony import */ var _common_graphql_SFY_sfyCollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/common/graphql/SFY/sfyCollectionsQuery.graphql");
/* harmony import */ var _common_graphql_SFY_sfyCollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_SFY_sfyCollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_graphql_VendorQuery_graphql__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/common/graphql/VendorQuery.graphql");
/* harmony import */ var _common_graphql_VendorQuery_graphql__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_VendorQuery_graphql__WEBPACK_IMPORTED_MODULE_12__);














var Vendor = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Vendor, _React$Component);

  function Vendor() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Vendor);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Vendor.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(Vendor)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Vendor, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_VendorView__WEBPACK_IMPORTED_MODULE_9__["default"], this.props);
    }
  }]);

  return Vendor;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var VendorWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["compose"])(Object(_common_schema__WEBPACK_IMPORTED_MODULE_10__["FILTERED_PRODUCTS_QUERY"])(), Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["graphql"])(_common_graphql_SFY_sfyCollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_11___default.a, {
  options: function options() {
    return { variables: babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'first', 50) };
  },
  props: function props(_ref) {
    var data = _ref.data;
    var loading = data.loading,
        error = data.error,
        sfy_shop_collections = data.sfy_shop;

    if (error) throw new Error('Error in Categories (Vendor Page) Query: ' + error);
    return { loading: loading, sfy_shop_collections: sfy_shop_collections };
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["graphql"])(_common_graphql_VendorQuery_graphql__WEBPACK_IMPORTED_MODULE_12___default.a, {
  options: function options(props) {
    console.log('PROPS MATCH::', props.match.params);
    return { variables: { input: { handle: props.match.params.vendor_name } } };
  },
  props: function props(_ref2) {
    var data = _ref2.data;
    var loading = data.loading,
        error = data.error,
        vendor = data.vendor;
    // console.log('DATA:::', data);

    if (error) throw new Error('Error in Categories (Vendor Page) Query: ' + error);
    return { loading: loading, vendor: vendor };
  }
}))(Vendor);

Vendor.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  search: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
};

/* harmony default export */ __webpack_exports__["default"] = (VendorWithApollo);

/***/ })

};
//# sourceMappingURL=index.4bcd57e7f920dd43755b.js.map
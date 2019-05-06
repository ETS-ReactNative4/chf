require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/admin/containers/Vendors.jsx":
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_AdminView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/admin/components/AdminView.web.jsx");
/* harmony import */ var _common_components_global_components_Loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/common/components/global/components/Loader.jsx");
/* harmony import */ var _styles_vendors_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/admin/styles/vendors.scss");
/* harmony import */ var _styles_vendors_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_vendors_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Vendors_VendorTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../client/src/modules/admin/components/Vendors/VendorTable.jsx");
/* harmony import */ var _common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../client/src/modules/common/graphql/VendorsQuery.graphql");
/* harmony import */ var _common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_15__);
















// import { ADMIN_PRODUCTS_QUERY /*MODIFY_PRODUCT_DATA*/ } from '../../common/schema';
// import PRODUCTS_QUERY from '../graphql/Products.graphql';


var columns = [{
  title: '',
  dataIndex: 'node',
  key: 'logo_url',
  // eslint-disable-next-line
  render: function render(image, record) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
      'div',
      null,
      react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('img', { src: image ? image : '', alt: '' })
    );
  }
}, {
  title: '',
  dataIndex: 'node',
  key: 'name',
  // eslint-disable-next-line
  render: function render(text, record) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
      'div',
      null,
      text
    );
  }
}, {
  key: 'handle',
  // eslint-disable-next-line
  render: function render(text, record) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
      'div',
      null,
      react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"],
        { to: { pathname: '/admin/brands/' + text, state: { vendor: record } } },
        'Edit'
      )
    );
  }
}];

var Vendors = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Vendors, _Component);

  function Vendors() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Vendors);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Vendors.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(Vendors)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Vendors, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          loadingVendors = _props.loadingVendors,
          vendors = _props.vendors;
      // const { searchActive, searchValue, filteredProducts } = this.state;

      if (loadingVendors) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          _components_AdminView__WEBPACK_IMPORTED_MODULE_11__["default"],
          this.props,
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_common_components_global_components_Loader__WEBPACK_IMPORTED_MODULE_12__["default"], null)
        );
      }
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        _components_AdminView__WEBPACK_IMPORTED_MODULE_11__["default"],
        this.props,
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'h2',
          null,
          'Vendors'
        ),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'div',
          { className: 'admin__tableview' },
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            'div',
            { className: 'admin__vendors' },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Vendors_VendorTable__WEBPACK_IMPORTED_MODULE_14__["default"], { dataSource: vendors, columns: columns })
          )
        )
      );
    }
  }]);

  return Vendors;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var VendorsApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["compose"])(react_apollo__WEBPACK_IMPORTED_MODULE_8__["withApollo"], Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["graphql"])(_common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_15___default.a, {
  props: function props(_ref) {
    var _ref$data = _ref.data,
        loading = _ref$data.loading,
        error = _ref$data.error,
        vendors = _ref$data.vendors;

    if (error) throw new Error('Error in Vendors Query: ' + error);
    return { loadingVendors: loading, vendors: vendors };
  }
}))(Vendors);

/* harmony default export */ __webpack_exports__["default"] = (VendorsApollo);

/***/ })

};
//# sourceMappingURL=index.008af080c71f8cc99f5e.js.map
require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/vendors.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".admin__vendors{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.admin__vendors .table{width:100%;font-size:1em}.admin__vendors .table-dark{background-color:#212529}.admin__vendors .table tbody,.admin__vendors .table thead tr th h3{color:#1b1c1c}.admin__vendors .table tbody tr{border-bottom:1px solid}.admin__vendors .table tbody tr td div{padding:10px 0}.admin__vendors .table tbody tr td div img{height:3.125em;width:3.125em}.admin__vendors .table tbody tr:last-of-type{border-bottom:none}.admin__vendors .table tbody tr:nth-of-type(odd){background-color:hsla(0,0%,100%,.05)}", "", {"version":3,"sources":["/Users/austinreynolds/Documents/MOD/chf-rcomm/packages/client/src/modules/admin/styles/vendors.scss"],"names":[],"mappings":"AAGE,gBAEE,oBAAA,aAAa,0BACb,qBAAsB,CAHvB,uBAWG,WAAW,aACG,CAZjB,4BAcK,wBAAyB,CAd9B,mEA8BK,aAAc,CA9BnB,gCAgCO,uBAAwB,CAhC/B,uCAmCW,cAA0B,CAnCrC,2CAqCa,eAAe,aACD,CAtC3B,6CA4CO,kBAAmB,CA5C1B,iDA+CO,oCAAqC,CACtC","file":"vendors.scss","sourcesContent":["@import './utils/index';\n\n.admin {\n  &__vendors {\n    // width: inherit;\n    display: flex;\n    flex-direction: column;\n    // border: solid 1px;\n    // height: 100vh;\n    // overflow-y: scroll;\n    // padding: 30px;\n    // width: calc(100vw - 25vw);\n    // position: relative;\n    .table {\n      width: 100%;\n      font-size: 1em;\n      &-dark {\n        background-color: #212529;\n      }\n      thead {\n        tr {\n          // height: 2em;\n          th {\n            h3 {\n              color: #1b1c1c;\n            }\n          }\n          // th:first-of-type {\n          //   width: 50px;\n          // }\n        }\n      }\n      tbody {\n        color: #1b1c1c;\n        tr {\n          border-bottom: solid 1px;\n          td {\n            div {\n              padding: 10px 0px 10px 0px;\n              img {\n                height: 3.125em;\n                width: 3.125em;\n              }\n            }\n          }\n        }\n        tr:last-of-type {\n          border-bottom: none;\n        }\n        tr:nth-of-type(odd) {\n          background-color: hsla(0,0%,100%,.05);\n        }\n      }\n      &-striped {\n        // color: white;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

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
  title: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
    'a',
    { href: '#' },
    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
      'h3',
      null,
      'Product'
    )
  ),
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
  // {
  //   title: (
  //     <a href="#">
  //       <h3>Vendor</h3>
  //     </a>
  //   ),
  //   dataIndex: 'node',
  //   key: 'vendor',
  //   // eslint-disable-next-line
  //   render: (text, record) => {
  //     return (
  //       <div>
  //         {text}
  //         {/* <Link to={{ pathname: `/admin/locations/${record.node.handle}` }}>{text}</Link> */}
  //       </div>
  //     );
  //   }
  // },
  // {
  //   dataIndex: 'node',
  //   key: 'handle',
  //   // eslint-disable-next-line
  //   render: (text, record) => {
  //     return (
  //       <div>
  //         <Link to={{ pathname: `/admin/products/${record.node.handle}` }}>Edit</Link>
  //       </div>
  //     );
  //   }
  // }
}];
var LoadMore = function LoadMore(_ref) {
  var loadMore = _ref.loadMore;

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
    'div',
    { className: 'admin__loadmore' },
    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
      'button',
      { onClick: function onClick() {
          return loadMore();
        } },
      'Load More'
    )
  );
};
LoadMore.propTypes = {
  loadMore: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
var SearchBar = function SearchBar(_ref2) {
  var handleSearch = _ref2.handleSearch,
      value = _ref2.value;

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
    'div',
    { className: 'admin__searchbox' },
    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
      'span',
      null,
      react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_10__["MdSearch"], { size: 20 })
    ),
    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('input', { type: 'text', placeholder: 'Search', onChange: handleSearch, value: value })
  );
};
SearchBar.propTypes = {
  handleSearch: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  value: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
};

var Products = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Products, _Component);

  function Products(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Products);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Products.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(Products)).call(this, props));

    _this.handleSearch = function (e) {
      _this.setState({ searchValue: e.target.value });
    };

    _this.state = {
      searchActive: false,
      searchValue: '',
      filteredProducts: null
    };
    return _this;
  }
  // componentDidUpdate(prevProps, prevState) {
  //   const prevSearch = prevState.searchValue;
  //   const currSearch = this.state.searchValue;
  //   if (currSearch.length > 0 && currSearch !== prevSearch) {
  //     this.setState({ searchActive: true });
  //     this.searchQuery();
  //     return;
  //   }
  //   if (currSearch !== prevSearch && currSearch.length == 0) {
  //     return this.setState({ searchActive: false, filteredProducts: null });
  //   }
  // }
  // searchQuery = async () => {
  //   const { searchValue } = this.state;
  //   const query = gql`
  //     query admin_products($first: Int, $after: String, $query: String) {
  //       admin_products(first: $first, after: $after, query: $query) {
  //         edges {
  //           cursor
  //           node {
  //             vendor
  //             title
  //             handle
  //             featuredImage {
  //               originalSrc
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `;
  //   const { data } = await this.props.client.query({
  //     query,
  //     fetchPolicy: 'cache-first',
  //     variables: { first: 20, query: `title:${searchValue}*` }
  //   });
  //   const { admin_products } = data;
  //   this.setState({ filteredProducts: admin_products });
  // };


  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Products, [{
    key: 'render',
    value: function render() {
      console.log('VENDOR PROPS:::', this.props);
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

  return Products;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var ProductsApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["compose"])(react_apollo__WEBPACK_IMPORTED_MODULE_8__["withApollo"], Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["graphql"])(_common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_15___default.a, {
  props: function props(_ref3) {
    var _ref3$data = _ref3.data,
        loading = _ref3$data.loading,
        error = _ref3$data.error,
        vendors = _ref3$data.vendors;

    if (error) throw new Error('Error in Vendors Query: ' + error);
    return { loadingVendors: loading, vendors: vendors };
  }
}))(Products);

/* harmony default export */ __webpack_exports__["default"] = (ProductsApollo);

/***/ }),

/***/ "../client/src/modules/admin/styles/vendors.scss":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/vendors.scss");
    var insertCss = __webpack_require__("../../node_modules/isomorphic-style-loader/lib/insertCss.js");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if ( true && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/vendors.scss", function() {
        content = __webpack_require__("../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/vendors.scss");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ })

};
//# sourceMappingURL=index.b19c8056324a5bfa5341.js.map
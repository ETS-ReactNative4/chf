require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/admin/containers/Products.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_AdminView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/admin/components/AdminView.web.jsx");
/* harmony import */ var _common_components_global_components_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../client/src/modules/common/components/global/components/Loader.jsx");
/* harmony import */ var _styles_productspecs_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/admin/styles/productspecs.scss");
/* harmony import */ var _styles_productspecs_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_productspecs_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_ProductSpecs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/admin/components/ProductSpecs/index.jsx");
/* harmony import */ var _graphql_Products_graphql__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/admin/graphql/Products.graphql");
/* harmony import */ var _graphql_Products_graphql__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_graphql_Products_graphql__WEBPACK_IMPORTED_MODULE_13__);









// import gql from 'graphql-tag';




// import { ADMIN_PRODUCTS_QUERY /*MODIFY_PRODUCT_DATA*/ } from '../../common/schema';


var columns = [{
  title: '',
  dataIndex: 'node',
  key: 'featuredImage',
  // eslint-disable-next-line
  render: function render(image, record) {
    // console.log('TEXT::', text);
    // console.log('RECORD:', record.node);
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      'div',
      null,
      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { src: image.originalSrc, alt: '' })
    );
  }
}, {
  title: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
    'a',
    { href: '#' },
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      'h3',
      null,
      'Product'
    )
  ),
  dataIndex: 'node',
  key: 'title',
  // eslint-disable-next-line
  render: function render(text, record) {
    // console.log('TEXT::', text);
    // console.log('RECORD:', record);
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      'div',
      null,
      text
    );
  }
}];
var LoadMore = function LoadMore(_ref) {
  var loadMore = _ref.loadMore;

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
    'div',
    { className: 'admin__loadmore' },
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      'button',
      { onClick: function onClick() {
          return loadMore();
        } },
      'Load More'
    )
  );
};

var Products = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Products, _Component);

  function Products(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Products);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Products.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(Products)).call(this, props));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Products, [{
    key: 'render',
    value: function render() {
      console.log('The PRODUCT PROPS::::', this.props);
      var _props = this.props,
          productsLoading = _props.productsLoading,
          sfy_shop = _props.sfy_shop;


      if (productsLoading) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_AdminView__WEBPACK_IMPORTED_MODULE_9__["default"],
          this.props,
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_components_global_components_Loader__WEBPACK_IMPORTED_MODULE_10__["default"], null)
        );
      }
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_AdminView__WEBPACK_IMPORTED_MODULE_9__["default"],
        this.props,
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          'h2',
          null,
          'Product Specifications'
        ),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          'div',
          { className: 'admin__tableview' },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            'div',
            { className: 'admin__productspecs' },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ProductSpecs__WEBPACK_IMPORTED_MODULE_12__["default"], { dataSource: sfy_shop.edges, columns: columns })
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LoadMore, { loadMore: this.props.loadMore })
        )
      );
    }
  }]);

  return Products;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var ProductsApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["compose"])(Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["graphql"])(_graphql_Products_graphql__WEBPACK_IMPORTED_MODULE_13___default.a, {
  options: function options() {
    return {
      variables: { first: 50 }
    };
  },
  props: function props(_ref2) {
    var data = _ref2.data;

    console.log('DATA;::', data);
    var loading = data.loading,
        error = data.error,
        admin_products = data.admin_products,
        variables = data.variables,
        fetchMore = data.fetchMore;

    if (error) {
      throw new Error(error);
    }
    if (loading) {
      return { productsLoading: loading };
    }
    if (!loading && admin_products) {
      var currEndCursor = void 0;
      var hasNextPage = void 0;
      var hasPreviousPage = void 0;
      var edges = admin_products.edges;

      if (edges.length > 0) {
        currEndCursor = edges[edges.length - 1].cursor;
      }
      hasNextPage = admin_products.pageInfo.hasNextPage;
      hasPreviousPage = admin_products.pageInfo.hasPreviousPage;
      console.log('Curr end cursor::', currEndCursor);
      var loadMore = function loadMore() {
        var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
        var after = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currEndCursor;

        var updatedVars = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, variables, { after: after, first: first });
        console.log('UPDATED VARS::', updatedVars);
        return fetchMore({
          variables: updatedVars,
          updateQuery: function updateQuery(prevResult, _ref3) {
            var fetchMoreResult = _ref3.fetchMoreResult;

            console.log('PREVRESULT:', prevResult);
            console.log('FETCH MORE RESULT::', fetchMoreResult.admin_products.edges);
            if (fetchMoreResult.admin_products.edges.length === 0) return prevResult;
            // const updatedResult = JSON.parse(JSON.stringify(prevResult));
            var updatedResult = {};
            updatedResult.admin_products = {
              edges: [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(prevResult.admin_products.edges), babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(fetchMoreResult.admin_products.edges))
            };
            updatedResult.pageInfo = fetchMoreResult.admin_products.pageInfo;
            // updatedResult.sfy_shop.products.pageInfo = fetchMoreResult.sfy_shop.products.pageInfo;
            console.log('udpatedres', updatedResult);
            return updatedResult;
          }
        });
      };
      return {
        productsLoading: loading,
        sfy_shop: admin_products,
        loadMore: loadMore,
        products: {
          currEndCursor: currEndCursor,
          hasNextPage: hasNextPage,
          hasPreviousPage: hasPreviousPage
        }
      };
    }
  }
}))(Products);

/* harmony default export */ __webpack_exports__["default"] = (ProductsApollo);

/***/ })

};
//# sourceMappingURL=index.6c76962ba60810d55ead.js.map
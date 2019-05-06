require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/admin/containers/Products.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/core-js/json/stringify");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_AdminView__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../client/src/modules/admin/components/AdminView.web.jsx");
/* harmony import */ var _common_components_global_components_Loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../client/src/modules/common/components/global/components/Loader.jsx");
/* harmony import */ var _styles_productspecs_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../client/src/modules/admin/styles/productspecs.scss");
/* harmony import */ var _styles_productspecs_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_styles_productspecs_scss__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_ProductSpecs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../client/src/modules/admin/components/ProductSpecs/index.jsx");
/* harmony import */ var _graphql_Products_graphql__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("../client/src/modules/admin/graphql/Products.graphql");
/* harmony import */ var _graphql_Products_graphql__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_graphql_Products_graphql__WEBPACK_IMPORTED_MODULE_21__);












var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4___default()(['\n      query admin_products($first: Int, $after: String, $query: String) {\n        admin_products(first: $first, after: $after, query: $query) {\n          edges {\n            cursor\n            node {\n              vendor\n              title\n              featuredImage {\n                originalSrc\n              }\n            }\n          }\n        }\n      }\n    '], ['\n      query admin_products($first: Int, $after: String, $query: String) {\n        admin_products(first: $first, after: $after, query: $query) {\n          edges {\n            cursor\n            node {\n              vendor\n              title\n              featuredImage {\n                originalSrc\n              }\n            }\n          }\n        }\n      }\n    ']);












// import { ADMIN_PRODUCTS_QUERY /*MODIFY_PRODUCT_DATA*/ } from '../../common/schema';


var columns = [{
  title: '',
  dataIndex: 'node',
  key: 'featuredImage',
  // eslint-disable-next-line
  render: function render(image, record) {
    return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
      'div',
      null,
      react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement('img', { src: image ? image.originalSrc : '', alt: '' })
    );
  }
}, {
  title: react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
    'a',
    { href: '#' },
    react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
      'h3',
      null,
      'Product'
    )
  ),
  dataIndex: 'node',
  key: 'title',
  // eslint-disable-next-line
  render: function render(text, record) {
    return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
      'div',
      null,
      text
    );
  }
}, {
  title: react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
    'a',
    { href: '#' },
    react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
      'h3',
      null,
      'Vendor'
    )
  ),
  dataIndex: 'node',
  key: 'vendor',
  // eslint-disable-next-line
  render: function render(text, record) {
    return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
      'div',
      null,
      react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
        react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Link"],
        { to: { pathname: '/admin/locations/' + record.node.handle } },
        'Edit'
      )
    );
  }
}, {
  dataIndex: 'node',
  key: 'handle',
  // eslint-disable-next-line
  render: function render(text, record) {
    return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
      'div',
      null,
      text,
      react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
        react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Link"],
        { to: { pathname: '/admin/locations/' + record.node.handle } },
        text
      )
    );
  }
}];
var LoadMore = function LoadMore(_ref) {
  var loadMore = _ref.loadMore;

  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
    'div',
    { className: 'admin__loadmore' },
    react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
      'button',
      { onClick: function onClick() {
          return loadMore();
        } },
      'Load More'
    )
  );
};
LoadMore.propTypes = {
  loadMore: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func
};
var SearchBar = function SearchBar(_ref2) {
  var handleSearch = _ref2.handleSearch,
      value = _ref2.value;

  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
    'div',
    { className: 'admin__searchbox' },
    react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
      'span',
      null,
      react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_16__["MdSearch"], { size: 20 })
    ),
    react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement('input', { type: 'text', placeholder: 'Search', onChange: handleSearch, value: value })
  );
};
SearchBar.propTypes = {
  handleSearch: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func,
  value: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string
};

var Products = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10___default()(Products, _Component);

  function Products(props) {
    var _this2 = this;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, Products);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default()(this, (Products.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default()(Products)).call(this, props));

    _this.searchQuery = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
      var searchValue, query, _ref4, data, admin_products;

      return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              searchValue = _this.state.searchValue;
              query = graphql_tag__WEBPACK_IMPORTED_MODULE_15___default()(_templateObject);
              _context.next = 4;
              return _this.props.client.query({
                query: query,
                fetchPolicy: 'cache-first',
                variables: { first: 20, query: 'title:' + searchValue + '*' }
              });

            case 4:
              _ref4 = _context.sent;
              data = _ref4.data;
              admin_products = data.admin_products;

              _this.setState({ filteredProducts: admin_products });

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }));

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

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(Products, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var prevSearch = prevState.searchValue;
      var currSearch = this.state.searchValue;
      if (currSearch.length > 0 && currSearch !== prevSearch) {
        this.setState({ searchActive: true });
        this.searchQuery();
        return;
      }
      if (currSearch !== prevSearch && currSearch.length == 0) {
        return this.setState({ searchActive: false, filteredProducts: null });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          productsLoading = _props.productsLoading,
          admin_products = _props.admin_products;
      var _state = this.state,
          searchActive = _state.searchActive,
          searchValue = _state.searchValue,
          filteredProducts = _state.filteredProducts;

      if (productsLoading) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
          _components_AdminView__WEBPACK_IMPORTED_MODULE_17__["default"],
          this.props,
          react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_common_components_global_components_Loader__WEBPACK_IMPORTED_MODULE_18__["default"], null)
        );
      }
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
        _components_AdminView__WEBPACK_IMPORTED_MODULE_17__["default"],
        this.props,
        react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
          'h2',
          null,
          'Product Specifications'
        ),
        react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
          'div',
          { className: 'admin__tableview' },
          react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
            'div',
            { className: 'admin__productspecs' },
            react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(SearchBar, { handleSearch: this.handleSearch, value: searchValue }),
            searchActive && filteredProducts ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_ProductSpecs__WEBPACK_IMPORTED_MODULE_20__["default"], { dataSource: filteredProducts.edges, columns: columns }) : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_ProductSpecs__WEBPACK_IMPORTED_MODULE_20__["default"], { dataSource: admin_products.edges, columns: columns })
          ),
          react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(LoadMore, { loadMore: this.props.loadMore })
        )
      );
    }
  }]);

  return Products;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

var ProductsApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_14__["compose"])(react_apollo__WEBPACK_IMPORTED_MODULE_14__["withApollo"], Object(react_apollo__WEBPACK_IMPORTED_MODULE_14__["graphql"])(_graphql_Products_graphql__WEBPACK_IMPORTED_MODULE_21___default.a, {
  options: function options() {
    return {
      variables: { first: 50 }
    };
  },
  props: function props(_ref5) {
    var data = _ref5.data;

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

        var updatedVars = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, variables, { after: after, first: first });
        console.log('UPDATED VARS::', updatedVars);
        return fetchMore({
          variables: updatedVars,
          updateQuery: function updateQuery(prevResult, _ref6) {
            var fetchMoreResult = _ref6.fetchMoreResult;

            console.log('PREVRESULT:', prevResult);
            if (fetchMoreResult.admin_products.edges.length === 0) return prevResult;
            var updatedResult = JSON.parse(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(prevResult));
            console.log('PREV RESULT STRING', updatedResult);
            // const updatedResult = Object.assign({}, prevResult);
            updatedResult.admin_products.edges = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(prevResult.admin_products.edges), babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(fetchMoreResult.admin_products.edges));
            //
            updatedResult.pageInfo = fetchMoreResult.admin_products.pageInfo;
            // updatedResult.admin_products.pageInfo = fetchMoreResult.admin_products.pageInfo;
            // console.log('udpatedres', updatedResult);
            // const update = Object.assign({}, prevResult, {
            //   admin_products: {
            //     edges: [...prevResult.admin_products.edges, ...fetchMoreResult.admin_products.edges],
            //     pageInfo: fetchMoreResult.admin_products.pageInfo
            //     // __typename: prevResult.admin_products.__typename
            //   },
            //   __typename: prevResult.admin_products.__typename
            // });
            console.log('UPDATE::', updatedResult);
            return updatedResult;
          }
        });
      };
      return {
        productsLoading: loading,
        admin_products: admin_products,
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
//# sourceMappingURL=index.b016d195136ad68d41d3.js.map
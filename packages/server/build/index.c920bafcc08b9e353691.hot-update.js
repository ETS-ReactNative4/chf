require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/search/containers/Search.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/core-js/json/stringify");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_SearchView__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/search/components/SearchView.jsx");
/* harmony import */ var _common_schema__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../client/src/modules/common/schema/index.js");
/* harmony import */ var _common_graphql_SFY_sfySingleCategoryByHandle_graphql__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../client/src/modules/common/graphql/SFY/sfySingleCategoryByHandle.graphql");
/* harmony import */ var _common_graphql_SFY_sfySingleCategoryByHandle_graphql__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_SFY_sfySingleCategoryByHandle_graphql__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _common_graphql_SFY_sfyAdminCollectionByHandle_graphql__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../client/src/modules/common/graphql/SFY/sfyAdminCollectionByHandle.graphql");
/* harmony import */ var _common_graphql_SFY_sfyAdminCollectionByHandle_graphql__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_SFY_sfyAdminCollectionByHandle_graphql__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../client/src/modules/common/graphql/VendorsQuery.graphql");
/* harmony import */ var _common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _common_graphql_CategoryQuery_graphql__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../client/src/modules/common/graphql/CategoryQuery.graphql");
/* harmony import */ var _common_graphql_CategoryQuery_graphql__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_CategoryQuery_graphql__WEBPACK_IMPORTED_MODULE_18__);











var _this2 = undefined;











// handleClick = () => {
//   const toUrlName = str => str.trim().replace(/[/\s_]+/gi, '-');
//   const term = toUrlName('Recumbent Bike');
//   console.log('term', term);
//   this.props.history.push({ pathname: '/search', search: `?q=${term}` });
// };

var Search = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(Search, _React$Component);

  function Search() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default()(this, Search);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default()(this, (Search.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5___default()(Search)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(Search, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_SearchView__WEBPACK_IMPORTED_MODULE_13__["default"], this.props);
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

var SearchWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_12__["compose"])(Object(_common_schema__WEBPACK_IMPORTED_MODULE_14__["FILTERED_PRODUCTS_QUERY"])(), Object(react_apollo__WEBPACK_IMPORTED_MODULE_12__["graphql"])(_common_graphql_SFY_sfySingleCategoryByHandle_graphql__WEBPACK_IMPORTED_MODULE_15___default.a, {
  options: function options(props) {
    var handle = props.match.params.category;
    // const page = props.location.search;
    // console.log('PROPS HERE::', props);
    // console.log('PAGE', page);

    var reg = /[=](\d)/;
    var first = parseInt(reg.exec(props.location.search)[1]);
    // console.log('FIRST ', first);
    var displayLim = 12;
    var fetchNum = first * displayLim;
    // console.log('FETCHNUM:', fetchNum);
    return { variables: { handle: handle, first: fetchNum }, fetchPolicy: 'cache-first' };
  },
  props: function props(_ref) {
    var data = _ref.data;
    var loading = data.loading,
        error = data.error,
        sfy_shop = data.sfy_shop,
        fetchMore = data.fetchMore,
        variables = data.variables;
    // console.log('LOADING:??', data);

    var currEndCursor = void 0,
        hasNextPage = void 0,
        hasPreviousPage = void 0;
    if (!loading && sfy_shop) {
      var products = sfy_shop.collectionByHandle.products;

      if (products.edges.length > 0) currEndCursor = products.edges[products.edges.length - 1].cursor;
      hasNextPage = products.pageInfo.hasNextPage;
      hasPreviousPage = products.pageInfo.hasPreviousPage;
    }
    // console.log('Products length',sfy_shop);
    var loadMore = function () {
      var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
        var after = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currEndCursor;
        var updatedVars, data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                updatedVars = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, variables, { after: after, first: first });
                _context.next = 3;
                return fetchMore({
                  variables: updatedVars,
                  updateQuery: function updateQuery(prevResult, _ref3) {
                    var fetchMoreResult = _ref3.fetchMoreResult;

                    if (fetchMoreResult.sfy_shop.collectionByHandle.products.edges.length === 0) return prevResult;
                    // console.log('PREVRESULT:', prevResult);
                    var updatedResult = JSON.parse(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(prevResult));
                    updatedResult.sfy_shop.collectionByHandle.products.edges = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(prevResult.sfy_shop.collectionByHandle.products.edges), babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(fetchMoreResult.sfy_shop.collectionByHandle.products.edges));
                    updatedResult.sfy_shop.collectionByHandle.products.pageInfo = fetchMoreResult.sfy_shop.collectionByHandle.products.pageInfo;

                    return updatedResult;
                  }
                });

              case 3:
                data = _context.sent;
                return _context.abrupt('return', data);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function loadMore() {
        return _ref2.apply(this, arguments);
      };
    }();
    // console.log('WHAT THE FUCKK::', sfy_shop);
    if (error) throw new Error('Error in Products Query: ' + error);
    if (loading || !sfy_shop) return { loading: loading };
    if (!loading && sfy_shop) {
      return {
        loading: loading,
        category: sfy_shop.collectionByHandle,
        currEndCursor: currEndCursor,
        hasNextPage: hasNextPage,
        hasPreviousPage: hasPreviousPage,
        loadMore: loadMore
      };
    }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_12__["graphql"])(_common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_17___default.a, {
  props: function props(_ref4) {
    var _ref4$data = _ref4.data,
        loading = _ref4$data.loading,
        error = _ref4$data.error,
        vendors = _ref4$data.vendors;

    if (error) throw new Error('Error in Vendors Query: ' + error);
    return { loading: loading, vendors: vendors };
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_12__["graphql"])(_common_graphql_CategoryQuery_graphql__WEBPACK_IMPORTED_MODULE_18___default.a, {
  options: function options(props) {
    var handle = props.match.params.category;

    return { variables: { handle: handle } };
  },
  props: function props(_ref5) {
    var _ref5$data = _ref5.data,
        loading = _ref5$data.loading,
        error = _ref5$data.error,
        locCategory = _ref5$data.category;

    if (error) throw new Error('Error in Vendors Query: ' + error);
    return { loading: loading, locCategory: locCategory };
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_12__["graphql"])(_common_graphql_SFY_sfyAdminCollectionByHandle_graphql__WEBPACK_IMPORTED_MODULE_16___default.a, {
  options: function options(props) {
    var handle = props.match.params.category;

    return { variables: { handle: handle } };
  },
  props: function props(_ref6) {
    var _ref6$data = _ref6.data,
        admin_collectionByHandle = _ref6$data.admin_collectionByHandle,
        loading = _ref6$data.loading,
        error = _ref6$data.error;

    // console.log('LOADING::', loading);
    if (!loading && !error) {
      var productsCount = admin_collectionByHandle.productsCount;

      return { productsCount: productsCount, loadingCount: loading };
    }
    if (error) {
      return { countError: error, productsCount: null };
    }
    return { loadingCount: loading, productsCount: null };

    // if (loadingProductCount) {
    //   return { loadingProductCount };
    // }
    // if (!error) {
    //   return { loadingProductCount, productsCount };
    // } else {
    //   return { countError: error };
    // }
  }
}))(Search);

Search.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object,
  search: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string
};

/* harmony default export */ __webpack_exports__["default"] = (SearchWithApollo);

/***/ })

};
//# sourceMappingURL=index.4efaf867c932f1e906ea.js.map
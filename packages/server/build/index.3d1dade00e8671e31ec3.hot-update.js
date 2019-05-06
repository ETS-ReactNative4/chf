require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/common/schema/filteredProductsQuery.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/core-js/json/stringify");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/helpers/defineProperty");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _graphql_SFY_sfyProductsQuery_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../client/src/modules/common/graphql/SFY/sfyProductsQuery.graphql");
/* harmony import */ var _graphql_SFY_sfyProductsQuery_graphql__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_graphql_SFY_sfyProductsQuery_graphql__WEBPACK_IMPORTED_MODULE_5__);







var capFirstLtr = function capFirstLtr(str) {
  return str[0].toUpperCase() + str.slice(1);
};

var searchFormat = function searchFormat(str, joiner) {
  return str.split('-').map(function (str) {
    return capFirstLtr(str);
  }).join(joiner);
};

var vendorFilter = function vendorFilter(params) {
  if ('vendor_name' in params) {
    var vendorFormatted = searchFormat(params.vendor_name, ' ');
    return 'vendor:' + vendorFormatted;
  } else {
    return undefined;
  }
};

var searchFilter = function searchFilter(queryStr, queryStrParam) {
  var filterValue = '';
  if (queryStr && queryStr.includes(queryStrParam)) {
    filterValue = queryStr.slice(queryStr.indexOf('=') + 1);
  }
  // console.log('fitlerValue', filterValue);
  return filterValue.replace(/(-|%20)+/gi, ' ');
};

var filteredProductsQuery = function filteredProductsQuery() {
  var queryString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _graphql_SFY_sfyProductsQuery_graphql__WEBPACK_IMPORTED_MODULE_5___default.a;
  return Object(react_apollo__WEBPACK_IMPORTED_MODULE_4__["graphql"])(queryString, {
    options: function options(props) {
      var _variables;

      var filterVal = '';
      var pathname = props.location.pathname;

      if (pathname.includes('/brands')) {
        var params = props.match.params;

        filterVal = vendorFilter(params);
      } else if (pathname === '/search') {
        var search = props.location.search;

        filterVal = searchFilter(search, 'q');
      }
      return { variables: (_variables = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_variables, 'first', 48), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_variables, 'query', filterVal), _variables) };
    },
    props: function props(_ref) {
      var data = _ref.data;
      var loading = data.loading,
          error = data.error,
          sfy_shop = data.sfy_shop,
          fetchMore = data.fetchMore,
          variables = data.variables;
      var searchPhrase = variables.query;

      var currEndCursor = void 0,
          hasNextPage = void 0,
          hasPreviousPage = void 0;
      if (!loading && sfy_shop) {
        var products = sfy_shop.products;

        if (products.edges.length > 0) currEndCursor = products.edges[products.edges.length - 1].cursor;
        hasNextPage = products.pageInfo.hasNextPage;
        hasPreviousPage = products.pageInfo.hasPreviousPage;
      }
      var loadMore = function loadMore() {
        var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
        var after = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currEndCursor;

        var updatedVars = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, variables, { after: after, first: first });
        return fetchMore({
          variables: updatedVars,
          updateQuery: function updateQuery(prevResult, _ref2) {
            var fetchMoreResult = _ref2.fetchMoreResult;

            if (fetchMoreResult.sfy_shop.products.edges.length === 0) return prevResult;
            var updatedResult = JSON.parse(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(prevResult));
            updatedResult.sfy_shop.products.edges = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(prevResult.sfy_shop.products.edges), babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(fetchMoreResult.sfy_shop.products.edges));
            updatedResult.sfy_shop.products.pageInfo = fetchMoreResult.sfy_shop.products.pageInfo;
            return updatedResult;
          }
        });
      };
      //
      if (error) throw new Error('Error in Products Query: ' + error);
      return { loading: loading, sfy_shop: sfy_shop, currEndCursor: currEndCursor, hasNextPage: hasNextPage, hasPreviousPage: hasPreviousPage, loadMore: loadMore, searchPhrase: searchPhrase };
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (filteredProductsQuery);

/***/ })

};
//# sourceMappingURL=index.49c94f83f29b57ee0d95.js.map
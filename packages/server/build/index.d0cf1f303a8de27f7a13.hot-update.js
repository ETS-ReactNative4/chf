require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/common/schema/adminProductsQuery.js":
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
/* harmony import */ var _graphql_SFY_sfyAdminProductsQuery_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../client/src/modules/common/graphql/SFY/sfyAdminProductsQuery.graphql");
/* harmony import */ var _graphql_SFY_sfyAdminProductsQuery_graphql__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_graphql_SFY_sfyAdminProductsQuery_graphql__WEBPACK_IMPORTED_MODULE_5__);







/* harmony default export */ __webpack_exports__["default"] = (function () {
  var queryString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _graphql_SFY_sfyAdminProductsQuery_graphql__WEBPACK_IMPORTED_MODULE_5___default.a;
  var first = arguments[1];
  return Object(react_apollo__WEBPACK_IMPORTED_MODULE_4__["graphql"])(queryString, {
    options: function options() {
      return { variables: babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({}, 'first', first ? first : 250) };
    },
    props: function props(_ref) {
      var data = _ref.data;
      var productsLoading = data.loading,
          error = data.error,
          sfy_shop = data.sfy_shop,
          fetchMore = data.fetchMore,
          variables = data.variables;

      var currEndCursor = void 0,
          hasNextPage = void 0,
          hasPreviousPage = void 0;
      if (!productsLoading && sfy_shop) {
        var products = sfy_shop.products;
        //console.log('products', products);

        if (products.edges.length > 0) currEndCursor = products.edges[products.edges.length - 1].cursor;
        hasNextPage = products.pageInfo.hasNextPage;
        hasPreviousPage = products.pageInfo.hasPreviousPage;
      }
      var loadMore = function loadMore() {
        var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250;
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
            //console.log('udpatedres', updatedResult);
            return updatedResult;
          }
        });
      };
      if (error) throw new Error('Error in Admin Products Query: ' + error);
      if (productsLoading || !sfy_shop) return { productsLoading: productsLoading, sfy_shop: sfy_shop };
      if (!productsLoading && sfy_shop) {
        return {
          productsLoading: productsLoading,
          sfy_shop: sfy_shop,
          currEndCursor: currEndCursor,
          hasNextPage: hasNextPage,
          hasPreviousPage: hasPreviousPage,
          loadMore: loadMore
        };
      }
    }
  });
});

/***/ })

};
//# sourceMappingURL=index.b333ed073f38ac6e0a0d.js.map
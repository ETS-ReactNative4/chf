require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/admin/containers/Dashboard.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/core-js/json/stringify");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__);
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
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _profile_components_ManageAdmins__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/profile/components/ManageAdmins.jsx");
/* harmony import */ var _components_SiteMap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/admin/components/SiteMap/index.jsx");
/* harmony import */ var _components_AdminView__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../client/src/modules/admin/components/AdminView.web.jsx");
/* harmony import */ var _graphql_SiteMapProds_graphql__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../client/src/modules/admin/graphql/SiteMapProds.graphql");
/* harmony import */ var _graphql_SiteMapProds_graphql__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_graphql_SiteMapProds_graphql__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _graphql_UploadContent_graphql__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../client/src/modules/admin/graphql/UploadContent.graphql");
/* harmony import */ var _graphql_UploadContent_graphql__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_graphql_UploadContent_graphql__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../client/src/modules/admin/graphql/SimplePageQuery.graphql");
/* harmony import */ var _graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../client/src/modules/admin/graphql/Dealers.graphql");
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../client/src/modules/admin/graphql/DealerQuery.graphql");
/* harmony import */ var _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../client/src/modules/admin/graphql/UpdateDealer.graphql");
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _graphql_CreateSiteMap_graphql__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("../client/src/modules/admin/graphql/CreateSiteMap.graphql");
/* harmony import */ var _graphql_CreateSiteMap_graphql__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_graphql_CreateSiteMap_graphql__WEBPACK_IMPORTED_MODULE_21__);











var _this2 = undefined;

/*eslint-disable no-unused-vars*/













var Admin = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(Admin, _React$Component);

  function Admin() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default()(this, Admin);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default()(this, (Admin.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5___default()(Admin)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(Admin, [{
    key: 'render',
    value: function render() {
      console.log('The props::::', this.props);
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
        _components_AdminView__WEBPACK_IMPORTED_MODULE_14__["default"],
        this.props,
        react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
          'div',
          { className: 'admin__dashboard' },
          react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_profile_components_ManageAdmins__WEBPACK_IMPORTED_MODULE_12__["default"], this.props),
          react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_SiteMap__WEBPACK_IMPORTED_MODULE_13__["default"], this.props)
        )
      );
    }
  }]);

  return Admin;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

var AdminWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_11__["compose"])(react_apollo__WEBPACK_IMPORTED_MODULE_11__["withApollo"], Object(react_apollo__WEBPACK_IMPORTED_MODULE_11__["graphql"])(_graphql_SiteMapProds_graphql__WEBPACK_IMPORTED_MODULE_15___default.a, {
  options: function options() {
    return {
      variables: { first: 250 }
    };
  },
  props: function props(_ref) {
    var data = _ref.data;

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

        var updatedVars = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, variables, { after: after, first: first });
        console.log('UPDATED VARS::', updatedVars);
        return fetchMore({
          variables: updatedVars,
          updateQuery: function updateQuery(prevResult, _ref2) {
            var fetchMoreResult = _ref2.fetchMoreResult;

            console.log('PREVRESULT:', prevResult);
            if (fetchMoreResult.admin_products.edges.length === 0) return prevResult;
            var updatedResult = JSON.parse(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(prevResult));
            console.log('PREV RESULT STRING', updatedResult);
            // const updatedResult = Object.assign({}, prevResult);
            updatedResult.admin_products.edges = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(prevResult.admin_products.edges), babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(fetchMoreResult.admin_products.edges));
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
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_11__["graphql"])(_graphql_CreateSiteMap_graphql__WEBPACK_IMPORTED_MODULE_21___default.a, {
  props: function props(_ref3) {
    var mutate = _ref3.mutate;
    return {
      createSiteMap: function () {
        var _ref4 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var _ref5, createSiteMap;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return mutate();

                case 2:
                  _ref5 = _context.sent;
                  createSiteMap = _ref5.data.createSiteMap;
                  return _context.abrupt('return', createSiteMap);

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function createSiteMap() {
          return _ref4.apply(this, arguments);
        };
      }()
    };
  }
}))(Admin);

/* harmony default export */ __webpack_exports__["default"] = (AdminWithApollo);

/***/ })

};
//# sourceMappingURL=index.270167f741b9180392ca.js.map
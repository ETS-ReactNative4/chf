require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/admin/containers/Locations.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/admin/graphql/Dealers.graphql");
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../client/src/modules/admin/graphql/DealerQuery.graphql");
/* harmony import */ var _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/admin/graphql/UpdateDealer.graphql");
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Locations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/admin/components/Locations/index.js");
/* harmony import */ var _components_AdminView__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/admin/components/AdminView.web.jsx");








var _this2 = undefined;










/*eslint-disable no-unused-vars*/



var Locations = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Locations, _React$Component);

  function Locations() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Locations);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Locations.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(Locations)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Locations, [{
    key: 'render',
    value: function render() {
      console.log('The props::::', this.props);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_AdminView__WEBPACK_IMPORTED_MODULE_13__["default"],
        this.props,
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Locations__WEBPACK_IMPORTED_MODULE_12__["default"], this.props)
      );
    }
  }]);

  return Locations;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var LocationsWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["compose"])(react_apollo__WEBPACK_IMPORTED_MODULE_8__["withApollo"],
// graphql(PAGES_QUERY, {
//   props: ({ data }) => {
//     const { pages, loading: loadingPages, error } = data;
//     console.log('pages', pages);
//     if (loadingPages && !error) {
//       return { loadingPages, pages: null };
//     } else {
//       return { pages, loadingPages };
//     }
//   }
// }),
// graphql(UPLOAD_CONTENT, {
//   props: ({ mutate }) => ({
//     uploadContent: async ({ page_id, content }) => {
//       // console.log('PAGE ID::', page_id);
//       // console.log('content::', content);
//       const {
//         data: { uploadPageContent }
//       } = await mutate({ variables: { pageContent: { page_id: page_id, content } } });
//       console.log('RETURN DATA::: ', uploadPageContent);
//       return uploadPageContent;
//     }
//   })
// }),
// graphql(DEALER_BY_HANDLE_QUERY, {
//   options: props => {
//     return { variables: { handle: ' ' } };
//   },
//   props: ({ data }) => {
//     console.log('data', data);
//     return { ...data };
//   }
// }),
// graphql(SIMPLE_PAGE_QUERY, {
//   options: () => {
//     return { variables: { pageTitle: 'Locations' } };
//   },
//   props: ({ data }) => {
//     console.log('Locations Page data', data);
//     const { page, loading: loadingPage, error } = data;
//     if (loadingPage && !error) {
//       return { loadingPage, page: null };
//     } else {
//       return { page, loadingPage };
//     }
//   }
// }),
Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["graphql"])(_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_9___default.a, {
  options: function options() {
    return {
      variables: { first: 12, after: 0 }
    };
  },
  props: function props(_ref) {
    var data = _ref.data;

    console.log('DATA:::', data);
    var loading = data.loading,
        error = data.error,
        dealers = data.dealers;

    if (error) {
      console.log('DEALERS ERROR:::', error);
      return { dealersError: error };
    }
    if (loading) {
      return { loadingDealers: loading };
    }
    if (!loading && !error) {
      return { loadingDealers: loading, dealers: dealers };
    }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["graphql"])(_graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_11___default.a, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      updateDealer: function () {
        var _ref3 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dealer) {
          var _ref4, updateDealer;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return mutate({
                    variables: { dealer: dealer }
                  });

                case 3:
                  _ref4 = _context.sent;
                  updateDealer = _ref4.data.updateDealer;

                  console.log('UPDATED::', updateDealer);
                  return _context.abrupt('return', updateDealer);

                case 9:
                  _context.prev = 9;
                  _context.t0 = _context['catch'](0);

                  console.log('ERROR UPDATING:', _context.t0);

                case 12:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[0, 9]]);
        }));

        return function updateDealer(_x) {
          return _ref3.apply(this, arguments);
        };
      }()
    };
  }
  // options: {
  //   refetchQueries: ({ data: { updateDealer } }) => {
  //     console.log('RESULT', updateDealer);
  //     return [
  //       { query: DEALER_BY_HANDLE_QUERY, variables: { handle: updateDealer.handle } },
  //       // { query: DEALERS_QUERY, variables: { first: 12, after: 0 } }
  //     ];
  //   }
  // }
}))(Locations);

/* harmony default export */ __webpack_exports__["default"] = (LocationsWithApollo);

/***/ })

};
//# sourceMappingURL=index.7606d05f3366e2683362.js.map
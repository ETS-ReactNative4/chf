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
/* harmony import */ var _graphql_PagesQuery_graphql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../client/src/modules/admin/graphql/PagesQuery.graphql");
/* harmony import */ var _graphql_PagesQuery_graphql__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_graphql_PagesQuery_graphql__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _graphql_UploadContent_graphql__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/admin/graphql/UploadContent.graphql");
/* harmony import */ var _graphql_UploadContent_graphql__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_graphql_UploadContent_graphql__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/admin/graphql/SimplePageQuery.graphql");
/* harmony import */ var _graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/admin/graphql/Dealers.graphql");
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../client/src/modules/admin/graphql/DealerQuery.graphql");
/* harmony import */ var _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../client/src/modules/admin/graphql/UpdateDealer.graphql");
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_15__);








var _this2 = undefined;

/*eslint-disable no-unused-vars*/











var Admin = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Admin, _React$Component);

  function Admin() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Admin);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Admin.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(Admin)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Admin, [{
    key: 'render',
    value: function render() {
      // console.log('The props::::', this.props);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_AdminView__WEBPACK_IMPORTED_MODULE_9__["default"], this.props);
    }
  }]);

  return Admin;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Admin.defaultProps = {
  images: []
};
var AdminWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["compose"])(react_apollo__WEBPACK_IMPORTED_MODULE_8__["withApollo"], Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["graphql"])(_graphql_PagesQuery_graphql__WEBPACK_IMPORTED_MODULE_10___default.a, {
  props: function props(_ref) {
    var data = _ref.data;
    var pages = data.pages,
        loadingPages = data.loading,
        error = data.error;

    console.log('pages', pages);
    if (loadingPages && !error) {
      return { loadingPages: loadingPages, pages: null };
    } else {
      return { pages: pages, loadingPages: loadingPages };
    }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["graphql"])(_graphql_UploadContent_graphql__WEBPACK_IMPORTED_MODULE_11___default.a, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      uploadContent: function () {
        var _ref3 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref4) {
          var page_id = _ref4.page_id,
              content = _ref4.content;

          var _ref5, uploadPageContent;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return mutate({ variables: { pageContent: { page_id: page_id, content: content } } });

                case 2:
                  _ref5 = _context.sent;
                  uploadPageContent = _ref5.data.uploadPageContent;

                  console.log('RETURN DATA::: ', uploadPageContent);
                  return _context.abrupt('return', uploadPageContent);

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function uploadContent(_x) {
          return _ref3.apply(this, arguments);
        };
      }()
    };
  }
}),
// graphql(DEALER_BY_HANDLE_QUERY, {
//   options: props => {
//     return { variables: { handle: ' ' } };
//   },
//   props: ({ data }) => {
//     console.log('data', data);
//     return { ...data };
//   }
// }),
Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["graphql"])(_graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_12___default.a, {
  options: function options() {
    return { variables: { pageTitle: 'Locations' } };
  },
  props: function props(_ref6) {
    var data = _ref6.data;

    console.log('Locations Page data', data);
    var page = data.page,
        loadingPage = data.loading,
        error = data.error;

    if (loadingPage && !error) {
      return { loadingPage: loadingPage, page: null };
    } else {
      return { page: page, loadingPage: loadingPage };
    }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["graphql"])(_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_13___default.a, {
  options: function options() {
    return {
      variables: { first: 12, after: 0 }
    };
  },
  props: function props(_ref7) {
    var data = _ref7.data;

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
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["graphql"])(_graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_15___default.a, {
  props: function props(_ref8) {
    var mutate = _ref8.mutate;
    return {
      updateDealer: function () {
        var _ref9 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dealer) {
          var _ref10, updateDealer;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return mutate({
                    variables: { dealer: dealer }
                  });

                case 3:
                  _ref10 = _context2.sent;
                  updateDealer = _ref10.data.updateDealer;

                  console.log('UPDATED::', updateDealer);
                  return _context2.abrupt('return', updateDealer);

                case 9:
                  _context2.prev = 9;
                  _context2.t0 = _context2['catch'](0);

                  console.log('ERROR UPDATING:', _context2.t0);

                case 12:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2, [[0, 9]]);
        }));

        return function updateDealer(_x2) {
          return _ref9.apply(this, arguments);
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
}))(Admin);

/* harmony default export */ __webpack_exports__["default"] = (AdminWithApollo);

/***/ })

};
//# sourceMappingURL=index.6079ebfaf315f93cfd4c.js.map
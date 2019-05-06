require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/admin/containers/Carousel.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/core-js/map");
/* harmony import */ var babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_AdminView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/admin/components/AdminView.web.jsx");
/* harmony import */ var _components_CarouselImages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/admin/components/CarouselImages/index.js");
/* harmony import */ var _graphql_PagesQuery_graphql__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/admin/graphql/PagesQuery.graphql");
/* harmony import */ var _graphql_PagesQuery_graphql__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_graphql_PagesQuery_graphql__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _graphql_UploadContent_graphql__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../client/src/modules/admin/graphql/UploadContent.graphql");
/* harmony import */ var _graphql_UploadContent_graphql__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_graphql_UploadContent_graphql__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../client/src/modules/admin/graphql/SimplePageQuery.graphql");
/* harmony import */ var _graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../client/src/modules/admin/graphql/Dealers.graphql");
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../client/src/modules/admin/graphql/DealerQuery.graphql");
/* harmony import */ var _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../client/src/modules/admin/graphql/UpdateDealer.graphql");
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_18__);










var _this2 = undefined;

/*eslint-disable no-unused-vars*/













var Admin = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(Admin, _React$Component);

  function Admin(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Admin);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, (Admin.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default()(Admin)).call(this, props));

    _this.imageToState = function (images) {
      _this.setState({
        images: images
      });
    };

    _this.save = function (page_id, content) {
      // console.log('THIS.PROPS::', this.props);
      _this.props.uploadContent(9, [{}]);
    };

    _this.state = {
      images: new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_3___default.a()
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(Admin, [{
    key: 'render',
    value: function render() {
      console.log('The props::::', this.props);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
        _components_AdminView__WEBPACK_IMPORTED_MODULE_11__["default"],
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, this.props, { save: this.save }),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_CarouselImages__WEBPACK_IMPORTED_MODULE_12__["default"], this.props)
      );
    }
  }]);

  return Admin;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

Admin.defaultProps = {
  images: []
};
var AdminWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_10__["compose"])(react_apollo__WEBPACK_IMPORTED_MODULE_10__["withApollo"], Object(react_apollo__WEBPACK_IMPORTED_MODULE_10__["graphql"])(_graphql_PagesQuery_graphql__WEBPACK_IMPORTED_MODULE_13___default.a, {
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
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_10__["graphql"])(_graphql_UploadContent_graphql__WEBPACK_IMPORTED_MODULE_14___default.a, {
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
Object(react_apollo__WEBPACK_IMPORTED_MODULE_10__["graphql"])(_graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_15___default.a, {
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
})
// graphql(DEALERS_QUERY, {
//   options: () => ({
//     variables: { first: 12, after: 0 }
//   }),
//   props: ({ data }) => {
//     console.log('DATA:::', data);
//     const { loading, error, dealers } = data;
//     if (error) {
//       console.log('DEALERS ERROR:::', error);
//       return { dealersError: error };
//     }
//     if (loading) {
//       return { loadingDealers: loading };
//     }
//     if (!loading && !error) {
//       return { loadingDealers: loading, dealers };
//     }
//   }
// }),
// graphql(UPDATE_DEALER, {
//   props: ({ mutate }) => ({
//     updateDealer: async dealer => {
//       try {
//         const {
//           data: { updateDealer }
//         } = await mutate({
//           variables: { dealer }
//         });
//         console.log('UPDATED::', updateDealer);
//         return updateDealer;
//       } catch (e) {
//         console.log('ERROR UPDATING:', e);
//       }
//     }
//   })
// })
)(Admin);

/* harmony default export */ __webpack_exports__["default"] = (AdminWithApollo);

/***/ }),

/***/ "../client/src/modules/admin/index.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../client/src/modules/admin/containers/Dashboard.jsx");
/* harmony import */ var _containers_Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../client/src/modules/admin/containers/Carousel.jsx");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../client/src/modules/admin/reducers/index.js");
/* harmony import */ var _user_containers_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../client/src/modules/user/containers/Auth.web.jsx");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../client/src/modules/connector.ts");









/* harmony default export */ __webpack_exports__["default"] = (new _connector__WEBPACK_IMPORTED_MODULE_6__["default"]({
  route: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_5__["AuthRoute"], { exact: true, path: '/admin/dashboard', role: ['admin'], component: _containers_Dashboard__WEBPACK_IMPORTED_MODULE_2__["default"] }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_5__["AuthRoute"], { exact: true, path: '/admin/carousel', role: ['admin'], component: _containers_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"] })],
  reducer: { admin: _reducers__WEBPACK_IMPORTED_MODULE_4__["default"] }
}));

/***/ })

};
//# sourceMappingURL=index.a851f92f56169b36aff4.js.map
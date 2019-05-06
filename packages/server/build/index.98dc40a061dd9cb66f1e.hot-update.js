require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/admin/components/Locations/index.js":
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
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../client/src/modules/admin/graphql/SimplePageQuery.graphql");
/* harmony import */ var _graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/admin/graphql/Dealers.graphql");
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../client/src/modules/admin/graphql/DealerQuery.graphql");
/* harmony import */ var _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/admin/graphql/UpdateDealer.graphql");
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _LocationsView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/admin/components/Locations/LocationsView.jsx");















// import FormCreator from '../FormCreator';
// import Text from '../FormCreator/FormTypes/Text';
// import Formic from './Form';
//
// const LocationForm = new FormCreator({
//   field: [<Text />]
// });

var Locations = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Locations, _Component);

  function Locations(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Locations);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Locations.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(Locations)).call(this, props));

    _this.state = {};
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Locations, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_LocationsView__WEBPACK_IMPORTED_MODULE_12__["default"], this.props);
    }
  }]);

  return Locations;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

// const LocationsWithApollo = compose(
//   graphql(DEALER_BY_HANDLE_QUERY, {
//     options: props => {
//       return { variables: { handle: ' ' } };
//     },
//     props: ({ data }) => {
//       console.log('data', data);
//       return { ...data };
//     }
//   }),
//   graphql(SIMPLE_PAGE_QUERY, {
//     options: () => {
//       return { variables: { pageTitle: 'Locations' } };
//     },
//     props: ({ data }) => {
//       console.log('Locations Page data', data);
//       const { page, loading: loadingPage, error } = data;
//       if (loadingPage && !error) {
//         return { loadingPage, page: null };
//       } else {
//         return { page, loadingPage };
//       }
//     }
//   }),
//   graphql(DEALERS_QUERY, {
//     options: () => ({
//       variables: { first: 12, after: null }
//     }),
//     props: ({ data }) => {
//       console.log('DATA:::', data);
//       const { loading, error, dealers } = data;
//       if (error) {
//         return { dealersError: error };
//       }
//       if (loading) {
//         return { loadingDealers: loading };
//       }
//       if (!loading && !error) {
//         return { loadingDealers: loading, dealers };
//       }
//     }
//   }),
//   graphql(UPDATE_DEALER, {
//     props: ({ mutate }) => ({
//       updateDealer: async dealer => {
//         try {
//           const {
//             data: { updateDealer }
//           } = await mutate({
//             variables: { dealer }
//             // update: (proxy, { data: { updateDealer } }) => {
//             //   try {
//             //     console.log('UPDATE DEALER::', updateDealer);
//             //     const data = proxy.readQuery({ query: DEALERS_QUERY, variables: { first: 12 } });
//             //     console.log('Data::: on update::??', data);
//             //
//             //   } catch (e) {
//             //     console.log('EEE', e);
//             //   }
//             // }
//           });
//           console.log('UPDATED::', updateDealer);
//           return updateDealer;
//         } catch (e) {
//           console.log('ERROR UPDATING:', e);
//         }
//       }
//     })
//   })
// )(Locations);


/* harmony default export */ __webpack_exports__["default"] = (Locations);

/***/ })

};
//# sourceMappingURL=index.a1109745d27b061f29ab.js.map
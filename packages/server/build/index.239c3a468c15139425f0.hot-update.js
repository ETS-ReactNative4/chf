require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/products/containers/SingleProduct.jsx":
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_SingleProductView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/products/components/SingleProductView.web.jsx");
/* harmony import */ var _common_graphql_SFY_sfySingleProductByHandle_graphql__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/common/graphql/SFY/sfySingleProductByHandle.graphql");
/* harmony import */ var _common_graphql_SFY_sfySingleProductByHandle_graphql__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_SFY_sfySingleProductByHandle_graphql__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _common_graphql_SFY_sfyCheckoutCreate_graphql__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/common/graphql/SFY/sfyCheckoutCreate.graphql");
/* harmony import */ var _common_graphql_SFY_sfyCheckoutCreate_graphql__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_SFY_sfyCheckoutCreate_graphql__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _common_graphql_SFY_sfyCheckoutLineItemsAdd_graphql__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../client/src/modules/common/graphql/SFY/sfyCheckoutLineItemsAdd.graphql");
/* harmony import */ var _common_graphql_SFY_sfyCheckoutLineItemsAdd_graphql__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_SFY_sfyCheckoutLineItemsAdd_graphql__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../client/src/modules/common/graphql/VendorsQuery.graphql");
/* harmony import */ var _common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _common_graphql_RelatedProductsQuery_graphql__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../client/src/modules/common/graphql/RelatedProductsQuery.graphql");
/* harmony import */ var _common_graphql_RelatedProductsQuery_graphql__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_RelatedProductsQuery_graphql__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _common_graphql_ProductDataQuery_graphql__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../client/src/modules/common/graphql/ProductDataQuery.graphql");
/* harmony import */ var _common_graphql_ProductDataQuery_graphql__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_ProductDataQuery_graphql__WEBPACK_IMPORTED_MODULE_17__);








var _this2 = undefined;

/* eslint-disable no-undef */





//import { filter } from './Category';
//import SINGLE_PRODUCT_QUERY from '../../common/graphql/SFY/sfySingleProduct.graphql';







//TODO: Add to common file
var _toggleCart = function _toggleCart() {
  return { type: 'TOGGLE_CART' };
};
var updateQty = function updateQty(cartQty) {
  return { type: 'UPDATE_CART_QTY', cartQty: cartQty };
};
var cartQty = function cartQty(lineItemEdges) {
  if (lineItemEdges.length === 0) return 0;
  return lineItemEdges.reduce(function (acc, _ref) {
    var qty = _ref.node.quantity;

    return acc + qty;
  }, 0);
};

var ProductView = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(ProductView, _React$Component);

  function ProductView() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, ProductView);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (ProductView.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(ProductView)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(ProductView, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_SingleProductView__WEBPACK_IMPORTED_MODULE_11__["default"], this.props);
    }
  }]);

  return ProductView;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var ProductViewWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["compose"])(react_apollo__WEBPACK_IMPORTED_MODULE_8__["withApollo"], Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["graphql"])(_common_graphql_SFY_sfySingleProductByHandle_graphql__WEBPACK_IMPORTED_MODULE_12___default.a, {
  options: function options(props) {
    console.log('PROPS::', props);
    var handle = props.location.state;

    console.log('HANDLE:', handle);
    return { variables: { handle: handle } };
  },
  props: function props(_ref2) {
    var data = _ref2.data;

    console.log('DATA::::', data);
    var loading = data.loading,
        sfy_shop = data.sfy_shop,
        error = data.error;

    if (error) throw new Error('Error in Products Query: ' + error);else if (loading || !sfy_shop) return { loading: loading };else if (!loading && sfy_shop) return { loading: loading, product: sfy_shop.productByHandle };
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["graphql"])(_common_graphql_SFY_sfyCheckoutCreate_graphql__WEBPACK_IMPORTED_MODULE_13___default.a, {
  props: function props(_ref3) {
    var updateCartQty = _ref3.ownProps.updateCartQty,
        mutate = _ref3.mutate;
    return {
      createInitialCheckout: function () {
        var _ref4 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(addedItem) {
          var _ref5, _ref5$data$sfy_checko, checkout, userErrors;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return mutate({
                    variables: { input: addedItem }
                  });

                case 3:
                  _ref5 = _context.sent;
                  _ref5$data$sfy_checko = _ref5.data.sfy_checkoutCreate;
                  checkout = _ref5$data$sfy_checko.checkout;
                  userErrors = _ref5$data$sfy_checko.checkoutUserErrors;

                  if (!(Array.isArray(userErrors) && userErrors.length > 0)) {
                    _context.next = 11;
                    break;
                  }

                  return _context.abrupt('return', { errors: userErrors.map(function (err) {
                      return err.message;
                    }) });

                case 11:
                  if (!('id' in checkout && checkout.id && typeof window !== 'undefined')) {
                    _context.next = 15;
                    break;
                  }

                  updateCartQty(cartQty(checkout.lineItems.edges));
                  localStorage.setItem('sfy-checkout-id', checkout.id);
                  return _context.abrupt('return', checkout);

                case 15:
                  _context.next = 20;
                  break;

                case 17:
                  _context.prev = 17;
                  _context.t0 = _context['catch'](0);

                  console.log(_context.t0.graphQLErrors);

                case 20:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[0, 17]]);
        }));

        return function createInitialCheckout(_x) {
          return _ref4.apply(this, arguments);
        };
      }()
    };
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["graphql"])(_common_graphql_SFY_sfyCheckoutLineItemsAdd_graphql__WEBPACK_IMPORTED_MODULE_14___default.a, {
  props: function props(_ref6) {
    var updateCartQty = _ref6.ownProps.updateCartQty,
        mutate = _ref6.mutate;
    return {
      addCartItem: function () {
        var _ref7 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(addedItem) {
          var _ref8, _ref8$data$sfy_checko, checkout, userErrors;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return mutate({
                    variables: addedItem
                  });

                case 3:
                  _ref8 = _context2.sent;
                  _ref8$data$sfy_checko = _ref8.data.sfy_checkoutLineItemsAdd;
                  checkout = _ref8$data$sfy_checko.checkout;
                  userErrors = _ref8$data$sfy_checko.checkoutUserErrors;

                  if (!(Array.isArray(userErrors) && userErrors.length > 0)) {
                    _context2.next = 11;
                    break;
                  }

                  return _context2.abrupt('return', { errors: userErrors.map(function (err) {
                      return err.message;
                    }) });

                case 11:
                  if (!('id' in checkout && checkout.id && typeof window !== 'undefined')) {
                    _context2.next = 15;
                    break;
                  }

                  updateCartQty(cartQty(checkout.lineItems.edges));
                  localStorage.setItem('sfy-checkout-id', checkout.id);
                  return _context2.abrupt('return', checkout);

                case 15:
                  _context2.next = 20;
                  break;

                case 17:
                  _context2.prev = 17;
                  _context2.t0 = _context2['catch'](0);

                  console.log(_context2.t0.graphQLErrors);

                case 20:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2, [[0, 17]]);
        }));

        return function addCartItem(_x2) {
          return _ref7.apply(this, arguments);
        };
      }()
    };
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["graphql"])(_common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_15___default.a, {
  props: function props(_ref9) {
    var _ref9$data = _ref9.data,
        loading = _ref9$data.loading,
        error = _ref9$data.error,
        vendors = _ref9$data.vendors;

    if (error) throw new Error('Error in Vendors Query: ' + error);
    return { loading: loading, vendors: vendors };
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["graphql"])(_common_graphql_ProductDataQuery_graphql__WEBPACK_IMPORTED_MODULE_17___default.a, {
  options: function options(props) {
    var handle = props.location.state;

    return { variables: { handle: handle } };
  },
  props: function props(_ref10) {
    var data = _ref10.data;
    var loading = data.loading,
        error = data.error,
        productData = data.productData;

    console.log('product data::::', productData);
    if (error) throw new Error('Error in Product Data Query: ' + error);
    return { loading: loading, productData: productData };
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["graphql"])(_common_graphql_RelatedProductsQuery_graphql__WEBPACK_IMPORTED_MODULE_16___default.a, {
  options: function options(props) {
    var product_handle = props.location.state;

    return { variables: { product_handle: product_handle } };
  },
  props: function props(_ref11) {
    var data = _ref11.data;

    // console.log('REL PROD DATA', data);
    var loading = data.loading,
        error = data.error,
        relatedProducts = data.relatedProducts;

    if (error) throw new Error('Error in Related Prodcuts Query: ' + error);
    return { loading: loading, relatedProducts: relatedProducts };
  }
}))(ProductView);

var ProductViewWithRedux = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(null, function (dispatch) {
  return {
    toggleCart: function toggleCart() {
      return dispatch(_toggleCart());
    },
    updateCartQty: function updateCartQty(cartQty) {
      return dispatch(updateQty(cartQty));
    }
  };
})(ProductViewWithApollo);

ProductView.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object
};

/* harmony default export */ __webpack_exports__["default"] = (ProductViewWithRedux);

/***/ })

};
//# sourceMappingURL=index.7a70fa651a159aba64cf.js.map
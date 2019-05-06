require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/profile/components/ManageSpecs.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/core-js/object/keys");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/helpers/slicedToArray");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("babel-runtime/helpers/defineProperty");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _styles_manage_specs_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../client/src/modules/profile/styles/manage-specs.scss");
/* harmony import */ var _styles_manage_specs_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_styles_manage_specs_scss__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _common_graphql_ProductDataQuery_graphql__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("../client/src/modules/common/graphql/ProductDataQuery.graphql");
/* harmony import */ var _common_graphql_ProductDataQuery_graphql__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_ProductDataQuery_graphql__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _common_graphql_AddProductData_graphql__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("../client/src/modules/common/graphql/AddProductData.graphql");
/* harmony import */ var _common_graphql_AddProductData_graphql__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_AddProductData_graphql__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _common_graphql_UpdateProductData_graphql__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("../client/src/modules/common/graphql/UpdateProductData.graphql");
/* harmony import */ var _common_graphql_UpdateProductData_graphql__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_UpdateProductData_graphql__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _common_schema__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("../client/src/modules/common/schema/index.js");
/* harmony import */ var _products_components_SingleProductView__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("../client/src/modules/products/components/SingleProductView.web.jsx");
















var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  query productData($handle: String!) {\n    productData(handle: $handle) {\n      id\n      sku\n      product_name\n      handle\n      shock_absorption\n      console\n      user_ids\n      workouts\n      hrt_monitoring\n      stride_technology\n      power\n      design\n      drive_system\n      handlebars\n      seat\n      pedals\n      frame\n      finish\n      motion\n      exercises\n      weight_stack\n      included_accessories\n      optional_weight_stack\n      running_area\n      motor\n      speed\n      incline\n      resistance_levels\n      resistance_system\n      stride\n      max_user_weight\n      ramp\n      stored_vertical_height\n      seat_floor_distance\n      warranty\n    }\n  }\n'], ['\n  query productData($handle: String!) {\n    productData(handle: $handle) {\n      id\n      sku\n      product_name\n      handle\n      shock_absorption\n      console\n      user_ids\n      workouts\n      hrt_monitoring\n      stride_technology\n      power\n      design\n      drive_system\n      handlebars\n      seat\n      pedals\n      frame\n      finish\n      motion\n      exercises\n      weight_stack\n      included_accessories\n      optional_weight_stack\n      running_area\n      motor\n      speed\n      incline\n      resistance_levels\n      resistance_system\n      stride\n      max_user_weight\n      ramp\n      stored_vertical_height\n      seat_floor_distance\n      warranty\n    }\n  }\n']);





// import classnames from 'classnames';

// import {  } from '../../common/components/global';
// import settings from '../../../../../../settings';

// import { ADMIN_PRODUCTS_QUERY, CURRENT_USER_QUERY, DELETE_TOKEN, LOGOUT_ADMIN } from '../../common/schema';







var selectProdString = 'Select a product';
var selectSpecString = 'Select a specification';
var fullSpecs = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_14___default()(_products_components_SingleProductView__WEBPACK_IMPORTED_MODULE_25__["prodSpecs"]), babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_14___default()(_products_components_SingleProductView__WEBPACK_IMPORTED_MODULE_25__["prodFeatures"]));
var clearedSubmissionResult = { submissionError: null, submissionSuccess: null };

var ManageSpecs = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_13___default()(ManageSpecs, _React$Component);

  function ManageSpecs() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10___default()(this, ManageSpecs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12___default()(this, (_ref = ManageSpecs.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9___default()(ManageSpecs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentEdit: {},
      selectedProduct: selectProdString,
      selectedSpec: selectSpecString,
      specInput: '',
      submissionError: null,
      submissionSuccess: null
    }, _this.handleProductSelect = function (e) {
      return _this.setState(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8___default()({
        selectedProduct: e.target.value,
        selectedSpec: selectSpecString,
        currentEdit: {}
      }, clearedSubmissionResult));
    }, _this.handleSpecSelect = function (e) {
      return _this.setState(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8___default()({
        selectedSpec: e.target.value
      }, clearedSubmissionResult));
    }, _this.handleSpecInput = function (e) {
      var prevEdit = _this.state.currentEdit;
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState({ currentEdit: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8___default()({}, prevEdit, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()({}, name, value)) });
    }, _this.submitSpecs = function () {
      var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(e) {
        var _this$props, productData, addProductData, updateProductData, products, _this$state, currentEdit, selectedProduct, currentSpecs, _Object$assign, __typename, id, specsToSubmit, dataUpdateResult, _products$edges$filte, _products$edges$filte2, sfyData, _sfyData$node, title, vendor, variantEdges, _sku, updatedSubmission, _dataUpdateResult$pro, product_name, handle;

        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();

                _this$props = _this.props, productData = _this$props.productData, addProductData = _this$props.addProductData, updateProductData = _this$props.updateProductData, products = _this$props.sfy_shop.products;
                _this$state = _this.state, currentEdit = _this$state.currentEdit, selectedProduct = _this$state.selectedProduct;
                currentSpecs = productData === null ? {} : productData;
                _Object$assign = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()(currentSpecs, currentEdit, {
                  handle: selectedProduct
                }), __typename = _Object$assign.__typename, id = _Object$assign.id, specsToSubmit = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default()(_Object$assign, ['__typename', 'id']);
                dataUpdateResult = void 0;

                if (!(productData === null)) {
                  _context.next = 16;
                  break;
                }

                // If adding a new product data to rcomm db, add sku and product name from Shopify
                _products$edges$filte = products.edges.filter(function (_ref3) {
                  var node = _ref3.node;
                  return node.handle === selectedProduct;
                }), _products$edges$filte2 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_products$edges$filte, 1), sfyData = _products$edges$filte2[0];
                _sfyData$node = sfyData.node, title = _sfyData$node.title, vendor = _sfyData$node.vendor, variantEdges = _sfyData$node.variants.edges;
                _sku = variantEdges[0].node.sku;
                updatedSubmission = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8___default()({}, specsToSubmit, { product_name: vendor + ' ' + title, sku: _sku });
                _context.next = 13;
                return addProductData(updatedSubmission);

              case 13:
                dataUpdateResult = _context.sent;
                _context.next = 19;
                break;

              case 16:
                _context.next = 18;
                return updateProductData(specsToSubmit);

              case 18:
                dataUpdateResult = _context.sent;

              case 19:
                if (dataUpdateResult) {
                  _context.next = 21;
                  break;
                }

                return _context.abrupt('return');

              case 21:
                if (!('errors' in dataUpdateResult)) {
                  _context.next = 23;
                  break;
                }

                return _context.abrupt('return', _this.setState({ submissionError: dataUpdateResult.errors[0] }));

              case 23:
                if (!('productData' in dataUpdateResult && dataUpdateResult.productData)) {
                  _context.next = 27;
                  break;
                }

                _dataUpdateResult$pro = dataUpdateResult.productData, product_name = _dataUpdateResult$pro.product_name, handle = _dataUpdateResult$pro.handle;

                _this.props.refetchProductData({ handle: handle });
                return _context.abrupt('return', _this.setState({
                  submissionSuccess: 'Successfully updated ' + product_name + '!',
                  currentEdit: {},
                  selectedSpec: selectSpecString
                }));

              case 27:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.renderInputValue = function () {
      var _this$state2 = _this.state,
          selectedSpec = _this$state2.selectedSpec,
          currentEdit = _this$state2.currentEdit;
      var productData = _this.props.productData;

      if (selectedSpec in currentEdit) return currentEdit[selectedSpec];else if (productData && selectedSpec in productData) return productData[selectedSpec];else return '';
    }, _this.handleCancelEdit = function () {
      var _this$state3 = _this.state,
          currentEdit = _this$state3.currentEdit,
          selectedSpec = _this$state3.selectedSpec;

      if (selectedSpec in currentEdit) {
        var removed = currentEdit[selectedSpec],
            rest = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default()(currentEdit, [selectedSpec]);

        _this.setState({ currentEdit: rest });
      }
      return;
    }, _this.isDisabled = function () {
      var _this$props2 = _this.props,
          loadingProductData = _this$props2.loadingProductData,
          productData = _this$props2.productData;

      if (!loadingProductData && !productData) return false;
      if (babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(_this.state.currentEdit).length > 0) return false;
      return true;
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_11___default()(ManageSpecs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.productData) {
        console.log('PRODUCT DATA::', this.props.productData);
        this.setState({ selectedProduct: this.props.productData.handle });
      }
      // console.log('The props::', this.props);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.productData !== prevProps.productData) {
        console.log('DID UPDATE THE PROPS::', this.props.productData.product_name);
        return this.setState({ selectedProduct: this.props.productData.handle });
      }
      if (prevState.selectedProduct !== this.state.selectedProduct) {
        // return this.props.refetchProductData({ handle: this.state.selectedProduct });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var renderInputValue = this.renderInputValue,
          handleCancelEdit = this.handleCancelEdit,
          isDisabled = this.isDisabled;
      var _state = this.state,
          selectedProduct = _state.selectedProduct,
          selectedSpec = _state.selectedSpec;
      var _props = this.props,
          loadingProductData = _props.loadingProductData,
          sfy_shop = _props.sfy_shop;

      console.log('PRODUCT::', this.props.productData);
      var products = null;
      if (!loadingProductData && sfy_shop && 'products' in sfy_shop) {
        if (sfy_shop.products.edges.length > 0) {
          products = sfy_shop.products.edges;
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
        'section',
        { className: 'manage-specs' },
        react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement('div', { className: 'form__select-group' }),
        selectedProduct !== selectProdString ? react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
          'form',
          { onSubmit: this.submitSpecs, className: 'form manage-specs-form' },
          react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
            'div',
            { className: 'form__select-group form__select-group--third' },
            react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
              'select',
              {
                id: 'spec-select',
                className: 'manage-specs-form__input',
                onChange: this.handleSpecSelect,
                value: selectedSpec
              },
              react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
                'option',
                { value: selectSpecString, disabled: true },
                'Select a specification'
              ),
              fullSpecs.map(function (_ref4, i) {
                var _ref5 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_ref4, 2),
                    key = _ref5[0],
                    value = _ref5[1];

                return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
                  'option',
                  { key: i, value: key },
                  value
                );
              })
            )
          ),
          selectedSpec !== selectSpecString ? react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
            'div',
            { className: 'form__item form__item--two-thirds' },
            react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement('input', {
              onChange: this.handleSpecInput,
              type: 'text',
              name: this.state.selectedSpec,
              value: renderInputValue()
            })
          ) : null,
          react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
            'div',
            { className: 'manage-specs-form__button-group' },
            this.state.currentEdit.hasOwnProperty(this.state.selectedSpec) ? react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
              'button',
              { type: 'button', onClick: function onClick() {
                  return handleCancelEdit();
                } },
              react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_19__["MdClose"], { className: 'manage-specs-form__icon' }),
              react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
                'span',
                null,
                'Cancel Edit'
              )
            ) : null,
            react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
              'button',
              { disabled: isDisabled(), type: 'submit' },
              react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_19__["MdSave"], { className: 'manage-specs-form__icon' }),
              react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
                'span',
                null,
                'Submit Updated Specs'
              )
            )
          )
        ) : null,
        ['submissionSuccess', 'submissionError'].map(function (property) {
          if (property in _this3.state) return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
            'div',
            { key: property },
            _this3.state[property]
          );
          return null;
        })
      );
    }
  }]);

  return ManageSpecs;
}(react__WEBPACK_IMPORTED_MODULE_15___default.a.Component);

var QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_18___default()(_templateObject);
var ManageSpecsWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_17__["compose"])(Object(_common_schema__WEBPACK_IMPORTED_MODULE_24__["ADMIN_PRODUCTS_QUERY"])(), Object(react_apollo__WEBPACK_IMPORTED_MODULE_17__["graphql"])(QUERY, {
  options: function options(props) {
    console.log('PROPS. MATCH ', props.match.params);
    return { variables: { handle: props.match.params.product }, fetchPolicy: 'network-only' };
  },
  props: function props(_ref6) {
    var data = _ref6.data;
    var loadingProductData = data.loading,
        error = data.error,
        productData = data.productData,
        refetchProductData = data.refetch;

    if (error) throw new Error('Error in Related Prodcuts Query: ' + error);
    console.log('ANYTHING:::', productData);
    return { loadingProductData: loadingProductData, productData: productData, refetchProductData: refetchProductData };
  }
}), Object(_common_schema__WEBPACK_IMPORTED_MODULE_24__["MODIFY_PRODUCT_DATA"])(_common_graphql_AddProductData_graphql__WEBPACK_IMPORTED_MODULE_22___default.a, 'addProductData'), Object(_common_schema__WEBPACK_IMPORTED_MODULE_24__["MODIFY_PRODUCT_DATA"])(_common_graphql_UpdateProductData_graphql__WEBPACK_IMPORTED_MODULE_23___default.a, 'updateProductData'))(ManageSpecs);

ManageSpecs.propTypes = {
  productsLoading: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.bool,
  products: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.array,
  productSpecs: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.array,
  refetchProductData: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.func,
  sfy_shop: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.object,
  productData: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.object,
  loadingProductData: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.bool
};

/* harmony default export */ __webpack_exports__["default"] = (ManageSpecsWithApollo);

/***/ })

};
//# sourceMappingURL=index.96dd45db08f7e88e745c.js.map
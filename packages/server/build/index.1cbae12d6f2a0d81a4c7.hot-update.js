require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/products/components/SingleProductView.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prodFeatures", function() { return prodFeatures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prodSpecs", function() { return prodSpecs; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/core-js/promise");
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
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
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("babel-runtime/helpers/slicedToArray");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _common_components_global__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../client/src/modules/common/components/global/index.js");
/* harmony import */ var _SimilarProducts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../client/src/modules/products/components/SimilarProducts.jsx");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../../settings.js");
/* harmony import */ var _styles_single_product_view_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../client/src/modules/products/styles/single-product-view.scss");
/* harmony import */ var _styles_single_product_view_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_styles_single_product_view_scss__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _common_graphql_SFY_sfyRelatedProductByHandle_graphql__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("../client/src/modules/common/graphql/SFY/sfyRelatedProductByHandle.graphql");
/* harmony import */ var _common_graphql_SFY_sfyRelatedProductByHandle_graphql__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_SFY_sfyRelatedProductByHandle_graphql__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _common_components_global_components_ResponsiveShpfyPicture__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("../client/src/modules/common/components/global/components/ResponsiveShpfyPicture.jsx");











/* eslint-disable no-undef */













var prodFeatures = [['shock_absorption', 'Shock Absorption'], ['console', 'Console'], ['user_ids', 'User IDs'], ['workouts', 'Workouts'], ['hrt_monitoring', 'Heart Monitoring'], ['stride_technology', 'Stride Technology'], ['power', 'Power'], ['design', 'Design'], ['drive_system', 'Drive System'], ['handlebars', 'Handlebars'], ['seat', 'Seat'], ['pedals', 'Pedals'], ['frame', 'Frame'], ['finish', 'Finish'], ['motion', 'Motion'], ['exercises', 'Exercises'], ['weight_stack', 'Weight Stack'], ['included_accessories', 'Included Accessories'], ['optional_weight_stack', 'Optional Weight Stack']];
var prodSpecs = [['running_area', 'Running Area'], ['motor', 'Motor'], ['speed', 'Speed'], ['incline', 'Incline'], ['resistance_levels', 'Resistance Levels'], ['resistance_system', 'Resistance System'], ['stride', 'Stride'], ['max_user_weight', 'Max User Weight'], ['ramp', 'Ramp'], ['stored_vertical_height', 'Stored Vertical Height'], ['seat_floor_distance', 'Seat Floor Distance'], ['warranty', 'Warranty']];

var featureTypes = prodFeatures.map(function (f) {
  return f[0];
});
var specTypes = prodSpecs.map(function (s) {
  return s[0];
});

var ProductDataList = function ProductDataList(_ref) {
  var dataArr = _ref.dataArr,
      data = _ref.data;

  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
    'ul',
    null,
    dataArr.map(function (_ref2, i) {
      var _ref3 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10___default()(_ref2, 2),
          key = _ref3[0],
          value = _ref3[1];

      if (key in data && data[key]) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
          'li',
          { key: i },
          react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
            'span',
            { style: { fontWeight: 600 } },
            value
          ),
          ' ',
          data[key]
        );
      } else {
        return null;
      }
    })
  );
};

var SingleProductView = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(SingleProductView, _React$Component);

  function SingleProductView() {
    var _ref4,
        _this2 = this;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default()(this, SingleProductView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default()(this, (_ref4 = SingleProductView.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5___default()(SingleProductView)).call.apply(_ref4, [this].concat(args))), _this), _this.state = {
      selectedImage: '0',
      showSpecsModal: false,
      relatedProducts: []
    }, _this.addToCart = function () {
      var _ref5 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(variantId) {
        var checkoutId, addedItem, _addedItem;

        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                checkoutId = localStorage.getItem('sfy-checkout-id');

                if (checkoutId) {
                  _context.next = 7;
                  break;
                }

                addedItem = { lineItems: [{ variantId: variantId, quantity: 1 }] };
                _context.next = 5;
                return _this.props.createInitialCheckout(addedItem);

              case 5:
                _context.next = 10;
                break;

              case 7:
                _addedItem = { lineItems: [{ variantId: variantId, quantity: 1 }], checkoutId: checkoutId };
                _context.next = 10;
                return _this.props.addCartItem(_addedItem);

              case 10:
                _this.props.toggleCart();

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref5.apply(this, arguments);
      };
    }(), _this.getDisplayPrice = function (input) {
      return parseInt(input).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }, _this.toggleModal = function () {
      return _this.setState({ showSpecsModal: !_this.state.showSpecsModal });
    }, _this.formatVendor = function (name) {
      return name.replace(/[\s/-]/g, '').toLowerCase();
    }, _this.vendorLogo = function (vendorName) {
      var vendors = _this.props.vendors;

      var _vendors$filter = vendors.filter(function (v) {
        return _this.formatVendor(v.name) === _this.formatVendor(vendorName);
      }),
          _vendors$filter2 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10___default()(_vendors$filter, 1),
          match = _vendors$filter2[0];

      if (typeof match !== 'undefined') return match.logo_url;else return 'https://via.placeholder.com/300x300';
    }, _this.vendorDescription = function (vendorName) {
      var vendors = _this.props.vendors;

      var _vendors$filter3 = vendors.filter(function (v) {
        return _this.formatVendor(v.name) === _this.formatVendor(vendorName);
      }),
          _vendors$filter4 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10___default()(_vendors$filter3, 1),
          match = _vendors$filter4[0];

      if (typeof match !== 'undefined') return match.description;else return '';
    }, _this.renderImage = function (image) {
      var className = image.hasOwnProperty('className') ? image.className : '';
      var options = {
        image: image.link,
        altText: image.name,
        className: className,
        image_size: '300X300',
        sources: [{
          image: image.link,
          image_size: '700X700',
          size: '(min-width: 990px)'
        }, {
          image: image.link,
          image_size: '370X370',
          size: '(max-width: 450px)'
        }]
      };
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_common_components_global_components_ResponsiveShpfyPicture__WEBPACK_IMPORTED_MODULE_22__["default"], { options: options });
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(SingleProductView, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this3 = this;

      var _props = this.props,
          relatedProducts = _props.relatedProducts,
          client = _props.client;

      if (typeof prevProps.relatedProducts === 'undefined' && relatedProducts) {
        if (relatedProducts.length > 0) {
          babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.all(relatedProducts.map(function () {
            var _ref6 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(_ref7) {
              var handle = _ref7.related_handle;
              return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return client.query({ query: _common_graphql_SFY_sfyRelatedProductByHandle_graphql__WEBPACK_IMPORTED_MODULE_21___default.a, variables: { handle: handle } });

                    case 2:
                      return _context2.abrupt('return', _context2.sent);

                    case 3:
                    case 'end':
                      return _context2.stop();
                  }
                }
              }, _callee2, _this3);
            }));

            return function (_x2) {
              return _ref6.apply(this, arguments);
            };
          }())).then(function (res) {
            var relatedProducts = res.map(function (_ref8) {
              var relatedProduct = _ref8.data.sfy_shop.productByHandle;

              var images = relatedProduct.images,
                  rest = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(relatedProduct, ['images']);

              var image = images.edges[0].node.originalSrc;
              return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rest, { image: image });
            });
            return _this3.setState({ relatedProducts: relatedProducts });
          });
        }
      }
      return;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var showSpecsModal = this.state.showSpecsModal;
      var _props2 = this.props,
          product = _props2.product,
          vendors = _props2.vendors,
          relatedProducts = _props2.relatedProducts,
          productData = _props2.productData,
          loading = _props2.loading;
      // const renderMetaData = () => (
      //   <Helmet
      //     title={`${settings.app.name} - ${product.vendor} ${product.title}`}
      //     meta={[
      //       {
      //         name: 'description',
      //         content: `${product.vendor} ${product.title} - Product page`
      //       }
      //     ]}
      //   />
      // );

      var productInfoTabs = [{ name: 'About Product' }, { name: 'Dimensions' }, { name: 'Product Specs' }, { name: 'About Vendor' }];

      if (loading || !product || !vendors || !relatedProducts) {
        // console.log('LOADING::', loading);
        // console.log('PRODUCT:', product);
        // console.log('VENDORS', vendors);
        // console.log('Related Products', relatedProducts);
        // console.log('PRODUCTDATA::', productData);
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
          _common_components_global__WEBPACK_IMPORTED_MODULE_17__["PageLayout"],
          null,
          react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
            'div',
            null,
            'Loading...'
          )
        );
      } else {
        var renderMetaData = function renderMetaData() {
          return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_13___default.a, {
            title: _settings__WEBPACK_IMPORTED_MODULE_19__["default"].app.name + ' - ' + product.vendor + ' ' + product.title,
            meta: [{
              name: 'title',
              content: productData && productData.seo ? productData.seo.title : ''
            }, {
              name: 'description',
              content: productData && productData.seo ? productData.seo.description : ''
            }, {
              name: 'keywords',
              content: productData && productData.seo ? productData.seo.keywords : ''
            }]
          });
        };
        // eslint-disable-next-line
        var title = product.title,
            description = product.description,
            productType = product.productType,
            images = product.images,
            vendor = product.vendor,
            availableForSale = product.availableForSale,
            priceRange = product.priceRange,
            options = product.options;

        var dimensions = options[0].values[0];
        // eslint-disable-next-line
        var edges = product.variants.edges;
        // eslint-disable-next-line

        var _edges$0$node = edges[0].node,
            compareAtPrice = _edges$0$node.compareAtPrice,
            price = _edges$0$node.price,
            variantId = _edges$0$node.id;

        var vendorDescription = this.vendorDescription(vendor);
        // const specifications = [...selectedOptions, { name: 'weight', value: weight }, { nane: 'sku', value: sku }];
        var specExists = productData ? specTypes.some(function (key) {
          return key in productData && productData[key];
        }) : false;
        var featureExists = productData ? featureTypes.some(function (key) {
          return key in productData && productData[key];
        }) : false;
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
          _common_components_global__WEBPACK_IMPORTED_MODULE_17__["PageLayout"],
          null,
          renderMetaData(),
          react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_common_components_global__WEBPACK_IMPORTED_MODULE_17__["ScrollToTop"], null),
          react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
            'div',
            { className: 'single-product-view' },
            react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
              'div',
              { className: 'single-product-view__product-details' },
              'product' in this.props ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                'section',
                { className: 'product-details' },
                react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                  'div',
                  { className: 'product-details__images' },
                  images && 'edges' in images && images.edges.length > 0 ? images.edges.map(function (_ref9, i) {
                    var _ref9$node = _ref9.node,
                        originalSrc = _ref9$node.originalSrc,
                        id = _ref9$node.id,
                        altText = _ref9$node.altText;
                    return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                      'div',
                      { key: id, className: 'product-details__image' },
                      _this4.renderImage({ link: originalSrc, name: altText }),
                      compareAtPrice !== null && i == 0 ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_common_components_global__WEBPACK_IMPORTED_MODULE_17__["Badge"], { badgeType: 'sale' }) : null
                    );
                  }) : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                    'span',
                    null,
                    'No product image(s) to display'
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                  'div',
                  { className: 'product-details__info' },
                  react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement('img', { className: 'product-details__vendor-image', src: this.vendorLogo(vendor), alt: vendor }),
                  react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                    'h2',
                    { className: 'product-details__name' },
                    title
                  ),
                  react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                    'p',
                    { className: 'product-details__description' },
                    description
                  ),
                  react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                    'div',
                    { className: 'product-details__cart' },
                    compareAtPrice !== null ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                      'div',
                      { className: 'product-details__price-group' },
                      react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                        'span',
                        { className: 'product-details__price product-details__price--sale' },
                        '$' + this.getDisplayPrice(price)
                      ),
                      react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                        'span',
                        { className: 'product-details__price product-details__price--original' },
                        '$' + this.getDisplayPrice(compareAtPrice)
                      )
                    ) : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                      'span',
                      { className: 'product-details__price' },
                      '$' + this.getDisplayPrice(price)
                    ),
                    react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                      'div',
                      { className: 'product-details__button-group' },
                      react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Link"],
                        { to: '/locations', className: 'product-details__button' },
                        react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_15__["FaSearch"], { size: '2em', className: 'product-details__icon' }),
                        'Call For Best Price'
                      ),
                      react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                        'button',
                        {
                          onClick: function onClick() {
                            return _this4.addToCart(variantId);
                          },
                          className: 'product-details__button',
                          disabled: availableForSale === false ? true : false
                        },
                        react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_16__["FiShoppingCart"], { size: '2em', className: 'product-details__icon' }),
                        'Add to cart'
                      )
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                    'div',
                    { className: 'product-details__specs' },
                    react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                      'div',
                      { className: 'product-details__collapse-label', onClick: this.toggleModal },
                      'Product Information'
                    ),
                    react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                      _common_components_global__WEBPACK_IMPORTED_MODULE_17__["Modal"],
                      { showModal: showSpecsModal, toggleModal: this.toggleModal, transparent: true },
                      react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                        _common_components_global__WEBPACK_IMPORTED_MODULE_17__["TabContainer"],
                        { tabs: productInfoTabs },
                        react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                          _common_components_global__WEBPACK_IMPORTED_MODULE_17__["TabItem"],
                          null,
                          description !== '' ? description : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                            'span',
                            null,
                            'No product description to display.'
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                          _common_components_global__WEBPACK_IMPORTED_MODULE_17__["TabItem"],
                          null,
                          dimensions !== '' ? dimensions : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                            'span',
                            null,
                            'No product dimensions to display.'
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                          _common_components_global__WEBPACK_IMPORTED_MODULE_17__["TabItem"],
                          null,
                          react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                            'h5',
                            null,
                            ' Features '
                          ),
                          featureExists ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ProductDataList, { dataArr: prodFeatures, data: productData }) : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                            'span',
                            null,
                            'No features available at this time'
                          ),
                          react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                            'h5',
                            null,
                            ' Specs '
                          ),
                          specExists ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ProductDataList, { dataArr: prodSpecs, data: productData }) : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                            'span',
                            null,
                            'No specs available at this time'
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                          _common_components_global__WEBPACK_IMPORTED_MODULE_17__["TabItem"],
                          null,
                          vendorDescription !== '' ? vendorDescription : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                            'span',
                            null,
                            'No vendor story to share at this time.'
                          )
                        )
                      )
                    )
                  )
                )
              ) : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                'span',
                null,
                'No product to display'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
              'div',
              { className: 'single-product-view__similar-products' },
              this.state.relatedProducts.length > 0 ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_SimilarProducts__WEBPACK_IMPORTED_MODULE_18__["default"], { relatedProducts: this.state.relatedProducts }) : null
            )
          )
        );
      }
    }
  }]);

  return SingleProductView;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

SingleProductView.propTypes = {
  product: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object,
  relatedProducts: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.array,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,
  createInitialCheckout: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func,
  addCartItem: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func,
  toggleCart: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func,
  vendors: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.array,
  productData: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object,
  client: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object
};

ProductDataList.propTypes = {
  dataArr: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.array,
  data: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object
};

SingleProductView.defaultProps = {};

/* harmony default export */ __webpack_exports__["default"] = (SingleProductView);

/***/ })

};
//# sourceMappingURL=index.db38278be8006840832a.js.map
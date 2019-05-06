require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/home/components/PopularItemsCarousel.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/slicedToArray");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_components_global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/common/components/global/index.js");
/* harmony import */ var _styles_popular_items_carousel_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../client/src/modules/home/styles/popular-items-carousel.scss");
/* harmony import */ var _styles_popular_items_carousel_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_popular_items_carousel_scss__WEBPACK_IMPORTED_MODULE_10__);












var PopularItemsCarousel = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(PopularItemsCarousel, _React$Component);

  function PopularItemsCarousel() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, PopularItemsCarousel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_ref = PopularItemsCarousel.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(PopularItemsCarousel)).call.apply(_ref, [this].concat(args))), _this), _this.renderImage = function (image) {
      var className = image.hasOwnProperty('className') ? image.className : '';
      var options = {
        image: image.link,
        altText: image.name,
        className: className,
        image_size: '331X331',
        sources: [{
          image: image.link,
          image_size: '331X331',
          size: '(min-width: 990px)'
        }]
      };
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_common_components_global__WEBPACK_IMPORTED_MODULE_9__["ResponsiveShpfyPicture"], { options: options });
    }, _this.renderLogo = function (image) {
      var className = image.hasOwnProperty('className') ? image.className : '';
      var options = {
        image: image.link,
        altText: image.name,
        className: className,
        image_size: '331X331',
        sources: [{
          image: image.link,
          image_size: '331X331',
          sizes: '(min-width: 990px) 331px'
        }]
      };
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_common_components_global__WEBPACK_IMPORTED_MODULE_9__["ResponsivePicture"], { options: options });
    }, _this.firstImg = function (node) {
      return node.images.edges[0].node;
    }, _this.getPrice = function (node) {
      return node.variants.edges[0].node.price;
    }, _this.getCompareAtPrice = function (node) {
      return node.variants.edges[0].node.compareAtPrice;
    }, _this.getDisplayPrice = function (input) {
      return parseInt(input).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }, _this.vendorLogo = function (vendorName) {
      var formatVendor = function formatVendor(name) {
        return name.replace(/[\s/-]/g, '').toLowerCase();
      };
      var vendors = _this.props.vendors;

      var _vendors$filter = vendors.filter(function (v) {
        return formatVendor(v.name) === formatVendor(vendorName);
      }),
          _vendors$filter2 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_vendors$filter, 1),
          match = _vendors$filter2[0];

      return match.logo_url;
    }, _this.toUrlName = function (str) {
      return str.replace(/(\s\/\s|\/|\s|_)/gi, '-').toLowerCase();
    }, _this.productLocation = function (_ref2) {
      var handle = _ref2.handle,
          title = _ref2.title,
          productType = _ref2.productType,
          vendor = _ref2.vendor;

      var vendorName = vendor.split(' ').join('-').toLowerCase();
      // console.log('NODE :::', title);

      return {
        pathname: '/product/' + vendorName + '/' + title.split(' ').join('-').toLowerCase() + '/' + productType.toLowerCase(),
        state: handle,
        search: 'handle=' + handle
      };
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(PopularItemsCarousel, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var products = this.props.products;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
        'div',
        { className: 'popular-items-carousel' },
        products && products.edges.length > 0 ? products.edges.map(function (_ref3) {
          var node = _ref3.node;
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
            react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"],
            { key: node.id, to: _this2.productLocation(node), className: 'popular-items-carousel__item' },
            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
              'div',
              { className: 'popular-items-carousel__item-image' },
              _this2.renderImage({ link: _this2.firstImg(node).originalSrc, name: _this2.firstImg(node).altText }),
              _this2.getCompareAtPrice(node) !== null ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_common_components_global__WEBPACK_IMPORTED_MODULE_9__["Badge"], { badgeType: 'sale' }) : null
            ),
            _this2.renderLogo({
              link: _this2.vendorLogo(node.vendor),
              name: node.vendor,
              className: 'popular-items-carousel__vendor-image'
            }),
            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
              'h3',
              { className: 'popular-items-carousel__item-name' },
              node.title
            ),
            _this2.getCompareAtPrice(node) !== null ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
              'div',
              { className: 'popular-items-carousel__item-price-group' },
              react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                'div',
                { className: 'popular-items-carousel__item-price popular-items-carousel__item-price--original' },
                '$',
                _this2.getDisplayPrice(_this2.getCompareAtPrice(node))
              ),
              react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                'div',
                { className: 'popular-items-carousel__item-price popular-items-carousel__item-price--sale' },
                '$',
                _this2.getDisplayPrice(_this2.getPrice(node))
              )
            ) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
              'div',
              { className: 'popular-items-carousel__item-price' },
              '$',
              _this2.getDisplayPrice(_this2.getPrice(node))
            )
          );
        }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          'span',
          null,
          'No popular item(s) to display'
        )
      );
    }
  }]);

  return PopularItemsCarousel;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

PopularItemsCarousel.propTypes = {
  products: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  vendors: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array
};

/* harmony default export */ __webpack_exports__["default"] = (PopularItemsCarousel);

/***/ }),

/***/ "../client/src/modules/products/components/ShopGrid.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_components_global__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../client/src/modules/common/components/global/index.js");
/* harmony import */ var _common_components_global_components_ResponsiveShpfyPicture__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/common/components/global/components/ResponsiveShpfyPicture.jsx");
/* harmony import */ var _styles_shop_grid_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/products/styles/shop-grid.scss");
/* harmony import */ var _styles_shop_grid_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_shop_grid_scss__WEBPACK_IMPORTED_MODULE_12__);









// import classnames from 'classnames';


//import { toUrlName } from '../../common/components/global/components/PageBreadcrumbs';




var ShopGrid = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ShopGrid, _React$Component);

  function ShopGrid() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ShopGrid);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_ref = ShopGrid.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(ShopGrid)).call.apply(_ref, [this].concat(args))), _this), _this.getDisplayPrice = function (input) {
      return parseInt(input).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }, _this.formatVendor = function (name) {
      return name.replace(/[\s/-]/g, '').toLowerCase();
    }, _this.productLocation = function (vendor, handle, id, title, productType) {
      // console.log('ID', id, 'TITLE', title, 'PRODUCT TYPE', productType);
      // console.log('NODE::', node);
      var regex = /(\/|["])/gm;
      var subst = '';

      // The substituted value will be contained in the result variable
      var result = title.replace(regex, subst);
      var path = vendor.split(' ').join('-').toLowerCase();
      // console.log('HANDLE:::', `/product/${path}/${handle}`);

      return {
        pathname: '/product/' + path + '/' + result.split(' ').join('-').toLowerCase() + '/' + productType.split('/').join('-').toLowerCase(),
        state: handle,
        search: 'handle=' + handle
      };
    }, _this.applySort = function (prods) {
      var sortMethod = _this.props.sortMethod;

      var shopProducts = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(prods));
      switch (sortMethod) {
        case 'alpha':
          shopProducts = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.orderBy(shopProducts, ['node.title'], ['asc']);
          break;
        case 'alphaReverse':
          shopProducts = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.orderBy(shopProducts, ['node.title'], ['desc']);
          break;
        case 'price':
          shopProducts = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.orderBy(shopProducts, function (p) {
            return parseFloat(p.node.variants.edges[0].node.price);
          }, ['asc']);
          break;
        case 'priceReverse':
          shopProducts = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.orderBy(shopProducts, function (p) {
            return parseFloat(p.node.variants.edges[0].node.price);
          }, ['desc']);
          break;
        case 'featured':
          break;
      }
      return shopProducts;
    }, _this.applyFilter = function (prods) {
      var _this$props = _this.props,
          selectedCategory = _this$props.selectedCategory,
          selectedVendor = _this$props.selectedVendor,
          priceConfirmed = _this$props.priceConfirmed,
          u = _this$props.priceFilterUpper,
          l = _this$props.priceFilterLower;

      var shopProducts = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(prods));
      // First filter layer
      if (priceConfirmed && u && l) {
        shopProducts = shopProducts.filter(function (_ref2) {
          var edges = _ref2.node.variants.edges;

          var parsedPr = parseFloat(edges[0].node.price);
          return parseFloat(l) <= parsedPr && parsedPr <= parseFloat(u);
        });
      }
      // Second filter layer
      if (selectedCategory) {
        return shopProducts.filter(function (_ref3) {
          var edges = _ref3.node.collections.edges;

          var res = edges.some(function (_ref4) {
            var id = _ref4.node.id;
            return id === selectedCategory;
          });
          return res;
        });
      }
      if (selectedVendor) {
        return shopProducts.filter(function (p) {
          return _this.formatVendor(p.node.vendor) === _this.formatVendor(selectedVendor);
        });
      }
      return shopProducts;
    }, _this.firstImg = function (node) {
      return node.images.edges[0].node;
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
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_components_global_components_ResponsiveShpfyPicture__WEBPACK_IMPORTED_MODULE_11__["default"], { options: options });
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(ShopGrid, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          selectedCategory = _props.selectedCategory,
          selectedVendor = _props.selectedVendor,
          priceConfirmed = _props.priceConfirmed;

      if (priceConfirmed || selectedCategory || selectedVendor) {
        var filtered = this.applyFilter(this.props.products.edges);
        return this.props.setFilteredFinalIdx(filtered);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props2 = this.props,
          selectedCategory = _props2.selectedCategory,
          selectedVendor = _props2.selectedVendor,
          priceConfirmed = _props2.priceConfirmed;
      var prevCategory = prevProps.selectedCategory,
          prevVendor = prevProps.selectedVendor,
          prevPriceConfirmed = prevProps.priceConfirmed;

      var filtered = this.applyFilter(this.props.products.edges);
      if (selectedCategory !== prevCategory && selectedCategory) {
        return this.props.setFilteredFinalIdx(filtered);
      }
      if (selectedVendor !== prevVendor && selectedVendor) {
        return this.props.setFilteredFinalIdx(filtered);
      }
      if (priceConfirmed !== prevPriceConfirmed && priceConfirmed) {
        return this.props.setFilteredFinalIdx(filtered);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          products = _props3.products,
          displayLim = _props3.displayLim,
          startDisplayIdx = _props3.startDisplayIdx;

      var lowerLim = startDisplayIdx;
      var upperLim = startDisplayIdx + (displayLim - 1);
      // console.log('PRODUCTS::', products);
      // Apply any chosen sort and/or filter
      var sorted = this.applySort(products.edges);
      var sortedAndFiltered = this.applyFilter(sorted);

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        'div',
        { className: 'shop-grid' },
        sortedAndFiltered.length > 0 ? sortedAndFiltered.map(function (_ref5, i) {
          var _ref5$node = _ref5.node,
              id = _ref5$node.id,
              title = _ref5$node.title,
              vendor = _ref5$node.vendor,
              handle = _ref5$node.handle,
              productType = _ref5$node.productType,
              images = _ref5$node.images,
              node = _ref5.node;

          // console.log('LOWER::', lowerLim, 'UPPER', upperLim);
          var _node$variants$edges$ = node.variants.edges[0].node,
              compareAtPrice = _node$variants$edges$.compareAtPrice,
              price = _node$variants$edges$.price;

          if (i >= lowerLim && i <= upperLim) {
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"],
              {
                key: id,
                to: _this2.productLocation(vendor, handle, id, title, productType, node),
                className: 'shop-grid__item'
              },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                'div',
                { className: 'shop-grid__item-image' },
                'edges' in images && images.edges.length > 0 ?
                // <img src={this.firstImg(node).originalSrc} alt={this.firstImg(node).altText} />
                _this2.renderImage({ link: _this2.firstImg(node).originalSrc, name: _this2.firstImg(node).altText }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { src: 'https://via.placeholder.com/300x300', alt: 'placeholder' }),
                compareAtPrice !== null ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_components_global__WEBPACK_IMPORTED_MODULE_10__["Badge"], { badgeType: 'sale' }) : null
              ),
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                'h3',
                { className: 'shop-grid__item-name' },
                vendor + ' ' + title
              ),
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                'h4',
                { className: 'shop-grid__item-category' },
                productType
              ),
              compareAtPrice !== null ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                'div',
                { className: 'shop-grid__item-price-group' },
                react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                  'span',
                  { className: 'shop-grid__item-price shop-grid__item-price--sale' },
                  '$' + _this2.getDisplayPrice(price)
                ),
                react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                  'span',
                  { className: 'shop-grid__item-price shop-grid__item-price--original' },
                  '$' + _this2.getDisplayPrice(compareAtPrice)
                )
              ) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                'div',
                { className: 'shop-grid__item-price' },
                '$' + _this2.getDisplayPrice(price)
              )
            );
          } else {
            return null;
          }
        }) : null
      );
    }
  }]);

  return ShopGrid;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

ShopGrid.propTypes = {
  selectedPriceRange: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  selectedPromotion: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  selectedCategory: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  selectedVendor: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  sortMethod: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  products: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  categories: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array,
  promotions: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array,
  priceRanges: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array,
  category: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  displayLim: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  startDisplayIdx: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  setFilteredFinalIdx: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  priceConfirmed: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  priceFilterUpper: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  priceFilterLower: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
};

/* harmony default export */ __webpack_exports__["default"] = (ShopGrid);

/***/ }),

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

/***/ }),

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
    // console.log('PROPS::', props);
    var regex = /(?:=)([a-zA-Z0-9].*)/gm;
    var handle = props.location.state ? props.location.state : regex.exec(props.location.search)[1];
    // console.log('HANDLE:', handle);

    return { variables: { handle: handle } };
  },
  props: function props(_ref2) {
    var data = _ref2.data;

    // console.log('DATA::::', data);
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
    var regex = /(?:=)([a-zA-Z0-9].*)/gm;
    var handle = props.location.state ? props.location.state : regex.exec(props.location.search)[1];

    return { variables: { handle: handle } };
  },
  props: function props(_ref10) {
    var data = _ref10.data;
    var loading = data.loading,
        error = data.error,
        productData = data.productData;
    // console.log('product data::::', productData);

    if (error) throw new Error('Error in Product Data Query: ' + error);
    return { loading: loading, productData: productData };
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["graphql"])(_common_graphql_RelatedProductsQuery_graphql__WEBPACK_IMPORTED_MODULE_16___default.a, {
  options: function options(props) {
    var regex = /(?:=)([a-zA-Z0-9].*)/gm;
    // console.log('RELATED PRODUCTS QUERY PROPS::', props);
    var product_handle = props.location.state ? props.location.state : regex.exec(props.location.search)[1];

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
//# sourceMappingURL=index.b791dad5b94d0f43a9f4.js.map
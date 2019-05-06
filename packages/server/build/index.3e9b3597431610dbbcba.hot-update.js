require("source-map-support").install();
exports.id = "index";
exports.modules = {

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
        search: handle
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

/***/ })

};
//# sourceMappingURL=index.7ea505a0369e0939163c.js.map
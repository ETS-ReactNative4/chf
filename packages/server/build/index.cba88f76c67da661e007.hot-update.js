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

/***/ })

};
//# sourceMappingURL=index.06b9adc627d13308b432.js.map
require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/products/components/SimilarProducts.jsx":
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_components_global_components_ResponsiveShpfyPicture__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../client/src/modules/common/components/global/components/ResponsiveShpfyPicture.jsx");
/* harmony import */ var _styles_similar_products_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/products/styles/similar-products.scss");
/* harmony import */ var _styles_similar_products_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_similar_products_scss__WEBPACK_IMPORTED_MODULE_9__);







// import classnames from 'classnames';

//import removeVendorName from '../utils/helpers';
//import { toUrlName } from '../../common/components/global/components/PageBreadcrumbs';




var SimilarProducts = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SimilarProducts, _React$Component);

  function SimilarProducts() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SimilarProducts);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_ref = SimilarProducts.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(SimilarProducts)).call.apply(_ref, [this].concat(args))), _this), _this.location = function (handle) {
      return { pathname: '/product/' + handle };
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
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_common_components_global_components_ResponsiveShpfyPicture__WEBPACK_IMPORTED_MODULE_8__["default"], { options: options });
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
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SimilarProducts, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var relatedProducts = this.props.relatedProducts;

      if (!relatedProducts || Array.isArray(relatedProducts) && relatedProducts.length === 0) return null;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'div',
        { className: 'similar-products' },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'h2',
          { className: 'similar-products__header' },
          'Similar items related to this product.'
        ),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'div',
          { className: 'similar-products__description' },
          'Based on your selection, here are similar items you may be interested in.'
        ),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'div',
          { className: 'similar-products__item-container' },
          Array.isArray(relatedProducts) && relatedProducts.length > 0 ? relatedProducts.map(function (_ref2) {
            var id = _ref2.id,
                handle = _ref2.handle,
                image = _ref2.image,
                vendor = _ref2.vendor,
                title = _ref2.title,
                productType = _ref2.productType;
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"],
              {
                key: id,
                to: _this2.productLocation(vendor, handle, id, title, productType),
                className: 'similar-products__item'
              },
              _this2.renderImage({ link: image, name: title }),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'div',
                { className: 'similar-products__item-name' },
                vendor + ' ' + title
              )
            );
          }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            'span',
            null,
            'No similar product(s) to display'
          )
        )
      );
    }
  }]);

  return SimilarProducts;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

SimilarProducts.propTypes = {
  relatedProducts: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array
};

/* harmony default export */ __webpack_exports__["default"] = (SimilarProducts);

/***/ })

};
//# sourceMappingURL=index.a9bd00387094dad4c3bc.js.map
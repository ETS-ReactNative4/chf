require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/admin/components/SiteMap/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteMapGenerator; });
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_sitemap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("react-router-sitemap");
/* harmony import */ var react_router_sitemap__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_sitemap__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _graphql_SiteMapProds_graphql__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/admin/graphql/SiteMapProds.graphql");
/* harmony import */ var _graphql_SiteMapProds_graphql__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_graphql_SiteMapProds_graphql__WEBPACK_IMPORTED_MODULE_11__);














// const paths = ['/products/:category', '/products/brands/:vendor_name', '/product/:vendor_name/:product_name/:category']

var SiteMapGenerator = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(SiteMapGenerator, _Component);

  function SiteMapGenerator(props) {
    var _this2 = this;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, SiteMapGenerator);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, (SiteMapGenerator.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default()(SiteMapGenerator)).call(this, props));

    _this.generateSiteMap = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var products;
      return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.getAllProducts();

            case 2:
              products = _context.sent;

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }));
    _this.getAllProducts = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var currEndCursor, _ref3, pageInfo, edges;

      return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              currEndCursor = _this.props.products.currEndCursor;
              // console.log('THE END CURSOR::', currEndCursor);

              _context2.next = 3;
              return _this.props.loadMore(250, currEndCursor);

            case 3:
              _ref3 = _context2.sent;
              pageInfo = _ref3.data.admin_products.pageInfo;

              if (!pageInfo.hasNextPage) {
                _context2.next = 9;
                break;
              }

              return _context2.abrupt('return', _this.getAllProducts());

            case 9:
              // console.log('THE PROPS;:::', this.props.admin_products);
              edges = _this.props.admin_products.edges;
              // console.log('EDGES::', edges);

              _this.generateProductsConfig(edges);

            case 11:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }));

    _this.generateProductsConfig = function () {
      var _ref4 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(products) {
        var path, pathFormater, paramConfig, config, paths;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                path = ['/product/:vendor_name/:product_name/:category'];
                // console.log('PRODUCTS::', products);

                pathFormater = function pathFormater(string) {
                  return string.split(' ').join('-').toLowerCase();
                };

                paramConfig = products.reduce(function (accum, _ref5) {
                  var node = _ref5.node;

                  // console.log('CURR::', node);
                  accum = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(accum), [{ vendor_name: pathFormater(node.vendor), product_name: node.handle, category: pathFormater(node.productType) }]);
                  // console.log('ACCUM LENGTH', accum, accum.length);
                  return accum;
                }, []);
                config = {
                  '/product/:vendor_name/:product_name/:category': paramConfig
                };
                paths = Object(react_router_sitemap__WEBPACK_IMPORTED_MODULE_10__["paramsApplier"])(path, config);

                console.log('PATHS::', paths);

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      }));

      return function (_x) {
        return _ref4.apply(this, arguments);
      };
    }();

    _this.state = {};
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(SiteMapGenerator, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('THIS SITE MAP PROPS::', this.props);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      console.log('UPDATE PROPS::', this.props);
      console.log('UPDATE PREV PROPS:', prevProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          productsLoading = _props.productsLoading,
          admin_products = _props.admin_products;

      console.log('ADMIN PRODUCTS::', admin_products);

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        'section',
        null,
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          'div',
          null,
          'SiteMap'
        ),
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          'button',
          { onClick: this.generateSiteMap },
          'Create Site Map'
        )
      );
    }
  }]);

  return SiteMapGenerator;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



SiteMapGenerator.propTypes = {
  createSiteMap: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  admin_products: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  productsLoading: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool
};

/***/ })

};
//# sourceMappingURL=index.213cc1a0ff8909dbd828.js.map
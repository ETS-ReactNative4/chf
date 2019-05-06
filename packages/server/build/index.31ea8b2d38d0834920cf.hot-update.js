require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/products/components/VendorView.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/defineProperty");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_components_global__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/common/components/global/index.js");
/* harmony import */ var _common_components_global_components_PageBreadcrumbs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/common/components/global/components/PageBreadcrumbs.jsx");
/* harmony import */ var _ShopBreadcrumbs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/products/components/ShopBreadcrumbs.jsx");
/* harmony import */ var _ShopGrid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../client/src/modules/products/components/ShopGrid.jsx");
/* harmony import */ var _ShopGridSort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../client/src/modules/products/components/ShopGridSort.jsx");
/* harmony import */ var _common_components_global_components_Loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../client/src/modules/common/components/global/components/Loader.jsx");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../../settings.js");
/* harmony import */ var _styles_category_view_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../client/src/modules/products/styles/category-view.scss");
/* harmony import */ var _styles_category_view_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_styles_category_view_scss__WEBPACK_IMPORTED_MODULE_18__);
















// import ShopGridPages from './ShopGridPages';





var capFirstLtr = function capFirstLtr(str) {
  return str[0].toUpperCase() + str.slice(1);
};

var VendorView = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(VendorView, _React$Component);

  function VendorView(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, VendorView);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (VendorView.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(VendorView)).call(this, props));

    _this.handleInput = function (e) {
      return _this.setState(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, e.target.name, e.target.value));
    };

    _this.scrollToGridTop = function () {
      return window.scrollTo({
        top: 200,
        left: 0,
        behavior: 'smooth'
      });
    };

    _this.applyPriceFilter = function (e) {
      e.preventDefault();
      _this.setState({ priceErr: null });
      var _this$state = _this.state,
          u = _this$state.priceFilterUpper,
          l = _this$state.priceFilterLower;

      // Validate limits

      if (!u || !l) return _this.setState({ priceErr: 'Please enter an upper and lower price limit.' });
      var isPrice = new RegExp(/^\d+(\.\d{2})?$/, 'i');
      if ([u, l].map(function (lim) {
        return isPrice.test(lim);
      }).some(function (res) {
        return res == false;
      })) {
        return _this.setState({ priceErr: 'Please enter valid prices.' });
      }
      // If validated, apply filter
      _this.setState({ priceConfirmed: true });
    };

    _this.clearPriceFilter = function (e) {
      e.preventDefault();
      _this.setState({ priceConfirmed: false, priceFilterLower: '', priceFilterUpper: '' });
    };

    _this.getIdxsAndLims = function () {
      var edges = _this.props.sfy_shop.products.edges;
      var _this$state2 = _this.state,
          startDisplayIdx = _this$state2.startDisplayIdx,
          displayLim = _this$state2.displayLim,
          currPg = _this$state2.currPg;

      var edgesFinalIdx = edges.length - 1;
      var finalDisplayIdx = startDisplayIdx + displayLim - 1;
      return { startDisplayIdx: startDisplayIdx, displayLim: displayLim, currPg: currPg, edgesFinalIdx: edgesFinalIdx, finalDisplayIdx: finalDisplayIdx };
    };

    _this.setFilteredFinalIdx = function (filteredProds) {
      _this.setState({ filteredFinalIdx: filteredProds.length - 1 });
    };

    _this.isPaginationDisabled = function (type) {
      var hasNextPage = _this.props.hasNextPage;
      var _this$state3 = _this.state,
          selectedVendor = _this$state3.selectedVendor,
          selectedCategory = _this$state3.selectedCategory,
          filteredFinalIdx = _this$state3.filteredFinalIdx;

      var _this$getIdxsAndLims = _this.getIdxsAndLims(),
          startDisplayIdx = _this$getIdxsAndLims.startDisplayIdx,
          finalDisplayIdx = _this$getIdxsAndLims.finalDisplayIdx,
          edgesFinalIdx = _this$getIdxsAndLims.edgesFinalIdx;

      if (type === 'forward') {
        if (selectedVendor || selectedCategory) {
          if (finalDisplayIdx < filteredFinalIdx) return false;else return true;
        }
        if (finalDisplayIdx < edgesFinalIdx) return false;else {
          if (hasNextPage) return false;else return true;
        }
      }
      if (type === 'back') {
        if (startDisplayIdx > 0) return false;else return true;
      }
    };

    _this.handleLimChange = function (e) {
      var newLim = parseInt(e.target.value);

      var _this$getIdxsAndLims2 = _this.getIdxsAndLims(),
          oldLim = _this$getIdxsAndLims2.displayLim,
          edgesFinalIdx = _this$getIdxsAndLims2.edgesFinalIdx;

      var nextFinalDisplayIdx = newLim - 1;
      if (newLim > oldLim) {
        if (nextFinalDisplayIdx > edgesFinalIdx) {
          var first = nextFinalDisplayIdx - edgesFinalIdx;
          _this.props.loadMore(first);
        }
      }
      return _this.setState({ startDisplayIdx: 0, displayLim: newLim, currPg: 1 });
    };

    _this.handlePageForward = function () {
      var _this$getIdxsAndLims3 = _this.getIdxsAndLims(),
          startDisplayIdx = _this$getIdxsAndLims3.startDisplayIdx,
          displayLim = _this$getIdxsAndLims3.displayLim,
          edgesFinalIdx = _this$getIdxsAndLims3.edgesFinalIdx,
          currPg = _this$getIdxsAndLims3.currPg;

      var nextStartDisplayIdx = startDisplayIdx + displayLim;
      var nextFinalDisplayIdx = nextStartDisplayIdx + displayLim - 1;
      if (nextFinalDisplayIdx > edgesFinalIdx) {
        var first = nextFinalDisplayIdx - edgesFinalIdx;
        _this.props.loadMore(first);
      }
      _this.setState({ startDisplayIdx: nextStartDisplayIdx, currPg: currPg + 1 }, function () {
        return _this.scrollToGridTop();
      });
    };

    _this.handlePageBack = function () {
      var _this$getIdxsAndLims4 = _this.getIdxsAndLims(),
          startDisplayIdx = _this$getIdxsAndLims4.startDisplayIdx,
          displayLim = _this$getIdxsAndLims4.displayLim,
          currPg = _this$getIdxsAndLims4.currPg;

      var backLog = startDisplayIdx - displayLim;
      if (backLog >= 0) _this.setState({ startDisplayIdx: backLog, currPg: currPg - 1 }, function () {
        return _this.scrollToGridTop();
      });else _this.setState({ startDisplayIdx: 0, currPg: 1 }, function () {
        return _this.scrollToGridTop();
      });
    };

    _this.selectSortMethod = function (sortMethod) {
      return _this.setState({ sortMethod: sortMethod });
    };

    _this.selectPriceRange = function (priceRangeId) {
      var selectedPriceRange = _this.state.selectedPriceRange;

      if (selectedPriceRange && selectedPriceRange === priceRangeId) {
        _this.setState({ selectedPriceRange: null });
      } else {
        _this.setState({ selectedPriceRange: priceRangeId });
      }
    };

    _this.selectPromotion = function (promotionId) {
      var selectedPromotion = _this.state.selectedPromotion;

      if (selectedPromotion && selectedPromotion === promotionId) {
        _this.setState({ selectedPromotion: null });
      } else {
        _this.setState({ selectedPromotion: promotionId });
      }
    };

    _this.selectCategory = function (categoryId) {
      var selectedCategory = _this.state.selectedCategory;

      if (selectedCategory && selectedCategory === categoryId) {
        _this.setState({ selectedCategory: null, startDisplayIdx: 0, currPg: 1 });
      } else {
        if (_this.props.hasNextPage) _this.props.loadMore(100);
        _this.setState({ selectedCategory: categoryId, startDisplayIdx: 0, currPg: 1 });
      }
    };

    _this.selectVendor = function (vendorId) {
      var selectedVendor = _this.state.selectedVendor;

      if (selectedVendor && selectedVendor === vendorId) {
        _this.setState({ selectedVendor: null, startDisplayIdx: 0, currPg: 1 });
      } else {
        if (_this.props.hasNextPage) _this.props.loadMore(100);
        _this.setState({ selectedVendor: vendorId, startDisplayIdx: 0, currPg: 1 });
      }
    };

    _this.parseCategories = function () {
      var categories = _this.props.sfy_shop_collections.collections.edges;

      return categories.map(function (_ref) {
        var _ref$node = _ref.node,
            id = _ref$node.id,
            name = _ref$node.title;
        return { id: id, name: name, url_name: Object(_common_components_global_components_PageBreadcrumbs__WEBPACK_IMPORTED_MODULE_12__["toUrlName"])(name) };
      });
    };

    var location = props.location;

    var filters = {};
    if (typeof location !== 'undefined' && 'state' in location && typeof location.state !== 'undefined' && 'filters' in location.state && typeof location.state.filters !== 'undefined') {
      filters = location.state.filters;
    }
    _this.state = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      priceFilterLower: '',
      priceFilterUpper: '',
      priceConfirmed: false,
      priceErr: null,
      selectedPriceRange: null,
      selectedPromotion: null,
      selectedCategory: null,
      selectedVendor: null,
      sortMethod: 'featured',
      displayLim: 12,
      startDisplayIdx: 0,
      currPg: 1,
      filteredFinalIdx: null
    }, filters);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(VendorView, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          selectedPriceRange = _state.selectedPriceRange,
          selectedPromotion = _state.selectedPromotion,
          selectedCategory = _state.selectedCategory;
      var _props = this.props,
          promotions = _props.promotions,
          priceRanges = _props.priceRanges,
          vendor = _props.vendor,
          bannerImage = _props.bannerImage,
          loading = _props.loading,
          sfy_shop = _props.sfy_shop,
          sfy_shop_collections = _props.sfy_shop_collections;
      var _state2 = this.state,
          priceConfirmed = _state2.priceConfirmed,
          priceFilterUpper = _state2.priceFilterUpper,
          priceFilterLower = _state2.priceFilterLower;

      var filtersToPass = { priceConfirmed: priceConfirmed, priceFilterUpper: priceFilterUpper, priceFilterLower: priceFilterLower };
      console.log("BRAND PROPS", this.props);
      var renderMetaData = function renderMetaData(vendor) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_9___default.a, {
          title: vendor.title,
          meta: [{
            name: 'description',
            content: '' + vendor.description
          }, {
            name: 'keywords',
            content: '' + vendor.keywords
          }]
        });
      };
      if (loading || !sfy_shop || !sfy_shop_collections || !vendor) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _common_components_global__WEBPACK_IMPORTED_MODULE_11__["PageLayout"],
          null,
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_components_global_components_Loader__WEBPACK_IMPORTED_MODULE_16__["default"], null)
        );
      } else {
        var products = sfy_shop.products;
        var categories = sfy_shop_collections.collections;

        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _common_components_global__WEBPACK_IMPORTED_MODULE_11__["PageLayout"],
          null,
          renderMetaData(vendor),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_components_global__WEBPACK_IMPORTED_MODULE_11__["ScrollToTop"], null),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { src: bannerImage.link, alt: bannerImage.name }),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_components_global__WEBPACK_IMPORTED_MODULE_11__["PageBreadcrumbs"], this.props),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            'div',
            { className: 'category-view' },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'div',
              { className: 'category-view__sidebar' },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                'div',
                { className: 'category-view__collapse-label' },
                'FILTER BY'
              ),
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                'div',
                { className: 'category-view__collapse-menu' },
                categories && categories.edges.length > 0 ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                  'div',
                  { className: 'category-view__collapse' },
                  react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                    _common_components_global__WEBPACK_IMPORTED_MODULE_11__["CollapseMenu"],
                    { label: 'CATEGORY' },
                    categories.edges.map(function (_ref2) {
                      var _ref2$node = _ref2.node,
                          id = _ref2$node.id,
                          title = _ref2$node.title;
                      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                        'div',
                        {
                          key: id,
                          className: classnames__WEBPACK_IMPORTED_MODULE_10___default()('category-view__collapse-item', {
                            'category-view__collapse-item--active': selectedCategory === id
                          }),
                          onClick: function onClick() {
                            return _this2.selectCategory(id);
                          }
                        },
                        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                          'span',
                          { className: 'category-view__collapse-name' },
                          title
                        )
                      );
                    })
                  )
                ) : null
              ),
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                'div',
                { className: 'category-view__collapse-menu' },
                react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                  'div',
                  { className: 'category-view__collapse' },
                  react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                    _common_components_global__WEBPACK_IMPORTED_MODULE_11__["CollapseMenu"],
                    { label: 'PRICE' },
                    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                      'form',
                      { className: 'category-view__collapse-item' },
                      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                        'div',
                        null,
                        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                          'label',
                          null,
                          'Lower Limit'
                        ),
                        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                          'div',
                          null,
                          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                            'span',
                            null,
                            '$'
                          ),
                          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('input', {
                            style: { width: '60%' },
                            type: 'text',
                            name: 'priceFilterLower',
                            value: this.state.priceFilterLower,
                            placeholder: '0',
                            onChange: function onChange(e) {
                              return _this2.handleInput(e);
                            }
                          })
                        )
                      ),
                      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                        'div',
                        null,
                        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                          'label',
                          null,
                          'Upper Limit'
                        ),
                        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                          'div',
                          null,
                          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                            'span',
                            null,
                            '$'
                          ),
                          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('input', {
                            style: { width: '60%' },
                            type: 'text',
                            name: 'priceFilterUpper',
                            value: this.state.priceFilterUpper,
                            placeholder: '0',
                            onChange: function onChange(e) {
                              return _this2.handleInput(e);
                            }
                          })
                        )
                      ),
                      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                        'button',
                        { disabled: this.state.priceConfirmed, onClick: function onClick(e) {
                            return _this2.applyPriceFilter(e);
                          } },
                        'Confirm'
                      ),
                      this.state.priceConfirmed ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                        'button',
                        { onClick: function onClick(e) {
                            return _this2.clearPriceFilter(e);
                          } },
                        ' Clear '
                      ) : null,
                      this.state.priceErr ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                        'div',
                        null,
                        this.state.priceErr
                      ) : null
                    )
                  )
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                'div',
                { className: 'category-view__collapse-menu' },
                'promotions' in this.props && promotions.length > 0 ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                  'div',
                  { className: 'category-view__collapse' },
                  react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                    _common_components_global__WEBPACK_IMPORTED_MODULE_11__["CollapseMenu"],
                    { label: 'PROMOTIONS' },
                    promotions.map(function (promotion) {
                      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                        'div',
                        {
                          key: promotion.id,
                          className: classnames__WEBPACK_IMPORTED_MODULE_10___default()('category-view__collapse-item', {
                            'category-view__collapse-item--active': selectedPromotion === promotion.id
                          }),
                          onClick: function onClick() {
                            return _this2.selectPromotion(promotion.id);
                          }
                        },
                        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                          'span',
                          { className: 'category-view__collapse-name' },
                          promotion.name
                        )
                      );
                    })
                  )
                ) : null
              ),
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                'div',
                { className: 'category-view__collapse-menu' },
                'priceRanges' in this.props && priceRanges.length > 0 ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                  'div',
                  { className: 'category-view__collapse' },
                  react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                    _common_components_global__WEBPACK_IMPORTED_MODULE_11__["CollapseMenu"],
                    { label: 'PRICE RANGE' },
                    priceRanges.map(function (priceRange) {
                      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                        'div',
                        {
                          key: priceRange.id,
                          className: classnames__WEBPACK_IMPORTED_MODULE_10___default()('category-view__collapse-item', {
                            'category-view__collapse-item--active': selectedPriceRange === priceRange.id
                          }),
                          onClick: function onClick() {
                            return _this2.selectPriceRange(priceRange.id);
                          }
                        },
                        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                          'span',
                          { className: 'category-view__collapse-name' },
                          priceRange.name
                        )
                      );
                    })
                  )
                ) : null
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'div',
              { className: 'category-view__main' },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                'h1',
                { className: 'header header--upper header--primary category-view__main-header' },
                products.edges.length > 0 ? products.edges[0].node.vendor + ' Equipment' : this.props.match.params.vendor_name.split('-').map(function (item) {
                  return capFirstLtr(item);
                }).join(' ')
              ),
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ShopBreadcrumbs__WEBPACK_IMPORTED_MODULE_13__["default"], {
                categories: vendor.categories,
                'for': 'category',
                filtersToPass: filtersToPass,
                vendorUrlName: this.props.match.params.vendor_name
              }),
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ShopGridSort__WEBPACK_IMPORTED_MODULE_15__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
                selectSortMethod: this.selectSortMethod,
                handleLimChange: this.handleLimChange
              }, this.state)),
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ShopGrid__WEBPACK_IMPORTED_MODULE_14__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.state, this.props, {
                products: products,
                setFilteredFinalIdx: this.setFilteredFinalIdx
              }))
            )
          )
        );
      }
    }
  }]);

  return VendorView;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

VendorView.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  promotions: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array,
  priceRanges: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array,
  vendor: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  heroImage: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  bannerImage: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  vendors: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  sfy_shop: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  hasNextPage: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  loadMore: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  match: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  sfy_shop_collections: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object
};
VendorView.defaultProps = {
  heroImage: {
    name: 'Shop',
    link: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/shop_hero.png'
  },
  bannerImage: {
    name: 'Low Price Guaranteed',
    link: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/shop_banner.png'
  }
};

/* harmony default export */ __webpack_exports__["default"] = (VendorView);

/***/ }),

/***/ "../client/src/modules/user/index.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../client/src/i18n/index.ts");
/* harmony import */ var _access__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../client/src/modules/user/access/index.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../client/src/modules/user/resolvers/index.jsx");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../client/src/modules/user/locales/index.js");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_locales__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_common_components_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/common/components/web/index.jsx");
/* harmony import */ var _containers_Register__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../client/src/modules/user/containers/Register.jsx");
/* harmony import */ var _containers_Login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/user/containers/Login.jsx");
/* harmony import */ var _containers_Auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/user/containers/Auth.web.jsx");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/connector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withUser", function() { return _containers_Auth__WEBPACK_IMPORTED_MODULE_12__["withUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasRole", function() { return _containers_Auth__WEBPACK_IMPORTED_MODULE_12__["hasRole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withLoadedUser", function() { return _containers_Auth__WEBPACK_IMPORTED_MODULE_12__["withLoadedUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IfLoggedIn", function() { return _containers_Auth__WEBPACK_IMPORTED_MODULE_12__["IfLoggedIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IfNotLoggedIn", function() { return _containers_Auth__WEBPACK_IMPORTED_MODULE_12__["IfNotLoggedIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withLogout", function() { return _containers_Auth__WEBPACK_IMPORTED_MODULE_12__["withLogout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthRoute", function() { return _containers_Auth__WEBPACK_IMPORTED_MODULE_12__["AuthRoute"]; });




var _this = undefined;









// import ProfileView from './components/ProfileView';

// import Users from './containers/Users';
// import UserEdit from './containers/UserEdit';
// import UserAdd from './containers/UserAdd';


// import ForgotPassword from './containers/ForgotPassword';
// import ResetPassword from './containers/ResetPassword';





// const ProfileName = withLoadedUser(
//   ({ currentUser }) => (currentUser ? currentUser.fullName || currentUser.username : null)
// );

var LogoutLink = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Object(_containers_Auth__WEBPACK_IMPORTED_MODULE_12__["withLogout"])(function (_ref) {
  var logout = _ref.logout,
      history = _ref.history;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
    'a',
    {
      href: 'javascript:void(0)',
      onClick: function onClick(e) {
        e.preventDefault();
        babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return logout();

                case 2:
                  history.push('/');

                case 3:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }))();
      },
      className: 'nav-link'
    },
    'Logout'
  );
}));



var NavLinkUsersWithI18n = Object(_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('user')(function (_ref3) {
  var t = _ref3.t;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
    react_router_dom__WEBPACK_IMPORTED_MODULE_4__["NavLink"],
    { to: '/users', className: 'nav-link', activeClassName: 'active' },
    t('navLink.users')
  );
});
var NavLinkLoginWithI18n = Object(_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('user')(function (_ref4) {
  var t = _ref4.t;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
    react_router_dom__WEBPACK_IMPORTED_MODULE_4__["NavLink"],
    { to: '/login', className: 'nav-link', activeClassName: 'active' },
    t('navLink.sign')
  );
});

/* harmony default export */ __webpack_exports__["default"] = (new _connector__WEBPACK_IMPORTED_MODULE_13__["default"](_access__WEBPACK_IMPORTED_MODULE_6__["default"], {
  route: [
  // <AuthRoute exact path="/profile" role={['user', 'admin']} redirect="/login" component={ProfileView} />,
  // <AuthRoute exact path="/users" redirect="/profile" role="admin" component={Users} />,
  // <AuthRoute exact path="/users/new" role={['admin']} component={UserAdd} />,
  // <AuthRoute path="/users/:id" redirect="/profile" role={['user', 'admin']} component={UserEdit} />,
  react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_Auth__WEBPACK_IMPORTED_MODULE_12__["AuthRoute"], { exact: true, path: '/register', redirectOnLoggedIn: true, redirect: '/admin/dashboard', component: _containers_Register__WEBPACK_IMPORTED_MODULE_10__["default"] }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_Auth__WEBPACK_IMPORTED_MODULE_12__["AuthRoute"], {
    exact: true,
    path: '/admin/login',
    redirectOnLoggedIn: true,
    redirect: '/admin/dashboard',
    component: Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(function (_ref5) {
      var history = _ref5.history;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_Login__WEBPACK_IMPORTED_MODULE_11__["default"], { onLogin: function onLogin() {
          return history.push('/admin/dashboard');
        } });
    })
  })],
  // navItem: [
  //   <IfLoggedIn key="/users" role="admin">
  //     <MenuItem>
  //       <NavLinkUsersWithI18n />
  //     </MenuItem>
  //   </IfLoggedIn>
  // ],
  // navItemRight: [
  //   // <IfLoggedIn key="/profile">
  //   //   <MenuItem>
  //   //     <NavLink to="/profile" className="nav-link" activeClassName="active">
  //   //       <ProfileName />
  //   //     </NavLink>
  //   //   </MenuItem>
  //   // </IfLoggedIn>,
  //   <IfLoggedIn key="/logout">
  //     <MenuItem>
  //       <LogoutLink />
  //     </MenuItem>
  //   </IfLoggedIn>,
  //   <IfNotLoggedIn key="/login">
  //     <MenuItem>
  //       <NavLinkLoginWithI18n />
  //     </MenuItem>
  //   </IfNotLoggedIn>
  // ],
  resolver: _resolvers__WEBPACK_IMPORTED_MODULE_7__["default"],
  localization: { ns: 'user', resources: _locales__WEBPACK_IMPORTED_MODULE_8___default.a },
  // eslint-disable-next-line react/display-name
  rootComponentFactory: function rootComponentFactory(req) {
    return req ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_cookie__WEBPACK_IMPORTED_MODULE_3__["CookiesProvider"], { cookies: req.universalCookies }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_cookie__WEBPACK_IMPORTED_MODULE_3__["CookiesProvider"], null);
  }
}));

/***/ })

};
//# sourceMappingURL=index.ff149ba3528130737e88.js.map
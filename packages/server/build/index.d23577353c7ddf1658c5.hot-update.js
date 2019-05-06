require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/common/schema/filteredProductsQuery.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/core-js/json/stringify");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/helpers/defineProperty");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _graphql_SFY_sfyProductsQuery_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../client/src/modules/common/graphql/SFY/sfyProductsQuery.graphql");
/* harmony import */ var _graphql_SFY_sfyProductsQuery_graphql__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_graphql_SFY_sfyProductsQuery_graphql__WEBPACK_IMPORTED_MODULE_5__);







var capFirstLtr = function capFirstLtr(str) {
  return str[0].toUpperCase() + str.slice(1);
};

var searchFormat = function searchFormat(str, joiner) {
  return str.split('-').map(function (str) {
    return capFirstLtr(str);
  }).join(joiner);
};

var vendorFilter = function vendorFilter(params) {
  if ('vendor_name' in params) {
    var vendorFormatted = searchFormat(params.vendor_name, ' ');
    return 'vendor:' + vendorFormatted;
  } else {
    return undefined;
  }
};

var searchFilter = function searchFilter(queryStr, queryStrParam) {
  var filterValue = '';
  if (queryStr && queryStr.includes(queryStrParam)) {
    filterValue = queryStr.slice(queryStr.indexOf('=') + 1);
  }
  // console.log('fitlerValue', filterValue);
  return filterValue.replace(/(-|%20)+/gi, ' ');
};

var filteredProductsQuery = function filteredProductsQuery() {
  var queryString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _graphql_SFY_sfyProductsQuery_graphql__WEBPACK_IMPORTED_MODULE_5___default.a;
  return Object(react_apollo__WEBPACK_IMPORTED_MODULE_4__["graphql"])(queryString, {
    options: function options(props) {
      var _variables;

      var filterVal = '';
      var pathname = props.location.pathname;

      if (pathname.includes('/brands')) {
        var params = props.match.params;

        filterVal = vendorFilter(params);
      } else if (pathname === '/search') {
        var search = props.location.search;

        filterVal = searchFilter(search, 'q');
      }
      return { variables: (_variables = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_variables, 'first', 12), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_variables, 'query', filterVal), _variables) };
    },
    props: function props(_ref) {
      var data = _ref.data;
      var loading = data.loading,
          error = data.error,
          sfy_shop = data.sfy_shop,
          fetchMore = data.fetchMore,
          variables = data.variables;
      var searchPhrase = variables.query;

      var currEndCursor = void 0,
          hasNextPage = void 0,
          hasPreviousPage = void 0;
      if (!loading && sfy_shop) {
        var products = sfy_shop.products;

        if (products.edges.length > 0) currEndCursor = products.edges[products.edges.length - 1].cursor;
        hasNextPage = products.pageInfo.hasNextPage;
        hasPreviousPage = products.pageInfo.hasPreviousPage;
      }
      var loadMore = function loadMore() {
        var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
        var after = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currEndCursor;

        var updatedVars = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, variables, { after: after, first: first });
        return fetchMore({
          variables: updatedVars,
          updateQuery: function updateQuery(prevResult, _ref2) {
            var fetchMoreResult = _ref2.fetchMoreResult;

            if (fetchMoreResult.sfy_shop.products.edges.length === 0) return prevResult;
            var updatedResult = JSON.parse(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(prevResult));
            updatedResult.sfy_shop.products.edges = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(prevResult.sfy_shop.products.edges), babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(fetchMoreResult.sfy_shop.products.edges));
            updatedResult.sfy_shop.products.pageInfo = fetchMoreResult.sfy_shop.products.pageInfo;
            return updatedResult;
          }
        });
      };
      //
      if (error) throw new Error('Error in Products Query: ' + error);
      return { loading: loading, sfy_shop: sfy_shop, currEndCursor: currEndCursor, hasNextPage: hasNextPage, hasPreviousPage: hasPreviousPage, loadMore: loadMore, searchPhrase: searchPhrase };
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (filteredProductsQuery);

/***/ }),

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
/* harmony import */ var _ShopGridPages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../client/src/modules/products/components/ShopGridPages.jsx");
/* harmony import */ var _common_components_global_components_Loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../client/src/modules/common/components/global/components/Loader.jsx");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../../settings.js");
/* harmony import */ var _styles_category_view_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../client/src/modules/products/styles/category-view.scss");
/* harmony import */ var _styles_category_view_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_styles_category_view_scss__WEBPACK_IMPORTED_MODULE_19__);






















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
          currPg = _this$getIdxsAndLims3.currPg;
      // const nextStartDisplayIdx = startDisplayIdx + displayLim;
      // const nextFinalDisplayIdx = nextStartDisplayIdx + displayLim - 1;
      // if (nextFinalDisplayIdx > edgesFinalIdx) {
      //   const first = nextFinalDisplayIdx - edgesFinalIdx;
      //   this.props.loadMore(first);
      // }
      // console.log('currPage', currPg);
      // this.setState({ startDisplayIdx: nextStartDisplayIdx, currPg: currPg + 1 }, () => this.scrollToGridTop());


      _this.props.history.push({ pathname: _this.props.location.pathname, search: 'page=' + (currPg + 1) });
    };

    _this.handlePageBack = function () {
      var _this$getIdxsAndLims4 = _this.getIdxsAndLims(),
          startDisplayIdx = _this$getIdxsAndLims4.startDisplayIdx,
          displayLim = _this$getIdxsAndLims4.displayLim,
          currPg = _this$getIdxsAndLims4.currPg;

      var backLog = startDisplayIdx - displayLim;
      if (backLog >= 0) {
        _this.setState({ currPg: currPg - 1 });
        // this.props.history.goBack();
        _this.props.history.push({ pathname: _this.props.location.pathname, search: 'page=' + (currPg - 1) });
      } else {
        _this.props.history.push({ pathname: _this.props.location.pathname, search: 'page=' + 1 });
      }
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

    _this.calcTotalPages = function (totalProducts, lim) {
      // console.log('TOTAL PRODUCTS::', totalProducts);
      var total = Math.ceil(totalProducts / lim);
      var pages = [];
      var count = void 0;
      for (count = 0; count < total; count += 1) {
        pages.push(count + 1);
      }
      // console.log('PAGES::', pages);
      return pages;
    };

    _this.pageClick = function (page) {
      // console.log('value::', page, currIdx);
      _this.setState({ currPg: page });
      _this.props.history.push({ pathname: _this.props.location.pathname, search: 'page=' + page });
      // const startIdx =
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
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // console.log('Component DID UPDATE');
      // const prevPageTotal = prevProps.productsCount;
      // const totalProducts = this.props.productsCount;
      var reg = /[=](\d)/;
      var _state = this.state,
          startDisplayIdx = _state.startDisplayIdx,
          displayLim = _state.displayLim,
          currPg = _state.currPg;

      var action = this.props.history.action;
      var prevPage = parseInt(reg.exec(prevProps.location.search)[1]);
      var currentPage = parseInt(reg.exec(this.props.location.search)[1]);
      var totalPages = Math.ceil(this.props.productsCount / displayLim);
      // console.log('CURRENTPAGE ', currPg, prevState.currPg);
      if (this.props.category) {
        if (prevPage !== 1 && displayLim !== prevState.displayLim) {
          // console.log('EDGES FINAL IDX', edgesFinalIdx, 'CURR PAGE:', currentPage);
          // console.log('START DISPALY INDEX ', startDisplayIdx);
          this.setState({ startDisplayIdx: displayLim, currPg: 1 });
          return this.props.history.push({ pathname: this.props.location.pathname, search: 'page=' + 1 });
        }
        var edges = this.props.category.products.edges;


        var edgesFinalIdx = edges.length;
        var finalStartIdx = void 0;
        if (currentPage !== 1) {
          finalStartIdx = edgesFinalIdx - currentPage + 1;
        } else {
          finalStartIdx = 0;
        }

        if (startDisplayIdx == 0 && currentPage !== 1 && currentPage !== totalPages) {
          // console.log(' 1ST IF HIT START DISPLAY INDEX:', startDisplayIdx);
          var nextStartIdX = edgesFinalIdx / 2;
          // console.log('nextStartIdX', nextStartIdX);
          return this.setState({ startDisplayIdx: nextStartIdX, currPg: currentPage });
        } else if (currentPage == totalPages && startDisplayIdx !== finalStartIdx) {
          // console.log('CURRENT PAGE:', currentPage);
          // console.log('DISPLAY LIM::', this.state.displayLim);
          // console.log('TOTAL Pages::', totalPages);
          // console.log('TOTAL PRODUCTS', totalProducts);
          // console.log('FINAL START:', finalStartIdx);
          return this.setState({ startDisplayIdx: finalStartIdx, currPg: currentPage });
        } else if (currentPage !== prevPage) {
          // console.log('ELSE HIT:::', nextIdx);
          var nextIdx = 0;
          nextIdx = prevState.startDisplayIdx - displayLim;
          if (currentPage < prevPage) {
            return this.setState({ startDisplayIdx: nextIdx, currPg: currentPage });
          }
          if (currentPage == 1 && nextIdx !== 0) {
            return this.setState({ startDisplayIdx: 0, currPg: currentPage });
          } else if (currPg !== prevState.currPg) {
            if (currentPage == 1 && nextIdx !== 0) {
              return this.setState({ startDisplayIdx: 0, currPg: currentPage });
            }
            var _nextStartIdX = edgesFinalIdx / 2;
            // console.log('THIS SHOULD HIT');
            return this.setState({ startDisplayIdx: _nextStartIdX, currPg: currentPage });
          }
          // if (currentPage == 1) {
          // return this.setState({ startDisplayIdx: finalStartIdx, currPg: currentPage });

          // }
        }

        return; //this.loadNext(currentPage, startIdx);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state2 = this.state,
          selectedPriceRange = _state2.selectedPriceRange,
          selectedPromotion = _state2.selectedPromotion,
          selectedCategory = _state2.selectedCategory;
      var _props = this.props,
          promotions = _props.promotions,
          priceRanges = _props.priceRanges,
          vendor = _props.vendor,
          bannerImage = _props.bannerImage,
          loading = _props.loading,
          sfy_shop = _props.sfy_shop,
          sfy_shop_collections = _props.sfy_shop_collections;
      var _state3 = this.state,
          priceConfirmed = _state3.priceConfirmed,
          priceFilterUpper = _state3.priceFilterUpper,
          priceFilterLower = _state3.priceFilterLower,
          displayLim = _state3.displayLim;

      var filtersToPass = { priceConfirmed: priceConfirmed, priceFilterUpper: priceFilterUpper, priceFilterLower: priceFilterLower };
      // console.log("BRAND PROPS", vendor);
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
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_components_global_components_Loader__WEBPACK_IMPORTED_MODULE_17__["default"], null)
        );
      } else if (vendor && !sfy_shop) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _common_components_global__WEBPACK_IMPORTED_MODULE_11__["PageLayout"],
          null,
          renderMetaData(vendor.vendorData.seo),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_components_global_components_Loader__WEBPACK_IMPORTED_MODULE_17__["default"], null)
        );
      } else {
        var products = sfy_shop.products;
        var categories = sfy_shop_collections.collections;

        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _common_components_global__WEBPACK_IMPORTED_MODULE_11__["PageLayout"],
          null,
          renderMetaData(vendor.vendorData.seo),
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
              })),
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ShopGridPages__WEBPACK_IMPORTED_MODULE_16__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, this.state, {
                currentPageIdx: this.state.currentPageIdx,
                pageClick: this.pageClick,
                pages: this.calcTotalPages(this.props.productsCount, displayLim),
                currentPage: this.props.page,
                isDisabled: this.isPaginationDisabled,
                handlePageForward: this.handlePageForward,
                handlePageBack: this.handlePageBack
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

/***/ "../client/src/modules/products/containers/Vendor.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/defineProperty");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/core-js/json/stringify");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_VendorView__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../client/src/modules/products/components/VendorView.web.jsx");
/* harmony import */ var _common_schema__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../client/src/modules/common/schema/index.js");
/* harmony import */ var _common_graphql_SFY_sfyCollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../client/src/modules/common/graphql/SFY/sfyCollectionsQuery.graphql");
/* harmony import */ var _common_graphql_SFY_sfyCollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_SFY_sfyCollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _common_graphql_VendorQuery_graphql__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../client/src/modules/common/graphql/VendorQuery.graphql");
/* harmony import */ var _common_graphql_VendorQuery_graphql__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_VendorQuery_graphql__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _common_graphql_SFY_sfySingleCategoryByHandle_graphql__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../client/src/modules/common/graphql/SFY/sfySingleCategoryByHandle.graphql");
/* harmony import */ var _common_graphql_SFY_sfySingleCategoryByHandle_graphql__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_SFY_sfySingleCategoryByHandle_graphql__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _common_graphql_SFY_sfyAdminCollectionByHandle_graphql__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../client/src/modules/common/graphql/SFY/sfyAdminCollectionByHandle.graphql");
/* harmony import */ var _common_graphql_SFY_sfyAdminCollectionByHandle_graphql__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_SFY_sfyAdminCollectionByHandle_graphql__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../client/src/modules/common/graphql/VendorsQuery.graphql");
/* harmony import */ var _common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _common_graphql_CategoryQuery_graphql__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("../client/src/modules/common/graphql/CategoryQuery.graphql");
/* harmony import */ var _common_graphql_CategoryQuery_graphql__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_CategoryQuery_graphql__WEBPACK_IMPORTED_MODULE_21__);












var _this2 = undefined;













var Vendor = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10___default()(Vendor, _React$Component);

  function Vendor() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, Vendor);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default()(this, (Vendor.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default()(Vendor)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(Vendor, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_VendorView__WEBPACK_IMPORTED_MODULE_14__["default"], this.props);
    }
  }]);

  return Vendor;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

var VendorWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_13__["compose"])(Object(_common_schema__WEBPACK_IMPORTED_MODULE_15__["FILTERED_PRODUCTS_QUERY"])(), Object(react_apollo__WEBPACK_IMPORTED_MODULE_13__["graphql"])(_common_graphql_SFY_sfySingleCategoryByHandle_graphql__WEBPACK_IMPORTED_MODULE_18___default.a, {
  options: function options(props) {
    var handle = props.match.params.category;
    // const page = props.location.search;
    // console.log('PROPS HERE::', props);
    // console.log('PAGE', page);

    var reg = /[=](\d)/;
    var first = parseInt(reg.exec(props.location.search)[1]);
    // console.log('FIRST ', first);
    var displayLim = 12;
    var fetchNum = first * displayLim;
    // console.log('FETCHNUM:', fetchNum);
    return { variables: { handle: handle, first: fetchNum }, fetchPolicy: 'cache-first' };
  },
  props: function props(_ref) {
    var data = _ref.data;
    var loading = data.loading,
        error = data.error,
        sfy_shop = data.sfy_shop,
        fetchMore = data.fetchMore,
        variables = data.variables;
    // console.log('LOADING:??', data);

    var currEndCursor = void 0,
        hasNextPage = void 0,
        hasPreviousPage = void 0;
    if (!loading && sfy_shop) {
      var products = sfy_shop.collectionByHandle.products;

      if (products.edges.length > 0) currEndCursor = products.edges[products.edges.length - 1].cursor;
      hasNextPage = products.pageInfo.hasNextPage;
      hasPreviousPage = products.pageInfo.hasPreviousPage;
    }
    // console.log('Products length',sfy_shop);
    var loadMore = function () {
      var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
        var after = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currEndCursor;
        var updatedVars, data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                updatedVars = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, variables, { after: after, first: first });
                _context.next = 3;
                return fetchMore({
                  variables: updatedVars,
                  updateQuery: function updateQuery(prevResult, _ref3) {
                    var fetchMoreResult = _ref3.fetchMoreResult;

                    if (fetchMoreResult.sfy_shop.collectionByHandle.products.edges.length === 0) return prevResult;
                    // console.log('PREVRESULT:', prevResult);
                    var updatedResult = JSON.parse(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(prevResult));
                    updatedResult.sfy_shop.collectionByHandle.products.edges = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(prevResult.sfy_shop.collectionByHandle.products.edges), babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(fetchMoreResult.sfy_shop.collectionByHandle.products.edges));
                    updatedResult.sfy_shop.collectionByHandle.products.pageInfo = fetchMoreResult.sfy_shop.collectionByHandle.products.pageInfo;

                    return updatedResult;
                  }
                });

              case 3:
                data = _context.sent;
                return _context.abrupt('return', data);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function loadMore() {
        return _ref2.apply(this, arguments);
      };
    }();
    // console.log('WHAT THE FUCKK::', sfy_shop);
    if (error) throw new Error('Error in Products Query: ' + error);
    if (loading || !sfy_shop) return { loading: loading };
    if (!loading && sfy_shop) {
      return {
        loading: loading,
        category: sfy_shop.collectionByHandle,
        currEndCursor: currEndCursor,
        hasNextPage: hasNextPage,
        hasPreviousPage: hasPreviousPage,
        loadMore: loadMore
      };
    }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_13__["graphql"])(_common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_20___default.a, {
  props: function props(_ref4) {
    var _ref4$data = _ref4.data,
        loading = _ref4$data.loading,
        error = _ref4$data.error,
        vendors = _ref4$data.vendors;

    if (error) throw new Error('Error in Vendors Query: ' + error);
    return { loading: loading, vendors: vendors };
  }
}),
// graphql(LOC_CATEGORY_QUERY, {
//   options: props => {
//     const { category: handle } = props.match.params;
//     return { variables: { handle } };
//   },
//   props: ({ data: { loading, error, category: locCategory } }) => {
//     if (error) throw new Error(`Error in Vendors Query: ${error}`);
//     return { loading, locCategory };
//   }
// }),
Object(react_apollo__WEBPACK_IMPORTED_MODULE_13__["graphql"])(_common_graphql_SFY_sfyAdminCollectionByHandle_graphql__WEBPACK_IMPORTED_MODULE_19___default.a, {
  options: function options(props) {
    var handle = props.match.params.category;

    return { variables: { handle: handle } };
  },
  props: function props(_ref5) {
    var _ref5$data = _ref5.data,
        admin_collectionByHandle = _ref5$data.admin_collectionByHandle,
        loading = _ref5$data.loading,
        error = _ref5$data.error;

    // console.log('LOADING::', loading);
    if (!loading && !error) {
      var productsCount = admin_collectionByHandle.productsCount;

      return { productsCount: productsCount, loadingCount: loading };
    }
    if (error) {
      return { countError: error, productsCount: null };
    }
    return { loadingCount: loading, productsCount: null };

    // if (loadingProductCount) {
    //   return { loadingProductCount };
    // }
    // if (!error) {
    //   return { loadingProductCount, productsCount };
    // } else {
    //   return { countError: error };
    // }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_13__["graphql"])(_common_graphql_SFY_sfyCollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_16___default.a, {
  options: function options() {
    return { variables: babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'first', 50) };
  },
  props: function props(_ref6) {
    var data = _ref6.data;
    var loading = data.loading,
        error = data.error,
        sfy_shop_collections = data.sfy_shop;

    if (error) throw new Error('Error in Categories (Vendor Page) Query: ' + error);
    return { loading: loading, sfy_shop_collections: sfy_shop_collections };
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_13__["graphql"])(_common_graphql_VendorQuery_graphql__WEBPACK_IMPORTED_MODULE_17___default.a, {
  options: function options(props) {
    console.log('PROPS MATCH::', props.match.params);
    return { variables: { input: { handle: props.match.params.vendor_name } } };
  },
  props: function props(_ref7) {
    var data = _ref7.data;
    var loading = data.loading,
        error = data.error,
        vendor = data.vendor;
    // console.log('DATA:::', data);

    if (error) throw new Error('Error in Categories (Vendor Page) Query: ' + error);
    return { loading: loading, vendor: vendor };
  }
}))(Vendor);

Vendor.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object,
  search: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string
};

/* harmony default export */ __webpack_exports__["default"] = (VendorWithApollo);

/***/ })

};
//# sourceMappingURL=index.0ca27ea2fe6fc34ed4ca.js.map
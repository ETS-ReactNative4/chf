require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/search/components/SearchView.jsx":
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
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_components_global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/common/components/global/index.js");
/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../client/src/modules/search/components/SearchBox.jsx");
/* harmony import */ var _products_components_ShopGrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/products/components/ShopGrid.jsx");
/* harmony import */ var _products_components_ShopGridSort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/products/components/ShopGridSort.jsx");
/* harmony import */ var _products_components_ShopGridPages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/products/components/ShopGridPages.jsx");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../../settings.js");
/* harmony import */ var _styles_search_view_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../client/src/modules/search/styles/search-view.scss");
/* harmony import */ var _styles_search_view_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_search_view_scss__WEBPACK_IMPORTED_MODULE_15__);








// import PropTypes from 'prop-types';

// import classnames from 'classnames';


// import ShopBreadcrumbs from '../../products/components/ShopBreadcrumbs';






var SearchView = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(SearchView, _React$Component);

  function SearchView(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, SearchView);

    // const { location } = props;
    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (SearchView.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(SearchView)).call(this, props));

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

    _this.getIdxsAndLims = function () {
      var edges = _this.props.sfy_shop.products.edges;
      var _this$state = _this.state,
          startDisplayIdx = _this$state.startDisplayIdx,
          displayLim = _this$state.displayLim,
          currPg = _this$state.currPg;

      var edgesFinalIdx = edges.length - 1;
      var finalDisplayIdx = startDisplayIdx + displayLim - 1;
      return { startDisplayIdx: startDisplayIdx, displayLim: displayLim, currPg: currPg, edgesFinalIdx: edgesFinalIdx, finalDisplayIdx: finalDisplayIdx };
    };

    _this.setFilteredFinalIdx = function (filteredProds) {
      _this.setState({ filteredFinalIdx: filteredProds.length - 1 });
    };

    _this.isPaginationDisabled = function (type) {
      var hasNextPage = _this.props.hasNextPage;

      var _this$getIdxsAndLims = _this.getIdxsAndLims(),
          startDisplayIdx = _this$getIdxsAndLims.startDisplayIdx,
          finalDisplayIdx = _this$getIdxsAndLims.finalDisplayIdx,
          edgesFinalIdx = _this$getIdxsAndLims.edgesFinalIdx;

      if (type === 'forward') {
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

    _this.search = function (search) {
      console.log('Search for \'' + search + '\' here.');
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

    _this.state = {
      sortMethod: 'featured',
      displayLim: 12,
      startDisplayIdx: 0,
      currPg: 1,
      filteredFinalIdx: null
    };
    return _this;
  }
  // componentDidUpdate(prevProps, prevState) {
  //   // console.log('Component DID UPDATE');
  //   // const prevPageTotal = prevProps.productsCount;
  //   // const totalProducts = this.props.productsCount;
  //   const reg = /[=](\d)/;
  //   const { startDisplayIdx, displayLim, currPg } = this.state;
  //   const action = this.props.history.action;
  //   const prevPage = parseInt(reg.exec(prevProps.location.search)[1]);
  //   const currentPage = parseInt(reg.exec(this.props.location.search)[1]);
  //   const totalPages = Math.ceil(this.props.productsCount / displayLim);
  //   // console.log('CURRENTPAGE ', currPg, prevState.currPg);
  //   if (this.props.category) {
  //     if (prevPage !== 1 && displayLim !== prevState.displayLim) {
  //       // console.log('EDGES FINAL IDX', edgesFinalIdx, 'CURR PAGE:', currentPage);
  //       // console.log('START DISPALY INDEX ', startDisplayIdx);
  //       this.setState({ startDisplayIdx: displayLim, currPg: 1 });
  //       return this.props.history.push({ pathname: this.props.location.pathname, search: `page=${1}` });
  //     }
  //     const { edges } = this.props.category.products;
  //
  //     const edgesFinalIdx = edges.length;
  //     let finalStartIdx;
  //     if (currentPage !== 1) {
  //       finalStartIdx = edgesFinalIdx - currentPage + 1;
  //     } else {
  //       finalStartIdx = 0;
  //     }
  //
  //     if (startDisplayIdx == 0 && currentPage !== 1 && currentPage !== totalPages) {
  //       // console.log(' 1ST IF HIT START DISPLAY INDEX:', startDisplayIdx);
  //       const nextStartIdX = edgesFinalIdx / 2;
  //       // console.log('nextStartIdX', nextStartIdX);
  //       return this.setState({ startDisplayIdx: nextStartIdX, currPg: currentPage });
  //     } else if (currentPage == totalPages && startDisplayIdx !== finalStartIdx) {
  //       // console.log('CURRENT PAGE:', currentPage);
  //       // console.log('DISPLAY LIM::', this.state.displayLim);
  //       // console.log('TOTAL Pages::', totalPages);
  //       // console.log('TOTAL PRODUCTS', totalProducts);
  //       // console.log('FINAL START:', finalStartIdx);
  //       return this.setState({ startDisplayIdx: finalStartIdx, currPg: currentPage });
  //     } else if (currentPage !== prevPage) {
  //       // console.log('ELSE HIT:::', nextIdx);
  //       let nextIdx = 0;
  //       nextIdx = prevState.startDisplayIdx - displayLim;
  //       if (currentPage < prevPage) {
  //         return this.setState({ startDisplayIdx: nextIdx, currPg: currentPage });
  //       }
  //       if (currentPage == 1 && nextIdx !== 0) {
  //         return this.setState({ startDisplayIdx: 0, currPg: currentPage });
  //       } else if (currPg !== prevState.currPg) {
  //         if (currentPage == 1 && nextIdx !== 0) {
  //           return this.setState({ startDisplayIdx: 0, currPg: currentPage });
  //         }
  //         const nextStartIdX = edgesFinalIdx / 2;
  //         // console.log('THIS SHOULD HIT');
  //         return this.setState({ startDisplayIdx: nextStartIdX, currPg: currentPage });
  //       }
  //       // if (currentPage == 1) {
  //       // return this.setState({ startDisplayIdx: finalStartIdx, currPg: currentPage });
  //
  //       // }
  //     }
  //
  //     return; //this.loadNext(currentPage, startIdx);
  //   }
  // }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(SearchView, [{
    key: 'render',
    value: function render() {
      var displayLim = this.state.displayLim;
      var _props = this.props,
          sfy_shop = _props.sfy_shop,
          searchPhrase = _props.searchPhrase,
          loading = _props.loading;

      var renderMetaData = function renderMetaData() {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_8___default.a, {
          title: _settings__WEBPACK_IMPORTED_MODULE_14__["default"].app.name + ':  Quality Home Fitness Equipment for Sale.',
          meta: [{
            name: 'description',
            content: 'Shop local and save!  CA Home Fitness offers the best brands in home fitness equipment at the guaranteed best prices, including treadmills, ellipticals, bikes, rowers, strength training equipment, and more.  '
          }, {
            name: 'keywords',
            content: 'Treadmill, Elliptical machines, Cross Trainer, Exercise Bike, Home Gym, Rower, Commercial Equipment, Life Fitness, Precor, Spirit Fitness, Inspire Fitness, GoFit, Helix'
          }]
        });
      };
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _common_components_global__WEBPACK_IMPORTED_MODULE_9__["PageLayout"],
        null,
        renderMetaData(),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_components_global__WEBPACK_IMPORTED_MODULE_9__["ScrollToTop"], null),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SearchBox__WEBPACK_IMPORTED_MODULE_10__["default"], this.props),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          'div',
          { className: 'search-view' },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            'div',
            { className: 'search-view__main' },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'h1',
              { className: 'header header--upper header--primary search-view__main-header' },
              'SEARCH RESULTS: ' + searchPhrase
            ),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_products_components_ShopGridSort__WEBPACK_IMPORTED_MODULE_12__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
              selectSortMethod: this.selectSortMethod,
              handleLimChange: this.handleLimChange
            }, this.state)),
            loading ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'div',
              null,
              'Loading...'
            ) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'div',
              null,
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_products_components_ShopGrid__WEBPACK_IMPORTED_MODULE_11__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.state, this.props, {
                products: sfy_shop.products,
                setFilteredFinalIdx: this.setFilteredFinalIdx
              }))
            )
          )
        )
      );
    }
  }]);

  return SearchView;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

SearchView.propTypes = {};
SearchView.defaultProps = {};

/* harmony default export */ __webpack_exports__["default"] = (SearchView);

/***/ })

};
//# sourceMappingURL=index.f52e3cbd2f3192a43d5e.js.map
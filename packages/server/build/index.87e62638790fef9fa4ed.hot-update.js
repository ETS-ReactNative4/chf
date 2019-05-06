require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/admin/components/Locations/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocationsView; });
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
/* harmony import */ var _common_components_web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../client/src/modules/common/components/web/index.jsx");










var SelectLocationString = 'Please select a location';
var columns = [{
  title: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
    'a',
    { href: '#' },
    'Name'
  ),
  dataIndex: 'node',
  key: 'name',
  // eslint-disable-next-line
  render: function render(text, record) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
      'div',
      null,
      react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"],
        { to: { pathname: '/admin/locations/' + record.node.handle } },
        text
      )
    );
  }
}];

var LocationsView = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(LocationsView, _Component);

  function LocationsView(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LocationsView);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (LocationsView.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(LocationsView)).call(this, props));

    _this.handleSelectedLocation = function (e) {
      return _this.setState({ selectedLocation: e.target.value });
    };

    _this.handleInitialLocation = function (location) {
      // console.log('LOCATION::', location);
      _this.setState({ selectedLocation: location });
    };

    _this.state = {
      selectedLocation: SelectLocationString
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(LocationsView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // console.log('MOUNTING PROPS::', this.props);
      // this.setState({ selectedLocation: dealers.edges[0].node.name });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      // if (this.props.dealers) {
      //   console.l/og('WE HAVE DEALERS');
      // }
      if (prevProps.loadingDealers !== this.props.loadingDealers) {
        var dealers = this.props.dealers;
        // console.log('COMPONENT DID UPDATE::', dealers.edges[0].node);

        this.setState({ selectedLocation: dealers.edges[0].node.name });
      }
      return;
    }
  }, {
    key: 'render',
    value: function render() {
      // const { selectedLocation } = this.state;
      var _props = this.props,
          loadingDealers = _props.loadingDealers,
          dealers = _props.dealers;

      if (loadingDealers) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'div',
          null,
          'Loading'
        );
      }
      /*
      {dealers.edges.length == 0 ? (
        <AddDealer {...this.state} {...this.props} />
      ) : (
        <DealerForm {...this.state} {...this.props} />
      )}
       */
      // console.log('THE RENDER PROPS:::', dealers.edges.length);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'div',
        { className: 'admin__page__view admin__locations' },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_common_components_web__WEBPACK_IMPORTED_MODULE_8__["Table"], { dataSource: dealers.edges, columns: columns })
      );
    }
  }]);

  return LocationsView;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);




LocationsView.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,
  updateDealer: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  dealers: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  loadingDealers: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool
};

/***/ })

};
//# sourceMappingURL=index.d26249a21045775b193f.js.map
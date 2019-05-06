require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/common/components/global/components/LocationList.jsx":
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../settings.js");
/* harmony import */ var _styles_modules_location_list_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/common/components/global/styles/modules/location-list.scss");
/* harmony import */ var _styles_modules_location_list_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_modules_location_list_scss__WEBPACK_IMPORTED_MODULE_11__);










// import { MdChevronRight } from 'react-icons/md';



var LocationList = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(LocationList, _React$Component);

  function LocationList() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LocationList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_ref = LocationList.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(LocationList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      width: null,
      height: null
    }, _this.saveRef = function (ref) {
      return _this.containerNode = ref;
    }, _this.measureLocationList = function () {
      var _this$containerNode = _this.containerNode,
          clientWidth = _this$containerNode.clientWidth,
          clientHeight = _this$containerNode.clientHeight;

      _this.setState({
        width: clientWidth,
        height: clientHeight
      });
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(LocationList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.measureLocationList();
      if (typeof window !== 'undefined') {
        window.addEventListener('resize', this.measureLocationList, false);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.state.width !== nextState.width || this.state.height !== nextState.height || this.props !== nextProps;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.measureLocationList, false);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          locations = _props.locations,
          selectLocation = _props.selectLocation,
          selectedLocation = _props.selectedLocation;
      var width = this.state.width;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'section',
        {
          ref: this.saveRef,
          className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('location-list', {
            'location-list--xsmall': width < _settings__WEBPACK_IMPORTED_MODULE_10__["default"].breakpoints.small
          }, {
            'location-list--small': width >= _settings__WEBPACK_IMPORTED_MODULE_10__["default"].breakpoints.small && width < _settings__WEBPACK_IMPORTED_MODULE_10__["default"].breakpoints.medium
          }, {
            'location-list--medium': width >= _settings__WEBPACK_IMPORTED_MODULE_10__["default"].breakpoints.medium && width < _settings__WEBPACK_IMPORTED_MODULE_10__["default"].breakpoints.large
          }, {
            'location-list--large': width >= _settings__WEBPACK_IMPORTED_MODULE_10__["default"].breakpoints.large
          })
        },
        'locations' in this.props && locations.length > 0 ? locations.map(function (_ref2) {
          var node = _ref2.node;
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            'button',
            {
              key: node.id,
              className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('location-list__item', {
                'location-list__item--selected': node.street === selectedLocation
              }),
              onClick: function onClick() {
                selectLocation(node.street);
              }
            },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaMapMarkerAlt"], { size: '1.5em', className: 'location-list__icon location-list__icon--pin' }),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              'address',
              { className: 'location-list__address' },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'h5',
                { className: 'header header--secondary location-list__address-header' },
                node.name
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'div',
                { className: 'location-list__address-item' },
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  'a',
                  {
                    rel: 'noopener noreferrer',
                    target: '_blank',
                    href: 'https://www.google.com/maps/dir/?api=1&destination=' + node.street.replace(' ', '+') + '+' + node.city.replace(' ', '+') + '+' + node.country.replace(' ', '+')
                  },
                  node.street
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'div',
                { className: 'location-list__address-item' },
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('a', {
                  rel: 'noopener noreferrer',
                  target: '_blank',
                  href: 'https://www.google.com/maps/dir/?api=1&destination=' + node.street.replace(' ', '+') + '+' + node.city.replace(' ', '+') + '+' + node.country.replace(' ', '+')
                }),
                node.city,
                ', ',
                node.state,
                ' ',
                node.zip
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'div',
                { className: 'location-list__address-item' },
                'Phone: ',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  'a',
                  { href: 'tel:' + node.phone },
                  node.phone
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'div',
                { className: 'location-list__address-item' },
                node.hours
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], { to: '/locations/' + node.handle, className: 'location-list__arrow' })
          );
        }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'span',
          null,
          'No location(s) to display'
        )
      );
    }
  }]);

  return LocationList;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

LocationList.propTypes = {
  locations: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
  selectLocation: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  selectedLocation: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
};
LocationList.defaultProps = {};

/* harmony default export */ __webpack_exports__["default"] = (LocationList);

/***/ })

};
//# sourceMappingURL=index.903c7de860348a64cc24.js.map
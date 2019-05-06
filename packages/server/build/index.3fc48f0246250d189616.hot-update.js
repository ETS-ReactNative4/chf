require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/locations/components/LocationsView.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/core-js/promise");
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _common_components_global__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/common/components/global/index.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../../settings.js");
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../client/src/modules/locations/components/Map.jsx");
/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../client/src/modules/locations/components/SearchBox.jsx");
/* harmony import */ var _styles_locations_view_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../client/src/modules/locations/styles/locations-view.scss");
/* harmony import */ var _styles_locations_view_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_styles_locations_view_scss__WEBPACK_IMPORTED_MODULE_17__);



















var LoadingIcon = function LoadingIcon() {
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
    'div',
    { className: 'loading-wrapper' },
    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
      'div',
      { className: 'lds-ellipsis' },
      react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('div', null),
      react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('div', null),
      react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('div', null),
      react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('div', null)
    )
  );
};

var LocationsView = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(LocationsView, _React$Component);

  function LocationsView() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, LocationsView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, (_ref = LocationsView.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default()(LocationsView)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selectedLocation: null,
      isValidAddress: true,
      isiOSDevice: null,
      loading: false,
      search: false,
      markers: [],
      bounds: {
        NorthEast: { lat: 34.2, lng: -118.25 },
        SouthWest: { lat: 33.5, lng: -116.7 }
      },
      center: {
        lat: 33.9,
        lng: -118.1
      },
      zoom: 10
    }, _this.selectLocation = function (locationAddress) {
      return _this.setState({ selectedLocation: locationAddress });
    }, _this.resetBounds = function (position) {
      if (_this.state.center.lat !== 0) {
        return new google.maps.LatLngBounds(position);
      }
      // check if center is different
      // return new bounds to state.bounds
    }, _this.invalidAddress = function (bool) {
      _this.setState({
        isValidAddress: bool
      });
      // console.log('updated?', this.state.isValidAddress);
    }, _this.clearLocation = function () {
      return _this.setState({ selectedLocation: null });
    }, _this.loadPosition = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      var position, _position$coords, latitude, longitude, dealer, bounds;

      return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({ loading: true });
              _context.prev = 1;
              _context.next = 4;
              return _this.getCurrentPosition();

            case 4:
              position = _context.sent;

              if (!(position.code === 1)) {
                _context.next = 7;
                break;
              }

              throw new Error(position.message);

            case 7:
              _position$coords = position.coords, latitude = _position$coords.latitude, longitude = _position$coords.longitude;
              dealer = _this.getClosestDealer(_this.props.locations, { lat: latitude, lng: longitude });
              bounds = new google.maps.LatLngBounds(new google.maps.LatLng(Math.min(latitude, dealer.lat), Math.min(longitude, dealer.lng)), new google.maps.LatLng(Math.max(latitude, dealer.lat), Math.max(longitude, dealer.lng)));

              _this.setState({
                search: true,
                bounds: bounds,
                center: {
                  lat: latitude,
                  lng: longitude
                },
                zoom: 10,
                loading: false,
                selectedLocation: dealer.address_1
              });
              _context.next = 17;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context['catch'](1);

              _this.setState({ loading: false });
              console.log(_context.t0);

            case 17:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[1, 13]]);
    })), _this.getCurrentPosition = function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
        window.navigator.geolocation.getCurrentPosition(resolve, reject, options);
      });
    }, _this.updateMap = function (location, bounds, center) {
      _this.setState({ location: location, bounds: bounds, center: center, search: true, selectedLocation: location.address_1 });
    }, _this.updateMarkers = function (markers) {
      _this.setState({ markers: markers });
    }, _this.getClosestDealer = function (dealers, center) {
      if (dealers && center) {
        var distance = 10.0e15;
        var markerDistance = void 0;
        dealers.forEach(function (_ref3) {
          var node = _ref3.node;
          var markerLat = node.lat,
              markerLng = node.lng;

          var distanceFromCenter = _this.calculateDistance(center, { markerLat: markerLat, markerLng: markerLng });
          if (distanceFromCenter < distance) {
            distance = distanceFromCenter;
            markerDistance = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, node, { distanceFromCenter: distanceFromCenter });
          }
        });
        return markerDistance;
      }
    }, _this.isiOSDevice = function () {
      _this.setState({
        isiOSDevice: !!window.navigator.platform.match(/iPhone|iPod|iPad/)
      });
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(LocationsView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // console.log('state?', this.state);
      // TODO: Quick Fix for Scrolling Issue
      // window.scrollTo(0, 0);
      if (typeof window !== 'undefined') {
        this.isiOSDevice();
      }
      this.setState({ markers: this.props.locations });
    }
  }, {
    key: 'calculateDistance',
    value: function calculateDistance(center, markers) {
      var lat1 = center.lat;
      var lon1 = center.lng;

      var lat2 = markers.markerLat;
      var lon2 = markers.markerLng;

      var R = 6371e3; // earth radius in meters
      var φ1 = lat1 * (Math.PI / 180);
      var φ2 = lat2 * (Math.PI / 180);
      var Δφ = (lat2 - lat1) * (Math.PI / 180);
      var Δλ = (lon2 - lon1) * (Math.PI / 180);

      var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * (Math.sin(Δλ / 2) * Math.sin(Δλ / 2));

      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      var distance = R * c;
      return distance; // in meters
    }
  }, {
    key: 'render',
    value: function render() {
      // const {  } = this.props;
      var _state = this.state,
          isiOSDevice = _state.isiOSDevice,
          selectedLocation = _state.selectedLocation;
      var locations = this.props.locations;

      console.log('THE LOCATIONS::', locations);
      var closest = void 0; // eslint-disable-line no-unused-vars
      if (this.state.search) {
        closest = this.getClosestDealer(this.props.locations, this.state.center);
      }

      var renderMetaData = function renderMetaData() {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_11___default.a, {
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
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
        _common_components_global__WEBPACK_IMPORTED_MODULE_13__["PageLayout"],
        null,
        renderMetaData(),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_common_components_global__WEBPACK_IMPORTED_MODULE_13__["ScrollToTop"], null),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
          'div',
          { className: 'locations-view' },
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            'div',
            { className: 'locations-view__sidebar' },
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
              'div',
              { className: 'locations-view__search' },
              react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                _SearchBox__WEBPACK_IMPORTED_MODULE_16__["default"],
                {
                  dealers: this.props.locations,
                  updateMap: this.updateMap,
                  closestDealer: this.getClosestDealer,
                  zoom: this.state.zoom,
                  invalidAddress: this.invalidAddress
                },
                !this.state.loading ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                  'button',
                  { className: 'location-search__submit', onClick: this.loadPosition },
                  react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__["FaLocationArrow"], { className: 'location-search__icon location-search__icon--arrow' }),
                  'Use My Current Location'
                ) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(LoadingIcon, null)
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
              'div',
              { className: 'locations-view__list' },
              react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_common_components_global__WEBPACK_IMPORTED_MODULE_13__["LocationList"], {
                locations: locations,
                selectLocation: this.selectLocation,
                selectedLocation: selectedLocation
              })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            'div',
            { className: 'locations-view__map' },
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Map__WEBPACK_IMPORTED_MODULE_15__["default"], {
              markers: this.props.locations,
              bounds: this.state.bounds,
              updateMarkers: this.updateMarkers,
              center: this.state.center,
              zoom: this.state.zoom,
              search: this.state.search,
              fullscreenControl: isiOSDevice ? false : true,
              clearLocation: this.clearLocation,
              selectLocation: this.selectLocation,
              selectedLocation: selectedLocation
            })
          )
        )
      );
    }
  }]);

  return LocationsView;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

LocationsView.propTypes = {
  locations: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array
};
LocationsView.defaultProps = {};

/* harmony default export */ __webpack_exports__["default"] = (LocationsView);

/***/ })

};
//# sourceMappingURL=index.462253e5fb19db71e6bf.js.map
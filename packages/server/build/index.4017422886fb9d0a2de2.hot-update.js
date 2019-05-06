require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/locations/components/LocationInfo.jsx":
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
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_components_global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../client/src/modules/common/components/global/index.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../settings.js");
/* harmony import */ var _styles_location_info_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../client/src/modules/locations/styles/location-info.scss");
/* harmony import */ var _styles_location_info_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_location_info_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_components_global_components_Loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/common/components/global/components/Loader.jsx");













var LocationInfo = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(LocationInfo, _React$Component);

  function LocationInfo() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LocationInfo);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (LocationInfo.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(LocationInfo)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(LocationInfo, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          loadingLocation = _props.loadingLocation,
          locationObj = _props.locationObj;


      var renderMetaData = function renderMetaData() {
        return (
          // <Helmet
          //   title={`${settings.app.name} - ${locationObj.city}`}
          //   meta={[
          //     {
          //       name: 'description',
          //       content: `${settings.app.name} - ${locationObj.city} page`
          //     }
          //   ]}
          // />
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_7___default.a, {
            title: locationObj.name + ':  Quality Home Fitness Equipment for Sale.',
            meta: [{
              name: 'description',
              content: '' + locationObj.description
            }, {
              name: 'keywords',
              content: 'Treadmill, Elliptical machines, Cross Trainer, Exercise Bike, Home Gym, Rower, Commercial Equipment, Life Fitness, Precor, Spirit Fitness, Inspire Fitness, GoFit, Helix'
            }]
          })
        );
      };
      if (loadingLocation) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          _common_components_global__WEBPACK_IMPORTED_MODULE_8__["PageLayout"],
          null,
          typeof window !== 'undefined' ? renderMetaData() : null,
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_common_components_global_components_Loader__WEBPACK_IMPORTED_MODULE_11__["default"], null)
        );
      }
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        _common_components_global__WEBPACK_IMPORTED_MODULE_8__["PageLayout"],
        null,
        renderMetaData(),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_common_components_global__WEBPACK_IMPORTED_MODULE_8__["ScrollToTop"], null),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_common_components_global__WEBPACK_IMPORTED_MODULE_8__["Hero"], {
          overlayNav: false,
          image: {
            name: locationObj.city,
            link: locationObj.image_url
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'div',
          { className: 'location-info' },
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_common_components_global__WEBPACK_IMPORTED_MODULE_8__["Article"], {
            article: {
              title: locationObj.city,
              locationInfo: locationObj
            }
          })
        )
      );
    }
  }]);

  return LocationInfo;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

LocationInfo.propTypes = {
  loadingLocation: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  locationObj: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object
};

/* harmony default export */ __webpack_exports__["default"] = (LocationInfo);

/***/ })

};
//# sourceMappingURL=index.f28b4733c40e9d96644d.js.map
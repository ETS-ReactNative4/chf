require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/locations/containers/LocationWestHollywood.jsx":
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
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_LocationInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../client/src/modules/locations/components/LocationInfo.jsx");
/* harmony import */ var _admin_graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/admin/graphql/DealerQuery.graphql");
/* harmony import */ var _admin_graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_admin_graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_locations_view_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../client/src/modules/locations/styles/locations-view.scss");
/* harmony import */ var _styles_locations_view_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_locations_view_scss__WEBPACK_IMPORTED_MODULE_10__);













var LocationWestHollywood = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(LocationWestHollywood, _React$Component);

  function LocationWestHollywood() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LocationWestHollywood);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (LocationWestHollywood.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(LocationWestHollywood)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(LocationWestHollywood, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_LocationInfo__WEBPACK_IMPORTED_MODULE_8__["default"], this.props);
    }
  }]);

  return LocationWestHollywood;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

LocationWestHollywood.propTypes = {
  locationObj: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object
};
// LocationWestHollywood.defaultProps = {
//   locationObj: {
//     id: '7',
//     name: 'California Home Fitness',
//     address_1: '9025 Santa Monica Blvd',
//     address_2: '',
//     city: 'West Hollywood',
//     state: 'CA',
//     zip: '90069',
//     country: 'United States',
//     email: 'westhollywood@cahomefitness.com',
//     phone: '424-284-3824',
//     lat: 34.0827223,
//     lng: -118.3900462,
//     image_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/location_west-hollywood.png',
//     description: `Our West Hollywood store offers the area’s largest selection of high quality fitness equipment at the most affordable prices around.  Highly trained Fitness Consultants are ready to help you select the equipment  that’s right for your fitness goal and budget.\n\nCalifornia Home Fitness West Hollywood offers a wide variety of quality products, including:\n\n- Treadmills\n- Ellipticals\n- Home gyms\n- Exercise bikes\n- Fitness accessories\n\nCalifornia Home Fitness specializes in selling premium fitness equipment for the home and commercial locations at the best prices. Our stores are stocked with everything you need from beginner to expert level treadmills, elliptical cross trainers, exercise bikes, functional trainers, home gyms, vibration trainers, dumbbells and more. Our product line consists of the strongest brands in the industry such as Precor, Life Fitness, Cybex, Spirit, Inspire, Bodycraft, Cascade, DKN, Power Block and Go Fit. We bring more than 25 years industry experience and knowledge to assist you in finding the equipment to satisfy your fitness needs. We pride ourselves in building strong relationships with our clientele and always being there for them, from the initial contact, through the purchase and install, and continuing to make sure your needs are being met. We are here to help you achieve your fitness goals.`,
//     url_name: 'west-hollywood',
//     hours: '10am - 7pm Mon - Fri, 10am - 6pm Sat, 10am-5pm Sun'
//   }
// };

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_7__["compose"])(Object(react_apollo__WEBPACK_IMPORTED_MODULE_7__["graphql"])(_admin_graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_9___default.a, {
  options: function options(props) {
    var handle = props.match.params.location_handle;
    return { variables: { handle: handle } };
  },
  props: function props(_ref) {
    var data = _ref.data;

    console.log('DEALER HANDLE QUERY:', data);
    var loading = data.loading,
        error = data.error,
        dealerByHandle = data.dealerByHandle;

    if (error) {
      return { locationError: error };
    }
    if (loading) {
      return { loadingLocation: loading };
    }

    return { loadingLocation: loading, locationObj: dealerByHandle };
  }
}))(LocationWestHollywood));

/***/ })

};
//# sourceMappingURL=index.f908edeabbbdac9e43ae.js.map
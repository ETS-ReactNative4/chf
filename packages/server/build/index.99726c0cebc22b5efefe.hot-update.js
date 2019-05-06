require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/locations/containers/Locations.jsx":
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
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_LocationsView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../client/src/modules/locations/components/LocationsView.web.jsx");
/* harmony import */ var _admin_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../client/src/modules/admin/graphql/Dealers.graphql");
/* harmony import */ var _admin_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_admin_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_8__);











var Locations = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Locations, _React$Component);

  function Locations() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Locations);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Locations.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(Locations)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Locations, [{
    key: 'render',
    value: function render() {
      console.log('LOCATIONS VIEW PROPS::', this.props);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_LocationsView__WEBPACK_IMPORTED_MODULE_7__["default"], this.props);
    }
  }]);

  return Locations;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

Locations.defaultProps = {
  locations: [{
    id: '1',
    name: 'California Home Fitness',
    address_1: '11910 Wilshire Blvd',
    address_2: '',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90025',
    country: 'United States',
    email: 'westla@cahomefitness.com',
    phone: '310-479-0066',
    lat: 34.0461675,
    lng: -118.4666688,
    image_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/location_los-angeles.png',
    description: 'Our Los Angeles store offers the area’s largest selection of high quality fitness equipment at the most affordable prices around.  Highly trained Fitness Consultants are ready to help you select the equipment  that’s right for your fitness goal and budget.\n\nCalifornia Home Fitness Los Angeles offers a wide variety of quality products, including:\n\n- Treadmills\n- Ellipticals\n- Home gyms\n- Exercise bikes\n- Fitness accessories\n\nCalifornia Home Fitness specializes in selling premium fitness equipment for the home and commercial locations at the best prices. Our stores are stocked with everything you need from beginner to expert level treadmills, elliptical cross trainers, exercise bikes, functional trainers, home gyms, vibration trainers, dumbbells and more. Our product line consists of the strongest brands in the industry such as Precor, Life Fitness, Cybex, Spirit, Inspire, Bodycraft, Cascade, DKN, Power Block and Go Fit. We bring more than 25 years industry experience and knowledge to assist you in finding the equipment to satisfy your fitness needs. We pride ourselves in building strong relationships with our clientele and always being there for them, from the initial contact, through the purchase and install, and continuing to make sure your needs are being met. We are here to help you achieve your fitness goals.',
    url_name: 'los-angeles',
    hours: '10am - 7pm Mon - Fri, 10am - 6pm Sat, 11am-5pm Sun'
  }, {
    id: '2',
    name: 'California Home Fitness',
    address_1: '3601 Jamboree Rd',
    address_2: '',
    city: 'Newport Beach',
    state: 'CA',
    zip: '92660',
    country: 'United States',
    email: 'newport@cahomefitness.com',
    phone: '949-253-3410',
    lat: 33.6566691,
    lng: -117.8666623,
    image_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/location_newport-beach.png',
    description: 'Our Newport Beach store offers the area’s largest selection of high quality fitness equipment at the most affordable prices around.  Highly trained Fitness Consultants are ready to help you select the equipment  that’s right for your fitness goal and budget.\n\nCalifornia Home Fitness Newport Beach offers a wide variety of quality products, including:\n\n- Treadmills\n- Ellipticals\n- Home gyms\n- Exercise bikes\n- Fitness accessories\n\nCalifornia Home Fitness specializes in selling premium fitness equipment for the home and commercial locations at the best prices. Our stores are stocked with everything you need from beginner to expert level treadmills, elliptical cross trainers, exercise bikes, functional trainers, home gyms, vibration trainers, dumbbells and more. Our product line consists of the strongest brands in the industry such as Precor, Life Fitness, Cybex, Spirit, Inspire, Bodycraft, Cascade, DKN, Power Block and Go Fit. We bring more than 25 years industry experience and knowledge to assist you in finding the equipment to satisfy your fitness needs. We pride ourselves in building strong relationships with our clientele and always being there for them, from the initial contact, through the purchase and install, and continuing to make sure your needs are being met. We are here to help you achieve your fitness goals.',
    url_name: 'newport-beach',
    hours: '10am - 7pm Mon - Fri, 10am - 6pm Sat, 11am-5pm Sun'
  }, {
    id: '3',
    name: 'California Home Fitness',
    address_1: '20502 Hawthorne Blvd',
    address_2: '',
    city: 'Torrance',
    state: 'CA',
    zip: '90503',
    country: 'United States',
    email: 'torrance@cahomefitness.com',
    phone: '310-214-9100',
    lat: 33.8447725,
    lng: -118.3555569,
    image_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/location_torrace.png',
    description: 'Our Torrace store offers the area’s largest selection of high quality fitness equipment at the most affordable prices around.  Highly trained Fitness Consultants are ready to help you select the equipment  that’s right for your fitness goal and budget.\n\nCalifornia Home Fitness Torrance offers a wide variety of quality products, including:\n\n- Treadmills\n- Ellipticals\n- Home gyms\n- Exercise bikes\n- Fitness accessories\n\nCalifornia Home Fitness specializes in selling premium fitness equipment for the home and commercial locations at the best prices. Our stores are stocked with everything you need from beginner to expert level treadmills, elliptical cross trainers, exercise bikes, functional trainers, home gyms, vibration trainers, dumbbells and more. Our product line consists of the strongest brands in the industry such as Precor, Life Fitness, Cybex, Spirit, Inspire, Bodycraft, Cascade, DKN, Power Block and Go Fit. We bring more than 25 years industry experience and knowledge to assist you in finding the equipment to satisfy your fitness needs. We pride ourselves in building strong relationships with our clientele and always being there for them, from the initial contact, through the purchase and install, and continuing to make sure your needs are being met. We are here to help you achieve your fitness goals.',
    url_name: 'torrace',
    hours: '10am - 7pm Mon - Fri, 10am - 6pm Sat, 11am-5pm Sun'
  }, {
    id: '4',
    name: 'California Home Fitness',
    address_1: '3700 E Colorado Blvd',
    address_2: '',
    city: 'Pasadena',
    state: 'CA',
    zip: '91107',
    country: 'United States',
    email: 'pasadena@cahomefitness.com',
    phone: '626-405-1787',
    lat: 34.146132,
    lng: -118.0752393,
    image_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/location_pasadena.png',
    description: 'Our Pasadena store offers the area’s largest selection of high quality fitness equipment at the most affordable prices around.  Highly trained Fitness Consultants are ready to help you select the equipment  that’s right for your fitness goal and budget.\n\nCalifornia Home Fitness Pasadena offers a wide variety of quality products, including:\n\n- Treadmills\n- Ellipticals\n- Home gyms\n- Exercise bikes\n- Fitness accessories\n\nCalifornia Home Fitness specializes in selling premium fitness equipment for the home and commercial locations at the best prices. Our stores are stocked with everything you need from beginner to expert level treadmills, elliptical cross trainers, exercise bikes, functional trainers, home gyms, vibration trainers, dumbbells and more. Our product line consists of the strongest brands in the industry such as Precor, Life Fitness, Cybex, Spirit, Inspire, Bodycraft, Cascade, DKN, Power Block and Go Fit. We bring more than 25 years industry experience and knowledge to assist you in finding the equipment to satisfy your fitness needs. We pride ourselves in building strong relationships with our clientele and always being there for them, from the initial contact, through the purchase and install, and continuing to make sure your needs are being met. We are here to help you achieve your fitness goals.',
    url_name: 'pasadena',
    hours: '10am - 7pm Mon - Fri, 11am - 6pm Sun'
  }, {
    id: '5',
    name: 'California Home Fitness',
    address_1: '16163 Lake Forest Drive',
    address_2: '',
    city: 'Irvine',
    state: 'CA',
    zip: '92618',
    country: 'United States',
    email: 'irvine@cahomefitness.com',
    phone: '949-251-9500',
    lat: 33.62933,
    lng: -117.7266217,
    image_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/location_irvine.png',
    description: 'Our Irvine store offers the area’s largest selection of high quality fitness equipment at the most affordable prices around.  Highly trained Fitness Consultants are ready to help you select the equipment  that’s right for your fitness goal and budget.\n\nCalifornia Home Fitness Irvine offers a wide variety of quality products, including:\n\n- Treadmills\n- Ellipticals\n- Home gyms\n- Exercise bikes\n- Fitness accessories\n\nCalifornia Home Fitness specializes in selling premium fitness equipment for the home and commercial locations at the best prices. Our stores are stocked with everything you need from beginner to expert level treadmills, elliptical cross trainers, exercise bikes, functional trainers, home gyms, vibration trainers, dumbbells and more. Our product line consists of the strongest brands in the industry such as Precor, Life Fitness, Cybex, Spirit, Inspire, Bodycraft, Cascade, DKN, Power Block and Go Fit. We bring more than 25 years industry experience and knowledge to assist you in finding the equipment to satisfy your fitness needs. We pride ourselves in building strong relationships with our clientele and always being there for them, from the initial contact, through the purchase and install, and continuing to make sure your needs are being met. We are here to help you achieve your fitness goals.',
    url_name: 'irvine',
    hours: '10am - 7pm Mon - Sat, 10am - 6pm Sat, 11am-5pm Sun'
  }, {
    id: '6',
    name: 'California Home Fitness',
    address_1: '14255 Ventura Blvd',
    address_2: '',
    city: 'Sherman Oaks',
    state: 'CA',
    zip: '91423',
    country: 'United States',
    email: 'shermanoaks@cahomefitness.com',
    phone: '818-990-0990',
    lat: 34.1504342,
    lng: -118.4461679,
    image_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/location_sherman-oaks.png',
    description: 'Our Sherman Oaks store offers the area’s largest selection of high quality fitness equipment at the most affordable prices around.  Highly trained Fitness Consultants are ready to help you select the equipment  that’s right for your fitness goal and budget.\n\nCalifornia Home Fitness Sherman Oaks offers a wide variety of quality products, including:\n\n- Treadmills\n- Ellipticals\n- Home gyms\n- Exercise bikes\n- Fitness accessories\n\nCalifornia Home Fitness specializes in selling premium fitness equipment for the home and commercial locations at the best prices. Our stores are stocked with everything you need from beginner to expert level treadmills, elliptical cross trainers, exercise bikes, functional trainers, home gyms, vibration trainers, dumbbells and more. Our product line consists of the strongest brands in the industry such as Precor, Life Fitness, Cybex, Spirit, Inspire, Bodycraft, Cascade, DKN, Power Block and Go Fit. We bring more than 25 years industry experience and knowledge to assist you in finding the equipment to satisfy your fitness needs. We pride ourselves in building strong relationships with our clientele and always being there for them, from the initial contact, through the purchase and install, and continuing to make sure your needs are being met. We are here to help you achieve your fitness goals.',
    url_name: 'sherman-oaks',
    hours: '10am - 7pm Mon - Fri, 10am - 6pm Sat, 11am-5pm Sun'
  }, {
    id: '7',
    name: 'California Home Fitness',
    address_1: '9025 Santa Monica Blvd',
    address_2: '',
    city: 'West Hollywood',
    state: 'CA',
    zip: '90069',
    country: 'United States',
    email: 'westhollywood@cahomefitness.com',
    phone: '424-284-3824',
    lat: 34.0827223,
    lng: -118.3900462,
    image_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/location_west-hollywood.png',
    description: 'Our West Hollywood store offers the area’s largest selection of high quality fitness equipment at the most affordable prices around.  Highly trained Fitness Consultants are ready to help you select the equipment  that’s right for your fitness goal and budget.\n\nCalifornia Home Fitness West Hollywood offers a wide variety of quality products, including:\n\n- Treadmills\n- Ellipticals\n- Home gyms\n- Exercise bikes\n- Fitness accessories\n\nCalifornia Home Fitness specializes in selling premium fitness equipment for the home and commercial locations at the best prices. Our stores are stocked with everything you need from beginner to expert level treadmills, elliptical cross trainers, exercise bikes, functional trainers, home gyms, vibration trainers, dumbbells and more. Our product line consists of the strongest brands in the industry such as Precor, Life Fitness, Cybex, Spirit, Inspire, Bodycraft, Cascade, DKN, Power Block and Go Fit. We bring more than 25 years industry experience and knowledge to assist you in finding the equipment to satisfy your fitness needs. We pride ourselves in building strong relationships with our clientele and always being there for them, from the initial contact, through the purchase and install, and continuing to make sure your needs are being met. We are here to help you achieve your fitness goals.',
    url_name: 'west-hollywood',
    hours: '10am - 6pm Mon - Fri, 10am - 6pm Sat, 11am-5pm Sun'
  }]
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_6__["compose"])(Object(react_apollo__WEBPACK_IMPORTED_MODULE_6__["graphql"])(_admin_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_8___default.a, {
  options: function options() {
    return {
      variables: { first: 12, after: 0 }
    };
  },
  props: function props(_ref) {
    var data = _ref.data;

    console.log('DATA:::', data);
    var loading = data.loading,
        error = data.error,
        dealers = data.dealers;

    if (error) {
      console.log('DEALERS ERROR:::', error);
      return { dealersError: error };
    }
    if (loading) {
      return { loadingDealers: loading };
    }
    if (!loading && !error) {
      console.log('DEALERS::', dealers);
      return { loadingDealers: loading, locations: dealers };
    }
  }
}))(Locations));

/***/ })

};
//# sourceMappingURL=index.59559d7bbf677821c753.js.map
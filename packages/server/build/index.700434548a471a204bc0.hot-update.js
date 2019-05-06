require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/home/components/HomeView.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/core-js/map");
/* harmony import */ var babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_components_global__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/common/components/global/index.js");
/* harmony import */ var _HomeVendors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/home/components/HomeVendors.jsx");
/* harmony import */ var _HomeBranding__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../client/src/modules/home/components/HomeBranding.jsx");
/* harmony import */ var _ServiceSlug__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../client/src/modules/home/components/ServiceSlug.jsx");
/* harmony import */ var _PopularItemsCarousel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../client/src/modules/home/components/PopularItemsCarousel.jsx");
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../client/src/modules/home/components/Carousel.jsx");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../../settings.js");
/* harmony import */ var _styles_home_view_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../client/src/modules/home/styles/home-view.scss");
/* harmony import */ var _styles_home_view_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_styles_home_view_scss__WEBPACK_IMPORTED_MODULE_19__);






















var filterFields = function filterFields(fields, fieldName) {
  return fields.find(function (field) {
    return field.fieldName === fieldName;
  }) !== undefined ? fields.filter(function (field) {
    return field.fieldName === fieldName;
  })[0].fieldValue : '';
};

var renderMetaData = function renderMetaData() {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_9___default.a, {
    title: 'Quality Home Fitness Equipment - ' + _settings__WEBPACK_IMPORTED_MODULE_18__["default"].app.name,
    meta: [{
      name: 'description',
      content: 'CA Home Fitness offers the best brands in home fitness equipment at the guaranteed best prices, including treadmills, ellipticals, bikes, and much more. '
    }, {
      name: 'keywords',
      content: 'Treadmill, Elliptical machines, Cross Trainer, Exercise Bike, Home Gym, Rower, Commercial Equipment, Life Fitness, Precor, Spirit Fitness, Inspire Fitness, GoFit, Helix'
    }]
  });
};

var HomeView = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(HomeView, _React$Component);

  function HomeView(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, HomeView);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (HomeView.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(HomeView)).call(this, props));

    _this.filterVendors = function (filter) {
      if (filter === 'topSix') {
        var filtered = _this.props.vendors.filter(function (v) {
          return v.is_top_six;
        });
        return lodash__WEBPACK_IMPORTED_MODULE_11___default.a.orderBy(filtered, ['top_six_position'], ['asc']);
      }
      if (filter === 'featured') return _this.props.vendors.filter(function (v) {
        return v.is_featured;
      });
    };

    _this.state = {
      carouselActive: false,
      images: new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_1___default.a(),
      defaultImage: {
        name: 'California Home Fitness',
        link: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/home_hero-v2.png'
      }
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(HomeView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var location = this.props.location;

      if (location && location.hasOwnProperty('state') && typeof location.state !== 'undefined') {
        if ('referrer' in location.state) {
          var referrer = location.state.referrer;
          //TODO: Replace alert with modal or other notification

          if (referrer == 'signup-success') window.alert('Congratulations - you\'ve successfully registered your account');else if (referrer === 'login-success') window.alert('You\'ve successfully logged in!');
        }
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.page !== prevProps.page) {
        var fields = this.props.page.fields;

        var data = JSON.parse(fields[0].field_value);
        // console.log('FIELDS::', data);
        var images = data.images,
            carouselActive = data.carouselActive;

        var carouselImages = new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_1___default.a([].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(images)));
        var firstImgKey = carouselImages.keys().next().value;
        var firstImage = carouselImages.get(firstImgKey);
        var defaultImage = { name: firstImage.name, link: firstImage.url };
        // console.log('FIST::', defaultImage);
        // for (var [key, value] of carouselImages.entries()) {
        //   console.log('KEY::', key);
        //   console.log('VALUE::', value);
        // }
        console.log('WHAT THE FUCKK::', data);
        return this.setState({ images: carouselImages, carouselActive: carouselActive, defaultImage: defaultImage });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          homeGymsImage = _props.homeGymsImage,
          commercialGymsImage = _props.commercialGymsImage,
          loading = _props.loading,
          sfy_shop = _props.sfy_shop,
          vendors = _props.vendors;
      var _state = this.state,
          carouselActive = _state.carouselActive,
          images = _state.images,
          defaultImage = _state.defaultImage;

      console.log('THE STATE:::', this.state);
      if (loading || !sfy_shop || !vendors) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _common_components_global__WEBPACK_IMPORTED_MODULE_12__["PageLayout"],
          null,
          renderMetaData(),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_components_global__WEBPACK_IMPORTED_MODULE_12__["Hero"], { overlayNav: false, image: defaultImage })
        );
      }
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _common_components_global__WEBPACK_IMPORTED_MODULE_12__["PageLayout"],
        null,
        renderMetaData(),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_components_global__WEBPACK_IMPORTED_MODULE_12__["ScrollToTop"], null),
        carouselActive ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_17__["default"], { overlayNav: false, images: images }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_components_global__WEBPACK_IMPORTED_MODULE_12__["Hero"], { overlayNav: false, image: defaultImage }),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          'div',
          { className: 'home-view' },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_HomeVendors__WEBPACK_IMPORTED_MODULE_13__["default"], null),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            'div',
            { className: 'home-view__content-container' },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'div',
              { className: 'home-view__popular-container' },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                'h2',
                { className: 'header header--primary header--upper header--centered home-view__header' },
                'Popular Items'
              ),
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PopularItemsCarousel__WEBPACK_IMPORTED_MODULE_16__["default"], { products: sfy_shop.products, vendors: vendors })
            ),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'div',
              { className: 'home-view__video-container' },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                _common_components_global__WEBPACK_IMPORTED_MODULE_12__["VideoText"],
                { videoSide: 'left', videoLink: 'https://www.youtube.com/embed/pEl3zYnH7FY', iframeVideo: true },
                react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                  'h3',
                  { className: 'header header--secondary video-text__header' },
                  'Customer Oriented'
                ),
                react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                  'p',
                  { className: 'video-text__text' },
                  'We pride ourselves on building strong relationships with our clientele by always being there for them. From the initial contact, through product selection, purchase, delivery, installation as well as use and maintenance, we want to always make sure that their needs are being met.'
                )
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'div',
              { className: 'home-view__image-container' },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                _common_components_global__WEBPACK_IMPORTED_MODULE_12__["ImageText"],
                { imagePosition: 'bottom', imageOverflow: 'left', image: homeGymsImage, shadow: false },
                react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                  'span',
                  { className: 'header header--secondary header--upper image-text__header' },
                  'Home Gym'
                ),
                react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                  'span',
                  null,
                  ' - '
                ),
                react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                  'p',
                  { className: 'image-text__text' },
                  'We are the authorized dealer for the top brands in the industry such as Precor, Life Fitness, Inspire and others. We bring gym quality equipment into your home appropriate to each customer\u2019s unique goals, lifestyle, and budget.'
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                _common_components_global__WEBPACK_IMPORTED_MODULE_12__["ImageText"],
                { imagePosition: 'top', imageOverflow: 'right', image: commercialGymsImage, shadow: true },
                react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                  'span',
                  { className: 'header header--secondary header--upper image-text__header' },
                  'Commercial Gym'
                ),
                react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                  'span',
                  null,
                  ' - '
                ),
                react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                  'p',
                  { className: 'image-text__text' },
                  'California Home Fitness offers high quality, practical products for a variety of commercial environments. Our reliable products look great, are easy to use, and will increase the longevity of your office, multi-family, school, fire, police, studio, club, or hospitality facility.'
                )
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'div',
              { className: 'home-view__vendor-container' },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                'h2',
                { className: 'header header--primary header--upper header--centered home-view__header' },
                'Vendor Section'
              ),
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                'div',
                { className: 'home-view__vendor-card' },
                react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_components_global__WEBPACK_IMPORTED_MODULE_12__["FeaturedVendors"], { vendors: this.filterVendors('featured') }),
                react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_components_global__WEBPACK_IMPORTED_MODULE_12__["VendorList"], { vendors: this.filterVendors('topSix') }),
                react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"],
                  {
                    to: '/brands',
                    className: 'header header--primary header--lower header--centered home-view__vendors-link'
                  },
                  'see more'
                )
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'div',
              { className: 'home-view__service-slug' },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ServiceSlug__WEBPACK_IMPORTED_MODULE_15__["default"], null)
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            'div',
            { className: 'home-view__home-branding' },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_HomeBranding__WEBPACK_IMPORTED_MODULE_14__["default"], null)
          )
        )
      );
    }
  }]);

  return HomeView;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

HomeView.defaultProps = {
  heroImage: {
    name: 'California Home Fitness',
    link: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/home_hero-v2.png'
  },
  homeGymsImage: {
    name: 'Home Gyms',
    link: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/home_homegym.png'
  },
  commercialGymsImage: {
    name: 'Commercial Gyms',
    link: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/home_commercialgym.png'
  }
};
HomeView.propTypes = {
  heroImage: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  homeGymsImage: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  commercialGymsImage: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  location: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  sfy_shop: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  vendors: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array
};

/* harmony default export */ __webpack_exports__["default"] = (HomeView);

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
//# sourceMappingURL=index.27ee3eb8895947e15bee.js.map
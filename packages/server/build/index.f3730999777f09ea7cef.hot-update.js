require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/admin/components/Menu.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAdminVerified", function() { return isAdminVerified; });
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
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _profile_styles_profile_menu_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/profile/styles/profile-menu.scss");
/* harmony import */ var _profile_styles_profile_menu_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_profile_styles_profile_menu_scss__WEBPACK_IMPORTED_MODULE_9__);







// import Helmet from 'react-helmet';


// import {  } from '../../common/components/global';
// import settings from '../../../../../../settings';


var isAdminVerified = function isAdminVerified(props) {
  var currentUser = props.currentUser;

  if (currentUser) {
    var hasKeys = ['id', 'role', 'email'].every(function (el) {
      return currentUser.hasOwnProperty(el) && currentUser[el];
    });
    if (hasKeys && currentUser.role === 'admin') return true;
  }
  return false;
};

var ProfileMenu = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ProfileMenu, _React$Component);

  function ProfileMenu() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ProfileMenu);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (ProfileMenu.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(ProfileMenu)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ProfileMenu, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // const {  } = this.state;
      var _props = this.props,
          currentView = _props.currentView,
          changeView = _props.changeView,
          location = _props.location;

      var regex = /(?:admin\/)([a-zA-Z]*)/gm;
      var path = regex.exec(location.pathname);
      console.log('PATH:', path);

      // TODO: Hide manage links when not admin
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'nav',
        { className: 'profile-menu' },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'ul',
          { className: 'profile-menu__list' },
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            'li',
            { className: 'profile-menu__list-item' },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              'button',
              {
                className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('profile-menu__button', {
                  'profile-menu__button--active': currentView === 'dashboard'
                }),
                onClick: function onClick() {
                  return changeView('dashboard');
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_8__["MdPerson"], { className: 'profile-menu__icon' }),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'span',
                { className: 'profile-menu__text' },
                'Dashboard'
              )
            )
          ),
          isAdminVerified(this.props) ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            'li',
            { className: 'profile-menu__list-item' },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              'button',
              {
                className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('profile-menu__button', {
                  'profile-menu__button--active': currentView === 'manageCarousel'
                }),
                onClick: function onClick() {
                  return _this2.props.history.push({ pathname: '/admin/carousel' });
                }
                // disabled
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_8__["MdImage"], { className: 'profile-menu__icon' }),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'span',
                { className: 'profile-menu__text' },
                'Manage Image Carousel'
              )
            )
          ) : null,
          isAdminVerified(this.props) ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            'li',
            { className: 'profile-menu__list-item' },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              'button',
              {
                className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('profile-menu__button', {
                  'profile-menu__button--active': currentView === 'manageSpecs'
                }),
                onClick: function onClick() {
                  return _this2.props.history.push({ pathname: '/admin/products' });
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_8__["MdList"], { className: 'profile-menu__icon' }),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'span',
                { className: 'profile-menu__text' },
                'Manage Product Specifications'
              )
            )
          ) : null,
          isAdminVerified(this.props) ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            'li',
            { className: 'profile-menu__list-item' },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              'button',
              {
                className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('profile-menu__button', {
                  'profile-menu__button--active': currentView === 'manageSeo'
                }),
                onClick: function onClick() {
                  return _this2.props.history.push({ pathname: '/admin/seo' });
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_8__["MdList"], { className: 'profile-menu__icon' }),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'span',
                { className: 'profile-menu__text' },
                'Manage Seo'
              )
            )
          ) : null,
          isAdminVerified(this.props) ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            'li',
            { className: 'profile-menu__list-item' },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              'button',
              {
                className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('profile-menu__button', {
                  'profile-menu__button--active': currentView === 'manageLocations'
                }),
                onClick: function onClick() {
                  return _this2.props.history.push({ pathname: '/admin/locations' });
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_8__["MdList"], { className: 'profile-menu__icon' }),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'span',
                { className: 'profile-menu__text' },
                'Manage Locations'
              )
            )
          ) : null
        )
      );
    }
  }]);

  return ProfileMenu;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

ProfileMenu.propTypes = {
  currentView: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  changeView: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  history: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object
};
ProfileMenu.defaultProps = {};

/* harmony default export */ __webpack_exports__["default"] = (ProfileMenu);

/***/ })

};
//# sourceMappingURL=index.2aafcc30119d9918e134.js.map
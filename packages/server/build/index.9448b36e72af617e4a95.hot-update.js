require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/main-layout.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "html{overflow-x:hidden}#root{position:relative;min-height:100vh;-ms-flex-direction:column;flex-direction:column}#root,.admin-layout{display:-ms-flexbox;display:flex}.admin-layout{background-color:#f9f9f9;height:100vh}.admin-layout__content{-ms-flex-direction:column;flex-direction:column;background-color:#f1f1f1;width:100vw}", "", {"version":3,"sources":["/Users/austinreynolds/Documents/MOD/chf-rcomm/packages/client/src/modules/admin/styles/main-layout.scss"],"names":[],"mappings":"AAEA,KACE,iBAAkB,CACnB,MAKC,kBAAkB,iBAED,0BACjB,qBAAsB,CAEvB,oBANC,oBAAA,YAAa,CAQf,cACE,yBACA,YAAa,CASb,uBACE,0BAAA,sBAAsB,yBACG,WACb,CAEb","file":"main-layout.scss","sourcesContent":["@import './utils/index';\n\nhtml {\n  overflow-x: hidden;\n}\n\n// sass-lint:disable-block no-ids\n#root {\n  display: flex;\n  position: relative;\n  // max-width: 100vw;\n  min-height: 100vh;\n  flex-direction: column;\n  // overflow-x: hidden;\n}\n\n.admin-layout {\n  background-color: $siteBackgroundColor;\n  height: 100vh;\n  display: flex;\n  // &__navbar {\n  //   background-color: $contentBackgroundColor;\n  //   @media (min-width: 1109px) {\n  //     background-color: $headerBackgroundColor;\n  //     height: $headerHeight;\n  //   }\n  // }\n  &__content {\n    flex-direction: column;\n    background-color: #f1f1f1;\n    width: 100vw;\n    // width: calc(100% - 15%);\n  }\n  // &__footer {\n  //   background-color: $footerBackgroundColor;\n  // }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/productspecs.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".admin .profile-view__sidebar{border-right:1px solid;height:100vh}.admin .profile-view__content{height:calc(100vh - 20px);position:relative;padding:0 30px;width:80vw}.admin__tableview{border:1px solid;padding:0 30px 30px}.admin__productspecs{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.admin__productspecs .table{width:100%;font-size:1em}.admin__productspecs .table-dark{background-color:#212529}.admin__productspecs .table tbody,.admin__productspecs .table thead tr th h3{color:#1b1c1c}.admin__productspecs .table tbody tr{border-bottom:1px solid}.admin__productspecs .table tbody tr td div{padding:10px 0}.admin__productspecs .table tbody tr td div img{height:3.125em;width:3.125em}.admin__productspecs .table tbody tr:last-of-type{border-bottom:none}.admin__productspecs .table tbody tr:nth-of-type(odd){background-color:hsla(0,0%,100%,.05)}.admin__searchbox{margin-left:11%;border:2px solid #1b1c1c;width:40%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.admin__searchbox span{padding-left:10px}.admin__loadmore{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.admin__loadmore button{border:1px solid;padding:10px}", "", {"version":3,"sources":["/Users/austinreynolds/Documents/MOD/chf-rcomm/packages/client/src/modules/admin/styles/productspecs.scss"],"names":[],"mappings":"AACA,8BAGM,uBAAuB,YACV,CAJnB,8BAQM,0BAA0B,kBAER,eACQ,UACf,CACZ,kBAGD,iBAAiB,mBACU,CAC5B,qBAGC,oBAAA,aAAa,0BACb,qBAAsB,CAHvB,4BAWG,WAAW,aACG,CAZjB,iCAcK,wBAAyB,CAd9B,6EA8BK,aAAc,CA9BnB,qCAgCO,uBAAwB,CAhC/B,4CAmCW,cAA0B,CAnCrC,gDAqCa,eAAe,aACD,CAtC3B,kDA4CO,kBAAmB,CA5C1B,sDA+CO,oCAAqC,CACtC,kBAQL,gBAAgB,yBACS,UACf,oBACV,aAAa,sBACb,kBAAmB,CALpB,uBAOG,iBAAkB,CACnB,iBAGD,oBAAA,aAAa,qBACb,sBAAuB,CAFxB,wBAKG,iBAAiB,YACJ,CACd","file":"productspecs.scss","sourcesContent":["@import './utils/index';\n.admin {\n  .profile-view {\n    &__sidebar {\n      border-right: solid 1px;\n      height: 100vh;\n    }\n    &__content {\n      // height: 100vh;\n      height: calc(100vh - 20px);\n\n      position: relative;\n      padding: 0px 30px 0px 30px;\n      width: 80vw;\n    }\n  }\n  &__tableview {\n    border: solid 1px;\n    padding: 0px 30px 30px 30px;\n  }\n  &__productspecs {\n    // width: inherit;\n    display: flex;\n    flex-direction: column;\n    // border: solid 1px;\n    // height: 100vh;\n    // overflow-y: scroll;\n    // padding: 30px;\n    // width: calc(100vw - 25vw);\n    // position: relative;\n    .table {\n      width: 100%;\n      font-size: 1em;\n      &-dark {\n        background-color: #212529;\n      }\n      thead {\n        tr {\n          // height: 2em;\n          th {\n            h3 {\n              color: #1b1c1c;\n            }\n          }\n          // th:first-of-type {\n          //   width: 50px;\n          // }\n        }\n      }\n      tbody {\n        color: #1b1c1c;\n        tr {\n          border-bottom: solid 1px;\n          td {\n            div {\n              padding: 10px 0px 10px 0px;\n              img {\n                height: 3.125em;\n                width: 3.125em;\n              }\n            }\n          }\n        }\n        tr:last-of-type {\n          border-bottom: none;\n        }\n        tr:nth-of-type(odd) {\n          background-color: hsla(0,0%,100%,.05);\n        }\n      }\n      &-striped {\n        // color: white;\n      }\n    }\n  }\n  &__searchbox {\n    margin-left: 11%;\n    border: solid 2px #1b1c1c;\n    width: 40%;\n    display: flex;\n    align-items: center;\n    span {\n      padding-left: 10px;\n    }\n  }\n  &__loadmore {\n    display: flex;\n    justify-content: center;\n    button {\n      // height: 40px;\n      border: solid 1px;\n      padding: 10px;\n    }\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../client/src/modules/admin/components/AdminView.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/slicedToArray");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var _AdminLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/admin/components/AdminLayout.jsx");
/* harmony import */ var _profile_components_ProfileMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../client/src/modules/profile/components/ProfileMenu.jsx");
/* harmony import */ var _profile_components_ProfileOverview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/profile/components/ProfileOverview.jsx");
/* harmony import */ var _profile_components_ProfilePassword__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/profile/components/ProfilePassword.jsx");
/* harmony import */ var _profile_components_ProfileAddress__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/profile/components/ProfileAddress.jsx");
/* harmony import */ var _CarouselImages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../client/src/modules/admin/components/CarouselImages/index.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../client/src/modules/admin/components/Menu.jsx");
/* harmony import */ var _profile_components_ManageSpecs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../client/src/modules/profile/components/ManageSpecs.jsx");
/* harmony import */ var _Seo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../client/src/modules/admin/components/Seo/index.js");
/* harmony import */ var _Locations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../client/src/modules/admin/components/Locations/index.js");
/* harmony import */ var _profile_styles_profile_view_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../client/src/modules/profile/styles/profile-view.scss");
/* harmony import */ var _profile_styles_profile_view_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_profile_styles_profile_view_scss__WEBPACK_IMPORTED_MODULE_19__);














// import ManageCarousel from '../../profile/components/ManageCarousel';









// import ProfileView from '../../profile/containers/Profile';

var renderMetaData = function renderMetaData() {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_8___default.a, {
    title: 'Admin',
    meta: [{
      name: 'description',
      content: 'Admin page'
    }]
  });
};
var adminViews = [
// { view: 'manageAdmins', component: ManageAdmins },
{ view: 'manageCarousel', component: _CarouselImages__WEBPACK_IMPORTED_MODULE_14__["default"] }, { view: 'manageSpecs', component: _profile_components_ManageSpecs__WEBPACK_IMPORTED_MODULE_16__["default"] }, { view: 'manageSeo', component: _Seo__WEBPACK_IMPORTED_MODULE_17__["default"] }, { view: 'manageLocations', component: _Locations__WEBPACK_IMPORTED_MODULE_18__["default"] }];

var AdminView = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(AdminView, _React$Component);

  function AdminView(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, AdminView);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (AdminView.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(AdminView)).call(this, props));

    _this.changeView = function (selectedView) {
      return _this.setState({ currentView: selectedView });
    };

    _this.handleProductSelect = function (e) {
      return _this.setState({ selectedProduct: e.target.value });
    };

    _this.renderAdminView = function (viewList) {
      if (!Object(_profile_components_ProfileMenu__WEBPACK_IMPORTED_MODULE_10__["isAdminVerified"])(_this.props)) return null;
      var currentView = _this.state.currentView;

      var _viewList$filter = viewList.filter(function (v) {
        return v.view === currentView;
      }),
          _viewList$filter2 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_viewList$filter, 1),
          selectedView = _viewList$filter2[0];

      if (!selectedView) return null;
      var Component = selectedView.component;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Component, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.state, _this.props));
    };

    _this.state = {
      currentView: 'manageLocations'
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(AdminView, [{
    key: 'render',
    value: function render() {
      var currentView = this.state.currentView;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _AdminLayout__WEBPACK_IMPORTED_MODULE_9__["default"],
        null,
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          'div',
          { className: ' admin profile-view' },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            'aside',
            { className: 'profile-view__sidebar' },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_15__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.state, this.props, { changeView: this.changeView }))
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            'section',
            { className: 'profile-view__content' },
            this.props.children
          )
        )
      );
    }
  }]);

  return AdminView;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AdminView);

/***/ }),

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
          changeView = _props.changeView;

      console.log('MENU PROPS:', this.props);
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
  changeView: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
ProfileMenu.defaultProps = {};

/* harmony default export */ __webpack_exports__["default"] = (ProfileMenu);

/***/ }),

/***/ "../client/src/modules/admin/components/ProductSpecs/ProductTable.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_components_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../client/src/modules/common/components/web/index.jsx");





var ProductTable = function ProductTable(_ref) {
  var dataSource = _ref.dataSource,
      columns = _ref.columns,
      props = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ['dataSource', 'columns']);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_common_components_web__WEBPACK_IMPORTED_MODULE_3__["Table"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, { striped: false, dataSource: dataSource, columns: columns }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductTable);

/***/ }),

/***/ "../client/src/modules/admin/components/ProductSpecs/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../client/src/modules/admin/components/ProductSpecs/ProductTable.jsx");



var ProductSpecs = function ProductSpecs(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductTable__WEBPACK_IMPORTED_MODULE_1__["default"], props);
};

/* harmony default export */ __webpack_exports__["default"] = (ProductSpecs);

/***/ }),

/***/ "../client/src/modules/admin/components/Seo/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/core-js/object/keys");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/slicedToArray");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/defineProperty");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("ramda");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _profile_styles_manage_specs_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../client/src/modules/profile/styles/manage-specs.scss");
/* harmony import */ var _profile_styles_manage_specs_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_profile_styles_manage_specs_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _common_components_global_components_Loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../client/src/modules/common/components/global/components/Loader.jsx");
/* harmony import */ var _SeoForm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../client/src/modules/admin/components/Seo/SeoForm.jsx");
/* harmony import */ var _styles_forms_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../client/src/modules/admin/styles/forms.scss");
/* harmony import */ var _styles_forms_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_styles_forms_scss__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("../client/src/modules/common/graphql/VendorsQuery.graphql");
/* harmony import */ var _common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _graphql_ProductSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("../client/src/modules/admin/graphql/ProductSeoQuery.graphql");
/* harmony import */ var _graphql_ProductSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_graphql_ProductSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _graphql_UploadSeoContent_graphql__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("../client/src/modules/admin/graphql/UploadSeoContent.graphql");
/* harmony import */ var _graphql_UploadSeoContent_graphql__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_graphql_UploadSeoContent_graphql__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _graphql_CollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("../client/src/modules/admin/graphql/CollectionsQuery.graphql");
/* harmony import */ var _graphql_CollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_graphql_CollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _graphql_VendorSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("../client/src/modules/admin/graphql/VendorSeoQuery.graphql");
/* harmony import */ var _graphql_VendorSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_graphql_VendorSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _graphql_CollectionSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("../client/src/modules/admin/graphql/CollectionSeoQuery.graphql");
/* harmony import */ var _graphql_CollectionSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_graphql_CollectionSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _graphql_UploadSeo_graphql__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("../client/src/modules/admin/graphql/UploadSeo.graphql");
/* harmony import */ var _graphql_UploadSeo_graphql__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_graphql_UploadSeo_graphql__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _common_graphql_AddProductData_graphql__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("../client/src/modules/common/graphql/AddProductData.graphql");
/* harmony import */ var _common_graphql_AddProductData_graphql__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_AddProductData_graphql__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _common_graphql_UpdateProductData_graphql__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("../client/src/modules/common/graphql/UpdateProductData.graphql");
/* harmony import */ var _common_graphql_UpdateProductData_graphql__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_UpdateProductData_graphql__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _common_schema__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("../client/src/modules/common/schema/index.js");














var _this3 = undefined;





// import classnames from 'classnames';
// import { Formik, Field, Form } from 'formik';
// import { MdClose, MdSave } from 'react-icons/md';















// import PRODUCT_DATA_QUERY from '../../../common/graphql/ProductDataQuery.graphql';



// import { prodFeatures, prodSpecs } from '../../../products/components/SingleProductView';

var selectProdString = 'Select a product';
var selectSpecString = 'Select a specification';
var selectContent = 'Select a category';
var selectBrandString = 'Select a brand';
var selectCollectionString = 'Select a collection';
// const fullSpecs = [...prodSpecs, ...prodFeatures];
var clearedSubmissionResult = { submissionError: null, submissionSuccess: null };

var ManageSeo = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_12___default()(ManageSeo, _React$Component);

  function ManageSeo() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9___default()(this, ManageSeo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11___default()(this, (_ref = ManageSeo.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default()(ManageSeo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentEdit: {},
      selectedProduct: selectProdString,
      selectedBrand: selectBrandString,
      selectedCollection: selectCollectionString,
      selectedSpec: selectSpecString,
      selectedCategory: selectContent,
      currentCategoryValues: null,
      categories: ['Products', 'Brands', 'Collections'],
      specInput: '',
      submissionError: null,
      submissionSuccess: null
    }, _this.loadProductSeo = function () {
      var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee(handle) {
        var _ref3, productData;

        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.props.refetchProductData({ handle: handle });

              case 2:
                _ref3 = _context.sent;
                productData = _ref3.data.productData;

                // console.log('PRODUCT', productData);
                _this.setState({ currentCategoryValues: productData.seo });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.loadCollectionSeo = function () {
      var _ref4 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee2(handle) {
        var _ref5, collectionData;

        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this.props.refetchCollectionSeo({ handle: handle });

              case 2:
                _ref5 = _context2.sent;
                collectionData = _ref5.data.collectionData;

                // console.log('COLLECTION loaded::', collectionData);
                _this.setState({ currentCategoryValues: collectionData.seo });

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }(), _this.loadBrandSeo = function () {
      var _ref6 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee3(handle) {
        var _ref7, vendorData;

        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this.props.refetchBrandSeo({ handle: handle });

              case 2:
                _ref7 = _context3.sent;
                vendorData = _ref7.data.vendorData;

                // console.log('Brand::', vendorData);
                _this.setState({ currentCategoryValues: vendorData.seo });

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      }));

      return function (_x3) {
        return _ref6.apply(this, arguments);
      };
    }(), _this.handleProductSelect = function (e) {
      return _this.setState(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5___default()({
        selectedProduct: e.target.value,
        selectedSpec: selectSpecString,
        currentEdit: {}
      }, clearedSubmissionResult));
    }, _this.handleCategorySelect = function (e) {
      _this.setState({ selectedCategory: e.target.value.toLowerCase() });
    }, _this.handleSpecSelect = function (e) {
      return _this.setState(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5___default()({
        selectedSpec: e.target.value
      }, clearedSubmissionResult));
    }, _this.handleSpecInput = function (e) {
      var prevEdit = _this.state.currentEdit;
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState({ currentEdit: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5___default()({}, prevEdit, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()({}, name, value)) });
    }, _this.submitSpecs = function () {
      var _ref8 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee4(e) {
        var _this$props, productData, addProductData, updateProductData, products, _this$state, currentEdit, selectedProduct, currentSpecs, _Object$assign, __typename, id, specsToSubmit, dataUpdateResult, _products$edges$filte, _products$edges$filte2, sfyData, _sfyData$node, title, vendor, variantEdges, _sku, updatedSubmission, _dataUpdateResult$pro, product_name, handle;

        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                e.preventDefault();

                _this$props = _this.props, productData = _this$props.productData, addProductData = _this$props.addProductData, updateProductData = _this$props.updateProductData, products = _this$props.sfy_shop.products;
                _this$state = _this.state, currentEdit = _this$state.currentEdit, selectedProduct = _this$state.selectedProduct;
                currentSpecs = productData === null ? {} : productData;
                _Object$assign = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()(currentSpecs, currentEdit, {
                  handle: selectedProduct
                }), __typename = _Object$assign.__typename, id = _Object$assign.id, specsToSubmit = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(_Object$assign, ['__typename', 'id']);
                dataUpdateResult = void 0;

                if (!(productData === null)) {
                  _context4.next = 16;
                  break;
                }

                // If adding a new product data to rcomm db, add sku and product name from Shopify
                _products$edges$filte = products.edges.filter(function (_ref9) {
                  var node = _ref9.node;
                  return node.handle === selectedProduct;
                }), _products$edges$filte2 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_products$edges$filte, 1), sfyData = _products$edges$filte2[0];
                _sfyData$node = sfyData.node, title = _sfyData$node.title, vendor = _sfyData$node.vendor, variantEdges = _sfyData$node.variants.edges;
                _sku = variantEdges[0].node.sku;
                updatedSubmission = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5___default()({}, specsToSubmit, { product_name: vendor + ' ' + title, sku: _sku });
                _context4.next = 13;
                return addProductData(updatedSubmission);

              case 13:
                dataUpdateResult = _context4.sent;
                _context4.next = 19;
                break;

              case 16:
                _context4.next = 18;
                return updateProductData(specsToSubmit);

              case 18:
                dataUpdateResult = _context4.sent;

              case 19:
                if (dataUpdateResult) {
                  _context4.next = 21;
                  break;
                }

                return _context4.abrupt('return');

              case 21:
                if (!('errors' in dataUpdateResult)) {
                  _context4.next = 23;
                  break;
                }

                return _context4.abrupt('return', _this.setState({ submissionError: dataUpdateResult.errors[0] }));

              case 23:
                if (!('productData' in dataUpdateResult && dataUpdateResult.productData)) {
                  _context4.next = 27;
                  break;
                }

                _dataUpdateResult$pro = dataUpdateResult.productData, product_name = _dataUpdateResult$pro.product_name, handle = _dataUpdateResult$pro.handle;

                _this.props.refetchProductData({ handle: handle });
                return _context4.abrupt('return', _this.setState({
                  submissionSuccess: 'Successfully updated ' + product_name + '!',
                  currentEdit: {},
                  selectedSpec: selectSpecString
                }));

              case 27:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this2);
      }));

      return function (_x4) {
        return _ref8.apply(this, arguments);
      };
    }(), _this.renderInputValue = function () {
      var _this$state2 = _this.state,
          selectedSpec = _this$state2.selectedSpec,
          currentEdit = _this$state2.currentEdit;
      var productData = _this.props.productData;

      if (selectedSpec in currentEdit) return currentEdit[selectedSpec];else if (productData && selectedSpec in productData) return productData[selectedSpec];else return '';
    }, _this.handleCancelEdit = function () {
      var _this$state3 = _this.state,
          currentEdit = _this$state3.currentEdit,
          selectedSpec = _this$state3.selectedSpec;

      if (selectedSpec in currentEdit) {
        var removed = currentEdit[selectedSpec],
            rest = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(currentEdit, [selectedSpec]);

        _this.setState({ currentEdit: rest });
      }
      return;
    }, _this.isDisabled = function () {
      var _this$props2 = _this.props,
          loadingProductData = _this$props2.loadingProductData,
          productData = _this$props2.productData;

      if (!loadingProductData && !productData) return false;
      if (babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_this.state.currentEdit).length > 0) return false;
      return true;
    }, _this.validateTitle = function (values, errors) {
      if (!values.title) {
        errors.title = 'Required';
      } else if (values.title.length > 60) {
        errors.title = 'The title length should be under 60 characters';
      }
      return { values: values, errors: errors };
    }, _this.validateDescription = function (_ref10) {
      var values = _ref10.values,
          errors = _ref10.errors;

      if (!values.description) {
        errors.description = 'Required';
      } else if (values.description.length > 320) {
        errors.description = 'Content descriptions should be 320 characters or less';
      }
      return { values: values, errors: errors };
    }, _this.validateKeyWords = function (_ref11) {
      var values = _ref11.values,
          errors = _ref11.errors;

      if (!values.keywords) {
        errors.keywords = 'Required';
      }
      return { values: values, errors: errors };
    }, _this.validateAll = function (values) {
      var errors = {};
      var composeValidation = Object(ramda__WEBPACK_IMPORTED_MODULE_16__["compose"])(_this.validateKeyWords, _this.validateDescription, _this.validateTitle);
      var validation = composeValidation(values, errors);
      return validation.errors;
    }, _this.handleBrandSelect = function (e) {
      _this.setState({ selectedBrand: e.target.value });
    }, _this.handleCollectionSelect = function (e) {
      _this.setState({ selectedCollection: e.target.value });
    }, _this.renderSelect = function (category) {
      var _this$state4 = _this.state,
          selectedProduct = _this$state4.selectedProduct,
          selectedBrand = _this$state4.selectedBrand,
          selectedCollection = _this$state4.selectedCollection;
      var _this$props3 = _this.props,
          vendors = _this$props3.vendors,
          collections = _this$props3.collections;

      switch (category) {
        case 'products':
          {
            var products = _this.props.sfy_shop.products.edges;
            return products ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
              'div',
              null,
              react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                'label',
                { htmlFor: 'product-select' },
                'Please select a product to change seo values'
              ),
              react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                'select',
                { id: 'product-select', onChange: _this.handleProductSelect, value: selectedProduct },
                react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                  'option',
                  { value: selectProdString, disabled: true },
                  selectProdString
                ),
                products ? products.map(function (_ref12) {
                  var node = _ref12.node;
                  return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                    'option',
                    { key: node.handle, value: node.handle },
                    node.vendor + ': ' + node.title
                  );
                }) : null
              )
            ) : null;
          }
        case 'brands':
          {
            return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
              'div',
              null,
              react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                'label',
                { htmlFor: 'product-select' },
                'Please select a brand to change seo values'
              ),
              react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                'select',
                { id: 'product-select', onChange: _this.handleBrandSelect, value: selectedBrand },
                react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                  'option',
                  { value: selectBrandString, disabled: true },
                  selectBrandString
                ),
                vendors ? vendors.map(function (_ref13) {
                  var handle = _ref13.handle,
                      name = _ref13.name;
                  return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                    'option',
                    { key: handle, value: handle },
                    '' + name
                  );
                }) : null
              )
            );
          }
        case 'collections':
          {
            return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
              'div',
              null,
              react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                'label',
                { htmlFor: 'product-select' },
                'Please select a collection to change seo values'
              ),
              react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                'select',
                { id: 'product-select', onChange: _this.handleCollectionSelect, value: selectedCollection },
                react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                  'option',
                  { value: selectCollectionString, disabled: true },
                  selectCollectionString
                ),
                collections ? collections.map(function (_ref14) {
                  var node = _ref14.node;
                  return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                    'option',
                    { key: node.handle, value: node.handle },
                    '' + node.title
                  );
                }) : null
              )
            );
          }
        default:
          return null;
      }
    }, _this.currentSeoData = function () {
      return _this.state.currentCategoryValues;
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10___default()(ManageSeo, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // const { selectedCategory } = this.state;
      if (prevState.selectedProduct !== this.state.selectedProduct) {
        this.loadProductSeo(this.state.selectedProduct);
      }
      if (this.state.selectedCategory === 'brands' && prevState.selectedBrand !== this.state.selectedBrand) {
        this.loadBrandSeo(this.state.selectedBrand);
        // console.log('brand', brand);
      }
      if (this.state.selectedCategory === 'collections' && prevState.selectedCollection !== this.state.selectedCollection) {
        this.loadCollectionSeo(this.state.selectedCollection);
      }
      // if (prevState.selectedCategory !== selectedCategory) {
      //   console.log('SELECTED CAT IS DIFF', selectedCategory);
      //   // const { productsLoading, sfy_shop, productData } = this.props;
      //   console.log('THE PROPS::', this.props);
      // }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          selectedProduct = _state.selectedProduct,
          selectedBrand = _state.selectedBrand,
          selectedCollection = _state.selectedCollection,
          selectedCategory = _state.selectedCategory,
          categories = _state.categories,
          currentCategoryValues = _state.currentCategoryValues;
      var _props = this.props,
          productsLoading = _props.productsLoading,
          sfy_shop = _props.sfy_shop;
      // console.log('THE PROPS::', this.props);

      var products = null;
      // let seo = null;
      if (!productsLoading && sfy_shop && 'products' in sfy_shop) {
        if (sfy_shop.products.edges.length > 0) {
          products = sfy_shop.products.edges;
        }
      }
      // if (productData) {
      //   seo = productData.seo;
      // }
      if (!products) {
        return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_common_components_global_components_Loader__WEBPACK_IMPORTED_MODULE_18__["default"], null);
      }

      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
        'section',
        { className: 'manage-specs' },
        react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
          'div',
          { className: 'form__select-group' },
          react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
            'label',
            { htmlFor: 'product-select' },
            'Please select content category to update'
          ),
          react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
            'select',
            { id: 'product-select', onChange: this.handleCategorySelect, value: selectedCategory },
            react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
              'option',
              { value: selectedCategory, disabled: true },
              selectedCategory
            ),
            categories.map(function (category) {
              return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                'option',
                { key: category, value: category },
                category
              );
            })
          )
        ),
        this.renderSelect(selectedCategory),
        react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_SeoForm__WEBPACK_IMPORTED_MODULE_19__["default"], {
          seo: this.currentSeoData(),
          validateAll: this.validateAll,
          uploadSeoContent: this.props.uploadSeoContent,
          uploadSeo: this.props.uploadSeo,
          selectedProduct: selectedProduct,
          selectedBrand: selectedBrand,
          selectedCollection: selectedCollection,
          selectedCategory: selectedCategory,
          valuesAvailable: currentCategoryValues
        })
      );
    }
  }]);

  return ManageSeo;
}(react__WEBPACK_IMPORTED_MODULE_13___default.a.Component);

var ManageSeoWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_15__["compose"])(react_apollo__WEBPACK_IMPORTED_MODULE_15__["withApollo"], Object(_common_schema__WEBPACK_IMPORTED_MODULE_30__["ADMIN_PRODUCTS_QUERY"])(), Object(react_apollo__WEBPACK_IMPORTED_MODULE_15__["graphql"])(_graphql_VendorSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_25___default.a, {
  options: function options() {
    return { variables: { handle: '' } };
  },
  props: function props(_ref15) {
    var data = _ref15.data;

    // console.log('VENDOR SEO Data::', data);
    var loading = data.loading,
        error = data.error,
        refetch = data.refetch;

    if (error) {
      return { brandSeoError: error };
    }
    if (!loading) {
      return { refetchBrandSeo: refetch };
    }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_15__["graphql"])(_graphql_CollectionSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_26___default.a, {
  options: function options() {
    return { variables: { handle: '' } };
  },
  props: function props(_ref16) {
    var data = _ref16.data;

    // console.log('COLLECITON SEO DATA::', data);
    var loading = data.loading,
        error = data.error,
        refetch = data.refetch;


    if (error) {
      return { collectionSeoError: error };
    }
    if (!loading) {
      return { loadingCollectionSeo: loading, refetchCollectionSeo: refetch };
    }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_15__["graphql"])(_graphql_CollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_24___default.a, {
  options: function options() {
    return { variables: { first: 100 } };
  },
  props: function props(_ref17) {
    var data = _ref17.data;

    // console.log('COLLECTIONS QUERY DATA::', data);
    var loading = data.loading,
        admin_collections = data.admin_collections;

    if (!loading) {
      var edges = admin_collections.edges;

      return { loadingCollections: loading, collections: edges };
    }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_15__["graphql"])(_graphql_ProductSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_22___default.a, {
  options: function options() {
    return { variables: { handle: '' }, fetchPolicy: 'network-only' };
  },
  props: function props(_ref18) {
    var data = _ref18.data;

    // console.log('PRODUCTS SEO DATA', data);
    var loadingProductData = data.loading,
        error = data.error,
        productData = data.productData,
        refetchProductData = data.refetch;

    if (error) throw new Error('Error in Related Prodcuts Query: ' + error);
    return { loadingProductData: loadingProductData, productData: productData, refetchProductData: refetchProductData };
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_15__["graphql"])(_graphql_UploadSeo_graphql__WEBPACK_IMPORTED_MODULE_27___default.a, {
  props: function props(_ref19) {
    var mutate = _ref19.mutate;
    return {
      uploadSeo: function () {
        var _ref20 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee5(seoData) {
          var _ref21, data;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return mutate({ variables: seoData });

                case 2:
                  _ref21 = _context5.sent;
                  data = _ref21.data;
                  return _context5.abrupt('return', data.uploadSeo);

                case 5:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this3);
        }));

        return function uploadSeo(_x5) {
          return _ref20.apply(this, arguments);
        };
      }()
    };
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_15__["graphql"])(_graphql_UploadSeoContent_graphql__WEBPACK_IMPORTED_MODULE_23___default.a, {
  props: function props(_ref22) {
    var mutate = _ref22.mutate;
    return {
      uploadSeoContent: function () {
        var _ref23 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee6(seoData) {
          var _ref24, updateProductSeo;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return mutate({ variables: { seo: seoData } });

                case 2:
                  _ref24 = _context6.sent;
                  updateProductSeo = _ref24.data.updateProductSeo;
                  return _context6.abrupt('return', updateProductSeo);

                case 5:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, _this3);
        }));

        return function uploadSeoContent(_x6) {
          return _ref23.apply(this, arguments);
        };
      }()
    };
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_15__["graphql"])(_common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_21___default.a, {
  props: function props(_ref25) {
    var _ref25$data = _ref25.data,
        loading = _ref25$data.loading,
        error = _ref25$data.error,
        vendors = _ref25$data.vendors;

    if (error) throw new Error('Error in Vendors Query: ' + error);
    return { loading: loading, vendors: vendors };
  }
}), Object(_common_schema__WEBPACK_IMPORTED_MODULE_30__["MODIFY_PRODUCT_DATA"])(_common_graphql_AddProductData_graphql__WEBPACK_IMPORTED_MODULE_28___default.a, 'addProductData'), Object(_common_schema__WEBPACK_IMPORTED_MODULE_30__["MODIFY_PRODUCT_DATA"])(_common_graphql_UpdateProductData_graphql__WEBPACK_IMPORTED_MODULE_29___default.a, 'updateProductData'))(ManageSeo);

ManageSeo.propTypes = {
  uploadSeo: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.func,
  refetchBrandSeo: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.func,
  refetchCollectionSeo: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.func,
  vendors: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.array,
  collections: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.array,
  productsLoading: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.bool,
  products: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.array,
  productSpecs: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.array,
  refetchProductData: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.func,
  sfy_shop: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.object,
  productData: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.object,
  loadingProductData: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.bool,
  uploadSeoContent: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.func
};

/* harmony default export */ __webpack_exports__["default"] = (ManageSeoWithApollo);

/***/ }),

/***/ "../client/src/modules/admin/containers/Products.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/core-js/json/stringify");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__);
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_AdminView__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../client/src/modules/admin/components/AdminView.web.jsx");
/* harmony import */ var _common_components_global_components_Loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../client/src/modules/common/components/global/components/Loader.jsx");
/* harmony import */ var _styles_productspecs_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../client/src/modules/admin/styles/productspecs.scss");
/* harmony import */ var _styles_productspecs_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_styles_productspecs_scss__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_ProductSpecs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../client/src/modules/admin/components/ProductSpecs/index.jsx");
/* harmony import */ var _graphql_Products_graphql__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("../client/src/modules/admin/graphql/Products.graphql");
/* harmony import */ var _graphql_Products_graphql__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_graphql_Products_graphql__WEBPACK_IMPORTED_MODULE_21__);












var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4___default()(['\n      query admin_products($first: Int, $after: String, $query: String) {\n        admin_products(first: $first, after: $after, query: $query) {\n          edges {\n            cursor\n            node {\n              vendor\n              title\n              featuredImage {\n                originalSrc\n              }\n            }\n          }\n        }\n      }\n    '], ['\n      query admin_products($first: Int, $after: String, $query: String) {\n        admin_products(first: $first, after: $after, query: $query) {\n          edges {\n            cursor\n            node {\n              vendor\n              title\n              featuredImage {\n                originalSrc\n              }\n            }\n          }\n        }\n      }\n    ']);












// import { ADMIN_PRODUCTS_QUERY /*MODIFY_PRODUCT_DATA*/ } from '../../common/schema';


var columns = [{
  title: '',
  dataIndex: 'node',
  key: 'featuredImage',
  // eslint-disable-next-line
  render: function render(image, record) {
    return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
      'div',
      null,
      react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement('img', { src: image ? image.originalSrc : '', alt: '' })
    );
  }
}, {
  title: react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
    'a',
    { href: '#' },
    react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
      'h3',
      null,
      'Product'
    )
  ),
  dataIndex: 'node',
  key: 'title',
  // eslint-disable-next-line
  render: function render(text, record) {
    return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
      'div',
      null,
      text
    );
  }
}, {
  title: react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
    'a',
    { href: '#' },
    react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
      'h3',
      null,
      'Vendor'
    )
  ),
  dataIndex: 'node',
  key: 'vendor',
  // eslint-disable-next-line
  render: function render(text, record) {
    return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
      'div',
      null,
      text
    );
  }
}, {
  dataIndex: 'node',
  key: 'handle',
  // eslint-disable-next-line
  render: function render(text, record) {
    return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
      'div',
      null,
      react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
        react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Link"],
        { to: { pathname: '/admin/products/' + record.node.handle } },
        'Edit'
      )
    );
  }
}];
var LoadMore = function LoadMore(_ref) {
  var loadMore = _ref.loadMore;

  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
    'div',
    { className: 'admin__loadmore' },
    react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
      'button',
      { onClick: function onClick() {
          return loadMore();
        } },
      'Load More'
    )
  );
};
LoadMore.propTypes = {
  loadMore: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func
};
var SearchBar = function SearchBar(_ref2) {
  var handleSearch = _ref2.handleSearch,
      value = _ref2.value;

  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
    'div',
    { className: 'admin__searchbox' },
    react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
      'span',
      null,
      react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_16__["MdSearch"], { size: 20 })
    ),
    react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement('input', { type: 'text', placeholder: 'Search', onChange: handleSearch, value: value })
  );
};
SearchBar.propTypes = {
  handleSearch: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func,
  value: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string
};

var Products = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10___default()(Products, _Component);

  function Products(props) {
    var _this2 = this;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, Products);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default()(this, (Products.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default()(Products)).call(this, props));

    _this.searchQuery = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
      var searchValue, query, _ref4, data, admin_products;

      return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              searchValue = _this.state.searchValue;
              query = graphql_tag__WEBPACK_IMPORTED_MODULE_15___default()(_templateObject);
              _context.next = 4;
              return _this.props.client.query({
                query: query,
                fetchPolicy: 'cache-first',
                variables: { first: 20, query: 'title:' + searchValue + '*' }
              });

            case 4:
              _ref4 = _context.sent;
              data = _ref4.data;
              admin_products = data.admin_products;

              _this.setState({ filteredProducts: admin_products });

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }));

    _this.handleSearch = function (e) {
      _this.setState({ searchValue: e.target.value });
    };

    _this.state = {
      searchActive: false,
      searchValue: '',
      filteredProducts: null
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(Products, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var prevSearch = prevState.searchValue;
      var currSearch = this.state.searchValue;
      if (currSearch.length > 0 && currSearch !== prevSearch) {
        this.setState({ searchActive: true });
        this.searchQuery();
        return;
      }
      if (currSearch !== prevSearch && currSearch.length == 0) {
        return this.setState({ searchActive: false, filteredProducts: null });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          productsLoading = _props.productsLoading,
          admin_products = _props.admin_products;
      var _state = this.state,
          searchActive = _state.searchActive,
          searchValue = _state.searchValue,
          filteredProducts = _state.filteredProducts;

      if (productsLoading) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
          _components_AdminView__WEBPACK_IMPORTED_MODULE_17__["default"],
          this.props,
          react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_common_components_global_components_Loader__WEBPACK_IMPORTED_MODULE_18__["default"], null)
        );
      }
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
        _components_AdminView__WEBPACK_IMPORTED_MODULE_17__["default"],
        this.props,
        react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
          'h2',
          null,
          'Product Specifications'
        ),
        react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
          'div',
          { className: 'admin__tableview' },
          react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
            'div',
            { className: 'admin__productspecs' },
            react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(SearchBar, { handleSearch: this.handleSearch, value: searchValue }),
            searchActive && filteredProducts ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_ProductSpecs__WEBPACK_IMPORTED_MODULE_20__["default"], { dataSource: filteredProducts.edges, columns: columns }) : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_ProductSpecs__WEBPACK_IMPORTED_MODULE_20__["default"], { dataSource: admin_products.edges, columns: columns })
          ),
          react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(LoadMore, { loadMore: this.props.loadMore })
        )
      );
    }
  }]);

  return Products;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

var ProductsApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_14__["compose"])(react_apollo__WEBPACK_IMPORTED_MODULE_14__["withApollo"], Object(react_apollo__WEBPACK_IMPORTED_MODULE_14__["graphql"])(_graphql_Products_graphql__WEBPACK_IMPORTED_MODULE_21___default.a, {
  options: function options() {
    return {
      variables: { first: 50 }
    };
  },
  props: function props(_ref5) {
    var data = _ref5.data;

    console.log('DATA;::', data);
    var loading = data.loading,
        error = data.error,
        admin_products = data.admin_products,
        variables = data.variables,
        fetchMore = data.fetchMore;

    if (error) {
      throw new Error(error);
    }
    if (loading) {
      return { productsLoading: loading };
    }
    if (!loading && admin_products) {
      var currEndCursor = void 0;
      var hasNextPage = void 0;
      var hasPreviousPage = void 0;
      var edges = admin_products.edges;

      if (edges.length > 0) {
        currEndCursor = edges[edges.length - 1].cursor;
      }
      hasNextPage = admin_products.pageInfo.hasNextPage;
      hasPreviousPage = admin_products.pageInfo.hasPreviousPage;
      console.log('Curr end cursor::', currEndCursor);
      var loadMore = function loadMore() {
        var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
        var after = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currEndCursor;

        var updatedVars = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, variables, { after: after, first: first });
        console.log('UPDATED VARS::', updatedVars);
        return fetchMore({
          variables: updatedVars,
          updateQuery: function updateQuery(prevResult, _ref6) {
            var fetchMoreResult = _ref6.fetchMoreResult;

            console.log('PREVRESULT:', prevResult);
            if (fetchMoreResult.admin_products.edges.length === 0) return prevResult;
            var updatedResult = JSON.parse(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(prevResult));
            console.log('PREV RESULT STRING', updatedResult);
            // const updatedResult = Object.assign({}, prevResult);
            updatedResult.admin_products.edges = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(prevResult.admin_products.edges), babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(fetchMoreResult.admin_products.edges));
            //
            updatedResult.pageInfo = fetchMoreResult.admin_products.pageInfo;
            // updatedResult.admin_products.pageInfo = fetchMoreResult.admin_products.pageInfo;
            // console.log('udpatedres', updatedResult);
            // const update = Object.assign({}, prevResult, {
            //   admin_products: {
            //     edges: [...prevResult.admin_products.edges, ...fetchMoreResult.admin_products.edges],
            //     pageInfo: fetchMoreResult.admin_products.pageInfo
            //     // __typename: prevResult.admin_products.__typename
            //   },
            //   __typename: prevResult.admin_products.__typename
            // });
            console.log('UPDATE::', updatedResult);
            return updatedResult;
          }
        });
      };
      return {
        productsLoading: loading,
        admin_products: admin_products,
        loadMore: loadMore,
        products: {
          currEndCursor: currEndCursor,
          hasNextPage: hasNextPage,
          hasPreviousPage: hasPreviousPage
        }
      };
    }
  }
}))(Products);

/* harmony default export */ __webpack_exports__["default"] = (ProductsApollo);

/***/ }),

/***/ "../client/src/modules/admin/graphql/Products.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"admin_products"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"admin_products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"handle"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"vendor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"originalSrc"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"transformedSrc"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"maxHeight"},"value":{"kind":"IntValue","value":"100"}}],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":406}};
    doc.loc.source = {"body":"query admin_products($first: Int, $after: String, $query: String) {\n  admin_products(first: $first, after: $after, query: $query) {\n    edges {\n      cursor\n      node {\n        handle\n        title\n        vendor\n        featuredImage {\n          originalSrc\n          transformedSrc(maxWidth: 100, maxHeight:100)\n        }\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set(opRefs);
      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["admin_products"] = oneQuery(doc, "admin_products");
        


/***/ }),

/***/ "../client/src/modules/admin/index.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_Dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../client/src/modules/admin/containers/Dashboard.jsx");
/* harmony import */ var _containers_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../client/src/modules/admin/containers/Carousel.jsx");
/* harmony import */ var _containers_ProductSpecs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../client/src/modules/admin/containers/ProductSpecs.jsx");
/* harmony import */ var _containers_Seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../client/src/modules/admin/containers/Seo.jsx");
/* harmony import */ var _containers_Locations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../client/src/modules/admin/containers/Locations.jsx");
/* harmony import */ var _containers_Location__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../client/src/modules/admin/containers/Location.jsx");
/* harmony import */ var _containers_Products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../client/src/modules/admin/containers/Products.jsx");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../client/src/modules/admin/reducers/index.js");
/* harmony import */ var _user_containers_Auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/user/containers/Auth.web.jsx");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../client/src/modules/connector.ts");

// import { Route } from 'react-router-dom';







// import Products from './containers/Products';






/* harmony default export */ __webpack_exports__["default"] = (new _connector__WEBPACK_IMPORTED_MODULE_10__["default"]({
  route: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_9__["AuthRoute"], { exact: true, path: '/admin/dashboard', role: ['admin'], component: _containers_Dashboard__WEBPACK_IMPORTED_MODULE_1__["default"] }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_9__["AuthRoute"], { exact: true, path: '/admin/carousel', role: ['admin'], component: _containers_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"] }),
  // <AuthRoute exact path="/admin/product-specs" role={['admin']} component={ProductSpecs} />,
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_9__["AuthRoute"], { exact: true, path: '/admin/seo', role: ['admin'], component: _containers_Seo__WEBPACK_IMPORTED_MODULE_4__["default"] }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_9__["AuthRoute"], { exact: true, path: '/admin/locations', role: ['admin'], component: _containers_Locations__WEBPACK_IMPORTED_MODULE_5__["default"] }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_9__["AuthRoute"], { exact: true, path: '/admin/locations/:location_handle', role: ['admin'], component: _containers_Location__WEBPACK_IMPORTED_MODULE_6__["default"] }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_9__["AuthRoute"], { exact: true, path: '/admin/products', role: ['admin'], component: _containers_Products__WEBPACK_IMPORTED_MODULE_7__["default"] }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_9__["AuthRoute"], { exact: true, path: '/admin/products/:product', role: ['admin'], component: _containers_ProductSpecs__WEBPACK_IMPORTED_MODULE_3__["default"] })],
  reducer: { admin: _reducers__WEBPACK_IMPORTED_MODULE_8__["default"] }
}));

/***/ }),

/***/ "../client/src/modules/admin/styles/productspecs.scss":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/productspecs.scss");
    var insertCss = __webpack_require__("../../node_modules/isomorphic-style-loader/lib/insertCss.js");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if ( true && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/productspecs.scss", function() {
        content = __webpack_require__("../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/productspecs.scss");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "../client/src/modules/common/components/web/ui-bootstrap/components/Table.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);





var renderHead = function renderHead(columns) {
  return columns.map(function (_ref, idx) {
    var title = _ref.title,
        dataIndex = _ref.dataIndex,
        renderHeader = _ref.renderHeader,
        key = _ref.key;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      'th',
      { key: key + idx, className: 'w-' + (columns.length === 2 ? 100 : 100 / columns.length) },
      renderHeader ? renderHeader(title, dataIndex) : title
    );
  });
};

var renderBody = function renderBody(columns, dataSource) {
  return dataSource.map(function (entry) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      'tr',
      { key: entry.id },
      renderData(columns, entry)
    );
  });
};

var renderData = function renderData(columns, entry) {
  return columns.map(function (_ref2, idx) {
    var dataIndex = _ref2.dataIndex,
        render = _ref2.render,
        key = _ref2.key;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      'td',
      { key: key + idx },
      render ? render(entry[dataIndex][key], entry) : entry[dataIndex]
    );
  });
};

var Table = function Table(_ref3) {
  var dataSource = _ref3.dataSource,
      columns = _ref3.columns,
      props = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref3, ['dataSource', 'columns']);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    reactstrap__WEBPACK_IMPORTED_MODULE_3__["Table"],
    props,
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      'thead',
      null,
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        'tr',
        null,
        renderHead(columns)
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      'tbody',
      null,
      renderBody(columns, dataSource)
    )
  );
};

Table.propTypes = {
  dataSource: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  columns: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "../client/src/modules/common/graphql/UpdateProductData.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProductData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductDataInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProductData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"product_name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"handle"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"shock_absorption"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"console"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"user_ids"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"workouts"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hrt_monitoring"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"stride_technology"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"power"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"design"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"drive_system"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"handlebars"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"seat"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"pedals"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"frame"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"finish"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"motion"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"exercises"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"weight_stack"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"included_accessories"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"optional_weight_stack"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"running_area"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"motor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"speed"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"incline"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"resistance_levels"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"resistance_system"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"stride"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"max_user_weight"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"ramp"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"stored_vertical_height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"seat_floor_distance"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"warranty"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"message"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":766}};
    doc.loc.source = {"body":"\nmutation updateProductData($input: ProductDataInput!) {\n  updateProductData(input: $input) {\n    productData {\n      id\n      sku\n      product_name\n      handle\n      shock_absorption\n      console\n      user_ids\n      workouts\n      hrt_monitoring\n      stride_technology\n      power\n      design\n      drive_system\n      handlebars\n      seat\n      pedals\n      frame\n      finish\n      motion\n      exercises\n      weight_stack\n      included_accessories\n      optional_weight_stack\n      running_area\n      motor\n      speed\n      incline\n      resistance_levels\n      resistance_system\n      stride\n      max_user_weight\n      ramp\n      stored_vertical_height\n      seat_floor_distance\n      warranty\n    }\n    errors {\n      field\n      message\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set(opRefs);
      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["updateProductData"] = oneQuery(doc, "updateProductData");
        


/***/ }),

/***/ "../client/src/modules/common/graphql/VendorQuery.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"vendor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VendorQueryInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vendor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"handle"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"logo_url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"is_featured"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"handle"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"vendorData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"seo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"keywords"},"arguments":[],"directives":[]}]}}]}}]}}]}}],"loc":{"start":0,"end":305}};
    doc.loc.source = {"body":"query vendor($input: VendorQueryInput!) {\n  vendor(input: $input) {\n    id\n    name\n    handle\n    logo_url\n    is_featured\n    categories {\n      id\n      name\n      handle\n    }\n     vendorData(input: $input) {\n      id\n      seo {\n        title\n        description\n        keywords\n      }\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set(opRefs);
      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["vendor"] = oneQuery(doc, "vendor");
        


/***/ }),

/***/ "../client/src/modules/common/schema/adminProductsQuery.js":
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
/* harmony import */ var _graphql_SFY_sfyAdminProductsQuery_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../client/src/modules/common/graphql/SFY/sfyAdminProductsQuery.graphql");
/* harmony import */ var _graphql_SFY_sfyAdminProductsQuery_graphql__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_graphql_SFY_sfyAdminProductsQuery_graphql__WEBPACK_IMPORTED_MODULE_5__);







/* harmony default export */ __webpack_exports__["default"] = (function (queryString, first) {
  return Object(react_apollo__WEBPACK_IMPORTED_MODULE_4__["graphql"])(queryString ? queryString : _graphql_SFY_sfyAdminProductsQuery_graphql__WEBPACK_IMPORTED_MODULE_5___default.a, {
    options: function options() {
      return { variables: babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({}, 'first', first ? first : 250) };
    },
    props: function props(_ref) {
      var data = _ref.data;
      var productsLoading = data.loading,
          error = data.error,
          sfy_shop = data.sfy_shop,
          fetchMore = data.fetchMore,
          variables = data.variables;

      var currEndCursor = void 0,
          hasNextPage = void 0,
          hasPreviousPage = void 0;
      if (!productsLoading && sfy_shop) {
        var products = sfy_shop.products;
        //console.log('products', products);

        if (products.edges.length > 0) currEndCursor = products.edges[products.edges.length - 1].cursor;
        hasNextPage = products.pageInfo.hasNextPage;
        hasPreviousPage = products.pageInfo.hasPreviousPage;
      }
      var loadMore = function loadMore() {
        var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250;
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
            //console.log('udpatedres', updatedResult);
            return updatedResult;
          }
        });
      };
      if (error) throw new Error('Error in Admin Products Query: ' + error);
      if (productsLoading || !sfy_shop) return { productsLoading: productsLoading, sfy_shop: sfy_shop };
      if (!productsLoading && sfy_shop) {
        return {
          productsLoading: productsLoading,
          sfy_shop: sfy_shop,
          currEndCursor: currEndCursor,
          hasNextPage: hasNextPage,
          hasPreviousPage: hasPreviousPage,
          loadMore: loadMore
        };
      }
    }
  });
});

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
/* harmony import */ var _common_components_global_components_Loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../client/src/modules/common/components/global/components/Loader.jsx");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../../settings.js");
/* harmony import */ var _styles_category_view_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../client/src/modules/products/styles/category-view.scss");
/* harmony import */ var _styles_category_view_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_styles_category_view_scss__WEBPACK_IMPORTED_MODULE_18__);
















// import ShopGridPages from './ShopGridPages';





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
          startDisplayIdx = _this$getIdxsAndLims3.startDisplayIdx,
          displayLim = _this$getIdxsAndLims3.displayLim,
          edgesFinalIdx = _this$getIdxsAndLims3.edgesFinalIdx,
          currPg = _this$getIdxsAndLims3.currPg;

      var nextStartDisplayIdx = startDisplayIdx + displayLim;
      var nextFinalDisplayIdx = nextStartDisplayIdx + displayLim - 1;
      if (nextFinalDisplayIdx > edgesFinalIdx) {
        var first = nextFinalDisplayIdx - edgesFinalIdx;
        _this.props.loadMore(first);
      }
      _this.setState({ startDisplayIdx: nextStartDisplayIdx, currPg: currPg + 1 }, function () {
        return _this.scrollToGridTop();
      });
    };

    _this.handlePageBack = function () {
      var _this$getIdxsAndLims4 = _this.getIdxsAndLims(),
          startDisplayIdx = _this$getIdxsAndLims4.startDisplayIdx,
          displayLim = _this$getIdxsAndLims4.displayLim,
          currPg = _this$getIdxsAndLims4.currPg;

      var backLog = startDisplayIdx - displayLim;
      if (backLog >= 0) _this.setState({ startDisplayIdx: backLog, currPg: currPg - 1 }, function () {
        return _this.scrollToGridTop();
      });else _this.setState({ startDisplayIdx: 0, currPg: 1 }, function () {
        return _this.scrollToGridTop();
      });
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
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          selectedPriceRange = _state.selectedPriceRange,
          selectedPromotion = _state.selectedPromotion,
          selectedCategory = _state.selectedCategory;
      var _props = this.props,
          promotions = _props.promotions,
          priceRanges = _props.priceRanges,
          vendor = _props.vendor,
          bannerImage = _props.bannerImage,
          loading = _props.loading,
          sfy_shop = _props.sfy_shop,
          sfy_shop_collections = _props.sfy_shop_collections;
      var _state2 = this.state,
          priceConfirmed = _state2.priceConfirmed,
          priceFilterUpper = _state2.priceFilterUpper,
          priceFilterLower = _state2.priceFilterLower;

      var filtersToPass = { priceConfirmed: priceConfirmed, priceFilterUpper: priceFilterUpper, priceFilterLower: priceFilterLower };
      console.log("BRAND PROPS", vendor);
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
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_components_global_components_Loader__WEBPACK_IMPORTED_MODULE_16__["default"], null)
        );
      } else if (vendor && !sfy_shop) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _common_components_global__WEBPACK_IMPORTED_MODULE_11__["PageLayout"],
          null,
          renderMetaData(vendor.vendorData.seo),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_components_global_components_Loader__WEBPACK_IMPORTED_MODULE_16__["default"], null)
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
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_VendorView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/products/components/VendorView.web.jsx");
/* harmony import */ var _common_schema__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../client/src/modules/common/schema/index.js");
/* harmony import */ var _common_graphql_SFY_sfyCollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/common/graphql/SFY/sfyCollectionsQuery.graphql");
/* harmony import */ var _common_graphql_SFY_sfyCollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_SFY_sfyCollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_graphql_VendorQuery_graphql__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/common/graphql/VendorQuery.graphql");
/* harmony import */ var _common_graphql_VendorQuery_graphql__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_VendorQuery_graphql__WEBPACK_IMPORTED_MODULE_12__);














var Vendor = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Vendor, _React$Component);

  function Vendor() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Vendor);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Vendor.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(Vendor)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Vendor, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_VendorView__WEBPACK_IMPORTED_MODULE_9__["default"], this.props);
    }
  }]);

  return Vendor;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var VendorWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["compose"])(Object(_common_schema__WEBPACK_IMPORTED_MODULE_10__["FILTERED_PRODUCTS_QUERY"])(), Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["graphql"])(_common_graphql_SFY_sfyCollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_11___default.a, {
  options: function options() {
    return { variables: babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'first', 50) };
  },
  props: function props(_ref) {
    var data = _ref.data;
    var loading = data.loading,
        error = data.error,
        sfy_shop_collections = data.sfy_shop;

    if (error) throw new Error('Error in Categories (Vendor Page) Query: ' + error);
    return { loading: loading, sfy_shop_collections: sfy_shop_collections };
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["graphql"])(_common_graphql_VendorQuery_graphql__WEBPACK_IMPORTED_MODULE_12___default.a, {
  options: function options(props) {
    console.log('PROPS MATCH::', props.match.params);
    return { variables: { input: { handle: props.match.params.vendor_name } } };
  },
  props: function props(_ref2) {
    var data = _ref2.data;
    var loading = data.loading,
        error = data.error,
        vendor = data.vendor;
    // console.log('DATA:::', data);

    if (error) throw new Error('Error in Categories (Vendor Page) Query: ' + error);
    return { loading: loading, vendor: vendor };
  }
}))(Vendor);

Vendor.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  search: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
};

/* harmony default export */ __webpack_exports__["default"] = (VendorWithApollo);

/***/ }),

/***/ "../client/src/modules/products/index.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_Products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../client/src/modules/products/containers/Products.jsx");
/* harmony import */ var _containers_Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../client/src/modules/products/containers/Category.jsx");
/* harmony import */ var _containers_Vendor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../client/src/modules/products/containers/Vendor.jsx");
/* harmony import */ var _containers_SingleProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../client/src/modules/products/containers/SingleProduct.jsx");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../client/src/modules/products/locales/index.js");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_locales__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../client/src/modules/connector.ts");



// import translate from '../../i18n';
// import { MenuItem } from '../../modules/common/components/web';







// const NavLinkWithI18n = translate('products')(({ t }) => (
//   <NavLink to="/products" className="nav-link" activeClassName="active">
//     {t('navLink')}
//   </NavLink>
// ));
/* harmony default export */ __webpack_exports__["default"] = (new _connector__WEBPACK_IMPORTED_MODULE_7__["default"]({
  route: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: '/products', component: _containers_Products__WEBPACK_IMPORTED_MODULE_2__["default"] }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: '/products/:category', component: _containers_Category__WEBPACK_IMPORTED_MODULE_3__["default"] }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: '/products/brands/:vendor_name', component: _containers_Vendor__WEBPACK_IMPORTED_MODULE_4__["default"] }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: '/product/:vendor_name/:product_name/:category', component: _containers_SingleProduct__WEBPACK_IMPORTED_MODULE_5__["default"] })],
  localization: { ns: 'products', resources: _locales__WEBPACK_IMPORTED_MODULE_6___default.a }
}));

/***/ }),

/***/ "../client/src/modules/profile/components/ManageSpecs.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/core-js/object/keys");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/helpers/slicedToArray");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("babel-runtime/helpers/defineProperty");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _styles_manage_specs_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../client/src/modules/profile/styles/manage-specs.scss");
/* harmony import */ var _styles_manage_specs_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_styles_manage_specs_scss__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _common_graphql_ProductDataQuery_graphql__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("../client/src/modules/common/graphql/ProductDataQuery.graphql");
/* harmony import */ var _common_graphql_ProductDataQuery_graphql__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_ProductDataQuery_graphql__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _common_graphql_AddProductData_graphql__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("../client/src/modules/common/graphql/AddProductData.graphql");
/* harmony import */ var _common_graphql_AddProductData_graphql__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_AddProductData_graphql__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _common_graphql_UpdateProductData_graphql__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("../client/src/modules/common/graphql/UpdateProductData.graphql");
/* harmony import */ var _common_graphql_UpdateProductData_graphql__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_UpdateProductData_graphql__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _common_schema__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("../client/src/modules/common/schema/index.js");
/* harmony import */ var _products_components_SingleProductView__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("../client/src/modules/products/components/SingleProductView.web.jsx");
















var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  query productData($handle: String!) {\n    productData(handle: $handle) {\n      id\n      sku\n      product_name\n      handle\n      shock_absorption\n      console\n      user_ids\n      workouts\n      hrt_monitoring\n      stride_technology\n      power\n      design\n      drive_system\n      handlebars\n      seat\n      pedals\n      frame\n      finish\n      motion\n      exercises\n      weight_stack\n      included_accessories\n      optional_weight_stack\n      running_area\n      motor\n      speed\n      incline\n      resistance_levels\n      resistance_system\n      stride\n      max_user_weight\n      ramp\n      stored_vertical_height\n      seat_floor_distance\n      warranty\n    }\n  }\n'], ['\n  query productData($handle: String!) {\n    productData(handle: $handle) {\n      id\n      sku\n      product_name\n      handle\n      shock_absorption\n      console\n      user_ids\n      workouts\n      hrt_monitoring\n      stride_technology\n      power\n      design\n      drive_system\n      handlebars\n      seat\n      pedals\n      frame\n      finish\n      motion\n      exercises\n      weight_stack\n      included_accessories\n      optional_weight_stack\n      running_area\n      motor\n      speed\n      incline\n      resistance_levels\n      resistance_system\n      stride\n      max_user_weight\n      ramp\n      stored_vertical_height\n      seat_floor_distance\n      warranty\n    }\n  }\n']);





// import classnames from 'classnames';

// import {  } from '../../common/components/global';
// import settings from '../../../../../../settings';

// import { ADMIN_PRODUCTS_QUERY, CURRENT_USER_QUERY, DELETE_TOKEN, LOGOUT_ADMIN } from '../../common/schema';







var selectProdString = 'Select a product';
var selectSpecString = 'Select a specification';
var fullSpecs = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_14___default()(_products_components_SingleProductView__WEBPACK_IMPORTED_MODULE_25__["prodSpecs"]), babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_14___default()(_products_components_SingleProductView__WEBPACK_IMPORTED_MODULE_25__["prodFeatures"]));
var clearedSubmissionResult = { submissionError: null, submissionSuccess: null };

var ManageSpecs = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_13___default()(ManageSpecs, _React$Component);

  function ManageSpecs() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10___default()(this, ManageSpecs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12___default()(this, (_ref = ManageSpecs.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9___default()(ManageSpecs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentEdit: {},
      selectedProduct: selectProdString,
      selectedSpec: selectSpecString,
      specInput: '',
      submissionError: null,
      submissionSuccess: null
    }, _this.handleProductSelect = function (e) {
      return _this.setState(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8___default()({
        selectedProduct: e.target.value,
        selectedSpec: selectSpecString,
        currentEdit: {}
      }, clearedSubmissionResult));
    }, _this.handleSpecSelect = function (e) {
      return _this.setState(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8___default()({
        selectedSpec: e.target.value
      }, clearedSubmissionResult));
    }, _this.handleSpecInput = function (e) {
      var prevEdit = _this.state.currentEdit;
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState({ currentEdit: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8___default()({}, prevEdit, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()({}, name, value)) });
    }, _this.submitSpecs = function () {
      var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(e) {
        var _this$props, productData, addProductData, updateProductData, products, _this$state, currentEdit, selectedProduct, currentSpecs, _Object$assign, __typename, id, specsToSubmit, dataUpdateResult, _products$edges$filte, _products$edges$filte2, sfyData, _sfyData$node, title, vendor, variantEdges, _sku, updatedSubmission, _dataUpdateResult$pro, product_name, handle;

        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();

                _this$props = _this.props, productData = _this$props.productData, addProductData = _this$props.addProductData, updateProductData = _this$props.updateProductData, products = _this$props.sfy_shop.products;
                _this$state = _this.state, currentEdit = _this$state.currentEdit, selectedProduct = _this$state.selectedProduct;
                currentSpecs = productData === null ? {} : productData;
                _Object$assign = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()(currentSpecs, currentEdit, {
                  handle: selectedProduct
                }), __typename = _Object$assign.__typename, id = _Object$assign.id, specsToSubmit = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default()(_Object$assign, ['__typename', 'id']);
                dataUpdateResult = void 0;

                if (!(productData === null)) {
                  _context.next = 16;
                  break;
                }

                // If adding a new product data to rcomm db, add sku and product name from Shopify
                _products$edges$filte = products.edges.filter(function (_ref3) {
                  var node = _ref3.node;
                  return node.handle === selectedProduct;
                }), _products$edges$filte2 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_products$edges$filte, 1), sfyData = _products$edges$filte2[0];
                _sfyData$node = sfyData.node, title = _sfyData$node.title, vendor = _sfyData$node.vendor, variantEdges = _sfyData$node.variants.edges;
                _sku = variantEdges[0].node.sku;
                updatedSubmission = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8___default()({}, specsToSubmit, { product_name: vendor + ' ' + title, sku: _sku });
                _context.next = 13;
                return addProductData(updatedSubmission);

              case 13:
                dataUpdateResult = _context.sent;
                _context.next = 19;
                break;

              case 16:
                _context.next = 18;
                return updateProductData(specsToSubmit);

              case 18:
                dataUpdateResult = _context.sent;

              case 19:
                if (dataUpdateResult) {
                  _context.next = 21;
                  break;
                }

                return _context.abrupt('return');

              case 21:
                if (!('errors' in dataUpdateResult)) {
                  _context.next = 23;
                  break;
                }

                return _context.abrupt('return', _this.setState({ submissionError: dataUpdateResult.errors[0] }));

              case 23:
                if (!('productData' in dataUpdateResult && dataUpdateResult.productData)) {
                  _context.next = 27;
                  break;
                }

                _dataUpdateResult$pro = dataUpdateResult.productData, product_name = _dataUpdateResult$pro.product_name, handle = _dataUpdateResult$pro.handle;

                _this.props.refetchProductData({ handle: handle });
                return _context.abrupt('return', _this.setState({
                  submissionSuccess: 'Successfully updated ' + product_name + '!',
                  currentEdit: {},
                  selectedSpec: selectSpecString
                }));

              case 27:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.renderInputValue = function () {
      var _this$state2 = _this.state,
          selectedSpec = _this$state2.selectedSpec,
          currentEdit = _this$state2.currentEdit;
      var productData = _this.props.productData;

      if (selectedSpec in currentEdit) return currentEdit[selectedSpec];else if (productData && selectedSpec in productData) return productData[selectedSpec];else return '';
    }, _this.handleCancelEdit = function () {
      var _this$state3 = _this.state,
          currentEdit = _this$state3.currentEdit,
          selectedSpec = _this$state3.selectedSpec;

      if (selectedSpec in currentEdit) {
        var removed = currentEdit[selectedSpec],
            rest = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default()(currentEdit, [selectedSpec]);

        _this.setState({ currentEdit: rest });
      }
      return;
    }, _this.isDisabled = function () {
      var _this$props2 = _this.props,
          loadingProductData = _this$props2.loadingProductData,
          productData = _this$props2.productData;

      if (!loadingProductData && !productData) return false;
      if (babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(_this.state.currentEdit).length > 0) return false;
      return true;
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_11___default()(ManageSpecs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.productData) {
        console.log('PRODUCT DATA::', this.props.productData);
        this.setState({ selectedProduct: this.props.productData.handle });
      }
      // console.log('The props::', this.props);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.productData !== prevProps.productData) {
        console.log('DID UPDATE THE PROPS::', this.props.productData.product_name);
        return this.setState({ selectedProduct: this.props.productData.handle });
      }
      if (prevState.selectedProduct !== this.state.selectedProduct) {
        // return this.props.refetchProductData({ handle: this.state.selectedProduct });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var renderInputValue = this.renderInputValue,
          handleCancelEdit = this.handleCancelEdit,
          isDisabled = this.isDisabled;
      var _state = this.state,
          selectedProduct = _state.selectedProduct,
          selectedSpec = _state.selectedSpec;
      var _props = this.props,
          loadingProductData = _props.loadingProductData,
          sfy_shop = _props.sfy_shop;

      console.log('PRODUCT::', loadingProductData);
      var products = null;
      if (!loadingProductData && sfy_shop && 'products' in sfy_shop) {
        if (sfy_shop.products.edges.length > 0) {
          products = sfy_shop.products.edges;
        }
      }
      if (loadingProductData) {
        return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
          'div',
          null,
          'Loading'
        );
      }

      return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
        'section',
        { className: 'manage-specs' },
        react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
          'div',
          { className: 'form__select-group' },
          react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
            'p',
            null,
            this.props.productData.product_name
          )
        ),
        selectedProduct !== selectProdString ? react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
          'form',
          { onSubmit: this.submitSpecs, className: 'form manage-specs-form' },
          react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
            'div',
            { className: 'form__select-group form__select-group--third' },
            react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
              'select',
              {
                id: 'spec-select',
                className: 'manage-specs-form__input',
                onChange: this.handleSpecSelect,
                value: selectedSpec
              },
              react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
                'option',
                { value: selectSpecString, disabled: true },
                'Select a specification'
              ),
              fullSpecs.map(function (_ref4, i) {
                var _ref5 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_ref4, 2),
                    key = _ref5[0],
                    value = _ref5[1];

                return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
                  'option',
                  { key: i, value: key },
                  value
                );
              })
            )
          ),
          selectedSpec !== selectSpecString ? react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
            'div',
            { className: 'form__item form__item--two-thirds' },
            react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement('input', {
              onChange: this.handleSpecInput,
              type: 'text',
              name: this.state.selectedSpec,
              value: renderInputValue()
            })
          ) : null,
          react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
            'div',
            { className: 'manage-specs-form__button-group' },
            this.state.currentEdit.hasOwnProperty(this.state.selectedSpec) ? react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
              'button',
              { type: 'button', onClick: function onClick() {
                  return handleCancelEdit();
                } },
              react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_19__["MdClose"], { className: 'manage-specs-form__icon' }),
              react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
                'span',
                null,
                'Cancel Edit'
              )
            ) : null,
            react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
              'button',
              { disabled: isDisabled(), type: 'submit' },
              react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_19__["MdSave"], { className: 'manage-specs-form__icon' }),
              react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
                'span',
                null,
                'Submit Updated Specs'
              )
            )
          )
        ) : null,
        ['submissionSuccess', 'submissionError'].map(function (property) {
          if (property in _this3.state) return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(
            'div',
            { key: property },
            _this3.state[property]
          );
          return null;
        })
      );
    }
  }]);

  return ManageSpecs;
}(react__WEBPACK_IMPORTED_MODULE_15___default.a.Component);

var QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_18___default()(_templateObject);
var ManageSpecsWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_17__["compose"])(Object(_common_schema__WEBPACK_IMPORTED_MODULE_24__["ADMIN_PRODUCTS_QUERY"])(), Object(react_apollo__WEBPACK_IMPORTED_MODULE_17__["graphql"])(QUERY, {
  options: function options(props) {
    console.log('PROPS. MATCH ', props.match.params);
    return { variables: { handle: props.match.params.product }, fetchPolicy: 'network-only' };
  },
  props: function props(_ref6) {
    var data = _ref6.data;
    var loadingProductData = data.loading,
        error = data.error,
        productData = data.productData,
        refetchProductData = data.refetch;

    if (error) throw new Error('Error in Related Prodcuts Query: ' + error);
    console.log('ANYTHING:::', productData);
    return { loadingProductData: loadingProductData, productData: productData, refetchProductData: refetchProductData };
  }
}), Object(_common_schema__WEBPACK_IMPORTED_MODULE_24__["MODIFY_PRODUCT_DATA"])(_common_graphql_AddProductData_graphql__WEBPACK_IMPORTED_MODULE_22___default.a, 'addProductData'), Object(_common_schema__WEBPACK_IMPORTED_MODULE_24__["MODIFY_PRODUCT_DATA"])(_common_graphql_UpdateProductData_graphql__WEBPACK_IMPORTED_MODULE_23___default.a, 'updateProductData'))(ManageSpecs);

ManageSpecs.propTypes = {
  productsLoading: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.bool,
  products: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.array,
  productSpecs: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.array,
  refetchProductData: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.func,
  sfy_shop: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.object,
  productData: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.object,
  loadingProductData: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.bool
};

/* harmony default export */ __webpack_exports__["default"] = (ManageSpecsWithApollo);

/***/ }),

/***/ "./src/modules/admin/resolvers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/core-js/json/stringify");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/defineProperty");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/slicedToArray");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util_FileUploader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/modules/util/FileUploader.js");










var getField = function getField(field, values) {
  if (values.hasOwnProperty(field)) {
    return values[field];
  }
};
// const handleLocationsCheck = async (context) => {
//  const check = await context.get.dealers();
//  console.log('CHECK::', check);
//  return check;
// }
/*eslint-disable no-unused-vars*/
/* harmony default export */ __webpack_exports__["default"] = (function (pubsub) {
  return {
    Query: {
      pages: function pages(obj, input, _ref) {
        var _this = this;

        var Admin = _ref.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee() {
          var pages, page;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return Admin.get.pages();

                case 3:
                  pages = _context.sent;

                  if (!(pages.length == 0)) {
                    _context.next = 9;
                    break;
                  }

                  _context.next = 7;
                  return Admin.insert.page({ id: 0, name: 'home' });

                case 7:
                  page = _context.sent;
                  return _context.abrupt('return', page);

                case 9:
                  return _context.abrupt('return', pages);

                case 12:
                  _context.prev = 12;
                  _context.t0 = _context['catch'](0);
                  return _context.abrupt('return', _context.t0);

                case 15:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this, [[0, 12]]);
        }))();
      },
      page: function page(obj, _ref2, _ref3) {
        var _this2 = this;

        var id = _ref2.id,
            pageTitle = _ref2.pageTitle;
        var Admin = _ref3.Admin,
            Dealers = _ref3.Dealers;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee2() {
          var page;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;

                  if (!id) {
                    _context2.next = 5;
                    break;
                  }

                  return _context2.abrupt('return', { id: id });

                case 5:
                  _context2.next = 7;
                  return Admin.get.pageByTitle(pageTitle);

                case 7:
                  page = _context2.sent;

                  if (page.name === 'locations') {}
                  // const check = await handleLocationsCheck(Dealers);
                  // console.log('LOCATIONSCHECK DONE', check);

                  // console.log('PAGE::', page);
                  return _context2.abrupt('return', { id: page.id, title: page.title, name: page.name });

                case 10:
                  _context2.next = 16;
                  break;

                case 12:
                  _context2.prev = 12;
                  _context2.t0 = _context2['catch'](0);

                  console.log('ERRROR GETTING PAGE:', _context2.t0);
                  return _context2.abrupt('return', _context2.t0);

                case 16:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2, [[0, 12]]);
        }))();
      },
      vendorData: function vendorData(_, _ref4, _ref5) {
        var _this3 = this;

        var handle = _ref4.handle;
        var Admin = _ref5.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee3() {
          var data, vendor;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return Admin.get.vendorByHandle(handle);

                case 3:
                  data = _context3.sent;

                  if (!(typeof data == 'undefined' && handle.length > 0)) {
                    _context3.next = 9;
                    break;
                  }

                  _context3.next = 7;
                  return Admin.insert.vendorSeo(handle);

                case 7:
                  vendor = _context3.sent;
                  return _context3.abrupt('return', vendor);

                case 9:
                  if (!(handle.length == 0)) {
                    _context3.next = 11;
                    break;
                  }

                  return _context3.abrupt('return', null);

                case 11:
                  if (!data) {
                    _context3.next = 13;
                    break;
                  }

                  return _context3.abrupt('return', { handle: handle, seo: data });

                case 13:
                  _context3.next = 18;
                  break;

                case 15:
                  _context3.prev = 15;
                  _context3.t0 = _context3['catch'](0);
                  return _context3.abrupt('return', _context3.t0);

                case 18:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this3, [[0, 15]]);
        }))();
      },
      collectionData: function collectionData(_, _ref6, _ref7) {
        var _this4 = this;

        var handle = _ref6.handle;
        var Admin = _ref7.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee4() {
          var data, collection, id, rest, _collection;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  _context4.next = 3;
                  return Admin.get.collectionByHandle(handle);

                case 3:
                  data = _context4.sent;

                  if (!((typeof data == 'undefined' || !data) && handle.length > 0)) {
                    _context4.next = 9;
                    break;
                  }

                  _context4.next = 7;
                  return Admin.insert.collectionSeo(handle);

                case 7:
                  collection = _context4.sent;
                  return _context4.abrupt('return', collection);

                case 9:
                  if (!(handle.length == 0)) {
                    _context4.next = 11;
                    break;
                  }

                  return _context4.abrupt('return', null);

                case 11:
                  if (!data) {
                    _context4.next = 15;
                    break;
                  }

                  id = data.id, rest = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default()(data, ['id']);
                  _collection = { id: id, seo: rest };
                  // console.log('WE SHOULD SEND DATA::;', collection);

                  return _context4.abrupt('return', _collection);

                case 15:
                  _context4.next = 20;
                  break;

                case 17:
                  _context4.prev = 17;
                  _context4.t0 = _context4['catch'](0);
                  return _context4.abrupt('return', _context4.t0);

                case 20:
                  return _context4.abrupt('return', null);

                case 21:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this4, [[0, 17]]);
        }))();
      }
    },
    Page: {
      fields: function fields(obj, _ref8, _ref9, info) {
        var field_names = _ref8.field_names;

        var _this5 = this;

        var Admin = _ref9.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee5() {
          var _ref10, page_content, requestedFields, field_value, fields, stringValues, data;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return Admin.get.pageContents(obj.id);

                case 2:
                  _ref10 = _context5.sent;
                  page_content = _ref10.page_content;
                  requestedFields = field_names.map(function (_ref11) {
                    var _ref12 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(_ref11, 2),
                        section = _ref12[0],
                        field = _ref12[1];

                    return page_content.map(function (_ref13) {
                      var field_value = _ref13.field_value,
                          rest = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default()(_ref13, ['field_value']);

                      var values = JSON.parse(field_value);
                      if (section == rest.section_name) {
                        var combined = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, rest, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, field, getField(field, values)));
                        return combined;
                      }
                    }).reduce(function (accum, curr) {
                      var field_value = curr[field];
                      delete curr[field];
                      accum = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, accum, curr, { field_value: babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, field, field_value) });
                      return accum;
                    }, { field_value: null });
                  }).reduce(function (accum, curr) {
                    accum['field_value'] = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, accum['field_value'], curr['field_value']);
                    delete curr['field_value'];
                    accum = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, accum, curr);
                    return accum;
                  }, {});
                  // console.log('REQUESTED FIELDS:', requestedFields);

                  field_value = requestedFields.field_value, fields = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default()(requestedFields, ['field_value']);
                  stringValues = babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(field_value);
                  data = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, fields, { field_value: stringValues });
                  return _context5.abrupt('return', [data]);

                case 9:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this5);
        }))();
      }
    },
    Mutation: {
      signS3: function signS3(obj, _ref14) {
        var _this6 = this;

        var filename = _ref14.filename,
            filetype = _ref14.filetype;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee6() {
          var signedRequest;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return _util_FileUploader__WEBPACK_IMPORTED_MODULE_8__["default"].getSignedUrl({ filename: filename, filetype: filetype });

                case 2:
                  signedRequest = _context6.sent;
                  return _context6.abrupt('return', signedRequest);

                case 4:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, _this6);
        }))();
      },
      uploadPageContent: function uploadPageContent(obj, _ref15, _ref16) {
        var _this7 = this;

        var pageContent = _ref15.pageContent;
        var Admin = _ref16.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee7() {
          var _ref17, _ref18, data;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.prev = 0;
                  _context7.next = 3;
                  return Admin.update.pageContent(pageContent);

                case 3:
                  _ref17 = _context7.sent;
                  _ref18 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(_ref17, 1);
                  data = _ref18[0];
                  return _context7.abrupt('return', data.page_content);

                case 9:
                  _context7.prev = 9;
                  _context7.t0 = _context7['catch'](0);

                  console.log('EERROO', _context7.t0);

                case 12:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7, _this7, [[0, 9]]);
        }))();
      },
      uploadSeo: function uploadSeo(obj, _ref19, _ref20) {
        var _this8 = this;

        var path = _ref19.path,
            handle = _ref19.handle,
            seo = _ref19.seo;
        var Admin = _ref20.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee8() {
          var _ref21, _ref22, data;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  console.log('PATH::', path);
                  console.log('HANDLE::', handle);
                  console.log('SEO::', seo);
                  _context8.prev = 3;
                  _context8.next = 6;
                  return Admin.update.seo({ path: path, handle: handle, seo: seo });

                case 6:
                  _ref21 = _context8.sent;
                  _ref22 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(_ref21, 1);
                  data = _ref22[0];

                  console.log('DATA::', data);
                  return _context8.abrupt('return', data);

                case 13:
                  _context8.prev = 13;
                  _context8.t0 = _context8['catch'](3);

                  console.log('ERROR UPDATING SEO DATA::', _context8.t0);

                case 16:
                case 'end':
                  return _context8.stop();
              }
            }
          }, _callee8, _this8, [[3, 13]]);
        }))();
      }
    },
    Subscription: {}
  };
});

/***/ }),

/***/ "./src/modules/vendor/resolvers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);


/*eslint-disable no-unused-vars*/
/* harmony default export */ __webpack_exports__["default"] = (function (pubsub) {
  return {
    Query: {
      vendors: function vendors(_, __, context) {
        var _this = this;

        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return context.Vendor.get.vendors();

                case 3:
                  return _context.abrupt('return', _context.sent);

                case 6:
                  _context.prev = 6;
                  _context.t0 = _context['catch'](0);

                  console.log('Error resolving query of vendors', _context.t0);

                case 9:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this, [[0, 6]]);
        }))();
      },
      vendor: function vendor(_, _ref, context) {
        var _this2 = this;

        var input = _ref.input;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
          var handle, id;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  handle = input.handle, id = input.id;
                  _context2.prev = 1;

                  if (!id) {
                    _context2.next = 6;
                    break;
                  }

                  _context2.next = 5;
                  return context.Vendor.get.vendorById(id);

                case 5:
                  return _context2.abrupt('return', _context2.sent);

                case 6:
                  if (!handle) {
                    _context2.next = 10;
                    break;
                  }

                  _context2.next = 9;
                  return context.Vendor.get.vendorByHandle(handle);

                case 9:
                  return _context2.abrupt('return', _context2.sent);

                case 10:
                  _context2.next = 15;
                  break;

                case 12:
                  _context2.prev = 12;
                  _context2.t0 = _context2['catch'](1);

                  console.log('Error resolving query of single Vendor', _context2.t0);

                case 15:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2, [[1, 12]]);
        }))();
      }
    },
    Vendor: {
      categories: function categories(obj, _, context) {
        var _this3 = this;

        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
          var id;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  id = obj.id;
                  _context3.prev = 1;
                  _context3.next = 4;
                  return context.Vendor.get.vendorCategories(id);

                case 4:
                  return _context3.abrupt('return', _context3.sent);

                case 7:
                  _context3.prev = 7;
                  _context3.t0 = _context3['catch'](1);

                  console.log('Error resolving categories inside of Vendor', _context3.t0);

                case 10:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this3, [[1, 7]]);
        }))();
      },
      vendorData: function vendorData(obj, _ref2, _ref3) {
        var _this4 = this;

        var handle = _ref2.input.handle;
        var Admin = _ref3.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
          var data, vendor;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  console.log('OBJ::', obj);
                  console.log(' input', handle);
                  // const handle = '';
                  _context4.prev = 2;
                  _context4.next = 5;
                  return Admin.get.vendorByHandle(handle);

                case 5:
                  data = _context4.sent;

                  console.log('DATA::', data, handle.length);

                  if (!(typeof data == 'undefined' && handle.length > 0)) {
                    _context4.next = 13;
                    break;
                  }

                  _context4.next = 10;
                  return Admin.insert.vendorSeo(handle);

                case 10:
                  vendor = _context4.sent;

                  console.log('VENDOR::', vendor);
                  return _context4.abrupt('return', vendor);

                case 13:
                  if (!(handle.length == 0)) {
                    _context4.next = 15;
                    break;
                  }

                  return _context4.abrupt('return', null);

                case 15:
                  if (!data) {
                    _context4.next = 17;
                    break;
                  }

                  return _context4.abrupt('return', { handle: handle, seo: data });

                case 17:
                  _context4.next = 22;
                  break;

                case 19:
                  _context4.prev = 19;
                  _context4.t0 = _context4['catch'](2);
                  return _context4.abrupt('return', _context4.t0);

                case 22:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this4, [[2, 19]]);
        }))();
      }
    }
  };
});

/***/ }),

/***/ "./src/modules/vendor/schema.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Query"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"vendors"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Vendor"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"vendor"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VendorQueryInput"}}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Vendor"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Vendor"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"name"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"handle"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"logo_url"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"categories"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"is_featured"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"is_top_six"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"top_six_position"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"description"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"vendorData"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"VendorQueryInput"}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"VendorData"}},"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"VendorQueryInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"handle"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]}],"loc":{"start":0,"end":506}};
    doc.loc.source = {"body":"extend type Query {\n  # Vendors query\n  vendors: [Vendor]\n  # Query an individual vendor by id or name\n  vendor(input: VendorQueryInput!): Vendor\n}\n\n# Core Vendor Type\ntype Vendor {\n  id: Int!\n  name: String\n  handle: String\n  logo_url: String\n  categories: [Category]\n  is_featured: Boolean\n  is_top_six: Boolean\n  top_six_position: Int\n  description: String\n  vendorData(input: VendorQueryInput): VendorData\n}\n\n# Argument type to query single vendor\ninput VendorQueryInput {\n  id: Int\n  handle: String\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ })

};
//# sourceMappingURL=index.9fe3b3bcecd5d610ab7c.js.map
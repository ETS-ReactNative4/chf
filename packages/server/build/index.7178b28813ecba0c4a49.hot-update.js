require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/admin/components/AdminView.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _AdminLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../client/src/modules/admin/components/AdminLayout.jsx");
/* harmony import */ var _profile_components_ProfileMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/profile/components/ProfileMenu.jsx");
/* harmony import */ var _profile_components_ProfileOverview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../client/src/modules/profile/components/ProfileOverview.jsx");
/* harmony import */ var _profile_components_ProfilePassword__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/profile/components/ProfilePassword.jsx");
/* harmony import */ var _profile_components_ProfileAddress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/profile/components/ProfileAddress.jsx");
/* harmony import */ var _CarouselImages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/admin/components/CarouselImages/index.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../client/src/modules/admin/components/Menu.jsx");
/* harmony import */ var _profile_components_ManageSpecs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../client/src/modules/profile/components/ManageSpecs.jsx");
/* harmony import */ var _Seo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../client/src/modules/admin/components/Seo/index.js");
/* harmony import */ var _Locations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../client/src/modules/admin/components/Locations/index.js");
/* harmony import */ var _profile_styles_profile_view_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../client/src/modules/profile/styles/profile-view.scss");
/* harmony import */ var _profile_styles_profile_view_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_profile_styles_profile_view_scss__WEBPACK_IMPORTED_MODULE_18__);













// import ManageCarousel from '../../profile/components/ManageCarousel';









// import ProfileView from '../../profile/containers/Profile';

var renderMetaData = function renderMetaData() {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_7___default.a, {
    title: 'Admin',
    meta: [{
      name: 'description',
      content: 'Admin page'
    }]
  });
};
var adminViews = [
// { view: 'manageAdmins', component: ManageAdmins },
{ view: 'manageCarousel', component: _CarouselImages__WEBPACK_IMPORTED_MODULE_13__["default"] }, { view: 'manageSpecs', component: _profile_components_ManageSpecs__WEBPACK_IMPORTED_MODULE_15__["default"] }, { view: 'manageSeo', component: _Seo__WEBPACK_IMPORTED_MODULE_16__["default"] }, { view: 'manageLocations', component: _Locations__WEBPACK_IMPORTED_MODULE_17__["default"] }];

var AdminView = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(AdminView, _React$Component);

  function AdminView() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, AdminView);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (AdminView.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(AdminView)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(AdminView, [{
    key: 'render',
    value: function render() {
      // const { currentView } = this.state;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
        _AdminLayout__WEBPACK_IMPORTED_MODULE_8__["default"],
        null,
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          'div',
          { className: ' profile-view admin' },
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
            'aside',
            { className: 'profile-view__sidebar' },
            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_14__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.state, this.props, { changeView: this.changeView }))
          ),
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
            'section',
            { className: 'profile-view__content' },
            this.props.children
          )
        )
      );
    }
  }]);

  return AdminView;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AdminView);

/***/ })

};
//# sourceMappingURL=index.7c4cd36cc16439d600f8.js.map
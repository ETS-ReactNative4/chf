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
/* harmony import */ var _AdminLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../client/src/modules/admin/components/AdminLayout.jsx");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../client/src/modules/admin/components/Menu.jsx");
/* harmony import */ var _profile_styles_profile_view_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/profile/styles/profile-view.scss");
/* harmony import */ var _profile_styles_profile_view_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_profile_styles_profile_view_scss__WEBPACK_IMPORTED_MODULE_9__);







// import Helmet from 'react-helmet';

// import ProfileMenu, { isAdminVerified } from '../../profile/components/ProfileMenu';
// import ProfileOverview from '../../profile/components/ProfileOverview';
// import ProfilePassword from '../../profile/components/ProfilePassword';
// import ProfileAddress from '../../profile/components/ProfileAddress';
// import ManageCarousel from '../../profile/components/ManageCarousel';
// import Carousel from './CarouselImages';


// import ManageSpecs from '../../profile/components/ManageSpecs';
// import ManageSeo from './Seo';
// import ManageLocations from './Locations';



// import ProfileView from '../../profile/containers/Profile';

// const renderMetaData = () => (
//   <Helmet
//     title="Admin"
//     meta={[
//       {
//         name: 'description',
//         content: 'Admin page'
//       }
//     ]}
//   />
// );
// const adminViews = [
//   // { view: 'manageAdmins', component: ManageAdmins },
//   { view: 'manageCarousel', component: Carousel },
//   { view: 'manageSpecs', component: ManageSpecs },
//   { view: 'manageSeo', component: ManageSeo },
//   { view: 'manageLocations', component: ManageLocations }
// ];

var AdminView = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(AdminView, _React$Component);

  function AdminView(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, AdminView);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (AdminView.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(AdminView)).call(this, props));

    _this.handleProductSelect = function (e) {
      return _this.setState({ selectedProduct: e.target.value });
    };

    _this.state = {
      currentView: 'manageLocations'
    };
    return _this;
  }
  // changeView = selectedView => this.setState({ currentView: selectedView });

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(AdminView, [{
    key: 'render',


    // renderAdminView = viewList => {
    //   if (!isAdminVerified(this.props)) return null;
    //   const { currentView } = this.state;
    //   const [selectedView] = viewList.filter(v => v.view === currentView);
    //   if (!selectedView) return null;
    //   const { component: Component } = selectedView;
    //   return <Component {...this.state} {...this.props} />;
    // };
    value: function render() {
      // const { currentView } = this.state;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
        _AdminLayout__WEBPACK_IMPORTED_MODULE_7__["default"],
        null,
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          'div',
          { className: ' admin profile-view' },
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
            'aside',
            { className: 'profile-view__sidebar' },
            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_8__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.state, this.props, { changeView: this.changeView }))
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
//# sourceMappingURL=index.1d3dfca9d3d5ca4ae10f.js.map
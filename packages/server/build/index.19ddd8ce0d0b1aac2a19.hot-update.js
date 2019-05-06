require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/forms.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".admin__form__seo{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:67%}.admin__form__seo--field{position:relative;margin-bottom:30px}.admin__form__seo--field textarea{width:100%;height:100px;height:-webkit-fill-available;height:-moz-available;height:stretch;max-height:200px}.admin__form__seo--description{width:100%;position:relative}.admin__form__seo--description textarea{width:100%;height:200px;height:-webkit-fill-available;height:-moz-available;height:stretch;max-height:200px}.admin__form__seo--input{border:solid}.admin__form__seo--error{position:absolute;right:0;color:#db3a34}", "", {"version":3,"sources":["/Users/austinreynolds/Documents/MOD/chf-rcomm/packages/client/src/modules/admin/styles/forms.scss"],"names":[],"mappings":"AAII,kBACE,oBAAA,aAAa,0BACb,sBAAsB,SACC,CACvB,yBACE,kBAAkB,kBACC,CAFpB,kCAIG,WAAW,aACE,8BACb,sBAAA,eAAe,gBACE,CAClB,+BAGD,WAAW,iBACO,CAFnB,wCAKG,WAAW,aACE,8BACb,sBAAA,eAAe,gBACE,CAClB,yBAGD,YAAa,CACd,yBAEC,kBAAkB,QACV,aACM,CACf","file":"forms.scss","sourcesContent":["@import './utils/index';\n\n.admin {\n  &__form {\n    &__seo {\n      display: flex;\n      flex-direction: column;\n      width: calc(100% - 33%);\n      &--field {\n        position: relative;\n        margin-bottom: 30px;\n        textarea {\n          width: 100%;\n          height: 100px;\n          height: stretch;\n          max-height: 200px;\n        }\n      }\n      &--description {\n        width: 100%;\n        position: relative;\n\n        textarea {\n          width: 100%;\n          height: 200px;\n          height: stretch;\n          max-height: 200px;\n        }\n      }\n      &--input {\n        border: solid;\n      }\n      &--error {\n        position: absolute;\n        right: 0;\n        color: #DB3A34;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/locations.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".admin__location__form{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}", "", {"version":3,"sources":["/Users/austinreynolds/Documents/MOD/chf-rcomm/packages/client/src/modules/admin/styles/locations.scss"],"names":[],"mappings":"AAII,uBACE,oBAAA,aAAa,0BACb,qBAAsB,CACvB","file":"locations.scss","sourcesContent":["@import './utils/index';\n\n.admin {\n  &__location {\n    &__form {\n      display: flex;\n      flex-direction: column;\n    }\n  }\n}\n"],"sourceRoot":""}]);

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
          { className: 'profile-view' },
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

/***/ "../client/src/modules/admin/components/CarouselImages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/core-js/json/stringify");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/slicedToArray");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("babel-runtime/core-js/map");
/* harmony import */ var babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("ramda");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _graphql_PageQuery_graphql__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../client/src/modules/admin/graphql/PageQuery.graphql");
/* harmony import */ var _graphql_PageQuery_graphql__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_graphql_PageQuery_graphql__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _ImagePreview__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../client/src/modules/admin/components/CarouselImages/ImagePreview.jsx");
/* harmony import */ var _ImageAdapter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../client/src/modules/admin/components/CarouselImages/ImageAdapter.jsx");
/* harmony import */ var _styles_carousel_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../client/src/modules/admin/styles/carousel.scss");
/* harmony import */ var _styles_carousel_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_styles_carousel_scss__WEBPACK_IMPORTED_MODULE_20__);




















// import ImageUploader from './ImageUploader';





var uploadToS3 = function uploadToS3() {
  return;
};

var Carousel = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11___default()(Carousel, _React$Component);

  function Carousel(props) {
    var _this2 = this;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, Carousel);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10___default()(this, (Carousel.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default()(Carousel)).call(this, props));

    _this.initializeView = function () {
      var page_content = _this.state.page_content;
      var pages = _this.props.pages;

      var page = pages[0];
      if (_this.props.page) {
        var fields = _this.props.page.fields;

        var rootFields = fields[0];
        var content = page_content.content;

        var fieldsToUpdate = content[0];
        var transformImages = new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default.a([].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(JSON.parse(rootFields.field_value).images)));

        var updatedFields = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, fieldsToUpdate, {
          field_value: babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, JSON.parse(rootFields.field_value), { images: transformImages })
        });
        _this.setState({
          loaded: true,
          images: transformImages,
          page_content: babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, page_content, { page_id: parseInt(page.id), content: [updatedFields] })
        });
      }
      var percentCompleted = _this.state.percentCompleted;
      // if (percentCompleted > 0) {
      //   this.updateProgress(percentCompleted);
      // }

      if (percentCompleted == 0 || percentCompleted == 100) {
        var elem = document.getElementById('upload-bar');
        elem.style.visibility = 'hidden';
        return;
      }
    };

    _this.imageToState = function (images) {
      _this.setState({
        images: images
      });
    };

    _this.updateProgress = function (percent) {
      var elem = document.getElementById('upload-bar');
      elem.style.visibility = 'visible';
      elem.style.width = percent + '%';
      elem.innerHTML = percent * 1 + '%';
    };

    _this.handleDragStart = function (e) {
      e.dataTransfer.setData('text', e.currentTarget.id);
      e.dataTransfer.dropEffect = 'move';
      _this.setState({ mouseY: e.clientY });
    };

    _this.handleDragEnter = function (e) {
      e.preventDefault();
      var target = e.target;
      if (target.parentElement.className === 'drag-drop-item') target = e.target.parentNode;
      target.style.borderTop = '1px solid red';
    };

    _this.handleDragOver = function (e) {
      return e.preventDefault();
    };

    _this.handleDrop = function (e) {
      // NOTE used currentTarget as it seemed to pick up the div much easier
      // also used clientY prop from event object to determine if we are draggin item upward

      e.preventDefault();
      var dataToDrop = e.dataTransfer.getData('text');
      var dataEl = document.getElementById(dataToDrop);
      var target = e.currentTarget;
      target.style.borderTop = 'none';
      e.target.style.borderTop = 'none';
      // NOTE: we are pulling from the top item in list no element above
      if (!dataEl.previousElementSibling) {
        return target.insertAdjacentElement('afterend', dataEl);
      }
      if (dataEl.previousElementSibling && target.nextElementSibling) {
        var oldY = _this.state.mouseY;
        var newY = e.clientY;
        if (oldY > newY) {
          return target.insertAdjacentElement('beforebegin', dataEl);
        }
        return target.insertAdjacentElement('afterend', dataEl);
      }

      // NOTE we are trying to drop in the last position so we should insert above the target
      if (!target.nextElementSibling) {
        return target.insertAdjacentElement('afterend', dataEl);
      }
    };

    _this.handleDragEnd = function (e) {
      var imageNodeList = e.target.parentNode.children;
      var imagesArray = Array.prototype.slice.call(imageNodeList);
      var imageMap = new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default.a();
      imagesArray.map(function (node) {
        imageMap.set(node.id, _this.state.images.get(node.id));
      });
      // needed? NOTE YES THIS IS NEEDED TO THE IMAGE ADAPTER CAN UPDATE ITS INTERNAL
      // TRACK OF WHAT THE IMAGE ORDER
      _this.handleReorder(imageMap);
    };

    _this.handleDragLeave = function (e) {
      e.target.style.borderTop = 'none';
      e.target.parentNode.borderTop = 'none';
    };

    _this.handleReorder = function (reOrderedImages) {
      _this.setState({ images: reOrderedImages });
    };

    _this.removeImage = function (key) {
      var currentImages = new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default.a([].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(_this.state.images)));
      currentImages.delete(key);
      _this.setState({ images: currentImages });
    };

    _this.uploadToS3 = function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(signedRequest, file) {
        var options;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = {
                  headers: {
                    'Content-Type': '"' + file.type + '"'
                  },
                  onUploadProgress: function (progressEvent) {
                    var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                    this.setState({ percentCompleted: percentCompleted });
                  }.bind(_this)
                };
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_15___default.a.put(signedRequest, file, options);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.adaptFileEventToValue = function (delegate) {
      return function () {
        var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(e) {
          var files, signS3, image_data, getFileNameAndType, response, updatedImageData;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  files = e.target.files;
                  signS3 = _this.props.signS3;
                  image_data = new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default.a();

                  getFileNameAndType = function getFileNameAndType(file) {
                    return Object(ramda__WEBPACK_IMPORTED_MODULE_16__["pick"])(['name', 'type'], file);
                  };

                  response = function () {
                    var _ref3 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(signS3, _ref4) {
                      var name = _ref4.name,
                          type = _ref4.type;
                      return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.next = 2;
                              return signS3(name, type);

                            case 2:
                              return _context2.abrupt('return', _context2.sent);

                            case 3:
                            case 'end':
                              return _context2.stop();
                          }
                        }
                      }, _callee2, _this2);
                    }));

                    return function response(_x4, _x5) {
                      return _ref3.apply(this, arguments);
                    };
                  }();

                  if (files.length !== 0 && typeof files !== 'undefined') {
                    updatedImageData = void 0;
                    // TODO THIS FOREACH BIZ SUCKS WE ARE HAVING TO SET STATE WAY TO MUCH IN THIS LOOP
                    // BUT PLACING SETSTATE AFTER FOREACH FIRES BEFORE UPDATED IMAGEMAP IS CREATED

                    Object(ramda__WEBPACK_IMPORTED_MODULE_16__["forEach"])(function () {
                      var _ref5 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(file) {
                        var _getFileNameAndType, name, res, _res$data$signS, signedRequest, url, currentImageSize, fileIndex;

                        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                // NOTE JUST need to update the state and then map the urls down on the preview component
                                _getFileNameAndType = getFileNameAndType(file), name = _getFileNameAndType.name;
                                _context3.next = 3;
                                return response(signS3, getFileNameAndType(file));

                              case 3:
                                res = _context3.sent;
                                _res$data$signS = res.data.signS3, signedRequest = _res$data$signS.signedRequest, url = _res$data$signS.url;
                                _context3.next = 7;
                                return _this.uploadToS3(signedRequest, file);

                              case 7:
                                currentImageSize = _this.state.images.size;
                                fileIndex = currentImageSize === 0 ? 0 : currentImageSize;
                                // indexOf(file, values(files));

                                image_data.set('image_url-' + fileIndex, { name: name, url: url });
                                updatedImageData = new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default.a([].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(_this.state.images), babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(image_data)));
                                _this.setState({ images: updatedImageData });
                                delegate(url);

                              case 13:
                              case 'end':
                                return _context3.stop();
                            }
                          }
                        }, _callee3, _this2);
                      }));

                      return function (_x6) {
                        return _ref5.apply(this, arguments);
                      };
                    }(), Object(ramda__WEBPACK_IMPORTED_MODULE_16__["values"])(files));
                  }

                case 6:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this2);
        }));

        return function (_x3) {
          return _ref2.apply(this, arguments);
        };
      }();
    };

    _this.handleChecked = function () {
      _this.setState({ carouselStatus: !_this.state.carouselStatus });
    };

    _this.saveCarouselContent = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5() {
      var page_content, _page_content$content, content, field_value, updatedContent, pageData, _ref7, _ref8, data, _JSON$parse, images, carouselActive;

      return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              page_content = _this.state.page_content;
              _page_content$content = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(page_content.content, 1), content = _page_content$content[0];
              field_value = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, { images: _this.state.images, carouselActive: _this.state.carouselStatus });
              updatedContent = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, content, { field_value: babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(field_value) });
              pageData = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, page_content, { content: [updatedContent] });
              _context5.prev = 5;
              _context5.next = 8;
              return _this.props.uploadContent(pageData);

            case 8:
              _ref7 = _context5.sent;
              _ref8 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref7, 1);
              data = _ref8[0];

              console.log('DATA:::', data);
              _JSON$parse = JSON.parse(data.field_value), images = _JSON$parse.images, carouselActive = _JSON$parse.carouselActive;

              console.log('IAMGES:::', images);
              _this.setState({ images: new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default.a([].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(images))), carouselStatus: carouselActive, saveSuccess: true });
              _context5.next = 20;
              break;

            case 17:
              _context5.prev = 17;
              _context5.t0 = _context5['catch'](5);

              console.log('ERRROR UPLOADING', _context5.t0);

            case 20:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this2, [[5, 17]]);
    }));

    _this.state = {
      loaded: false,
      percentCompleted: 0,
      carouselStatus: false,
      page_content: {
        page_id: null,
        content: [{
          section_name: 'hero',
          field_name: 'Carousel',
          field_label: 'carousel',
          field_type: 'Carousel',
          field_value: null
        }]
      },
      images: new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default.a()
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(Carousel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // console.log('CAROUSEL PROPS DID MOUNT', this.props.loadingPage);
      if (!this.props.loadingPage) {
        var pages = this.props.pages;

        var page = pages[0];
        var fields = this.props.page.fields;

        var rootFields = fields[0];
        var content = this.state.page_content.content;

        var fieldsToUpdate = content[0];
        var transformImages = new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default.a([].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(JSON.parse(rootFields.field_value).images)));

        var updatedFields = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, fieldsToUpdate, {
          field_value: babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, JSON.parse(rootFields.field_value), { images: transformImages })
        });
        this.setState({
          loaded: true,
          images: transformImages,
          page_content: babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, this.state.page_content, {
            page_id: parseInt(page.id),
            content: [updatedFields]
          })
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _props = this.props,
          loadingPages = _props.loadingPages,
          loadingPage = _props.loadingPage,
          page = _props.page,
          pages = _props.pages;
      var _state = this.state,
          page_content = _state.page_content,
          loaded = _state.loaded;

      if (prevProps.loadingPages !== loadingPages || !loadingPages) {
        console.log('PREV LOADING PAGE', prevProps.page, 'PROPS PAGE', page);
        if (prevProps.page !== page && !prevState.loaded) {
          console.log('PAGE IS DIFF', loaded, prevState.loaded);
          return this.initializeView();
        } else if (!prevState.loaded && page) {
          return this.initializeView();
        }
        return;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log('CAROUSEL State::', this.state);
      // console.log('CAROUSEL PROPS:', this.props);
      var loadingPage = this.props.loadingPage;

      if (loadingPage) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
          'div',
          { className: 'admin' },
          react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
            'div',
            { className: 'admin__btn' },
            react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
              'button',
              { type: 'button', className: 'admin__btn--upload' },
              'Upload',
              react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('input', { style: { opacity: 0 }, onChange: this.adaptFileEventToValue(uploadToS3), type: 'file', multiple: true })
            ),
            react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
              'button',
              { className: 'admin__btn--save', onClick: this.saveCarouselContent },
              'Save'
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
            'div',
            { className: 'admin__carousel__toggle' },
            react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
              'span',
              null,
              'Carousel On/Off'
            ),
            react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
              'label',
              { className: 'admin__carousel__switch' },
              react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('input', { type: 'checkbox', checked: this.state.carouselStatus, onChange: this.handleChecked }),
              react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('span', { className: 'admin__carousel__slider admin__carousel__slider--round' })
            )
          )
        );
      }
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
        'div',
        { className: 'admin' },
        react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
          'div',
          { className: 'admin__btn' },
          react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
            'button',
            { type: 'button', className: 'admin__btn--upload' },
            'Upload',
            react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('input', { style: { opacity: 0 }, onChange: this.adaptFileEventToValue(uploadToS3), type: 'file', multiple: true })
          ),
          react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
            'button',
            { className: 'admin__btn--save', onClick: this.saveCarouselContent },
            'Save'
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
          'div',
          { className: 'admin__carousel__toggle' },
          react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
            'span',
            null,
            'Carousel On/Off'
          ),
          react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
            'label',
            { className: 'admin__carousel__switch' },
            react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('input', { type: 'checkbox', checked: this.state.carouselStatus, onChange: this.handleChecked }),
            react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('span', { className: 'admin__carousel__slider admin__carousel__slider--round' })
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_ImagePreview__WEBPACK_IMPORTED_MODULE_18__["default"], {
          images: this.state.images,
          removeImage: this.removeImage,
          handleDragStart: this.handleDragStart,
          handleDragEnter: this.handleDragEnter,
          handleDrop: this.handleDrop,
          handleDragOver: this.handleDragOver,
          handleDragLeave: this.handleDragLeave,
          handleDragEnd: this.handleDragEnd,
          handleReorder: this.handleReorder
        }),
        react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
          'div',
          { id: 'upload-bar', className: 'upload-progress' },
          react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
            'div',
            { className: 'upload-bar' },
            '0%'
          )
        )
      );
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);

Carousel.propTypes = {
  loadingPages: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.bool,
  loadingPage: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.bool,
  fields: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.array,
  pages: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.array,
  uploadContent: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func
};
var CarouselWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_14__["compose"])(Object(react_apollo__WEBPACK_IMPORTED_MODULE_14__["graphql"])(_graphql_PageQuery_graphql__WEBPACK_IMPORTED_MODULE_17___default.a, {
  options: function options() {
    return { variables: { pageTitle: 'Home', fieldNames: [['hero', 'images'], ['hero', 'carouselActive']] } };
  },
  props: function props(_ref9) {
    var data = _ref9.data;

    // console.log('WHY IS THIS NOT RUNNING::', data);
    var page = data.page,
        loadingPage = data.loading,
        error = data.error;

    if (loadingPage && !error) {
      return { loadingPage: loadingPage, page: null };
    } else {
      return { page: page, loadingPage: loadingPage };
    }
  }
}))(Carousel);
/* harmony default export */ __webpack_exports__["default"] = (Object(_ImageAdapter__WEBPACK_IMPORTED_MODULE_19__["default"])(CarouselWithApollo));

/***/ }),

/***/ "../client/src/modules/admin/components/Locations/Form.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);





var _this = undefined;





var defaultDealer = {
  handle: '',
  name: ' ',
  street: ' ',
  suite: ' ',
  city: ' ',
  zip: ' ',
  state: ' ',
  country: ' ',
  email: ' ',
  phone: ' ',
  website: ' ',
  lat: ' ',
  lng: ' '
};
var Formic = function Formic(props) {
  // console.log('FORM PROPS', props);
  var dealer = void 0;
  if (props.hasOwnProperty('dealerByHandle')) {
    var _props$dealerByHandle = props.dealerByHandle,
        __typename = _props$dealerByHandle.__typename,
        rest = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(_props$dealerByHandle, ['__typename']);

    dealer = rest;
  } else {
    dealer = null;
  }
  // console.log('DEALER::', dealer);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
    enableReinitialize: true,
    initialValues: dealer ? dealer : defaultDealer,
    onSubmit: function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
        var id = _ref2.id,
            values = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(_ref2, ['id']);

        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return props.updateDealer(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, values, {
                  handle: values.name.split(' ').join('-').toLowerCase()
                }));

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(),
    render: function render(_ref3) {
      var values = _ref3.values,
          errors = _ref3.errors,
          touched = _ref3.touched,
          isSubmitting = _ref3.isSubmitting,
          setFieldValue = _ref3.setFieldValue;

      console.log('VALUES::', values);
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        formik__WEBPACK_IMPORTED_MODULE_5__["Form"],
        { className: 'admin__location__form' },
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'div',
          { className: 'admin__form__seo--field' },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'name', placeholder: 'Location Name' }),
          errors.title && touched.title && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.title
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'div',
          { className: 'admin__form__seo--field' },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'street', placeholder: 'Street' }),
          errors.title && touched.title && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.title
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'div',
          { className: 'admin__form__seo--field' },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'city', placeholder: 'City' }),
          errors.title && touched.title && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.title
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'div',
          { className: 'admin__form__seo--field' },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'state', placeholder: 'State' }),
          errors.title && touched.title && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.title
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'div',
          { className: 'admin__form__seo--field' },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'zip', placeholder: 'Zip Code' }),
          errors.title && touched.title && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.title
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'div',
          { className: 'admin__form__seo--field' },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], { className: 'admin__form__seo--input', type: 'tel', name: 'phone', placeholder: 'Phone' }),
          errors.title && touched.title && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.title
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'div',
          { className: 'admin__form__seo--field' },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], { className: 'admin__form__seo--input', type: 'email', name: 'email', placeholder: 'Email' }),
          errors.title && touched.title && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.title
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'div',
          { className: 'admin__form__seo--description' },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
            className: 'admin__form__seo--input',
            component: 'textarea',
            name: 'description',
            placeholder: 'Description'
          }),
          errors.description && touched.description && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.description
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'div',
          { className: 'admin__btn' },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'button',
            { type: 'button', className: 'admin__btn--upload' },
            'Image Upload',
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('input', {
              style: { opacity: 0 },
              id: 'file',
              name: 'image_url',
              type: 'file',
              onChange: props.adaptFileEventToValue(setFieldValue)
            })
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'div',
          { id: 'upload-bar', className: 'upload-progress' },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'div',
            { className: 'upload-bar' },
            '0%'
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'div',
          { className: 'admin__images' },
          props.image ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('img', {
            className: 'admin__images--image'
            // id={entry[0]}
            , draggable: 'false',
            src: props.image ? props.image : ''
          }) : null
        ),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'button',
          { type: 'submit', disabled: isSubmitting },
          'Submit'
        )
      );
    }
  });
};
Formic.propTypes = {
  adaptFileEventToValue: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  dealerByHandle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  image: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  updateDealer: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Formic);

/***/ }),

/***/ "../client/src/modules/admin/components/Locations/LocationInfo.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../client/src/modules/admin/components/Locations/Form.jsx");



var LocationInfo = function LocationInfo(props) {
  console.log('LocationInfo Props', props);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    { className: 'admin' },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'div',
      { className: 'admin__location' },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_1__["default"], props)
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (LocationInfo);

/***/ }),

/***/ "../client/src/modules/admin/components/Locations/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocationsView; });
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_components_web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../client/src/modules/common/components/web/index.jsx");








// import { Formik, Field, Form } from 'formik';


// import FormCreator from '../FormCreator';
// import Text from '../FormCreator/FormTypes/Text';
// import DealerForm from './Form';
//
// const LocationForm = new FormCreator({
//   field: [<Text />]
// });
var SelectLocationString = 'Please select a location';
// const AddDealer = props => {
//   return (
//     <Formik
//       enableReinitialize={true}
//       initialValues={{ name: '' }}
//       validateOnBlur={true}
//       // validate={validateAll}
//       validateOnChange={false}
//       onSubmit={async ({ name, ...values }, actions) => {
//         console.log('Values::', values);
//         console.log('ACTIONS::', actions);
//         const dealer = await props.updateDealer({
//           name,
//           handle: name
//             .split(' ')
//             .join('-')
//             .toLowerCase(),
//           ...values
//         });
//         // props.handleInitialLocation(dealer.name);
//         // console.log('DEALER:::', dealer);
//
//         // try {
//         //   switch (selectedCategory) {
//         //     case 'products':
//         //       await uploadSeoContent({ handle: selectedProduct, ...values });
//         //
//         //       break;
//         //     case 'brands':
//         //       await uploadSeo({ path: 'vendor', handle: selectedBrand, seo: { ...values } });
//         //       break;
//         //     case 'collections':
//         //       await uploadSeo({ path: 'collection', handle: selectedCollection, seo: { ...values } });
//         //       break;
//         //     default:
//         //       return;
//         //   }
//         // } catch (e) {
//         //   console.log('ERROR:', e);
//         // }
//         // MyImaginaryRestApiCall(user.id, values).then(
//         // updatedUser => {
//         actions.setSubmitting(false);
//         // updateUser(updatedUser);
//         // onClose();
//         // },
//         // error => {
//         // actions.setSubmitting(false);
//         // actions.setErrors(transformMyRestApiErrorsToAnObject(error));
//         // actions.setStatus({ msg: 'Set some arbitrary status or data' });
//         // }
//         // );
//       }}
//       render={({ errors, status, touched, isSubmitting, isValid }) => {
//         return (
//           <Form className="admin__form__seo">
//             <div className="admin__form__seo--field">
//               <label htmlFor="Location"> Please add your first location</label>
//               <Field className="admin__form__seo--input" type="text" name="name" placeholder="Name" />
//               {errors.title && touched.title && <div className="admin__form__seo--error">{errors.name}</div>}
//             </div>
//             {status && status.msg && <div className="admin__form__seo--status">{status.msg}</div>}
//
//             <button type="submit" disabled={isSubmitting}>
//               Submit
//             </button>
//           </Form>
//         );
//       }}
//     />
//   );
// };
var columns = [{
  title: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
    'a',
    { href: '#' },
    'Name'
  ),
  dataIndex: 'node',
  key: 'name',
  // eslint-disable-next-line
  render: function render(text, record) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
      'div',
      null,
      react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"],
        { to: { pathname: '/admin/locations/' + record.node.handle } },
        text
      )
    );
  }
}];

var LocationsView = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(LocationsView, _Component);

  function LocationsView(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LocationsView);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (LocationsView.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(LocationsView)).call(this, props));

    _this.handleSelectedLocation = function (e) {
      return _this.setState({ selectedLocation: e.target.value });
    };

    _this.handleInitialLocation = function (location) {
      // console.log('LOCATION::', location);
      _this.setState({ selectedLocation: location });
    };

    _this.state = {
      selectedLocation: SelectLocationString
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(LocationsView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('MOUNTING PROPS::', this.props);
      // this.setState({ selectedLocation: dealers.edges[0].node.name });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      // if (this.props.dealers) {
      //   console.l/og('WE HAVE DEALERS');
      // }
      if (prevProps.loadingDealers !== this.props.loadingDealers) {
        var dealers = this.props.dealers;
        // console.log('COMPONENT DID UPDATE::', dealers.edges[0].node);

        this.setState({ selectedLocation: dealers.edges[0].node.name });
      }
      return;
    }
  }, {
    key: 'render',
    value: function render() {
      // const { selectedLocation } = this.state;
      var _props = this.props,
          loadingDealers = _props.loadingDealers,
          dealers = _props.dealers;

      if (loadingDealers) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'div',
          null,
          'Loading'
        );
      }
      /*
      {dealers.edges.length == 0 ? (
        <AddDealer {...this.state} {...this.props} />
      ) : (
        <DealerForm {...this.state} {...this.props} />
      )}
       */
      // console.log('THE RENDER PROPS:::', dealers.edges.length);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'div',
        { className: 'admin__page__view' },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_common_components_web__WEBPACK_IMPORTED_MODULE_8__["Table"], { dataSource: dealers.edges, columns: columns })
      );
    }
  }]);

  return LocationsView;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);




LocationsView.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,
  updateDealer: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  dealers: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  loadingDealers: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool
};

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
                  return _this2.props.history.push({ pathname: '/admin/product-specs' });
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

                console.log('PRODUCT', productData);
                _this.setState({ currentCategoryValues: productData.seo });

              case 6:
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

                console.log('COLLECTION loaded::', collectionData);
                _this.setState({ currentCategoryValues: collectionData.seo });

              case 6:
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

                console.log('Brand::', vendorData);
                _this.setState({ currentCategoryValues: vendorData.seo });

              case 6:
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
                  console.log('UPLOAD SEO DATA:', seoData);
                  _context6.next = 3;
                  return mutate({ variables: { seo: seoData } });

                case 3:
                  _ref24 = _context6.sent;
                  updateProductSeo = _ref24.data.updateProductSeo;

                  console.log('CONTENT:', updateProductSeo);
                  return _context6.abrupt('return', updateProductSeo);

                case 7:
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

/***/ "../client/src/modules/admin/containers/Carousel.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/core-js/map");
/* harmony import */ var babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_3__);
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
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_AdminView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/admin/components/AdminView.web.jsx");
/* harmony import */ var _components_CarouselImages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/admin/components/CarouselImages/index.js");
/* harmony import */ var _graphql_PagesQuery_graphql__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/admin/graphql/PagesQuery.graphql");
/* harmony import */ var _graphql_PagesQuery_graphql__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_graphql_PagesQuery_graphql__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _graphql_UploadContent_graphql__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../client/src/modules/admin/graphql/UploadContent.graphql");
/* harmony import */ var _graphql_UploadContent_graphql__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_graphql_UploadContent_graphql__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../client/src/modules/admin/graphql/SimplePageQuery.graphql");
/* harmony import */ var _graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../client/src/modules/admin/graphql/Dealers.graphql");
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../client/src/modules/admin/graphql/DealerQuery.graphql");
/* harmony import */ var _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../client/src/modules/admin/graphql/UpdateDealer.graphql");
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_18__);










var _this2 = undefined;

/*eslint-disable no-unused-vars*/













var Admin = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(Admin, _React$Component);

  function Admin(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Admin);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, (Admin.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default()(Admin)).call(this, props));

    _this.imageToState = function (images) {
      _this.setState({
        images: images
      });
    };

    _this.save = function (page_id, content) {
      // console.log('THIS.PROPS::', this.props);
      _this.props.uploadContent(9, [{}]);
    };

    _this.state = {
      images: new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_3___default.a()
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(Admin, [{
    key: 'render',
    value: function render() {
      console.log('The props::::', this.props);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
        _components_AdminView__WEBPACK_IMPORTED_MODULE_11__["default"],
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, this.props, { save: this.save }),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_CarouselImages__WEBPACK_IMPORTED_MODULE_12__["default"], this.props)
      );
    }
  }]);

  return Admin;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

Admin.defaultProps = {
  images: []
};
var AdminWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_10__["compose"])(react_apollo__WEBPACK_IMPORTED_MODULE_10__["withApollo"], Object(react_apollo__WEBPACK_IMPORTED_MODULE_10__["graphql"])(_graphql_PagesQuery_graphql__WEBPACK_IMPORTED_MODULE_13___default.a, {
  props: function props(_ref) {
    var data = _ref.data;
    var pages = data.pages,
        loadingPages = data.loading,
        error = data.error;

    console.log('pages', pages);
    if (loadingPages && !error) {
      return { loadingPages: loadingPages, pages: null };
    } else {
      return { pages: pages, loadingPages: loadingPages };
    }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_10__["graphql"])(_graphql_UploadContent_graphql__WEBPACK_IMPORTED_MODULE_14___default.a, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      uploadContent: function () {
        var _ref3 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref4) {
          var page_id = _ref4.page_id,
              content = _ref4.content;

          var _ref5, uploadPageContent;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return mutate({ variables: { pageContent: { page_id: page_id, content: content } } });

                case 2:
                  _ref5 = _context.sent;
                  uploadPageContent = _ref5.data.uploadPageContent;

                  console.log('RETURN DATA::: ', uploadPageContent);
                  return _context.abrupt('return', uploadPageContent);

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function uploadContent(_x) {
          return _ref3.apply(this, arguments);
        };
      }()
    };
  }
}),
// graphql(DEALER_BY_HANDLE_QUERY, {
//   options: props => {
//     return { variables: { handle: ' ' } };
//   },
//   props: ({ data }) => {
//     console.log('data', data);
//     return { ...data };
//   }
// }),
Object(react_apollo__WEBPACK_IMPORTED_MODULE_10__["graphql"])(_graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_15___default.a, {
  options: function options() {
    return { variables: { pageTitle: 'Locations' } };
  },
  props: function props(_ref6) {
    var data = _ref6.data;

    console.log('Locations Page data', data);
    var page = data.page,
        loadingPage = data.loading,
        error = data.error;

    if (loadingPage && !error) {
      return { loadingPage: loadingPage, page: null };
    } else {
      return { page: page, loadingPage: loadingPage };
    }
  }
})
// graphql(DEALERS_QUERY, {
//   options: () => ({
//     variables: { first: 12, after: 0 }
//   }),
//   props: ({ data }) => {
//     console.log('DATA:::', data);
//     const { loading, error, dealers } = data;
//     if (error) {
//       console.log('DEALERS ERROR:::', error);
//       return { dealersError: error };
//     }
//     if (loading) {
//       return { loadingDealers: loading };
//     }
//     if (!loading && !error) {
//       return { loadingDealers: loading, dealers };
//     }
//   }
// }),
// graphql(UPDATE_DEALER, {
//   props: ({ mutate }) => ({
//     updateDealer: async dealer => {
//       try {
//         const {
//           data: { updateDealer }
//         } = await mutate({
//           variables: { dealer }
//         });
//         console.log('UPDATED::', updateDealer);
//         return updateDealer;
//       } catch (e) {
//         console.log('ERROR UPDATING:', e);
//       }
//     }
//   })
// })
)(Admin);

/* harmony default export */ __webpack_exports__["default"] = (AdminWithApollo);

/***/ }),

/***/ "../client/src/modules/admin/containers/Dashboard.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/core-js/map");
/* harmony import */ var babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_3__);
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
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_AdminView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/admin/components/AdminView.web.jsx");
/* harmony import */ var _graphql_PagesQuery_graphql__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/admin/graphql/PagesQuery.graphql");
/* harmony import */ var _graphql_PagesQuery_graphql__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_graphql_PagesQuery_graphql__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _graphql_UploadContent_graphql__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/admin/graphql/UploadContent.graphql");
/* harmony import */ var _graphql_UploadContent_graphql__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_graphql_UploadContent_graphql__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../client/src/modules/admin/graphql/SimplePageQuery.graphql");
/* harmony import */ var _graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../client/src/modules/admin/graphql/Dealers.graphql");
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../client/src/modules/admin/graphql/DealerQuery.graphql");
/* harmony import */ var _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../client/src/modules/admin/graphql/UpdateDealer.graphql");
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_17__);










var _this2 = undefined;

/*eslint-disable no-unused-vars*/











var Admin = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(Admin, _React$Component);

  function Admin(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Admin);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, (Admin.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default()(Admin)).call(this, props));

    _this.imageToState = function (images) {
      _this.setState({
        images: images
      });
    };

    _this.save = function (page_id, content) {
      // console.log('THIS.PROPS::', this.props);
      _this.props.uploadContent(9, [{}]);
    };

    _this.state = {
      images: new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_3___default.a()
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(Admin, [{
    key: 'render',
    value: function render() {
      console.log('The props::::', this.props);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_AdminView__WEBPACK_IMPORTED_MODULE_11__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, this.props, { save: this.save }));
    }
  }]);

  return Admin;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

Admin.defaultProps = {
  images: []
};
var AdminWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_10__["compose"])(react_apollo__WEBPACK_IMPORTED_MODULE_10__["withApollo"], Object(react_apollo__WEBPACK_IMPORTED_MODULE_10__["graphql"])(_graphql_PagesQuery_graphql__WEBPACK_IMPORTED_MODULE_12___default.a, {
  props: function props(_ref) {
    var data = _ref.data;
    var pages = data.pages,
        loadingPages = data.loading,
        error = data.error;

    console.log('pages', pages);
    if (loadingPages && !error) {
      return { loadingPages: loadingPages, pages: null };
    } else {
      return { pages: pages, loadingPages: loadingPages };
    }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_10__["graphql"])(_graphql_UploadContent_graphql__WEBPACK_IMPORTED_MODULE_13___default.a, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      uploadContent: function () {
        var _ref3 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref4) {
          var page_id = _ref4.page_id,
              content = _ref4.content;

          var _ref5, uploadPageContent;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return mutate({ variables: { pageContent: { page_id: page_id, content: content } } });

                case 2:
                  _ref5 = _context.sent;
                  uploadPageContent = _ref5.data.uploadPageContent;

                  console.log('RETURN DATA::: ', uploadPageContent);
                  return _context.abrupt('return', uploadPageContent);

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function uploadContent(_x) {
          return _ref3.apply(this, arguments);
        };
      }()
    };
  }
}),
// graphql(DEALER_BY_HANDLE_QUERY, {
//   options: props => {
//     return { variables: { handle: ' ' } };
//   },
//   props: ({ data }) => {
//     console.log('data', data);
//     return { ...data };
//   }
// }),
Object(react_apollo__WEBPACK_IMPORTED_MODULE_10__["graphql"])(_graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_14___default.a, {
  options: function options() {
    return { variables: { pageTitle: 'Locations' } };
  },
  props: function props(_ref6) {
    var data = _ref6.data;

    console.log('Locations Page data', data);
    var page = data.page,
        loadingPage = data.loading,
        error = data.error;

    if (loadingPage && !error) {
      return { loadingPage: loadingPage, page: null };
    } else {
      return { page: page, loadingPage: loadingPage };
    }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_10__["graphql"])(_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_15___default.a, {
  options: function options() {
    return {
      variables: { first: 12, after: 0 }
    };
  },
  props: function props(_ref7) {
    var data = _ref7.data;

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
      return { loadingDealers: loading, dealers: dealers };
    }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_10__["graphql"])(_graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_17___default.a, {
  props: function props(_ref8) {
    var mutate = _ref8.mutate;
    return {
      updateDealer: function () {
        var _ref9 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dealer) {
          var _ref10, updateDealer;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return mutate({
                    variables: { dealer: dealer }
                  });

                case 3:
                  _ref10 = _context2.sent;
                  updateDealer = _ref10.data.updateDealer;

                  console.log('UPDATED::', updateDealer);
                  return _context2.abrupt('return', updateDealer);

                case 9:
                  _context2.prev = 9;
                  _context2.t0 = _context2['catch'](0);

                  console.log('ERROR UPDATING:', _context2.t0);

                case 12:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2, [[0, 9]]);
        }));

        return function updateDealer(_x2) {
          return _ref9.apply(this, arguments);
        };
      }()
    };
  }
  // options: {
  //   refetchQueries: ({ data: { updateDealer } }) => {
  //     console.log('RESULT', updateDealer);
  //     return [
  //       { query: DEALER_BY_HANDLE_QUERY, variables: { handle: updateDealer.handle } },
  //       // { query: DEALERS_QUERY, variables: { first: 12, after: 0 } }
  //     ];
  //   }
  // }
}))(Admin);

/* harmony default export */ __webpack_exports__["default"] = (AdminWithApollo);

/***/ }),

/***/ "../client/src/modules/admin/containers/Location.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("ramda");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/admin/graphql/Dealers.graphql");
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/admin/graphql/DealerQuery.graphql");
/* harmony import */ var _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../client/src/modules/admin/graphql/UpdateDealer.graphql");
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _graphql_S3Upload_graphql__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../client/src/modules/admin/graphql/S3Upload.graphql");
/* harmony import */ var _graphql_S3Upload_graphql__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_graphql_S3Upload_graphql__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _styles_locations_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../client/src/modules/admin/styles/locations.scss");
/* harmony import */ var _styles_locations_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_locations_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_Locations_LocationInfo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../client/src/modules/admin/components/Locations/LocationInfo.jsx");
/* harmony import */ var _components_AdminView__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../client/src/modules/admin/components/AdminView.web.jsx");
/* harmony import */ var _components_CarouselImages_ImagePreview__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../client/src/modules/admin/components/CarouselImages/ImagePreview.jsx");
/* harmony import */ var _components_CarouselImages_ImageAdapter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../client/src/modules/admin/components/CarouselImages/ImageAdapter.jsx");









var _this3 = undefined;













/*eslint-disable no-unused-vars*/





var uploadToS3 = function uploadToS3() {
  return;
};

var Location = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Location, _React$Component);

  function Location(props) {
    var _this2 = this;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Location);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, (Location.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default()(Location)).call(this, props));

    _this.updateProgress = function (percent) {
      var elem = document.getElementById('upload-bar');
      elem.style.visibility = 'visible';
      elem.style.width = percent + '%';
      elem.innerHTML = percent * 1 + '%';
    };

    _this.uploadToS3 = function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(signedRequest, file) {
        var options;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = {
                  headers: {
                    'Content-Type': '"' + file.type + '"'
                  },
                  onUploadProgress: function (progressEvent) {
                    // console.log('');
                    var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                    // console.log('UPLOAD PROGRESS:::', percentCompleted);
                    this.setState({ percentCompleted: percentCompleted });
                  }.bind(_this)
                };
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_10___default.a.put(signedRequest, file, options);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.adaptFileEventToValue = function (delegate) {
      return function () {
        var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(e) {
          var files, signS3, getFileNameAndType, response, updatedImageData;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  files = e.target.files;
                  // console.log('FILES;::', files);

                  signS3 = _this.props.signS3;
                  // const image_data = new Map();

                  getFileNameAndType = function getFileNameAndType(file) {
                    return Object(ramda__WEBPACK_IMPORTED_MODULE_11__["pick"])(['name', 'type'], file);
                  };

                  response = function () {
                    var _ref3 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(signS3, _ref4) {
                      var name = _ref4.name,
                          type = _ref4.type;
                      return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.next = 2;
                              return signS3(name, type);

                            case 2:
                              return _context2.abrupt('return', _context2.sent);

                            case 3:
                            case 'end':
                              return _context2.stop();
                          }
                        }
                      }, _callee2, _this2);
                    }));

                    return function response(_x4, _x5) {
                      return _ref3.apply(this, arguments);
                    };
                  }();

                  if (files.length !== 0 && typeof files !== 'undefined') {
                    updatedImageData = void 0;
                    // TODO THIS FOREACH BIZ SUCKS WE ARE HAVING TO SET STATE WAY TO MUCH IN THIS LOOP
                    // BUT PLACING SETSTATE AFTER FOREACH FIRES BEFORE UPDATED IMAGEMAP IS CREATED

                    Object(ramda__WEBPACK_IMPORTED_MODULE_11__["forEach"])(function () {
                      var _ref5 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(file) {
                        var _getFileNameAndType, name, res, _res$data$signS, signedRequest, url;

                        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                // NOTE JUST need to update the state and then map the urls down on the preview component
                                _getFileNameAndType = getFileNameAndType(file), name = _getFileNameAndType.name;
                                _context3.next = 3;
                                return response(signS3, getFileNameAndType(file));

                              case 3:
                                res = _context3.sent;
                                _res$data$signS = res.data.signS3, signedRequest = _res$data$signS.signedRequest, url = _res$data$signS.url;
                                _context3.next = 7;
                                return _this.uploadToS3(signedRequest, file);

                              case 7:
                                _this.setState({ image: url });
                                // console.log('URL::', url);
                                // const currentImageSize = this.state.images.size;
                                // const fileIndex = currentImageSize === 0 ? 0 : currentImageSize;
                                // indexOf(file, values(files));
                                // image_data.set(`image_url-${fileIndex}`, { name: name, url });
                                // updatedImageData = new Map([...this.state.images, ...image_data]);
                                // this.setState({ images: updatedImageData });
                                // console.log('DELEGATE:', delegate);
                                delegate('image_url', url);

                              case 9:
                              case 'end':
                                return _context3.stop();
                            }
                          }
                        }, _callee3, _this2);
                      }));

                      return function (_x6) {
                        return _ref5.apply(this, arguments);
                      };
                    }(), Object(ramda__WEBPACK_IMPORTED_MODULE_11__["values"])(files));
                  }

                case 5:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this2);
        }));

        return function (_x3) {
          return _ref2.apply(this, arguments);
        };
      }();
    };

    _this.state = {
      image: null,
      percentCompleted: 0
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Location, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // console.log('MOUNT PROPS ON LOCATION:', this.props);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // console.log('C D U:::', this.props.dealerByHandle);
      if (this.props.dealerByHandle) {
        if (!prevState.image) {
          this.setState({ image: this.props.dealerByHandle.image_url });
        }
      }
      var percentCompleted = this.state.percentCompleted;
      // console.log('PERCENT COMPLETED::', percentCompleted);

      if (percentCompleted > 0) {
        this.updateProgress(percentCompleted);
      }
      if (percentCompleted == 0 || percentCompleted == 100) {
        var elem = document.getElementById('upload-bar');
        elem.style.visibility = 'hidden';
        return;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log('The props::::', this.props);
      // console.log('The state::', this.state);
      var image = this.state.image;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        _components_AdminView__WEBPACK_IMPORTED_MODULE_18__["default"],
        this.props,
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Locations_LocationInfo__WEBPACK_IMPORTED_MODULE_17__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ image: this.state.image, adaptFileEventToValue: this.adaptFileEventToValue }, this.props))
      );
    }
  }]);

  return Location;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var LocationWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_9__["compose"])(react_apollo__WEBPACK_IMPORTED_MODULE_9__["withApollo"],
// graphql(PAGES_QUERY, {
//   props: ({ data }) => {
//     const { pages, loading: loadingPages, error } = data;
//     console.log('pages', pages);
//     if (loadingPages && !error) {
//       return { loadingPages, pages: null };
//     } else {
//       return { pages, loadingPages };
//     }
//   }
// }),
// graphql(UPLOAD_CONTENT, {
//   props: ({ mutate }) => ({
//     uploadContent: async ({ page_id, content }) => {
//       // console.log('PAGE ID::', page_id);
//       // console.log('content::', content);
//       const {
//         data: { uploadPageContent }
//       } = await mutate({ variables: { pageContent: { page_id: page_id, content } } });
//       console.log('RETURN DATA::: ', uploadPageContent);
//       return uploadPageContent;
//     }
//   })
// }),
Object(react_apollo__WEBPACK_IMPORTED_MODULE_9__["graphql"])(_graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_13___default.a, {
  options: function options(props) {
    var handle = props.match.params.location_handle;
    return { variables: { handle: handle } };
  },
  props: function props(_ref6) {
    var data = _ref6.data;

    // console.log('DEALER HANDLE QUERY:', data);
    return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, data);
  }
}),
// graphql(SIMPLE_PAGE_QUERY, {
//   options: () => {
//     return { variables: { pageTitle: 'Locations' } };
//   },
//   props: ({ data }) => {
//     console.log('Locations Page data', data);
//     const { page, loading: loadingPage, error } = data;
//     if (loadingPage && !error) {
//       return { loadingPage, page: null };
//     } else {
//       return { page, loadingPage };
//     }
//   }
// }),
Object(react_apollo__WEBPACK_IMPORTED_MODULE_9__["graphql"])(_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_12___default.a, {
  options: function options() {
    return {
      variables: { first: 12, after: 0 }
    };
  },
  props: function props(_ref7) {
    var data = _ref7.data;

    // console.log('DATA:::', data);
    var loading = data.loading,
        error = data.error,
        dealers = data.dealers;

    if (error) {
      // console.log('DEALERS ERROR:::', error);
      return { dealersError: error };
    }
    if (loading) {
      return { loadingDealers: loading };
    }
    if (!loading && !error) {
      return { loadingDealers: loading, dealers: dealers };
    }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_9__["graphql"])(_graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_14___default.a, {
  props: function props(_ref8) {
    var mutate = _ref8.mutate;
    return {
      updateDealer: function () {
        var _ref9 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(dealer) {
          var _ref10, updateDealer;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.prev = 0;
                  _context5.next = 3;
                  return mutate({
                    variables: { dealer: dealer }
                  });

                case 3:
                  _ref10 = _context5.sent;
                  updateDealer = _ref10.data.updateDealer;
                  return _context5.abrupt('return', updateDealer);

                case 8:
                  _context5.prev = 8;
                  _context5.t0 = _context5['catch'](0);

                  console.log('ERROR UPDATING:', _context5.t0);

                case 11:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this3, [[0, 8]]);
        }));

        return function updateDealer(_x7) {
          return _ref9.apply(this, arguments);
        };
      }()
    };
  }
  // options: {
  //   refetchQueries: ({ data: { updateDealer } }) => {
  //     console.log('RESULT', updateDealer);
  //     return [
  //       { query: DEALER_BY_HANDLE_QUERY, variables: { handle: updateDealer.handle } },
  //       // { query: DEALERS_QUERY, variables: { first: 12, after: 0 } }
  //     ];
  //   }
  // }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_9__["graphql"])(_graphql_S3Upload_graphql__WEBPACK_IMPORTED_MODULE_15___default.a, {
  props: function props(_ref11) {
    var mutate = _ref11.mutate;
    return {
      signS3: function () {
        var _ref12 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(filename, filetype) {
          var response;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return mutate({
                    variables: {
                      filename: filename,
                      filetype: filetype
                    }
                  });

                case 2:
                  response = _context6.sent;
                  return _context6.abrupt('return', response);

                case 4:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, _this3);
        }));

        return function signS3(_x8, _x9) {
          return _ref12.apply(this, arguments);
        };
      }()
    };
  }
}))(Location);

/* harmony default export */ __webpack_exports__["default"] = (LocationWithApollo);

/***/ }),

/***/ "../client/src/modules/admin/containers/Locations.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/admin/graphql/Dealers.graphql");
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../client/src/modules/admin/graphql/UpdateDealer.graphql");
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Locations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/admin/components/Locations/index.js");
/* harmony import */ var _components_AdminView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/admin/components/AdminView.web.jsx");








var _this2 = undefined;





// import DEALER_BY_HANDLE_QUERY from '../graphql/DealerQuery.graphql';




/*eslint-disable no-unused-vars*/



var Locations = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Locations, _React$Component);

  function Locations() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Locations);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Locations.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(Locations)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Locations, [{
    key: 'render',
    value: function render() {
      console.log('The props::::', this.props);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_AdminView__WEBPACK_IMPORTED_MODULE_12__["default"],
        this.props,
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Locations__WEBPACK_IMPORTED_MODULE_11__["default"], this.props)
      );
    }
  }]);

  return Locations;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var LocationsWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["compose"])(react_apollo__WEBPACK_IMPORTED_MODULE_8__["withApollo"],
// graphql(PAGES_QUERY, {
//   props: ({ data }) => {
//     const { pages, loading: loadingPages, error } = data;
//     console.log('pages', pages);
//     if (loadingPages && !error) {
//       return { loadingPages, pages: null };
//     } else {
//       return { pages, loadingPages };
//     }
//   }
// }),
// graphql(UPLOAD_CONTENT, {
//   props: ({ mutate }) => ({
//     uploadContent: async ({ page_id, content }) => {
//       // console.log('PAGE ID::', page_id);
//       // console.log('content::', content);
//       const {
//         data: { uploadPageContent }
//       } = await mutate({ variables: { pageContent: { page_id: page_id, content } } });
//       console.log('RETURN DATA::: ', uploadPageContent);
//       return uploadPageContent;
//     }
//   })
// }),
// graphql(DEALER_BY_HANDLE_QUERY, {
//   options: props => {
//     return { variables: { handle: ' ' } };
//   },
//   props: ({ data }) => {
//     console.log('data', data);
//     return { ...data };
//   }
// }),
// graphql(SIMPLE_PAGE_QUERY, {
//   options: () => {
//     return { variables: { pageTitle: 'Locations' } };
//   },
//   props: ({ data }) => {
//     console.log('Locations Page data', data);
//     const { page, loading: loadingPage, error } = data;
//     if (loadingPage && !error) {
//       return { loadingPage, page: null };
//     } else {
//       return { page, loadingPage };
//     }
//   }
// }),
Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["graphql"])(_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_9___default.a, {
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
      return { loadingDealers: loading, dealers: dealers };
    }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["graphql"])(_graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_10___default.a, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      updateDealer: function () {
        var _ref3 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dealer) {
          var _ref4, updateDealer;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return mutate({
                    variables: { dealer: dealer }
                  });

                case 3:
                  _ref4 = _context.sent;
                  updateDealer = _ref4.data.updateDealer;

                  console.log('UPDATED::', updateDealer);
                  return _context.abrupt('return', updateDealer);

                case 9:
                  _context.prev = 9;
                  _context.t0 = _context['catch'](0);

                  console.log('ERROR UPDATING:', _context.t0);

                case 12:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[0, 9]]);
        }));

        return function updateDealer(_x) {
          return _ref3.apply(this, arguments);
        };
      }()
    };
  }
  // options: {
  //   refetchQueries: ({ data: { updateDealer } }) => {
  //     console.log('RESULT', updateDealer);
  //     return [
  //       { query: DEALER_BY_HANDLE_QUERY, variables: { handle: updateDealer.handle } },
  //       // { query: DEALERS_QUERY, variables: { first: 12, after: 0 } }
  //     ];
  //   }
  // }
}))(Locations);

/* harmony default export */ __webpack_exports__["default"] = (LocationsWithApollo);

/***/ }),

/***/ "../client/src/modules/admin/containers/ProductSpecs.jsx":
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
/* harmony import */ var _components_AdminView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../client/src/modules/admin/components/AdminView.web.jsx");
/* harmony import */ var _profile_components_ManageSpecs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../client/src/modules/profile/components/ManageSpecs.jsx");





/*eslint-disable no-unused-vars*/





var ProductSpecs = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ProductSpecs, _React$Component);

  function ProductSpecs() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ProductSpecs);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (ProductSpecs.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(ProductSpecs)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ProductSpecs, [{
    key: 'render',
    value: function render() {
      console.log('The props::::', this.props);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        _components_AdminView__WEBPACK_IMPORTED_MODULE_6__["default"],
        this.props,
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_profile_components_ManageSpecs__WEBPACK_IMPORTED_MODULE_7__["default"], this.props)
      );
    }
  }]);

  return ProductSpecs;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProductSpecs);

/***/ }),

/***/ "../client/src/modules/admin/containers/Seo.jsx":
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
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../client/src/modules/admin/components/Seo/index.js");
/* harmony import */ var _components_AdminView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../client/src/modules/admin/components/AdminView.web.jsx");








/*eslint-disable no-unused-vars*/



var Seo = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Seo, _React$Component);

  function Seo() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Seo);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Seo.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(Seo)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Seo, [{
    key: 'render',
    value: function render() {
      console.log('The props::::', this.props);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        _components_AdminView__WEBPACK_IMPORTED_MODULE_7__["default"],
        this.props,
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Seo__WEBPACK_IMPORTED_MODULE_6__["default"], this.props)
      );
    }
  }]);

  return Seo;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Seo);

/***/ }),

/***/ "../client/src/modules/admin/graphql/DealerQuery.graphql":
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"dealerByHandle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"handle"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dealerByHandle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"handle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"handle"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DealerDataFrag"},"directives":[]}]}}]}}],"loc":{"start":0,"end":142}};
    doc.loc.source = {"body":"#import \"./Frags/DealerFrag.graphql\"\n\nquery dealerByHandle($handle: String) {\n  dealerByHandle(handle: $handle) {\n    ...DealerDataFrag\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
  doc.definitions = doc.definitions.concat(unique(__webpack_require__("../client/src/modules/admin/graphql/Frags/DealerFrag.graphql").definitions));


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
    
        module.exports["dealerByHandle"] = oneQuery(doc, "dealerByHandle");
        


/***/ }),

/***/ "../client/src/modules/admin/graphql/Dealers.graphql":
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"dealers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dealers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dealers_count"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DealerDataFrag"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"dealer_info"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"end_cursor"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":283}};
    doc.loc.source = {"body":"#import \"./Frags/DealerFrag.graphql\"\n\nquery dealers($first: Int, $after: Int) {\n  dealers(first: $first, after: $after) {\n    dealers_count\n    edges {\n      node {\n        ...DealerDataFrag\n      }\n      cursor\n    }\n    dealer_info {\n      hasNextPage\n      end_cursor\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
  doc.definitions = doc.definitions.concat(unique(__webpack_require__("../client/src/modules/admin/graphql/Frags/DealerFrag.graphql").definitions));


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
    
        module.exports["dealers"] = oneQuery(doc, "dealers");
        


/***/ }),

/***/ "../client/src/modules/admin/graphql/Frags/DealerFrag.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DealerDataFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dealer"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"handle"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"street"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"suite"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"city"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"zip"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"state"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"phone"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"website"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lat"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lng"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"image_url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hours"},"arguments":[],"directives":[]}]}}],"loc":{"start":0,"end":179}};
    doc.loc.source = {"body":"fragment DealerDataFrag on Dealer {\n  id\n  handle\n  name\n  street\n  suite\n  city\n  zip\n  state\n  country\n  email\n  phone\n  website\n  lat\n  lng\n  image_url\n  description\n  hours\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    


/***/ }),

/***/ "../client/src/modules/admin/graphql/PageQuery.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"page"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageTitle"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fieldNames"}},"type":{"kind":"ListType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageTitle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageTitle"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fields"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"field_names"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fieldNames"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field_name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"field_label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"field_type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"field_value"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":255}};
    doc.loc.source = {"body":"query page($id: ID, $pageTitle: String, $fieldNames: [[String]]) {\n  page(id: $id, pageTitle: $pageTitle) {\n    id\n    title\n    name\n    fields(field_names: $fieldNames) {\n      field_name\n      field_label\n      field_type\n      field_value\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports["page"] = oneQuery(doc, "page");
        


/***/ }),

/***/ "../client/src/modules/admin/graphql/SimplePageQuery.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"page"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageTitle"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageTitle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageTitle"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":115}};
    doc.loc.source = {"body":"query page($id: ID, $pageTitle: String) {\n  page(id: $id, pageTitle: $pageTitle) {\n    id\n    title\n    name\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports["page"] = oneQuery(doc, "page");
        


/***/ }),

/***/ "../client/src/modules/admin/graphql/UpdateDealer.graphql":
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateDealer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dealer"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DealerInput"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateDealer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dealer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dealer"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DealerDataFrag"},"directives":[]}]}}]}}],"loc":{"start":0,"end":145}};
    doc.loc.source = {"body":"#import \"./Frags/DealerFrag.graphql\"\n\nmutation updateDealer($dealer: DealerInput) {\n  updateDealer(dealer: $dealer){\n    ...DealerDataFrag\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
  doc.definitions = doc.definitions.concat(unique(__webpack_require__("../client/src/modules/admin/graphql/Frags/DealerFrag.graphql").definitions));


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
    
        module.exports["updateDealer"] = oneQuery(doc, "updateDealer");
        


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
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../client/src/modules/admin/reducers/index.js");
/* harmony import */ var _user_containers_Auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../client/src/modules/user/containers/Auth.web.jsx");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/connector.ts");

// import { Route } from 'react-router-dom';












/* harmony default export */ __webpack_exports__["default"] = (new _connector__WEBPACK_IMPORTED_MODULE_9__["default"]({
  route: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_8__["AuthRoute"], { exact: true, path: '/admin/dashboard', role: ['admin'], component: _containers_Dashboard__WEBPACK_IMPORTED_MODULE_1__["default"] }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_8__["AuthRoute"], { exact: true, path: '/admin/carousel', role: ['admin'], component: _containers_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"] }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_8__["AuthRoute"], { exact: true, path: '/admin/product-specs', role: ['admin'], component: _containers_ProductSpecs__WEBPACK_IMPORTED_MODULE_3__["default"] }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_8__["AuthRoute"], { exact: true, path: '/admin/seo', role: ['admin'], component: _containers_Seo__WEBPACK_IMPORTED_MODULE_4__["default"] }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_8__["AuthRoute"], { exact: true, path: '/admin/locations', role: ['admin'], component: _containers_Locations__WEBPACK_IMPORTED_MODULE_5__["default"] }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_containers_Auth__WEBPACK_IMPORTED_MODULE_8__["AuthRoute"], { exact: true, path: '/admin/locations/:location_handle', role: ['admin'], component: _containers_Location__WEBPACK_IMPORTED_MODULE_6__["default"] })],
  reducer: { admin: _reducers__WEBPACK_IMPORTED_MODULE_7__["default"] }
}));

/***/ }),

/***/ "../client/src/modules/admin/styles/locations.scss":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/locations.scss");
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
      module.hot.accept("../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/locations.scss", function() {
        content = __webpack_require__("../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/locations.scss");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "../client/src/modules/common/components/global/components/Article.jsx":
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
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../settings.js");
/* harmony import */ var _styles_modules_article_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/common/components/global/styles/modules/article.scss");
/* harmony import */ var _styles_modules_article_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_modules_article_scss__WEBPACK_IMPORTED_MODULE_9__);











var Article = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Article, _React$Component);

  function Article() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Article);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_ref = Article.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(Article)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      width: null,
      height: null
    }, _this.saveRef = function (ref) {
      return _this.containerNode = ref;
    }, _this.measureArticle = function () {
      var _this$containerNode = _this.containerNode,
          clientWidth = _this$containerNode.clientWidth,
          clientHeight = _this$containerNode.clientHeight;

      _this.setState({
        width: clientWidth,
        height: clientHeight
      });
    }, _this.getDescription = function (description) {
      return description.split('\n').map(function (i, key) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'div',
          { key: key },
          i,
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', null)
        );
      });
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Article, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.measureArticle();
      if (typeof window !== 'undefined') {
        window.addEventListener('resize', this.measureArticle, false);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.state.width !== nextState.width || this.state.height !== nextState.height;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.measureArticle();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', this.measureArticle, false);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var article = this.props.article;

      console.log('article', article);
      var width = this.state.width;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'section',
        {
          ref: this.saveRef,
          className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('article', {
            'article--xsmall': width < _settings__WEBPACK_IMPORTED_MODULE_8__["default"].breakpoints.small
          }, {
            'article--small': width < _settings__WEBPACK_IMPORTED_MODULE_8__["default"].breakpoints.medium && width >= _settings__WEBPACK_IMPORTED_MODULE_8__["default"].breakpoints.small
          }, {
            'article--medium': width < _settings__WEBPACK_IMPORTED_MODULE_8__["default"].breakpoints.large && width >= _settings__WEBPACK_IMPORTED_MODULE_8__["default"].breakpoints.medium
          }, {
            'article--large': width >= _settings__WEBPACK_IMPORTED_MODULE_8__["default"].breakpoints.large
          })
        },
        'article' in this.props ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'article',
          null,
          article.title ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            'header',
            { className: 'header header--primary article__title article__title--centered' },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              'h2',
              null,
              article.title
            )
          ) : null,
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            'div',
            null,
            'paragraphs' in article && article.paragraphs.length > 0 ? article.paragraphs.map(function (paragraph, i) {
              return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'p',
                { key: i, className: 'article__paragraph' },
                paragraph
              );
            }) : null,
            'locationInfo' in article ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              'div',
              null,
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'h6',
                { className: 'header header--secondary' },
                'Address: '
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'address',
                null,
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  'div',
                  null,
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    'a',
                    {
                      rel: 'noopener noreferrer',
                      target: '_blank',
                      href: 'https://www.google.com/maps/dir/?api=1&destination=' + article.locationInfo.street.replace(' ', '+') + '+' + article.locationInfo.city.replace(' ', '+') + '+' + article.locationInfo.country.replace(' ', '+')
                    },
                    article.locationInfo.street
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  'div',
                  null,
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    'a',
                    {
                      rel: 'noopener noreferrer',
                      target: '_blank',
                      href: 'https://www.google.com/maps/dir/?api=1&destination=' + article.locationInfo.street.replace(' ', '+') + '+' + article.locationInfo.city.replace(' ', '+') + '+' + article.locationInfo.country.replace(' ', '+')
                    },
                    article.locationInfo.city,
                    ', ',
                    article.locationInfo.state,
                    ' ',
                    article.locationInfo.zip
                  )
                ),
                'phone' in article.locationInfo ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  'div',
                  null,
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    'h6',
                    { className: 'header header--secondary' },
                    'Phone: '
                  ),
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    'a',
                    { href: 'tel:' + article.locationInfo.phone },
                    article.locationInfo.phone
                  )
                ) : null,
                'hours' in article.locationInfo && article.locationInfo.hours !== '' ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  'div',
                  null,
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    'h6',
                    { className: 'header header--secondary' },
                    'Hours: '
                  ),
                  article.locationInfo.hours
                ) : null,
                'email' in article.locationInfo && article.locationInfo.email !== '' ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  'div',
                  null,
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    'h6',
                    { className: 'header header--secondary' },
                    'Email: '
                  ),
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    'a',
                    { href: 'mailto:' + article.locationInfo.email },
                    article.locationInfo.email
                  )
                ) : null
              ),
              'description' in article.locationInfo && article.locationInfo.description !== '' ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'div',
                null,
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  'h6',
                  { className: 'header header--secondary' },
                  'About: '
                ),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  'p',
                  null,
                  this.getDescription(article.locationInfo.description)
                )
              ) : null
            ) : null
          )
        ) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'span',
          null,
          'No article to display'
        )
      );
    }
  }]);

  return Article;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

Article.propTypes = {
  article: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object
};

Article.defaultProps = {
  article: {
    title: 'Lorem Ipsum',
    paragraphs: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque dignissim enim sit amet. Tincidunt id aliquet risus feugiat in ante metus dictum. Sed sed risus pretium quam vulputate dignissim suspendisse in. Vitae congue mauris rhoncus aenean. Est lorem ipsum dolor sit. Ante metus dictum at tempor commodo. Sed augue lacus viverra vitae congue eu consequat ac felis. Mauris sit amet massa vitae tortor condimentum. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien.', 'Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Cursus mattis molestie a iaculis. Morbi tristique senectus et netus et malesuada fames ac turpis. Egestas purus viverra accumsan in nisl. Leo in vitae turpis massa sed elementum tempus. Consequat mauris nunc congue nisi vitae. Congue quisque egestas diam in arcu cursus euismod quis viverra. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Aliquet porttitor lacus luctus accumsan tortor posuere. Fusce ut placerat orci nulla pellentesque. Turpis egestas maecenas pharetra convallis posuere morbi leo. Sed vulputate odio ut enim blandit volutpat.']
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ }),

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
  return columns.map(function (_ref) {
    var title = _ref.title,
        dataIndex = _ref.dataIndex,
        renderHeader = _ref.renderHeader,
        key = _ref.key;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      'th',
      { key: key, className: 'w-' + (columns.length === 2 ? 100 : 100 / columns.length) },
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

    // console.log('ENTRY::', entry, 'DATA INDEX::', dataIndex, entry[dataIndex][key]);
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

      if (this.props.page) {
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
        return this.setState({ images: carouselImages, carouselActive: carouselActive, defaultImage: defaultImage });
      }

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
      // console.log('THIS PROPS PAGE::', this.props, prevProps);
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
      // console.log('THE STATE:::', this.state);

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
            title: _settings__WEBPACK_IMPORTED_MODULE_9__["default"].app.name + ':  Quality Home Fitness Equipment for Sale.',
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
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            'div',
            null,
            'Loading'
          )
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
  locationObj: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object
};

/* harmony default export */ __webpack_exports__["default"] = (LocationInfo);

/***/ }),

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

          // console.log('/NODE::', node);
          var markerLat = node.lat,
              markerLng = node.lng;
          // console.log('MARKERS:::', markerLat, markerLng);

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
      // console.log('THE LOCATIONS::', locations);

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
      if (this.props.loadingLocations) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
          _common_components_global__WEBPACK_IMPORTED_MODULE_13__["PageLayout"],
          null,
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            'div',
            null,
            'Loading'
          )
        );
      }
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
  locations: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
  loadingLocations: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool
};
LocationsView.defaultProps = {};

/* harmony default export */ __webpack_exports__["default"] = (LocationsView);

/***/ }),

/***/ "../client/src/modules/locations/components/Map.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_UserLocation_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../client/src/modules/locations/assets/UserLocation.png");
/* harmony import */ var _assets_UserLocation_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_UserLocation_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_MapMarker_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../client/src/modules/locations/assets/MapMarker.png");
/* harmony import */ var _assets_MapMarker_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_MapMarker_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_map_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../client/src/modules/locations/styles/map.scss");
/* harmony import */ var _styles_map_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_map_scss__WEBPACK_IMPORTED_MODULE_5__);



// import { FaLocationArrow, FaMapMarkerAlt } from 'react-icons/fa';




var Map = Object(recompose__WEBPACK_IMPORTED_MODULE_1__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_1__["withProps"])({
  googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCb-6kBhsPsodgVOuaG6AubbqcmFx3sJiA&v=3.exp&libraries=geometry,drawing,places',
  loadingElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { className: 'map-loading-ele', style: { height: '100%' } }),
  containerElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { className: 'map__container', style: { height: '100%' } }),
  mapElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { className: 'map__map-element', style: { height: '100%' } })
}), Object(recompose__WEBPACK_IMPORTED_MODULE_1__["withStateHandlers"])(function () {
  return { isOpen: null };
}, {
  onToggleOpen: function onToggleOpen() {
    return function (marker) {
      return {
        isOpen: marker.street
      };
    };
  }
}), Object(recompose__WEBPACK_IMPORTED_MODULE_1__["lifecycle"])({
  componentWillMount: function componentWillMount() {
    var refs = {};
    this.setState({
      onMapMounted: function onMapMounted(ref) {
        refs.map = ref;
      },
      onBoundsChanged: function onBoundsChanged() {
        // probs need to bring this back long term
      },
      onPlacesChanged: function onPlacesChanged(bounds) {
        // console.log('BOUNDS:;', bounds);
        // if (bounds.j.j === bounds.j.l && bounds.l.j === bounds.l.l) {
        //   const center = this.props.center;
        //   const { dealers } = this.props;
        //   const dealer = this.props.closestDealer(dealers, center);
        //   refs.map.fitBounds(bounds.extend({ lat: dealer.lat, lng: dealer.lng }));
        // } else {
        refs.map.fitBounds(bounds);
        // }
      }
    });
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.center !== this.props.center) {
      this.state.onPlacesChanged(nextProps.bounds);
    }
  }
}), react_google_maps__WEBPACK_IMPORTED_MODULE_2__["withScriptjs"], react_google_maps__WEBPACK_IMPORTED_MODULE_2__["withGoogleMap"])(function (props) {
  if (props.selectedLocation) props.onToggleOpen({ street: props.selectedLocation });

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    react_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMap"],
    {
      options: {
        fullscreenControl: props.fullscreenControl
      },
      ref: props.onMapMounted,
      onBoundsChanged: props.onBoundsChanged,
      defaultZoom: props.zoom,
      defaultCenter: props.center
    },
    props.markers ? props.markers.map(function (_ref) {
      var marker = _ref.node;

      // console.log('MARKER::', parseFloat(marker.lat));
      return marker ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react_google_maps__WEBPACK_IMPORTED_MODULE_2__["Marker"],
        {
          key: marker.id
          // ref={c => (this[`marker_${marker.id}`] = c)}
          , icon: { url: _assets_MapMarker_png__WEBPACK_IMPORTED_MODULE_4___default.a },
          position: { lat: parseFloat(marker.lat), lng: parseFloat(marker.lng) },
          onClick: function onClick() {
            props.selectLocation(marker.street);
            props.onToggleOpen(marker);
          }
        },
        props.isOpen === marker.street && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react_google_maps__WEBPACK_IMPORTED_MODULE_2__["InfoWindow"],
          {
            className: 'map__info-window',
            onCloseClick: function onCloseClick() {
              props.clearLocation();
              props.onToggleOpen({ street: null });
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'map__info-window-text-container', 'data-marker-id': marker.id },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              { className: 'map__info-window-text' },
              marker.name
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              { className: 'map__info-window-text' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'a',
                {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  href: 'https://www.google.com/maps/dir/?api=1&destination=' + marker.street.replace(' ', '+') + '+' + marker.city.replace(' ', '+') + '+' + marker.country.replace(' ', '+')
                },
                marker.street,
                ' ',
                marker.address_2 ? ', ' + marker.address_2 : null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),
                marker.city,
                ', ',
                marker.state,
                ' ',
                marker.zip
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              { className: 'map__info-window-text' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'a',
                { href: 'tel:' + marker.phone },
                marker.phone
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              { className: 'map__info-window-text' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'a',
                { href: 'mailto:' + marker.email },
                marker.email
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              { className: 'map__info-window-text' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'a',
                {
                  className: 'map__info-window-text',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  href: 'https://' + marker.website
                },
                marker.website
              )
            )
          )
        )
      ) : null;
    }) : null,
    props.search && props.center ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
      position: props.center,
      icon: {
        url: _assets_UserLocation_png__WEBPACK_IMPORTED_MODULE_3___default.a
      }
    }) : null
  );
});

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

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

/***/ }),

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

// Locations.defaultProps = {
//   locations: [
//     {
//       id: '1',
//       name: 'California Home Fitness',
//       address_1: '11910 Wilshire Blvd',
//       address_2: '',
//       city: 'Los Angeles',
//       state: 'CA',
//       zip: '90025',
//       country: 'United States',
//       email: 'westla@cahomefitness.com',
//       phone: '310-479-0066',
//       lat: 34.0461675,
//       lng: -118.4666688,
//       image_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/location_los-angeles.png',
//       description:
//         'Our Los Angeles store offers the area’s largest selection of high quality fitness equipment at the most affordable prices around.  Highly trained Fitness Consultants are ready to help you select the equipment  that’s right for your fitness goal and budget.\n\nCalifornia Home Fitness Los Angeles offers a wide variety of quality products, including:\n\n- Treadmills\n- Ellipticals\n- Home gyms\n- Exercise bikes\n- Fitness accessories\n\nCalifornia Home Fitness specializes in selling premium fitness equipment for the home and commercial locations at the best prices. Our stores are stocked with everything you need from beginner to expert level treadmills, elliptical cross trainers, exercise bikes, functional trainers, home gyms, vibration trainers, dumbbells and more. Our product line consists of the strongest brands in the industry such as Precor, Life Fitness, Cybex, Spirit, Inspire, Bodycraft, Cascade, DKN, Power Block and Go Fit. We bring more than 25 years industry experience and knowledge to assist you in finding the equipment to satisfy your fitness needs. We pride ourselves in building strong relationships with our clientele and always being there for them, from the initial contact, through the purchase and install, and continuing to make sure your needs are being met. We are here to help you achieve your fitness goals.',
//       url_name: 'los-angeles',
//       hours: '10am - 7pm Mon - Fri, 10am - 6pm Sat, 11am-5pm Sun'
//     },
//     {
//       id: '2',
//       name: 'California Home Fitness',
//       address_1: '3601 Jamboree Rd',
//       address_2: '',
//       city: 'Newport Beach',
//       state: 'CA',
//       zip: '92660',
//       country: 'United States',
//       email: 'newport@cahomefitness.com',
//       phone: '949-253-3410',
//       lat: 33.6566691,
//       lng: -117.8666623,
//       image_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/location_newport-beach.png',
//       description:
//         'Our Newport Beach store offers the area’s largest selection of high quality fitness equipment at the most affordable prices around.  Highly trained Fitness Consultants are ready to help you select the equipment  that’s right for your fitness goal and budget.\n\nCalifornia Home Fitness Newport Beach offers a wide variety of quality products, including:\n\n- Treadmills\n- Ellipticals\n- Home gyms\n- Exercise bikes\n- Fitness accessories\n\nCalifornia Home Fitness specializes in selling premium fitness equipment for the home and commercial locations at the best prices. Our stores are stocked with everything you need from beginner to expert level treadmills, elliptical cross trainers, exercise bikes, functional trainers, home gyms, vibration trainers, dumbbells and more. Our product line consists of the strongest brands in the industry such as Precor, Life Fitness, Cybex, Spirit, Inspire, Bodycraft, Cascade, DKN, Power Block and Go Fit. We bring more than 25 years industry experience and knowledge to assist you in finding the equipment to satisfy your fitness needs. We pride ourselves in building strong relationships with our clientele and always being there for them, from the initial contact, through the purchase and install, and continuing to make sure your needs are being met. We are here to help you achieve your fitness goals.',
//       url_name: 'newport-beach',
//       hours: '10am - 7pm Mon - Fri, 10am - 6pm Sat, 11am-5pm Sun'
//     },
//     {
//       id: '3',
//       name: 'California Home Fitness',
//       address_1: '20502 Hawthorne Blvd',
//       address_2: '',
//       city: 'Torrance',
//       state: 'CA',
//       zip: '90503',
//       country: 'United States',
//       email: 'torrance@cahomefitness.com',
//       phone: '310-214-9100',
//       lat: 33.8447725,
//       lng: -118.3555569,
//       image_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/location_torrace.png',
//       description:
//         'Our Torrace store offers the area’s largest selection of high quality fitness equipment at the most affordable prices around.  Highly trained Fitness Consultants are ready to help you select the equipment  that’s right for your fitness goal and budget.\n\nCalifornia Home Fitness Torrance offers a wide variety of quality products, including:\n\n- Treadmills\n- Ellipticals\n- Home gyms\n- Exercise bikes\n- Fitness accessories\n\nCalifornia Home Fitness specializes in selling premium fitness equipment for the home and commercial locations at the best prices. Our stores are stocked with everything you need from beginner to expert level treadmills, elliptical cross trainers, exercise bikes, functional trainers, home gyms, vibration trainers, dumbbells and more. Our product line consists of the strongest brands in the industry such as Precor, Life Fitness, Cybex, Spirit, Inspire, Bodycraft, Cascade, DKN, Power Block and Go Fit. We bring more than 25 years industry experience and knowledge to assist you in finding the equipment to satisfy your fitness needs. We pride ourselves in building strong relationships with our clientele and always being there for them, from the initial contact, through the purchase and install, and continuing to make sure your needs are being met. We are here to help you achieve your fitness goals.',
//       url_name: 'torrace',
//       hours: '10am - 7pm Mon - Fri, 10am - 6pm Sat, 11am-5pm Sun'
//     },
//     {
//       id: '4',
//       name: 'California Home Fitness',
//       address_1: '3700 E Colorado Blvd',
//       address_2: '',
//       city: 'Pasadena',
//       state: 'CA',
//       zip: '91107',
//       country: 'United States',
//       email: 'pasadena@cahomefitness.com',
//       phone: '626-405-1787',
//       lat: 34.146132,
//       lng: -118.0752393,
//       image_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/location_pasadena.png',
//       description:
//         'Our Pasadena store offers the area’s largest selection of high quality fitness equipment at the most affordable prices around.  Highly trained Fitness Consultants are ready to help you select the equipment  that’s right for your fitness goal and budget.\n\nCalifornia Home Fitness Pasadena offers a wide variety of quality products, including:\n\n- Treadmills\n- Ellipticals\n- Home gyms\n- Exercise bikes\n- Fitness accessories\n\nCalifornia Home Fitness specializes in selling premium fitness equipment for the home and commercial locations at the best prices. Our stores are stocked with everything you need from beginner to expert level treadmills, elliptical cross trainers, exercise bikes, functional trainers, home gyms, vibration trainers, dumbbells and more. Our product line consists of the strongest brands in the industry such as Precor, Life Fitness, Cybex, Spirit, Inspire, Bodycraft, Cascade, DKN, Power Block and Go Fit. We bring more than 25 years industry experience and knowledge to assist you in finding the equipment to satisfy your fitness needs. We pride ourselves in building strong relationships with our clientele and always being there for them, from the initial contact, through the purchase and install, and continuing to make sure your needs are being met. We are here to help you achieve your fitness goals.',
//       url_name: 'pasadena',
//       hours: '10am - 7pm Mon - Fri, 11am - 6pm Sun'
//     },
//     {
//       id: '5',
//       name: 'California Home Fitness',
//       address_1: '16163 Lake Forest Drive',
//       address_2: '',
//       city: 'Irvine',
//       state: 'CA',
//       zip: '92618',
//       country: 'United States',
//       email: 'irvine@cahomefitness.com',
//       phone: '949-251-9500',
//       lat: 33.62933,
//       lng: -117.7266217,
//       image_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/location_irvine.png',
//       description:
//         'Our Irvine store offers the area’s largest selection of high quality fitness equipment at the most affordable prices around.  Highly trained Fitness Consultants are ready to help you select the equipment  that’s right for your fitness goal and budget.\n\nCalifornia Home Fitness Irvine offers a wide variety of quality products, including:\n\n- Treadmills\n- Ellipticals\n- Home gyms\n- Exercise bikes\n- Fitness accessories\n\nCalifornia Home Fitness specializes in selling premium fitness equipment for the home and commercial locations at the best prices. Our stores are stocked with everything you need from beginner to expert level treadmills, elliptical cross trainers, exercise bikes, functional trainers, home gyms, vibration trainers, dumbbells and more. Our product line consists of the strongest brands in the industry such as Precor, Life Fitness, Cybex, Spirit, Inspire, Bodycraft, Cascade, DKN, Power Block and Go Fit. We bring more than 25 years industry experience and knowledge to assist you in finding the equipment to satisfy your fitness needs. We pride ourselves in building strong relationships with our clientele and always being there for them, from the initial contact, through the purchase and install, and continuing to make sure your needs are being met. We are here to help you achieve your fitness goals.',
//       url_name: 'irvine',
//       hours: '10am - 7pm Mon - Sat, 10am - 6pm Sat, 11am-5pm Sun'
//     },
//     {
//       id: '6',
//       name: 'California Home Fitness',
//       address_1: '14255 Ventura Blvd',
//       address_2: '',
//       city: 'Sherman Oaks',
//       state: 'CA',
//       zip: '91423',
//       country: 'United States',
//       email: 'shermanoaks@cahomefitness.com',
//       phone: '818-990-0990',
//       lat: 34.1504342,
//       lng: -118.4461679,
//       image_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/location_sherman-oaks.png',
//       description:
//         'Our Sherman Oaks store offers the area’s largest selection of high quality fitness equipment at the most affordable prices around.  Highly trained Fitness Consultants are ready to help you select the equipment  that’s right for your fitness goal and budget.\n\nCalifornia Home Fitness Sherman Oaks offers a wide variety of quality products, including:\n\n- Treadmills\n- Ellipticals\n- Home gyms\n- Exercise bikes\n- Fitness accessories\n\nCalifornia Home Fitness specializes in selling premium fitness equipment for the home and commercial locations at the best prices. Our stores are stocked with everything you need from beginner to expert level treadmills, elliptical cross trainers, exercise bikes, functional trainers, home gyms, vibration trainers, dumbbells and more. Our product line consists of the strongest brands in the industry such as Precor, Life Fitness, Cybex, Spirit, Inspire, Bodycraft, Cascade, DKN, Power Block and Go Fit. We bring more than 25 years industry experience and knowledge to assist you in finding the equipment to satisfy your fitness needs. We pride ourselves in building strong relationships with our clientele and always being there for them, from the initial contact, through the purchase and install, and continuing to make sure your needs are being met. We are here to help you achieve your fitness goals.',
//       url_name: 'sherman-oaks',
//       hours: '10am - 7pm Mon - Fri, 10am - 6pm Sat, 11am-5pm Sun'
//     },
//     {
//       id: '7',
//       name: 'California Home Fitness',
//       address_1: '9025 Santa Monica Blvd',
//       address_2: '',
//       city: 'West Hollywood',
//       state: 'CA',
//       zip: '90069',
//       country: 'United States',
//       email: 'westhollywood@cahomefitness.com',
//       phone: '424-284-3824',
//       lat: 34.0827223,
//       lng: -118.3900462,
//       image_url: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/location_west-hollywood.png',
//       description:
//         'Our West Hollywood store offers the area’s largest selection of high quality fitness equipment at the most affordable prices around.  Highly trained Fitness Consultants are ready to help you select the equipment  that’s right for your fitness goal and budget.\n\nCalifornia Home Fitness West Hollywood offers a wide variety of quality products, including:\n\n- Treadmills\n- Ellipticals\n- Home gyms\n- Exercise bikes\n- Fitness accessories\n\nCalifornia Home Fitness specializes in selling premium fitness equipment for the home and commercial locations at the best prices. Our stores are stocked with everything you need from beginner to expert level treadmills, elliptical cross trainers, exercise bikes, functional trainers, home gyms, vibration trainers, dumbbells and more. Our product line consists of the strongest brands in the industry such as Precor, Life Fitness, Cybex, Spirit, Inspire, Bodycraft, Cascade, DKN, Power Block and Go Fit. We bring more than 25 years industry experience and knowledge to assist you in finding the equipment to satisfy your fitness needs. We pride ourselves in building strong relationships with our clientele and always being there for them, from the initial contact, through the purchase and install, and continuing to make sure your needs are being met. We are here to help you achieve your fitness goals.',
//       url_name: 'west-hollywood',
//       hours: '10am - 6pm Mon - Fri, 10am - 6pm Sat, 11am-5pm Sun'
//     }
//   ]
// };

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_6__["compose"])(Object(react_apollo__WEBPACK_IMPORTED_MODULE_6__["graphql"])(_admin_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_8___default.a, {
  options: function options() {
    return {
      variables: { first: 12, after: 0 }
    };
  },
  props: function props(_ref) {
    var data = _ref.data;

    // console.log('DATA:::', data);
    var loading = data.loading,
        error = data.error,
        dealers = data.dealers;

    if (error) {
      // console.log('DE÷ALERS ERROR:::', error);
      return { dealersError: error };
    }
    if (loading) {
      return { loadingLocations: loading };
    }
    if (!loading && !error) {
      // console.log('DEALERS::', dealers);
      return { loadingLocations: loading, locations: dealers.edges };
    }
  }
}))(Locations));

/***/ }),

/***/ "../client/src/modules/locations/index.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../client/src/i18n/index.ts");
/* harmony import */ var _modules_common_components_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../client/src/modules/common/components/web/index.jsx");
/* harmony import */ var _containers_Locations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../client/src/modules/locations/containers/Locations.jsx");
/* harmony import */ var _containers_LocationLosAngeles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../client/src/modules/locations/containers/LocationLosAngeles.jsx");
/* harmony import */ var _containers_LocationNewportBeach__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../client/src/modules/locations/containers/LocationNewportBeach.jsx");
/* harmony import */ var _containers_LocationTorrace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../client/src/modules/locations/containers/LocationTorrace.jsx");
/* harmony import */ var _containers_LocationPasadena__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../client/src/modules/locations/containers/LocationPasadena.jsx");
/* harmony import */ var _containers_LocationIrvine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/locations/containers/LocationIrvine.jsx");
/* harmony import */ var _containers_LocationShermanOaks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../client/src/modules/locations/containers/LocationShermanOaks.jsx");
/* harmony import */ var _containers_LocationWestHollywood__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/locations/containers/LocationWestHollywood.jsx");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/locations/locales/index.js");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_locales__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/connector.ts");
















var NavLinkWithI18n = Object(_i18n__WEBPACK_IMPORTED_MODULE_2__["default"])('locations')(function (_ref) {
  var t = _ref.t;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
    { to: '/locations', className: 'nav-link', activeClassName: 'active' },
    t('navLink')
  );
});
/* harmony default export */ __webpack_exports__["default"] = (new _connector__WEBPACK_IMPORTED_MODULE_13__["default"]({
  route: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: '/locations', component: _containers_Locations__WEBPACK_IMPORTED_MODULE_4__["default"] }),
  // <Route exact path="/locations/los-angeles" component={LocationLosAngeles} />,
  // <Route exact path="/locations/newport-beach" component={LocationNewportBeach} />,
  // <Route exact path="/locations/torrace" component={LocationTorrace} />,
  // <Route exact path="/locations/pasadena" component={LocationPasadena} />,
  // <Route exact path="/locations/irvine" component={LocationIrvine} />,
  // <Route exact path="/locations/sherman-oaks" component={LocationShermanOaks} />,
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: '/locations/:location_handle', component: _containers_LocationWestHollywood__WEBPACK_IMPORTED_MODULE_11__["default"] })],
  navItem: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _modules_common_components_web__WEBPACK_IMPORTED_MODULE_3__["MenuItem"],
    { key: '/Locations' },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavLinkWithI18n, null)
  ),
  localization: { ns: 'locations', resources: _locales__WEBPACK_IMPORTED_MODULE_12___default.a }
}));

/***/ }),

/***/ "../client/src/modules/user/containers/Auth.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoute", function() { return AuthRoute; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AuthBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../client/src/modules/user/containers/AuthBase.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withUser", function() { return _AuthBase__WEBPACK_IMPORTED_MODULE_5__["withUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasRole", function() { return _AuthBase__WEBPACK_IMPORTED_MODULE_5__["hasRole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withLoadedUser", function() { return _AuthBase__WEBPACK_IMPORTED_MODULE_5__["withLoadedUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IfLoggedIn", function() { return _AuthBase__WEBPACK_IMPORTED_MODULE_5__["IfLoggedIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IfNotLoggedIn", function() { return _AuthBase__WEBPACK_IMPORTED_MODULE_5__["IfNotLoggedIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withLogout", function() { return _AuthBase__WEBPACK_IMPORTED_MODULE_5__["withLogout"]; });









var AuthRoute = Object(_AuthBase__WEBPACK_IMPORTED_MODULE_5__["withLoadedUser"])(function (_ref) {
  var currentUser = _ref.currentUser,
      role = _ref.role,
      _ref$redirect = _ref.redirect,
      redirect = _ref$redirect === undefined ? '/admin/login' : _ref$redirect,
      redirectOnLoggedIn = _ref.redirectOnLoggedIn,
      Component = _ref.component,
      rest = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ['currentUser', 'role', 'redirect', 'redirectOnLoggedIn', 'component']);

  var RenderComponent = function RenderComponent(props) {
    console.log('CURRENTUER:::', currentUser, role);
    // The users is not logged in
    if (redirectOnLoggedIn && currentUser) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], { to: { pathname: redirect } });
    }

    return isRoleMatch(role, currentUser) ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ currentUser: currentUser }, props, rest)) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], { to: { pathname: redirect } });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rest, { render: RenderComponent }));
});

AuthRoute.propTypes = {
  role: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),
  redirect: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  redirectOnLoggedIn: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};

var isRoleMatch = function isRoleMatch(role, currentUser) {
  if (!role) {
    return true;
  }
  return currentUser && (Array.isArray(role) ? role : [role]).includes(currentUser.role);
};




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
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/slicedToArray");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util_FileUploader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/modules/util/FileUploader.js");









var _this = undefined;



var getField = function getField(field, values) {
  if (values.hasOwnProperty(field)) {
    return values[field];
  }
};
var handleLocationsCheck = function () {
  var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee(context) {
    var check;
    return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return context.get.dealers();

          case 2:
            check = _context.sent;

            console.log('CHECK::', check);
            return _context.abrupt('return', check);

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function handleLocationsCheck(_x) {
    return _ref.apply(this, arguments);
  };
}();
/*eslint-disable no-unused-vars*/
/* harmony default export */ __webpack_exports__["default"] = (function (pubsub) {
  return {
    Query: {
      pages: function pages(obj, input, _ref2) {
        var _this2 = this;

        var Admin = _ref2.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee2() {
          var pages, page;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return Admin.get.pages();

                case 3:
                  pages = _context2.sent;

                  if (!(pages.length == 0)) {
                    _context2.next = 9;
                    break;
                  }

                  _context2.next = 7;
                  return Admin.insert.page({ id: 0, name: 'home' });

                case 7:
                  page = _context2.sent;
                  return _context2.abrupt('return', page);

                case 9:
                  return _context2.abrupt('return', pages);

                case 12:
                  _context2.prev = 12;
                  _context2.t0 = _context2['catch'](0);
                  return _context2.abrupt('return', _context2.t0);

                case 15:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2, [[0, 12]]);
        }))();
      },
      page: function page(obj, _ref3, _ref4) {
        var _this3 = this;

        var id = _ref3.id,
            pageTitle = _ref3.pageTitle;
        var Admin = _ref4.Admin,
            Dealers = _ref4.Dealers;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee3() {
          var page;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;

                  if (!id) {
                    _context3.next = 5;
                    break;
                  }

                  return _context3.abrupt('return', { id: id });

                case 5:
                  console.log('NO ID:::', pageTitle);
                  _context3.next = 8;
                  return Admin.get.pageByTitle(pageTitle);

                case 8:
                  page = _context3.sent;

                  if (page.name === 'locations') {
                    // const check = await handleLocationsCheck(Dealers);
                    // console.log('LOCATIONSCHECK DONE', check);
                  }
                  console.log('PAGE::', page);
                  return _context3.abrupt('return', { id: page.id, title: page.title, name: page.name });

                case 12:
                  _context3.next = 18;
                  break;

                case 14:
                  _context3.prev = 14;
                  _context3.t0 = _context3['catch'](0);

                  console.log('ERRROR GETTING PAGE:', _context3.t0);
                  return _context3.abrupt('return', _context3.t0);

                case 18:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this3, [[0, 14]]);
        }))();
      },
      vendorData: function vendorData(_, _ref5, _ref6) {
        var _this4 = this;

        var handle = _ref5.handle;
        var Admin = _ref6.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee4() {
          var data, vendor;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  console.log('Vendor HANDLE:', handle);
                  _context4.prev = 1;
                  _context4.next = 4;
                  return Admin.get.vendorByHandle(handle);

                case 4:
                  data = _context4.sent;

                  console.log('DATA::', data, handle.length);

                  if (!(typeof data == 'undefined' && handle.length > 0)) {
                    _context4.next = 12;
                    break;
                  }

                  _context4.next = 9;
                  return Admin.insert.vendorSeo(handle);

                case 9:
                  vendor = _context4.sent;

                  console.log('VENDOR::', vendor);
                  return _context4.abrupt('return', vendor);

                case 12:
                  if (!(handle.length == 0)) {
                    _context4.next = 14;
                    break;
                  }

                  return _context4.abrupt('return', null);

                case 14:
                  if (!data) {
                    _context4.next = 16;
                    break;
                  }

                  return _context4.abrupt('return', { handle: handle, seo: data });

                case 16:
                  _context4.next = 21;
                  break;

                case 18:
                  _context4.prev = 18;
                  _context4.t0 = _context4['catch'](1);
                  return _context4.abrupt('return', _context4.t0);

                case 21:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this4, [[1, 18]]);
        }))();
      },
      collectionData: function collectionData(_, _ref7, _ref8) {
        var _this5 = this;

        var handle = _ref7.handle;
        var Admin = _ref8.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee5() {
          var data, collection;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  console.log('COLLECTION HANDLE:', handle);
                  _context5.prev = 1;
                  _context5.next = 4;
                  return Admin.get.collectionByHandle(handle);

                case 4:
                  data = _context5.sent;

                  console.log('COLLECTION DATA::', data, handle);

                  if (!((typeof data == 'undefined' || !data) && handle.length > 0)) {
                    _context5.next = 12;
                    break;
                  }

                  _context5.next = 9;
                  return Admin.insert.collectionSeo(handle);

                case 9:
                  collection = _context5.sent;

                  console.log('VENDOR::', collection);
                  return _context5.abrupt('return', collection);

                case 12:
                  if (!(handle.length == 0)) {
                    _context5.next = 14;
                    break;
                  }

                  return _context5.abrupt('return', null);

                case 14:
                  if (!data) {
                    _context5.next = 16;
                    break;
                  }

                  return _context5.abrupt('return', data);

                case 16:
                  _context5.next = 21;
                  break;

                case 18:
                  _context5.prev = 18;
                  _context5.t0 = _context5['catch'](1);
                  return _context5.abrupt('return', _context5.t0);

                case 21:
                  return _context5.abrupt('return', null);

                case 22:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this5, [[1, 18]]);
        }))();
      }
    },
    Page: {
      fields: function fields(obj, _ref9, _ref10, info) {
        var field_names = _ref9.field_names;

        var _this6 = this;

        var Admin = _ref10.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee6() {
          var _ref11, page_content, requestedFields, field_value, fields, stringValues, data;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return Admin.get.pageContents(obj.id);

                case 2:
                  _ref11 = _context6.sent;
                  page_content = _ref11.page_content;
                  requestedFields = field_names.map(function (_ref12) {
                    var _ref13 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_ref12, 2),
                        section = _ref13[0],
                        field = _ref13[1];

                    return page_content.map(function (_ref14) {
                      var field_value = _ref14.field_value,
                          rest = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4___default()(_ref14, ['field_value']);

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

                  field_value = requestedFields.field_value, fields = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4___default()(requestedFields, ['field_value']);
                  stringValues = babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(field_value);
                  data = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, fields, { field_value: stringValues });
                  return _context6.abrupt('return', [data]);

                case 9:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, _this6);
        }))();
      }
    },
    Mutation: {
      signS3: function signS3(obj, _ref15) {
        var _this7 = this;

        var filename = _ref15.filename,
            filetype = _ref15.filetype;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee7() {
          var signedRequest;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return _util_FileUploader__WEBPACK_IMPORTED_MODULE_8__["default"].getSignedUrl({ filename: filename, filetype: filetype });

                case 2:
                  signedRequest = _context7.sent;
                  return _context7.abrupt('return', signedRequest);

                case 4:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7, _this7);
        }))();
      },
      uploadPageContent: function uploadPageContent(obj, _ref16, _ref17) {
        var _this8 = this;

        var pageContent = _ref16.pageContent;
        var Admin = _ref17.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee8() {
          var _ref18, _ref19, data;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.prev = 0;
                  _context8.next = 3;
                  return Admin.update.pageContent(pageContent);

                case 3:
                  _ref18 = _context8.sent;
                  _ref19 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_ref18, 1);
                  data = _ref19[0];
                  return _context8.abrupt('return', data.page_content);

                case 9:
                  _context8.prev = 9;
                  _context8.t0 = _context8['catch'](0);

                  console.log('EERROO', _context8.t0);

                case 12:
                case 'end':
                  return _context8.stop();
              }
            }
          }, _callee8, _this8, [[0, 9]]);
        }))();
      },
      uploadSeo: function uploadSeo(obj, _ref20, _ref21) {
        var _this9 = this;

        var path = _ref20.path,
            handle = _ref20.handle,
            seo = _ref20.seo;
        var Admin = _ref21.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee9() {
          var _ref22, _ref23, data;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  console.log('PATH::', path);
                  console.log('HANDLE::', handle);
                  console.log('SEO::', seo);
                  _context9.prev = 3;
                  _context9.next = 6;
                  return Admin.update.seo({ path: path, handle: handle, seo: seo });

                case 6:
                  _ref22 = _context9.sent;
                  _ref23 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_ref22, 1);
                  data = _ref23[0];

                  console.log('DATA::', data);
                  return _context9.abrupt('return', data);

                case 13:
                  _context9.prev = 13;
                  _context9.t0 = _context9['catch'](3);

                  console.log('ERROR UPDATING SEO DATA::', _context9.t0);

                case 16:
                case 'end':
                  return _context9.stop();
              }
            }
          }, _callee9, _this9, [[3, 13]]);
        }))();
      }
    },
    Subscription: {}
  };
});

/***/ }),

/***/ "./src/modules/admin/sql.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Admin; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/core-js/json/stringify");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/slicedToArray");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sql_connector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/sql/connector.js");






/*eslint-disable no-unused-vars*/


var Admin = function Admin() {
  babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Admin);

  this.get = {
    pages: function pages() {
      var _this = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])('pages').select('*');

              case 3:
                return _context.abrupt('return', _context.sent);

              case 6:
                _context.prev = 6;
                _context.t0 = _context['catch'](0);
                return _context.abrupt('return', _context.t0);

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 6]]);
      }))();
    },
    pageById: function pageById(id) {
      var _this2 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])('pages').select('*').where('id', id).first();

              case 3:
                return _context2.abrupt('return', _context2.sent);

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2['catch'](0);
                return _context2.abrupt('return', _context2.t0);

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[0, 6]]);
      }))();
    },
    pageByTitle: function pageByTitle(title) {
      var _this3 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3() {
        var exists, _ref, _ref2, page;

        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])('pages').select('*').where('title', title).first();

              case 3:
                exists = _context3.sent;

                if (exists) {
                  _context3.next = 13;
                  break;
                }

                _context3.next = 7;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])('pages').insert({ title: title, name: title.toLowerCase() }).returning(['id', 'title', 'name']);

              case 7:
                _ref = _context3.sent;
                _ref2 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref, 1);
                page = _ref2[0];
                return _context3.abrupt('return', page);

              case 13:
                return _context3.abrupt('return', exists);

              case 14:
                _context3.next = 19;
                break;

              case 16:
                _context3.prev = 16;
                _context3.t0 = _context3['catch'](0);
                return _context3.abrupt('return', _context3.t0);

              case 19:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3, [[0, 16]]);
      }))();
    },
    vendorByHandle: function vendorByHandle(handle) {
      var _this4 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee4() {
        var exists;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"].schema.hasTable('vendor_seo');

              case 3:
                exists = _context4.sent;

                if (exists) {
                  _context4.next = 7;
                  break;
                }

                _context4.next = 7;
                return _sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"].schema.createTable('vendor_seo', function (t) {
                  t.increments('id').primary();
                  t.string('handle', 100);
                  t.string('title', 100);
                  t.text('description');
                  t.text('keywords');
                });

              case 7:
                _context4.next = 9;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])('vendor_seo').select('*').where({ handle: handle }).first();

              case 9:
                return _context4.abrupt('return', _context4.sent);

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4['catch'](0);
                return _context4.abrupt('return', _context4.t0);

              case 15:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4, [[0, 12]]);
      }))();
    },
    collectionByHandle: function collectionByHandle(handle) {
      var _this5 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee5() {
        var exists;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"].schema.hasTable('collection_seo');

              case 3:
                exists = _context5.sent;

                if (exists) {
                  _context5.next = 7;
                  break;
                }

                _context5.next = 7;
                return _sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"].schema.createTable('collection_seo', function (t) {
                  t.increments('id').primary();
                  t.string('handle', 100);
                  t.string('title', 100);
                  t.text('description');
                  t.text('keywords');
                });

              case 7:
                _context5.next = 9;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])('collection_seo').select('*').where({ handle: handle }).first();

              case 9:
                return _context5.abrupt('return', _context5.sent);

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5['catch'](0);
                return _context5.abrupt('return', _context5.t0);

              case 15:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this5, [[0, 12]]);
      }))();
    },
    pageContents: function pageContents(page_id) {
      var _this6 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee6() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])('page_contents').select('page_content').where('page_id', page_id).first();

              case 3:
                return _context6.abrupt('return', _context6.sent);

              case 6:
                _context6.prev = 6;
                _context6.t0 = _context6['catch'](0);
                return _context6.abrupt('return', _context6.t0);

              case 9:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, _this6, [[0, 6]]);
      }))();
    }
  };
  this.insert = {
    page: function page(_ref3) {
      var _this7 = this;

      var name = _ref3.name;
      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee7() {
        var data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])('pages').returning(['id', 'name']).insert({ name: name });

              case 3:
                data = _context7.sent;
                _context7.next = 6;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])('page_contents').insert({ page_id: data[0].id });

              case 6:
                return _context7.abrupt('return', data);

              case 9:
                _context7.prev = 9;
                _context7.t0 = _context7['catch'](0);
                return _context7.abrupt('return', _context7.t0);

              case 12:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, _this7, [[0, 9]]);
      }))();
    },
    vendorSeo: function vendorSeo(handle) {
      var _this8 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee8() {
        var data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])('vendor_seo').returning(['id', 'handle']).insert({ handle: handle });

              case 3:
                data = _context8.sent;
                return _context8.abrupt('return', data);

              case 7:
                _context8.prev = 7;
                _context8.t0 = _context8['catch'](0);
                return _context8.abrupt('return', _context8.t0);

              case 10:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, _this8, [[0, 7]]);
      }))();
    },
    collectionSeo: function collectionSeo(handle) {
      var _this9 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee9() {
        var data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])('collection_seo').returning(['id', 'handle']).insert({ handle: handle });

              case 3:
                data = _context9.sent;
                return _context9.abrupt('return', data);

              case 7:
                _context9.prev = 7;
                _context9.t0 = _context9['catch'](0);
                return _context9.abrupt('return', _context9.t0);

              case 10:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, _this9, [[0, 7]]);
      }))();
    }
  };
  this.update = {
    pageContent: function pageContent(_ref4) {
      var _this10 = this;

      var page_id = _ref4.page_id,
          content = _ref4.content;
      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee10() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])('page_contents').where('page_id', page_id).update({ page_content: babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(content) }, ['page_content']);

              case 3:
                return _context10.abrupt('return', _context10.sent);

              case 6:
                _context10.prev = 6;
                _context10.t0 = _context10['catch'](0);
                return _context10.abrupt('return', _context10.t0);

              case 9:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, _this10, [[0, 6]]);
      }))();
    },
    seo: function seo(_ref5) {
      var _this11 = this;

      var path = _ref5.path,
          handle = _ref5.handle,
          seo = _ref5.seo;
      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee11() {
        var update;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                _context11.next = 3;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])(path + '_seo').where({ handle: handle });

              case 3:
                update = _context11.sent;

                if (!(update.length == 0)) {
                  _context11.next = 10;
                  break;
                }

                _context11.next = 7;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])(path + '_seo').insert(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ handle: handle }, seo)).returning(['handle', 'title', 'description', 'keywords']);

              case 7:
                return _context11.abrupt('return', _context11.sent);

              case 10:
                _context11.next = 12;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])(path + '_seo').where({ handle: handle }).update(seo).returning(['handle', 'title', 'description', 'keywords']);

              case 12:
                return _context11.abrupt('return', _context11.sent);

              case 13:
                _context11.next = 18;
                break;

              case 15:
                _context11.prev = 15;
                _context11.t0 = _context11['catch'](0);
                return _context11.abrupt('return', _context11.t0);

              case 18:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, _this11, [[0, 15]]);
      }))();
    }
  };
  this.delete = {};
};



/***/ }),

/***/ "./src/modules/dealers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/dealers/sql.js");
/* harmony import */ var _schema_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/dealers/schema.graphql");
/* harmony import */ var _schema_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_schema_graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/dealers/resolvers.js");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/connector.ts");





/* harmony default export */ __webpack_exports__["default"] = (new _connector__WEBPACK_IMPORTED_MODULE_3__["default"]({
  schema: _schema_graphql__WEBPACK_IMPORTED_MODULE_1___default.a,
  createResolversFunc: _resolvers__WEBPACK_IMPORTED_MODULE_2__["default"],
  createContextFunc: function createContextFunc() {
    return { Dealers: new _sql__WEBPACK_IMPORTED_MODULE_0__["default"]() };
  }
}));

/***/ }),

/***/ "./src/modules/dealers/resolvers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);


var defaultDealer = {
  id: '0',
  handle: '',
  name: ' ',
  street: ' ',
  suite: ' ',
  city: ' ',
  zip: ' ',
  state: ' ',
  country: ' ',
  email: ' ',
  phone: null,
  website: ' ',
  lat: ' ',
  lng: ' '
};
/*eslint-disable no-unused-vars*/
/* harmony default export */ __webpack_exports__["default"] = (function (pubsub) {
  return {
    Query: {
      dealers: function dealers(obj, _ref, _ref2) {
        var _this = this;

        var first = _ref.first,
            after = _ref.after;
        var Dealers = _ref2.Dealers;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var edgesArray, dealers, updated, _edgesArray, endCursor, dealers_count, hasNextPage;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  edgesArray = [];

                  console.log('AFTER::', after);
                  _context.prev = 2;
                  _context.next = 5;
                  return Dealers.get.dealers(first, after);

                case 5:
                  dealers = _context.sent;

                  console.log('DEALERS', dealers);
                  updated = dealers.hasOwnProperty('isUpdated');

                  console.log('UPDATED::', updated);
                  _edgesArray = [];

                  dealers.map(function (dealer, idx) {
                    return _edgesArray.push({ cursor: after + idx, node: dealer });
                  });
                  endCursor = _edgesArray.length > 0 ? _edgesArray[_edgesArray.length - 1].cursor : 0;
                  dealers_count = _edgesArray.length;
                  hasNextPage = dealers_count > after + first;

                  if (!updated) {
                    _context.next = 18;
                    break;
                  }

                  return _context.abrupt('return', {
                    dealers_count: dealers_count,
                    edges: _edgesArray,
                    dealer_info: { hasNextPage: hasNextPage, end_cursor: endCursor }
                  });

                case 18:
                  if (!(dealers.length == 0)) {
                    _context.next = 21;
                    break;
                  }

                  console.log('LENGTH WAS ZERO::', dealers);
                  return _context.abrupt('return', {
                    dealers_count: dealers_count,
                    edges: _edgesArray,
                    dealer_info: { hasNextPage: hasNextPage, end_cursor: endCursor }
                  });

                case 21:
                  console.log('WE SHOULD HIT HERE::', dealers);
                  console.log('DEALERS IN ELSE BLOCK;', _edgesArray);
                  return _context.abrupt('return', {
                    dealers_count: dealers_count,
                    edges: _edgesArray,
                    dealer_info: { hasNextPage: hasNextPage, end_cursor: endCursor }
                  });

                case 26:
                  _context.prev = 26;
                  _context.t0 = _context['catch'](2);

                  console.log('ERROR ON DEALERS:', _context.t0);

                case 29:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this, [[2, 26]]);
        }))();
      },
      dealerByHandle: function dealerByHandle(obj, input, _ref3) {
        var _this2 = this;

        var Dealers = _ref3.Dealers;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
          var handle, dealer;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  handle = input.handle;

                  console.log('HANDLE:::', handle);
                  _context2.next = 5;
                  return Dealers.get.dealerByHandle({ handle: handle });

                case 5:
                  dealer = _context2.sent;

                  console.log('DEALER BY HANDLE RAN:::', dealer);

                  if (!(typeof dealer == 'undefined' || !dealer)) {
                    _context2.next = 10;
                    break;
                  }

                  console.log('DEALER IF', defaultDealer);
                  return _context2.abrupt('return', defaultDealer);

                case 10:
                  console.log('WHY RETURN HERE YET::', dealer);
                  return _context2.abrupt('return', dealer);

                case 14:
                  _context2.prev = 14;
                  _context2.t0 = _context2['catch'](0);

                  console.log('ERR GETTING DEALER:', _context2.t0);
                  return _context2.abrupt('return', _context2.t0);

                case 18:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2, [[0, 14]]);
        }))();
      }
    },
    Mutation: {
      addDealer: function addDealer(obj, _ref4, _ref5) {
        var _this3 = this;

        var dealer = _ref4.dealer;
        var Dealers = _ref5.Dealers;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
          var data, _dealer;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  data = dealer;
                  _context3.prev = 1;
                  _context3.next = 4;
                  return Dealers.insertOrUpdate.updateDealer(data);

                case 4:
                  _dealer = _context3.sent;

                  console.log('ADD DEALER::', _dealer);
                  _context3.next = 11;
                  break;

                case 8:
                  _context3.prev = 8;
                  _context3.t0 = _context3['catch'](1);

                  console.log('ERROR ADDING DEALER', _context3.t0);

                case 11:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this3, [[1, 8]]);
        }))();
      },
      updateDealer: function updateDealer(obj, _ref6, _ref7) {
        var _this4 = this;

        var dealer = _ref6.dealer;
        var Dealers = _ref7.Dealers;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
          var data, _dealer2;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  data = dealer;
                  _context4.prev = 1;

                  console.log('UPDATE DEALER INPUT::', data);

                  _context4.next = 5;
                  return Dealers.insertOrUpdate.updateDealer(data);

                case 5:
                  _dealer2 = _context4.sent;

                  console.log('DEALER RETURN ::', _dealer2);
                  return _context4.abrupt('return', _dealer2);

                case 10:
                  _context4.prev = 10;
                  _context4.t0 = _context4['catch'](1);

                  console.log('ERROR::', _context4.t0);

                case 13:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this4, [[1, 10]]);
        }))();
      }
    },
    Subscription: {}
  };
});

/***/ }),

/***/ "./src/modules/dealers/schema.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Query"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"dealers"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"first"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"after"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Dealers"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"dealerByHandle"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"handle"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Dealer"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Dealer"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"handle"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"name"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"street"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"suite"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"city"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"zip"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"state"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"country"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"email"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"phone"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"website"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"lat"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"lng"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"image_url"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"description"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"hours"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"DealersEdges"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"node"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Dealer"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"cursor"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"DealerInfo"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"hasNextPage"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"end_cursor"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Dealers"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"dealers_count"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"edges"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DealersEdges"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"dealer_info"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"DealerInfo"}},"directives":[]}]},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Mutation"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"addDealer"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"dealer"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DealerInput"}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Dealer"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"updateDealer"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"dealer"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DealerInput"}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Dealer"}},"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"DealerInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"handle"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"name"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"street"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"suite"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"city"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"zip"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"state"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"country"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"email"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"phone"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"website"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"lat"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"lng"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"image_url"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"description"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"hours"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]}],"loc":{"start":0,"end":1020}};
    doc.loc.source = {"body":"extend type Query {\n  dealers(first: Int, after: Int): Dealers\n  dealerByHandle(handle: String): Dealer\n}\n\ntype Dealer {\n  id: ID\n  handle: String\n  name: String\n  street: String\n  suite: String\n  city: String\n  zip: String\n  state: String\n  country: String\n  email: String\n  phone: String\n  website: String\n  lat: String\n  lng: String\n  image_url: String\n  description: String\n  hours: String\n}\ntype DealersEdges {\n  node: Dealer\n  cursor: Int\n}\ntype DealerInfo {\n  hasNextPage: Boolean\n  end_cursor: Int\n}\ntype Dealers {\n  dealers_count: Int\n  edges: [DealersEdges]\n  dealer_info: DealerInfo\n}\n#########################\n\nextend type Mutation {\n  addDealer(dealer: DealerInput): Dealer\n  updateDealer(dealer: DealerInput): Dealer\n}\n\ninput DealerInput {\n  handle: String\n  name: String\n  street: String\n  suite: String\n  city: String\n  zip: String\n  state: String\n  country: String\n  email: String\n  phone: String\n  website: String\n  lat: String\n  lng: String\n  image_url: String\n  description: String\n  hours: String\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    


/***/ }),

/***/ "./src/modules/dealers/sql.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dealers; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sql_connector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/sql/connector.js");





var _class,
    _temp,
    _this4 = undefined;

/*eslint-disable no-unused-vars*/


var Dealers = (_temp = _class = function Dealers() {
  babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Dealers);

  this.get = {
    dealers: function dealers() {
      var _this = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var dealers, isUpdated, updated;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"])('dealers').select('*').orderBy('name');

              case 3:
                dealers = _context.sent;
                _context.next = 6;
                return _sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"].schema.hasColumn('dealers', 'image_url');

              case 6:
                isUpdated = _context.sent;

                if (isUpdated) {
                  _context.next = 13;
                  break;
                }

                _context.next = 10;
                return Dealers.alterDealers();

              case 10:
                updated = _context.sent;

                if (!updated) {
                  _context.next = 13;
                  break;
                }

                return _context.abrupt('return', { isUpdated: true });

              case 13:
                return _context.abrupt('return', dealers);

              case 16:
                _context.prev = 16;
                _context.t0 = _context['catch'](0);
                return _context.abrupt('return', _context.t0);

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 16]]);
      }))();
    },
    dealerByHandle: function dealerByHandle(_ref) {
      var _this2 = this;

      var handle = _ref.handle;
      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var dealer;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('DEALER HANDLE IN SQL::', handle);
                _context2.prev = 1;
                _context2.next = 4;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"])('dealers').where({ handle: handle }).select('*').first();

              case 4:
                dealer = _context2.sent;
                return _context2.abrupt('return', dealer);

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2['catch'](1);

                console.log('Dealer by handle error', _context2.t0);
                return _context2.abrupt('return', _context2.t0);

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[1, 8]]);
      }))();
    }
  };
  this.insertOrUpdate = {
    updateDealer: function updateDealer(input) {
      var _this3 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
        var update;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log('INSERT HANDLE:', input.handle);
                _context3.prev = 1;
                _context3.next = 4;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"])('dealers').where({ handle: input.handle });

              case 4:
                update = _context3.sent;

                if (!(update.length == 0)) {
                  _context3.next = 12;
                  break;
                }

                console.log('HANDLE::', input.handle);
                _context3.next = 9;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"])('dealers').insert(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, input));

              case 9:
                return _context3.abrupt('return', Object(_sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"])('dealers').select('*').where({ handle: input.handle }).first());

              case 12:
                _context3.next = 14;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"])('dealers').where({ handle: input.handle }).update(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, input));

              case 14:
                return _context3.abrupt('return', Object(_sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"])('dealers').where({ handle: input.handle }).select('*').first());

              case 15:
                _context3.next = 20;
                break;

              case 17:
                _context3.prev = 17;
                _context3.t0 = _context3['catch'](1);
                return _context3.abrupt('return', _context3.t0);

              case 20:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3, [[1, 17]]);
      }))();
    }
  };
  this.update = {};
  this.delete = {};
}, _class.alterDealers = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
  var done;
  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"].schema.alterTable('dealers', function (t) {
            t.string('image_url');
            t.text('description');
            t.string('url_name');
            t.string('hours');
            t.string('handle');
          });

        case 3:
          done = _context4.sent;

          if (!done) {
            _context4.next = 6;
            break;
          }

          return _context4.abrupt('return', true);

        case 6:
          _context4.next = 11;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4['catch'](0);
          throw new Error(_context4.t0);

        case 11:
        case 'end':
          return _context4.stop();
      }
    }
  }, _callee4, _this4, [[0, 8]]);
})), _temp);


/***/ }),

/***/ "./src/modules/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dealers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/dealers/index.js");
/* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/admin/index.js");
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/vendor/index.js");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/categories/index.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/product/index.js");
/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/cookies/index.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/i18n/index.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/modules/user/index.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/modules/contact/index.js");
/* harmony import */ var _mailer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/modules/mailer/index.js");
/* harmony import */ var _graphqlTypes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/modules/graphqlTypes/index.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/modules/debug/index.js");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/modules/connector.ts");













/* harmony default export */ __webpack_exports__["default"] = (new _connector__WEBPACK_IMPORTED_MODULE_12__["default"](_dealers__WEBPACK_IMPORTED_MODULE_0__["default"], _admin__WEBPACK_IMPORTED_MODULE_1__["default"], _categories__WEBPACK_IMPORTED_MODULE_3__["default"], _product__WEBPACK_IMPORTED_MODULE_4__["default"], _vendor__WEBPACK_IMPORTED_MODULE_2__["default"], _cookies__WEBPACK_IMPORTED_MODULE_5__["default"], _i18n__WEBPACK_IMPORTED_MODULE_6__["default"], _user__WEBPACK_IMPORTED_MODULE_7__["default"], _contact__WEBPACK_IMPORTED_MODULE_8__["default"], _mailer__WEBPACK_IMPORTED_MODULE_9__["default"], _graphqlTypes__WEBPACK_IMPORTED_MODULE_10__["default"]));


/***/ })

};
//# sourceMappingURL=index.62d856d858191f400bb4.js.map
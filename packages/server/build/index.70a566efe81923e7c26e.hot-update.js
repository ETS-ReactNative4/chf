require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/main-layout.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "html{overflow-x:hidden}#root{position:relative;min-height:100vh;-ms-flex-direction:column;flex-direction:column}#root,.admin-layout{display:-ms-flexbox;display:flex}.admin-layout{background-color:#f9f9f9;height:100vh}.admin-layout__content{-ms-flex-direction:column;flex-direction:column;background-color:#f1f1f1;width:100vw}.admin-layout .admin__dashboard{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.admin-layout .admin__modal{position:absolute;top:calc(100vh - 70%);right:40%;height:200px;width:400px}.admin-layout .admin__modal p{position:relative;top:50%;left:33%}.admin-layout .admin__modal--success{background-color:#fff;border:1px solid green;width:inherit;height:inherit;border-radius:5px}.admin-layout .admin .modal__btn--close{position:relative;bottom:24%;left:96%;width:17px}", "", {"version":3,"sources":["/Users/austinreynolds/Documents/MOD/chf-rcomm/packages/client/src/modules/admin/styles/main-layout.scss"],"names":[],"mappings":"AAEA,KACE,iBAAkB,CACnB,MAKC,kBAAkB,iBAED,0BACjB,qBAAsB,CAEvB,oBANC,oBAAA,YAAa,CAQf,cACE,yBACA,YAAa,CASb,uBACE,0BAAA,sBAAsB,yBACG,WACb,CAdhB,gCAqBI,oBAAA,aAAa,0BACb,qBAAsB,CAtB1B,4BA0BI,kBAAkB,sBACI,UACZ,aACG,WACD,CA9BhB,8BAgCM,kBAAkB,QACV,QACC,CAlCf,qCA6CQ,sBAAsB,uBACC,cACT,eACC,iBACG,CAjD1B,wCAuDU,kBAAkB,WACP,SACF,UACE,CACZ","file":"main-layout.scss","sourcesContent":["@import './utils/index';\n\nhtml {\n  overflow-x: hidden;\n}\n\n// sass-lint:disable-block no-ids\n#root {\n  display: flex;\n  position: relative;\n  // max-width: 100vw;\n  min-height: 100vh;\n  flex-direction: column;\n  // overflow-x: hidden;\n}\n\n.admin-layout {\n  background-color: $siteBackgroundColor;\n  height: 100vh;\n  display: flex;\n  // &__navbar {\n  //   background-color: $contentBackgroundColor;\n  //   @media (min-width: 1109px) {\n  //     background-color: $headerBackgroundColor;\n  //     height: $headerHeight;\n  //   }\n  // }\n  &__content {\n    flex-direction: column;\n    background-color: #f1f1f1;\n    width: 100vw;\n    // width: calc(100% - 15%);\n  }\n  // &__footer {\n  //   background-color: $footerBackgroundColor;\n  // }\n  .admin__dashboard {\n    display: flex;\n    flex-direction: column;\n  }\n  .admin {\n    &__modal {\n    position: absolute;\n    top: calc(100vh - 70%);\n    right: 40%;\n    height: 200px;\n    width: 400px;\n    p {\n      position: relative;\n      top: 50%;\n      left: 33%;\n    }\n    // div {\n    //   position: absolute;\n    //   svg {\n    //     position: relative;\n    //     left: 96%;\n    //     bottom: 50px;\n    //   }\n    // }\n      &--success {\n        background-color: #fff;\n        border: 1px solid green;\n        width: inherit;\n        height: inherit;\n        border-radius: 5px;\n      }\n    }\n    .modal {\n      &__btn {\n        &--close {\n          position: relative;\n          bottom: 24%;\n          left: 96%;\n          width: 17px;\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);

// exports


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
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2, actions) {
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
                props.showModal();
                actions.setSubmitting(false);

                // console.log('DEALER::', dealer);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }(),
    render: function render(_ref3) {
      var errors = _ref3.errors,
          touched = _ref3.touched,
          isSubmitting = _ref3.isSubmitting,
          setFieldValue = _ref3.setFieldValue;

      // console.log('VALUES::', values);
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        formik__WEBPACK_IMPORTED_MODULE_5__["Form"],
        { className: 'admin__location__form' },
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'div',
          { className: 'admin__form__seo--field' },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'name', placeholder: 'Location Name' }),
          errors.name && touched.name && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.name
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'div',
          { className: 'admin__form__seo--field' },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'street', placeholder: 'Street' }),
          errors.street && touched.street && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.street
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'div',
          { className: 'admin__form__seo--field' },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'city', placeholder: 'City' }),
          errors.city && touched.city && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.city
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'div',
          { className: 'admin__form__seo--field' },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'state', placeholder: 'State' }),
          errors.state && touched.state && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.state
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'div',
          { className: 'admin__form__seo--field' },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'zip', placeholder: 'Zip Code' }),
          errors.zip && touched.zip && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.zip
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'div',
          { className: 'admin__form__seo--field' },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], { className: 'admin__form__seo--input', type: 'tel', name: 'phone', placeholder: 'Phone' }),
          errors.phone && touched.phone && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.phone
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'div',
          { className: 'admin__form__seo--field' },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], { className: 'admin__form__seo--input', type: 'email', name: 'email', placeholder: 'Email' }),
          errors.email && touched.email && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.email
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'div',
          { className: 'admin__form__seo--field' },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'hours', placeholder: 'Hours' }),
          errors.hours && touched.hours && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.hours
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
  updateDealer: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  showModal: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    { className: 'admin' },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'div',
      { className: 'admin__location' },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_1__["default"], props),
      props.children
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (LocationInfo);

/***/ }),

/***/ "../client/src/modules/admin/components/Modal.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);




var SuccessModal = function SuccessModal(_ref) {
  var showModal = _ref.showModal,
      onClick = _ref.onClick;

  if (!showModal) {
    return null;
  }
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    { className: 'admin__modal' },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'div',
      { className: 'admin__modal--success' },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'p',
        null,
        'Save Completed!'
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: 'modal__btn--close', onClick: onClick },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaWindowClose"], { color: 'red' })
      )
    )
  );
};

SuccessModal.propTypes = {
  showModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (SuccessModal);

/***/ }),

/***/ "../client/src/modules/admin/components/Seo/SeoForm.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_5__);




var _this = undefined;





var SeoForm = function SeoForm(props) {
  var validateAll = props.validateAll,
      seo = props.seo,
      uploadSeo = props.uploadSeo,
      uploadSeoContent = props.uploadSeoContent,
      selectedProduct = props.selectedProduct,
      selectedBrand = props.selectedBrand,
      selectedCollection = props.selectedCollection,
      selectedCategory = props.selectedCategory,
      showSuccess = props.showSuccess;
  // console.log('SELECTED SEO', seo);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
    enableReinitialize: true,
    initialValues: {
      title: seo ? seo.title : '',
      description: seo ? seo.description : '',
      keywords: seo ? seo.keywords : ''
    },
    validateOnBlur: true,
    validate: validateAll,
    validateOnChange: false,
    onSubmit: function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, actions) {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.t0 = selectedCategory;
                _context.next = _context.t0 === 'products' ? 4 : _context.t0 === 'brands' ? 7 : _context.t0 === 'collections' ? 10 : 13;
                break;

              case 4:
                _context.next = 6;
                return uploadSeoContent(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({ handle: selectedProduct }, values));

              case 6:
                return _context.abrupt('break', 14);

              case 7:
                _context.next = 9;
                return uploadSeo({ path: 'vendor', handle: selectedBrand, seo: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, values) });

              case 9:
                return _context.abrupt('break', 14);

              case 10:
                _context.next = 12;
                return uploadSeo({ path: 'collection', handle: selectedCollection, seo: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, values) });

              case 12:
                return _context.abrupt('break', 14);

              case 13:
                return _context.abrupt('return');

              case 14:
                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t1 = _context['catch'](0);

                console.log('ERROR:', _context.t1);

              case 19:

                // MyImaginaryRestApiCall(user.id, values).then(
                // updatedUser => {
                actions.setSubmitting(false);
                showSuccess();
                // updateUser(updatedUser);
                // onClose();
                // },
                // error => {
                // actions.setSubmitting(false);
                // actions.setErrors(transformMyRestApiErrorsToAnObject(error));
                // actions.setStatus({ msg: 'Set some arbitrary status or data' });
                // }
                // );

              case 21:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 16]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }(),
    render: function render(_ref2) {
      var errors = _ref2.errors,
          status = _ref2.status,
          touched = _ref2.touched,
          isSubmitting = _ref2.isSubmitting;

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
        formik__WEBPACK_IMPORTED_MODULE_5__["Form"],
        { className: 'admin__form__seo' },
        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
          'div',
          { className: 'admin__form__seo--field' },
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'title', placeholder: 'Title' }),
          errors.title && touched.title && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.title
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
          'div',
          { className: 'admin__form__seo--field' },
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
            component: 'textarea',
            className: 'admin__form__seo--input',
            name: 'description',
            placeholder: 'Description'
          }),
          errors.description && errors.description && touched.description && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.description
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
          'div',
          { className: 'admin__form__seo--field' },
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'keywords', placeholder: 'Keywords' }),
          errors.keywords && errors.keywords && touched.keywords && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.keywords
          )
        ),
        status && status.msg && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
          'div',
          { className: 'admin__form__seo--status' },
          status.msg
        ),
        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
          'button',
          { type: 'submit', disabled: isSubmitting },
          'Submit'
        )
      );
    }
  });
};
SeoForm.propTypes = {
  seo: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  uploadSeo: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  uploadSeoContent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  selectedProduct: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  selectedBrand: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  selectedCollection: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  selectedCategory: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  showSuccess: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  validateAll: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (SeoForm);

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
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../client/src/modules/admin/components/Modal.jsx");
/* harmony import */ var _styles_forms_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("../client/src/modules/admin/styles/forms.scss");
/* harmony import */ var _styles_forms_scss__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_styles_forms_scss__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("../client/src/modules/common/graphql/VendorsQuery.graphql");
/* harmony import */ var _common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _graphql_ProductSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("../client/src/modules/admin/graphql/ProductSeoQuery.graphql");
/* harmony import */ var _graphql_ProductSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_graphql_ProductSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _graphql_UploadSeoContent_graphql__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("../client/src/modules/admin/graphql/UploadSeoContent.graphql");
/* harmony import */ var _graphql_UploadSeoContent_graphql__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_graphql_UploadSeoContent_graphql__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _graphql_CollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("../client/src/modules/admin/graphql/CollectionsQuery.graphql");
/* harmony import */ var _graphql_CollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_graphql_CollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _graphql_VendorSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("../client/src/modules/admin/graphql/VendorSeoQuery.graphql");
/* harmony import */ var _graphql_VendorSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_graphql_VendorSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _graphql_CollectionSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("../client/src/modules/admin/graphql/CollectionSeoQuery.graphql");
/* harmony import */ var _graphql_CollectionSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_graphql_CollectionSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _graphql_UploadSeo_graphql__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("../client/src/modules/admin/graphql/UploadSeo.graphql");
/* harmony import */ var _graphql_UploadSeo_graphql__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_graphql_UploadSeo_graphql__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _common_graphql_AddProductData_graphql__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("../client/src/modules/common/graphql/AddProductData.graphql");
/* harmony import */ var _common_graphql_AddProductData_graphql__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_AddProductData_graphql__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _common_graphql_UpdateProductData_graphql__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("../client/src/modules/common/graphql/UpdateProductData.graphql");
/* harmony import */ var _common_graphql_UpdateProductData_graphql__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_UpdateProductData_graphql__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _common_schema__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("../client/src/modules/common/schema/index.js");














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
      submissionSuccess: null,
      modalState: false
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
    }, _this.showModal = function () {
      // console.log('SHOW MODAL');
      _this.setState({ modalState: !_this.state.modalState });
    }, _this.closeModal = function () {
      _this.setState({ modalState: !_this.state.modalState });
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
    // success = () => {
    //   // console.log('FIRE SUCCESS ');
    //   return <SuccessModal showModal={this.state.modalState} onClick={this.closeModal} />;
    // };

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
          valuesAvailable: currentCategoryValues,
          showSuccess: this.showModal
        }),
        this.state.modalState ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_20__["default"], { showModal: this.state.modalState, onClick: this.closeModal }) : null
      );
    }
  }]);

  return ManageSeo;
}(react__WEBPACK_IMPORTED_MODULE_13___default.a.Component);

var ManageSeoWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_15__["compose"])(react_apollo__WEBPACK_IMPORTED_MODULE_15__["withApollo"], Object(_common_schema__WEBPACK_IMPORTED_MODULE_31__["ADMIN_PRODUCTS_QUERY"])(), Object(react_apollo__WEBPACK_IMPORTED_MODULE_15__["graphql"])(_graphql_VendorSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_26___default.a, {
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
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_15__["graphql"])(_graphql_CollectionSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_27___default.a, {
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
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_15__["graphql"])(_graphql_CollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_25___default.a, {
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
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_15__["graphql"])(_graphql_ProductSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_23___default.a, {
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
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_15__["graphql"])(_graphql_UploadSeo_graphql__WEBPACK_IMPORTED_MODULE_28___default.a, {
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
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_15__["graphql"])(_graphql_UploadSeoContent_graphql__WEBPACK_IMPORTED_MODULE_24___default.a, {
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
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_15__["graphql"])(_common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_22___default.a, {
  props: function props(_ref25) {
    var _ref25$data = _ref25.data,
        loading = _ref25$data.loading,
        error = _ref25$data.error,
        vendors = _ref25$data.vendors;

    if (error) throw new Error('Error in Vendors Query: ' + error);
    return { loading: loading, vendors: vendors };
  }
}), Object(_common_schema__WEBPACK_IMPORTED_MODULE_31__["MODIFY_PRODUCT_DATA"])(_common_graphql_AddProductData_graphql__WEBPACK_IMPORTED_MODULE_29___default.a, 'addProductData'), Object(_common_schema__WEBPACK_IMPORTED_MODULE_31__["MODIFY_PRODUCT_DATA"])(_common_graphql_UpdateProductData_graphql__WEBPACK_IMPORTED_MODULE_30___default.a, 'updateProductData'))(ManageSeo);

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

/***/ "../client/src/modules/admin/components/Vendors/VendorEdit.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_6__);





var _this = undefined;





var defaultVendor = {
  name: '',
  handle: '',
  logo_url: '',
  is_featured: false,
  is_top_six: false,
  top_six_position: null,
  description: ''
};
var VendorEdit = function VendorEdit(_ref) {
  var vendor = _ref.vendor,
      image = _ref.image,
      adaptFileEventToValue = _ref.adaptFileEventToValue,
      updateBrand = _ref.updateBrand,
      showModal = _ref.showModal;

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["Formik"], {
    enableReinitialize: true,
    initialValues: vendor ? vendor : defaultVendor,
    onSubmit: function () {
      var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref3, actions) {
        var __typename = _ref3.__typename,
            values = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref3, ['__typename']);

        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return updateBrand(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, values, {
                  handle: values.name.split(' ').join('-').toLowerCase()
                }));

              case 2:
                showModal();
                actions.setSubmitting(false);

                // console.log('DEALER::', dealer);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }(),
    render: function render(_ref4) {
      var values = _ref4.values,
          errors = _ref4.errors,
          touched = _ref4.touched,
          isSubmitting = _ref4.isSubmitting,
          setFieldValue = _ref4.setFieldValue;

      // console.log('VALUES::', values);
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        formik__WEBPACK_IMPORTED_MODULE_6__["Form"],
        { className: 'admin__location__form' },
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'div',
          { className: 'admin__form__seo--field' },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'label',
            { htmlFor: 'name' },
            'What is the brand name?'
          ),
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'name', placeholder: 'Brand Name' }),
          errors.name && touched.name && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.name
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'div',
          { className: 'admin__form__seo--field' },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'label',
            { htmlFor: 'is_featured' },
            'Is this brand featured?'
          ),
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
            className: 'admin__form__seo--input',
            type: 'checkbox',
            name: 'is_featured',
            checked: values.is_featured
          }),
          errors.is_featured && touched.is_featured && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.is_featured
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'div',
          { className: 'admin__form__seo--field' },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'label',
            { htmlFor: 'is_top_six' },
            'Is this brand in the top 6 positions displayed?'
          ),
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
            className: 'admin__form__seo--input',
            type: 'checkbox',
            name: 'is_top_six',
            checked: values.is_top_six
          }),
          errors.is_top_six && touched.is_top_six && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.is_top_six
          )
        ),
        values.is_top_six ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'div',
          { className: 'admin__form__seo--field' },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'label',
            { htmlFor: 'top_six_position' },
            'What position is this brand in? Values can be 1-6.'
          ),
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'top_six_position', placeholder: 'Position' }),
          errors.top_six_position && touched.top_six_position && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.top_six_position
          )
        ) : null,
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'div',
          { className: 'admin__form__seo--description' },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
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
              name: 'logo_url',
              type: 'file',
              onChange: adaptFileEventToValue(setFieldValue)
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
          image ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('img', {
            className: 'admin__images--image'
            // id={entry[0]}
            , draggable: 'false',
            src: image ? image : ''
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
VendorEdit.propTypes = {
  vendor: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  image: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  adaptFileEventToValue: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  updateBrand: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  showModal: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (VendorEdit);

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
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../client/src/modules/admin/components/Modal.jsx");
/* harmony import */ var _components_AdminView__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../client/src/modules/admin/components/AdminView.web.jsx");
/* harmony import */ var _components_CarouselImages_ImagePreview__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../client/src/modules/admin/components/CarouselImages/ImagePreview.jsx");
/* harmony import */ var _components_CarouselImages_ImageAdapter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("../client/src/modules/admin/components/CarouselImages/ImageAdapter.jsx");









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

    _this.showModal = function () {
      // console.log('SHOW MODAL');
      _this.setState({ modalState: !_this.state.modalState });
    };

    _this.closeModal = function () {
      _this.setState({ modalState: !_this.state.modalState });
    };

    _this.state = {
      image: null,
      percentCompleted: 0,
      modalState: false
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
        _components_AdminView__WEBPACK_IMPORTED_MODULE_19__["default"],
        this.props,
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Locations_LocationInfo__WEBPACK_IMPORTED_MODULE_17__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          showModal: this.showModal,
          image: this.state.image,
          adaptFileEventToValue: this.adaptFileEventToValue
        }, this.props)),
        this.state.modalState ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_18__["default"], { showModal: this.state.modalState, onClick: this.closeModal }) : null
      );
    }
  }]);

  return Location;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var LocationWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_9__["compose"])(react_apollo__WEBPACK_IMPORTED_MODULE_9__["withApollo"], Object(react_apollo__WEBPACK_IMPORTED_MODULE_9__["graphql"])(_graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_13___default.a, {
  options: function options(props) {
    var handle = props.match.params.location_handle;
    return { variables: { handle: handle } };
  },
  props: function props(_ref6) {
    var data = _ref6.data;

    return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, data);
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_9__["graphql"])(_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_12___default.a, {
  options: function options() {
    return {
      variables: { first: 12, after: 0 }
    };
  },
  props: function props(_ref7) {
    var data = _ref7.data;
    var loading = data.loading,
        error = data.error,
        dealers = data.dealers;

    if (error) {
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
      // console.log('The props::::', this.props);
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

/***/ "../client/src/modules/admin/containers/Vendor.jsx":
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
/* harmony import */ var _components_AdminView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/admin/components/AdminView.web.jsx");
/* harmony import */ var _graphql_S3Upload_graphql__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/admin/graphql/S3Upload.graphql");
/* harmony import */ var _graphql_S3Upload_graphql__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_graphql_S3Upload_graphql__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _graphql_UpdateBrand_graphql__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../client/src/modules/admin/graphql/UpdateBrand.graphql");
/* harmony import */ var _graphql_UpdateBrand_graphql__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_graphql_UpdateBrand_graphql__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_Vendors_VendorEdit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../client/src/modules/admin/components/Vendors/VendorEdit.jsx");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../client/src/modules/admin/components/Modal.jsx");









var _this3 = undefined;







// import Loader from '../../common/components/global/components/Loader';






// const uploadToS3 = () => {
//   return;
// };

var Vendor = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Vendor, _Component);

  function Vendor(props) {
    var _this2 = this;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Vendor);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, (Vendor.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default()(Vendor)).call(this, props));

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
                                delegate('logo_url', url);

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

    _this.showModal = function () {
      // console.log('SHOW MODAL');
      _this.setState({ modalState: !_this.state.modalState });
    };

    _this.closeModal = function () {
      _this.setState({ modalState: !_this.state.modalState });
    };

    _this.state = {
      image: null,
      percentCompleted: 0,
      modalState: false
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Vendor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // console.log('DID MOUNT PROPS', this.props);
      var state = this.props.location.state;
      // console.log('C D U:::', state);

      var vendor = state.vendor;

      if (vendor) {
        this.setState({ image: vendor.logo_url });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var state = this.props.location.state;
      // console.log('C D U:::', state);

      var vendor = state.vendor;

      if (vendor) {
        if (!prevState.image) {
          this.setState({ image: vendor.logo_url });
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
      // console.log('THE PROPS:::', this.props);
      // console.log('THE STATE::', this.state);
      var state = this.props.location.state;
      var vendor = state.vendor;
      // if (!vendor) {
      //   return (
      //     <AdminView {...this.props}>
      //       <Loader />
      //     </AdminView>
      //   );
      // }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        _components_AdminView__WEBPACK_IMPORTED_MODULE_12__["default"],
        this.props,
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Vendors_VendorEdit__WEBPACK_IMPORTED_MODULE_15__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          vendor: vendor,
          image: this.state.image,
          adaptFileEventToValue: this.adaptFileEventToValue,
          showModal: this.showModal
        }, this.props)),
        this.state.modalState ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_16__["default"], { showModal: this.state.modalState, onClick: this.closeModal }) : null
      );
    }
  }]);

  return Vendor;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_9__["compose"])(react_apollo__WEBPACK_IMPORTED_MODULE_9__["withApollo"], Object(react_apollo__WEBPACK_IMPORTED_MODULE_9__["graphql"])(_graphql_UpdateBrand_graphql__WEBPACK_IMPORTED_MODULE_14___default.a, {
  props: function props(_ref6) {
    var mutate = _ref6.mutate;
    return {
      updateBrand: function () {
        var _ref7 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(vendor) {
          var response;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return mutate({
                    variables: { input: vendor }
                  });

                case 2:
                  response = _context5.sent;
                  return _context5.abrupt('return', response);

                case 4:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this3);
        }));

        return function updateBrand(_x7) {
          return _ref7.apply(this, arguments);
        };
      }()
    };
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_9__["graphql"])(_graphql_S3Upload_graphql__WEBPACK_IMPORTED_MODULE_13___default.a, {
  props: function props(_ref8) {
    var mutate = _ref8.mutate;
    return {
      signS3: function () {
        var _ref9 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(filename, filetype) {
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
          return _ref9.apply(this, arguments);
        };
      }()
    };
  }
}))(Vendor));

/***/ }),

/***/ "../client/src/modules/products/containers/Vendor.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/defineProperty");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/core-js/json/stringify");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__);
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
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_VendorView__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../client/src/modules/products/components/VendorView.web.jsx");
/* harmony import */ var _common_schema__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../client/src/modules/common/schema/index.js");
/* harmony import */ var _common_graphql_SFY_sfyCollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../client/src/modules/common/graphql/SFY/sfyCollectionsQuery.graphql");
/* harmony import */ var _common_graphql_SFY_sfyCollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_SFY_sfyCollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _common_graphql_VendorQuery_graphql__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../client/src/modules/common/graphql/VendorQuery.graphql");
/* harmony import */ var _common_graphql_VendorQuery_graphql__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_VendorQuery_graphql__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _common_graphql_SFY_sfySingleCategoryByHandle_graphql__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../client/src/modules/common/graphql/SFY/sfySingleCategoryByHandle.graphql");
/* harmony import */ var _common_graphql_SFY_sfySingleCategoryByHandle_graphql__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_SFY_sfySingleCategoryByHandle_graphql__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _common_graphql_SFY_sfyAdminCollectionByHandle_graphql__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../client/src/modules/common/graphql/SFY/sfyAdminCollectionByHandle.graphql");
/* harmony import */ var _common_graphql_SFY_sfyAdminCollectionByHandle_graphql__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_SFY_sfyAdminCollectionByHandle_graphql__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../client/src/modules/common/graphql/VendorsQuery.graphql");
/* harmony import */ var _common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _common_graphql_CategoryQuery_graphql__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("../client/src/modules/common/graphql/CategoryQuery.graphql");
/* harmony import */ var _common_graphql_CategoryQuery_graphql__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_CategoryQuery_graphql__WEBPACK_IMPORTED_MODULE_21__);












var _this2 = undefined;













var Vendor = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10___default()(Vendor, _React$Component);

  function Vendor() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, Vendor);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default()(this, (Vendor.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default()(Vendor)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(Vendor, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_VendorView__WEBPACK_IMPORTED_MODULE_14__["default"], this.props);
    }
  }]);

  return Vendor;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

var VendorWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_13__["compose"])(Object(_common_schema__WEBPACK_IMPORTED_MODULE_15__["FILTERED_PRODUCTS_QUERY"])(), Object(react_apollo__WEBPACK_IMPORTED_MODULE_13__["graphql"])(_common_graphql_SFY_sfySingleCategoryByHandle_graphql__WEBPACK_IMPORTED_MODULE_18___default.a, {
  options: function options(props) {
    var handle = props.match.params.category;
    // const page = props.location.search;
    // console.log('PROPS HERE::', props);
    // console.log('PAGE', page);

    var reg = /[=](\d)/;
    var first = parseInt(reg.exec(props.location.search)[1]);
    // console.log('FIRST ', first);
    var displayLim = 12;
    var fetchNum = first * displayLim;
    // console.log('FETCHNUM:', fetchNum);
    return { variables: { handle: handle, first: fetchNum }, fetchPolicy: 'cache-first' };
  },
  props: function props(_ref) {
    var data = _ref.data;
    var loading = data.loading,
        error = data.error,
        sfy_shop = data.sfy_shop,
        fetchMore = data.fetchMore,
        variables = data.variables;
    // console.log('LOADING:??', data);

    var currEndCursor = void 0,
        hasNextPage = void 0,
        hasPreviousPage = void 0;
    if (!loading && sfy_shop) {
      var products = sfy_shop.collectionByHandle.products;

      if (products.edges.length > 0) currEndCursor = products.edges[products.edges.length - 1].cursor;
      hasNextPage = products.pageInfo.hasNextPage;
      hasPreviousPage = products.pageInfo.hasPreviousPage;
    }
    // console.log('Products length',sfy_shop);
    var loadMore = function () {
      var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
        var after = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currEndCursor;
        var updatedVars, data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                updatedVars = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, variables, { after: after, first: first });
                _context.next = 3;
                return fetchMore({
                  variables: updatedVars,
                  updateQuery: function updateQuery(prevResult, _ref3) {
                    var fetchMoreResult = _ref3.fetchMoreResult;

                    if (fetchMoreResult.sfy_shop.collectionByHandle.products.edges.length === 0) return prevResult;
                    // console.log('PREVRESULT:', prevResult);
                    var updatedResult = JSON.parse(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(prevResult));
                    updatedResult.sfy_shop.collectionByHandle.products.edges = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(prevResult.sfy_shop.collectionByHandle.products.edges), babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(fetchMoreResult.sfy_shop.collectionByHandle.products.edges));
                    updatedResult.sfy_shop.collectionByHandle.products.pageInfo = fetchMoreResult.sfy_shop.collectionByHandle.products.pageInfo;

                    return updatedResult;
                  }
                });

              case 3:
                data = _context.sent;
                return _context.abrupt('return', data);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function loadMore() {
        return _ref2.apply(this, arguments);
      };
    }();
    // console.log('WHAT THE FUCKK::', sfy_shop);
    if (error) throw new Error('Error in Products Query: ' + error);
    if (loading || !sfy_shop) return { loading: loading };
    if (!loading && sfy_shop) {
      return {
        loading: loading,
        category: sfy_shop.collectionByHandle,
        currEndCursor: currEndCursor,
        hasNextPage: hasNextPage,
        hasPreviousPage: hasPreviousPage,
        loadMore: loadMore
      };
    }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_13__["graphql"])(_common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_20___default.a, {
  props: function props(_ref4) {
    var _ref4$data = _ref4.data,
        loading = _ref4$data.loading,
        error = _ref4$data.error,
        vendors = _ref4$data.vendors;

    if (error) throw new Error('Error in Vendors Query: ' + error);
    return { loading: loading, vendors: vendors };
  }
}),
// graphql(LOC_CATEGORY_QUERY, {
//   options: props => {
//     const { category: handle } = props.match.params;
//     return { variables: { handle } };
//   },
//   props: ({ data: { loading, error, category: locCategory } }) => {
//     if (error) throw new Error(`Error in Vendors Query: ${error}`);
//     return { loading, locCategory };
//   }
// }),
Object(react_apollo__WEBPACK_IMPORTED_MODULE_13__["graphql"])(_common_graphql_SFY_sfyAdminCollectionByHandle_graphql__WEBPACK_IMPORTED_MODULE_19___default.a, {
  options: function options(props) {
    var handle = props.match.params.category;

    return { variables: { handle: handle } };
  },
  props: function props(_ref5) {
    var _ref5$data = _ref5.data,
        admin_collectionByHandle = _ref5$data.admin_collectionByHandle,
        loading = _ref5$data.loading,
        error = _ref5$data.error;

    // console.log('LOADING::', loading);
    if (!loading && !error) {
      var productsCount = admin_collectionByHandle.productsCount;

      return { productsCount: productsCount, loadingCount: loading };
    }
    if (error) {
      return { countError: error, productsCount: null };
    }
    return { loadingCount: loading, productsCount: null };

    // if (loadingProductCount) {
    //   return { loadingProductCount };
    // }
    // if (!error) {
    //   return { loadingProductCount, productsCount };
    // } else {
    //   return { countError: error };
    // }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_13__["graphql"])(_common_graphql_SFY_sfyCollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_16___default.a, {
  options: function options() {
    return { variables: babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'first', 50) };
  },
  props: function props(_ref6) {
    var data = _ref6.data;
    var loading = data.loading,
        error = data.error,
        sfy_shop_collections = data.sfy_shop;

    if (error) throw new Error('Error in Categories (Vendor Page) Query: ' + error);
    return { loading: loading, sfy_shop_collections: sfy_shop_collections };
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_13__["graphql"])(_common_graphql_VendorQuery_graphql__WEBPACK_IMPORTED_MODULE_17___default.a, {
  options: function options(props) {
    console.log('PROPS MATCH::', props.match.params);
    return { variables: { input: { handle: props.match.params.vendor_name } } };
  },
  props: function props(_ref7) {
    var data = _ref7.data;
    var loading = data.loading,
        error = data.error,
        vendor = data.vendor;
    // console.log('DATA:::', data);

    if (error) throw new Error('Error in Categories (Vendor Page) Query: ' + error);
    return { loading: loading, vendor: vendor };
  }
}))(Vendor);

Vendor.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object,
  search: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string
};

/* harmony default export */ __webpack_exports__["default"] = (VendorWithApollo);

/***/ }),

/***/ "./src/modules/vendor/resolvers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/slicedToArray");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);



/*eslint-disable no-unused-vars*/
/* harmony default export */ __webpack_exports__["default"] = (function (pubsub) {
  return {
    Query: {
      vendors: function vendors(_, __, context) {
        var _this = this;

        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
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
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
          var handle, id;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
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

        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
          var id;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
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
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
          var data, vendor;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  _context4.next = 3;
                  return Admin.get.vendorByHandle(handle);

                case 3:
                  data = _context4.sent;

                  if (!(typeof data == 'undefined' && handle.length > 0)) {
                    _context4.next = 9;
                    break;
                  }

                  _context4.next = 7;
                  return Admin.insert.vendorSeo(handle);

                case 7:
                  vendor = _context4.sent;
                  return _context4.abrupt('return', vendor);

                case 9:
                  if (!(handle.length == 0)) {
                    _context4.next = 11;
                    break;
                  }

                  return _context4.abrupt('return', null);

                case 11:
                  if (!data) {
                    _context4.next = 13;
                    break;
                  }

                  return _context4.abrupt('return', { handle: handle, seo: data });

                case 13:
                  _context4.next = 18;
                  break;

                case 15:
                  _context4.prev = 15;
                  _context4.t0 = _context4['catch'](0);
                  return _context4.abrupt('return', _context4.t0);

                case 18:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this4, [[0, 15]]);
        }))();
      }
    },
    Mutation: {
      updateBrand: function updateBrand(_, _ref4, _ref5) {
        var _this5 = this;

        var input = _ref4.input;
        var Vendor = _ref5.Vendor;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
          var _ref6, _ref7, brand;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.prev = 0;
                  _context5.next = 3;
                  return Vendor.insertOrUpdate.vendorInfo(input);

                case 3:
                  _ref6 = _context5.sent;
                  _ref7 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref6, 1);
                  brand = _ref7[0];

                  console.log('BRAND::', brand);
                  return _context5.abrupt('return', brand);

                case 10:
                  _context5.prev = 10;
                  _context5.t0 = _context5['catch'](0);

                  console.log('ERROR IN UPDATE MUTATION', _context5.t0);

                case 13:
                  return _context5.abrupt('return', null);

                case 14:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this5, [[0, 10]]);
        }))();
      }
    }
  };
});

/***/ }),

/***/ "./src/modules/vendor/sql.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vendor; });
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sql_connector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/sql/connector.js");




/*eslint-disable no-unused-vars*/


var Vendor = function Vendor() {
  babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Vendor);

  this.get = {
    vendors: function vendors() {
      var _this = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', _sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"].select().from('vendors').orderBy('id').catch(function (err) {
                  return console.log('Error retrieving vendors', err);
                }));

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    vendorById: function vendorById(id) {
      var _this2 = this;

      var select = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';
      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"].select(select).from('vendors').where({ id: id }).first().catch(function (err) {
                  return console.log('Error retrieving the category data', err);
                });

              case 2:
                return _context2.abrupt('return', _context2.sent);

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    vendorByHandle: function vendorByHandle(handle) {
      var _this3 = this;

      var select = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';
      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"].select(select).from('vendors').where({ handle: handle }).first().catch(function (err) {
                  return console.log('Error retrieving the category data', err);
                });

              case 2:
                return _context3.abrupt('return', _context3.sent);

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    vendorCategories: function vendorCategories(vendor_id) {
      var _this4 = this;

      var select = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';
      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"].select('c.*').from('category_vendor_link AS cvl').innerJoin('categories AS c', 'c.id', 'cvl.category_id').where('cvl.vendor_id', '=', vendor_id).catch(function (err) {
                  return console.log('Error retrieving Categories related Vendors data', err);
                });

              case 2:
                return _context4.abrupt('return', _context4.sent);

              case 3:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    }
  };
  this.insertOrUpdate = {
    vendorInfo: function vendorInfo(_ref) {
      var _this5 = this;

      var id = _ref.id,
          vendor = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ['id']);

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
        var update;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"])('vendors').where({ id: id });

              case 3:
                update = _context5.sent;

                if (!(update.length == 0)) {
                  _context5.next = 9;
                  break;
                }

                _context5.next = 7;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"])('vendors').insert(vendor).returning(['id', 'name', 'handle', 'logo_url', 'is_featured', 'is_top_six', 'top_six_position', 'description']);

              case 7:
                _context5.next = 12;
                break;

              case 9:
                _context5.next = 11;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"])('vendors').where({ id: id }).update(vendor).returning(['id', 'name', 'handle', 'logo_url', 'is_featured', 'is_top_six', 'top_six_position', 'description']);

              case 11:
                return _context5.abrupt('return', _context5.sent);

              case 12:
                _context5.next = 17;
                break;

              case 14:
                _context5.prev = 14;
                _context5.t0 = _context5['catch'](0);

                console.log('ERROR UPDATING VENDOR:', _context5.t0);

              case 17:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this5, [[0, 14]]);
      }))();
    }
  };
};



/***/ })

};
//# sourceMappingURL=index.3aa8101e2b0ee39e006c.js.map
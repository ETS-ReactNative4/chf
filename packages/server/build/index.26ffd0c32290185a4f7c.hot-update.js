require("source-map-support").install();
exports.id = "index";
exports.modules = {

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
  console.log('FORM PROPS', props);
  var dealer = void 0;
  if (props.hasOwnProperty('dealerByHandle')) {
    var _props$dealerByHandle = props.dealerByHandle,
        __typename = _props$dealerByHandle.__typename,
        rest = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(_props$dealerByHandle, ['__typename']);

    dealer = rest;
  } else {
    dealer = null;
  }
  console.log('DEALER::', dealer);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
    enableReinitialize: true,
    initialValues: dealer ? dealer : defaultDealer,
    onSubmit: function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values) {
        var dealer;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('VALUES::', values);
                _context.next = 3;
                return props.updateDealer(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, values, { handle: values.name.split(' ').join('-').toLowerCase(), id: '' }));

              case 3:
                dealer = _context.sent;

                console.log('DEALER::', dealer);

              case 5:
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
    render: function render(_ref2) {
      var values = _ref2.values,
          errors = _ref2.errors,
          touched = _ref2.touched,
          isSubmitting = _ref2.isSubmitting,
          setFieldValue = _ref2.setFieldValue;

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
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('input', { style: { opacity: 0 }, id: 'file', name: 'image_url', type: 'file', onChange: props.adaptFileEventToValue(setFieldValue) })
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
  image: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Formic);

/***/ })

};
//# sourceMappingURL=index.7cd24d732c6d73160a46.js.map
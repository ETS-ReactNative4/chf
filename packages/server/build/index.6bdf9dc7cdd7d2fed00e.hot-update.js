require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/admin/components/Locations/Form.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);



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
    dealer = props.dealerByHandle;
  } else {
    dealer = null;
  }
  console.log('DEALER::', dealer);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
    'div',
    null,
    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
      enableReinitialize: true,
      initialValues: dealer ? dealer : defaultDealer,
      onSubmit: function onSubmit(values) {
        console.log('VALUES::', values);
      },
      render: function render(_ref) {
        var values = _ref.values,
            errors = _ref.errors,
            touched = _ref.touched,
            isSubmitting = _ref.isSubmitting,
            setFieldValue = _ref.setFieldValue;

        console.log('VALUES::', values);
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
          formik__WEBPACK_IMPORTED_MODULE_3__["Form"],
          null,
          react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            'div',
            { className: 'admin__form__seo--field' },
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'name', placeholder: 'Location Name' }),
            errors.title && touched.title && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              'div',
              { className: 'admin__form__seo--error' },
              errors.title
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            'div',
            { className: 'admin__form__seo--field' },
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'street', placeholder: 'Street' }),
            errors.title && touched.title && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              'div',
              { className: 'admin__form__seo--error' },
              errors.title
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            'div',
            { className: 'admin__form__seo--field' },
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'city', placeholder: 'City' }),
            errors.title && touched.title && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              'div',
              { className: 'admin__form__seo--error' },
              errors.title
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            'div',
            { className: 'admin__form__seo--field' },
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'state', placeholder: 'State' }),
            errors.title && touched.title && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              'div',
              { className: 'admin__form__seo--error' },
              errors.title
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            'div',
            { className: 'admin__form__seo--field' },
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'zip', placeholder: 'Zip Code' }),
            errors.title && touched.title && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              'div',
              { className: 'admin__form__seo--error' },
              errors.title
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            'div',
            { className: 'admin__form__seo--field' },
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], { className: 'admin__form__seo--input', type: 'tel', name: 'phone', placeholder: 'Phone' }),
            errors.title && touched.title && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              'div',
              { className: 'admin__form__seo--error' },
              errors.title
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            'div',
            { className: 'admin__form__seo--field' },
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], { className: 'admin__form__seo--input', type: 'email', name: 'email', placeholder: 'Email' }),
            errors.title && touched.title && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              'div',
              { className: 'admin__form__seo--error' },
              errors.title
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            'div',
            { className: 'admin__form__seo--field' },
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              'label',
              { htmlFor: 'file' },
              'File upload'
            ),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('input', {
              id: 'file',
              name: 'image_url',
              type: 'file',
              onChange: function () {
                var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
                  var url;
                  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return props.adaptFileEventToValue(event);

                        case 2:
                          url = _context.sent;

                          setFieldValue('image_url', url);

                        case 4:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _callee, _this);
                }));

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }()
            })
          ),
          react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            'button',
            { type: 'submit', disabled: isSubmitting },
            'Submit'
          )
        );
      }
    })
  );
};
/* harmony default export */ __webpack_exports__["default"] = (Formic);

/***/ })

};
//# sourceMappingURL=index.5c3b1f014dd8d46c0090.js.map
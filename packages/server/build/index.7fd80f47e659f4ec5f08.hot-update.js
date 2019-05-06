require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/admin/components/Vendors/VendorEdit.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);




var _this = undefined;



var defaultVendor = {
  name: '',
  handle: '',
  logo_url: '',
  is_featured: true,
  is_top_six: false,
  description: ''
};
var VendorEdit = function VendorEdit(_ref) {
  var vendor = _ref.vendor,
      image = _ref.image,
      updateVendor = _ref.updateVendor,
      adaptFileEventToValue = _ref.adaptFileEventToValue;


  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    enableReinitialize: true,
    initialValues: vendor ? vendor : defaultVendor,
    onSubmit: function () {
      var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref3) {
        var id = _ref3.id,
            values = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, ['id']);

        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('VALUES::', values);
                // await updateVendor(
                //   // Object.assign({}, values, {
                //   //   handle: values.name
                //   //     .split(' ')
                //   //     .join('-')
                //   //     .toLowerCase()
                //   // })
                // );
                // console.log('DEALER::', dealer);

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(),
    render: function render(_ref4) {
      var values = _ref4.values,
          errors = _ref4.errors,
          touched = _ref4.touched,
          isSubmitting = _ref4.isSubmitting,
          setFieldValue = _ref4.setFieldValue;

      console.log('VALUES::', values);
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
        formik__WEBPACK_IMPORTED_MODULE_4__["Form"],
        { className: 'admin__location__form' },
        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
          'div',
          { className: 'admin__form__seo--field' },
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'name', placeholder: 'Location Name' }),
          errors.name && touched.name && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.name
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
          'div',
          { className: 'admin__form__seo--description' },
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
            className: 'admin__form__seo--input',
            component: 'textarea',
            name: 'description',
            placeholder: 'Description'
          }),
          errors.description && touched.description && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.description
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
          'div',
          { className: 'admin__btn' },
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            'button',
            { type: 'button', className: 'admin__btn--upload' },
            'Image Upload',
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('input', {
              style: { opacity: 0 },
              id: 'file',
              name: 'logo_url',
              type: 'file',
              onChange: adaptFileEventToValue(setFieldValue)
            })
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
          'div',
          { id: 'upload-bar', className: 'upload-progress' },
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            'div',
            { className: 'upload-bar' },
            '0%'
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
          'div',
          { className: 'admin__images' },
          image ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('img', {
            className: 'admin__images--image'
            // id={entry[0]}
            , draggable: 'false',
            src: image ? image : ''
          }) : null
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
/* harmony default export */ __webpack_exports__["default"] = (VendorEdit);

/***/ })

};
//# sourceMappingURL=index.1f2d2eb253623d048c66.js.map
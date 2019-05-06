require("source-map-support").install();
exports.id = "index";
exports.modules = {

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
      updateBrand = _ref.updateBrand;

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["Formik"], {
    enableReinitialize: true,
    initialValues: vendor ? vendor : defaultVendor,
    onSubmit: function () {
      var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref3) {
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
  updateBrand: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (VendorEdit);

/***/ })

};
//# sourceMappingURL=index.86024daf40755f596200.js.map
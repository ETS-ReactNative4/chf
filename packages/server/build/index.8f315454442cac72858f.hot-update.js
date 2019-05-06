require("source-map-support").install();
exports.id = "index";
exports.modules = {

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
  var seo = props.seo,
      uploadSeo = props.uploadSeo,
      uploadSeoContent = props.uploadSeoContent,
      selectedProduct = props.selectedProduct,
      selectedBrand = props.selectedBrand,
      selectedCollection = props.selectedCollection,
      selectedCategory = props.selectedCategory;
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
                // updateUser(updatedUser);
                // onClose();
                // },
                // error => {
                // actions.setSubmitting(false);
                // actions.setErrors(transformMyRestApiErrorsToAnObject(error));
                // actions.setStatus({ msg: 'Set some arbitrary status or data' });
                // }
                // );

              case 20:
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
  selectedCategory: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (SeoForm);

/***/ })

};
//# sourceMappingURL=index.28411cf5503a617c450b.js.map
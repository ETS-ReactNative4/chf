require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/admin/components/Locations/Form.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);



var Formic = function Formic(props) {
  console.log('FORM PROPS', props);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'div',
      { className: 'select' },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'label',
        { htmlFor: '' },
        'Please select a location'
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'select',
        { name: '', id: '', value: props.selectedLocation },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'option',
          { value: props.selectedLocation, disabled: true },
          props.selectedLocation
        )
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
      initialValues: { dealers: ['jared', 'ian', 'brent'] },
      onSubmit: function onSubmit(values) {
        console.log('VALUES::', values);
      },
      render: function render(_ref) {
        var values = _ref.values;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          formik__WEBPACK_IMPORTED_MODULE_1__["Form"],
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["FieldArray"], {
            name: 'friends',
            render: function render(arrayHelpers) {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                null,
                values.friends && values.friends.length > 0 ? values.friends.map(function (friend, index) {
                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { key: index },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], { name: 'friends.' + index }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'button',
                      {
                        type: 'button',
                        onClick: function onClick() {
                          return arrayHelpers.remove(index);
                        } // remove a friend from the list
                      },
                      '-'
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'button',
                      {
                        type: 'button',
                        onClick: function onClick() {
                          return arrayHelpers.insert(index, '');
                        } // insert an empty string at a position
                      },
                      '+'
                    )
                  );
                }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'button',
                  { type: 'button', onClick: function onClick() {
                      return arrayHelpers.push('');
                    } },
                  'Add a friend'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                  )
                )
              );
            }
          })
        );
      }
    })
  );
};
/* harmony default export */ __webpack_exports__["default"] = (Formic);

/***/ })

};
//# sourceMappingURL=index.2d464c6ea9dd4478cefb.js.map
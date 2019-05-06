require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/admin/components/Modal.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var SuccessModal = function SuccessModal(_ref) {
  var showModal = _ref.showModal,
      onClick = _ref.onClick;

  if (!showModal) {
    return null;
  }
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    { className: 'admin_modal--success' },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'p',
      null,
      'Success'
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'button',
      { onClick: onClick },
      'Close'
    )
  );
};

SuccessModal.propTypes = {
  showModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (SuccessModal);

/***/ })

};
//# sourceMappingURL=index.945198625f4b123bc146.js.map
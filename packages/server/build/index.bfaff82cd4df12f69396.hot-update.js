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
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);



console.log('FAREQ QINDOWQ', react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaReqWindowClose"]);
var SuccessModal = function SuccessModal(_ref) {
  var showModal = _ref.showModal,
      onClick = _ref.onClick;

  console.log('SHOW MODAL::', showModal);
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
        'Success'
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'button',
        { onClick: onClick },
        'Close'
      )
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
//# sourceMappingURL=index.b9429bb912f523683ad7.js.map
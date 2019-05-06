require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "./src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dotenv/config");
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../common/log.js");
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/server.js");



Object(_server__WEBPACK_IMPORTED_MODULE_2__["default"])()
    .then(function () {
    process.on('uncaughtException', function (ex) {
        _common_log__WEBPACK_IMPORTED_MODULE_1__["default"].error(ex);
        process.exit(1);
    });
    process.on('unhandledRejection', function (reason) {
        _common_log__WEBPACK_IMPORTED_MODULE_1__["default"].error(reason);
    });
    if (true) {
        module.hot.status(function (event) {
            if (event === 'abort' || event === 'fail') {
                Object(_common_log__WEBPACK_IMPORTED_MODULE_1__["default"])('HMR error status: ' + event);
                process.exit(250);
            }
        });
        module.hot.accept();
    }
})
    .catch(function (e) { return console.error('This error is hit', e); });


/***/ })

};
//# sourceMappingURL=index.e0820bf81cbbd0615cf7.js.map
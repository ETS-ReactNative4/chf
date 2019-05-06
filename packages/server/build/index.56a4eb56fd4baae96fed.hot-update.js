require("source-map-support").install();
exports.id = "index";
exports.modules = {

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

/***/ })

};
//# sourceMappingURL=index.907763a21b42bf502a75.js.map
require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "./src/modules/vendor/sql.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vendor; });
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sql_connector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/sql/connector.js");




/*eslint-disable no-unused-vars*/


var Vendor = function Vendor() {
  babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Vendor);

  this.get = {
    vendors: function vendors() {
      var _this = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', _sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"].select().from('vendors').orderBy('id').catch(function (err) {
                  return console.log('Error retrieving vendors', err);
                }));

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    vendorById: function vendorById(id) {
      var _this2 = this;

      var select = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';
      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"].select(select).from('vendors').where({ id: id }).first().catch(function (err) {
                  return console.log('Error retrieving the category data', err);
                });

              case 2:
                return _context2.abrupt('return', _context2.sent);

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    vendorByHandle: function vendorByHandle(handle) {
      var _this3 = this;

      var select = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';
      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"].select(select).from('vendors').where({ handle: handle }).first().catch(function (err) {
                  return console.log('Error retrieving the category data', err);
                });

              case 2:
                return _context3.abrupt('return', _context3.sent);

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    vendorCategories: function vendorCategories(vendor_id) {
      var _this4 = this;

      var select = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';
      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"].select('c.*').from('category_vendor_link AS cvl').innerJoin('categories AS c', 'c.id', 'cvl.category_id').where('cvl.vendor_id', '=', vendor_id).catch(function (err) {
                  return console.log('Error retrieving Categories related Vendors data', err);
                });

              case 2:
                return _context4.abrupt('return', _context4.sent);

              case 3:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    }
  };
  this.insertOrUpdate = {
    vendorInfo: function vendorInfo(_ref) {
      var _this5 = this;

      var id = _ref.id,
          vendor = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ['id']);

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
        var update;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"])('vendors').where({ id: id });

              case 3:
                update = _context5.sent;

                if (!(update.length == 0)) {
                  _context5.next = 9;
                  break;
                }

                _context5.next = 7;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"])('vendors').insert(vendor).returning(['id', 'name', 'handle', 'logo_url', 'is_featured', 'is_top_six', 'top_six_position', 'description']);

              case 7:
                _context5.next = 12;
                break;

              case 9:
                _context5.next = 11;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"])('vendors').where({ id: id }).update(vendor).returning(['id', 'name', 'handle', 'logo_url', 'is_featured', 'is_top_six', 'top_six_position', 'description']);

              case 11:
                return _context5.abrupt('return', _context5.sent);

              case 12:
                _context5.next = 17;
                break;

              case 14:
                _context5.prev = 14;
                _context5.t0 = _context5['catch'](0);

                console.log('ERROR UPDATING VENDOR:', _context5.t0);

              case 17:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this5, [[0, 14]]);
      }))();
    }
  };
};



/***/ })

};
//# sourceMappingURL=index.724ce2b4f89bda1fac34.js.map
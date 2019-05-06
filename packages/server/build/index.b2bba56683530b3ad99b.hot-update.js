require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "./src/modules/dealers/sql.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dealers; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sql_connector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/sql/connector.js");





var _class,
    _temp,
    _this4 = undefined;

/*eslint-disable no-unused-vars*/


var Dealers = (_temp = _class = function Dealers() {
  babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Dealers);

  this.get = {
    dealers: function dealers() {
      var _this = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var dealers, isUpdated, updated;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"])('dealers').select('*').orderBy('name');

              case 3:
                dealers = _context.sent;
                _context.next = 6;
                return _sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"].schema.hasColumn('dealers', 'image_url');

              case 6:
                isUpdated = _context.sent;

                if (isUpdated) {
                  _context.next = 13;
                  break;
                }

                _context.next = 10;
                return Dealers.alterDealers();

              case 10:
                updated = _context.sent;

                if (!updated) {
                  _context.next = 13;
                  break;
                }

                return _context.abrupt('return', { isUpdated: true });

              case 13:
                return _context.abrupt('return', dealers);

              case 16:
                _context.prev = 16;
                _context.t0 = _context['catch'](0);
                return _context.abrupt('return', _context.t0);

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 16]]);
      }))();
    },
    dealerByHandle: function dealerByHandle(_ref) {
      var _this2 = this;

      var handle = _ref.handle;
      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var dealer;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('DEALER HANDLE IN SQL::', handle);
                _context2.prev = 1;
                _context2.next = 4;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"])('dealers').where({ handle: handle }).select('*').first();

              case 4:
                dealer = _context2.sent;
                return _context2.abrupt('return', dealer);

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2['catch'](1);

                console.log('Dealer by handle error', _context2.t0);
                return _context2.abrupt('return', _context2.t0);

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[1, 8]]);
      }))();
    }
  };
  this.insertOrUpdate = {
    updateDealer: function updateDealer(input) {
      var _this3 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
        var update;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log('INSERT HANDLE:', input.handle);
                _context3.prev = 1;
                _context3.next = 4;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"])('dealers').where({ handle: input.handle });

              case 4:
                update = _context3.sent;

                if (!(update.length == 0)) {
                  _context3.next = 12;
                  break;
                }

                console.log('HANDLE::', input.handle);
                _context3.next = 9;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"])('dealers').insert(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, input));

              case 9:
                return _context3.abrupt('return', Object(_sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"])('dealers').select('*').where({ handle: input.handle }).first());

              case 12:
                _context3.next = 14;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"])('dealers').where({ handle: input.handle }).update(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, input));

              case 14:
                return _context3.abrupt('return', Object(_sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"])('dealers').where({ handle: input.handle }).select('*').first());

              case 15:
                _context3.next = 20;
                break;

              case 17:
                _context3.prev = 17;
                _context3.t0 = _context3['catch'](1);
                return _context3.abrupt('return', _context3.t0);

              case 20:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3, [[1, 17]]);
      }))();
    }
  };
  this.update = {};
  this.delete = {};
}, _class.alterDealers = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
  var done;
  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"].schema.alterTable('dealers', function (t) {
            t.string('image_url');
            t.text('description');
            t.string('url_name');
            t.string('hours');
            t.string('handle');
          });

        case 3:
          done = _context4.sent;

          if (!done) {
            _context4.next = 6;
            break;
          }

          return _context4.abrupt('return', true);

        case 6:
          _context4.next = 11;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4['catch'](0);
          throw new Error(_context4.t0);

        case 11:
        case 'end':
          return _context4.stop();
      }
    }
  }, _callee4, _this4, [[0, 8]]);
})), _temp);


/***/ })

};
//# sourceMappingURL=index.11b3385166f704be8625.js.map
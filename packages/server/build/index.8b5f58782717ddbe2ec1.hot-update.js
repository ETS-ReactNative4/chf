require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "./src/modules/dealers/resolvers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);


var defaultDealer = {
  id: '0',
  handle: '',
  name: ' ',
  street: ' ',
  suite: ' ',
  city: ' ',
  zip: ' ',
  state: ' ',
  country: ' ',
  email: ' ',
  phone: null,
  website: ' ',
  lat: ' ',
  lng: ' '
};
/*eslint-disable no-unused-vars*/
/* harmony default export */ __webpack_exports__["default"] = (function (pubsub) {
  return {
    Query: {
      dealers: function dealers(obj, _, _ref) {
        var _this = this;

        var Dealers = _ref.Dealers;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var edgesArray, dealers, updated, _edgesArray;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  edgesArray = [];
                  _context.prev = 1;
                  _context.next = 4;
                  return Dealers.get.dealers();

                case 4:
                  dealers = _context.sent;

                  console.log('DEALERS', dealers);
                  updated = dealers.hasOwnProperty('isUpdated');

                  console.log('UPDATED::', updated);

                  if (!updated) {
                    _context.next = 12;
                    break;
                  }

                  return _context.abrupt('return', {
                    dealers_count: 0,
                    edges: [],
                    dealer_info: { hasNextPage: false, end_cursor: 0 }
                  });

                case 12:
                  if (!(dealers.length == 0)) {
                    _context.next = 15;
                    break;
                  }

                  console.log('LENGTH WAS ZERO::', dealers);
                  return _context.abrupt('return', {
                    dealers_count: 0,
                    edges: [],
                    dealer_info: { hasNextPage: false, end_cursor: 0 }
                  });

                case 15:
                  console.log('WE SHOULD HIT HERE::', dealers);
                  _edgesArray = [];

                  dealers.map(function (dealer) {
                    return _edgesArray.push({ node: dealer });
                  });
                  console.log('DEALERS IN ELSE BLOCK;', _edgesArray);
                  return _context.abrupt('return', {
                    dealers_count: dealers.length,
                    edges: _edgesArray
                    // dealer_info: { hasNextPage: false, end_cursor: 0 }
                  });

                case 22:
                  _context.prev = 22;
                  _context.t0 = _context['catch'](1);

                  console.log('ERROR ON DEALERS:', _context.t0);

                case 25:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this, [[1, 22]]);
        }))();
      },
      dealerByHandle: function dealerByHandle(obj, input, _ref2) {
        var _this2 = this;

        var Dealers = _ref2.Dealers;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
          var handle, dealer;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  handle = input.handle;
                  _context2.next = 4;
                  return Dealers.get.dealerByHandle({ handle: handle });

                case 4:
                  dealer = _context2.sent;

                  if (!(typeof dealer == 'undefined' || !dealer)) {
                    _context2.next = 8;
                    break;
                  }

                  console.log('DEALER IF', defaultDealer);
                  return _context2.abrupt('return', defaultDealer);

                case 8:
                  console.log('WHY RETURN HERE YET::', dealer);
                  return _context2.abrupt('return', { dealerByHandle: dealer });

                case 12:
                  _context2.prev = 12;
                  _context2.t0 = _context2['catch'](0);

                  console.log('ERR GETTING DEALER:', _context2.t0);
                  return _context2.abrupt('return', _context2.t0);

                case 16:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2, [[0, 12]]);
        }))();
      }
    },
    Mutation: {
      updateDealer: function updateDealer(obj, _ref3, _ref4) {
        var _this3 = this;

        var dealer = _ref3.dealer;
        var Dealers = _ref4.Dealers;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
          var data, _dealer;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  data = dealer;
                  _context3.prev = 1;

                  console.log('UPDATE DEALER INPUT::', data);

                  _context3.next = 5;
                  return Dealers.insertOrUpdate.updateDealer(data);

                case 5:
                  _dealer = _context3.sent;

                  console.log('DEALER RETURN ::', _dealer);
                  return _context3.abrupt('return', _dealer);

                case 10:
                  _context3.prev = 10;
                  _context3.t0 = _context3['catch'](1);

                  console.log('ERROR::', _context3.t0);

                case 13:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this3, [[1, 10]]);
        }))();
      }
    },
    Subscription: {}
  };
});

/***/ })

};
//# sourceMappingURL=index.5451dc95d97d98f57e62.js.map
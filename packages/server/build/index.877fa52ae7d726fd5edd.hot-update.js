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
      dealers: function dealers(obj, _ref, _ref2) {
        var _this = this;

        var first = _ref.first,
            after = _ref.after;
        var Dealers = _ref2.Dealers;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var edgesArray, dealers, updated, _edgesArray, endCursor, dealers_count, hasNextPage;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  edgesArray = [];

                  console.log('AFTER::', after);
                  _context.prev = 2;
                  _context.next = 5;
                  return Dealers.get.dealers(first, after);

                case 5:
                  dealers = _context.sent;

                  console.log('DEALERS', dealers);
                  updated = dealers.hasOwnProperty('isUpdated');

                  console.log('UPDATED::', updated);
                  _edgesArray = [];

                  dealers.map(function (dealer, idx) {
                    return _edgesArray.push({ cursor: after + idx, node: dealer });
                  });
                  endCursor = _edgesArray.length > 0 ? _edgesArray[_edgesArray.length - 1].cursor : 0;
                  dealers_count = _edgesArray.length;
                  hasNextPage = dealers_count > after + first;

                  if (!updated) {
                    _context.next = 18;
                    break;
                  }

                  return _context.abrupt('return', {
                    dealers_count: dealers_count,
                    edges: _edgesArray,
                    dealer_info: { hasNextPage: hasNextPage, end_cursor: endCursor }
                  });

                case 18:
                  if (!(dealers.length == 0)) {
                    _context.next = 21;
                    break;
                  }

                  console.log('LENGTH WAS ZERO::', dealers);
                  return _context.abrupt('return', {
                    dealers_count: dealers_count,
                    edges: _edgesArray,
                    dealer_info: { hasNextPage: hasNextPage, end_cursor: endCursor }
                  });

                case 21:
                  console.log('WE SHOULD HIT HERE::', dealers);
                  console.log('DEALERS IN ELSE BLOCK;', _edgesArray);
                  return _context.abrupt('return', {
                    dealers_count: dealers_count,
                    edges: _edgesArray,
                    dealer_info: { hasNextPage: hasNextPage, end_cursor: endCursor }
                  });

                case 26:
                  _context.prev = 26;
                  _context.t0 = _context['catch'](2);

                  console.log('ERROR ON DEALERS:', _context.t0);

                case 29:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this, [[2, 26]]);
        }))();
      },
      dealerByHandle: function dealerByHandle(obj, input, _ref3) {
        var _this2 = this;

        var Dealers = _ref3.Dealers;
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
      addDealer: function addDealer(obj, _ref4, _ref5) {
        var _this3 = this;

        var dealer = _ref4.dealer;
        var Dealers = _ref5.Dealers;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
          var data;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  data = dealer;

                  try {
                    console.log('ADD DEALER::', dealer);
                  } catch (e) {
                    console.log('ERROR ADDING DEALER', e);
                  }

                case 2:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this3);
        }))();
      },
      updateDealer: function updateDealer(obj, _ref6, _ref7) {
        var _this4 = this;

        var dealer = _ref6.dealer;
        var Dealers = _ref7.Dealers;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
          var data, _dealer;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  data = dealer;
                  _context4.prev = 1;

                  console.log('UPDATE DEALER INPUT::', data);

                  _context4.next = 5;
                  return Dealers.insertOrUpdate.updateDealer(data);

                case 5:
                  _dealer = _context4.sent;

                  console.log('DEALER RETURN ::', _dealer);
                  return _context4.abrupt('return', _dealer);

                case 10:
                  _context4.prev = 10;
                  _context4.t0 = _context4['catch'](1);

                  console.log('ERROR::', _context4.t0);

                case 13:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this4, [[1, 10]]);
        }))();
      }
    },
    Subscription: {}
  };
});

/***/ })

};
//# sourceMappingURL=index.d1aa8aab7e6713e35d6b.js.map
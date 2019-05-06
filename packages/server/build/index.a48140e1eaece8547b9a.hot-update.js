require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "./src/modules/admin/resolvers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/core-js/json/stringify");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/defineProperty");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/slicedToArray");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util_FileUploader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/modules/util/FileUploader.js");










var getField = function getField(field, values) {
  if (values.hasOwnProperty(field)) {
    return values[field];
  }
};
// const handleLocationsCheck = async (context) => {
//  const check = await context.get.dealers();
//  console.log('CHECK::', check);
//  return check;
// }
/*eslint-disable no-unused-vars*/
/* harmony default export */ __webpack_exports__["default"] = (function (pubsub) {
  return {
    Query: {
      pages: function pages(obj, input, _ref) {
        var _this = this;

        var Admin = _ref.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee() {
          var pages, page;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return Admin.get.pages();

                case 3:
                  pages = _context.sent;

                  if (!(pages.length == 0)) {
                    _context.next = 9;
                    break;
                  }

                  _context.next = 7;
                  return Admin.insert.page({ id: 0, name: 'home' });

                case 7:
                  page = _context.sent;
                  return _context.abrupt('return', page);

                case 9:
                  return _context.abrupt('return', pages);

                case 12:
                  _context.prev = 12;
                  _context.t0 = _context['catch'](0);
                  return _context.abrupt('return', _context.t0);

                case 15:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this, [[0, 12]]);
        }))();
      },
      page: function page(obj, _ref2, _ref3) {
        var _this2 = this;

        var id = _ref2.id,
            pageTitle = _ref2.pageTitle;
        var Admin = _ref3.Admin,
            Dealers = _ref3.Dealers;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee2() {
          var page;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;

                  if (!id) {
                    _context2.next = 5;
                    break;
                  }

                  return _context2.abrupt('return', { id: id });

                case 5:
                  console.log('NO ID:::', pageTitle);
                  _context2.next = 8;
                  return Admin.get.pageByTitle(pageTitle);

                case 8:
                  page = _context2.sent;

                  if (page.name === 'locations') {
                    // const check = await handleLocationsCheck(Dealers);
                    // console.log('LOCATIONSCHECK DONE', check);
                  }
                  console.log('PAGE::', page);
                  return _context2.abrupt('return', { id: page.id, title: page.title, name: page.name });

                case 12:
                  _context2.next = 18;
                  break;

                case 14:
                  _context2.prev = 14;
                  _context2.t0 = _context2['catch'](0);

                  console.log('ERRROR GETTING PAGE:', _context2.t0);
                  return _context2.abrupt('return', _context2.t0);

                case 18:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2, [[0, 14]]);
        }))();
      },
      vendorData: function vendorData(_, _ref4, _ref5) {
        var _this3 = this;

        var handle = _ref4.handle;
        var Admin = _ref5.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee3() {
          var data, vendor;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  console.log('Vendor HANDLE:', handle);
                  _context3.prev = 1;
                  _context3.next = 4;
                  return Admin.get.vendorByHandle(handle);

                case 4:
                  data = _context3.sent;

                  console.log('DATA::', data, handle.length);

                  if (!(typeof data == 'undefined' && handle.length > 0)) {
                    _context3.next = 12;
                    break;
                  }

                  _context3.next = 9;
                  return Admin.insert.vendorSeo(handle);

                case 9:
                  vendor = _context3.sent;

                  console.log('VENDOR::', vendor);
                  return _context3.abrupt('return', vendor);

                case 12:
                  if (!(handle.length == 0)) {
                    _context3.next = 14;
                    break;
                  }

                  return _context3.abrupt('return', null);

                case 14:
                  if (!data) {
                    _context3.next = 16;
                    break;
                  }

                  return _context3.abrupt('return', { handle: handle, seo: data });

                case 16:
                  _context3.next = 21;
                  break;

                case 18:
                  _context3.prev = 18;
                  _context3.t0 = _context3['catch'](1);
                  return _context3.abrupt('return', _context3.t0);

                case 21:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this3, [[1, 18]]);
        }))();
      },
      collectionData: function collectionData(_, _ref6, _ref7) {
        var _this4 = this;

        var handle = _ref6.handle;
        var Admin = _ref7.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee4() {
          var data, collection;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  console.log('COLLECTION HANDLE:', handle);
                  _context4.prev = 1;
                  _context4.next = 4;
                  return Admin.get.collectionByHandle(handle);

                case 4:
                  data = _context4.sent;

                  console.log('COLLECTION DATA::', data, handle);

                  if (!((typeof data == 'undefined' || !data) && handle.length > 0)) {
                    _context4.next = 12;
                    break;
                  }

                  _context4.next = 9;
                  return Admin.insert.collectionSeo(handle);

                case 9:
                  collection = _context4.sent;

                  console.log('VENDOR::', collection);
                  return _context4.abrupt('return', collection);

                case 12:
                  if (!(handle.length == 0)) {
                    _context4.next = 14;
                    break;
                  }

                  return _context4.abrupt('return', null);

                case 14:
                  if (!data) {
                    _context4.next = 17;
                    break;
                  }

                  console.log('WE SHOULD SEND DATA::;', data);
                  return _context4.abrupt('return', data);

                case 17:
                  _context4.next = 22;
                  break;

                case 19:
                  _context4.prev = 19;
                  _context4.t0 = _context4['catch'](1);
                  return _context4.abrupt('return', _context4.t0);

                case 22:
                  return _context4.abrupt('return', null);

                case 23:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this4, [[1, 19]]);
        }))();
      }
    },
    Page: {
      fields: function fields(obj, _ref8, _ref9, info) {
        var field_names = _ref8.field_names;

        var _this5 = this;

        var Admin = _ref9.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee5() {
          var _ref10, page_content, requestedFields, field_value, fields, stringValues, data;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return Admin.get.pageContents(obj.id);

                case 2:
                  _ref10 = _context5.sent;
                  page_content = _ref10.page_content;
                  requestedFields = field_names.map(function (_ref11) {
                    var _ref12 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_ref11, 2),
                        section = _ref12[0],
                        field = _ref12[1];

                    return page_content.map(function (_ref13) {
                      var field_value = _ref13.field_value,
                          rest = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4___default()(_ref13, ['field_value']);

                      var values = JSON.parse(field_value);
                      if (section == rest.section_name) {
                        var combined = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, rest, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, field, getField(field, values)));
                        return combined;
                      }
                    }).reduce(function (accum, curr) {
                      var field_value = curr[field];
                      delete curr[field];
                      accum = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, accum, curr, { field_value: babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, field, field_value) });
                      return accum;
                    }, { field_value: null });
                  }).reduce(function (accum, curr) {
                    accum['field_value'] = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, accum['field_value'], curr['field_value']);
                    delete curr['field_value'];
                    accum = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, accum, curr);
                    return accum;
                  }, {});
                  // console.log('REQUESTED FIELDS:', requestedFields);

                  field_value = requestedFields.field_value, fields = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4___default()(requestedFields, ['field_value']);
                  stringValues = babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(field_value);
                  data = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, fields, { field_value: stringValues });
                  return _context5.abrupt('return', [data]);

                case 9:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this5);
        }))();
      }
    },
    Mutation: {
      signS3: function signS3(obj, _ref14) {
        var _this6 = this;

        var filename = _ref14.filename,
            filetype = _ref14.filetype;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee6() {
          var signedRequest;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return _util_FileUploader__WEBPACK_IMPORTED_MODULE_8__["default"].getSignedUrl({ filename: filename, filetype: filetype });

                case 2:
                  signedRequest = _context6.sent;
                  return _context6.abrupt('return', signedRequest);

                case 4:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, _this6);
        }))();
      },
      uploadPageContent: function uploadPageContent(obj, _ref15, _ref16) {
        var _this7 = this;

        var pageContent = _ref15.pageContent;
        var Admin = _ref16.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee7() {
          var _ref17, _ref18, data;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.prev = 0;
                  _context7.next = 3;
                  return Admin.update.pageContent(pageContent);

                case 3:
                  _ref17 = _context7.sent;
                  _ref18 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_ref17, 1);
                  data = _ref18[0];
                  return _context7.abrupt('return', data.page_content);

                case 9:
                  _context7.prev = 9;
                  _context7.t0 = _context7['catch'](0);

                  console.log('EERROO', _context7.t0);

                case 12:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7, _this7, [[0, 9]]);
        }))();
      },
      uploadSeo: function uploadSeo(obj, _ref19, _ref20) {
        var _this8 = this;

        var path = _ref19.path,
            handle = _ref19.handle,
            seo = _ref19.seo;
        var Admin = _ref20.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee8() {
          var _ref21, _ref22, data;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  console.log('PATH::', path);
                  console.log('HANDLE::', handle);
                  console.log('SEO::', seo);
                  _context8.prev = 3;
                  _context8.next = 6;
                  return Admin.update.seo({ path: path, handle: handle, seo: seo });

                case 6:
                  _ref21 = _context8.sent;
                  _ref22 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_ref21, 1);
                  data = _ref22[0];

                  console.log('DATA::', data);
                  return _context8.abrupt('return', data);

                case 13:
                  _context8.prev = 13;
                  _context8.t0 = _context8['catch'](3);

                  console.log('ERROR UPDATING SEO DATA::', _context8.t0);

                case 16:
                case 'end':
                  return _context8.stop();
              }
            }
          }, _callee8, _this8, [[3, 13]]);
        }))();
      }
    },
    Subscription: {}
  };
});

/***/ })

};
//# sourceMappingURL=index.5f7c6df83ad65e4dacd8.js.map
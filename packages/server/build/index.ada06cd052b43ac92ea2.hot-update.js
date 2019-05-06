require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/admin/containers/Location.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/core-js/map");
/* harmony import */ var babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("ramda");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../client/src/modules/admin/graphql/Dealers.graphql");
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../client/src/modules/admin/graphql/DealerQuery.graphql");
/* harmony import */ var _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../client/src/modules/admin/graphql/UpdateDealer.graphql");
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _graphql_S3Upload_graphql__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../client/src/modules/admin/graphql/S3Upload.graphql");
/* harmony import */ var _graphql_S3Upload_graphql__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_graphql_S3Upload_graphql__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_Locations_LocationInfo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../client/src/modules/admin/components/Locations/LocationInfo.jsx");
/* harmony import */ var _components_AdminView__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../client/src/modules/admin/components/AdminView.web.jsx");
/* harmony import */ var _components_CarouselImages_ImagePreview__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../client/src/modules/admin/components/CarouselImages/ImagePreview.jsx");
/* harmony import */ var _components_CarouselImages_ImageAdapter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("../client/src/modules/admin/components/CarouselImages/ImageAdapter.jsx");











var _this3 = undefined;













/*eslint-disable no-unused-vars*/





var uploadToS3 = function uploadToS3() {
  return;
};

var Location = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(Location, _React$Component);

  function Location(props) {
    var _this2 = this;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default()(this, Location);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default()(this, (Location.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5___default()(Location)).call(this, props));

    _this.updateProgress = function (percent) {
      var elem = document.getElementById('upload-bar');
      elem.style.visibility = 'visible';
      elem.style.width = percent + '%';
      elem.innerHTML = percent * 1 + '%';
    };

    _this.uploadToS3 = function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(signedRequest, file) {
        var options;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = {
                  headers: {
                    'Content-Type': '"' + file.type + '"'
                  },
                  onUploadProgress: function (progressEvent) {
                    var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                    this.setState({ percentCompleted: percentCompleted });
                  }.bind(_this)
                };
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_12___default.a.put(signedRequest, file, options);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.adaptFileEventToValue = function (delegate) {
      return function () {
        var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee4(e) {
          var files, signS3, image_data, getFileNameAndType, response, updatedImageData;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  files = e.target.files;
                  signS3 = _this.props.signS3;
                  image_data = new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_2___default.a();

                  getFileNameAndType = function getFileNameAndType(file) {
                    return Object(ramda__WEBPACK_IMPORTED_MODULE_13__["pick"])(['name', 'type'], file);
                  };

                  response = function () {
                    var _ref3 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(signS3, _ref4) {
                      var name = _ref4.name,
                          type = _ref4.type;
                      return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.next = 2;
                              return signS3(name, type);

                            case 2:
                              return _context2.abrupt('return', _context2.sent);

                            case 3:
                            case 'end':
                              return _context2.stop();
                          }
                        }
                      }, _callee2, _this2);
                    }));

                    return function response(_x4, _x5) {
                      return _ref3.apply(this, arguments);
                    };
                  }();

                  if (files.length !== 0 && typeof files !== 'undefined') {
                    updatedImageData = void 0;
                    // TODO THIS FOREACH BIZ SUCKS WE ARE HAVING TO SET STATE WAY TO MUCH IN THIS LOOP
                    // BUT PLACING SETSTATE AFTER FOREACH FIRES BEFORE UPDATED IMAGEMAP IS CREATED

                    Object(ramda__WEBPACK_IMPORTED_MODULE_13__["forEach"])(function () {
                      var _ref5 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3(file) {
                        var _getFileNameAndType, name, res, _res$data$signS, signedRequest, url, currentImageSize, fileIndex;

                        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                // NOTE JUST need to update the state and then map the urls down on the preview component
                                _getFileNameAndType = getFileNameAndType(file), name = _getFileNameAndType.name;
                                _context3.next = 3;
                                return response(signS3, getFileNameAndType(file));

                              case 3:
                                res = _context3.sent;
                                _res$data$signS = res.data.signS3, signedRequest = _res$data$signS.signedRequest, url = _res$data$signS.url;
                                _context3.next = 7;
                                return _this.uploadToS3(signedRequest, file);

                              case 7:
                                currentImageSize = _this.state.images.size;
                                fileIndex = currentImageSize === 0 ? 0 : currentImageSize;
                                // indexOf(file, values(files));

                                image_data.set('image_url-' + fileIndex, { name: name, url: url });
                                updatedImageData = new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_2___default.a([].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(_this.state.images), babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(image_data)));
                                _this.setState({ images: updatedImageData });
                                delegate(url);

                              case 13:
                              case 'end':
                                return _context3.stop();
                            }
                          }
                        }, _callee3, _this2);
                      }));

                      return function (_x6) {
                        return _ref5.apply(this, arguments);
                      };
                    }(), Object(ramda__WEBPACK_IMPORTED_MODULE_13__["values"])(files));
                  }

                case 6:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this2);
        }));

        return function (_x3) {
          return _ref2.apply(this, arguments);
        };
      }();
    };

    _this.state = {
      image: null
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(Location, [{
    key: 'render',
    value: function render() {
      console.log('The props::::', this.props);
      console.log('The state::', this.state);
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
        _components_AdminView__WEBPACK_IMPORTED_MODULE_19__["default"],
        this.props,
        react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Locations_LocationInfo__WEBPACK_IMPORTED_MODULE_18__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ adaptFileEventToValue: this.adaptFileEventToValue(uploadToS3) }, this.props)),
        react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
          'div',
          { id: 'upload-bar', className: 'upload-progress' },
          react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
            'div',
            { className: 'upload-bar' },
            '0%'
          )
        )
      );
    }
  }]);

  return Location;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

var LocationWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_11__["compose"])(react_apollo__WEBPACK_IMPORTED_MODULE_11__["withApollo"],
// graphql(PAGES_QUERY, {
//   props: ({ data }) => {
//     const { pages, loading: loadingPages, error } = data;
//     console.log('pages', pages);
//     if (loadingPages && !error) {
//       return { loadingPages, pages: null };
//     } else {
//       return { pages, loadingPages };
//     }
//   }
// }),
// graphql(UPLOAD_CONTENT, {
//   props: ({ mutate }) => ({
//     uploadContent: async ({ page_id, content }) => {
//       // console.log('PAGE ID::', page_id);
//       // console.log('content::', content);
//       const {
//         data: { uploadPageContent }
//       } = await mutate({ variables: { pageContent: { page_id: page_id, content } } });
//       console.log('RETURN DATA::: ', uploadPageContent);
//       return uploadPageContent;
//     }
//   })
// }),
Object(react_apollo__WEBPACK_IMPORTED_MODULE_11__["graphql"])(_graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_15___default.a, {
  options: function options(props) {
    var handle = props.match.params.location_handle;
    return { variables: { handle: handle } };
  },
  props: function props(_ref6) {
    var data = _ref6.data;

    console.log('DEALER HANDLE QUERY:', data);
    return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, data);
  }
}),
// graphql(SIMPLE_PAGE_QUERY, {
//   options: () => {
//     return { variables: { pageTitle: 'Locations' } };
//   },
//   props: ({ data }) => {
//     console.log('Locations Page data', data);
//     const { page, loading: loadingPage, error } = data;
//     if (loadingPage && !error) {
//       return { loadingPage, page: null };
//     } else {
//       return { page, loadingPage };
//     }
//   }
// }),
Object(react_apollo__WEBPACK_IMPORTED_MODULE_11__["graphql"])(_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_14___default.a, {
  options: function options() {
    return {
      variables: { first: 12, after: 0 }
    };
  },
  props: function props(_ref7) {
    var data = _ref7.data;

    console.log('DATA:::', data);
    var loading = data.loading,
        error = data.error,
        dealers = data.dealers;

    if (error) {
      console.log('DEALERS ERROR:::', error);
      return { dealersError: error };
    }
    if (loading) {
      return { loadingDealers: loading };
    }
    if (!loading && !error) {
      return { loadingDealers: loading, dealers: dealers };
    }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_11__["graphql"])(_graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_16___default.a, {
  props: function props(_ref8) {
    var mutate = _ref8.mutate;
    return {
      updateDealer: function () {
        var _ref9 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee5(dealer) {
          var _ref10, updateDealer;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.prev = 0;
                  _context5.next = 3;
                  return mutate({
                    variables: { dealer: dealer }
                  });

                case 3:
                  _ref10 = _context5.sent;
                  updateDealer = _ref10.data.updateDealer;

                  console.log('UPDATED::', updateDealer);
                  return _context5.abrupt('return', updateDealer);

                case 9:
                  _context5.prev = 9;
                  _context5.t0 = _context5['catch'](0);

                  console.log('ERROR UPDATING:', _context5.t0);

                case 12:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this3, [[0, 9]]);
        }));

        return function updateDealer(_x7) {
          return _ref9.apply(this, arguments);
        };
      }()
    };
  }
  // options: {
  //   refetchQueries: ({ data: { updateDealer } }) => {
  //     console.log('RESULT', updateDealer);
  //     return [
  //       { query: DEALER_BY_HANDLE_QUERY, variables: { handle: updateDealer.handle } },
  //       // { query: DEALERS_QUERY, variables: { first: 12, after: 0 } }
  //     ];
  //   }
  // }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_11__["graphql"])(_graphql_S3Upload_graphql__WEBPACK_IMPORTED_MODULE_17___default.a, {
  props: function props(_ref11) {
    var mutate = _ref11.mutate;
    return {
      signS3: function () {
        var _ref12 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee6(filename, filetype) {
          var response;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return mutate({
                    variables: {
                      filename: filename,
                      filetype: filetype
                    }
                  });

                case 2:
                  response = _context6.sent;
                  return _context6.abrupt('return', response);

                case 4:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, _this3);
        }));

        return function signS3(_x8, _x9) {
          return _ref12.apply(this, arguments);
        };
      }()
    };
  }
}))(Location);

/* harmony default export */ __webpack_exports__["default"] = (LocationWithApollo);

/***/ })

};
//# sourceMappingURL=index.16b0e10c48be3ea2980e.js.map
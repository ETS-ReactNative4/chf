require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/admin/components/CarouselImages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/core-js/json/stringify");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/slicedToArray");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("babel-runtime/core-js/map");
/* harmony import */ var babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("ramda");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _graphql_PageQuery_graphql__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../client/src/modules/admin/graphql/PageQuery.graphql");
/* harmony import */ var _graphql_PageQuery_graphql__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_graphql_PageQuery_graphql__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _ImagePreview__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../client/src/modules/admin/components/CarouselImages/ImagePreview.jsx");
/* harmony import */ var _ImageAdapter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../client/src/modules/admin/components/CarouselImages/ImageAdapter.jsx");
/* harmony import */ var _styles_carousel_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../client/src/modules/admin/styles/carousel.scss");
/* harmony import */ var _styles_carousel_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_styles_carousel_scss__WEBPACK_IMPORTED_MODULE_20__);




















// import ImageUploader from './ImageUploader';





var uploadToS3 = function uploadToS3() {
  return;
};

var Carousel = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11___default()(Carousel, _React$Component);

  function Carousel(props) {
    var _this2 = this;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, Carousel);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10___default()(this, (Carousel.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default()(Carousel)).call(this, props));

    _this.initializeView = function () {
      var page_content = _this.state.page_content;
      var pages = _this.props.pages;

      var page = pages[0];
      if (_this.props.page) {
        var fields = _this.props.page.fields;

        var rootFields = fields[0];
        var content = page_content.content;

        var fieldsToUpdate = content[0];
        var transformImages = new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default.a([].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(JSON.parse(rootFields.field_value).images)));

        var updatedFields = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, fieldsToUpdate, {
          field_value: babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, JSON.parse(rootFields.field_value), { images: transformImages })
        });
        _this.setState({
          loaded: true,
          images: transformImages,
          page_content: babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, page_content, { page_id: parseInt(page.id), content: [updatedFields] })
        });
      }
      var percentCompleted = _this.state.percentCompleted;
      // if (percentCompleted > 0) {
      //   this.updateProgress(percentCompleted);
      // }

      if (percentCompleted == 0 || percentCompleted == 100) {
        var elem = document.getElementById('upload-bar');
        elem.style.visibility = 'hidden';
        return;
      }
    };

    _this.imageToState = function (images) {
      _this.setState({
        images: images
      });
    };

    _this.updateProgress = function (percent) {
      var elem = document.getElementById('upload-bar');
      elem.style.visibility = 'visible';
      elem.style.width = percent + '%';
      elem.innerHTML = percent * 1 + '%';
    };

    _this.handleDragStart = function (e) {
      e.dataTransfer.setData('text', e.currentTarget.id);
      e.dataTransfer.dropEffect = 'move';
      _this.setState({ mouseY: e.clientY });
    };

    _this.handleDragEnter = function (e) {
      e.preventDefault();
      var target = e.target;
      if (target.parentElement.className === 'drag-drop-item') target = e.target.parentNode;
      target.style.borderTop = '1px solid red';
    };

    _this.handleDragOver = function (e) {
      return e.preventDefault();
    };

    _this.handleDrop = function (e) {
      // NOTE used currentTarget as it seemed to pick up the div much easier
      // also used clientY prop from event object to determine if we are draggin item upward

      e.preventDefault();
      var dataToDrop = e.dataTransfer.getData('text');
      var dataEl = document.getElementById(dataToDrop);
      var target = e.currentTarget;
      target.style.borderTop = 'none';
      e.target.style.borderTop = 'none';
      // NOTE: we are pulling from the top item in list no element above
      if (!dataEl.previousElementSibling) {
        return target.insertAdjacentElement('afterend', dataEl);
      }
      if (dataEl.previousElementSibling && target.nextElementSibling) {
        var oldY = _this.state.mouseY;
        var newY = e.clientY;
        if (oldY > newY) {
          return target.insertAdjacentElement('beforebegin', dataEl);
        }
        return target.insertAdjacentElement('afterend', dataEl);
      }

      // NOTE we are trying to drop in the last position so we should insert above the target
      if (!target.nextElementSibling) {
        return target.insertAdjacentElement('afterend', dataEl);
      }
    };

    _this.handleDragEnd = function (e) {
      var imageNodeList = e.target.parentNode.children;
      var imagesArray = Array.prototype.slice.call(imageNodeList);
      var imageMap = new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default.a();
      imagesArray.map(function (node) {
        imageMap.set(node.id, _this.state.images.get(node.id));
      });
      // needed? NOTE YES THIS IS NEEDED TO THE IMAGE ADAPTER CAN UPDATE ITS INTERNAL
      // TRACK OF WHAT THE IMAGE ORDER
      _this.handleReorder(imageMap);
    };

    _this.handleDragLeave = function (e) {
      e.target.style.borderTop = 'none';
      e.target.parentNode.borderTop = 'none';
    };

    _this.handleReorder = function (reOrderedImages) {
      _this.setState({ images: reOrderedImages });
    };

    _this.removeImage = function (key) {
      var currentImages = new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default.a([].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(_this.state.images)));
      currentImages.delete(key);
      _this.setState({ images: currentImages });
    };

    _this.uploadToS3 = function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(signedRequest, file) {
        var options;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
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
                return axios__WEBPACK_IMPORTED_MODULE_15___default.a.put(signedRequest, file, options);

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
        var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(e) {
          var files, signS3, image_data, getFileNameAndType, response, updatedImageData;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  files = e.target.files;
                  signS3 = _this.props.signS3;
                  image_data = new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default.a();

                  getFileNameAndType = function getFileNameAndType(file) {
                    return Object(ramda__WEBPACK_IMPORTED_MODULE_16__["pick"])(['name', 'type'], file);
                  };

                  response = function () {
                    var _ref3 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(signS3, _ref4) {
                      var name = _ref4.name,
                          type = _ref4.type;
                      return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
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

                    Object(ramda__WEBPACK_IMPORTED_MODULE_16__["forEach"])(function () {
                      var _ref5 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(file) {
                        var _getFileNameAndType, name, res, _res$data$signS, signedRequest, url, currentImageSize, fileIndex;

                        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
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
                                updatedImageData = new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default.a([].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(_this.state.images), babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(image_data)));
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
                    }(), Object(ramda__WEBPACK_IMPORTED_MODULE_16__["values"])(files));
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

    _this.handleChecked = function () {
      _this.setState({ carouselStatus: !_this.state.carouselStatus });
    };

    _this.saveCarouselContent = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5() {
      var page_content, _page_content$content, content, field_value, updatedContent, pageData, _ref7, _ref8, data, _JSON$parse, images, carouselActive;

      return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              page_content = _this.state.page_content;
              _page_content$content = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(page_content.content, 1), content = _page_content$content[0];
              field_value = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, { images: _this.state.images, carouselActive: _this.state.carouselStatus });
              updatedContent = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, content, { field_value: babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(field_value) });
              pageData = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, page_content, { content: [updatedContent] });
              _context5.prev = 5;
              _context5.next = 8;
              return _this.props.uploadContent(pageData);

            case 8:
              _ref7 = _context5.sent;
              _ref8 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref7, 1);
              data = _ref8[0];

              console.log('DATA:::', data);
              _JSON$parse = JSON.parse(data.field_value), images = _JSON$parse.images, carouselActive = _JSON$parse.carouselActive;

              console.log('IAMGES:::', images);
              _this.setState({ images: new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default.a([].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(images))), carouselStatus: carouselActive, saveSuccess: true });
              _context5.next = 20;
              break;

            case 17:
              _context5.prev = 17;
              _context5.t0 = _context5['catch'](5);

              console.log('ERRROR UPLOADING', _context5.t0);

            case 20:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this2, [[5, 17]]);
    }));

    _this.state = {
      loaded: false,
      percentCompleted: 0,
      carouselStatus: false,
      page_content: {
        page_id: null,
        content: [{
          section_name: 'hero',
          field_name: 'Carousel',
          field_label: 'carousel',
          field_type: 'Carousel',
          field_value: null
        }]
      },
      images: new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default.a()
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(Carousel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // console.log('CAROUSEL PROPS DID MOUNT', this.props.loadingPage);
      if (!this.props.loadingPage) {
        var pages = this.props.pages;

        var page = pages[0];
        var fields = this.props.page.fields;

        var rootFields = fields[0];
        var content = this.state.page_content.content;

        var fieldsToUpdate = content[0];
        var transformImages = new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default.a([].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(JSON.parse(rootFields.field_value).images)));

        var updatedFields = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, fieldsToUpdate, {
          field_value: babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, JSON.parse(rootFields.field_value), { images: transformImages })
        });
        this.setState({
          loaded: true,
          images: transformImages,
          page_content: babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, this.state.page_content, {
            page_id: parseInt(page.id),
            content: [updatedFields]
          })
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _props = this.props,
          loadingPages = _props.loadingPages,
          loadingPage = _props.loadingPage,
          page = _props.page,
          pages = _props.pages;
      var _state = this.state,
          page_content = _state.page_content,
          loaded = _state.loaded;

      if (prevProps.loadingPages !== loadingPages || !loadingPages) {
        console.log('PREV LOADING PAGE', prevProps.page, 'PROPS PAGE', page);
        if (prevProps.page !== page && !prevState.loaded) {
          console.log('PAGE IS DIFF', loaded, prevState.loaded);
          return this.initializeView();
        } else if (!prevState.loaded && page) {
          return this.initializeView();
        }
        return;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log('CAROUSEL State::', this.state);
      // console.log('CAROUSEL PROPS:', this.props);
      var loadingPage = this.props.loadingPage;

      if (loadingPage) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
          'div',
          { className: 'admin' },
          react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
            'div',
            { className: 'admin__btn' },
            react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
              'button',
              { type: 'button', className: 'admin__btn--upload' },
              'Upload',
              react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('input', { style: { opacity: 0 }, onChange: this.adaptFileEventToValue(uploadToS3), type: 'file', multiple: true })
            ),
            react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
              'button',
              { className: 'admin__btn--save', onClick: this.saveCarouselContent },
              'Save'
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
            'div',
            { className: 'admin__carousel__toggle' },
            react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
              'span',
              null,
              'Carousel On/Off'
            ),
            react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
              'label',
              { className: 'admin__carousel__switch' },
              react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('input', { type: 'checkbox', checked: this.state.carouselStatus, onChange: this.handleChecked }),
              react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('span', { className: 'admin__carousel__slider admin__carousel__slider--round' })
            )
          )
        );
      }
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
        'div',
        { className: 'admin' },
        react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
          'div',
          { className: 'admin__btn' },
          react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
            'button',
            { type: 'button', className: 'admin__btn--upload' },
            'Upload',
            react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('input', { style: { opacity: 0 }, onChange: this.adaptFileEventToValue(uploadToS3), type: 'file', multiple: true })
          ),
          react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
            'button',
            { className: 'admin__btn--save', onClick: this.saveCarouselContent },
            'Save'
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
          'div',
          { className: 'admin__carousel__toggle' },
          react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
            'span',
            null,
            'Carousel On/Off'
          ),
          react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
            'label',
            { className: 'admin__carousel__switch' },
            react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('input', { type: 'checkbox', checked: this.state.carouselStatus, onChange: this.handleChecked }),
            react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('span', { className: 'admin__carousel__slider admin__carousel__slider--round' })
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_ImagePreview__WEBPACK_IMPORTED_MODULE_18__["default"], {
          images: this.state.images,
          removeImage: this.removeImage,
          handleDragStart: this.handleDragStart,
          handleDragEnter: this.handleDragEnter,
          handleDrop: this.handleDrop,
          handleDragOver: this.handleDragOver,
          handleDragLeave: this.handleDragLeave,
          handleDragEnd: this.handleDragEnd,
          handleReorder: this.handleReorder
        }),
        react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
          'div',
          { id: 'upload-bar', className: 'upload-progress' },
          react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
            'div',
            { className: 'upload-bar' },
            '0%'
          )
        )
      );
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);

Carousel.propTypes = {
  loadingPages: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.bool,
  loadingPage: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.bool,
  fields: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.array,
  pages: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.array,
  uploadContent: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func
};
var CarouselWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_14__["compose"])(Object(react_apollo__WEBPACK_IMPORTED_MODULE_14__["graphql"])(_graphql_PageQuery_graphql__WEBPACK_IMPORTED_MODULE_17___default.a, {
  options: function options() {
    return { variables: { pageTitle: 'Home', fieldNames: [['hero', 'images'], ['hero', 'carouselActive']] } };
  },
  props: function props(_ref9) {
    var data = _ref9.data;

    // console.log('WHY IS THIS NOT RUNNING::', data);
    var page = data.page,
        loadingPage = data.loading,
        error = data.error;

    if (loadingPage && !error) {
      return { loadingPage: loadingPage, page: null };
    } else {
      return { page: page, loadingPage: loadingPage };
    }
  }
}))(Carousel);
/* harmony default export */ __webpack_exports__["default"] = (Object(_ImageAdapter__WEBPACK_IMPORTED_MODULE_19__["default"])(CarouselWithApollo));

/***/ })

};
//# sourceMappingURL=index.0438d2e0901059beed8d.js.map
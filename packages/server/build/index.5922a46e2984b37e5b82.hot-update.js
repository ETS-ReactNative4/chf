require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/common/components/global/components/Article.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../settings.js");
/* harmony import */ var _styles_modules_article_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/common/components/global/styles/modules/article.scss");
/* harmony import */ var _styles_modules_article_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_modules_article_scss__WEBPACK_IMPORTED_MODULE_9__);











var Article = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Article, _React$Component);

  function Article() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Article);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_ref = Article.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(Article)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      width: null,
      height: null
    }, _this.saveRef = function (ref) {
      return _this.containerNode = ref;
    }, _this.measureArticle = function () {
      var _this$containerNode = _this.containerNode,
          clientWidth = _this$containerNode.clientWidth,
          clientHeight = _this$containerNode.clientHeight;

      _this.setState({
        width: clientWidth,
        height: clientHeight
      });
    }, _this.getDescription = function (description) {
      return description.split('\n').map(function (i, key) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'div',
          { key: key },
          i,
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', null)
        );
      });
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Article, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.measureArticle();
      if (typeof window !== 'undefined') {
        window.addEventListener('resize', this.measureArticle, false);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.state.width !== nextState.width || this.state.height !== nextState.height;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.measureArticle();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', this.measureArticle, false);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var article = this.props.article;

      console.log('article', article);
      var width = this.state.width;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'section',
        {
          ref: this.saveRef,
          className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('article', {
            'article--xsmall': width < _settings__WEBPACK_IMPORTED_MODULE_8__["default"].breakpoints.small
          }, {
            'article--small': width < _settings__WEBPACK_IMPORTED_MODULE_8__["default"].breakpoints.medium && width >= _settings__WEBPACK_IMPORTED_MODULE_8__["default"].breakpoints.small
          }, {
            'article--medium': width < _settings__WEBPACK_IMPORTED_MODULE_8__["default"].breakpoints.large && width >= _settings__WEBPACK_IMPORTED_MODULE_8__["default"].breakpoints.medium
          }, {
            'article--large': width >= _settings__WEBPACK_IMPORTED_MODULE_8__["default"].breakpoints.large
          })
        },
        'article' in this.props ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'article',
          null,
          article.title ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            'header',
            { className: 'header header--primary article__title article__title--centered' },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              'h2',
              null,
              article.title
            )
          ) : null,
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            'div',
            null,
            'paragraphs' in article && article.paragraphs.length > 0 ? article.paragraphs.map(function (paragraph, i) {
              return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'p',
                { key: i, className: 'article__paragraph' },
                paragraph
              );
            }) : null,
            'locationInfo' in article ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              'div',
              null,
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'h6',
                { className: 'header header--secondary' },
                'Address: '
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'address',
                null,
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  'div',
                  null,
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    'a',
                    {
                      rel: 'noopener noreferrer',
                      target: '_blank',
                      href: 'https://www.google.com/maps/dir/?api=1&destination=' + article.locationInfo.street.replace(' ', '+') + '+' + article.locationInfo.city.replace(' ', '+') + '+' + article.locationInfo.country.replace(' ', '+')
                    },
                    article.locationInfo.street
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  'div',
                  null,
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    'a',
                    {
                      rel: 'noopener noreferrer',
                      target: '_blank',
                      href: 'https://www.google.com/maps/dir/?api=1&destination=' + article.locationInfo.street.replace(' ', '+') + '+' + article.locationInfo.city.replace(' ', '+') + '+' + article.locationInfo.country.replace(' ', '+')
                    },
                    article.locationInfo.city,
                    ', ',
                    article.locationInfo.state,
                    ' ',
                    article.locationInfo.zip
                  )
                ),
                'phone' in article.locationInfo ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  'div',
                  null,
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    'h6',
                    { className: 'header header--secondary' },
                    'Phone: '
                  ),
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    'a',
                    { href: 'tel:' + article.locationInfo.phone },
                    article.locationInfo.phone
                  )
                ) : null,
                'hours' in article.locationInfo && article.locationInfo.hours !== '' ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  'div',
                  null,
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    'h6',
                    { className: 'header header--secondary' },
                    'Hours: '
                  ),
                  article.locationInfo.hours
                ) : null,
                'email' in article.locationInfo && article.locationInfo.email !== '' ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  'div',
                  null,
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    'h6',
                    { className: 'header header--secondary' },
                    'Email: '
                  ),
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    'a',
                    { href: 'mailto:' + article.locationInfo.email },
                    article.locationInfo.email
                  )
                ) : null
              ),
              'description' in article.locationInfo && article.locationInfo.description !== '' ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'div',
                null,
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  'h6',
                  { className: 'header header--secondary' },
                  'About: '
                ),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  'p',
                  null,
                  this.getDescription(article.locationInfo.description)
                )
              ) : null
            ) : null
          )
        ) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'span',
          null,
          'No article to display'
        )
      );
    }
  }]);

  return Article;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

Article.propTypes = {
  article: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object
};

Article.defaultProps = {
  article: {
    title: 'Lorem Ipsum',
    paragraphs: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque dignissim enim sit amet. Tincidunt id aliquet risus feugiat in ante metus dictum. Sed sed risus pretium quam vulputate dignissim suspendisse in. Vitae congue mauris rhoncus aenean. Est lorem ipsum dolor sit. Ante metus dictum at tempor commodo. Sed augue lacus viverra vitae congue eu consequat ac felis. Mauris sit amet massa vitae tortor condimentum. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien.', 'Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Cursus mattis molestie a iaculis. Morbi tristique senectus et netus et malesuada fames ac turpis. Egestas purus viverra accumsan in nisl. Leo in vitae turpis massa sed elementum tempus. Consequat mauris nunc congue nisi vitae. Congue quisque egestas diam in arcu cursus euismod quis viverra. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Aliquet porttitor lacus luctus accumsan tortor posuere. Fusce ut placerat orci nulla pellentesque. Turpis egestas maecenas pharetra convallis posuere morbi leo. Sed vulputate odio ut enim blandit volutpat.']
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ })

};
//# sourceMappingURL=index.1537bfa9365b8133099c.js.map
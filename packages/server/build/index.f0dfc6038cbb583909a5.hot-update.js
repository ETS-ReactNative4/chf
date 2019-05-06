require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/profile/components/ManageAdmins.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/defineProperty");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_manage_admins_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/profile/styles/manage-admins.scss");
/* harmony import */ var _styles_manage_admins_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_manage_admins_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _common_graphql_SFY_sfySingleCustomerQuery_graphql__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/common/graphql/SFY/sfySingleCustomerQuery.graphql");
/* harmony import */ var _common_graphql_SFY_sfySingleCustomerQuery_graphql__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_SFY_sfySingleCustomerQuery_graphql__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _common_schema__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../client/src/modules/common/schema/index.js");











// import Helmet from 'react-helmet';
// import classnames from 'classnames';

// import {  } from '../../common/components/global';
// import settings from '../../../../../../settings';




var unconfirmedMsg = 'We could not find a Shopify account associated with the submitted email.\nPlease have the proposed admin register a Shopify account with the submitted email, and try again.';

var ManageAdmins = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(ManageAdmins, _React$Component);

  function ManageAdmins() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, ManageAdmins);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, (_ref = ManageAdmins.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default()(ManageAdmins)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      newAdminEmail: '',
      error: null,
      success: null
    }, _this.handleInput = function (e) {
      return _this.setState(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, e.target.name, e.target.value));
    }, _this.checkEmailExists = function (email) {
      return _this.props.client.query({
        query: _common_graphql_SFY_sfySingleCustomerQuery_graphql__WEBPACK_IMPORTED_MODULE_13___default.a,
        variables: { query: 'email:' + email }
      }).then(function (res) {
        var edges = res.data.admin_customers.edges;

        if (edges.length > 0 && edges[0].node.email) {
          return { status: 'confirmed', message: 'Shopify account confirmed' };
        } else {
          return { status: 'unconfirmed', message: unconfirmedMsg };
        }
      }).catch(function (e) {
        console.log('Error confirming shopify email: ', e);
        return { errors: 'There was a Shopify server error. Please try again later.' };
      });
    }, _this.addAdmin = function () {
      var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var newAdminEmail, emailCheck, addAdminRes, email;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _this.setState({ error: null, success: null });
                newAdminEmail = _this.state.newAdminEmail;

                // Check if proposed admin email is registered with Shopify

                _context.next = 5;
                return _this.checkEmailExists(newAdminEmail);

              case 5:
                emailCheck = _context.sent;

                if (emailCheck) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt('return', _this.setState({ error: 'There was an error veryfing email.' }));

              case 8:
                if (!('errors' in emailCheck)) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt('return', _this.setState({ error: emailCheck.errors }));

              case 10:
                if (!('status' in emailCheck)) {
                  _context.next = 33;
                  break;
                }

                if (!(emailCheck.status === 'confirmed')) {
                  _context.next = 31;
                  break;
                }

                _context.next = 14;
                return _this.props.addAdmin({ email: newAdminEmail });

              case 14:
                addAdminRes = _context.sent;

                if (addAdminRes) {
                  _context.next = 19;
                  break;
                }

                return _context.abrupt('return', _this.setState({ error: 'There was an error adding admin.' }));

              case 19:
                if (!('errors' in addAdminRes)) {
                  _context.next = 23;
                  break;
                }

                return _context.abrupt('return', _this.setState({ error: addAdminRes.errors[0] }));

              case 23:
                if (!('user' in addAdminRes)) {
                  _context.next = 28;
                  break;
                }

                email = addAdminRes.user.email;
                return _context.abrupt('return', _this.setState({
                  success: 'Successfully added ' + email + ' as an admin.',
                  newAdminEmail: ''
                }));

              case 28:
                return _context.abrupt('return', _this.setState({ error: 'There was an error adding admin.' }));

              case 29:
                _context.next = 33;
                break;

              case 31:
                if (!(emailCheck.status === 'unconfirmed')) {
                  _context.next = 33;
                  break;
                }

                return _context.abrupt('return', _this.setState({ error: emailCheck.message }));

              case 33:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.removeAdmin = function () {
      var _ref3 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
        var removeAdminResult;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.setState({ error: null, success: null });
                _context2.next = 3;
                return _this.props.deleteUser(id);

              case 3:
                removeAdminResult = _context2.sent;

                if (!(removeAdminResult && 'errors' in removeAdminResult)) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt('return', _this.setState({ error: removeAdminResult.errors[0] }));

              case 8:
                if (!(removeAdminResult && 'user' in removeAdminResult)) {
                  _context2.next = 12;
                  break;
                }

                return _context2.abrupt('return', _this.setState({ success: 'Successfully deleted admin.' }));

              case 12:
                return _context2.abrupt('return', _this.setState({ error: 'There was an error deleting admin.' }));

              case 13:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(ManageAdmins, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          newAdminEmail = _state.newAdminEmail,
          error = _state.error;
      var users = this.props.users;


      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        'section',
        { className: 'manage-admins' },
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          'form',
          { className: 'manage-admins__form', onSubmit: this.addAdmin },
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            'label',
            null,
            'Email to make an Administrator:'
          ),
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement('input', { id: 'new-admin', type: 'email', name: 'newAdminEmail', value: newAdminEmail, onChange: this.handleInput }),
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            'button',
            { type: 'submit' },
            react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_11__["MdAdd"], null),
            react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
              'span',
              null,
              'Add'
            )
          )
        ),
        error !== null ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          'div',
          { className: 'manage-admins__error' },
          error.message
        ) : null,
        users && users.length > 0 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          'ul',
          null,
          users.map(function (u) {
            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
              'li',
              { key: u.id },
              react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
                'span',
                null,
                u.email
              ),
              react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
                'button',
                { onClick: function onClick() {
                    return _this3.removeAdmin(u.id);
                  } },
                react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
                  'span',
                  { hidden: true },
                  'Remove'
                ),
                react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_11__["MdClose"], null)
              )
            );
          })
        ) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          'div',
          null,
          'No Administrators exist, please consult M.O.D.'
        ),
        ['success', 'error'].map(function (item) {
          return _this3.state[item] ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            'div',
            { style: { marginTop: '15px', color: '#fc7b18' } },
            _this3.state[item]
          ) : null;
        })
      );
    }
  }]);

  return ManageAdmins;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var ManageAdminsWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_10__["compose"])(Object(_common_schema__WEBPACK_IMPORTED_MODULE_14__["ADD_ADMIN"])(), Object(_common_schema__WEBPACK_IMPORTED_MODULE_14__["DELETE_USER"])(), Object(_common_schema__WEBPACK_IMPORTED_MODULE_14__["USERS_QUERY"])({ role: 'admin' }))(ManageAdmins);

ManageAdmins.propTypes = {
  admins: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array,
  client: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  addAdmin: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  users: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array,
  deleteUser: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func
};

/* harmony default export */ __webpack_exports__["default"] = (ManageAdminsWithApollo);

/***/ })

};
//# sourceMappingURL=index.a77803ebc8a472de9eb3.js.map
require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/user/components/UsersFilterView.web.jsx":
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
/* harmony import */ var react_debounce_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("react-debounce-input");
/* harmony import */ var react_debounce_input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_debounce_input__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../client/src/i18n/index.ts");
/* harmony import */ var _common_components_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/common/components/web/index.jsx");






var _class, _temp2;








var UsersFilterView = (_temp2 = _class = function (_React$PureComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(UsersFilterView, _React$PureComponent);

  function UsersFilterView() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, UsersFilterView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_ref = UsersFilterView.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(UsersFilterView)).call.apply(_ref, [this].concat(args))), _this), _this.handleSearch = function (e) {
      var onSearchTextChange = _this.props.onSearchTextChange;

      onSearchTextChange(e.target.value);
    }, _this.handleRole = function (e) {
      var onRoleChange = _this.props.onRoleChange;

      onRoleChange(e.target.value);
    }, _this.handleIsActive = function () {
      var _this$props = _this.props,
          onIsActiveChange = _this$props.onIsActiveChange,
          isActive = _this$props.filter.isActive;

      onIsActiveChange(!isActive);
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(UsersFilterView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$filter = _props.filter,
          role = _props$filter.role,
          isActive = _props$filter.isActive,
          t = _props.t;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        _common_components_web__WEBPACK_IMPORTED_MODULE_9__["Form"],
        { layout: 'inline' },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          _common_components_web__WEBPACK_IMPORTED_MODULE_9__["FormItem"],
          { label: t('users.list.item.filter') },
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_debounce_input__WEBPACK_IMPORTED_MODULE_7__["DebounceInput"], {
            minLength: 2,
            debounceTimeout: 300,
            placeholder: t('users.list.item.search'),
            element: _common_components_web__WEBPACK_IMPORTED_MODULE_9__["Input"],
            onChange: this.handleSearch
          })
        ),
        '\xA0',
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          _common_components_web__WEBPACK_IMPORTED_MODULE_9__["FormItem"],
          { label: t('users.list.item.role.label') },
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            _common_components_web__WEBPACK_IMPORTED_MODULE_9__["Select"],
            { name: 'role', defaultValue: role, onChange: this.handleRole },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _common_components_web__WEBPACK_IMPORTED_MODULE_9__["Option"],
              { key: 1, value: '' },
              t('users.list.item.role.all')
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _common_components_web__WEBPACK_IMPORTED_MODULE_9__["Option"],
              { key: 2, value: 'user' },
              t('users.list.item.role.user')
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _common_components_web__WEBPACK_IMPORTED_MODULE_9__["Option"],
              { key: 3, value: 'admin' },
              t('users.list.item.role.admin')
            )
          )
        ),
        '\xA0',
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          _common_components_web__WEBPACK_IMPORTED_MODULE_9__["FormItem"],
          null,
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            _common_components_web__WEBPACK_IMPORTED_MODULE_9__["Label"],
            null,
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_common_components_web__WEBPACK_IMPORTED_MODULE_9__["Input"], { type: 'checkbox', defaultChecked: isActive, onChange: this.handleIsActive }),
            t('users.list.item.active')
          )
        )
      );
    }
  }]);

  return UsersFilterView;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.PureComponent), _class.propTypes = {
  searchText: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  filter: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  role: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  isActive: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  onSearchTextChange: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  onRoleChange: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  onIsActiveChange: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  t: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
}, _temp2);


/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_8__["default"])('user')(UsersFilterView));

/***/ }),

/***/ "../client/src/modules/user/components/UsersListView.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../client/src/i18n/index.ts");
/* harmony import */ var _common_components_web__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/common/components/web/index.jsx");








var _class, _temp2;








var UsersView = (_temp2 = _class = function (_React$PureComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(UsersView, _React$PureComponent);

  function UsersView() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, UsersView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (_ref = UsersView.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(UsersView)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      errors: []
    }, _this.handleDeleteUser = function () {
      var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
        var deleteUser, result;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                deleteUser = _this.props.deleteUser;
                _context.next = 3;
                return deleteUser(id);

              case 3:
                result = _context.sent;

                if (result && result.errors) {
                  _this.setState({ errors: result.errors });
                } else {
                  _this.setState({ errors: [] });
                }

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.renderOrderByArrow = function (name) {
      var orderBy = _this.props.orderBy;


      if (orderBy && orderBy.column === name) {
        if (orderBy.order === 'desc') {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            'span',
            { className: 'badge badge-primary' },
            '\u2193'
          );
        } else {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            'span',
            { className: 'badge badge-primary' },
            '\u2191'
          );
        }
      } else {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          'span',
          { className: 'badge badge-secondary' },
          '\u21C5'
        );
      }
    }, _this.orderBy = function (e, name) {
      var _this$props = _this.props,
          onOrderBy = _this$props.onOrderBy,
          orderBy = _this$props.orderBy;


      e.preventDefault();

      var order = 'asc';
      if (orderBy && orderBy.column === name) {
        if (orderBy.order === 'asc') {
          order = 'desc';
        } else if (orderBy.order === 'desc') {
          return onOrderBy({
            column: '',
            order: ''
          });
        }
      }

      return onOrderBy({ column: name, order: order });
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(UsersView, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          loading = _props.loading,
          users = _props.users,
          t = _props.t;
      var errors = this.state.errors;


      var columns = [{
        title: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          'a',
          { onClick: function onClick(e) {
              return _this3.orderBy(e, 'username');
            }, href: '#' },
          t('users.column.name'),
          ' ',
          this.renderOrderByArrow('username')
        ),
        dataIndex: 'username',
        key: 'username',
        render: function render(text, record) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"],
            { className: 'user-link', to: '/users/' + record.id },
            text
          );
        }
      }, {
        title: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          'a',
          { onClick: function onClick(e) {
              return _this3.orderBy(e, 'email');
            }, href: '#' },
          t('users.column.email'),
          ' ',
          this.renderOrderByArrow('email')
        ),
        dataIndex: 'email',
        key: 'email'
      }, {
        title: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          'a',
          { onClick: function onClick(e) {
              return _this3.orderBy(e, 'role');
            }, href: '#' },
          t('users.column.role'),
          ' ',
          this.renderOrderByArrow('role')
        ),
        dataIndex: 'role',
        key: 'role'
      }, {
        title: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          'a',
          { onClick: function onClick(e) {
              return _this3.orderBy(e, 'isActive');
            }, href: '#' },
          t('users.column.active'),
          ' ',
          this.renderOrderByArrow('isActive')
        ),
        dataIndex: 'isActive',
        key: 'isActive',
        render: function render(text) {
          return text.toString();
        }
      }, {
        title: t('users.column.actions'),
        key: 'actions',
        render: function render(text, record) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _common_components_web__WEBPACK_IMPORTED_MODULE_11__["Button"],
            { color: 'primary', size: 'sm', onClick: function onClick() {
                return _this3.handleDeleteUser(record.id);
              } },
            t('users.btn.delete')
          );
        }
      }];

      if (loading && !users) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          'div',
          { className: 'text-center' },
          t('users.loadMsg')
        );
      } else {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          'div',
          null,
          errors && errors.map(function (error) {
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'div',
              { className: 'alert alert-danger', role: 'alert', key: error.field },
              error.message
            );
          }),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_components_web__WEBPACK_IMPORTED_MODULE_11__["Table"], { dataSource: users, columns: columns })
        );
      }
    }
  }]);

  return UsersView;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent), _class.propTypes = {
  loading: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  users: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array,
  orderBy: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  onOrderBy: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  deleteUser: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  t: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
}, _temp2);


/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_10__["default"])('user')(UsersView));

/***/ }),

/***/ "../client/src/modules/user/containers/UserOperations.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withUsersState", function() { return withUsersState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withUsers", function() { return withUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withUsersDeleting", function() { return withUsersDeleting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withOrderByUpdating", function() { return withOrderByUpdating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withFilterUpdating", function() { return withFilterUpdating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToUsersList", function() { return subscribeToUsersList; });
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../common/utils.js");
/* harmony import */ var _graphql_UsersStateQuery_client_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../client/src/modules/user/graphql/UsersStateQuery.client.graphql");
/* harmony import */ var _graphql_UsersStateQuery_client_graphql__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_graphql_UsersStateQuery_client_graphql__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _graphql_UpdateOrderBy_client_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../client/src/modules/user/graphql/UpdateOrderBy.client.graphql");
/* harmony import */ var _graphql_UpdateOrderBy_client_graphql__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_graphql_UpdateOrderBy_client_graphql__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _graphql_UsersQuery_graphql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../client/src/modules/user/graphql/UsersQuery.graphql");
/* harmony import */ var _graphql_UsersQuery_graphql__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_graphql_UsersQuery_graphql__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _graphql_DeleteUser_graphql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/user/graphql/DeleteUser.graphql");
/* harmony import */ var _graphql_DeleteUser_graphql__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_graphql_DeleteUser_graphql__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _graphql_UpdateFilter_client_graphql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../client/src/modules/user/graphql/UpdateFilter.client.graphql");
/* harmony import */ var _graphql_UpdateFilter_client_graphql__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_graphql_UpdateFilter_client_graphql__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _graphql_UsersSubscription_graphql__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/user/graphql/UsersSubscription.graphql");
/* harmony import */ var _graphql_UsersSubscription_graphql__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_graphql_UsersSubscription_graphql__WEBPACK_IMPORTED_MODULE_11__);




var _this = undefined;












var withUsersState = function withUsersState(Component) {
  return Object(react_apollo__WEBPACK_IMPORTED_MODULE_3__["graphql"])(_graphql_UsersStateQuery_client_graphql__WEBPACK_IMPORTED_MODULE_6___default.a, {
    props: function props(_ref) {
      var usersState = _ref.data.usersState;

      return Object(_common_utils__WEBPACK_IMPORTED_MODULE_5__["removeTypename"])(usersState);
    }
  })(Component);
};

var withUsers = function withUsers(Component) {
  return Object(react_apollo__WEBPACK_IMPORTED_MODULE_3__["graphql"])(_graphql_UsersQuery_graphql__WEBPACK_IMPORTED_MODULE_8___default.a, {
    options: function options(_ref2) {
      var orderBy = _ref2.orderBy,
          filter = _ref2.filter;

      return {
        fetchPolicy: 'network-only',
        variables: { orderBy: orderBy, filter: filter }
      };
    },
    props: function props(_ref3) {
      var _ref3$data = _ref3.data,
          loading = _ref3$data.loading,
          users = _ref3$data.users,
          refetch = _ref3$data.refetch,
          error = _ref3$data.error,
          subscribeToMore = _ref3$data.subscribeToMore;

      return { loading: loading, users: users, refetch: refetch, subscribeToMore: subscribeToMore, errors: error ? error.graphQLErrors : null };
    }
  })(Component);
};

var withUsersDeleting = function withUsersDeleting(Component) {
  return Object(react_apollo__WEBPACK_IMPORTED_MODULE_3__["graphql"])(_graphql_DeleteUser_graphql__WEBPACK_IMPORTED_MODULE_9___default.a, {
    props: function props(_ref4) {
      var mutate = _ref4.mutate;
      return {
        deleteUser: function () {
          var _ref5 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(id) {
            var _ref6, _deleteUser;

            return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return mutate({
                      variables: { id: id }
                    });

                  case 3:
                    _ref6 = _context.sent;
                    _deleteUser = _ref6.data.deleteUser;

                    if (!_deleteUser.errors) {
                      _context.next = 7;
                      break;
                    }

                    return _context.abrupt('return', { errors: _deleteUser.errors });

                  case 7:
                    _context.next = 12;
                    break;

                  case 9:
                    _context.prev = 9;
                    _context.t0 = _context['catch'](0);

                    console.log(_context.t0.graphQLErrors);

                  case 12:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, _this, [[0, 9]]);
          }));

          return function deleteUser(_x) {
            return _ref5.apply(this, arguments);
          };
        }()
      };
    }
  })(Component);
};

var withOrderByUpdating = function withOrderByUpdating(Component) {
  return Object(react_apollo__WEBPACK_IMPORTED_MODULE_3__["graphql"])(_graphql_UpdateOrderBy_client_graphql__WEBPACK_IMPORTED_MODULE_7___default.a, {
    props: function props(_ref7) {
      var mutate = _ref7.mutate;
      return {
        onOrderBy: function onOrderBy(orderBy) {
          mutate({ variables: { orderBy: orderBy } });
        }
      };
    }
  })(Component);
};

var withFilterUpdating = function withFilterUpdating(Component) {
  return Object(react_apollo__WEBPACK_IMPORTED_MODULE_3__["graphql"])(_graphql_UpdateFilter_client_graphql__WEBPACK_IMPORTED_MODULE_10___default.a, {
    props: function props(_ref8) {
      var mutate = _ref8.mutate;
      return {
        onSearchTextChange: function onSearchTextChange(searchText) {
          mutate({ variables: { filter: { searchText: searchText } } });
        },
        onRoleChange: function onRoleChange(role) {
          mutate({ variables: { filter: { role: role } } });
        },
        onIsActiveChange: function onIsActiveChange(isActive) {
          mutate({ variables: { filter: { isActive: isActive } } });
        }
      };
    }
  })(Component);
};

function addUser(prev, node) {
  return immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(prev, {
    users: {
      $set: [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(prev.users), [node])
    }
  });
}

function deleteUser(prev, id) {
  var index = prev.users.findIndex(function (user) {
    return user.id === id;
  });
  // ignore if not found
  if (index < 0) {
    return prev;
  }
  return immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(prev, {
    users: {
      $splice: [[index, 1]]
    }
  });
}

var subscribeToUsersList = function subscribeToUsersList(subscribeToMore, filter) {
  return subscribeToMore({
    document: _graphql_UsersSubscription_graphql__WEBPACK_IMPORTED_MODULE_11___default.a,
    variables: { filter: filter },
    updateQuery: function updateQuery(prev, _ref9) {
      var _ref9$subscriptionDat = _ref9.subscriptionData.data.usersUpdated,
          mutation = _ref9$subscriptionDat.mutation,
          node = _ref9$subscriptionDat.node;

      switch (mutation) {
        case 'CREATED':
          return addUser(prev, node);
        case 'DELETED':
          return deleteUser(prev, node.id);
        case 'UPDATED':
          return deleteUser(prev, node.id);
        default:
          return prev;
      }
    }
  });
};




/***/ }),

/***/ "../client/src/modules/user/containers/Users.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../client/src/i18n/index.ts");
/* harmony import */ var _containers_UsersFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../client/src/modules/user/containers/UsersFilter.jsx");
/* harmony import */ var _containers_UsersList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../client/src/modules/user/containers/UsersList.jsx");
/* harmony import */ var _common_components_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../client/src/modules/common/components/web/index.jsx");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../settings.js");












var Users = function Users(_ref) {
  var t = _ref.t;

  var renderMetaData = function renderMetaData() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, {
      title: _settings__WEBPACK_IMPORTED_MODULE_8__["default"].app.name + ' - ' + t('users.title'),
      meta: [{
        name: 'description',
        content: _settings__WEBPACK_IMPORTED_MODULE_8__["default"].app.name + ' - ' + t('users.meta')
      }]
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _common_components_web__WEBPACK_IMPORTED_MODULE_7__["PageLayout"],
    null,
    renderMetaData(),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'h2',
      null,
      t('users.list.title')
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
      { to: '/users/new' },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _common_components_web__WEBPACK_IMPORTED_MODULE_7__["Button"],
        { color: 'primary' },
        t('users.btn.add')
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('hr', null),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_UsersFilter__WEBPACK_IMPORTED_MODULE_5__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('hr', null),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_UsersList__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  );
};

Users.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_4__["default"])('user')(Users));

/***/ }),

/***/ "../client/src/modules/user/containers/UsersFilter.jsx":
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
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_UsersFilterView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../client/src/modules/user/components/UsersFilterView.web.jsx");
/* harmony import */ var _UserOperations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../client/src/modules/user/containers/UserOperations.js");





// React



// Components




var UsersFilter = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(UsersFilter, _React$Component);

  function UsersFilter() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, UsersFilter);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (UsersFilter.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(UsersFilter)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(UsersFilter, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_UsersFilterView__WEBPACK_IMPORTED_MODULE_7__["default"], this.props);
    }
  }]);

  return UsersFilter;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_6__["compose"])(_UserOperations__WEBPACK_IMPORTED_MODULE_8__["withUsersState"], _UserOperations__WEBPACK_IMPORTED_MODULE_8__["withFilterUpdating"])(UsersFilter));

/***/ }),

/***/ "../client/src/modules/user/containers/UsersList.jsx":
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
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_UsersListView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../client/src/modules/user/components/UsersListView.web.jsx");
/* harmony import */ var _UserOperations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/user/containers/UserOperations.js");





// React




// Components




var UsersList = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(UsersList, _React$Component);

  function UsersList(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, UsersList);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (UsersList.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(UsersList)).call(this, props));

    _this.subscription = null;
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(UsersList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.checkSubscription();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.checkSubscription();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.subscription) {
        this.subscription();
      }
    }
  }, {
    key: 'checkSubscription',
    value: function checkSubscription() {
      var _props = this.props,
          loading = _props.loading,
          subscribeToMore = _props.subscribeToMore,
          filter = _props.filter;


      if (!loading) {
        // The component must re-subscribe every time filters changed.
        // That allows to get valid data after some CRUD operation happens.
        if (this.subscription) {
          this.subscription();
          this.subscription = null;
        }

        this.subscription = Object(_UserOperations__WEBPACK_IMPORTED_MODULE_9__["subscribeToUsersList"])(subscribeToMore, filter);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_UsersListView__WEBPACK_IMPORTED_MODULE_8__["default"], this.props);
    }
  }]);

  return UsersList;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

UsersList.propTypes = {
  filter: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  users: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
  subscribeToMore: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_7__["compose"])(_UserOperations__WEBPACK_IMPORTED_MODULE_9__["withUsersState"], _UserOperations__WEBPACK_IMPORTED_MODULE_9__["withUsers"], _UserOperations__WEBPACK_IMPORTED_MODULE_9__["withOrderByUpdating"], _UserOperations__WEBPACK_IMPORTED_MODULE_9__["withUsersDeleting"])(UsersList));

/***/ }),

/***/ "../client/src/modules/user/graphql/DeleteUser.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"message"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":134}};
    doc.loc.source = {"body":"mutation deleteUser($id: Int!) {\n  deleteUser(id: $id) {\n    user {\n      id\n    }\n    errors {\n      field\n      message\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set(opRefs);
      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["deleteUser"] = oneQuery(doc, "deleteUser");
        


/***/ }),

/***/ "../client/src/modules/user/graphql/UpdateFilter.client.graphql":
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateFilter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterUserInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFilter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"},"arguments":[]}]}]}}],"loc":{"start":0,"end":132}};
    doc.loc.source = {"body":"#import \"./UsersState.client.graphql\"\n\nmutation updateFilter($filter: FilterUserInput!) {\n  updateFilter(filter: $filter) @client\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  doc.definitions = doc.definitions.concat(unique(__webpack_require__("../client/src/modules/user/graphql/UsersState.client.graphql").definitions));


    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set(opRefs);
      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["updateFilter"] = oneQuery(doc, "updateFilter");
        


/***/ }),

/***/ "../client/src/modules/user/graphql/UpdateOrderBy.client.graphql":
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateOrderBy"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderByUserInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOrderBy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"},"arguments":[]}]}]}}],"loc":{"start":0,"end":138}};
    doc.loc.source = {"body":"#import \"./UsersState.client.graphql\"\n\nmutation updateOrderBy($orderBy: OrderByUserInput!) {\n  updateOrderBy(orderBy: $orderBy) @client\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  doc.definitions = doc.definitions.concat(unique(__webpack_require__("../client/src/modules/user/graphql/UsersState.client.graphql").definitions));


    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set(opRefs);
      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["updateOrderBy"] = oneQuery(doc, "updateOrderBy");
        


/***/ }),

/***/ "../client/src/modules/user/graphql/UsersQuery.graphql":
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"users"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderByUserInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterUserInput"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"},"directives":[]}]}}]}}],"loc":{"start":0,"end":162}};
    doc.loc.source = {"body":"#import \"./User.graphql\"\n\nquery users($orderBy: OrderByUserInput, $filter: FilterUserInput) {\n  users(orderBy: $orderBy, filter: $filter) {\n    ...UserInfo\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  doc.definitions = doc.definitions.concat(unique(__webpack_require__("../client/src/modules/user/graphql/User.graphql").definitions));


    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set(opRefs);
      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["users"] = oneQuery(doc, "users");
        


/***/ }),

/***/ "../client/src/modules/user/graphql/UsersSubscription.graphql":
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"onUsersUpdated"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterUserInput"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersUpdated"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mutation"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"},"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":170}};
    doc.loc.source = {"body":"#import \"./User.graphql\"\n\nsubscription onUsersUpdated($filter: FilterUserInput) {\n  usersUpdated(filter: $filter) {\n    mutation\n    node {\n      ...UserInfo\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  doc.definitions = doc.definitions.concat(unique(__webpack_require__("../client/src/modules/user/graphql/User.graphql").definitions));


    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set(opRefs);
      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["onUsersUpdated"] = oneQuery(doc, "onUsersUpdated");
        


/***/ }),

/***/ "../client/src/modules/user/index.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../client/src/i18n/index.ts");
/* harmony import */ var _access__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../client/src/modules/user/access/index.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../client/src/modules/user/resolvers/index.jsx");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../client/src/modules/user/locales/index.js");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_locales__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_common_components_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/common/components/web/index.jsx");
/* harmony import */ var _containers_Users__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../client/src/modules/user/containers/Users.web.jsx");
/* harmony import */ var _containers_Register__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/user/containers/Register.jsx");
/* harmony import */ var _containers_Login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/user/containers/Login.jsx");
/* harmony import */ var _containers_Auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/user/containers/Auth.web.jsx");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../client/src/modules/connector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withUser", function() { return _containers_Auth__WEBPACK_IMPORTED_MODULE_13__["withUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasRole", function() { return _containers_Auth__WEBPACK_IMPORTED_MODULE_13__["hasRole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withLoadedUser", function() { return _containers_Auth__WEBPACK_IMPORTED_MODULE_13__["withLoadedUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IfLoggedIn", function() { return _containers_Auth__WEBPACK_IMPORTED_MODULE_13__["IfLoggedIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IfNotLoggedIn", function() { return _containers_Auth__WEBPACK_IMPORTED_MODULE_13__["IfNotLoggedIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withLogout", function() { return _containers_Auth__WEBPACK_IMPORTED_MODULE_13__["withLogout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthRoute", function() { return _containers_Auth__WEBPACK_IMPORTED_MODULE_13__["AuthRoute"]; });




var _this = undefined;









// import ProfileView from './components/ProfileView';


// import UserEdit from './containers/UserEdit';
// import UserAdd from './containers/UserAdd';


// import ForgotPassword from './containers/ForgotPassword';
// import ResetPassword from './containers/ResetPassword';





// const ProfileName = withLoadedUser(
//   ({ currentUser }) => (currentUser ? currentUser.fullName || currentUser.username : null)
// );

var LogoutLink = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Object(_containers_Auth__WEBPACK_IMPORTED_MODULE_13__["withLogout"])(function (_ref) {
  var logout = _ref.logout,
      history = _ref.history;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
    'a',
    {
      href: 'javascript:void(0)',
      onClick: function onClick(e) {
        e.preventDefault();
        babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return logout();

                case 2:
                  history.push('/');

                case 3:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }))();
      },
      className: 'nav-link'
    },
    'Logout'
  );
}));



var NavLinkUsersWithI18n = Object(_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('user')(function (_ref3) {
  var t = _ref3.t;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
    react_router_dom__WEBPACK_IMPORTED_MODULE_4__["NavLink"],
    { to: '/users', className: 'nav-link', activeClassName: 'active' },
    t('navLink.users')
  );
});
var NavLinkLoginWithI18n = Object(_i18n__WEBPACK_IMPORTED_MODULE_5__["default"])('user')(function (_ref4) {
  var t = _ref4.t;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
    react_router_dom__WEBPACK_IMPORTED_MODULE_4__["NavLink"],
    { to: '/login', className: 'nav-link', activeClassName: 'active' },
    t('navLink.sign')
  );
});

/* harmony default export */ __webpack_exports__["default"] = (new _connector__WEBPACK_IMPORTED_MODULE_14__["default"](_access__WEBPACK_IMPORTED_MODULE_6__["default"], {
  route: [
  // <AuthRoute exact path="/profile" role={['user', 'admin']} redirect="/login" component={ProfileView} />,
  react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_Auth__WEBPACK_IMPORTED_MODULE_13__["AuthRoute"], { exact: true, path: '/admin/users', redirect: '/profile', role: 'admin', component: _containers_Users__WEBPACK_IMPORTED_MODULE_10__["default"] }),
  // <AuthRoute exact path="/users/new" role={['admin']} component={UserAdd} />,
  // <AuthRoute path="/users/:id" redirect="/profile" role={['user', 'admin']} component={UserEdit} />,
  react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_Auth__WEBPACK_IMPORTED_MODULE_13__["AuthRoute"], { exact: true, path: '/register', redirectOnLoggedIn: true, redirect: '/admin/dashboard', component: _containers_Register__WEBPACK_IMPORTED_MODULE_11__["default"] }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_Auth__WEBPACK_IMPORTED_MODULE_13__["AuthRoute"], {
    exact: true,
    path: '/admin/login',
    redirectOnLoggedIn: true,
    redirect: '/admin/dashboard',
    component: Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(function (_ref5) {
      var history = _ref5.history;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_Login__WEBPACK_IMPORTED_MODULE_12__["default"], { onLogin: function onLogin() {
          return history.push('/admin/dashboard');
        } });
    })
  })],
  // navItem: [
  //   <IfLoggedIn key="/users" role="admin">
  //     <MenuItem>
  //       <NavLinkUsersWithI18n />
  //     </MenuItem>
  //   </IfLoggedIn>
  // ],
  // navItemRight: [
  //   // <IfLoggedIn key="/profile">
  //   //   <MenuItem>
  //   //     <NavLink to="/profile" className="nav-link" activeClassName="active">
  //   //       <ProfileName />
  //   //     </NavLink>
  //   //   </MenuItem>
  //   // </IfLoggedIn>,
  //   <IfLoggedIn key="/logout">
  //     <MenuItem>
  //       <LogoutLink />
  //     </MenuItem>
  //   </IfLoggedIn>,
  //   <IfNotLoggedIn key="/login">
  //     <MenuItem>
  //       <NavLinkLoginWithI18n />
  //     </MenuItem>
  //   </IfNotLoggedIn>
  // ],
  resolver: _resolvers__WEBPACK_IMPORTED_MODULE_7__["default"],
  localization: { ns: 'user', resources: _locales__WEBPACK_IMPORTED_MODULE_8___default.a },
  // eslint-disable-next-line react/display-name
  rootComponentFactory: function rootComponentFactory(req) {
    return req ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_cookie__WEBPACK_IMPORTED_MODULE_3__["CookiesProvider"], { cookies: req.universalCookies }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_cookie__WEBPACK_IMPORTED_MODULE_3__["CookiesProvider"], null);
  }
}));

/***/ }),

/***/ "../common/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nestedOmit", function() { return nestedOmit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTypename", function() { return removeTypename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traceMethodCalls", function() { return traceMethodCalls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLATFORM", function() { return PLATFORM; });
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/core-js/json/stringify");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/typeof");
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../common/log.js");





var nestedOmit = function nestedOmit(obj, iteratee, context) {
  var r = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.omit(obj, iteratee, context);

  lodash__WEBPACK_IMPORTED_MODULE_2___default.a.each(r, function (val, key) {
    if ((typeof val === 'undefined' ? 'undefined' : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(val)) === 'object') r[key] = nestedOmit(val, iteratee, context);
  });

  return r;
};

var removeTypename = function removeTypename(obj) {
  return nestedOmit(obj, '__typename');
};

/**
 * Wraps target object to trace and log all method calls
 *
 * @param {*} obj target object to trace
 */
var traceMethodCalls = function traceMethodCalls(obj) {
  return new Proxy(obj, {
    get: function get(target, property) {
      var origProperty = target[property];
      return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var result = origProperty.apply(target, args);
        _log__WEBPACK_IMPORTED_MODULE_3__["default"].debug(property + babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(args) + ' -> ' + babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(result));
        return result;
      };
    }
  });
};

// Get current platform
var getPlatform = function getPlatform() {
  if (typeof document !== 'undefined') {
    return 'web';
  } else if (typeof window === 'undefined') {
    return 'server';
  } else {
    return 'mobile';
  }
};

var PLATFORM = getPlatform();

/***/ }),

/***/ "react-debounce-input":
/***/ (function(module, exports) {

module.exports = require("react-debounce-input");

/***/ })

};
//# sourceMappingURL=index.490ea4133da587e25b85.js.map
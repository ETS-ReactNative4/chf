require("source-map-support").install();
exports.id = "index";
exports.modules = {

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
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../common/utils.js");
/* harmony import */ var _graphql_UsersStateQuery_client_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../client/src/modules/user/graphql/UsersStateQuery.client.graphql");
/* harmony import */ var _graphql_UsersStateQuery_client_graphql__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_graphql_UsersStateQuery_client_graphql__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _graphql_UpdateOrderBy_client_graphql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../client/src/modules/user/graphql/UpdateOrderBy.client.graphql");
/* harmony import */ var _graphql_UpdateOrderBy_client_graphql__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_graphql_UpdateOrderBy_client_graphql__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _graphql_UsersQuery_graphql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/user/graphql/UsersQuery.graphql");
/* harmony import */ var _graphql_UsersQuery_graphql__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_graphql_UsersQuery_graphql__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _graphql_DeleteUser_graphql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../client/src/modules/user/graphql/DeleteUser.graphql");
/* harmony import */ var _graphql_DeleteUser_graphql__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_graphql_DeleteUser_graphql__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _graphql_UpdateFilter_client_graphql__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/user/graphql/UpdateFilter.client.graphql");
/* harmony import */ var _graphql_UpdateFilter_client_graphql__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_graphql_UpdateFilter_client_graphql__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _graphql_UsersSubscription_graphql__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/user/graphql/UsersSubscription.graphql");
/* harmony import */ var _graphql_UsersSubscription_graphql__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_graphql_UsersSubscription_graphql__WEBPACK_IMPORTED_MODULE_12__);





var _this = undefined;












var withUsersState = function withUsersState(Component) {
  return Object(react_apollo__WEBPACK_IMPORTED_MODULE_4__["graphql"])(_graphql_UsersStateQuery_client_graphql__WEBPACK_IMPORTED_MODULE_7___default.a, {
    props: function props(_ref) {
      var usersState = _ref.data.usersState;

      return Object(_common_utils__WEBPACK_IMPORTED_MODULE_6__["removeTypename"])(usersState);
    }
  })(Component);
};

var withUsers = function withUsers(Component) {
  return Object(react_apollo__WEBPACK_IMPORTED_MODULE_4__["graphql"])(_graphql_UsersQuery_graphql__WEBPACK_IMPORTED_MODULE_9___default.a, {
    options: function options(_ref2) {
      var orderBy = _ref2.orderBy,
          filter = _ref2.filter,
          rest = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(_ref2, ['orderBy', 'filter']);

      console.log('ORDER BY::', orderBy, filter, rest);
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
  return Object(react_apollo__WEBPACK_IMPORTED_MODULE_4__["graphql"])(_graphql_DeleteUser_graphql__WEBPACK_IMPORTED_MODULE_10___default.a, {
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
  return Object(react_apollo__WEBPACK_IMPORTED_MODULE_4__["graphql"])(_graphql_UpdateOrderBy_client_graphql__WEBPACK_IMPORTED_MODULE_8___default.a, {
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
  return Object(react_apollo__WEBPACK_IMPORTED_MODULE_4__["graphql"])(_graphql_UpdateFilter_client_graphql__WEBPACK_IMPORTED_MODULE_11___default.a, {
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
  return immutability_helper__WEBPACK_IMPORTED_MODULE_5___default()(prev, {
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
  return immutability_helper__WEBPACK_IMPORTED_MODULE_5___default()(prev, {
    users: {
      $splice: [[index, 1]]
    }
  });
}

var subscribeToUsersList = function subscribeToUsersList(subscribeToMore, filter) {
  return subscribeToMore({
    document: _graphql_UsersSubscription_graphql__WEBPACK_IMPORTED_MODULE_12___default.a,
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




/***/ })

};
//# sourceMappingURL=index.2acfd5e8cd64484d514d.js.map
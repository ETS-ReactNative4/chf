require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/admin/components/Locations/Form.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);



var Formic = function Formic(props) {
  console.log('FORM PROPS', props);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'div',
      { className: 'select' },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'label',
        { htmlFor: '' },
        'Please select a location'
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'select',
        { name: '', id: '', value: props.selectedLocation },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'option',
          { value: props.selectedLocation, disabled: true },
          props.selectedLocation
        )
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
      initialValues: { dealers: ['jared', 'ian', 'brent'] },
      onSubmit: function onSubmit(values) {
        console.log('VALUES::', values);
      },
      render: function render(_ref) {
        var values = _ref.values;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          formik__WEBPACK_IMPORTED_MODULE_1__["Form"],
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["FieldArray"], {
            name: 'friends',
            render: function render(arrayHelpers) {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                null,
                values.friends && values.friends.length > 0 ? values.friends.map(function (friend, index) {
                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { key: index },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], { name: 'friends.' + index }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'button',
                      {
                        type: 'button',
                        onClick: function onClick() {
                          return arrayHelpers.remove(index);
                        } // remove a friend from the list
                      },
                      '-'
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'button',
                      {
                        type: 'button',
                        onClick: function onClick() {
                          return arrayHelpers.insert(index, '');
                        } // insert an empty string at a position
                      },
                      '+'
                    )
                  );
                }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'button',
                  { type: 'button', onClick: function onClick() {
                      return arrayHelpers.push('');
                    } },
                  'Add a friend'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                  )
                )
              );
            }
          })
        );
      }
    })
  );
};
/* harmony default export */ __webpack_exports__["default"] = (Formic);

/***/ }),

/***/ "../client/src/modules/admin/components/Locations/LocationsView.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocationsView; });
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
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/admin/components/Locations/Form.jsx");










var _this = undefined;




// import FormCreator from '../FormCreator';
// import Text from '../FormCreator/FormTypes/Text';

//
// const LocationForm = new FormCreator({
//   field: [<Text />]
// });
var SelectLocationString = 'Please select a location';
var AddDealer = function AddDealer(props) {
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["Formik"], {
    enableReinitialize: true,
    initialValues: { name: '' },
    validateOnBlur: true
    // validate={validateAll}
    , validateOnChange: false,
    onSubmit: function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee(_ref2, actions) {
        var name = _ref2.name,
            values = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7___default()(_ref2, ['name']);

        var dealer;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('Values::', values);
                _context.next = 3;
                return props.updateDealer(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6___default()({
                  name: name,
                  handle: name.split(' ').join('-').toLowerCase()
                }, values));

              case 3:
                dealer = _context.sent;

                props.handleInitialLocation(dealer.name);
                console.log('DEALER:::', dealer);

                // try {
                //   switch (selectedCategory) {
                //     case 'products':
                //       await uploadSeoContent({ handle: selectedProduct, ...values });
                //
                //       break;
                //     case 'brands':
                //       await uploadSeo({ path: 'vendor', handle: selectedBrand, seo: { ...values } });
                //       break;
                //     case 'collections':
                //       await uploadSeo({ path: 'collection', handle: selectedCollection, seo: { ...values } });
                //       break;
                //     default:
                //       return;
                //   }
                // } catch (e) {
                //   console.log('ERROR:', e);
                // }
                // MyImaginaryRestApiCall(user.id, values).then(
                // updatedUser => {
                actions.setSubmitting(false);
                // updateUser(updatedUser);
                // onClose();
                // },
                // error => {
                // actions.setSubmitting(false);
                // actions.setErrors(transformMyRestApiErrorsToAnObject(error));
                // actions.setStatus({ msg: 'Set some arbitrary status or data' });
                // }
                // );

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }(),
    render: function render(_ref3) {
      var errors = _ref3.errors,
          status = _ref3.status,
          touched = _ref3.touched,
          isSubmitting = _ref3.isSubmitting,
          isValid = _ref3.isValid;

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
        formik__WEBPACK_IMPORTED_MODULE_11__["Form"],
        { className: 'admin__form__seo' },
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
          'div',
          { className: 'admin__form__seo--field' },
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            'label',
            { htmlFor: 'Location' },
            ' Please add your first location'
          ),
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'name', placeholder: 'Name' }),
          errors.title && touched.title && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.name
          )
        ),
        status && status.msg && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
          'div',
          { className: 'admin__form__seo--status' },
          status.msg
        ),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
          'button',
          { type: 'submit', disabled: isSubmitting },
          'Submit'
        )
      );
    }
  });
};

var LocationsView = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(LocationsView, _Component);

  function LocationsView(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LocationsView);

    var _this2 = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (LocationsView.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(LocationsView)).call(this, props));

    _this2.handleSelectedLocation = function (e) {
      return _this2.setState({ selectedLocation: e.target.value });
    };

    _this2.handleInitialLocation = function (location) {
      _this2.setState({ selectedLocation: location });
    };

    _this2.state = {
      selectedLocation: SelectLocationString
    };
    return _this2;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(LocationsView, [{
    key: 'render',
    value: function render() {
      var selectedLocation = this.state.selectedLocation;
      var _props = this.props,
          loadingDealers = _props.loadingDealers,
          dealers = _props.dealers;

      console.log('THE RENDER PROPS:::', this.props);
      if (loadingDealers) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
          'div',
          null,
          'Loading'
        );
      }
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
        'div',
        { className: 'admin__page__view' },
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(AddDealer, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6___default()({ handleInitialLocation: this.handleInitialLocation }, this.state, this.props))
      );
    }
  }]);

  return LocationsView;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);




LocationsView.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.node,
  updateDealer: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func
};

/***/ }),

/***/ "../client/src/modules/admin/components/Locations/index.js":
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
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../client/src/modules/admin/graphql/SimplePageQuery.graphql");
/* harmony import */ var _graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/admin/graphql/Dealers.graphql");
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../client/src/modules/admin/graphql/DealerQuery.graphql");
/* harmony import */ var _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/admin/graphql/UpdateDealer.graphql");
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _LocationsView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/admin/components/Locations/LocationsView.jsx");















// import FormCreator from '../FormCreator';
// import Text from '../FormCreator/FormTypes/Text';
// import Formic from './Form';
//
// const LocationForm = new FormCreator({
//   field: [<Text />]
// });

var Locations = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Locations, _Component);

  function Locations(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Locations);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Locations.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(Locations)).call(this, props));

    _this.state = {};
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Locations, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_LocationsView__WEBPACK_IMPORTED_MODULE_12__["default"], this.props);
    }
  }]);

  return Locations;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

// const LocationsWithApollo = compose(
//   graphql(DEALER_BY_HANDLE_QUERY, {
//     options: props => {
//       return { variables: { handle: ' ' } };
//     },
//     props: ({ data }) => {
//       console.log('data', data);
//       return { ...data };
//     }
//   }),
//   graphql(SIMPLE_PAGE_QUERY, {
//     options: () => {
//       return { variables: { pageTitle: 'Locations' } };
//     },
//     props: ({ data }) => {
//       console.log('Locations Page data', data);
//       const { page, loading: loadingPage, error } = data;
//       if (loadingPage && !error) {
//         return { loadingPage, page: null };
//       } else {
//         return { page, loadingPage };
//       }
//     }
//   }),
//   graphql(DEALERS_QUERY, {
//     options: () => ({
//       variables: { first: 12, after: null }
//     }),
//     props: ({ data }) => {
//       console.log('DATA:::', data);
//       const { loading, error, dealers } = data;
//       if (error) {
//         return { dealersError: error };
//       }
//       if (loading) {
//         return { loadingDealers: loading };
//       }
//       if (!loading && !error) {
//         return { loadingDealers: loading, dealers };
//       }
//     }
//   }),
//   graphql(UPDATE_DEALER, {
//     props: ({ mutate }) => ({
//       updateDealer: async dealer => {
//         try {
//           const {
//             data: { updateDealer }
//           } = await mutate({
//             variables: { dealer }
//             // update: (proxy, { data: { updateDealer } }) => {
//             //   try {
//             //     console.log('UPDATE DEALER::', updateDealer);
//             //     const data = proxy.readQuery({ query: DEALERS_QUERY, variables: { first: 12 } });
//             //     console.log('Data::: on update::??', data);
//             //
//             //   } catch (e) {
//             //     console.log('EEE', e);
//             //   }
//             // }
//           });
//           console.log('UPDATED::', updateDealer);
//           return updateDealer;
//         } catch (e) {
//           console.log('ERROR UPDATING:', e);
//         }
//       }
//     })
//   })
// )(Locations);


/* harmony default export */ __webpack_exports__["default"] = (Locations);

/***/ }),

/***/ "../client/src/modules/admin/components/Seo/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/core-js/object/keys");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/slicedToArray");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/defineProperty");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("ramda");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _profile_styles_manage_specs_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../client/src/modules/profile/styles/manage-specs.scss");
/* harmony import */ var _profile_styles_manage_specs_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_profile_styles_manage_specs_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _common_components_global_components_Loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../client/src/modules/common/components/global/components/Loader.jsx");
/* harmony import */ var _SeoForm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../client/src/modules/admin/components/Seo/SeoForm.jsx");
/* harmony import */ var _styles_forms_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../client/src/modules/admin/styles/forms.scss");
/* harmony import */ var _styles_forms_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_styles_forms_scss__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("../client/src/modules/common/graphql/VendorsQuery.graphql");
/* harmony import */ var _common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _graphql_ProductSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("../client/src/modules/admin/graphql/ProductSeoQuery.graphql");
/* harmony import */ var _graphql_ProductSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_graphql_ProductSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _graphql_UploadSeoContent_graphql__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("../client/src/modules/admin/graphql/UploadSeoContent.graphql");
/* harmony import */ var _graphql_UploadSeoContent_graphql__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_graphql_UploadSeoContent_graphql__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _graphql_CollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("../client/src/modules/admin/graphql/CollectionsQuery.graphql");
/* harmony import */ var _graphql_CollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_graphql_CollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _graphql_VendorSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("../client/src/modules/admin/graphql/VendorSeoQuery.graphql");
/* harmony import */ var _graphql_VendorSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_graphql_VendorSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _graphql_CollectionSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("../client/src/modules/admin/graphql/CollectionSeoQuery.graphql");
/* harmony import */ var _graphql_CollectionSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_graphql_CollectionSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _graphql_UploadSeo_graphql__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("../client/src/modules/admin/graphql/UploadSeo.graphql");
/* harmony import */ var _graphql_UploadSeo_graphql__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_graphql_UploadSeo_graphql__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _common_graphql_AddProductData_graphql__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("../client/src/modules/common/graphql/AddProductData.graphql");
/* harmony import */ var _common_graphql_AddProductData_graphql__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_AddProductData_graphql__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _common_graphql_UpdateProductData_graphql__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("../client/src/modules/common/graphql/UpdateProductData.graphql");
/* harmony import */ var _common_graphql_UpdateProductData_graphql__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_common_graphql_UpdateProductData_graphql__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _common_schema__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("../client/src/modules/common/schema/index.js");














var _this3 = undefined;





// import classnames from 'classnames';
// import { Formik, Field, Form } from 'formik';
// import { MdClose, MdSave } from 'react-icons/md';















// import PRODUCT_DATA_QUERY from '../../../common/graphql/ProductDataQuery.graphql';



// import { prodFeatures, prodSpecs } from '../../../products/components/SingleProductView';

var selectProdString = 'Select a product';
var selectSpecString = 'Select a specification';
var selectContent = 'Select a category';
var selectBrandString = 'Select a brand';
var selectCollectionString = 'Select a collection';
// const fullSpecs = [...prodSpecs, ...prodFeatures];
var clearedSubmissionResult = { submissionError: null, submissionSuccess: null };

var ManageSeo = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_12___default()(ManageSeo, _React$Component);

  function ManageSeo() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9___default()(this, ManageSeo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11___default()(this, (_ref = ManageSeo.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default()(ManageSeo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentEdit: {},
      selectedProduct: selectProdString,
      selectedBrand: selectBrandString,
      selectedCollection: selectCollectionString,
      selectedSpec: selectSpecString,
      selectedCategory: selectContent,
      currentCategoryValues: null,
      categories: ['Products', 'Brands', 'Collections'],
      specInput: '',
      submissionError: null,
      submissionSuccess: null
    }, _this.loadProductSeo = function () {
      var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee(handle) {
        var _ref3, productData;

        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.props.refetchProductData({ handle: handle });

              case 2:
                _ref3 = _context.sent;
                productData = _ref3.data.productData;

                console.log('PRODUCT', productData);
                _this.setState({ currentCategoryValues: productData.seo });

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.loadCollectionSeo = function () {
      var _ref4 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee2(handle) {
        var _ref5, collectionData;

        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this.props.refetchCollectionSeo({ handle: handle });

              case 2:
                _ref5 = _context2.sent;
                collectionData = _ref5.data.collectionData;

                console.log('COLLECTION loaded::', collectionData);
                _this.setState({ currentCategoryValues: collectionData.seo });

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }(), _this.loadBrandSeo = function () {
      var _ref6 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee3(handle) {
        var _ref7, vendorData;

        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this.props.refetchBrandSeo({ handle: handle });

              case 2:
                _ref7 = _context3.sent;
                vendorData = _ref7.data.vendorData;

                console.log('Brand::', vendorData);
                _this.setState({ currentCategoryValues: vendorData.seo });

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      }));

      return function (_x3) {
        return _ref6.apply(this, arguments);
      };
    }(), _this.handleProductSelect = function (e) {
      return _this.setState(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5___default()({
        selectedProduct: e.target.value,
        selectedSpec: selectSpecString,
        currentEdit: {}
      }, clearedSubmissionResult));
    }, _this.handleCategorySelect = function (e) {
      _this.setState({ selectedCategory: e.target.value.toLowerCase() });
    }, _this.handleSpecSelect = function (e) {
      return _this.setState(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5___default()({
        selectedSpec: e.target.value
      }, clearedSubmissionResult));
    }, _this.handleSpecInput = function (e) {
      var prevEdit = _this.state.currentEdit;
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState({ currentEdit: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5___default()({}, prevEdit, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()({}, name, value)) });
    }, _this.submitSpecs = function () {
      var _ref8 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee4(e) {
        var _this$props, productData, addProductData, updateProductData, products, _this$state, currentEdit, selectedProduct, currentSpecs, _Object$assign, __typename, id, specsToSubmit, dataUpdateResult, _products$edges$filte, _products$edges$filte2, sfyData, _sfyData$node, title, vendor, variantEdges, _sku, updatedSubmission, _dataUpdateResult$pro, product_name, handle;

        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                e.preventDefault();

                _this$props = _this.props, productData = _this$props.productData, addProductData = _this$props.addProductData, updateProductData = _this$props.updateProductData, products = _this$props.sfy_shop.products;
                _this$state = _this.state, currentEdit = _this$state.currentEdit, selectedProduct = _this$state.selectedProduct;
                currentSpecs = productData === null ? {} : productData;
                _Object$assign = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()(currentSpecs, currentEdit, {
                  handle: selectedProduct
                }), __typename = _Object$assign.__typename, id = _Object$assign.id, specsToSubmit = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(_Object$assign, ['__typename', 'id']);
                dataUpdateResult = void 0;

                if (!(productData === null)) {
                  _context4.next = 16;
                  break;
                }

                // If adding a new product data to rcomm db, add sku and product name from Shopify
                _products$edges$filte = products.edges.filter(function (_ref9) {
                  var node = _ref9.node;
                  return node.handle === selectedProduct;
                }), _products$edges$filte2 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_products$edges$filte, 1), sfyData = _products$edges$filte2[0];
                _sfyData$node = sfyData.node, title = _sfyData$node.title, vendor = _sfyData$node.vendor, variantEdges = _sfyData$node.variants.edges;
                _sku = variantEdges[0].node.sku;
                updatedSubmission = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5___default()({}, specsToSubmit, { product_name: vendor + ' ' + title, sku: _sku });
                _context4.next = 13;
                return addProductData(updatedSubmission);

              case 13:
                dataUpdateResult = _context4.sent;
                _context4.next = 19;
                break;

              case 16:
                _context4.next = 18;
                return updateProductData(specsToSubmit);

              case 18:
                dataUpdateResult = _context4.sent;

              case 19:
                if (dataUpdateResult) {
                  _context4.next = 21;
                  break;
                }

                return _context4.abrupt('return');

              case 21:
                if (!('errors' in dataUpdateResult)) {
                  _context4.next = 23;
                  break;
                }

                return _context4.abrupt('return', _this.setState({ submissionError: dataUpdateResult.errors[0] }));

              case 23:
                if (!('productData' in dataUpdateResult && dataUpdateResult.productData)) {
                  _context4.next = 27;
                  break;
                }

                _dataUpdateResult$pro = dataUpdateResult.productData, product_name = _dataUpdateResult$pro.product_name, handle = _dataUpdateResult$pro.handle;

                _this.props.refetchProductData({ handle: handle });
                return _context4.abrupt('return', _this.setState({
                  submissionSuccess: 'Successfully updated ' + product_name + '!',
                  currentEdit: {},
                  selectedSpec: selectSpecString
                }));

              case 27:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this2);
      }));

      return function (_x4) {
        return _ref8.apply(this, arguments);
      };
    }(), _this.renderInputValue = function () {
      var _this$state2 = _this.state,
          selectedSpec = _this$state2.selectedSpec,
          currentEdit = _this$state2.currentEdit;
      var productData = _this.props.productData;

      if (selectedSpec in currentEdit) return currentEdit[selectedSpec];else if (productData && selectedSpec in productData) return productData[selectedSpec];else return '';
    }, _this.handleCancelEdit = function () {
      var _this$state3 = _this.state,
          currentEdit = _this$state3.currentEdit,
          selectedSpec = _this$state3.selectedSpec;

      if (selectedSpec in currentEdit) {
        var removed = currentEdit[selectedSpec],
            rest = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(currentEdit, [selectedSpec]);

        _this.setState({ currentEdit: rest });
      }
      return;
    }, _this.isDisabled = function () {
      var _this$props2 = _this.props,
          loadingProductData = _this$props2.loadingProductData,
          productData = _this$props2.productData;

      if (!loadingProductData && !productData) return false;
      if (babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_this.state.currentEdit).length > 0) return false;
      return true;
    }, _this.validateTitle = function (values, errors) {
      if (!values.title) {
        errors.title = 'Required';
      } else if (values.title.length > 60) {
        errors.title = 'The title length should be under 60 characters';
      }
      return { values: values, errors: errors };
    }, _this.validateDescription = function (_ref10) {
      var values = _ref10.values,
          errors = _ref10.errors;

      if (!values.description) {
        errors.description = 'Required';
      } else if (values.description.length > 320) {
        errors.description = 'Content descriptions should be 320 characters or less';
      }
      return { values: values, errors: errors };
    }, _this.validateKeyWords = function (_ref11) {
      var values = _ref11.values,
          errors = _ref11.errors;

      if (!values.keywords) {
        errors.keywords = 'Required';
      }
      return { values: values, errors: errors };
    }, _this.validateAll = function (values) {
      var errors = {};
      var composeValidation = Object(ramda__WEBPACK_IMPORTED_MODULE_16__["compose"])(_this.validateKeyWords, _this.validateDescription, _this.validateTitle);
      var validation = composeValidation(values, errors);
      return validation.errors;
    }, _this.handleBrandSelect = function (e) {
      _this.setState({ selectedBrand: e.target.value });
    }, _this.handleCollectionSelect = function (e) {
      _this.setState({ selectedCollection: e.target.value });
    }, _this.renderSelect = function (category) {
      var _this$state4 = _this.state,
          selectedProduct = _this$state4.selectedProduct,
          selectedBrand = _this$state4.selectedBrand,
          selectedCollection = _this$state4.selectedCollection;
      var _this$props3 = _this.props,
          vendors = _this$props3.vendors,
          collections = _this$props3.collections;

      switch (category) {
        case 'products':
          {
            var products = _this.props.sfy_shop.products.edges;
            return products ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
              'div',
              null,
              react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                'label',
                { htmlFor: 'product-select' },
                'Please select a product to change seo values'
              ),
              react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                'select',
                { id: 'product-select', onChange: _this.handleProductSelect, value: selectedProduct },
                react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                  'option',
                  { value: selectProdString, disabled: true },
                  selectProdString
                ),
                products ? products.map(function (_ref12) {
                  var node = _ref12.node;
                  return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                    'option',
                    { key: node.handle, value: node.handle },
                    node.vendor + ': ' + node.title
                  );
                }) : null
              )
            ) : null;
          }
        case 'brands':
          {
            return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
              'div',
              null,
              react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                'label',
                { htmlFor: 'product-select' },
                'Please select a brand to change seo values'
              ),
              react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                'select',
                { id: 'product-select', onChange: _this.handleBrandSelect, value: selectedBrand },
                react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                  'option',
                  { value: selectBrandString, disabled: true },
                  selectBrandString
                ),
                vendors ? vendors.map(function (_ref13) {
                  var handle = _ref13.handle,
                      name = _ref13.name;
                  return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                    'option',
                    { key: handle, value: handle },
                    '' + name
                  );
                }) : null
              )
            );
          }
        case 'collections':
          {
            return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
              'div',
              null,
              react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                'label',
                { htmlFor: 'product-select' },
                'Please select a collection to change seo values'
              ),
              react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                'select',
                { id: 'product-select', onChange: _this.handleCollectionSelect, value: selectedCollection },
                react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                  'option',
                  { value: selectCollectionString, disabled: true },
                  selectCollectionString
                ),
                collections ? collections.map(function (_ref14) {
                  var node = _ref14.node;
                  return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                    'option',
                    { key: node.handle, value: node.handle },
                    '' + node.title
                  );
                }) : null
              )
            );
          }
        default:
          return null;
      }
    }, _this.currentSeoData = function () {
      return _this.state.currentCategoryValues;
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10___default()(ManageSeo, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // const { selectedCategory } = this.state;
      if (prevState.selectedProduct !== this.state.selectedProduct) {
        this.loadProductSeo(this.state.selectedProduct);
      }
      if (this.state.selectedCategory === 'brands' && prevState.selectedBrand !== this.state.selectedBrand) {
        this.loadBrandSeo(this.state.selectedBrand);
        // console.log('brand', brand);
      }
      if (this.state.selectedCategory === 'collections' && prevState.selectedCollection !== this.state.selectedCollection) {
        this.loadCollectionSeo(this.state.selectedCollection);
      }
      // if (prevState.selectedCategory !== selectedCategory) {
      //   console.log('SELECTED CAT IS DIFF', selectedCategory);
      //   // const { productsLoading, sfy_shop, productData } = this.props;
      //   console.log('THE PROPS::', this.props);
      // }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          selectedProduct = _state.selectedProduct,
          selectedBrand = _state.selectedBrand,
          selectedCollection = _state.selectedCollection,
          selectedCategory = _state.selectedCategory,
          categories = _state.categories,
          currentCategoryValues = _state.currentCategoryValues;
      var _props = this.props,
          productsLoading = _props.productsLoading,
          sfy_shop = _props.sfy_shop;
      // console.log('THE PROPS::', this.props);

      var products = null;
      // let seo = null;
      if (!productsLoading && sfy_shop && 'products' in sfy_shop) {
        if (sfy_shop.products.edges.length > 0) {
          products = sfy_shop.products.edges;
        }
      }
      // if (productData) {
      //   seo = productData.seo;
      // }
      if (!products) {
        return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_common_components_global_components_Loader__WEBPACK_IMPORTED_MODULE_18__["default"], null);
      }

      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
        'section',
        { className: 'manage-specs' },
        react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
          'div',
          { className: 'form__select-group' },
          react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
            'label',
            { htmlFor: 'product-select' },
            'Please select content category to update'
          ),
          react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
            'select',
            { id: 'product-select', onChange: this.handleCategorySelect, value: selectedCategory },
            react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
              'option',
              { value: selectedCategory, disabled: true },
              selectedCategory
            ),
            categories.map(function (category) {
              return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                'option',
                { key: category, value: category },
                category
              );
            })
          )
        ),
        this.renderSelect(selectedCategory),
        react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_SeoForm__WEBPACK_IMPORTED_MODULE_19__["default"], {
          seo: this.currentSeoData(),
          validateAll: this.validateAll,
          uploadSeoContent: this.props.uploadSeoContent,
          uploadSeo: this.props.uploadSeo,
          selectedProduct: selectedProduct,
          selectedBrand: selectedBrand,
          selectedCollection: selectedCollection,
          selectedCategory: selectedCategory,
          valuesAvailable: currentCategoryValues
        })
      );
    }
  }]);

  return ManageSeo;
}(react__WEBPACK_IMPORTED_MODULE_13___default.a.Component);

var ManageSeoWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_15__["compose"])(react_apollo__WEBPACK_IMPORTED_MODULE_15__["withApollo"], Object(_common_schema__WEBPACK_IMPORTED_MODULE_30__["ADMIN_PRODUCTS_QUERY"])(), Object(react_apollo__WEBPACK_IMPORTED_MODULE_15__["graphql"])(_graphql_VendorSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_25___default.a, {
  options: function options() {
    return { variables: { handle: '' } };
  },
  props: function props(_ref15) {
    var data = _ref15.data;

    // console.log('VENDOR SEO Data::', data);
    var loading = data.loading,
        error = data.error,
        refetch = data.refetch;

    if (error) {
      return { brandSeoError: error };
    }
    if (!loading) {
      return { refetchBrandSeo: refetch };
    }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_15__["graphql"])(_graphql_CollectionSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_26___default.a, {
  options: function options() {
    return { variables: { handle: '' } };
  },
  props: function props(_ref16) {
    var data = _ref16.data;

    // console.log('COLLECITON SEO DATA::', data);
    var loading = data.loading,
        error = data.error,
        refetch = data.refetch;


    if (error) {
      return { collectionSeoError: error };
    }
    if (!loading) {
      return { loadingCollectionSeo: loading, refetchCollectionSeo: refetch };
    }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_15__["graphql"])(_graphql_CollectionsQuery_graphql__WEBPACK_IMPORTED_MODULE_24___default.a, {
  options: function options() {
    return { variables: { first: 100 } };
  },
  props: function props(_ref17) {
    var data = _ref17.data;

    // console.log('COLLECTIONS QUERY DATA::', data);
    var loading = data.loading,
        admin_collections = data.admin_collections;

    if (!loading) {
      var edges = admin_collections.edges;

      return { loadingCollections: loading, collections: edges };
    }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_15__["graphql"])(_graphql_ProductSeoQuery_graphql__WEBPACK_IMPORTED_MODULE_22___default.a, {
  options: function options() {
    return { variables: { handle: '' }, fetchPolicy: 'network-only' };
  },
  props: function props(_ref18) {
    var data = _ref18.data;

    // console.log('PRODUCTS SEO DATA', data);
    var loadingProductData = data.loading,
        error = data.error,
        productData = data.productData,
        refetchProductData = data.refetch;

    if (error) throw new Error('Error in Related Prodcuts Query: ' + error);
    return { loadingProductData: loadingProductData, productData: productData, refetchProductData: refetchProductData };
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_15__["graphql"])(_graphql_UploadSeo_graphql__WEBPACK_IMPORTED_MODULE_27___default.a, {
  props: function props(_ref19) {
    var mutate = _ref19.mutate;
    return {
      uploadSeo: function () {
        var _ref20 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee5(seoData) {
          var _ref21, data;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return mutate({ variables: seoData });

                case 2:
                  _ref21 = _context5.sent;
                  data = _ref21.data;
                  return _context5.abrupt('return', data.uploadSeo);

                case 5:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this3);
        }));

        return function uploadSeo(_x5) {
          return _ref20.apply(this, arguments);
        };
      }()
    };
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_15__["graphql"])(_graphql_UploadSeoContent_graphql__WEBPACK_IMPORTED_MODULE_23___default.a, {
  props: function props(_ref22) {
    var mutate = _ref22.mutate;
    return {
      uploadSeoContent: function () {
        var _ref23 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee6(seoData) {
          var _ref24, updateProductSeo;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  console.log('UPLOAD SEO DATA:', seoData);
                  _context6.next = 3;
                  return mutate({ variables: { seo: seoData } });

                case 3:
                  _ref24 = _context6.sent;
                  updateProductSeo = _ref24.data.updateProductSeo;

                  console.log('CONTENT:', updateProductSeo);
                  return _context6.abrupt('return', updateProductSeo);

                case 7:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, _this3);
        }));

        return function uploadSeoContent(_x6) {
          return _ref23.apply(this, arguments);
        };
      }()
    };
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_15__["graphql"])(_common_graphql_VendorsQuery_graphql__WEBPACK_IMPORTED_MODULE_21___default.a, {
  props: function props(_ref25) {
    var _ref25$data = _ref25.data,
        loading = _ref25$data.loading,
        error = _ref25$data.error,
        vendors = _ref25$data.vendors;

    if (error) throw new Error('Error in Vendors Query: ' + error);
    return { loading: loading, vendors: vendors };
  }
}), Object(_common_schema__WEBPACK_IMPORTED_MODULE_30__["MODIFY_PRODUCT_DATA"])(_common_graphql_AddProductData_graphql__WEBPACK_IMPORTED_MODULE_28___default.a, 'addProductData'), Object(_common_schema__WEBPACK_IMPORTED_MODULE_30__["MODIFY_PRODUCT_DATA"])(_common_graphql_UpdateProductData_graphql__WEBPACK_IMPORTED_MODULE_29___default.a, 'updateProductData'))(ManageSeo);

ManageSeo.propTypes = {
  uploadSeo: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.func,
  refetchBrandSeo: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.func,
  refetchCollectionSeo: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.func,
  vendors: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.array,
  collections: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.array,
  productsLoading: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.bool,
  products: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.array,
  productSpecs: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.array,
  refetchProductData: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.func,
  sfy_shop: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.object,
  productData: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.object,
  loadingProductData: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.bool,
  uploadSeoContent: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.func
};

/* harmony default export */ __webpack_exports__["default"] = (ManageSeoWithApollo);

/***/ }),

/***/ "../client/src/modules/admin/containers/Dashboard.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/core-js/map");
/* harmony import */ var babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_AdminView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/admin/components/AdminView.web.jsx");
/* harmony import */ var _graphql_PagesQuery_graphql__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/admin/graphql/PagesQuery.graphql");
/* harmony import */ var _graphql_PagesQuery_graphql__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_graphql_PagesQuery_graphql__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _graphql_UploadContent_graphql__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/admin/graphql/UploadContent.graphql");
/* harmony import */ var _graphql_UploadContent_graphql__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_graphql_UploadContent_graphql__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../client/src/modules/admin/graphql/SimplePageQuery.graphql");
/* harmony import */ var _graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../client/src/modules/admin/graphql/Dealers.graphql");
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../client/src/modules/admin/graphql/DealerQuery.graphql");
/* harmony import */ var _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../client/src/modules/admin/graphql/UpdateDealer.graphql");
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_17__);










var _this2 = undefined;

/*eslint-disable no-unused-vars*/











var Admin = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(Admin, _React$Component);

  function Admin(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Admin);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, (Admin.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default()(Admin)).call(this, props));

    _this.imageToState = function (images) {
      _this.setState({
        images: images
      });
    };

    _this.save = function (page_id, content) {
      // console.log('THIS.PROPS::', this.props);
      _this.props.uploadContent(9, [{}]);
    };

    _this.state = {
      images: new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_3___default.a()
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(Admin, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_AdminView__WEBPACK_IMPORTED_MODULE_11__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, this.props, { save: this.save }));
    }
  }]);

  return Admin;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

Admin.defaultProps = {
  images: []
};
var AdminWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_10__["compose"])(Object(react_apollo__WEBPACK_IMPORTED_MODULE_10__["graphql"])(_graphql_PagesQuery_graphql__WEBPACK_IMPORTED_MODULE_12___default.a, {
  props: function props(_ref) {
    var data = _ref.data;
    var pages = data.pages,
        loadingPages = data.loading,
        error = data.error;

    console.log('pages', pages);
    if (loadingPages && !error) {
      return { loadingPages: loadingPages, pages: null };
    } else {
      return { pages: pages, loadingPages: loadingPages };
    }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_10__["graphql"])(_graphql_UploadContent_graphql__WEBPACK_IMPORTED_MODULE_13___default.a, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      uploadContent: function () {
        var _ref3 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref4) {
          var page_id = _ref4.page_id,
              content = _ref4.content;

          var _ref5, uploadPageContent;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return mutate({ variables: { pageContent: { page_id: page_id, content: content } } });

                case 2:
                  _ref5 = _context.sent;
                  uploadPageContent = _ref5.data.uploadPageContent;

                  console.log('RETURN DATA::: ', uploadPageContent);
                  return _context.abrupt('return', uploadPageContent);

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function uploadContent(_x) {
          return _ref3.apply(this, arguments);
        };
      }()
    };
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_10__["graphql"])(_graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_16___default.a, {
  options: function options(props) {
    return { variables: { handle: ' ' } };
  },
  props: function props(_ref6) {
    var data = _ref6.data;

    console.log('data', data);
    return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, data);
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_10__["graphql"])(_graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_14___default.a, {
  options: function options() {
    return { variables: { pageTitle: 'Locations' } };
  },
  props: function props(_ref7) {
    var data = _ref7.data;

    console.log('Locations Page data', data);
    var page = data.page,
        loadingPage = data.loading,
        error = data.error;

    if (loadingPage && !error) {
      return { loadingPage: loadingPage, page: null };
    } else {
      return { page: page, loadingPage: loadingPage };
    }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_10__["graphql"])(_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_15___default.a, {
  options: function options() {
    return {
      variables: { first: 12, after: null }
    };
  },
  props: function props(_ref8) {
    var data = _ref8.data;

    console.log('DATA:::', data);
    var loading = data.loading,
        error = data.error,
        dealers = data.dealers;

    if (error) {
      return { dealersError: error };
    }
    if (loading) {
      return { loadingDealers: loading };
    }
    if (!loading && !error) {
      return { loadingDealers: loading, dealers: dealers };
    }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_10__["graphql"])(_graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_17___default.a, {
  props: function props(_ref9) {
    var mutate = _ref9.mutate;
    return {
      updateDealer: function () {
        var _ref10 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dealer) {
          var _ref11, updateDealer;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return mutate({
                    variables: { dealer: dealer },
                    update: function update(proxy, _ref12) {
                      var updateDealer = _ref12.data.updateDealer;

                      try {
                        console.log('UPDATE DEALER::', updateDealer);
                        var data = proxy.readQuery({ query: _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_15___default.a, variables: { first: 12 } });
                        console.log('Data::: on update::??', data);
                      } catch (e) {
                        console.log('EEE', e);
                      }
                    }
                  });

                case 3:
                  _ref11 = _context2.sent;
                  updateDealer = _ref11.data.updateDealer;

                  console.log('UPDATED::', updateDealer);
                  return _context2.abrupt('return', updateDealer);

                case 9:
                  _context2.prev = 9;
                  _context2.t0 = _context2['catch'](0);

                  console.log('ERROR UPDATING:', _context2.t0);

                case 12:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2, [[0, 9]]);
        }));

        return function updateDealer(_x2) {
          return _ref10.apply(this, arguments);
        };
      }()
    };
  }
}))(Admin);

/* harmony default export */ __webpack_exports__["default"] = (AdminWithApollo);

/***/ }),

/***/ "../client/src/modules/admin/graphql/DealerQuery.graphql":
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"dealerByHandle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"handle"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dealerByHandle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"handle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"handle"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DealerDataFrag"},"directives":[]}]}}]}}],"loc":{"start":0,"end":142}};
    doc.loc.source = {"body":"#import \"./Frags/DealerFrag.graphql\"\n\nquery dealerByHandle($handle: String) {\n  dealerByHandle(handle: $handle) {\n    ...DealerDataFrag\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
  doc.definitions = doc.definitions.concat(unique(__webpack_require__("../client/src/modules/admin/graphql/Frags/DealerFrag.graphql").definitions));


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
    
        module.exports["dealerByHandle"] = oneQuery(doc, "dealerByHandle");
        


/***/ }),

/***/ "../client/src/modules/admin/graphql/Dealers.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allDealers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"12"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dealers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dealers_count"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"handle"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":195}};
    doc.loc.source = {"body":"\nquery allDealers($first: Int = 12, $after: Int) {\n  dealers(first: $first, after: $after) {\n    dealers_count\n    edges {\n      node {\n        id\n        handle\n      }\n      cursor\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports["allDealers"] = oneQuery(doc, "allDealers");
        


/***/ }),

/***/ "../client/src/modules/admin/graphql/Frags/DealerFrag.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DealerDataFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dealer"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"handle"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"street"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"suite"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"city"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"zip"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"state"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"phone"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"website"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lat"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lng"},"arguments":[],"directives":[]}]}}],"loc":{"start":0,"end":145}};
    doc.loc.source = {"body":"fragment DealerDataFrag on Dealer {\n  id\n  handle\n  name\n  street\n  suite\n  city\n  zip\n  state\n  country\n  email\n  phone\n  website\n  lat\n  lng\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
  

      module.exports = doc;
    


/***/ }),

/***/ "../client/src/modules/admin/graphql/PageQuery.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"page"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageTitle"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fieldNames"}},"type":{"kind":"ListType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageTitle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageTitle"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fields"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"field_names"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fieldNames"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field_name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"field_label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"field_type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"field_value"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":255}};
    doc.loc.source = {"body":"query page($id: ID, $pageTitle: String, $fieldNames: [[String]]) {\n  page(id: $id, pageTitle: $pageTitle) {\n    id\n    title\n    name\n    fields(field_names: $fieldNames) {\n      field_name\n      field_label\n      field_type\n      field_value\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports["page"] = oneQuery(doc, "page");
        


/***/ }),

/***/ "../client/src/modules/admin/graphql/SimplePageQuery.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"page"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageTitle"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageTitle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageTitle"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":115}};
    doc.loc.source = {"body":"query page($id: ID, $pageTitle: String) {\n  page(id: $id, pageTitle: $pageTitle) {\n    id\n    title\n    name\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports["page"] = oneQuery(doc, "page");
        


/***/ }),

/***/ "../client/src/modules/admin/graphql/UpdateDealer.graphql":
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateDealer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dealer"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DealerInput"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateDealer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dealer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dealer"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DealerDataFrag"},"directives":[]}]}}]}}],"loc":{"start":0,"end":145}};
    doc.loc.source = {"body":"#import \"./Frags/DealerFrag.graphql\"\n\nmutation updateDealer($dealer: DealerInput) {\n  updateDealer(dealer: $dealer){\n    ...DealerDataFrag\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
  doc.definitions = doc.definitions.concat(unique(__webpack_require__("../client/src/modules/admin/graphql/Frags/DealerFrag.graphql").definitions));


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
    
        module.exports["updateDealer"] = oneQuery(doc, "updateDealer");
        


/***/ }),

/***/ "../client/src/modules/user/containers/Auth.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoute", function() { return AuthRoute; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AuthBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../client/src/modules/user/containers/AuthBase.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withUser", function() { return _AuthBase__WEBPACK_IMPORTED_MODULE_5__["withUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasRole", function() { return _AuthBase__WEBPACK_IMPORTED_MODULE_5__["hasRole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withLoadedUser", function() { return _AuthBase__WEBPACK_IMPORTED_MODULE_5__["withLoadedUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IfLoggedIn", function() { return _AuthBase__WEBPACK_IMPORTED_MODULE_5__["IfLoggedIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IfNotLoggedIn", function() { return _AuthBase__WEBPACK_IMPORTED_MODULE_5__["IfNotLoggedIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withLogout", function() { return _AuthBase__WEBPACK_IMPORTED_MODULE_5__["withLogout"]; });









var AuthRoute = Object(_AuthBase__WEBPACK_IMPORTED_MODULE_5__["withLoadedUser"])(function (_ref) {
  var currentUser = _ref.currentUser,
      role = _ref.role,
      _ref$redirect = _ref.redirect,
      redirect = _ref$redirect === undefined ? '/admin/login' : _ref$redirect,
      redirectOnLoggedIn = _ref.redirectOnLoggedIn,
      Component = _ref.component,
      rest = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ['currentUser', 'role', 'redirect', 'redirectOnLoggedIn', 'component']);

  var RenderComponent = function RenderComponent(props) {
    console.log('CURRENTUER:::', currentUser, role);
    // The users is not logged in
    if (redirectOnLoggedIn && currentUser) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], { to: { pathname: redirect } });
    }

    return isRoleMatch(role, currentUser) ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ currentUser: currentUser }, props, rest)) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], { to: { pathname: redirect } });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rest, { render: RenderComponent }));
});

AuthRoute.propTypes = {
  role: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),
  redirect: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  redirectOnLoggedIn: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};

var isRoleMatch = function isRoleMatch(role, currentUser) {
  if (!role) {
    return true;
  }
  return currentUser && (Array.isArray(role) ? role : [role]).includes(currentUser.role);
};




/***/ }),

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









var _this = undefined;



var getField = function getField(field, values) {
  if (values.hasOwnProperty(field)) {
    return values[field];
  }
};
var handleLocationsCheck = function () {
  var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee(context) {
    var check;
    return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return context.get.dealers();

          case 2:
            check = _context.sent;

            console.log('CHECK::', check);
            return _context.abrupt('return', check);

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function handleLocationsCheck(_x) {
    return _ref.apply(this, arguments);
  };
}();
/*eslint-disable no-unused-vars*/
/* harmony default export */ __webpack_exports__["default"] = (function (pubsub) {
  return {
    Query: {
      pages: function pages(obj, input, _ref2) {
        var _this2 = this;

        var Admin = _ref2.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee2() {
          var pages, page;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return Admin.get.pages();

                case 3:
                  pages = _context2.sent;

                  if (!(pages.length == 0)) {
                    _context2.next = 9;
                    break;
                  }

                  _context2.next = 7;
                  return Admin.insert.page({ id: 0, name: 'home' });

                case 7:
                  page = _context2.sent;
                  return _context2.abrupt('return', page);

                case 9:
                  return _context2.abrupt('return', pages);

                case 12:
                  _context2.prev = 12;
                  _context2.t0 = _context2['catch'](0);
                  return _context2.abrupt('return', _context2.t0);

                case 15:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2, [[0, 12]]);
        }))();
      },
      page: function page(obj, _ref3, _ref4) {
        var _this3 = this;

        var id = _ref3.id,
            pageTitle = _ref3.pageTitle;
        var Admin = _ref4.Admin,
            Dealers = _ref4.Dealers;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee3() {
          var page;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;

                  if (!id) {
                    _context3.next = 5;
                    break;
                  }

                  return _context3.abrupt('return', { id: id });

                case 5:
                  console.log('NO ID:::', pageTitle);
                  _context3.next = 8;
                  return Admin.get.pageByTitle(pageTitle);

                case 8:
                  page = _context3.sent;

                  if (page.name === 'locations') {
                    // const check = await handleLocationsCheck(Dealers);
                    // console.log('LOCATIONSCHECK DONE', check);
                  }
                  console.log('PAGE::', page);
                  return _context3.abrupt('return', { id: page.id, title: page.title, name: page.name });

                case 12:
                  _context3.next = 18;
                  break;

                case 14:
                  _context3.prev = 14;
                  _context3.t0 = _context3['catch'](0);

                  console.log('ERRROR GETTING PAGE:', _context3.t0);
                  return _context3.abrupt('return', _context3.t0);

                case 18:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this3, [[0, 14]]);
        }))();
      },
      vendorData: function vendorData(_, _ref5, _ref6) {
        var _this4 = this;

        var handle = _ref5.handle;
        var Admin = _ref6.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee4() {
          var data, vendor;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  console.log('Vendor HANDLE:', handle);
                  _context4.prev = 1;
                  _context4.next = 4;
                  return Admin.get.vendorByHandle(handle);

                case 4:
                  data = _context4.sent;

                  console.log('DATA::', data, handle.length);

                  if (!(typeof data == 'undefined' && handle.length > 0)) {
                    _context4.next = 12;
                    break;
                  }

                  _context4.next = 9;
                  return Admin.insert.vendorSeo(handle);

                case 9:
                  vendor = _context4.sent;

                  console.log('VENDOR::', vendor);
                  return _context4.abrupt('return', vendor);

                case 12:
                  if (!(handle.length == 0)) {
                    _context4.next = 14;
                    break;
                  }

                  return _context4.abrupt('return', null);

                case 14:
                  if (!data) {
                    _context4.next = 16;
                    break;
                  }

                  return _context4.abrupt('return', { handle: handle, seo: data });

                case 16:
                  _context4.next = 21;
                  break;

                case 18:
                  _context4.prev = 18;
                  _context4.t0 = _context4['catch'](1);
                  return _context4.abrupt('return', _context4.t0);

                case 21:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this4, [[1, 18]]);
        }))();
      },
      collectionData: function collectionData(_, _ref7, _ref8) {
        var _this5 = this;

        var handle = _ref7.handle;
        var Admin = _ref8.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee5() {
          var data, collection;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  console.log('COLLECTION HANDLE:', handle);
                  _context5.prev = 1;
                  _context5.next = 4;
                  return Admin.get.collectionByHandle(handle);

                case 4:
                  data = _context5.sent;

                  console.log('COLLECTION DATA::', data, handle);

                  if (!((typeof data == 'undefined' || !data) && handle.length > 0)) {
                    _context5.next = 12;
                    break;
                  }

                  _context5.next = 9;
                  return Admin.insert.collectionSeo(handle);

                case 9:
                  collection = _context5.sent;

                  console.log('VENDOR::', collection);
                  return _context5.abrupt('return', collection);

                case 12:
                  if (!(handle.length == 0)) {
                    _context5.next = 14;
                    break;
                  }

                  return _context5.abrupt('return', null);

                case 14:
                  if (!data) {
                    _context5.next = 16;
                    break;
                  }

                  return _context5.abrupt('return', data);

                case 16:
                  _context5.next = 21;
                  break;

                case 18:
                  _context5.prev = 18;
                  _context5.t0 = _context5['catch'](1);
                  return _context5.abrupt('return', _context5.t0);

                case 21:
                  return _context5.abrupt('return', null);

                case 22:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this5, [[1, 18]]);
        }))();
      }
    },
    Page: {
      fields: function fields(obj, _ref9, _ref10, info) {
        var field_names = _ref9.field_names;

        var _this6 = this;

        var Admin = _ref10.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee6() {
          var _ref11, page_content, requestedFields, field_value, fields, stringValues, data;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return Admin.get.pageContents(obj.id);

                case 2:
                  _ref11 = _context6.sent;
                  page_content = _ref11.page_content;
                  requestedFields = field_names.map(function (_ref12) {
                    var _ref13 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_ref12, 2),
                        section = _ref13[0],
                        field = _ref13[1];

                    return page_content.map(function (_ref14) {
                      var field_value = _ref14.field_value,
                          rest = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4___default()(_ref14, ['field_value']);

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
                  return _context6.abrupt('return', [data]);

                case 9:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, _this6);
        }))();
      }
    },
    Mutation: {
      signS3: function signS3(obj, _ref15) {
        var _this7 = this;

        var filename = _ref15.filename,
            filetype = _ref15.filetype;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee7() {
          var signedRequest;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return _util_FileUploader__WEBPACK_IMPORTED_MODULE_8__["default"].getSignedUrl({ filename: filename, filetype: filetype });

                case 2:
                  signedRequest = _context7.sent;
                  return _context7.abrupt('return', signedRequest);

                case 4:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7, _this7);
        }))();
      },
      uploadPageContent: function uploadPageContent(obj, _ref16, _ref17) {
        var _this8 = this;

        var pageContent = _ref16.pageContent;
        var Admin = _ref17.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee8() {
          var _ref18, _ref19, data;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.prev = 0;
                  _context8.next = 3;
                  return Admin.update.pageContent(pageContent);

                case 3:
                  _ref18 = _context8.sent;
                  _ref19 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_ref18, 1);
                  data = _ref19[0];
                  return _context8.abrupt('return', data.page_content);

                case 9:
                  _context8.prev = 9;
                  _context8.t0 = _context8['catch'](0);

                  console.log('EERROO', _context8.t0);

                case 12:
                case 'end':
                  return _context8.stop();
              }
            }
          }, _callee8, _this8, [[0, 9]]);
        }))();
      },
      uploadSeo: function uploadSeo(obj, _ref20, _ref21) {
        var _this9 = this;

        var path = _ref20.path,
            handle = _ref20.handle,
            seo = _ref20.seo;
        var Admin = _ref21.Admin;
        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee9() {
          var _ref22, _ref23, data;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  console.log('PATH::', path);
                  console.log('HANDLE::', handle);
                  console.log('SEO::', seo);
                  _context9.prev = 3;
                  _context9.next = 6;
                  return Admin.update.seo({ path: path, handle: handle, seo: seo });

                case 6:
                  _ref22 = _context9.sent;
                  _ref23 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_ref22, 1);
                  data = _ref23[0];

                  console.log('DATA::', data);
                  return _context9.abrupt('return', data);

                case 13:
                  _context9.prev = 13;
                  _context9.t0 = _context9['catch'](3);

                  console.log('ERROR UPDATING SEO DATA::', _context9.t0);

                case 16:
                case 'end':
                  return _context9.stop();
              }
            }
          }, _callee9, _this9, [[3, 13]]);
        }))();
      }
    },
    Subscription: {}
  };
});

/***/ }),

/***/ "./src/modules/admin/sql.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Admin; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/core-js/json/stringify");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/slicedToArray");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sql_connector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/sql/connector.js");






/*eslint-disable no-unused-vars*/


var Admin = function Admin() {
  babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Admin);

  this.get = {
    pages: function pages() {
      var _this = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])('pages').select('*');

              case 3:
                return _context.abrupt('return', _context.sent);

              case 6:
                _context.prev = 6;
                _context.t0 = _context['catch'](0);
                return _context.abrupt('return', _context.t0);

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 6]]);
      }))();
    },
    pageById: function pageById(id) {
      var _this2 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])('pages').select('*').where('id', id).first();

              case 3:
                return _context2.abrupt('return', _context2.sent);

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2['catch'](0);
                return _context2.abrupt('return', _context2.t0);

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[0, 6]]);
      }))();
    },
    pageByTitle: function pageByTitle(title) {
      var _this3 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3() {
        var exists, _ref, _ref2, page;

        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])('pages').select('*').where('title', title).first();

              case 3:
                exists = _context3.sent;

                if (exists) {
                  _context3.next = 13;
                  break;
                }

                _context3.next = 7;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])('pages').insert({ title: title, name: title.toLowerCase() }).returning(['id', 'title', 'name']);

              case 7:
                _ref = _context3.sent;
                _ref2 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref, 1);
                page = _ref2[0];
                return _context3.abrupt('return', page);

              case 13:
                return _context3.abrupt('return', exists);

              case 14:
                _context3.next = 19;
                break;

              case 16:
                _context3.prev = 16;
                _context3.t0 = _context3['catch'](0);
                return _context3.abrupt('return', _context3.t0);

              case 19:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3, [[0, 16]]);
      }))();
    },
    vendorByHandle: function vendorByHandle(handle) {
      var _this4 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee4() {
        var exists;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"].schema.hasTable('vendor_seo');

              case 3:
                exists = _context4.sent;

                if (exists) {
                  _context4.next = 7;
                  break;
                }

                _context4.next = 7;
                return _sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"].schema.createTable('vendor_seo', function (t) {
                  t.increments('id').primary();
                  t.string('handle', 100);
                  t.string('title', 100);
                  t.text('description');
                  t.text('keywords');
                });

              case 7:
                _context4.next = 9;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])('vendor_seo').select('*').where({ handle: handle }).first();

              case 9:
                return _context4.abrupt('return', _context4.sent);

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4['catch'](0);
                return _context4.abrupt('return', _context4.t0);

              case 15:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4, [[0, 12]]);
      }))();
    },
    collectionByHandle: function collectionByHandle(handle) {
      var _this5 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee5() {
        var exists;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"].schema.hasTable('collection_seo');

              case 3:
                exists = _context5.sent;

                if (exists) {
                  _context5.next = 7;
                  break;
                }

                _context5.next = 7;
                return _sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"].schema.createTable('collection_seo', function (t) {
                  t.increments('id').primary();
                  t.string('handle', 100);
                  t.string('title', 100);
                  t.text('description');
                  t.text('keywords');
                });

              case 7:
                _context5.next = 9;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])('collection_seo').select('*').where({ handle: handle }).first();

              case 9:
                return _context5.abrupt('return', _context5.sent);

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5['catch'](0);
                return _context5.abrupt('return', _context5.t0);

              case 15:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this5, [[0, 12]]);
      }))();
    },
    pageContents: function pageContents(page_id) {
      var _this6 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee6() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])('page_contents').select('page_content').where('page_id', page_id).first();

              case 3:
                return _context6.abrupt('return', _context6.sent);

              case 6:
                _context6.prev = 6;
                _context6.t0 = _context6['catch'](0);
                return _context6.abrupt('return', _context6.t0);

              case 9:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, _this6, [[0, 6]]);
      }))();
    }
  };
  this.insert = {
    page: function page(_ref3) {
      var _this7 = this;

      var name = _ref3.name;
      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee7() {
        var data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])('pages').returning(['id', 'name']).insert({ name: name });

              case 3:
                data = _context7.sent;
                _context7.next = 6;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])('page_contents').insert({ page_id: data[0].id });

              case 6:
                return _context7.abrupt('return', data);

              case 9:
                _context7.prev = 9;
                _context7.t0 = _context7['catch'](0);
                return _context7.abrupt('return', _context7.t0);

              case 12:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, _this7, [[0, 9]]);
      }))();
    },
    vendorSeo: function vendorSeo(handle) {
      var _this8 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee8() {
        var data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])('vendor_seo').returning(['id', 'handle']).insert({ handle: handle });

              case 3:
                data = _context8.sent;
                return _context8.abrupt('return', data);

              case 7:
                _context8.prev = 7;
                _context8.t0 = _context8['catch'](0);
                return _context8.abrupt('return', _context8.t0);

              case 10:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, _this8, [[0, 7]]);
      }))();
    },
    collectionSeo: function collectionSeo(handle) {
      var _this9 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee9() {
        var data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])('collection_seo').returning(['id', 'handle']).insert({ handle: handle });

              case 3:
                data = _context9.sent;
                return _context9.abrupt('return', data);

              case 7:
                _context9.prev = 7;
                _context9.t0 = _context9['catch'](0);
                return _context9.abrupt('return', _context9.t0);

              case 10:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, _this9, [[0, 7]]);
      }))();
    }
  };
  this.update = {
    pageContent: function pageContent(_ref4) {
      var _this10 = this;

      var page_id = _ref4.page_id,
          content = _ref4.content;
      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee10() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])('page_contents').where('page_id', page_id).update({ page_content: babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(content) }, ['page_content']);

              case 3:
                return _context10.abrupt('return', _context10.sent);

              case 6:
                _context10.prev = 6;
                _context10.t0 = _context10['catch'](0);
                return _context10.abrupt('return', _context10.t0);

              case 9:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, _this10, [[0, 6]]);
      }))();
    },
    seo: function seo(_ref5) {
      var _this11 = this;

      var path = _ref5.path,
          handle = _ref5.handle,
          seo = _ref5.seo;
      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee11() {
        var update;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                _context11.next = 3;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])(path + '_seo').where({ handle: handle });

              case 3:
                update = _context11.sent;

                if (!(update.length == 0)) {
                  _context11.next = 10;
                  break;
                }

                _context11.next = 7;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])(path + '_seo').insert(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ handle: handle }, seo)).returning(['handle', 'title', 'description', 'keywords']);

              case 7:
                return _context11.abrupt('return', _context11.sent);

              case 10:
                _context11.next = 12;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_6__["default"])(path + '_seo').where({ handle: handle }).update(seo).returning(['handle', 'title', 'description', 'keywords']);

              case 12:
                return _context11.abrupt('return', _context11.sent);

              case 13:
                _context11.next = 18;
                break;

              case 15:
                _context11.prev = 15;
                _context11.t0 = _context11['catch'](0);
                return _context11.abrupt('return', _context11.t0);

              case 18:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, _this11, [[0, 15]]);
      }))();
    }
  };
  this.delete = {};
};



/***/ }),

/***/ "./src/modules/dealers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/dealers/sql.js");
/* harmony import */ var _schema_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/dealers/schema.graphql");
/* harmony import */ var _schema_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_schema_graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/dealers/resolvers.js");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/connector.ts");





/* harmony default export */ __webpack_exports__["default"] = (new _connector__WEBPACK_IMPORTED_MODULE_3__["default"]({
  schema: _schema_graphql__WEBPACK_IMPORTED_MODULE_1___default.a,
  createResolversFunc: _resolvers__WEBPACK_IMPORTED_MODULE_2__["default"],
  createContextFunc: function createContextFunc() {
    return { Dealers: new _sql__WEBPACK_IMPORTED_MODULE_0__["default"]() };
  }
}));

/***/ }),

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
                    edges: [{ node: null, cursor: null }],
                    dealer_info: { hasNextPage: false, end_cursor: 0 }
                  });

                case 12:
                  if (!(dealers.length == 0)) {
                    _context.next = 17;
                    break;
                  }

                  console.log('LENGTH WAS ZERO::', dealers);
                  return _context.abrupt('return', {
                    dealers_count: 0,
                    edges: [{ node: null, cursor: null }],
                    dealer_info: { hasNextPage: false, end_cursor: 0 }
                  });

                case 17:
                  _edgesArray = [];

                  dealers.map(function (dealer) {
                    return _edgesArray.push({ node: dealer });
                  });
                  console.log('dealers');
                  return _context.abrupt('return', {
                    dealers_count: dealers.length,
                    edges: _edgesArray
                    // dealer_info: { hasNextPage: false, end_cursor: 0 }
                  });

                case 21:
                  _context.next = 26;
                  break;

                case 23:
                  _context.prev = 23;
                  _context.t0 = _context['catch'](1);

                  console.log('ERROR ON DEALERS:', _context.t0);

                case 26:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this, [[1, 23]]);
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

/***/ }),

/***/ "./src/modules/dealers/schema.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Query"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"dealers"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"first"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"after"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Dealers"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"dealerByHandle"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"handle"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Dealer"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Dealer"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"handle"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"name"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"street"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"suite"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"city"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"zip"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"state"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"country"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"email"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"phone"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"website"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"lat"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"lng"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"DealersEdges"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"node"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Dealer"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"cursor"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"DealerInfo"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"hasNextPage"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"end_cursor"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Dealers"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"dealers_count"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"edges"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DealersEdges"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"dealer_info"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"DealerInfo"}},"directives":[]}]},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Mutation"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"updateDealer"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"dealer"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DealerInput"}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Dealer"}},"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"DealerInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"handle"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"name"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"street"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"suite"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"city"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"zip"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"state"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"country"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"email"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"phone"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"website"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"lat"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"lng"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]}],"loc":{"start":0,"end":866}};
    doc.loc.source = {"body":"extend type Query {\n  dealers(first: Int, after: Int): Dealers\n  dealerByHandle(handle: String): Dealer\n}\n\ntype Dealer {\n  id: ID\n  handle: String\n  name: String\n  street: String\n  suite: String\n  city: String\n  zip: String\n  state: String\n  country: String\n  email: String\n  phone: Int\n  website: String\n  lat: String\n  lng: String\n}\ntype DealersEdges {\n  node: Dealer\n  cursor: Int\n}\ntype DealerInfo {\n  hasNextPage: Boolean\n  end_cursor: Int\n}\ntype Dealers {\n  dealers_count: Int\n  edges: [DealersEdges]\n  dealer_info: DealerInfo\n}\n#########################\n\nextend type Mutation {\n  updateDealer(dealer: DealerInput): Dealer\n}\n\ninput DealerInput {\n  id: ID\n  handle: String\n  name: String\n  street: String\n  suite: String\n  city: String\n  zip: String\n  state: String\n  country: String\n  email: String\n  phone: Int\n  website: String\n  lat: String\n  lng: String\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
  

      module.exports = doc;
    


/***/ }),

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
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"])('dealers').select('*');

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
    dealerByHandle: function dealerByHandle(handle) {
      var _this2 = this;

      return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var dealer;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(_sql_connector__WEBPACK_IMPORTED_MODULE_4__["default"])('dealers').where({ handle: handle }).select('*').first();

              case 3:
                dealer = _context2.sent;
                return _context2.abrupt('return', dealer);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2['catch'](0);

                console.log('Dealer by handle error', _context2.t0);
                return _context2.abrupt('return', _context2.t0);

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[0, 7]]);
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


/***/ }),

/***/ "./src/modules/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dealers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/dealers/index.js");
/* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/admin/index.js");
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/vendor/index.js");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/categories/index.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/product/index.js");
/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/cookies/index.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/i18n/index.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/modules/user/index.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/modules/contact/index.js");
/* harmony import */ var _mailer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/modules/mailer/index.js");
/* harmony import */ var _graphqlTypes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/modules/graphqlTypes/index.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/modules/debug/index.js");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/modules/connector.ts");













/* harmony default export */ __webpack_exports__["default"] = (new _connector__WEBPACK_IMPORTED_MODULE_12__["default"](_dealers__WEBPACK_IMPORTED_MODULE_0__["default"], _admin__WEBPACK_IMPORTED_MODULE_1__["default"], _categories__WEBPACK_IMPORTED_MODULE_3__["default"], _product__WEBPACK_IMPORTED_MODULE_4__["default"], _vendor__WEBPACK_IMPORTED_MODULE_2__["default"], _cookies__WEBPACK_IMPORTED_MODULE_5__["default"], _i18n__WEBPACK_IMPORTED_MODULE_6__["default"], _user__WEBPACK_IMPORTED_MODULE_7__["default"], _contact__WEBPACK_IMPORTED_MODULE_8__["default"], _mailer__WEBPACK_IMPORTED_MODULE_9__["default"], _graphqlTypes__WEBPACK_IMPORTED_MODULE_10__["default"]));


/***/ })

};
//# sourceMappingURL=index.1d6a8216c92af5c74e61.js.map
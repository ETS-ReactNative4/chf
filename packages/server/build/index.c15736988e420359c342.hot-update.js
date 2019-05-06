require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/admin/components/Locations/index.js":
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
/* harmony import */ var _common_components_web__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/common/components/web/index.jsx");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/admin/components/Locations/Form.jsx");










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
                console.log('ACTIONS::', actions);
                _context.next = 4;
                return props.updateDealer(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6___default()({
                  name: name,
                  handle: name.split(' ').join('-').toLowerCase()
                }, values));

              case 4:
                dealer = _context.sent;

                // props.handleInitialLocation(dealer.name);
                // console.log('DEALER:::', dealer);

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

              case 6:
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
var columns = [{
  title: react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
    'a',
    { onClick: function onClick(e) {
        return _this.orderBy(e, 'name');
      }, href: '#' },
    'name'
  ),
  dataIndex: 'name',
  key: 'name',
  render: function render(text, record) {
    console.log('TEXT HERE ::', text, 'RECORD::', record);
    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
      'div',
      null,
      text
    );
  }
}];

var LocationsView = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(LocationsView, _Component);

  function LocationsView(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LocationsView);

    var _this2 = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (LocationsView.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(LocationsView)).call(this, props));

    _this2.handleSelectedLocation = function (e) {
      return _this2.setState({ selectedLocation: e.target.value });
    };

    _this2.handleInitialLocation = function (location) {
      console.log('LOCATION::', location);
      _this2.setState({ selectedLocation: location });
    };

    _this2.state = {
      selectedLocation: SelectLocationString
    };
    return _this2;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(LocationsView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('MOUNTING PROPS::', this.props);
      // this.setState({ selectedLocation: dealers.edges[0].node.name });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.dealers) {
        console.log('WE HAVE DEALERS');
      }
      if (prevProps.loadingDealers !== this.props.loadingDealers) {
        var dealers = this.props.dealers;

        console.log('COMPONENT DID UPDATE::', dealers.edges[0].node);
        this.setState({ selectedLocation: dealers.edges[0].node.name });
      }
      return;
    }
  }, {
    key: 'render',
    value: function render() {
      var selectedLocation = this.state.selectedLocation;
      var _props = this.props,
          loadingDealers = _props.loadingDealers,
          dealers = _props.dealers;

      if (loadingDealers) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
          'div',
          null,
          'Loading'
        );
      }
      /*
      {dealers.edges.length == 0 ? (
        <AddDealer {...this.state} {...this.props} />
      ) : (
        <DealerForm {...this.state} {...this.props} />
      )}
       */
      console.log('THE RENDER PROPS:::', dealers.edges.length);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
        'div',
        { className: 'admin__page__view' },
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_common_components_web__WEBPACK_IMPORTED_MODULE_12__["Table"], { dataSource: { dealers: dealers.edges }, columns: columns })
      );
    }
  }]);

  return LocationsView;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);




LocationsView.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.node,
  updateDealer: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func
};

/***/ })

};
//# sourceMappingURL=index.0f64f1377af1b0191043.js.map
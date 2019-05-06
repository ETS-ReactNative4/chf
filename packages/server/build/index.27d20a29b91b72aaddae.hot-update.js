require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/productspecs.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".admin__productspecs{width:100vw;display:-ms-flexbox;display:flex;height:100vh;overflow-y:scroll}.admin__productspecs .table{width:inherit;font-size:1em}.admin__productspecs .table-dark{background-color:#212529}.admin__productspecs .table thead tr{height:2em}.admin__productspecs .table tbody,.admin__productspecs .table thead tr th a{color:#fff}.admin__productspecs .table tbody tr{height:2em}.admin__productspecs .table tbody tr td div{padding:10px 0}.admin__productspecs .table tbody tr:nth-of-type(odd){background-color:hsla(0,0%,100%,.05)}", "", {"version":3,"sources":["/Users/austinreynolds/Documents/MOD/chf-rcomm/packages/client/src/modules/admin/styles/productspecs.scss"],"names":[],"mappings":"AAGE,qBACE,YAAY,oBACZ,aAAa,aACA,iBACK,CAJnB,4BAOG,cAAc,aACA,CARjB,iCAUK,wBAAyB,CAV9B,qCAcO,UAAW,CAdlB,4EAwBK,UAAc,CAxBnB,qCA0BO,UAAW,CA1BlB,4CA6BW,cAA0B,CA7BrC,sDAmCO,oCAAqC,CACtC","file":"productspecs.scss","sourcesContent":["@import './utils/index';\n\n.admin {\n  &__productspecs {\n    width: 100vw;\n    display: flex;\n    height: 100vh;\n    overflow-y: scroll;\n    .table {\n      // color: black;\n      width: inherit;\n      font-size: 1em;\n      &-dark {\n        background-color: #212529;\n      }\n      thead {\n        tr {\n          height: 2em;\n          th {\n            a {\n              color: #fff;\n            }\n          }\n        }\n      }\n      tbody {\n        // background: black;\n        color: #ffffff;\n        tr {\n          height: 2em;\n          td {\n            div {\n              padding: 10px 0px 10px 0px;\n\n            }\n          }\n        }\n        tr:nth-of-type(odd) {\n          background-color: hsla(0,0%,100%,.05);\n        }\n      }\n      &-striped {\n        // color: white;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../client/src/modules/admin/components/ProductSpecs/ProductTable.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_components_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../client/src/modules/common/components/web/index.jsx");





var ProductTable = function ProductTable(_ref) {
  var dataSource = _ref.dataSource,
      columns = _ref.columns,
      props = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ['dataSource', 'columns']);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_common_components_web__WEBPACK_IMPORTED_MODULE_3__["Table"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, { striped: true, dark: true, dataSource: dataSource, columns: columns }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductTable);

/***/ }),

/***/ "../client/src/modules/admin/components/ProductSpecs/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../client/src/modules/admin/components/ProductSpecs/ProductTable.jsx");



var ProductSpecs = function ProductSpecs(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductTable__WEBPACK_IMPORTED_MODULE_1__["default"], props);
};

/* harmony default export */ __webpack_exports__["default"] = (ProductSpecs);

/***/ }),

/***/ "../client/src/modules/admin/containers/Products.jsx":
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
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_AdminView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/admin/components/AdminView.web.jsx");
/* harmony import */ var _common_components_global_components_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../client/src/modules/common/components/global/components/Loader.jsx");
/* harmony import */ var _styles_productspecs_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/admin/styles/productspecs.scss");
/* harmony import */ var _styles_productspecs_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_productspecs_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_ProductSpecs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/admin/components/ProductSpecs/index.jsx");
/* harmony import */ var _common_schema__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/common/schema/index.js");
/* harmony import */ var _graphql_Products_graphql__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../client/src/modules/admin/graphql/Products.graphql");
/* harmony import */ var _graphql_Products_graphql__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_graphql_Products_graphql__WEBPACK_IMPORTED_MODULE_14__);







var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5___default()(['\n  query adminProducts($first: Int, $after: String) {\n    # sfy_shop {\n    admin_products(first: $first, after: $after) {\n      edges {\n        cursor\n        node {\n          featuredImage {\n            transformedSrc(maxWidth: 100, maxHeight: 100)\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n    }\n    # }\n  }\n'], ['\n  query adminProducts($first: Int, $after: String) {\n    # sfy_shop {\n    admin_products(first: $first, after: $after) {\n      edges {\n        cursor\n        node {\n          featuredImage {\n            transformedSrc(maxWidth: 100, maxHeight: 100)\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n    }\n    # }\n  }\n']);











var Query = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject);

var columns = [{
  title: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
    'a',
    { href: '#' },
    'Name'
  ),
  dataIndex: 'node',
  key: 'title',
  // eslint-disable-next-line
  render: function render(text, record) {
    // console.log('TEXT::', text);
    console.log('RECORD:', record);
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
      'div',
      null,
      text
    );
  }
}, {
  title: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
    'a',
    { href: '#' },
    'Name'
  ),
  dataIndex: 'node',
  key: 'title',
  // eslint-disable-next-line
  render: function render(text, record) {
    // console.log('TEXT::', text);
    // console.log('RECORD:', record);
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
      'div',
      null,
      text
    );
  }
}];

var Products = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Products, _Component);

  function Products(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Products);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Products.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(Products)).call(this, props));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Products, [{
    key: 'render',
    value: function render() {
      console.log('The PRODUCT PROPS::::', this.props);
      var _props = this.props,
          productsLoading = _props.productsLoading,
          sfy_shop = _props.sfy_shop;


      if (productsLoading) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          _components_AdminView__WEBPACK_IMPORTED_MODULE_9__["default"],
          this.props,
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_common_components_global_components_Loader__WEBPACK_IMPORTED_MODULE_10__["default"], null)
        );
      }
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
        _components_AdminView__WEBPACK_IMPORTED_MODULE_9__["default"],
        this.props,
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          'div',
          { className: 'admin__productspecs' },
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_ProductSpecs__WEBPACK_IMPORTED_MODULE_12__["default"], { dataSource: sfy_shop.products.edges, columns: columns })
        )
      );
    }
  }]);

  return Products;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var ProductsApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_7__["compose"])(Object(react_apollo__WEBPACK_IMPORTED_MODULE_7__["graphql"])(_graphql_Products_graphql__WEBPACK_IMPORTED_MODULE_14___default.a, {
  options: function options() {
    return {
      variables: { first: 50 }
    };
  },
  props: function props(_ref) {
    var data = _ref.data;

    console.log('DATA;::', data);
    var loading = data.loading,
        error = data.error,
        admin_products = data.admin_products;

    if (error) {
      throw new Error(error);
    }
    if (loading) {
      return { productsLoading: loading };
    }
    if (!loading && admin_products) {
      return { productsLoading: loading, sfy_shop: admin_products };
    }
  }
}))(Products);

/* harmony default export */ __webpack_exports__["default"] = (ProductsApollo);

/***/ }),

/***/ "../client/src/modules/admin/graphql/Products.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"admin_products"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"admin_products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transformedSrc"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"maxHeight"},"value":{"kind":"IntValue","value":"100"}}],"directives":[]}]}}]}}]}}]}}]}}],"loc":{"start":0,"end":218}};
    doc.loc.source = {"body":"query admin_products($first: Int) {\n  admin_products(first: $first) {\n    edges {\n      node {\n        title\n        featuredImage {\n          transformedSrc(maxWidth: 100, maxHeight:100)\n        }\n      }\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports["admin_products"] = oneQuery(doc, "admin_products");
        


/***/ }),

/***/ "../client/src/modules/admin/styles/productspecs.scss":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/productspecs.scss");
    var insertCss = __webpack_require__("../../node_modules/isomorphic-style-loader/lib/insertCss.js");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if ( true && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/productspecs.scss", function() {
        content = __webpack_require__("../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/productspecs.scss");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ })

};
//# sourceMappingURL=index.045f17f7deede3a9f087.js.map
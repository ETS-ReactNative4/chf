require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/common/graphql/UpdateProductData.graphql":
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProductData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductDataInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProductData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sku"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"product_name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"handle"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"shock_absorption"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"console"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"user_ids"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"workouts"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hrt_monitoring"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"stride_technology"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"power"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"design"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"drive_system"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"handlebars"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"seat"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"pedals"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"frame"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"finish"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"motion"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"exercises"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"weight_stack"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"included_accessories"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"optional_weight_stack"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"running_area"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"motor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"speed"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"incline"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"resistance_levels"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"resistance_system"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"stride"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"max_user_weight"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"ramp"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"stored_vertical_height"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"seat_floor_distance"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"warranty"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"message"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":802}};
    doc.loc.source = {"body":"#import \"./ProductDataFull.graphql\"\n\nmutation updateProductData($input: ProductDataInput!) {\n  updateProductData(input: $input) {\n    productData {\n      id\n      sku\n      product_name\n      handle\n      shock_absorption\n      console\n      user_ids\n      workouts\n      hrt_monitoring\n      stride_technology\n      power\n      design\n      drive_system\n      handlebars\n      seat\n      pedals\n      frame\n      finish\n      motion\n      exercises\n      weight_stack\n      included_accessories\n      optional_weight_stack\n      running_area\n      motor\n      speed\n      incline\n      resistance_levels\n      resistance_system\n      stride\n      max_user_weight\n      ramp\n      stored_vertical_height\n      seat_floor_distance\n      warranty\n    }\n    errors {\n      field\n      message\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
  doc.definitions = doc.definitions.concat(unique(__webpack_require__("../client/src/modules/common/graphql/ProductDataFull.graphql").definitions));


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
    
        module.exports["updateProductData"] = oneQuery(doc, "updateProductData");
        


/***/ })

};
//# sourceMappingURL=index.e879cc6f7c04414e9085.js.map
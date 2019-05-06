require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/admin/graphql/Frags/DealerFrag.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DealerDataFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dealer"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"handle"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"street"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"suite"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"city"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"zip"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"state"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"phone"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"website"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lat"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lng"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"image_url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hours"},"arguments":[],"directives":[]}]}}],"loc":{"start":0,"end":179}};
    doc.loc.source = {"body":"fragment DealerDataFrag on Dealer {\n  id\n  handle\n  name\n  street\n  suite\n  city\n  zip\n  state\n  country\n  email\n  phone\n  website\n  lat\n  lng\n  image_url\n  description\n  hours\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    


/***/ })

};
//# sourceMappingURL=index.6f2ed065cd124f2b4655.js.map
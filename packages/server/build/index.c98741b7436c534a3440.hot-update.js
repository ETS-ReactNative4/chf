require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/main-layout.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "html{overflow-x:hidden}#root{position:relative;min-height:100vh;-ms-flex-direction:column;flex-direction:column}#root,.admin-layout{display:-ms-flexbox;display:flex}.admin-layout{background-color:#f9f9f9;height:100vh}.admin-layout__content{-ms-flex-direction:column;flex-direction:column;background-color:#f1f1f1;width:100vw}.admin-layout .admin__dashboard{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.admin-layout .admin__modal{position:absolute;top:50px;width:300px;height:500px}.admin-layout .admin__modal--success{background-color:green}", "", {"version":3,"sources":["/Users/austinreynolds/Documents/MOD/chf-rcomm/packages/client/src/modules/admin/styles/main-layout.scss"],"names":[],"mappings":"AAEA,KACE,iBAAkB,CACnB,MAKC,kBAAkB,iBAED,0BACjB,qBAAsB,CAEvB,oBANC,oBAAA,YAAa,CAQf,cACE,yBACA,YAAa,CASb,uBACE,0BAAA,sBAAsB,yBACG,WACb,CAdhB,gCAqBI,oBAAA,aAAa,0BACb,qBAAsB,CAtB1B,4BA0BM,kBAAkB,SACT,YACG,YACC,CA7BnB,qCAgCQ,sBAAuB,CAExB","file":"main-layout.scss","sourcesContent":["@import './utils/index';\n\nhtml {\n  overflow-x: hidden;\n}\n\n// sass-lint:disable-block no-ids\n#root {\n  display: flex;\n  position: relative;\n  // max-width: 100vw;\n  min-height: 100vh;\n  flex-direction: column;\n  // overflow-x: hidden;\n}\n\n.admin-layout {\n  background-color: $siteBackgroundColor;\n  height: 100vh;\n  display: flex;\n  // &__navbar {\n  //   background-color: $contentBackgroundColor;\n  //   @media (min-width: 1109px) {\n  //     background-color: $headerBackgroundColor;\n  //     height: $headerHeight;\n  //   }\n  // }\n  &__content {\n    flex-direction: column;\n    background-color: #f1f1f1;\n    width: 100vw;\n    // width: calc(100% - 15%);\n  }\n  // &__footer {\n  //   background-color: $footerBackgroundColor;\n  // }\n  .admin__dashboard {\n    display: flex;\n    flex-direction: column;\n  }\n  .admin {\n    &__modal {\n      position: absolute;\n      top: 50px;\n      width: 300px;\n      height: 500px;\n\n      &--success {\n        background-color: green;\n\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ })

};
//# sourceMappingURL=index.0c6cc3a0b0b5fe0ff0ea.js.map
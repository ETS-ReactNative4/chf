require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/vendors.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".admin__vendors{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.admin__vendors .table{width:100%;font-size:1em}.admin__vendors .table-dark{background-color:#212529}.admin__vendors .table tbody,.admin__vendors .table thead tr th h3{color:#1b1c1c}.admin__vendors .table tbody tr{border-bottom:1px solid}.admin__vendors .table tbody tr td{width:13%}.admin__vendors .table tbody tr td div{padding:10px 0;width:100%}.admin__vendors .table tbody tr:last-of-type{border-bottom:none}.admin__vendors .table tbody tr:nth-of-type(odd){background-color:hsla(0,0%,100%,.05)}", "", {"version":3,"sources":["/Users/austinreynolds/Documents/MOD/chf-rcomm/packages/client/src/modules/admin/styles/vendors.scss"],"names":[],"mappings":"AAGE,gBAEE,oBAAA,aAAa,0BACb,qBAAsB,CAHvB,uBAWG,WAAW,aACG,CAZjB,4BAcK,wBAAyB,CAd9B,mEA8BK,aAAc,CA9BnB,gCAgCO,uBAAwB,CAhC/B,mCAkCS,SAAuB,CAlChC,uCAoCW,eAA0B,UACf,CArCtB,6CA8CO,kBAAmB,CA9C1B,iDAiDO,oCAAqC,CACtC","file":"vendors.scss","sourcesContent":["@import './utils/index';\n\n.admin {\n  &__vendors {\n    // width: inherit;\n    display: flex;\n    flex-direction: column;\n    // border: solid 1px;\n    // height: 100vh;\n    // overflow-y: scroll;\n    // padding: 30px;\n    // width: calc(100vw - 25vw);\n    // position: relative;\n    .table {\n      width: 100%;\n      font-size: 1em;\n      &-dark {\n        background-color: #212529;\n      }\n      thead {\n        tr {\n          // height: 2em;\n          th {\n            h3 {\n              color: #1b1c1c;\n            }\n          }\n          // th:first-of-type {\n          //   width: 50px;\n          // }\n        }\n      }\n      tbody {\n        color: #1b1c1c;\n        tr {\n          border-bottom: solid 1px;\n          td {\n            width: calc(100% - 87%);\n            div {\n              padding: 10px 0px 10px 0px;\n              width: 100%;\n              img {\n                // height: 3.125em;\n                // width: inherit;\n              }\n            }\n          }\n        }\n        tr:last-of-type {\n          border-bottom: none;\n        }\n        tr:nth-of-type(odd) {\n          background-color: hsla(0,0%,100%,.05);\n        }\n      }\n      &-striped {\n        // color: white;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ })

};
//# sourceMappingURL=index.1843003b253f1fea2a28.js.map
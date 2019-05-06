require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/productspecs.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".profile-view__content{position:relative}.admin__productspecs{width:100vw;display:-ms-flexbox;display:flex;height:100vh;overflow-y:scroll;width:75vw;position:relative}.admin__productspecs .table{width:inherit;font-size:1em}.admin__productspecs .table-dark{background-color:#212529}.admin__productspecs .table thead tr{height:2em}.admin__productspecs .table tbody,.admin__productspecs .table thead tr th a{color:#fff}.admin__productspecs .table tbody tr{height:2em}.admin__productspecs .table tbody tr td div{padding:10px 0}.admin__productspecs .table tbody tr td div img{height:6.25em;width:6.25em}.admin__productspecs .table tbody tr:nth-of-type(odd){background-color:hsla(0,0%,100%,.05)}.admin__loadmore{position:absolute;top:80vh;background-color:green}", "", {"version":3,"sources":["/Users/austinreynolds/Documents/MOD/chf-rcomm/packages/client/src/modules/admin/styles/productspecs.scss"],"names":[],"mappings":"AAEE,uBACE,iBAAkB,CACnB,qBAIC,YAAY,oBACZ,aAAa,aACA,kBACK,WACO,iBACP,CANnB,4BASG,cAAc,aACA,CAVjB,iCAYK,wBAAyB,CAZ9B,qCAgBO,UAAW,CAhBlB,4EA0BK,UAAc,CA1BnB,qCA4BO,UAAW,CA5BlB,4CA+BW,cAA0B,CA/BrC,gDAiCa,cAAc,YACD,CAlC1B,sDAwCO,oCAAqC,CACtC,iBAQL,kBAAkB,SACT,sBACc,CACxB","file":"productspecs.scss","sourcesContent":["@import './utils/index';\n.profile-view {\n  &__content {\n    position: relative;\n  }\n}\n.admin {\n  &__productspecs {\n    width: 100vw;\n    display: flex;\n    height: 100vh;\n    overflow-y: scroll;\n    width: calc(100vw - 25vw);\n    position: relative;\n    .table {\n      // color: black;\n      width: inherit;\n      font-size: 1em;\n      &-dark {\n        background-color: #212529;\n      }\n      thead {\n        tr {\n          height: 2em;\n          th {\n            a {\n              color: #fff;\n            }\n          }\n        }\n      }\n      tbody {\n        // background: black;\n        color: #ffffff;\n        tr {\n          height: 2em;\n          td {\n            div {\n              padding: 10px 0px 10px 0px;\n              img {\n                height: 6.25em;\n                width: 6.25em;\n              }\n            }\n          }\n        }\n        tr:nth-of-type(odd) {\n          background-color: hsla(0,0%,100%,.05);\n        }\n      }\n      &-striped {\n        // color: white;\n      }\n    }\n  }\n  &__loadmore {\n    position: absolute;\n    top: 80vh;\n    background-color: green;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ })

};
//# sourceMappingURL=index.028f9c2ca31e4c107ff7.js.map
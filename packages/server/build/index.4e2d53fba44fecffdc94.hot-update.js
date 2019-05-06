require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/carousel.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".admin{-ms-flex-direction:column;flex-direction:column}.admin,.admin__carousel,.admin__carousel__toggle{display:-ms-flexbox;display:flex}.admin__carousel__toggle{-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;margin-bottom:30px}.admin__carousel__toggle span:first-child{margin-right:1em}.admin__carousel__switch{position:relative;display:inline-block;width:60px;height:34px}.admin__carousel__switch input{opacity:0;width:0;height:0}.admin__carousel__switch input:checked+.admin__carousel__slider{background-color:#177e89}.admin__carousel__switch input:checked+.admin__carousel__slider:before{-webkit-transform:translateX(26px);transform:translateX(26px)}.admin__carousel__switch input:focus{box-shadow:0 0 1px #2196f3}.admin__carousel__slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:.4s}.admin__carousel__slider:before{position:absolute;content:\"\";height:26px;width:26px;left:4px;bottom:4px;background-color:#fff;transition:.4s}.admin__carousel__slider--round{border-radius:34px}.admin__carousel__slider--round:before{border-radius:50%}.admin__btn{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:30px}.admin__btn--container{width:16%;position:relative}.admin__btn--upload{background-color:#1a2774;color:#fff;width:calc(15vw - 1em);position:relative;border-radius:10em;height:40px}.admin__btn--upload input{position:absolute;left:0}.admin__btn--save{background-color:#177e89;color:#fff;width:calc(10vw - 1em);height:40px;border-radius:10em}.admin__btn--remove{position:absolute;top:0;right:0;border-radius:30px;padding:0}.admin__images--spacer{position:absolute;top:200px;height:30px;width:100%;background-color:#1d2870}.admin__images--item{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;height:200px;position:relative;margin-bottom:30px}.admin__images--image{width:33%;height:200px}.admin__images--image--info{width:33%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}", "", {"version":3,"sources":["/Users/austinreynolds/Documents/MOD/chf-rcomm/packages/client/src/modules/admin/styles/carousel.scss"],"names":[],"mappings":"AAEA,OAEE,0BAAA,qBAAsB,CAGpB,iDAJF,oBAAA,YAAa,CAIX,yBAEI,kBAAA,yBAAyB,sBACzB,mBAAmB,kBACA,CAJtB,0CAOO,gBAAiB,CAClB,yBAIL,kBAAkB,qBACG,WACV,WACC,CAJb,+BAMG,UAAU,QACF,QACC,CARZ,gEAWO,wBAAyB,CAXhC,uEAcS,mCAAmC,0BAER,CAhBpC,qCAoBK,0BAA2B,CAC5B,yBAID,kBAAkB,eACH,MACT,OACC,QACC,SACC,sBACa,cAEP,CATlB,gCAWK,kBAAkB,WACP,YACC,WACD,SACF,WACE,sBACY,cAER,CAChB,gCAEC,kBAAmB,CADpB,uCAGK,iBAAkB,CAErB,YAKP,oBAAA,aAAa,sBACb,8BAA8B,kBACX,CACnB,uBACE,UAAU,iBACQ,CACnB,oBAEC,yBAAyB,WACX,uBACS,kBACL,mBACC,WACP,CANb,0BASK,kBAAkB,MACX,CACR,kBAGD,yBAAyB,WACX,uBACS,YACX,kBACO,CACtB,oBAEC,kBAAkB,MACZ,QACE,mBACW,SACT,CACX,uBAIC,kBAAkB,UACR,YACE,WACD,wBACc,CAC1B,qBAEC,oBAAA,aAAa,sBACb,8BAA8B,aACjB,kBACK,kBACC,CACpB,sBAEC,UAAU,YACG,CACb,4BACE,UAAU,oBACV,aAAa,0BACb,qBAAsB,CACvB","file":"carousel.scss","sourcesContent":["@import './utils/index';\n\n.admin {\n  display: flex;\n  flex-direction: column;\n  &__carousel {\n    display: flex;\n    &__toggle {\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n        margin-bottom: 30px;\n        span {\n          &:nth-child(1) {\n            margin-right: 1em;\n          }\n        }\n    }\n    &__switch {\n      position: relative;\n      display: inline-block;\n      width: 60px;\n      height: 34px;\n      input {\n        opacity: 0;\n        width: 0;\n        height: 0;\n        &:checked {\n          + .admin__carousel__slider {\n            background-color: #177E89;\n          }\n          + .admin__carousel__slider:before {\n              -webkit-transform: translateX(26px);\n              -ms-transform: translateX(26px);\n              transform: translateX(26px);\n          }\n        }\n        &:focus {\n          box-shadow: 0 0 1px #2196F3;\n        }\n      }\n    }\n    &__slider{\n        position: absolute;\n        cursor: pointer;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: #ccc;\n        -webkit-transition: .4s;\n        transition: .4s;\n        &:before {\n          position: absolute;\n          content: \"\";\n          height: 26px;\n          width: 26px;\n          left: 4px;\n          bottom: 4px;\n          background-color: white;\n          -webkit-transition: .4s;\n          transition: .4s;\n        }\n        &--round {\n          border-radius: 34px;\n          &:before {\n              border-radius: 50%;\n\n          }\n        }\n    }\n  }\n  &__btn {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 30px;\n    &--container {\n      width: 16%;\n      position: relative;\n    }\n    &--upload {\n      background-color: #1a2774;\n      color: #ffffff;\n      width: calc(15vw - 1em);\n      position: relative;\n      border-radius: 10em;\n      height: 40px;\n\n        input {\n          position: absolute;\n          left: 0;\n        }\n    }\n    &--save {\n        background-color: #177E89;\n        color: #ffffff;\n        width: calc(10vw - 1em);\n        height: 40px;\n        border-radius: 10em;\n    }\n    &--remove {\n      position: absolute;\n      top: 0;\n      right: 0;\n      border-radius: 30px;\n      padding: 0;\n    }\n  }\n  &__images {\n    &--spacer {\n      position: absolute;\n      top: 200px;\n      height: 30px;\n      width: 100%;\n      background-color: #1d2870;\n    }\n    &--item {\n      display: flex;\n      justify-content: space-between;\n      height: 200px;\n      position: relative;\n      margin-bottom: 30px;\n    }\n    &--image {\n      width: 33%;\n      height: 200px;\n      &--info {\n        width: 33%;\n        display: flex;\n        flex-direction: column;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/forms.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".admin__form__seo{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:67%}.admin__form__seo--field{position:relative;margin-bottom:30px}.admin__form__seo--field textarea{width:100%;height:100px;height:-webkit-fill-available;height:-moz-available;height:stretch;max-height:200px}.admin__form__seo--input{border:solid}.admin__form__seo--error{position:absolute;right:0;color:#db3a34}", "", {"version":3,"sources":["/Users/austinreynolds/Documents/MOD/chf-rcomm/packages/client/src/modules/admin/styles/forms.scss"],"names":[],"mappings":"AAII,kBACE,oBAAA,aAAa,0BACb,sBAAsB,SACC,CACvB,yBACE,kBAAkB,kBACC,CAFpB,kCAIG,WAAW,aACE,8BACb,sBAAA,eAAe,gBACE,CAClB,yBAGD,YAAa,CACd,yBAEC,kBAAkB,QACV,aACM,CACf","file":"forms.scss","sourcesContent":["@import './utils/index';\n\n.admin {\n  &__form {\n    &__seo {\n      display: flex;\n      flex-direction: column;\n      width: calc(100% - 33%);\n      &--field {\n        position: relative;\n        margin-bottom: 30px;\n        textarea {\n          width: 100%;\n          height: 100px;\n          height: stretch;\n          max-height: 200px;\n        }\n      }\n      &--input {\n        border: solid;\n      }\n      &--error {\n        position: absolute;\n        right: 0;\n        color: #DB3A34;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/main-layout.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "html{overflow-x:hidden}#root{position:relative;min-height:100vh;-ms-flex-direction:column;flex-direction:column}#root,.admin-layout{display:-ms-flexbox;display:flex}.admin-layout{background-color:#f9f9f9;height:100vh}.admin-layout__content{-ms-flex-direction:column;flex-direction:column;background-color:#f9f9f9;min-height:calc(100vh - 80px)}", "", {"version":3,"sources":["/Users/austinreynolds/Documents/MOD/chf-rcomm/packages/client/src/modules/admin/styles/main-layout.scss"],"names":[],"mappings":"AAEA,KACE,iBAAkB,CACnB,MAKC,kBAAkB,iBAED,0BACjB,qBAAsB,CAEvB,oBANC,oBAAA,YAAa,CAQf,cACE,yBACA,YAAa,CASb,uBACE,0BAAA,sBAAsB,yBAEtB,6BAA0C,CAE3C","file":"main-layout.scss","sourcesContent":["@import './utils/index';\n\nhtml {\n  overflow-x: hidden;\n}\n\n// sass-lint:disable-block no-ids\n#root {\n  display: flex;\n  position: relative;\n  // max-width: 100vw;\n  min-height: 100vh;\n  flex-direction: column;\n  // overflow-x: hidden;\n}\n\n.admin-layout {\n  background-color: $siteBackgroundColor;\n  height: 100vh;\n  display: flex;\n  // &__navbar {\n  //   background-color: $contentBackgroundColor;\n  //   @media (min-width: 1109px) {\n  //     background-color: $headerBackgroundColor;\n  //     height: $headerHeight;\n  //   }\n  // }\n  &__content {\n    flex-direction: column;\n    background-color: $contentBackgroundColor;\n    min-height: calc(100vh - #{$headerHeight});\n    // width: calc(100% - 15%);\n  }\n  // &__footer {\n  //   background-color: $footerBackgroundColor;\n  // }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/navbar.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".admin__navbar{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;position:absolute;left:0;width:calc(20vw - 2em);padding:1em .5em;box-shadow:inset 0 80px 0 0 #fcfcfc;-ms-flex-pack:justify;justify-content:space-between;top:0;transition:box-shadow .35s ease-in-out;z-index:100}@media (max-width:400px){.admin__navbar{padding:1em 0 1em .5em}}@media (max-width:1030px){.admin__navbar{-ms-flex-align:start;align-items:flex-start}}.admin__navbar__header{position:relative;-ms-flex-preferred-size:10%;flex-basis:10%;top:24px;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:auto}.admin__navbar__header img{width:auto;height:calc(80px - 2em)}@media (min-width:500px){.admin__navbar__header{padding:0 1em}}@media (min-width:1109px){.admin__navbar__header{padding:0 2em;-ms-flex-preferred-size:15%;flex-basis:15%;top:auto;-webkit-transform:none;transform:none}.admin__navbar__header img{height:calc(80px - 2em);width:100%}}.admin__navbar__logo-link{display:block}.admin__navbar__content{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-preferred-size:90%;flex-basis:90%;-ms-flex-pack:end;justify-content:flex-end}@media (min-width:1109px){.admin__navbar__content{-ms-flex-pack:justify;justify-content:space-between}}.admin__navbar__hamburger{margin:1em;cursor:pointer;-webkit-transform:rotate(0deg) translateY(-40%);transform:rotate(0deg) translateY(-40%);transition:.5s ease-in-out;width:40px}@media (max-width:400px){.admin__navbar__hamburger{width:30px}}@media (min-width:1109px){.admin__navbar__hamburger{display:none}}.admin__navbar__hamburger-item{display:block;position:absolute;background-color:#1d2870;border-radius:3px;height:3px;left:0;opacity:1;-webkit-transform:rotate(0deg);transform:rotate(0deg);transition:.25s ease-in-out;width:100%}.admin__navbar__hamburger-item:first-child{top:0}.admin__navbar__hamburger-item:nth-child(2),.admin__navbar__hamburger-item:nth-child(3){top:10px}.admin__navbar__hamburger-item:nth-child(4){top:20px}.admin__navbar__hamburger-item:first-child .navbar__hamburger.open .admin__navbar__hamburger-item:first-child .navbar__hamburger{top:10px;width:0;left:50%}.admin__navbar__hamburger-item:nth-child(2) .navbar__hamburger.open .admin__navbar__hamburger-item:nth-child(2) .navbar__hamburger{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.admin__navbar__hamburger-item:nth-child(3) .navbar__hamburger.open .admin__navbar__hamburger-item:nth-child(3) .navbar__hamburger{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.admin__navbar__hamburger-item:nth-child(4) .navbar__hamburger.open .admin__navbar__hamburger-item:nth-child(4) .navbar__hamburger{top:10px;width:0;left:50%}.admin__navbar__collapse{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;position:absolute;top:80px;right:0;-ms-flex-align:end;align-items:flex-end;-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-pack:end;justify-content:flex-end;max-height:0;opacity:0;transition:max-height .3s ease-in-out;visibility:hidden;width:100%}.admin__navbar__collapse.open{background-color:#f9f9f9;max-height:400px;opacity:1;visibility:visible}@media (min-width:1109px){.admin__navbar__collapse{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;position:relative;-ms-flex-align:center;align-items:center;background-color:transparent;-ms-flex-preferred-size:65%;flex-basis:65%;top:unset;right:unset;-ms-flex-pack:start;justify-content:flex-start;max-height:none;opacity:1;visibility:visible;width:auto}}.admin__navbar__triggers{display:-ms-flexbox;display:flex}@media (min-width:1109px){.admin__navbar__triggers{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-align:center;align-items:center;-ms-flex-preferred-size:35%;flex-basis:35%;-ms-flex-pack:distribute;justify-content:space-around}}.admin__navbar__collapse-item{padding:.5em 1.25em}.admin__navbar__collapse-item:before{position:absolute;background-color:#1d2870;bottom:0;content:\" \";height:2px;left:0;-webkit-transform:scaleX(0);transform:scaleX(0);transition:-webkit-transform 175ms ease-in-out 0s;transition:transform 175ms ease-in-out 0s;transition:transform 175ms ease-in-out 0s,-webkit-transform 175ms ease-in-out 0s;visibility:hidden;width:100%}.admin__navbar__collapse-item:hover:before{-webkit-transform:scaleX(1);transform:scaleX(1);visibility:visible}@media (min-width:900px){.admin__navbar__collapse-item{padding:.5em .75em}}@media (min-width:1200px){.admin__navbar__collapse-item{padding:.5em 1.25em}}.admin__navbar__collapse-item:before{bottom:5px;left:12.5%;width:75%}.admin__navbar__trigger-item:before{position:absolute;background-color:#1d2870;bottom:0;content:\" \";height:2px;left:0;-webkit-transform:scaleX(0);transform:scaleX(0);transition:-webkit-transform 175ms ease-in-out 0s;transition:transform 175ms ease-in-out 0s;transition:transform 175ms ease-in-out 0s,-webkit-transform 175ms ease-in-out 0s;visibility:hidden;width:100%}.admin__navbar__trigger-item:hover:before{-webkit-transform:scaleX(1);transform:scaleX(1);visibility:visible}.admin__navbar__trigger-item--cart,.admin__navbar__trigger-item--profile{position:relative;background-color:transparent;color:#1d2870}.admin__navbar__trigger-item--profile{padding:.5em 17.5px .5em 10px}@media (max-width:400px){.admin__navbar__trigger-item--profile{padding:.5em 5px}}.admin__navbar__trigger-item--cart{padding:.5em 40px .5em 10px}.admin__navbar__trigger-item--cart:after{position:absolute;padding:5px;background-color:#1d2870;border-radius:50%;color:#fcfcfc;content:attr(data-cart-count);font-size:10px;height:20px;line-height:10px;right:7.5px;text-align:center;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);vertical-align:middle;width:20px}.admin__navbar__trigger-item--search{padding:.5em 1.25em}@media (min-width:900px){.admin__navbar__trigger-item--search{padding:.5em .75em}}@media (min-width:1200px){.admin__navbar__trigger-item--search{padding:.5em 1.25em}}.admin__navbar__search-text{padding-right:.5em}.admin__navbar__trigger-item-icon{margin-right:.5em;vertical-align:middle}.admin__navbar__trigger-item-icon path{color:#fc7b18}", "", {"version":3,"sources":["/Users/austinreynolds/Documents/MOD/chf-rcomm/packages/client/src/modules/admin/styles/navbar.scss","/Users/austinreynolds/Documents/MOD/chf-rcomm/packages/client/src/modules/admin/styles/utils/_mixins.scss","/Users/austinreynolds/Documents/MOD/chf-rcomm/packages/client/src/modules/admin/styles/utils/_variables.scss"],"names":[],"mappings":"AAEE,eCiEI,oBAAA,aAAa,0BD9DK,sBAAA,qBAAQ,iBAAA,kBAIV,OACT,uBACc,iBACL,oCAKlB,sBAAA,8BAA8B,MACtB,uCAC0C,WACtC,CAEZ,yBApBF,eAqBI,sBAA0B,CAmP7B,CAjPC,0BAvBF,eAwBI,qBAAA,sBAAuB,CAgP1B,CAzOC,uBACE,kBAAkB,4BAClB,eAAe,SACN,mCACT,2BAA2B,UAChB,CALZ,2BAOG,WAAW,uBACa,CACzB,yBATH,uBAWI,aAAgB,CAYnB,CAVC,0BAbF,uBAcI,cAAgB,4BAChB,eAAe,SACN,uBACT,cAAe,CAjBlB,2BAmBK,wBAAwB,UACb,CACZ,CAAA,0BAIH,aAAc,CACf,wBCQC,oBAAA,aAAa,uBDNI,mBAAA,qBAAQ,iBAAA,4BACzB,eAAe,kBACf,wBAAyB,CACzB,0BAJF,wBAKI,sBAAA,6BAA8B,CAEjC,CAAA,0BAEC,WAAW,eACI,gDACf,wCAAwC,2BACb,UAlER,CAqEnB,yBAPF,0BAQI,UAAW,CAKd,CAHC,0BAVF,0BAWI,YAAa,CAEhB,CAAA,+BAEC,cAAc,kBACI,yBAElB,kBAAkB,WACP,OACF,UACC,+BACV,uBAAuB,4BACK,UACjB,CAVZ,2CAaG,KAAQ,CAbX,wFAkBG,QAAS,CAlBZ,4CAsBG,QAAS,CAtBZ,iIA6BS,SAAS,QACA,QACA,CA/BlB,mIAyCS,gCAAA,uBAAwB,CAzCjC,mIAmDS,iCAAA,wBAAyB,CAnDlC,mIA6DS,SAAS,QACA,QACA,CACV,yBC/EP,oBAAA,aAAa,0BDqFO,sBAAA,qBAAQ,iBAAA,kBACV,SACT,QACC,mBACV,qBAAqB,6BACrB,gBAAgB,kBAChB,yBAAyB,aACV,UACL,sCAC8B,kBACtB,UACP,CAZZ,8BAcG,yBACA,iBAAiB,UAEP,kBACS,CACpB,0BAnBH,yBCpFE,oBAAA,aAAa,uBDyGM,mBAAA,qBAAQ,iBAAA,kBACP,sBAClB,mBAAmB,6BACU,4BAC7B,eAAe,UACL,YACE,oBACZ,2BAA2B,gBACX,UACN,mBACS,UACR,CAEd,CAAA,yBAEC,oBAAA,YAAa,CACb,0BAFF,yBCvHE,oBAAA,aAAa,uBD0HM,mBAAA,qBAAQ,iBAAA,sBACzB,mBAAmB,4BACnB,eAAe,yBACf,4BAA6B,CAEhC,CAAA,8BASC,mBAAqB,CARtB,qCCzEC,kBAAkB,yBAElB,SAAW,YACC,WACD,OACF,4BACT,oBAAoB,kDACpB,0CAAA,iFAAwD,kBACtC,UACP,CDgEZ,2CC5DG,4BAAA,oBAAoB,kBACD,CApHzB,yBD+KE,8BAGI,kBAAqB,CAWxB,CAAA,0BAdD,8BAMI,mBAAqB,CAQxB,CAdA,qCAUG,WAAW,WAC2B,SA1M3B,CA4MZ,oCCtFD,kBAAkB,yBAElB,SAAW,YACC,WACD,OACF,4BACT,oBAAoB,kDACpB,0CAAA,iFAAwD,kBACtC,UACP,CD+EZ,0CC3EG,4BAAA,oBAAoB,kBACD,CD6ErB,yEAEE,kBAAkB,6BACW,aEpNb,CFsNjB,sCAEC,6BAAgC,CAChC,yBAFF,sCAGI,gBAA4B,CAE/B,CAAA,mCAEC,2BAA8B,CAD/B,yCAIG,kBAAkB,YACkB,yBAEpC,kBAAkB,cAElB,8BAA8B,eACO,YAPpB,iBASsB,YAC3B,kBACM,QACV,mCACR,2BAA2B,sBACL,UAdL,CAgBlB,qCASD,mBAAqB,CACtB,yBARD,qCAEI,kBAAqB,CAMxB,CAAA,0BARD,qCAKI,mBAAqB,CAGxB,CAAA,4BAGD,kBAAoB,CACrB,kCAEC,kBAAmB,qBACG,CAFvB,uCAIG,aEpQc,CFqQf","file":"navbar.scss","sourcesContent":["@import './utils/index';\n.admin {\n  &__navbar {\n    $navRoot: &;\n    $lineWidth: 75%;\n    @include flex(column, nowrap);\n    $hamburgerWidth: 40px;\n    $mobileBreakpoint: 1109px;\n    $desktopBreakpoint: 1230px;\n    position: absolute;\n    left: 0px;\n    width: calc(20vw - 2em);\n    padding: 1em 0.5em;\n    // align-items: center;\n    // Added Code Until ScrollMagic Implemented\n    // box-shadow: inset 0px 35px 35px -10px $white;\n    box-shadow: inset 0px #{$headerHeight} 0px 0px $white;\n    justify-content: space-between;\n    top: 0em;\n    transition: box-shadow $animationSpeed ease-in-out;\n    z-index: 100;\n\n    @media (max-width: 400px) {\n      padding: 1em 0em 1em 0.5em;\n    }\n    @media (max-width: 1030px) {\n      align-items: flex-start;\n    }\n    // Commented Out Until ScrollMagic Implemented\n    // &:hover,\n    // &--active {\n    //   box-shadow: inset 0px #{$headerHeight} 0px 0px $white;\n    // }\n    &__header {\n      position: relative;\n      flex-basis: 10%;\n      top: 24px;\n      transform: translateY(-50%);\n      width: auto;\n      img {\n        width: auto;\n        height: calc(80px - 2em);\n      }\n      @media (min-width: 500px) {\n        padding: 0em 1em;\n      }\n      @media (min-width: $mobileBreakpoint) {\n        padding: 0em 2em;\n        flex-basis: 15%;\n        top: auto;\n        transform: none;\n        img {\n          height: calc(80px - 2em);\n          width: 100%;\n        }\n      }\n    }\n    &__logo-link {\n      display: block;\n    }\n    &__content {\n      @include flex(row, nowrap);\n      flex-basis: 90%;\n      justify-content: flex-end;\n      @media (min-width: $mobileBreakpoint) {\n        justify-content: space-between;\n      }\n    }\n    &__hamburger {\n      margin: 1em;\n      cursor: pointer;\n      transform: rotate(0deg) translateY(-40%);\n      transition: .5s ease-in-out;\n      width: $hamburgerWidth;\n\n      @media (max-width: 400px) {\n        width: 30px;\n      }\n      @media (min-width: $mobileBreakpoint) {\n        display: none;\n      }\n    }\n    &__hamburger-item {\n      display: block;\n      position: absolute;\n      background-color: $brandSecondary;\n      border-radius: 3px;\n      height: 3px;\n      left: 0px;\n      opacity: 1;\n      transform: rotate(0deg);\n      transition: .25s ease-in-out;\n      width: 100%;\n\n      &:nth-child(1) {\n        top: 0px;\n      }\n\n      &:nth-child(2),\n      &:nth-child(3) {\n        top: 10px;\n      }\n\n      &:nth-child(4) {\n        top: 20px;\n      }\n\n      &:nth-child(1) {\n        .navbar {\n          &__hamburger {\n            &.open & {\n              top: 10px;\n              width: 0%;\n              left: 50%;\n            }\n          }\n        }\n      }\n\n      &:nth-child(2) {\n        .navbar {\n          &__hamburger {\n            &.open & {\n              transform: rotate(45deg);\n            }\n          }\n        }\n      }\n\n      &:nth-child(3) {\n        .navbar {\n          &__hamburger {\n            &.open & {\n              transform: rotate(-45deg);\n            }\n          }\n        }\n      }\n\n      &:nth-child(4) {\n        .navbar {\n          &__hamburger {\n            &.open & {\n              top: 10px;\n              width: 0%;\n              left: 50%;\n            }\n          }\n        }\n      }\n    }\n    &__collapse {\n      @include flex(column, nowrap);\n      position: absolute;\n      top: 80px;\n      right: 0em;\n      align-items: flex-end;\n      flex-basis: 100%;\n      justify-content: flex-end;\n      max-height: 0px;\n      opacity: 0; // sass-lint:disable-line zero-unit\n      transition: max-height 300ms ease-in-out;\n      visibility: hidden;\n      width: 100%;\n      &.open {\n        background-color: $contentBackgroundColor;\n        max-height: 400px;\n        // margin-bottom: 0.5em;\n        opacity: 1;\n        visibility: visible;\n      }\n      @media (min-width: $mobileBreakpoint) {\n        @include flex(row, nowrap);\n        position: relative;\n        align-items: center;\n        background-color: transparent;\n        flex-basis: 65%;\n        top: unset;\n        right: unset;\n        justify-content: flex-start;\n        max-height: none;\n        opacity: 1;\n        visibility: visible;\n        width: auto;\n      }\n    }\n    &__triggers {\n      display: flex;\n      @media (min-width: $mobileBreakpoint) {\n        @include flex(row, nowrap);\n        align-items: center;\n        flex-basis: 35%;\n        justify-content: space-around;\n      }\n    }\n    &__collapse-item {\n      @include animateUnderline($linkColor);\n      @include md {\n        padding: 0.5em 0.75em;\n      }\n      @include lg {\n        padding: 0.5em 1.25em;\n      }\n      padding: 0.5em 1.25em;\n      &:before {\n        bottom: 5px;\n        left: calc((100% - #{$lineWidth}) / 2);\n        width: $lineWidth;\n      }\n    }\n    &__trigger-item {\n      @include animateUnderline($linkColor);\n      // padding: 10px;\n      &--profile,\n      &--cart {\n        position: relative;\n        background-color: transparent;\n        color: $brandSecondary;\n      }\n      &--profile {\n        padding: 0.5em 17.5px 0.5em 10px;\n        @media (max-width: 400px) {\n          padding: 0.5em 5px 0.5em 5px;\n        }\n      }\n      &--cart {\n        padding: 0.5em 40px 0.5em 10px;\n        &:after {\n          $circleSize: 20px;\n          position: absolute;\n          padding: calc(#{$circleSize} * 0.25);\n          background-color: $brandSecondary;\n          border-radius: 50%;\n          color: $white;\n          content: attr(data-cart-count);\n          font-size: calc(#{$circleSize} * 0.5);\n          height: $circleSize;\n          line-height: calc(#{$circleSize} * 0.5);\n          right: 7.5px;\n          text-align: center;\n          top: 50%;\n          transform: translateY(-50%);\n          vertical-align: middle;\n          width: $circleSize;\n        }\n      }\n      &--search {\n        @include md {\n          padding: 0.5em 0.75em;\n        }\n        @include lg {\n          padding: 0.5em 1.25em;\n        }\n        padding: 0.5em 1.25em;\n      }\n    }\n    &__search-text {\n      padding-right: 0.5em;\n    }\n    &__trigger-item-icon {\n      margin-right: 0.5em;\n      vertical-align: middle;\n      path {\n        color: $brandPrimary;\n      }\n    }\n  }\n\n}\n","// Display mixins\n// Example:\n// @include md {\n//   ...styles\n// }\n// Output:\n// @media (min-width: $screenMedium) {\n//   ...styles\n// }\n@mixin xs {\n  @media (min-width: $screenXSmall) {\n    @content;\n  }\n}\n@mixin sm {\n  @media (min-width: $screenSmall) {\n    @content;\n  }\n}\n@mixin md {\n  @media (min-width: $screenMedium) {\n    @content;\n  }\n}\n@mixin lg {\n  @media (min-width: $screenLarge) {\n    @content;\n  }\n}\n@mixin xl {\n  @media (min-width: $screenXLarge) {\n    @content;\n  }\n}\n@mixin retina {\n  @media only screen and (min-resolution: 192dpi),\n    only screen and (min-resolution: 2dppx) {\n      @content;\n  }\n}\n@mixin print {\n  @media print {\n    @content;\n  }\n}\n\n@mixin lineHeight($font-size) {\n  line-height: calc(#{$font-size} * 1.618);\n}\n\n@mixin absoluteCenter {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n// flex([row, column])\n// Example:\n// @include flex(row)\n// Creates:\n// display: flex\n// flex-direction: row\n//\n@mixin flex($direction: row, $wrap: nowrap) {\n  @if $direction == \"column\" or $direction == \"row\" {\n    @if $wrap == \"nowrap\" or $wrap == \"wrap\" or $wrap == \"wrap-reverse\" {\n      display: flex;\n      flex-direction: $direction;\n      flex-wrap: $wrap;\n    } @else {\n      @error \"`#{$wrap}` is not a wrapping method. Must be 'nowrap', 'wrap', or 'wrap-reverse'.\";\n    }\n  }\n  @else {\n    @error \"`#{$direction}` is not a valid direction. Must be 'column' or 'row'.\";\n  }\n}\n\n// shadow([bottom, middle, top], [right, center, left], {number in px})\n// Example:\n// @include shadow(bottom, center, 10px)\n// Creates:\n// box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5)\n//\n@mixin shadow($verticalPosition: middle, $horizontalPosition: center, $blurRadius: 15px) {\n  $yPos: 0px !default;\n  $xPos: 0px !default;\n  @if $verticalPosition == 'bottom' {\n    $yPos: calc(#{$blurRadius} / 4 + 5px);\n  } @else if $verticalPosition == 'middle' {\n    $yPos: 0px;\n  } @else if $verticalPosition == 'top' {\n    $yPos: -#{$blurRadius};\n  } @else {\n    @error \"`#{$verticalPosition}` is not a vertical option. Must be 'bottom', 'middle', or 'top'.\";\n  }\n\n  @if $horizontalPosition == 'right' {\n    $xPos: $blurRadius;\n  } @else if $horizontalPosition == 'center' {\n    $xPos: 0px;\n  } @else if $horizontalPosition == 'left' {\n    $xPos: -#{$blurRadius};\n  } @else {\n    @error \"`#{$horizontalPosition}` is not a horizontal option. Must be 'left', 'right', or 'center'.\";\n  }\n\n  @if is-number($blurRadius) and index('cm' 'mm' 'in' 'px' 'pt' 'pc', unit($blurRadius)) != null {\n  } @else {\n    @error \"`#{$blurRadius}` is not a pixel value. Number must be in `px`\";\n  }\n  box-shadow: $xPos $yPos $blurRadius rgba(0, 0, 0, 0.2);\n}\n\n// animateUnderline({color})\n// Example:\n// @include animateUnderline(#9611ff)\n//\n@mixin animateUnderline($color: $brandSecondary) {\n  @if type-of($color) == 'color' {\n    &:before {\n      position: absolute;\n      background-color: $color;\n      bottom: 0px;\n      content: ' ';\n      height: 2px;\n      left: 0px;\n      transform: scaleX(0);\n      transition: transform $linkAnimationSpeed ease-in-out 0s;\n      visibility: hidden;\n      width: 100%;\n    }\n    &:hover {\n      &:before {\n        transform: scaleX(1);\n        visibility: visible;\n      }\n    }\n  } @else {\n    @error \"`#{$color}` is not a color. Must input a color.\";\n  }\n}\n\n@mixin animateSize($scale: 1.1) {\n  @if type-of($scale) == 'number' {\n    transform: scale(1);\n    &:hover {\n      transform: scale($scale);\n      transition: transform $cardAnimationSpeed ease-in-out;\n    }\n  } @else {\n    @error \"`#{$scale}` is not a number. Must input a number.\"\n  }\n}\n\n@mixin animateBeat($startAngle: -20deg, $endAngle: -25deg) {\n  animation: beat 1s ease infinite alternate;\n  @keyframes beat {\n    from {\n      transform: rotate(#{$startAngle}) scale(1);\n  \t} to {\n      transform: rotate(#{$endAngle}) scale(1.1);\n  \t}\n  }\n\n}\n","// TODO: Implement native css variables\n\n// Brand colors\n$brandPrimary: #FC7B18 !default;\n$brandSecondary: #1D2870 !default;\n// $brandTertiary:\n// $brandQuaternary:\n\n// Colors\n$gray: #E8E8E8 !default;\n$grayDark: darken($gray, 10);\n$grayDarker: darken($gray, 20);\n$grayDarkest: darken($gray, 30);\n$white: #FCFCFC !default;\n\n// Background colors\n$siteBackgroundColor: #F9F9F9 !default;\n$contentBackgroundColor: #F9F9F9 !default;\n$headerBackgroundColor: transparent !default;\n$footerBackgroundColor: #F7F5F5 !default;\n\n// Font Colors\n$linkColor: $brandSecondary;\n\n// Alert Colors\n$infoColor: #DAEDF6 !default;\n$successColor: #DFF0D9 !default;\n$warningColor: #FCF8E4 !default;\n$errorColor: #F1DEDE !default;\n\n// Fonts\n$fontPrimary: 'Roboto', sans-serif;\n$fontSecondary: 'Roboto Condensed', sans-serif;\n\n// Screen Sizes\n// TODO: Decide on final breakpoints\n$screenXSmall: 320px;\n$screenSmall: 600px;\n$screenMedium: 900px;\n$screenLarge: 1200px;\n$screenXLarge: 1440px;\n\n// Element Sizes\n$headerHeight: 80px !default;\n\n// Animation Speeds\n$animationSpeed: 350ms !default;\n$linkAnimationSpeed: calc(#{$animationSpeed} / 2);\n$cardAnimationSpeed: calc(#{$animationSpeed} * 2);\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../client/src/modules/admin/components/AdminLayout.jsx":
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
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../client/src/modules/admin/components/Nav.jsx");
/* harmony import */ var _styles_main_layout_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../client/src/modules/admin/styles/main-layout.scss");
/* harmony import */ var _styles_main_layout_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_main_layout_scss__WEBPACK_IMPORTED_MODULE_8__);








// import '../../../graphql/SFY/sfyCheckoutQuery.graphql';
// import Cart from '../../../../cart/containers/Cart';
//import CartHOC from '../../../../cart/containers/CartHOC';
// import settings from '../../../../../../../../settings';


var AdminLayout = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(AdminLayout, _React$Component);

  function AdminLayout() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, AdminLayout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_ref = AdminLayout.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(AdminLayout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      cookieBannerIsOpen: false
    }, _this.dismissCookieBanner = function () {
      _this.setState({ cookieBannerIsOpen: false });
      if (typeof window !== 'undefined') {
        localStorage.setItem('cookieAcceptance', 'true'); // eslint-disable-line no-undef
        _this.setState({ showCookieBanner: false });
      }
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(AdminLayout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // if (typeof window !== 'undefined') {
      //   const cookiesAccepted = localStorage.getItem('cookieAcceptance'); // eslint-disable-line no-undef
      //   switch (cookiesAccepted) {
      //     case null:
      //       localStorage.setItem('cookieAcceptance', 'false'); // eslint-disable-line no-undef
      //       this.setState({ cookieBannerIsOpen: true });
      //       break;
      //     case 'true':
      //       this.setState({ cookieBannerIsOpen: false });
      //       break;
      //     case 'false':
      //       this.setState({ cookieBannerIsOpen: true });
      //       break;
      //   }
      // }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          navBar = _props.navBar;
      // console.log('NAV BAR::', navBar);

      var cookieBannerIsOpen = this.state.cookieBannerIsOpen;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'div',
        { className: 'admin-layout' },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'div',
          { id: 'content', className: 'admin-layout__content' },
          children
        )
      );
    }
  }]);

  return AdminLayout;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

AdminLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,
  navBar: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool
};

/* harmony default export */ __webpack_exports__["default"] = (AdminLayout);

/***/ }),

/***/ "../client/src/modules/admin/components/AdminView.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/slicedToArray");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _AdminLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/admin/components/AdminLayout.jsx");
/* harmony import */ var _profile_components_ProfileMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../client/src/modules/profile/components/ProfileMenu.jsx");
/* harmony import */ var _profile_components_ProfileOverview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../client/src/modules/profile/components/ProfileOverview.jsx");
/* harmony import */ var _profile_components_ProfilePassword__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/profile/components/ProfilePassword.jsx");
/* harmony import */ var _profile_components_ProfileAddress__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/profile/components/ProfileAddress.jsx");
/* harmony import */ var _CarouselImages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../client/src/modules/admin/components/CarouselImages/index.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../client/src/modules/admin/components/Menu.jsx");
/* harmony import */ var _profile_components_ManageSpecs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../client/src/modules/profile/components/ManageSpecs.jsx");
/* harmony import */ var _Seo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../client/src/modules/admin/components/Seo/index.js");
/* harmony import */ var _Locations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../client/src/modules/admin/components/Locations/index.js");
/* harmony import */ var _profile_styles_profile_view_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../client/src/modules/profile/styles/profile-view.scss");
/* harmony import */ var _profile_styles_profile_view_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_profile_styles_profile_view_scss__WEBPACK_IMPORTED_MODULE_19__);














// import ManageCarousel from '../../profile/components/ManageCarousel';









// import ProfileView from '../../profile/containers/Profile';

var renderMetaData = function renderMetaData() {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_8___default.a, {
    title: 'Admin',
    meta: [{
      name: 'description',
      content: 'Admin page'
    }]
  });
};
var adminViews = [
// { view: 'manageAdmins', component: ManageAdmins },
{ view: 'manageCarousel', component: _CarouselImages__WEBPACK_IMPORTED_MODULE_14__["default"] }, { view: 'manageSpecs', component: _profile_components_ManageSpecs__WEBPACK_IMPORTED_MODULE_16__["default"] }, { view: 'manageSeo', component: _Seo__WEBPACK_IMPORTED_MODULE_17__["default"] }, { view: 'manageLocations', component: _Locations__WEBPACK_IMPORTED_MODULE_18__["default"] }];

var AdminView = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(AdminView, _React$Component);

  function AdminView(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, AdminView);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (AdminView.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(AdminView)).call(this, props));

    _this.changeView = function (selectedView) {
      return _this.setState({ currentView: selectedView });
    };

    _this.handleProductSelect = function (e) {
      return _this.setState({ selectedProduct: e.target.value });
    };

    _this.renderAdminView = function (viewList) {
      if (!Object(_profile_components_ProfileMenu__WEBPACK_IMPORTED_MODULE_10__["isAdminVerified"])(_this.props)) return null;
      var currentView = _this.state.currentView;

      var _viewList$filter = viewList.filter(function (v) {
        return v.view === currentView;
      }),
          _viewList$filter2 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_viewList$filter, 1),
          selectedView = _viewList$filter2[0];

      if (!selectedView) return null;
      var Component = selectedView.component;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Component, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.state, _this.props));
    };

    _this.state = {
      currentView: 'manageSeo'
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(AdminView, [{
    key: 'render',
    value: function render() {
      var currentView = this.state.currentView;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _AdminLayout__WEBPACK_IMPORTED_MODULE_9__["default"],
        null,
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          'div',
          { className: 'profile-view' },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            'aside',
            { className: 'profile-view__sidebar' },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_15__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.state, this.props, { changeView: this.changeView }))
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            'section',
            { className: 'profile-view__content' },
            currentView === 'dashboard' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_profile_components_ProfileOverview__WEBPACK_IMPORTED_MODULE_11__["default"], null) : null,
            this.renderAdminView(adminViews)
          )
        )
      );
    }
  }]);

  return AdminView;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AdminView);

/***/ }),

/***/ "../client/src/modules/admin/components/CarouselImages/ImageAdapter.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/core-js/map");
/* harmony import */ var babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("ramda");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _graphql_S3Upload_graphql__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../client/src/modules/admin/graphql/S3Upload.graphql");
/* harmony import */ var _graphql_S3Upload_graphql__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_graphql_S3Upload_graphql__WEBPACK_IMPORTED_MODULE_15__);











var _this3 = undefined;








var AWSImageAdapter = function AWSImageAdapter(WrappedComponent) {
  var WrappedImage = function (_Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(WrappedImage, _Component);

    function WrappedImage() {
      var _this2 = this;

      babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default()(this, WrappedImage);

      var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default()(this, (WrappedImage.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5___default()(WrappedImage)).call(this));

      _this.uploadToS3 = function () {
        var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(signedRequest, file) {
          var options;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  options = {
                    headers: {
                      'Content-Type': '"' + file.type + '"'
                    },
                    onUploadProgress: function (progressEvent) {
                      var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                      this.setState({ percentCompleted: percentCompleted });
                    }.bind(_this)
                  };
                  _context.next = 3;
                  return axios__WEBPACK_IMPORTED_MODULE_13___default.a.put(signedRequest, file, options);

                case 3:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }();

      _this.adaptFileEventToValue = function (delegate) {
        return function () {
          var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee4(e) {
            var files, signS3, image_data, getFileNameAndType, response, updatedImageData;
            return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    files = e.target.files;
                    signS3 = _this.props.signS3;
                    image_data = new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_2___default.a();

                    getFileNameAndType = function getFileNameAndType(file) {
                      return Object(ramda__WEBPACK_IMPORTED_MODULE_14__["pick"])(['name', 'type'], file);
                    };

                    response = function () {
                      var _ref3 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(signS3, _ref4) {
                        var name = _ref4.name,
                            type = _ref4.type;
                        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                _context2.next = 2;
                                return signS3(name, type);

                              case 2:
                                return _context2.abrupt('return', _context2.sent);

                              case 3:
                              case 'end':
                                return _context2.stop();
                            }
                          }
                        }, _callee2, _this2);
                      }));

                      return function response(_x4, _x5) {
                        return _ref3.apply(this, arguments);
                      };
                    }();

                    if (files.length !== 0 && typeof files !== 'undefined') {
                      updatedImageData = void 0;
                      // TODO THIS FOREACH BIZ SUCKS WE ARE HAVING TO SET STATE WAY TO MUCH IN THIS LOOP
                      // BUT PLACING SETSTATE AFTER FOREACH FIRES BEFORE UPDATED IMAGEMAP IS CREATED

                      Object(ramda__WEBPACK_IMPORTED_MODULE_14__["forEach"])(function () {
                        var _ref5 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3(file) {
                          var _getFileNameAndType, name, res, _res$data$signS, signedRequest, url, currentImageSize, fileIndex;

                          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  // NOTE JUST need to update the state and then map the urls down on the preview component
                                  _getFileNameAndType = getFileNameAndType(file), name = _getFileNameAndType.name;
                                  _context3.next = 3;
                                  return response(signS3, getFileNameAndType(file));

                                case 3:
                                  res = _context3.sent;
                                  _res$data$signS = res.data.signS3, signedRequest = _res$data$signS.signedRequest, url = _res$data$signS.url;
                                  _context3.next = 7;
                                  return _this.uploadToS3(signedRequest, file);

                                case 7:
                                  currentImageSize = _this.state.image_data.size;
                                  fileIndex = currentImageSize === 0 ? 0 : currentImageSize;
                                  // indexOf(file, values(files));

                                  image_data.set('image_url-' + fileIndex, { name: name, url: url });
                                  updatedImageData = new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_2___default.a([].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(_this.state.image_data), babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(image_data)));
                                  _this.setState({ image_data: updatedImageData });
                                  delegate(url);

                                case 13:
                                case 'end':
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, _this2);
                        }));

                        return function (_x6) {
                          return _ref5.apply(this, arguments);
                        };
                      }(), Object(ramda__WEBPACK_IMPORTED_MODULE_14__["values"])(files));
                    }

                  case 6:
                  case 'end':
                    return _context4.stop();
                }
              }
            }, _callee4, _this2);
          }));

          return function (_x3) {
            return _ref2.apply(this, arguments);
          };
        }();
      };

      _this.handleReorder = function (reOrderedImages) {
        _this.setState({ image_data: reOrderedImages });
      };

      _this.state = {
        percentCompleted: 0,
        urlPreview: null,
        image_data: new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_2___default.a()
      };
      return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(WrappedImage, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var images = this.props.images;

        this.setState({ image_data: new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_2___default.a([].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(images))) });
      }
    }, {
      key: 'render',
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(WrappedComponent, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          adaptFileEventToValue: this.adaptFileEventToValue,
          percentCompleted: this.state.percentCompleted,
          urlPreview: this.state.urlPreview,
          fileName: this.state.fileName,
          imageData: this.state.image_data,
          handleImageReorder: this.handleReorder
        }, this.props));
      }
    }]);

    return WrappedImage;
  }(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

  WrappedImage.propTypes = {
    signS3: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func,
    images: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object
  };
  var testingImageData = new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_2___default.a();
  testingImageData.set('image_url-0', {
    name: 'product_shot_ft2',
    url: 'https://rcomm.s3.amazonaws.com/ft2_product_shot.png'
  });
  testingImageData.set('image_url-1', {
    name: 'product_shot_ft2V2',
    url: 'https://rcomm.s3.amazonaws.com/ft2_product_shot.png'
  });
  testingImageData.set('image_url-2', {
    name: 'product_shot_ft2V3',
    url: 'https://rcomm.s3.amazonaws.com/ft2_product_shot.png'
  });
  testingImageData.set('image_url-3', {
    name: 'product_shot_ft2V4',
    url: 'https://rcomm.s3.amazonaws.com/ft2_product_shot.png'
  });
  WrappedImage.defaultProps = {
    // images: testingImageData
  };
  return Object(react_apollo__WEBPACK_IMPORTED_MODULE_11__["compose"])(Object(react_apollo__WEBPACK_IMPORTED_MODULE_11__["graphql"])(_graphql_S3Upload_graphql__WEBPACK_IMPORTED_MODULE_15___default.a, {
    props: function props(_ref6) {
      var mutate = _ref6.mutate;
      return {
        signS3: function () {
          var _ref7 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee5(filename, filetype) {
            var response;
            return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return mutate({
                      variables: {
                        filename: filename,
                        filetype: filetype
                      }
                    });

                  case 2:
                    response = _context5.sent;
                    return _context5.abrupt('return', response);

                  case 4:
                  case 'end':
                    return _context5.stop();
                }
              }
            }, _callee5, _this3);
          }));

          return function signS3(_x7, _x8) {
            return _ref7.apply(this, arguments);
          };
        }()
      };
    }
  }))(WrappedImage);
};

/* harmony default export */ __webpack_exports__["default"] = (AWSImageAdapter);

/***/ }),

/***/ "../client/src/modules/admin/components/CarouselImages/ImagePreview.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/core-js/array/from");
/* harmony import */ var babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);





var ImagePreview = function ImagePreview(props) {
  var images = props.images,
      handleDragStart = props.handleDragStart,
      handleDragEnter = props.handleDragEnter,
      handleDragOver = props.handleDragOver,
      handleDragLeave = props.handleDragLeave,
      handleDragEnd = props.handleDragEnd,
      handleDrop = props.handleDrop,
      removeImage = props.removeImage;

  return (
    // <div className="admin__container">
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      'div',
      { className: 'admin__images' },
      babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(images.entries()).map(function (entry, idx) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'div',
          {
            id: entry[0],
            key: entry[0],
            className: 'admin__images--item',
            draggable: 'true',
            onDragStart: handleDragStart,
            onDragEnd: handleDragEnd,
            onDragEnter: handleDragEnter,
            onDragOver: handleDragOver,
            onDragLeave: handleDragLeave,
            onDrop: handleDrop
          },
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('img', {
            className: 'admin__images--image'
            // id={entry[0]}
            , draggable: 'false',
            src: entry[1].url,
            alt: entry[1].name
          }),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'div',
            { className: 'admin__images--image--info' },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'span',
              { className: 'admin__images--image--position', draggable: 'false' },
              'Image Position: ',
              idx
            ),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'span',
              { className: 'admin__images--image--name', draggable: 'false' },
              'File Name: ',
              entry[1].name
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'div',
            { className: 'admin__btn--container' },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'button',
              { className: 'admin__btn--remove', onClick: function onClick() {
                  return removeImage(entry[0]);
                } },
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdCancel"], { size: 30, className: 'admin__btn--cancel', color: '#DB3A34' })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', { className: 'admin__images--spacer' })
        );
      })
    )
    // {/* <div id="upload-bar" className="upload-progress">
    //   <div className="upload-bar">0%</div>
    // </div> */}

    // </div>

  );
};
ImagePreview.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  handleDragStart: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  handleDragEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  handleDragOver: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  handleDragLeave: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  handleDrop: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  handleDragEnd: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (ImagePreview);

/***/ }),

/***/ "../client/src/modules/admin/components/CarouselImages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/core-js/json/stringify");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/slicedToArray");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("babel-runtime/core-js/map");
/* harmony import */ var babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("ramda");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _graphql_PageQuery_graphql__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../client/src/modules/admin/graphql/PageQuery.graphql");
/* harmony import */ var _graphql_PageQuery_graphql__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_graphql_PageQuery_graphql__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _ImagePreview__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../client/src/modules/admin/components/CarouselImages/ImagePreview.jsx");
/* harmony import */ var _ImageAdapter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../client/src/modules/admin/components/CarouselImages/ImageAdapter.jsx");
/* harmony import */ var _styles_carousel_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../client/src/modules/admin/styles/carousel.scss");
/* harmony import */ var _styles_carousel_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_styles_carousel_scss__WEBPACK_IMPORTED_MODULE_20__);




















// import ImageUploader from './ImageUploader';





var uploadToS3 = function uploadToS3() {
  return;
};

var Carousel = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11___default()(Carousel, _React$Component);

  function Carousel(props) {
    var _this2 = this;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, Carousel);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10___default()(this, (Carousel.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default()(Carousel)).call(this, props));

    _this.initializeView = function () {
      var page_content = _this.state.page_content;
      var pages = _this.props.pages;

      var page = pages[0];
      if (_this.props.page) {
        var fields = _this.props.page.fields;

        var rootFields = fields[0];
        var content = page_content.content;

        var fieldsToUpdate = content[0];
        var transformImages = new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default.a([].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(JSON.parse(rootFields.field_value).images)));

        var updatedFields = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, fieldsToUpdate, {
          field_value: babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, JSON.parse(rootFields.field_value), { images: transformImages })
        });
        _this.setState({
          loaded: true,
          images: transformImages,
          page_content: babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, page_content, { page_id: parseInt(page.id), content: [updatedFields] })
        });
      }
      var percentCompleted = _this.state.percentCompleted;
      // if (percentCompleted > 0) {
      //   this.updateProgress(percentCompleted);
      // }

      if (percentCompleted == 0 || percentCompleted == 100) {
        var elem = document.getElementById('upload-bar');
        elem.style.visibility = 'hidden';
        return;
      }
    };

    _this.imageToState = function (images) {
      _this.setState({
        images: images
      });
    };

    _this.updateProgress = function (percent) {
      var elem = document.getElementById('upload-bar');
      elem.style.visibility = 'visible';
      elem.style.width = percent + '%';
      elem.innerHTML = percent * 1 + '%';
    };

    _this.handleDragStart = function (e) {
      e.dataTransfer.setData('text', e.currentTarget.id);
      e.dataTransfer.dropEffect = 'move';
      _this.setState({ mouseY: e.clientY });
    };

    _this.handleDragEnter = function (e) {
      e.preventDefault();
      var target = e.target;
      if (target.parentElement.className === 'drag-drop-item') target = e.target.parentNode;
      target.style.borderTop = '1px solid red';
    };

    _this.handleDragOver = function (e) {
      return e.preventDefault();
    };

    _this.handleDrop = function (e) {
      // NOTE used currentTarget as it seemed to pick up the div much easier
      // also used clientY prop from event object to determine if we are draggin item upward

      e.preventDefault();
      var dataToDrop = e.dataTransfer.getData('text');
      var dataEl = document.getElementById(dataToDrop);
      var target = e.currentTarget;
      target.style.borderTop = 'none';
      e.target.style.borderTop = 'none';
      // NOTE: we are pulling from the top item in list no element above
      if (!dataEl.previousElementSibling) {
        return target.insertAdjacentElement('afterend', dataEl);
      }
      if (dataEl.previousElementSibling && target.nextElementSibling) {
        var oldY = _this.state.mouseY;
        var newY = e.clientY;
        if (oldY > newY) {
          return target.insertAdjacentElement('beforebegin', dataEl);
        }
        return target.insertAdjacentElement('afterend', dataEl);
      }

      // NOTE we are trying to drop in the last position so we should insert above the target
      if (!target.nextElementSibling) {
        return target.insertAdjacentElement('afterend', dataEl);
      }
    };

    _this.handleDragEnd = function (e) {
      var imageNodeList = e.target.parentNode.children;
      var imagesArray = Array.prototype.slice.call(imageNodeList);
      var imageMap = new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default.a();
      imagesArray.map(function (node) {
        imageMap.set(node.id, _this.state.images.get(node.id));
      });
      // needed? NOTE YES THIS IS NEEDED TO THE IMAGE ADAPTER CAN UPDATE ITS INTERNAL
      // TRACK OF WHAT THE IMAGE ORDER
      _this.handleReorder(imageMap);
    };

    _this.handleDragLeave = function (e) {
      e.target.style.borderTop = 'none';
      e.target.parentNode.borderTop = 'none';
    };

    _this.handleReorder = function (reOrderedImages) {
      _this.setState({ images: reOrderedImages });
    };

    _this.removeImage = function (key) {
      var currentImages = new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default.a([].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(_this.state.images)));
      currentImages.delete(key);
      _this.setState({ images: currentImages });
    };

    _this.uploadToS3 = function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(signedRequest, file) {
        var options;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = {
                  headers: {
                    'Content-Type': '"' + file.type + '"'
                  },
                  onUploadProgress: function (progressEvent) {
                    var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                    this.setState({ percentCompleted: percentCompleted });
                  }.bind(_this)
                };
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_15___default.a.put(signedRequest, file, options);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.adaptFileEventToValue = function (delegate) {
      return function () {
        var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(e) {
          var files, signS3, image_data, getFileNameAndType, response, updatedImageData;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  files = e.target.files;
                  signS3 = _this.props.signS3;
                  image_data = new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default.a();

                  getFileNameAndType = function getFileNameAndType(file) {
                    return Object(ramda__WEBPACK_IMPORTED_MODULE_16__["pick"])(['name', 'type'], file);
                  };

                  response = function () {
                    var _ref3 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(signS3, _ref4) {
                      var name = _ref4.name,
                          type = _ref4.type;
                      return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.next = 2;
                              return signS3(name, type);

                            case 2:
                              return _context2.abrupt('return', _context2.sent);

                            case 3:
                            case 'end':
                              return _context2.stop();
                          }
                        }
                      }, _callee2, _this2);
                    }));

                    return function response(_x4, _x5) {
                      return _ref3.apply(this, arguments);
                    };
                  }();

                  if (files.length !== 0 && typeof files !== 'undefined') {
                    updatedImageData = void 0;
                    // TODO THIS FOREACH BIZ SUCKS WE ARE HAVING TO SET STATE WAY TO MUCH IN THIS LOOP
                    // BUT PLACING SETSTATE AFTER FOREACH FIRES BEFORE UPDATED IMAGEMAP IS CREATED

                    Object(ramda__WEBPACK_IMPORTED_MODULE_16__["forEach"])(function () {
                      var _ref5 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(file) {
                        var _getFileNameAndType, name, res, _res$data$signS, signedRequest, url, currentImageSize, fileIndex;

                        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                // NOTE JUST need to update the state and then map the urls down on the preview component
                                _getFileNameAndType = getFileNameAndType(file), name = _getFileNameAndType.name;
                                _context3.next = 3;
                                return response(signS3, getFileNameAndType(file));

                              case 3:
                                res = _context3.sent;
                                _res$data$signS = res.data.signS3, signedRequest = _res$data$signS.signedRequest, url = _res$data$signS.url;
                                _context3.next = 7;
                                return _this.uploadToS3(signedRequest, file);

                              case 7:
                                currentImageSize = _this.state.images.size;
                                fileIndex = currentImageSize === 0 ? 0 : currentImageSize;
                                // indexOf(file, values(files));

                                image_data.set('image_url-' + fileIndex, { name: name, url: url });
                                updatedImageData = new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default.a([].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(_this.state.images), babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(image_data)));
                                _this.setState({ images: updatedImageData });
                                delegate(url);

                              case 13:
                              case 'end':
                                return _context3.stop();
                            }
                          }
                        }, _callee3, _this2);
                      }));

                      return function (_x6) {
                        return _ref5.apply(this, arguments);
                      };
                    }(), Object(ramda__WEBPACK_IMPORTED_MODULE_16__["values"])(files));
                  }

                case 6:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this2);
        }));

        return function (_x3) {
          return _ref2.apply(this, arguments);
        };
      }();
    };

    _this.handleChecked = function () {
      _this.setState({ carouselStatus: !_this.state.carouselStatus });
    };

    _this.saveCarouselContent = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5() {
      var page_content, _page_content$content, content, field_value, updatedContent, pageData, _ref7, _ref8, data, _JSON$parse, images, carouselActive;

      return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              page_content = _this.state.page_content;
              _page_content$content = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(page_content.content, 1), content = _page_content$content[0];
              field_value = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, { images: _this.state.images, carouselActive: _this.state.carouselStatus });
              updatedContent = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, content, { field_value: babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(field_value) });
              pageData = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, page_content, { content: [updatedContent] });
              _context5.prev = 5;
              _context5.next = 8;
              return _this.props.uploadContent(pageData);

            case 8:
              _ref7 = _context5.sent;
              _ref8 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref7, 1);
              data = _ref8[0];

              console.log('DATA:::', data);
              _JSON$parse = JSON.parse(data.field_value), images = _JSON$parse.images, carouselActive = _JSON$parse.carouselActive;

              console.log('IAMGES:::', images);
              _this.setState({ images: new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default.a([].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(images))), carouselStatus: carouselActive, saveSuccess: true });
              _context5.next = 20;
              break;

            case 17:
              _context5.prev = 17;
              _context5.t0 = _context5['catch'](5);

              console.log('ERRROR UPLOADING', _context5.t0);

            case 20:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this2, [[5, 17]]);
    }));

    _this.state = {
      loaded: false,
      percentCompleted: 0,
      carouselStatus: false,
      page_content: {
        page_id: null,
        content: [{
          section_name: 'hero',
          field_name: 'Carousel',
          field_label: 'carousel',
          field_type: 'Carousel',
          field_value: null
        }]
      },
      images: new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default.a()
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(Carousel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('CAROUSEL PROPS DID MOUNT', this.props.loadingPage);
      if (!this.props.loadingPage) {
        var pages = this.props.pages;

        var page = pages[0];
        var fields = this.props.page.fields;

        var rootFields = fields[0];
        var content = this.state.page_content.content;

        var fieldsToUpdate = content[0];
        var transformImages = new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_6___default.a([].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(JSON.parse(rootFields.field_value).images)));

        var updatedFields = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, fieldsToUpdate, {
          field_value: babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, JSON.parse(rootFields.field_value), { images: transformImages })
        });
        this.setState({
          loaded: true,
          images: transformImages,
          page_content: babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, this.state.page_content, {
            page_id: parseInt(page.id),
            content: [updatedFields]
          })
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _props = this.props,
          loadingPages = _props.loadingPages,
          loadingPage = _props.loadingPage,
          page = _props.page,
          pages = _props.pages;
      var _state = this.state,
          page_content = _state.page_content,
          loaded = _state.loaded;

      if (prevProps.loadingPages !== loadingPages || !loadingPages) {
        console.log('PREV LOADING PAGE', prevProps.page, 'PROPS PAGE', page);
        if (prevProps.page !== page && !prevState.loaded) {
          console.log('PAGE IS DIFF', loaded, prevState.loaded);
          return this.initializeView();
        } else if (!prevState.loaded && page) {
          return this.initializeView();
        }
        return;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log('CAROUSEL State::', this.state);
      // console.log('CAROUSEL PROPS:', this.props);
      var loadingPage = this.props.loadingPage;

      if (loadingPage) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
          'div',
          { className: 'admin' },
          react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
            'div',
            { className: 'admin__btn' },
            react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
              'button',
              { type: 'button', className: 'admin__btn--upload' },
              'Upload',
              react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('input', { style: { opacity: 0 }, onChange: this.adaptFileEventToValue(uploadToS3), type: 'file', multiple: true })
            ),
            react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
              'button',
              { className: 'admin__btn--save', onClick: this.saveCarouselContent },
              'Save'
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
            'div',
            { className: 'admin__carousel__toggle' },
            react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
              'span',
              null,
              'Carousel On/Off'
            ),
            react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
              'label',
              { className: 'admin__carousel__switch' },
              react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('input', { type: 'checkbox', checked: this.state.carouselStatus, onChange: this.handleChecked }),
              react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('span', { className: 'admin__carousel__slider admin__carousel__slider--round' })
            )
          )
        );
      }
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
        'div',
        { className: 'admin' },
        react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
          'div',
          { className: 'admin__btn' },
          react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
            'button',
            { type: 'button', className: 'admin__btn--upload' },
            'Upload',
            react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('input', { style: { opacity: 0 }, onChange: this.adaptFileEventToValue(uploadToS3), type: 'file', multiple: true })
          ),
          react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
            'button',
            { className: 'admin__btn--save', onClick: this.saveCarouselContent },
            'Save'
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
          'div',
          { className: 'admin__carousel__toggle' },
          react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
            'span',
            null,
            'Carousel On/Off'
          ),
          react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
            'label',
            { className: 'admin__carousel__switch' },
            react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('input', { type: 'checkbox', checked: this.state.carouselStatus, onChange: this.handleChecked }),
            react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('span', { className: 'admin__carousel__slider admin__carousel__slider--round' })
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_ImagePreview__WEBPACK_IMPORTED_MODULE_18__["default"], {
          images: this.state.images,
          removeImage: this.removeImage,
          handleDragStart: this.handleDragStart,
          handleDragEnter: this.handleDragEnter,
          handleDrop: this.handleDrop,
          handleDragOver: this.handleDragOver,
          handleDragLeave: this.handleDragLeave,
          handleDragEnd: this.handleDragEnd,
          handleReorder: this.handleReorder
        }),
        react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
          'div',
          { id: 'upload-bar', className: 'upload-progress' },
          react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
            'div',
            { className: 'upload-bar' },
            '0%'
          )
        )
      );
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);

Carousel.propTypes = {
  loadingPages: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.bool,
  loadingPage: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.bool,
  fields: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.array,
  pages: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.array,
  uploadContent: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func
};
var CarouselWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_14__["compose"])(Object(react_apollo__WEBPACK_IMPORTED_MODULE_14__["graphql"])(_graphql_PageQuery_graphql__WEBPACK_IMPORTED_MODULE_17___default.a, {
  options: function options() {
    return { variables: { pageTitle: 'Home', fieldNames: [['hero', 'images'], ['hero', 'carouselActive']] } };
  },
  props: function props(_ref9) {
    var data = _ref9.data;

    // console.log('WHY IS THIS NOT RUNNING::', data);
    var page = data.page,
        loadingPage = data.loading,
        error = data.error;

    if (loadingPage && !error) {
      return { loadingPage: loadingPage, page: null };
    } else {
      return { page: page, loadingPage: loadingPage };
    }
  }
}))(Carousel);
/* harmony default export */ __webpack_exports__["default"] = (Object(_ImageAdapter__WEBPACK_IMPORTED_MODULE_19__["default"])(CarouselWithApollo));

/***/ }),

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
                console.log('ACTIONS::', actions);
                _context.next = 4;
                return props.updateDealer(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6___default()({
                  name: name,
                  handle: name.split(' ').join('-').toLowerCase()
                }, values));

              case 4:
                dealer = _context.sent;

                // props.handleInitialLocation(dealer.name);
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

/***/ "../client/src/modules/admin/components/Menu.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAdminVerified", function() { return isAdminVerified; });
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _profile_styles_profile_menu_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../client/src/modules/profile/styles/profile-menu.scss");
/* harmony import */ var _profile_styles_profile_menu_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_profile_styles_profile_menu_scss__WEBPACK_IMPORTED_MODULE_9__);







// import Helmet from 'react-helmet';


// import {  } from '../../common/components/global';
// import settings from '../../../../../../settings';


var isAdminVerified = function isAdminVerified(props) {
  var currentUser = props.currentUser;

  if (currentUser) {
    var hasKeys = ['id', 'role', 'email'].every(function (el) {
      return currentUser.hasOwnProperty(el) && currentUser[el];
    });
    if (hasKeys && currentUser.role === 'admin') return true;
  }
  return false;
};

var ProfileMenu = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ProfileMenu, _React$Component);

  function ProfileMenu() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ProfileMenu);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (ProfileMenu.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(ProfileMenu)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ProfileMenu, [{
    key: 'render',
    value: function render() {
      // const {  } = this.state;
      var _props = this.props,
          currentView = _props.currentView,
          changeView = _props.changeView;
      // TODO: Hide manage links when not admin

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'nav',
        { className: 'profile-menu' },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'ul',
          { className: 'profile-menu__list' },
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            'li',
            { className: 'profile-menu__list-item' },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              'button',
              {
                className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('profile-menu__button', {
                  'profile-menu__button--active': currentView === 'dashboard'
                }),
                onClick: function onClick() {
                  return changeView('dashboard');
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_8__["MdPerson"], { className: 'profile-menu__icon' }),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'span',
                { className: 'profile-menu__text' },
                'Dashboard'
              )
            )
          ),
          isAdminVerified(this.props) ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            'li',
            { className: 'profile-menu__list-item' },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              'button',
              {
                className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('profile-menu__button', {
                  'profile-menu__button--active': currentView === 'manageCarousel'
                }),
                onClick: function onClick() {
                  return changeView('manageCarousel');
                }
                // disabled
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_8__["MdImage"], { className: 'profile-menu__icon' }),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'span',
                { className: 'profile-menu__text' },
                'Manage Image Carousel'
              )
            )
          ) : null,
          isAdminVerified(this.props) ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            'li',
            { className: 'profile-menu__list-item' },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              'button',
              {
                className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('profile-menu__button', {
                  'profile-menu__button--active': currentView === 'manageSpecs'
                }),
                onClick: function onClick() {
                  return changeView('manageSpecs');
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_8__["MdList"], { className: 'profile-menu__icon' }),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'span',
                { className: 'profile-menu__text' },
                'Manage Product Specifications'
              )
            )
          ) : null,
          isAdminVerified(this.props) ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            'li',
            { className: 'profile-menu__list-item' },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              'button',
              {
                className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('profile-menu__button', {
                  'profile-menu__button--active': currentView === 'manageSeo'
                }),
                onClick: function onClick() {
                  return changeView('manageSeo');
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_8__["MdList"], { className: 'profile-menu__icon' }),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'span',
                { className: 'profile-menu__text' },
                'Manage Seo'
              )
            )
          ) : null,
          isAdminVerified(this.props) ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            'li',
            { className: 'profile-menu__list-item' },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              'button',
              {
                className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('profile-menu__button', {
                  'profile-menu__button--active': currentView === 'manageLocations'
                }),
                onClick: function onClick() {
                  return changeView('manageLocations');
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_8__["MdList"], { className: 'profile-menu__icon' }),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'span',
                { className: 'profile-menu__text' },
                'Manage Locations'
              )
            )
          ) : null
        )
      );
    }
  }]);

  return ProfileMenu;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

ProfileMenu.propTypes = {
  currentView: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  changeView: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
ProfileMenu.defaultProps = {};

/* harmony default export */ __webpack_exports__["default"] = (ProfileMenu);

/***/ }),

/***/ "../client/src/modules/admin/components/Nav.jsx":
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles_navbar_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/admin/styles/navbar.scss");
/* harmony import */ var _styles_navbar_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_scss__WEBPACK_IMPORTED_MODULE_13__);





/*eslint-disable no-undef*/









// import { DELETE_TOKEN, CUSTOMER_QUERY, LOGOUT_ADMIN, CURRENT_USER_QUERY } from '../../../schema';


var NavAccountBtns = function NavAccountBtns(_ref) {
  var isLoggedIn = _ref.isLoggedIn,
      customer = _ref.customer;

  if (typeof customer === 'undefined') return null;
  return isLoggedIn ?
  // <button className="navbar__trigger-item navbar__trigger-item--profile" onClick={() => signOut()}>
  //   <MdPersonOutline size="1.5em" className="navbar__trigger-item-icon" />
  //   Sign Out
  // </button>
  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
    react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"],
    { className: 'navbar__trigger-item navbar__trigger-item--profile', to: '/profile' },
    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_12__["MdPersonOutline"], { size: '1.5em', className: 'navbar__trigger-item-icon' }),
    'Profile'
  ) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
    react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"],
    { className: 'navbar__trigger-item navbar__trigger-item--profile', to: '/signin' },
    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_12__["MdPersonOutline"], { size: '1.5em', className: 'navbar__trigger-item-icon' }),
    'Sign In'
  );
};

NavAccountBtns.propTypes = {
  isLoggedIn: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  customer: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object
  // signOut: PropTypes.func
};

var NavBar = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(NavBar, _React$Component);

  function NavBar() {
    var _ref2;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, NavBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_ref2 = NavBar.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(NavBar)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      hamburgerIsOpen: false,
      height: null,
      width: null
    }, _this.saveRef = function (ref) {
      return _this.containerNode = ref;
    }, _this.measureNavBar = function () {
      var _this$containerNode = _this.containerNode,
          clientWidth = _this$containerNode.clientWidth,
          clientHeight = _this$containerNode.clientHeight;

      _this.setState({
        width: clientWidth,
        height: clientHeight
      });
    }, _this.toggleHamburger = function () {
      return _this.setState({ hamburgerIsOpen: !_this.state.hamburgerIsOpen });
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(NavBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.measureNavBar();
      if (typeof window !== 'undefined') {
        window.addEventListener('resize', this.measureNavBar, false);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.measureNavBar, false);
    }
    // signOut = async () => {
    //   if (typeof window !== 'undefined') {
    //     await this.props.deleteRemoteToken();
    //     await this.props.refetch({ customerAccessToken: '' });
    //     await this.props.logoutAdmin();
    //
    //     const { location, history } = this.props;
    //     if (location.pathname.includes('/profile')) {
    //       history.push('/signin');
    //     }
    //   }
    // };

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          appName = _props.appName,
          navbarLinks = _props.navbarLinks,
          logoImage = _props.logoImage,
          toggleCart = _props.toggleCart,
          cartQty = _props.cartQty,
          customer = _props.customer,
          customerError = _props.customerError;
      var _state = this.state,
          hamburgerIsOpen = _state.hamburgerIsOpen,
          width = _state.width;


      var isLoggedIn = false;
      if (!customerError && customer && customer.hasOwnProperty('email') && customer.email) {
        isLoggedIn = true;
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'nav',
        { ref: this.saveRef, className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('admin__navbar') },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'div',
          { className: 'admin__navbar__header' },
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"],
            { to: '/', className: 'admin__navbar__logo-link' },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('img', { src: width >= 1109 ? logoImage.linkLarge : logoImage.linkSmall, alt: 'California Home Fitness' })
          )
        )
      );
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
//
// const NavBarWithApollo = compose(
//   CURRENT_USER_QUERY(),
//   CUSTOMER_QUERY('network-only'),
//   DELETE_TOKEN(),
//   LOGOUT_ADMIN()
// )(NavBar);

NavBar.propTypes = {
  appName: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  navbarLinks: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
  logoImage: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  toggleCart: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  cartQty: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  customer: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  customerError: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object
  // deleteRemoteToken: PropTypes.func,
  // refetch: PropTypes.func,
  // logoutAdmin: PropTypes.func
};
NavBar.defaultProps = {
  logoImage: {
    name: 'California Home Fitness',
    linkLarge: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo_chf.png',
    linkSmall: 'https://s3-us-west-2.amazonaws.com/chf-rcomm/logo_chf-icon.svg'
  },
  navbarLinks: [{ title: 'Dashboard', location: '/admin/dashboard' }]
};

// const NavBarWithRedux = connect(
//   state => {
//     return { cartQty: state.cart.cartQty };
//   },
//   dispatch => ({ toggleCart: () => dispatch(toggleCart()) })
// )(NavBar);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(NavBar));

/***/ }),

/***/ "../client/src/modules/admin/components/Seo/SeoForm.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);




var _this = undefined;




var SeoForm = function SeoForm(props) {
  var seo = props.seo,
      validateAll = props.validateAll,
      uploadSeo = props.uploadSeo,
      uploadSeoContent = props.uploadSeoContent,
      selectedProduct = props.selectedProduct,
      selectedBrand = props.selectedBrand,
      selectedCollection = props.selectedCollection,
      selectedCategory = props.selectedCategory,
      valuesAvailable = props.valuesAvailable;

  console.log('SELECTED SEO', seo);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    enableReinitialize: true,
    initialValues: {
      title: seo ? seo.title : '',
      description: seo ? seo.description : '',
      keywords: seo ? seo.keywords : ''
    },
    validateOnBlur: true,
    validate: validateAll,
    validateOnChange: false,
    onSubmit: function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, actions) {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.t0 = selectedCategory;
                _context.next = _context.t0 === 'products' ? 4 : _context.t0 === 'brands' ? 7 : _context.t0 === 'collections' ? 10 : 13;
                break;

              case 4:
                _context.next = 6;
                return uploadSeoContent(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({ handle: selectedProduct }, values));

              case 6:
                return _context.abrupt('break', 14);

              case 7:
                _context.next = 9;
                return uploadSeo({ path: 'vendor', handle: selectedBrand, seo: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, values) });

              case 9:
                return _context.abrupt('break', 14);

              case 10:
                _context.next = 12;
                return uploadSeo({ path: 'collection', handle: selectedCollection, seo: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, values) });

              case 12:
                return _context.abrupt('break', 14);

              case 13:
                return _context.abrupt('return');

              case 14:
                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t1 = _context['catch'](0);

                console.log('ERROR:', _context.t1);

              case 19:
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

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 16]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }(),
    render: function render(_ref2) {
      var errors = _ref2.errors,
          status = _ref2.status,
          touched = _ref2.touched,
          isSubmitting = _ref2.isSubmitting,
          isValid = _ref2.isValid;

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
        formik__WEBPACK_IMPORTED_MODULE_4__["Form"],
        { className: 'admin__form__seo' },
        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
          'div',
          { className: 'admin__form__seo--field' },
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'title', placeholder: 'Title' }),
          errors.title && touched.title && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.title
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
          'div',
          { className: 'admin__form__seo--field' },
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
            component: 'textarea',
            className: 'admin__form__seo--input',
            name: 'description',
            placeholder: 'Description'
          }),
          errors.description && errors.description && touched.description && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.description
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
          'div',
          { className: 'admin__form__seo--field' },
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], { className: 'admin__form__seo--input', type: 'text', name: 'keywords', placeholder: 'Keywords' }),
          errors.keywords && errors.keywords && touched.keywords && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            'div',
            { className: 'admin__form__seo--error' },
            errors.keywords
          )
        ),
        status && status.msg && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
          'div',
          { className: 'admin__form__seo--status' },
          status.msg
        ),
        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
          'button',
          { type: 'submit', disabled: isSubmitting },
          'Submit'
        )
      );
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (SeoForm);

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
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("babel-runtime/core-js/map");
/* harmony import */ var babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_AdminView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../client/src/modules/admin/components/AdminView.web.jsx");
/* harmony import */ var _graphql_PagesQuery_graphql__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../client/src/modules/admin/graphql/PagesQuery.graphql");
/* harmony import */ var _graphql_PagesQuery_graphql__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_graphql_PagesQuery_graphql__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _graphql_UploadContent_graphql__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../client/src/modules/admin/graphql/UploadContent.graphql");
/* harmony import */ var _graphql_UploadContent_graphql__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_graphql_UploadContent_graphql__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../client/src/modules/admin/graphql/SimplePageQuery.graphql");
/* harmony import */ var _graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../client/src/modules/admin/graphql/Dealers.graphql");
/* harmony import */ var _graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../client/src/modules/admin/graphql/DealerQuery.graphql");
/* harmony import */ var _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../client/src/modules/admin/graphql/UpdateDealer.graphql");
/* harmony import */ var _graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_18__);











var _this2 = undefined;

/*eslint-disable no-unused-vars*/











var Admin = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(Admin, _React$Component);

  function Admin(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default()(this, Admin);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default()(this, (Admin.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5___default()(Admin)).call(this, props));

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
      images: new babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_4___default.a()
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(Admin, [{
    key: 'render',
    value: function render() {
      console.log('The props::::', this.props);
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_AdminView__WEBPACK_IMPORTED_MODULE_12__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, this.props, { save: this.save }));
    }
  }]);

  return Admin;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

Admin.defaultProps = {
  images: []
};
var AdminWithApollo = Object(react_apollo__WEBPACK_IMPORTED_MODULE_11__["compose"])(Object(react_apollo__WEBPACK_IMPORTED_MODULE_11__["graphql"])(_graphql_PagesQuery_graphql__WEBPACK_IMPORTED_MODULE_13___default.a, {
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
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_11__["graphql"])(_graphql_UploadContent_graphql__WEBPACK_IMPORTED_MODULE_14___default.a, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      uploadContent: function () {
        var _ref3 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref4) {
          var page_id = _ref4.page_id,
              content = _ref4.content;

          var _ref5, uploadPageContent;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
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
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_11__["graphql"])(_graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_17___default.a, {
  options: function options(props) {
    return { variables: { handle: ' ' } };
  },
  props: function props(_ref6) {
    var data = _ref6.data;

    console.log('data', data);
    return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, data);
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_11__["graphql"])(_graphql_SimplePageQuery_graphql__WEBPACK_IMPORTED_MODULE_15___default.a, {
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
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_11__["graphql"])(_graphql_Dealers_graphql__WEBPACK_IMPORTED_MODULE_16___default.a, {
  options: function options() {
    return {
      variables: { first: 12, after: 0 }
    };
  },
  props: function props(_ref8) {
    var data = _ref8.data;

    console.log('DATA:::', data);
    var loading = data.loading,
        error = data.error,
        dealers = data.dealers;

    if (error) {
      console.log('DEALERS ERROR:::', error);
      return { dealersError: error };
    }
    if (loading) {
      return { loadingDealers: loading };
    }
    if (!loading && !error) {
      return { loadingDealers: loading, dealers: dealers };
    }
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_11__["graphql"])(_graphql_UpdateDealer_graphql__WEBPACK_IMPORTED_MODULE_18___default.a, {
  props: function props(_ref9) {
    var mutate = _ref9.mutate;
    return {
      updateDealer: function () {
        var _ref10 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(dealer) {
          var _ref11, updateDealer;

          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return mutate({
                    variables: { dealer: dealer }
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
  },
  options: {
    update: function update(proxy, _ref12) {
      var updateDealer = _ref12.data.updateDealer;

      try {
        console.log('UPDATE DEALER::', updateDealer);
        // console.log('OTHER PROXY READ::', other);
        var dealer = proxy.readQuery({ query: _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_17___default.a, variables: { handle: ' ' } });
        console.log('UPDATE DEALER:', dealer);
        var _dealer = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, dealer, updateDealer);
        console.log('THE NEW _DEALER::', _dealer);
        // proxy.writeQuery({
        //   query: DEALER_BY_HANDLE_QUERY,
        //   data:
        // });
        var test = proxy.readQuery({ query: _graphql_DealerQuery_graphql__WEBPACK_IMPORTED_MODULE_17___default.a, variables: { handle: 'west-hollywood' } });
        console.log('TEST:::', test);
        // const data = proxy.readQuery({ query: DEALERS_QUERY, variables: { first: 12, after: 0 } });
        // console.log('DATA::', data);
        // const _edges = data.dealers.edges;
        // const count = data.dealers.dealers_count;
        // const newCount = data.
        // proxy.writeQuery({
        //   query: DEALERS_QUERY,
        //   data: { dealers: { dealers_count: data.dealers.edges: [...data.dealers.edges, { node: updateDealer, cursor: 0 }] } }
        // });
        // console.log('Data::: on update::??', data);
      } catch (e) {
        console.log('EEE', e);
        // const data = proxy.writeQuery({ query: })
      }
    }
  }
}))(Admin);

/* harmony default export */ __webpack_exports__["default"] = (AdminWithApollo);

/***/ }),

/***/ "../client/src/modules/admin/graphql/CollectionSeoQuery.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"collectionSeo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"handle"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collectionData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"handle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"handle"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"seo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"handle"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"keywords"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":162}};
    doc.loc.source = {"body":"query collectionSeo($handle: String) {\n  collectionData(handle: $handle) {\n    id\n    seo {\n      handle\n      title\n      description\n      keywords\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports["collectionSeo"] = oneQuery(doc, "collectionSeo");
        


/***/ }),

/***/ "../client/src/modules/admin/graphql/CollectionsQuery.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"admin_collections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"100"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"admin_collections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"handle"},"arguments":[],"directives":[]}]}}]}}]}}]}}],"loc":{"start":0,"end":156}};
    doc.loc.source = {"body":"query admin_collections($first: Int = 100) {\n  admin_collections(first: $first) {\n    edges {\n      node {\n        title\n        handle\n      }\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports["admin_collections"] = oneQuery(doc, "admin_collections");
        


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


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"dealers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dealers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dealers_count"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"handle"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"dealer_info"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"end_cursor"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":246}};
    doc.loc.source = {"body":"\nquery dealers($first: Int, $after: Int) {\n  dealers(first: $first, after: $after) {\n    dealers_count\n    edges {\n      node {\n        id\n        handle\n      }\n      cursor\n    }\n    dealer_info {\n      hasNextPage\n      end_cursor\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports["dealers"] = oneQuery(doc, "dealers");
        


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

/***/ "../client/src/modules/admin/graphql/PagesQuery.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"pages"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":61}};
    doc.loc.source = {"body":"query pages {\n  pages {\n    id\n    title\n    name\n    \n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports["pages"] = oneQuery(doc, "pages");
        


/***/ }),

/***/ "../client/src/modules/admin/graphql/ProductSeoQuery.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"productData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"handle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"handle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"handle"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"keywords"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":138}};
    doc.loc.source = {"body":"query productData($handle: String!) {\n  productData(handle: $handle) {\n    seo {\n      title\n      description\n      keywords\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports["productData"] = oneQuery(doc, "productData");
        


/***/ }),

/***/ "../client/src/modules/admin/graphql/S3Upload.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signS3"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filename"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filetype"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signS3"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filename"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filename"}}},{"kind":"Argument","name":{"kind":"Name","value":"filetype"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filetype"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signedRequest"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":143}};
    doc.loc.source = {"body":"mutation signS3($filename: String!, $filetype: String!) {\n  signS3(filename: $filename, filetype: $filetype) {\n    signedRequest\n    url\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports["signS3"] = oneQuery(doc, "signS3");
        


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

/***/ "../client/src/modules/admin/graphql/UploadContent.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"uploadContent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageContent"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PageContentInput"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadPageContent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageContent"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageContent"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"section_name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"field_name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"field_label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"field_type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"field_value"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":191}};
    doc.loc.source = {"body":"mutation uploadContent($pageContent: PageContentInput) {\n  uploadPageContent(pageContent: $pageContent) {\n    section_name\n    field_name\n    field_label\n    field_type\n    field_value\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports["uploadContent"] = oneQuery(doc, "uploadContent");
        


/***/ }),

/***/ "../client/src/modules/admin/graphql/UploadSeo.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"uploadSeo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"handle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"seo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SeoInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadSeo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}},{"kind":"Argument","name":{"kind":"Name","value":"handle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"handle"}}},{"kind":"Argument","name":{"kind":"Name","value":"seo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seo"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"handle"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"keywords"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":183}};
    doc.loc.source = {"body":"mutation uploadSeo($path: String!, $handle: String!, $seo: SeoInput!) {\n  uploadSeo(path: $path, handle: $handle, seo: $seo) {\n    handle\n    title\n    description\n    keywords\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports["uploadSeo"] = oneQuery(doc, "uploadSeo");
        


/***/ }),

/***/ "../client/src/modules/admin/graphql/UploadSeoContent.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProductSeo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"seo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SeoInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProductSeo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"seo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seo"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"handle"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"keywords"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":133}};
    doc.loc.source = {"body":"mutation updateProductSeo($seo: SeoInput!) {\n  updateProductSeo(seo: $seo) {\n    handle\n    title\n    description\n    keywords\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports["updateProductSeo"] = oneQuery(doc, "updateProductSeo");
        


/***/ }),

/***/ "../client/src/modules/admin/graphql/VendorSeoQuery.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"vendorSeo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"handle"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vendorData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"handle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"handle"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"seo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"handle"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"keywords"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":154}};
    doc.loc.source = {"body":"query vendorSeo($handle: String) {\n  vendorData(handle: $handle) {\n    id\n    seo {\n      handle\n      title\n      description\n      keywords\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports["vendorSeo"] = oneQuery(doc, "vendorSeo");
        


/***/ }),

/***/ "../client/src/modules/admin/styles/carousel.scss":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/carousel.scss");
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
      module.hot.accept("../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/carousel.scss", function() {
        content = __webpack_require__("../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/carousel.scss");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "../client/src/modules/admin/styles/forms.scss":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/forms.scss");
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
      module.hot.accept("../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/forms.scss", function() {
        content = __webpack_require__("../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/forms.scss");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "../client/src/modules/admin/styles/main-layout.scss":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/main-layout.scss");
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
      module.hot.accept("../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/main-layout.scss", function() {
        content = __webpack_require__("../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/main-layout.scss");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "../client/src/modules/admin/styles/navbar.scss":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/navbar.scss");
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
      module.hot.accept("../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/navbar.scss", function() {
        content = __webpack_require__("../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/sass-loader/lib/loader.js?!../client/src/modules/admin/styles/navbar.scss");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "ramda":
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ })

};
//# sourceMappingURL=index.e97a20aab2036f37d4a7.js.map
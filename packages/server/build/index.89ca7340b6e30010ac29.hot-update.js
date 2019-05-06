require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/common/components/web/ui-bootstrap/components/Table.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);





var renderHead = function renderHead(columns) {
  return columns.map(function (_ref) {
    var title = _ref.title,
        dataIndex = _ref.dataIndex,
        renderHeader = _ref.renderHeader,
        key = _ref.key;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      'th',
      { key: key, className: 'w-' + (columns.length === 2 ? 100 : 100 / columns.length) },
      renderHeader ? renderHeader(title, dataIndex) : title
    );
  });
};

var renderBody = function renderBody(columns, dataSource) {
  console.log('DATASOURCE::', dataSource);
  return dataSource.map(function (entry) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      'tr',
      { key: entry.id },
      renderData(columns, entry)
    );
  });
};

var renderData = function renderData(columns, entry) {
  return columns.map(function (_ref2, idx) {
    var dataIndex = _ref2.dataIndex,
        render = _ref2.render,
        key = _ref2.key;

    // console.log('ENTRY::', entry, 'DATA INDEX::', dataIndex, entry[dataIndex][key]);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      'td',
      { key: key + idx },
      render ? render(entry[dataIndex][key], entry) : entry[dataIndex]
    );
  });
};

var Table = function Table(_ref3) {
  var dataSource = _ref3.dataSource,
      columns = _ref3.columns,
      props = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref3, ['dataSource', 'columns']);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    reactstrap__WEBPACK_IMPORTED_MODULE_3__["Table"],
    props,
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      'thead',
      null,
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        'tr',
        null,
        renderHead(columns)
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      'tbody',
      null,
      renderBody(columns, dataSource)
    )
  );
};

Table.propTypes = {
  dataSource: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  columns: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ })

};
//# sourceMappingURL=index.f09c807b62422ad9c051.js.map
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/gallery",{

/***/ "./src/components/ImageGallery.js":
/*!****************************************!*\
  !*** ./src/components/ImageGallery.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image */ \"./src/components/Image.js\");\n/* harmony import */ var _styles_ImageGallery_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/ImageGallery.module.scss */ \"./src/styles/ImageGallery.module.scss\");\n/* harmony import */ var _styles_ImageGallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_ImageGallery_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction ImageGallery(props) {\n    var grid = [];\n    for(var r = 0; r < props.rows; r++){\n        var row = [];\n        for(var c = 0; c < props.columns; c++){\n            row.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                size: props.type\n            }, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/ImageGallery.js\",\n                lineNumber: 13,\n                columnNumber: 5\n            }, this));\n        }\n        grid.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_ImageGallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().pictureRow),\n            children: row\n        }, void 0, false, {\n            fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/ImageGallery.js\",\n            lineNumber: 18,\n            columnNumber: 4\n        }, this));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: (_styles_ImageGallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().imageGalleryContainer),\n        children: grid\n    }, void 0, false, {\n        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/ImageGallery.js\",\n        lineNumber: 25,\n        columnNumber: 3\n    }, this);\n}\n_c = ImageGallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageGallery);\nvar _c;\n$RefreshReg$(_c, \"ImageGallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9JbWFnZUdhbGxlcnkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBQ0U7QUFDNEI7QUFFeEQsU0FBU0csYUFBY0MsS0FBSztJQUUzQixJQUFNQyxPQUFPLEVBQUU7SUFDZixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUYsTUFBTUcsSUFBSSxFQUFFRCxJQUFJO1FBQ3BDLElBQUlFLE1BQU0sRUFBRTtRQUVYLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJTCxNQUFNTSxPQUFPLEVBQUVELElBQUk7WUFDdENELElBQUlHLElBQUksZUFDUCw4REFBQ1YsOENBQUtBO2dCQUFDVyxNQUFNUixNQUFNUyxJQUFJOzs7Ozs7UUFFekI7UUFFQVIsS0FBS00sSUFBSSxlQUNSLDhEQUFDRztZQUFJQyxXQUFXYixvRkFBaUI7c0JBQUdNOzs7Ozs7SUFFdEM7SUFJQSxxQkFDQyw4REFBQ007UUFBSUcsSUFBSWYsK0ZBQTRCO2tCQUNuQ0c7Ozs7OztBQUdKO0tBeEJTRjtBQTBCVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9JbWFnZUdhbGxlcnkuanM/YWNmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSW1hZ2VHYWxsZXJ5Lm1vZHVsZS5zY3NzJztcblxuZnVuY3Rpb24gSW1hZ2VHYWxsZXJ5IChwcm9wcykge1xuXG5cdGNvbnN0IGdyaWQgPSBbXTtcblx0Zm9yIChsZXQgciA9IDA7IHIgPCBwcm9wcy5yb3dzOyByKyspe1xuXHRsZXQgcm93ID0gW107XG5cblx0XHRmb3IgKGxldCBjID0gMDsgYyA8IHByb3BzLmNvbHVtbnM7IGMrKyl7XG5cdFx0XHRyb3cucHVzaChcblx0XHRcdFx0PEltYWdlIHNpemU9e3Byb3BzLnR5cGV9IC8+XG5cdFx0XHQpO1xuXHRcdH1cblx0XG5cdFx0Z3JpZC5wdXNoKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waWN0dXJlUm93fT57cm93fTwvZGl2PlxuXHRcdCk7XG5cdH1cblxuXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGlkPXtzdHlsZXMuaW1hZ2VHYWxsZXJ5Q29udGFpbmVyfSA+XG5cdFx0XHR7Z3JpZH1cdFxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlR2FsbGVyeTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwic3R5bGVzIiwiSW1hZ2VHYWxsZXJ5IiwicHJvcHMiLCJncmlkIiwiciIsInJvd3MiLCJyb3ciLCJjIiwiY29sdW1ucyIsInB1c2giLCJzaXplIiwidHlwZSIsImRpdiIsImNsYXNzTmFtZSIsInBpY3R1cmVSb3ciLCJpZCIsImltYWdlR2FsbGVyeUNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ImageGallery.js\n"));

/***/ })

});
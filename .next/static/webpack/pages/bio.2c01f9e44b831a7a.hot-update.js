"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/bio",{

/***/ "./src/pages/bio.js":
/*!**************************!*\
  !*** ./src/pages/bio.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Bio_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Bio.module.scss */ \"./src/styles/Bio.module.scss\");\n/* harmony import */ var _styles_Bio_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Bio_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_bioData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/bioData */ \"./src/data/bioData.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Bio = function() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // Example: Change the class of all <p> elements inside #bioContainer\n        document.querySelectorAll(\"#bioContainer div\").forEach(function(el) {\n            el.classList.add(\"{styles.column}\");\n        });\n    }, []);\n    console.log(_data_bioData__WEBPACK_IMPORTED_MODULE_2__.bioContent);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: (_styles_Bio_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bioContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"bio\"\n            }, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/bio.js\",\n                lineNumber: 19,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: (_styles_Bio_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bioContent),\n                dangerouslySetInnerHTML: {\n                    __html: _data_bioData__WEBPACK_IMPORTED_MODULE_2__.bioContent\n                }\n            }, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/bio.js\",\n                lineNumber: 20,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/bio.js\",\n        lineNumber: 18,\n        columnNumber: 3\n    }, _this);\n};\n_s(Bio, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Bio;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bio);\nvar _c;\n$RefreshReg$(_c, \"Bio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYmlvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1M7QUFDSDtBQUk3QyxJQUFNSSxNQUFNOztJQUVWSCxnREFBU0EsQ0FBQztRQUNSLHFFQUFxRTtRQUNyRUksU0FBU0MsZ0JBQWdCLENBQUMscUJBQXFCQyxPQUFPLENBQUNDLFNBQUFBO1lBQ3JEQSxHQUFHQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztRQUNuQjtJQUNGLEdBQUcsRUFBRTtJQUVOQyxRQUFRQyxHQUFHLENBQUNULHFEQUFVQTtJQUN0QixxQkFDQyw4REFBQ1U7UUFBSUMsSUFBSVosNkVBQW1COzswQkFDM0IsOERBQUNjOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNIO2dCQUFJQyxJQUFJWiwyRUFBaUI7Z0JBQUVlLHlCQUF5QjtvQkFBRUMsUUFBUWYscURBQVVBO2dCQUFDOzs7Ozs7Ozs7Ozs7QUFFM0U7R0FmSUM7S0FBQUE7O0FBNkJOLCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9iaW8uanM/ODZiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0Jpby5tb2R1bGUuc2NzcycgO1xuaW1wb3J0IHsgYmlvQ29udGVudCB9IGZyb20gJy4uL2RhdGEvYmlvRGF0YSc7XG5cblxuXG5jb25zdCBCaW8gPSAoKSA9PiB7XG5cblx0IHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gRXhhbXBsZTogQ2hhbmdlIHRoZSBjbGFzcyBvZiBhbGwgPHA+IGVsZW1lbnRzIGluc2lkZSAjYmlvQ29udGFpbmVyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Jpb0NvbnRhaW5lciBkaXYnKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ3tzdHlsZXMuY29sdW1ufScpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cblx0Y29uc29sZS5sb2coYmlvQ29udGVudCk7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBpZD17c3R5bGVzLmJpb0NvbnRhaW5lcn0+XG5cdFx0XHQ8aDE+YmlvPC9oMT5cblx0XHRcdDxkaXYgaWQ9e3N0eWxlcy5iaW9Db250ZW50fSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGJpb0NvbnRlbnQgfX0vPiBcblx0XHQ8L2Rpdj5cblx0KX07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy8gRmV0Y2ggYmxvZyBwb3N0cyBhdCBidWlsZCB0aW1lXG5jb25zdCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICdodHRwczovL2x1Y2lhLWNhc3Ryby5jb20nIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwaS9iaW9gKTtcbiAgY29uc3QgYmlvID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGJpbyB9LCAvLyBXaWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgICByZXZhbGlkYXRlOiAxMCAvLyBJU1I6IFJlZ2VuZXJhdGUgdGhlIHBhZ2UgZXZlcnkgMTAgc2Vjb25kcyBpZiBuZWVkZWRcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmlvO1xuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJiaW9Db250ZW50IiwiQmlvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwiY2xhc3NMaXN0IiwiYWRkIiwiY29uc29sZSIsImxvZyIsImRpdiIsImlkIiwiYmlvQ29udGFpbmVyIiwiaDEiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/bio.js\n"));

/***/ })

});
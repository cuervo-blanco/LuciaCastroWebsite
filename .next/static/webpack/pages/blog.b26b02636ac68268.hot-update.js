"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./src/components/BlogPostPreview.js":
/*!*******************************************!*\
  !*** ./src/components/BlogPostPreview.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BlogPostPreview; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_BlogPostPreview_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/BlogPostPreview.module.scss */ \"./src/styles/BlogPostPreview.module.scss\");\n/* harmony import */ var _styles_BlogPostPreview_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_BlogPostPreview_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction BlogPostPreview(param) {\n    var img = param.img, title = param.title, description = param.description, slug = param.slug, date = param.date, author = param.author;\n    _s();\n    var DATE;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var stripDate = function stripDate() {\n            DATE = [];\n            for(_char in date){\n                if (_char == \"T\") {\n                    break;\n                }\n            }\n        };\n        stripDate();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: (_styles_BlogPostPreview_module_scss__WEBPACK_IMPORTED_MODULE_2___default().blogPostPreviewContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: (_styles_BlogPostPreview_module_scss__WEBPACK_IMPORTED_MODULE_2___default().imgFrame),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        alt: \"\".concat(title, \"'s post front image\"),\n                        src: img\n                    }, void 0, false, {\n                        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n                        lineNumber: 32,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n                    lineNumber: 31,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n                lineNumber: 30,\n                columnNumber: 18\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: (_styles_BlogPostPreview_module_scss__WEBPACK_IMPORTED_MODULE_2___default().textFrame),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/blog/\".concat(slug),\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n                            lineNumber: 38,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n                            lineNumber: 39,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: date\n                        }, void 0, false, {\n                            fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n                            lineNumber: 40,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: author\n                        }, void 0, false, {\n                            fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n                            lineNumber: 41,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n                    lineNumber: 37,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n                lineNumber: 36,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n        lineNumber: 28,\n        columnNumber: 14\n    }, this);\n}\n_s(BlogPostPreview, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = BlogPostPreview;\nvar _c;\n$RefreshReg$(_c, \"BlogPostPreview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CbG9nUG9zdFByZXZpZXcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ2lCO0FBSTNDLFNBQVNHLGdCQUNwQixLQUErQztRQUE3Q0MsTUFBRixNQUFFQSxLQUFLQyxRQUFQLE1BQU9BLE9BQU9DLGNBQWQsTUFBY0EsYUFBYUMsT0FBM0IsTUFBMkJBLE1BQU1DLE9BQWpDLE1BQWlDQSxNQUFNQyxTQUF2QyxNQUF1Q0E7O0lBRXZDLElBQUlDO0lBRUpULGdEQUFTQSxDQUFFO1lBQ0VVLFlBQVQsU0FBU0E7WUFDTEQsT0FBTyxFQUFFO1lBRVQsSUFBS0UsU0FBUUosS0FBTTtnQkFDZixJQUFJSSxTQUFRLEtBQUk7b0JBQ1o7Z0JBQ0o7WUFDSjtRQUNKO1FBRUFEO0lBRUosR0FBRyxFQUFFO0lBRUwscUJBRVMsOERBQUNFO1FBQUlDLElBQUlaLHFHQUErQjs7MEJBRXBDLDhEQUFDYzswQkFDRSw0RUFBQ0g7b0JBQUlDLElBQUlaLHFGQUFlOzhCQUNwQiw0RUFBQ0U7d0JBQUljLEtBQUssR0FBUyxPQUFOYixPQUFNO3dCQUFzQmMsS0FBS2Y7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXRELDhEQUFDWTswQkFDRyw0RUFBQ0g7b0JBQUlDLElBQUlaLHNGQUFnQjs7c0NBQ3JCLDhEQUFDbUI7NEJBQUVDLE1BQU0sU0FBYyxPQUFMZjtzQ0FBU0Y7Ozs7OztzQ0FDM0IsOERBQUNrQjtzQ0FBR2pCOzs7Ozs7c0NBQ0osOERBQUNpQjtzQ0FBR2Y7Ozs7OztzQ0FDSiw4REFBQ2U7c0NBQUdkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01QjtHQXpDd0JOO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Jsb2dQb3N0UHJldmlldy5qcz81NjU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9CbG9nUG9zdFByZXZpZXcubW9kdWxlLnNjc3MnXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nUG9zdFByZXZpZXcgKFxuICAgIHsgaW1nLCB0aXRsZSwgZGVzY3JpcHRpb24sIHNsdWcsIGRhdGUsIGF1dGhvciB9KXtcblxuICAgIGxldCBEQVRFO1xuXG4gICAgdXNlRWZmZWN0ICgoKSA9PiB7XG4gICAgICAgIGZ1bmN0aW9uIHN0cmlwRGF0ZSgpIHtcbiAgICAgICAgICAgIERBVEUgPSBbXTtcblxuICAgICAgICAgICAgZm9yIChjaGFyIGluIGRhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PSAnVCcpe1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzdHJpcERhdGUoKTtcblxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuKFxuXG4gICAgICAgICAgICAgPGRpdiBpZD17c3R5bGVzLmJsb2dQb3N0UHJldmlld0NvbnRhaW5lcn0+XG5cbiAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5pbWdGcmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD17YCR7dGl0bGV9J3MgcG9zdCBmcm9udCBpbWFnZWB9IHNyYz17aW1nfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17c3R5bGVzLnRleHRGcmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgL2Jsb2cvJHtzbHVnfWB9Pnt0aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2RhdGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2F1dGhvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJCbG9nUG9zdFByZXZpZXciLCJpbWciLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic2x1ZyIsImRhdGUiLCJhdXRob3IiLCJEQVRFIiwic3RyaXBEYXRlIiwiY2hhciIsImRpdiIsImlkIiwiYmxvZ1Bvc3RQcmV2aWV3Q29udGFpbmVyIiwic2VjdGlvbiIsImltZ0ZyYW1lIiwiYWx0Iiwic3JjIiwidGV4dEZyYW1lIiwiYSIsImhyZWYiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/BlogPostPreview.js\n"));

/***/ })

});
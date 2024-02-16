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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BlogPostPreview; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_BlogPostPreview_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/BlogPostPreview.module.scss */ \"./src/styles/BlogPostPreview.module.scss\");\n/* harmony import */ var _styles_BlogPostPreview_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_BlogPostPreview_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction BlogPostPreview(param) {\n    var img = param.img, title = param.title, description = param.description, slug = param.slug, date = param.date, author = param.author;\n    _s();\n    var DATE;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var stripDate = function stripDate() {\n            var new_date = [];\n            for(_char in date){\n                if (_char == \"T\") {\n                    break;\n                } else {\n                    new_date.push(_char);\n                }\n            }\n            ;\n            new_date.join(\"\");\n        };\n        stripDate();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: (_styles_BlogPostPreview_module_scss__WEBPACK_IMPORTED_MODULE_2___default().blogPostPreviewContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: (_styles_BlogPostPreview_module_scss__WEBPACK_IMPORTED_MODULE_2___default().imgFrame),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        alt: \"\".concat(title, \"'s post front image\"),\n                        src: img\n                    }, void 0, false, {\n                        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n                        lineNumber: 38,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n                    lineNumber: 37,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n                lineNumber: 36,\n                columnNumber: 18\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: (_styles_BlogPostPreview_module_scss__WEBPACK_IMPORTED_MODULE_2___default().textFrame),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/blog/\".concat(slug),\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n                            lineNumber: 44,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n                            lineNumber: 45,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: date\n                        }, void 0, false, {\n                            fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n                            lineNumber: 46,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: author\n                        }, void 0, false, {\n                            fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n                            lineNumber: 47,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n                    lineNumber: 43,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n                lineNumber: 42,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n        lineNumber: 34,\n        columnNumber: 14\n    }, this);\n}\n_s(BlogPostPreview, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = BlogPostPreview;\nvar _c;\n$RefreshReg$(_c, \"BlogPostPreview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CbG9nUG9zdFByZXZpZXcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ2lCO0FBSTNDLFNBQVNHLGdCQUNwQixLQUErQztRQUE3Q0MsTUFBRixNQUFFQSxLQUFLQyxRQUFQLE1BQU9BLE9BQU9DLGNBQWQsTUFBY0EsYUFBYUMsT0FBM0IsTUFBMkJBLE1BQU1DLE9BQWpDLE1BQWlDQSxNQUFNQyxTQUF2QyxNQUF1Q0E7O0lBRXZDLElBQUlDO0lBRUpULGdEQUFTQSxDQUFFO1lBQ0VVLFlBQVQsU0FBU0E7WUFDTCxJQUFJQyxXQUFXLEVBQUU7WUFFakIsSUFBS0MsU0FBUUwsS0FBTTtnQkFDZixJQUFJSyxTQUFRLEtBQUk7b0JBQ1o7Z0JBQ0osT0FBTztvQkFDSEQsU0FBU0UsSUFBSSxDQUFDRDtnQkFDbEI7WUFDSjs7WUFFQUQsU0FBU0csSUFBSSxDQUFDO1FBR2xCO1FBRUFKO0lBRUosR0FBRyxFQUFFO0lBRUwscUJBRVMsOERBQUNLO1FBQUlDLElBQUlmLHFHQUErQjs7MEJBRXBDLDhEQUFDaUI7MEJBQ0UsNEVBQUNIO29CQUFJQyxJQUFJZixxRkFBZTs4QkFDcEIsNEVBQUNFO3dCQUFJaUIsS0FBSyxHQUFTLE9BQU5oQixPQUFNO3dCQUFzQmlCLEtBQUtsQjs7Ozs7Ozs7Ozs7Ozs7OzswQkFJdEQsOERBQUNlOzBCQUNHLDRFQUFDSDtvQkFBSUMsSUFBSWYsc0ZBQWdCOztzQ0FDckIsOERBQUNzQjs0QkFBRUMsTUFBTSxTQUFjLE9BQUxsQjtzQ0FBU0Y7Ozs7OztzQ0FDM0IsOERBQUNxQjtzQ0FBR3BCOzs7Ozs7c0NBQ0osOERBQUNvQjtzQ0FBR2xCOzs7Ozs7c0NBQ0osOERBQUNrQjtzQ0FBR2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01QjtHQS9Dd0JOO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Jsb2dQb3N0UHJldmlldy5qcz81NjU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9CbG9nUG9zdFByZXZpZXcubW9kdWxlLnNjc3MnXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nUG9zdFByZXZpZXcgKFxuICAgIHsgaW1nLCB0aXRsZSwgZGVzY3JpcHRpb24sIHNsdWcsIGRhdGUsIGF1dGhvciB9KXtcblxuICAgIGxldCBEQVRFO1xuXG4gICAgdXNlRWZmZWN0ICgoKSA9PiB7XG4gICAgICAgIGZ1bmN0aW9uIHN0cmlwRGF0ZSgpIHtcbiAgICAgICAgICAgIGxldCBuZXdfZGF0ZSA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGNoYXIgaW4gZGF0ZSkge1xuICAgICAgICAgICAgICAgIGlmIChjaGFyID09ICdUJyl7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld19kYXRlLnB1c2goY2hhcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbmV3X2RhdGUuam9pbignJyk7XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgc3RyaXBEYXRlKCk7XG5cbiAgICB9LCBbXSlcblxuICAgIHJldHVybihcblxuICAgICAgICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5ibG9nUG9zdFByZXZpZXdDb250YWluZXJ9PlxuXG4gICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXtzdHlsZXMuaW1nRnJhbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9e2Ake3RpdGxlfSdzIHBvc3QgZnJvbnQgaW1hZ2VgfSBzcmM9e2ltZ30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e3N0eWxlcy50ZXh0RnJhbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC9ibG9nLyR7c2x1Z31gfT57dGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkYXRlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnthdXRob3J9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiQmxvZ1Bvc3RQcmV2aWV3IiwiaW1nIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNsdWciLCJkYXRlIiwiYXV0aG9yIiwiREFURSIsInN0cmlwRGF0ZSIsIm5ld19kYXRlIiwiY2hhciIsInB1c2giLCJqb2luIiwiZGl2IiwiaWQiLCJibG9nUG9zdFByZXZpZXdDb250YWluZXIiLCJzZWN0aW9uIiwiaW1nRnJhbWUiLCJhbHQiLCJzcmMiLCJ0ZXh0RnJhbWUiLCJhIiwiaHJlZiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/BlogPostPreview.js\n"));

/***/ })

});
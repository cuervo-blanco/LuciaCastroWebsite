"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog/[postId]",{

/***/ "./src/pages/blog/[postId].js":
/*!************************************!*\
  !*** ./src/pages/blog/[postId].js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_BlogPost_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/BlogPost.module.scss */ \"./src/styles/BlogPost.module.scss\");\n/* harmony import */ var _styles_BlogPost_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_BlogPost_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-dompurify */ \"./node_modules/isomorphic-dompurify/browser.js\");\n/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n\nvar BlogPost = function(param) {\n    var article = param.article;\n    var dirtyHtml = article.published_version.body;\n    var cleanHtml = isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_2___default().sanitize(dirtyHtml);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: (_styles_BlogPost_module_scss__WEBPACK_IMPORTED_MODULE_3___default().blogPostContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                id: (_styles_BlogPost_module_scss__WEBPACK_IMPORTED_MODULE_3___default().blogPostTitle),\n                children: article.published_version.title\n            }, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog/[postId].js\",\n                lineNumber: 12,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                id: (_styles_BlogPost_module_scss__WEBPACK_IMPORTED_MODULE_3___default().blogPostDescription),\n                children: article.published_version.description\n            }, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog/[postId].js\",\n                lineNumber: 13,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                id: (_styles_BlogPost_module_scss__WEBPACK_IMPORTED_MODULE_3___default().blogPostImage),\n                src: article.published_version.featured_image\n            }, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog/[postId].js\",\n                lineNumber: 14,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: (_styles_BlogPost_module_scss__WEBPACK_IMPORTED_MODULE_3___default().blogPostBody),\n                dangerouslySetInnerHTML: {\n                    __html: cleanHtml\n                },\n                children: \"    \"\n            }, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog/[postId].js\",\n                lineNumber: 16,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"Go Back\"\n            }, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog/[postId].js\",\n                lineNumber: 18,\n                columnNumber: 17\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog/[postId].js\",\n        lineNumber: 11,\n        columnNumber: 4\n    }, _this);\n};\n_c = BlogPost;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogPost);\nvar _c;\n$RefreshReg$(_c, \"BlogPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYmxvZy9bcG9zdElkXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUM2QjtBQUNWO0FBRTdDLElBQU1HLFdBQVc7UUFBR0MsZ0JBQUFBO0lBRWhCLElBQU1DLFlBQVlELFFBQVFFLGlCQUFpQixDQUFDQyxJQUFJO0lBQ2hELElBQU1DLFlBQVlOLG9FQUFrQixDQUFDRztJQUV2QyxxQkFDQyw4REFBQ0s7UUFBSUMsSUFBSVYsdUZBQXdCOzswQkFDcEIsOERBQUNZO2dCQUFHRixJQUFJVixtRkFBb0I7MEJBQUdHLFFBQVFFLGlCQUFpQixDQUFDUyxLQUFLOzs7Ozs7MEJBQzlELDhEQUFDQztnQkFBRUwsSUFBSVYseUZBQTBCOzBCQUFHRyxRQUFRRSxpQkFBaUIsQ0FBQ1ksV0FBVzs7Ozs7OzBCQUN6RSw4REFBQ0M7Z0JBQUlSLElBQUlWLG1GQUFvQjtnQkFBRW9CLEtBQUtqQixRQUFRRSxpQkFBaUIsQ0FBQ2dCLGNBQWM7Ozs7OzswQkFFNUUsOERBQUNaO2dCQUFJQyxJQUFJVixrRkFBbUI7Z0JBQUV1Qix5QkFBeUI7b0JBQUVDLFFBQVFqQjtnQkFBVTswQkFBRzs7Ozs7OzBCQUU5RSw4REFBQ2tCOzBCQUFPOzs7Ozs7Ozs7Ozs7QUFHdkI7S0FoQkt2Qjs7QUFnRE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Jsb2cvW3Bvc3RJZF0uanM/MmNhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvQmxvZ1Bvc3QubW9kdWxlLnNjc3MnO1xuaW1wb3J0IERPTVB1cmlmeSBmcm9tICdpc29tb3JwaGljLWRvbXB1cmlmeSc7XG5cbmNvbnN0IEJsb2dQb3N0ID0gKHsgYXJ0aWNsZSB9KSA9PiB7XG5cbiAgICBjb25zdCBkaXJ0eUh0bWwgPSBhcnRpY2xlLnB1Ymxpc2hlZF92ZXJzaW9uLmJvZHk7XG4gICAgY29uc3QgY2xlYW5IdG1sID0gRE9NUHVyaWZ5LnNhbml0aXplKGRpcnR5SHRtbCk7XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2IGlkPXtzdHlsZXMuYmxvZ1Bvc3RDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxoMSBpZD17c3R5bGVzLmJsb2dQb3N0VGl0bGV9PnthcnRpY2xlLnB1Ymxpc2hlZF92ZXJzaW9uLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgPHAgaWQ9e3N0eWxlcy5ibG9nUG9zdERlc2NyaXB0aW9ufT57YXJ0aWNsZS5wdWJsaXNoZWRfdmVyc2lvbi5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPGltZyBpZD17c3R5bGVzLmJsb2dQb3N0SW1hZ2V9IHNyYz17YXJ0aWNsZS5wdWJsaXNoZWRfdmVyc2lvbi5mZWF0dXJlZF9pbWFnZX0vPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBpZD17c3R5bGVzLmJsb2dQb3N0Qm9keX0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjbGVhbkh0bWwgfX0+ICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5HbyBCYWNrPC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXG5cbi8vVGhlc2UgZ2V0U3RhdGljUGF0aHMgYW5kIGdldFN0YXRpY1Byb3BzIGFyZSBwbGFjZWQgaGVyZSBhdCB0aGUgbW9tZW50IHRvIGFjdCBhcyBwbGFjZWhvbGRlcnNcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICAvLyBGZXRjaCBhdmFpbGFibGUgcG9zdCBJRHMgZnJvbSB0aGUgc2VydmVyXG5jb25zdCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICdodHRwczovL2x1Y2lhLWNhc3Ryby5jb20nIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDIvYXBpL2Jsb2cvYmxvZy1wb3N0cy1pZHNgKTtcbiAgY29uc3QgcG9zdElkcyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbmNvbnN0IHBhdGhzID0gcG9zdElkcy5tYXAoKHsgcG9zdF9pZCB9KSA9PiAoe1xuICAgIHBhcmFtczogeyBwb3N0SWQ6IHBvc3RfaWQudG9TdHJpbmcoKSB9LFxufSkpO1xuXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfTsgLy9vbmUgY2FuIHVzZSB0cnVlIG9yICdibG9ja2luZycgdG8gc2VydmVyLXNpZGUgcmVuZGVyIHRoZSBwYWdlIG9uIHRoZSBmaXJzdCByZXF1ZXN0XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG5jb25zdCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICdodHRwczovL2x1Y2lhLWNhc3Ryby5jb20nIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDIvZ2V0LXBvc3QvJHtwYXJhbXMucG9zdElkfWApO1xuICBjb25zdCBwb3N0ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZygnUG9zdDonLCBwb3N0KTtcblxuICAgIGNvbnN0IGFydGljbGUgPSBwb3N0WzBdO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgYXJ0aWNsZSB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nUG9zdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIkRPTVB1cmlmeSIsIkJsb2dQb3N0IiwiYXJ0aWNsZSIsImRpcnR5SHRtbCIsInB1Ymxpc2hlZF92ZXJzaW9uIiwiYm9keSIsImNsZWFuSHRtbCIsInNhbml0aXplIiwiZGl2IiwiaWQiLCJibG9nUG9zdENvbnRhaW5lciIsImgxIiwiYmxvZ1Bvc3RUaXRsZSIsInRpdGxlIiwicCIsImJsb2dQb3N0RGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsImltZyIsImJsb2dQb3N0SW1hZ2UiLCJzcmMiLCJmZWF0dXJlZF9pbWFnZSIsImJsb2dQb3N0Qm9keSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/blog/[postId].js\n"));

/***/ })

});
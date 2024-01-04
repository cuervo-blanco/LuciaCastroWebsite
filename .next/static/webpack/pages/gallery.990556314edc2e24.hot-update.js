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

/***/ "./src/pages/gallery.js":
/*!******************************!*\
  !*** ./src/pages/gallery.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Gallery.module.scss */ \"./src/styles/Gallery.module.scss\");\n/* harmony import */ var _styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_SubMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubMenu */ \"./src/components/SubMenu.js\");\n/* harmony import */ var _components_ContentLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ContentLoader */ \"./src/components/ContentLoader.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar firstMenuOptions = [\n    \"ILLUSTRATIONS\",\n    \"PRODUCTS & SERVICES\",\n    \"CLIENTS\",\n    \"PRESS\"\n];\nvar secondMenuOptions = [\n    \"illustrations\",\n    \"posters\",\n    \"2d animation & motion graphics\",\n    \"character design\"\n];\nvar Gallery = function(props) {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"ILLUSTRATIONS\"), 2), currentOption = _useState[0], setCurrentOption = _useState[1];\n    var handleOptionChange = function(option) {\n        setCurrentOption(option);\n    };\n    console.log(currentOption);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: (_styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_5___default().galleryContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"gallery\"\n            }, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/gallery.js\",\n                lineNumber: 21,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                options: firstMenuOptions,\n                onChangeOption: handleOptionChange,\n                direction: \"horizontal\",\n                selected: currentOption\n            }, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/gallery.js\",\n                lineNumber: 22,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContentLoader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                toLoad: currentOption,\n                options: secondMenuOptions\n            }, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/gallery.js\",\n                lineNumber: 23,\n                columnNumber: 3\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/gallery.js\",\n        lineNumber: 20,\n        columnNumber: 3\n    }, _this);\n};\n_s(Gallery, \"qEP6AF3IG0h6ha1vwqWQCcpat6Y=\");\n_c = Gallery;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZ2FsbGVyeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNVO0FBQ1A7QUFDWTtBQUV4RCxJQUFNSyxtQkFBbUI7SUFBQztJQUFpQjtJQUF1QjtJQUFXO0NBQVE7QUFDckYsSUFBTUMsb0JBQW9CO0lBQUM7SUFBaUI7SUFBVztJQUFrQztDQUFtQjtBQUU1RyxJQUFNQyxVQUFVLFNBQUNDOztJQUVoQixJQUEwQ1AsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLHNCQUE1Q1EsZ0JBQW1DUixjQUFwQlMsbUJBQW9CVDtJQUUxQyxJQUFNVSxxQkFBcUIsU0FBQ0M7UUFDM0JGLGlCQUFpQkU7SUFDbEI7SUFFQUMsUUFBUUMsR0FBRyxDQUFDTDtJQUVaLHFCQUNDLDhEQUFDTTtRQUFJQyxJQUFJZCxxRkFBdUI7OzBCQUNoQyw4REFBQ2dCOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNmLDJEQUFPQTtnQkFBQ2dCLFNBQVNkO2dCQUFrQmUsZ0JBQWdCVDtnQkFBb0JVLFdBQVU7Z0JBQWFDLFVBQVViOzs7Ozs7MEJBQ3pHLDhEQUFDTCxpRUFBYUE7Z0JBQUNtQixRQUFRZDtnQkFBZVUsU0FBU2I7Ozs7Ozs7Ozs7OztBQUdqRDtHQWpCTUM7S0FBQUE7O0FBNEJOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9nYWxsZXJ5LmpzPzI3NGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gIGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0dhbGxlcnkubW9kdWxlLnNjc3MnOyBcbmltcG9ydCBTdWJNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvU3ViTWVudSc7XG5pbXBvcnQgQ29udGVudExvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRlbnRMb2FkZXInO1xuXG5jb25zdCBmaXJzdE1lbnVPcHRpb25zID0gWydJTExVU1RSQVRJT05TJywgJ1BST0RVQ1RTICYgU0VSVklDRVMnLCAnQ0xJRU5UUycsICdQUkVTUyddO1xuY29uc3Qgc2Vjb25kTWVudU9wdGlvbnMgPSBbJ2lsbHVzdHJhdGlvbnMnLCAncG9zdGVycycsICcyZCBhbmltYXRpb24gJiBtb3Rpb24gZ3JhcGhpY3MnLCAnY2hhcmFjdGVyIGRlc2lnbiddO1xuXG5jb25zdCBHYWxsZXJ5ID0gKHByb3BzKSA9PiB7XG5cblx0Y29uc3QgW2N1cnJlbnRPcHRpb24sIHNldEN1cnJlbnRPcHRpb25dID0gdXNlU3RhdGUoJ0lMTFVTVFJBVElPTlMnKTtcblxuXHRjb25zdCBoYW5kbGVPcHRpb25DaGFuZ2UgPSAob3B0aW9uKSA9PiB7XG5cdFx0c2V0Q3VycmVudE9wdGlvbihvcHRpb24pO1xuXHR9XG5cblx0Y29uc29sZS5sb2coY3VycmVudE9wdGlvbik7XG5cblx0cmV0dXJuKFxuXHRcdDxkaXYgaWQ9e3N0eWxlcy5nYWxsZXJ5Q29udGFpbmVyfT5cblx0XHQ8aDE+Z2FsbGVyeTwvaDE+XG5cdFx0PFN1Yk1lbnUgb3B0aW9ucz17Zmlyc3RNZW51T3B0aW9uc30gb25DaGFuZ2VPcHRpb249e2hhbmRsZU9wdGlvbkNoYW5nZX0gZGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiIHNlbGVjdGVkPXtjdXJyZW50T3B0aW9ufS8+XG5cdFx0PENvbnRlbnRMb2FkZXIgdG9Mb2FkPXtjdXJyZW50T3B0aW9ufSBvcHRpb25zPXtzZWNvbmRNZW51T3B0aW9uc30gLz5cblx0XHQ8L2Rpdj5cblx0KVxufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICdodHRwczovL2x1Y2lhLWNhc3Ryby5jb20nIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwaS9nYWxsZXJ5YCk7XG4gIGNvbnN0IGdhbGxlcnlJbWFnZXMgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGdhbGxlcnlJbWFnZXMgfSwgLy8gV2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIlN1Yk1lbnUiLCJDb250ZW50TG9hZGVyIiwiZmlyc3RNZW51T3B0aW9ucyIsInNlY29uZE1lbnVPcHRpb25zIiwiR2FsbGVyeSIsInByb3BzIiwiY3VycmVudE9wdGlvbiIsInNldEN1cnJlbnRPcHRpb24iLCJoYW5kbGVPcHRpb25DaGFuZ2UiLCJvcHRpb24iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaWQiLCJnYWxsZXJ5Q29udGFpbmVyIiwiaDEiLCJvcHRpb25zIiwib25DaGFuZ2VPcHRpb24iLCJkaXJlY3Rpb24iLCJzZWxlY3RlZCIsInRvTG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/gallery.js\n"));

/***/ })

});
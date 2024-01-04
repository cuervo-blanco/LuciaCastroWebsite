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

/***/ "./src/components/ContentLoader.js":
/*!*****************************************!*\
  !*** ./src/components/ContentLoader.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_ContentLoader_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/ContentLoader.module.scss */ \"./src/styles/ContentLoader.module.scss\");\n/* harmony import */ var _styles_ContentLoader_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_ContentLoader_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _SubMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubMenu */ \"./src/components/SubMenu.js\");\n/* harmony import */ var _ImageGallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageGallery */ \"./src/components/ImageGallery.js\");\n/* harmony import */ var _Testimonials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Testimonials */ \"./src/components/Testimonials.js\");\n/* harmony import */ var _Press__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Press */ \"./src/components/Press.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar ContentLoader = function(props) {\n    _s();\n    // This sets the state for the option selected in the Second Submenu, the one inside this Component\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"illustrations\"), 2), currentOption = _useState[0], setCurrentOption = _useState[1];\n    var handleOptionChange = function(option) {\n        setCurrentOption(option);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: (_styles_ContentLoader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().contentLoaderContainer),\n        children: [\n            props.toLoad === \"ILLUSTRATIONS\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageGallery__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                type: \"image\",\n                rows: \"3\",\n                columns: \"5\"\n            }, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/ContentLoader.js\",\n                lineNumber: 19,\n                columnNumber: 40\n            }, _this),\n            props.toLoad === \"PRODUCTS & SERVICES\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SubMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        options: props.options,\n                        onChangeOption: handleOptionChange,\n                        direction: \"vertical\",\n                        selected: currentOption\n                    }, void 0, false, {\n                        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/ContentLoader.js\",\n                        lineNumber: 21,\n                        columnNumber: 21\n                    }, _this),\n                    currentOption === \"illustrations\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MediaContenLoader, {}, void 0, false, {\n                        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/ContentLoader.js\",\n                        lineNumber: 22,\n                        columnNumber: 59\n                    }, _this),\n                    currentOption === \"posters\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageGallery__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        type: \"posters\",\n                        rows: \"1\",\n                        columns: \"4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/ContentLoader.js\",\n                        lineNumber: 23,\n                        columnNumber: 53\n                    }, _this),\n                    currentOption === \"2d animation & motion graphics\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MediaContentLoader, {}, void 0, false, {\n                        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/ContentLoader.js\",\n                        lineNumber: 24,\n                        columnNumber: 76\n                    }, _this),\n                    currentOption === \"character design\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MediaContentLoader, {}, void 0, false, {\n                        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/ContentLoader.js\",\n                        lineNumber: 25,\n                        columnNumber: 47\n                    }, _this)\n                ]\n            }, void 0, true),\n            props.toLoad === \"CLIENTS\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Testimonials__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/ContentLoader.js\",\n                lineNumber: 28,\n                columnNumber: 34\n            }, _this),\n            props.toLoad === \"PRESS\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Press__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/ContentLoader.js\",\n                lineNumber: 29,\n                columnNumber: 32\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/ContentLoader.js\",\n        lineNumber: 17,\n        columnNumber: 3\n    }, _this);\n};\n_s(ContentLoader, \"/QKD2KqtuXxUH8ICKoFPMeIXrl4=\");\n_c = ContentLoader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentLoader);\nvar _c;\n$RefreshReg$(_c, \"ContentLoader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db250ZW50TG9hZGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDaUI7QUFDekI7QUFDVTtBQUNBO0FBQ2Q7QUFFNUIsSUFBTU8sZ0JBQWdCLFNBQUNDOztJQUNyQixtR0FBbUc7SUFDbkcsSUFBMENQLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxzQkFBNUNRLGdCQUFtQ1IsY0FBcEJTLG1CQUFvQlQ7SUFFMUMsSUFBTVUscUJBQXFCLFNBQUNDO1FBQzVCRixpQkFBaUJFO0lBQ2xCO0lBRUEscUJBQ0MsOERBQUNDO1FBQUlDLElBQUlaLGlHQUE2Qjs7WUFFckNNLE1BQU1RLE1BQU0sS0FBSyxpQ0FBbUIsOERBQUNaLHFEQUFZQTtnQkFBRWEsTUFBSztnQkFBUUMsTUFBSztnQkFBSUMsU0FBUTs7Ozs7O1lBQ2pGWCxNQUFNUSxNQUFNLEtBQUssdUNBQXlCOztrQ0FDekIsOERBQUNiLGdEQUFPQTt3QkFBQ2lCLFNBQVNaLE1BQU1ZLE9BQU87d0JBQUVDLGdCQUFnQlY7d0JBQW9CVyxXQUFVO3dCQUFXQyxVQUFVZDs7Ozs7O29CQUNuR0Esa0JBQWtCLGlDQUFtQiw4REFBQ2U7Ozs7O29CQUN0Q2Ysa0JBQWtCLDJCQUFhLDhEQUFDTCxxREFBWUE7d0JBQUNhLE1BQUs7d0JBQVVDLE1BQUs7d0JBQUlDLFNBQVE7Ozs7OztvQkFDN0VWLGtCQUFrQixrREFBb0MsOERBQUNnQjs7Ozs7b0JBQ3RFaEIsa0JBQWtCLG9DQUFzQiw4REFBQ2dCOzs7Ozs7O1lBRzVDakIsTUFBTVEsTUFBTSxLQUFLLDJCQUFhLDhEQUFDWCxxREFBWUE7Ozs7O1lBQzNDRyxNQUFNUSxNQUFNLEtBQUsseUJBQVcsOERBQUNWLDhDQUFLQTs7Ozs7Ozs7Ozs7QUFFbkM7R0F2QklDO0tBQUFBO0FBMEJOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnRMb2FkZXIuanM/N2U0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Db250ZW50TG9hZGVyLm1vZHVsZS5zY3NzJztcbmltcG9ydCBTdWJNZW51IGZyb20gJy4vU3ViTWVudSc7XG5pbXBvcnQgSW1hZ2VHYWxsZXJ5IGZyb20gJy4vSW1hZ2VHYWxsZXJ5JztcbmltcG9ydCBUZXN0aW1vbmlhbHMgZnJvbSAnLi9UZXN0aW1vbmlhbHMnO1xuaW1wb3J0IFByZXNzIGZyb20gJy4vUHJlc3MnO1xuXG5jb25zdCBDb250ZW50TG9hZGVyID0gKHByb3BzKSA9PiB7XG5cdFx0Ly8gVGhpcyBzZXRzIHRoZSBzdGF0ZSBmb3IgdGhlIG9wdGlvbiBzZWxlY3RlZCBpbiB0aGUgU2Vjb25kIFN1Ym1lbnUsIHRoZSBvbmUgaW5zaWRlIHRoaXMgQ29tcG9uZW50XG5cdFx0Y29uc3QgW2N1cnJlbnRPcHRpb24sIHNldEN1cnJlbnRPcHRpb25dID0gdXNlU3RhdGUoJ2lsbHVzdHJhdGlvbnMnKTtcblxuXHRcdGNvbnN0IGhhbmRsZU9wdGlvbkNoYW5nZSA9IChvcHRpb24pID0+IHtcblx0XHRzZXRDdXJyZW50T3B0aW9uKG9wdGlvbik7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgaWQ9e3N0eWxlcy5jb250ZW50TG9hZGVyQ29udGFpbmVyfT5cblxuXHRcdHtwcm9wcy50b0xvYWQgPT09ICdJTExVU1RSQVRJT05TJyAmJiA8SW1hZ2VHYWxsZXJ5ICB0eXBlPVwiaW1hZ2VcIiByb3dzPVwiM1wiIGNvbHVtbnM9XCI1XCIvPn1cblx0XHR7cHJvcHMudG9Mb2FkID09PSAnUFJPRFVDVFMgJiBTRVJWSUNFUycgJiYgPD5cbiAgICAgICAgICAgICAgICAgICAgPFN1Yk1lbnUgb3B0aW9ucz17cHJvcHMub3B0aW9uc30gb25DaGFuZ2VPcHRpb249e2hhbmRsZU9wdGlvbkNoYW5nZX0gZGlyZWN0aW9uPVwidmVydGljYWxcIiBzZWxlY3RlZD17Y3VycmVudE9wdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRPcHRpb24gPT09ICdpbGx1c3RyYXRpb25zJyAmJiA8TWVkaWFDb250ZW5Mb2FkZXIgLz59XG4gICAgICAgICAgICAgICAgICAgIHtjdXJyZW50T3B0aW9uID09PSAncG9zdGVycycgJiYgPEltYWdlR2FsbGVyeSB0eXBlPVwicG9zdGVyc1wiIHJvd3M9XCIxXCIgY29sdW1ucz1cIjRcIi8+fVxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVudE9wdGlvbiA9PT0gJzJkIGFuaW1hdGlvbiAmIG1vdGlvbiBncmFwaGljcycgJiYgPE1lZGlhQ29udGVudExvYWRlciAvPn1cblx0XHRcdFx0XHR7Y3VycmVudE9wdGlvbiA9PT0gJ2NoYXJhY3RlciBkZXNpZ24nICYmIDxNZWRpYUNvbnRlbnRMb2FkZXIgLz59XG5cbiAgICAgICAgICAgICAgICA8Lz5cdFx0fVxuXHRcdHtwcm9wcy50b0xvYWQgPT09ICdDTElFTlRTJyAmJiA8VGVzdGltb25pYWxzIC8+fVxuXHRcdHtwcm9wcy50b0xvYWQgPT09ICdQUkVTUycgJiYgPFByZXNzIC8+fVxuXHRcdDwvZGl2PlxuXHQpfTtcblxuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50TG9hZGVyO1xuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIlN1Yk1lbnUiLCJJbWFnZUdhbGxlcnkiLCJUZXN0aW1vbmlhbHMiLCJQcmVzcyIsIkNvbnRlbnRMb2FkZXIiLCJwcm9wcyIsImN1cnJlbnRPcHRpb24iLCJzZXRDdXJyZW50T3B0aW9uIiwiaGFuZGxlT3B0aW9uQ2hhbmdlIiwib3B0aW9uIiwiZGl2IiwiaWQiLCJjb250ZW50TG9hZGVyQ29udGFpbmVyIiwidG9Mb2FkIiwidHlwZSIsInJvd3MiLCJjb2x1bW5zIiwib3B0aW9ucyIsIm9uQ2hhbmdlT3B0aW9uIiwiZGlyZWN0aW9uIiwic2VsZWN0ZWQiLCJNZWRpYUNvbnRlbkxvYWRlciIsIk1lZGlhQ29udGVudExvYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ContentLoader.js\n"));

/***/ })

});
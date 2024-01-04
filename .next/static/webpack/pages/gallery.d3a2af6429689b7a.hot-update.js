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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_ContentLoader_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/ContentLoader.module.scss */ \"./src/styles/ContentLoader.module.scss\");\n/* harmony import */ var _styles_ContentLoader_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_ContentLoader_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _SubMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubMenu */ \"./src/components/SubMenu.js\");\n/* harmony import */ var _ImageGallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageGallery */ \"./src/components/ImageGallery.js\");\n/* harmony import */ var _Testimonials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Testimonials */ \"./src/components/Testimonials.js\");\n/* harmony import */ var _Press__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Press */ \"./src/components/Press.js\");\n/* harmony import */ var _MediaContentLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MediaContentLoader */ \"./src/components/MediaContentLoader.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar ContentLoader = function(props) {\n    _s();\n    // This sets the state for the option selected in the Second Submenu, the one inside this Component\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"illustrations\"), 2), currentOption = _useState[0], setCurrentOption = _useState[1];\n    var handleOptionChange = function(option) {\n        setCurrentOption(option);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: (_styles_ContentLoader_module_scss__WEBPACK_IMPORTED_MODULE_8___default().contentLoaderContainer),\n        children: [\n            props.toLoad === \"ILLUSTRATIONS\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageGallery__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                type: \"square\",\n                rows: \"3\",\n                columns: \"5\"\n            }, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/ContentLoader.js\",\n                lineNumber: 20,\n                columnNumber: 40\n            }, _this),\n            props.toLoad === \"PRODUCTS & SERVICES\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SubMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        options: props.options,\n                        onChangeOption: handleOptionChange,\n                        direction: \"vertical\",\n                        selected: currentOption,\n                        id: \"CSM\"\n                    }, void 0, false, {\n                        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/ContentLoader.js\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    }, _this),\n                    currentOption === \"illustrations\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MediaContentLoader__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/ContentLoader.js\",\n                        lineNumber: 23,\n                        columnNumber: 59\n                    }, _this),\n                    currentOption === \"posters\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageGallery__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        type: \"poster\",\n                        rows: \"2\",\n                        columns: \"5\"\n                    }, void 0, false, {\n                        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/ContentLoader.js\",\n                        lineNumber: 24,\n                        columnNumber: 53\n                    }, _this),\n                    currentOption === \"2d animation & motion graphics\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MediaContentLoader__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        rows: \"1\",\n                        columns: \"4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/ContentLoader.js\",\n                        lineNumber: 25,\n                        columnNumber: 76\n                    }, _this),\n                    currentOption === \"character design\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MediaContentLoader__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/ContentLoader.js\",\n                        lineNumber: 26,\n                        columnNumber: 47\n                    }, _this)\n                ]\n            }, void 0, true),\n            props.toLoad === \"CLIENTS\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Testimonials__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/ContentLoader.js\",\n                lineNumber: 29,\n                columnNumber: 34\n            }, _this),\n            props.toLoad === \"PRESS\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Press__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/ContentLoader.js\",\n                lineNumber: 30,\n                columnNumber: 32\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/ContentLoader.js\",\n        lineNumber: 18,\n        columnNumber: 3\n    }, _this);\n};\n_s(ContentLoader, \"/QKD2KqtuXxUH8ICKoFPMeIXrl4=\");\n_c = ContentLoader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentLoader);\nvar _c;\n$RefreshReg$(_c, \"ContentLoader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db250ZW50TG9hZGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2lCO0FBQ3pCO0FBQ1U7QUFDQTtBQUNkO0FBQzBCO0FBRXRELElBQU1RLGdCQUFnQixTQUFDQzs7SUFDckIsbUdBQW1HO0lBQ25HLElBQTBDUixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsc0JBQTVDUyxnQkFBbUNULGNBQXBCVSxtQkFBb0JWO0lBRTFDLElBQU1XLHFCQUFxQixTQUFDQztRQUM1QkYsaUJBQWlCRTtJQUNsQjtJQUVBLHFCQUNDLDhEQUFDQztRQUFJQyxJQUFJYixpR0FBNkI7O1lBRXJDTyxNQUFNUSxNQUFNLEtBQUssaUNBQW1CLDhEQUFDYixxREFBWUE7Z0JBQUVjLE1BQUs7Z0JBQVNDLE1BQUs7Z0JBQUlDLFNBQVE7Ozs7OztZQUNsRlgsTUFBTVEsTUFBTSxLQUFLLHVDQUF5Qjs7a0NBQ3pCLDhEQUFDZCxnREFBT0E7d0JBQUNrQixTQUFTWixNQUFNWSxPQUFPO3dCQUFFQyxnQkFBZ0JWO3dCQUFvQlcsV0FBVTt3QkFBV0MsVUFBVWQ7d0JBQWVLLElBQUc7Ozs7OztvQkFDckhMLGtCQUFrQixpQ0FBbUIsOERBQUNILDJEQUFrQkE7Ozs7O29CQUN4REcsa0JBQWtCLDJCQUFhLDhEQUFDTixxREFBWUE7d0JBQUNjLE1BQUs7d0JBQVNDLE1BQUs7d0JBQUlDLFNBQVE7Ozs7OztvQkFDNUVWLGtCQUFrQixrREFBb0MsOERBQUNILDJEQUFrQkE7d0JBQUNZLE1BQUs7d0JBQUlDLFNBQVE7Ozs7OztvQkFDMUdWLGtCQUFrQixvQ0FBc0IsOERBQUNILDJEQUFrQkE7Ozs7Ozs7WUFHOURFLE1BQU1RLE1BQU0sS0FBSywyQkFBYSw4REFBQ1oscURBQVlBOzs7OztZQUMzQ0ksTUFBTVEsTUFBTSxLQUFLLHlCQUFXLDhEQUFDWCw4Q0FBS0E7Ozs7Ozs7Ozs7O0FBRW5DO0dBdkJJRTtLQUFBQTtBQTBCTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db250ZW50TG9hZGVyLmpzPzdlNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQ29udGVudExvYWRlci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgU3ViTWVudSBmcm9tICcuL1N1Yk1lbnUnO1xuaW1wb3J0IEltYWdlR2FsbGVyeSBmcm9tICcuL0ltYWdlR2FsbGVyeSc7XG5pbXBvcnQgVGVzdGltb25pYWxzIGZyb20gJy4vVGVzdGltb25pYWxzJztcbmltcG9ydCBQcmVzcyBmcm9tICcuL1ByZXNzJztcbmltcG9ydCBNZWRpYUNvbnRlbnRMb2FkZXIgZnJvbSAnLi9NZWRpYUNvbnRlbnRMb2FkZXInO1xuXG5jb25zdCBDb250ZW50TG9hZGVyID0gKHByb3BzKSA9PiB7XG5cdFx0Ly8gVGhpcyBzZXRzIHRoZSBzdGF0ZSBmb3IgdGhlIG9wdGlvbiBzZWxlY3RlZCBpbiB0aGUgU2Vjb25kIFN1Ym1lbnUsIHRoZSBvbmUgaW5zaWRlIHRoaXMgQ29tcG9uZW50XG5cdFx0Y29uc3QgW2N1cnJlbnRPcHRpb24sIHNldEN1cnJlbnRPcHRpb25dID0gdXNlU3RhdGUoJ2lsbHVzdHJhdGlvbnMnKTtcblxuXHRcdGNvbnN0IGhhbmRsZU9wdGlvbkNoYW5nZSA9IChvcHRpb24pID0+IHtcblx0XHRzZXRDdXJyZW50T3B0aW9uKG9wdGlvbik7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgaWQ9e3N0eWxlcy5jb250ZW50TG9hZGVyQ29udGFpbmVyfT5cblxuXHRcdHtwcm9wcy50b0xvYWQgPT09ICdJTExVU1RSQVRJT05TJyAmJiA8SW1hZ2VHYWxsZXJ5ICB0eXBlPVwic3F1YXJlXCIgcm93cz1cIjNcIiBjb2x1bW5zPVwiNVwiLz59XG5cdFx0e3Byb3BzLnRvTG9hZCA9PT0gJ1BST0RVQ1RTICYgU0VSVklDRVMnICYmIDw+XG4gICAgICAgICAgICAgICAgICAgIDxTdWJNZW51IG9wdGlvbnM9e3Byb3BzLm9wdGlvbnN9IG9uQ2hhbmdlT3B0aW9uPXtoYW5kbGVPcHRpb25DaGFuZ2V9IGRpcmVjdGlvbj1cInZlcnRpY2FsXCIgc2VsZWN0ZWQ9e2N1cnJlbnRPcHRpb259IGlkPVwiQ1NNXCIgLz5cbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRPcHRpb24gPT09ICdpbGx1c3RyYXRpb25zJyAmJiA8TWVkaWFDb250ZW50TG9hZGVyIC8+fVxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVudE9wdGlvbiA9PT0gJ3Bvc3RlcnMnICYmIDxJbWFnZUdhbGxlcnkgdHlwZT1cInBvc3RlclwiIHJvd3M9XCIyXCIgY29sdW1ucz1cIjVcIi8+fVxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVudE9wdGlvbiA9PT0gJzJkIGFuaW1hdGlvbiAmIG1vdGlvbiBncmFwaGljcycgJiYgPE1lZGlhQ29udGVudExvYWRlciByb3dzPVwiMVwiIGNvbHVtbnM9XCI0XCIgLz59XG5cdFx0XHRcdFx0e2N1cnJlbnRPcHRpb24gPT09ICdjaGFyYWN0ZXIgZGVzaWduJyAmJiA8TWVkaWFDb250ZW50TG9hZGVyIC8+fVxuXG4gICAgICAgICAgICAgICAgPC8+XHRcdH1cblx0XHR7cHJvcHMudG9Mb2FkID09PSAnQ0xJRU5UUycgJiYgPFRlc3RpbW9uaWFscyAvPn1cblx0XHR7cHJvcHMudG9Mb2FkID09PSAnUFJFU1MnICYmIDxQcmVzcyAvPn1cblx0XHQ8L2Rpdj5cblx0KX07XG5cblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudExvYWRlcjtcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJTdWJNZW51IiwiSW1hZ2VHYWxsZXJ5IiwiVGVzdGltb25pYWxzIiwiUHJlc3MiLCJNZWRpYUNvbnRlbnRMb2FkZXIiLCJDb250ZW50TG9hZGVyIiwicHJvcHMiLCJjdXJyZW50T3B0aW9uIiwic2V0Q3VycmVudE9wdGlvbiIsImhhbmRsZU9wdGlvbkNoYW5nZSIsIm9wdGlvbiIsImRpdiIsImlkIiwiY29udGVudExvYWRlckNvbnRhaW5lciIsInRvTG9hZCIsInR5cGUiLCJyb3dzIiwiY29sdW1ucyIsIm9wdGlvbnMiLCJvbkNoYW5nZU9wdGlvbiIsImRpcmVjdGlvbiIsInNlbGVjdGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ContentLoader.js\n"));

/***/ })

});
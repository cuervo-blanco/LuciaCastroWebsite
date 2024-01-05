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

/***/ "./src/components/Testimonials.js":
/*!****************************************!*\
  !*** ./src/components/Testimonials.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Testimonials_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Testimonials.module.scss */ \"./src/styles/Testimonials.module.scss\");\n/* harmony import */ var _styles_Testimonials_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Testimonials_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _data_testimonialsArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/testimonialsArray */ \"./src/data/testimonialsArray.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Testimonials() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), currentTestimonial = _useState[0], changeTestimonial = _useState[1];\n    var handleChangeTestimonial = function(direction) {\n        var newTestimonialIndex = currentTestimonial + direction;\n        if (newTestimonialIndex < 0) {\n            newTestimonialIndex = _data_testimonialsArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"].length - 1;\n        } else if (newTestimonialIndex >= _data_testimonialsArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"].length) {\n            newTestimonialIndex = 0;\n        }\n        changeTestimonial(newTestimonialIndex);\n    };\n    var testimonial = _data_testimonialsArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"][currentTestimonial][0];\n    var client = _data_testimonialsArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"][currentTestimonial][1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: (_styles_Testimonials_module_scss__WEBPACK_IMPORTED_MODULE_5___default().testimonialsContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return handleChangeTestimonial(-1);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faChevronLeft\n                }, void 0, false, {\n                    fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/Testimonials.js\",\n                    lineNumber: 32,\n                    columnNumber: 57\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/Testimonials.js\",\n                lineNumber: 32,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: (_styles_Testimonials_module_scss__WEBPACK_IMPORTED_MODULE_5___default().quote),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"blockquote\", {\n                        children: testimonial\n                    }, void 0, false, {\n                        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/Testimonials.js\",\n                        lineNumber: 34,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: client\n                    }, void 0, false, {\n                        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/Testimonials.js\",\n                        lineNumber: 35,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/Testimonials.js\",\n                lineNumber: 33,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return handleChangeTestimonial(+1);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faChevronRight\n                }, void 0, false, {\n                    fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/Testimonials.js\",\n                    lineNumber: 37,\n                    columnNumber: 57\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/Testimonials.js\",\n                lineNumber: 37,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/Testimonials.js\",\n        lineNumber: 30,\n        columnNumber: 4\n    }, this);\n}\n_s(Testimonials, \"BXX7y3KfH2ZXlx9Skp+pZjyC0IY=\");\n_c = Testimonials;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Testimonials);\nvar _c;\n$RefreshReg$(_c, \"Testimonials\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UZXN0aW1vbmlhbHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDZ0I7QUFDRTtBQUNPO0FBQ2lCO0FBSWxGLFNBQVNPOztJQUVULElBQWdETixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsUUFBbERPLHFCQUF5Q1AsY0FBckJRLG9CQUFxQlI7SUFHaEQsSUFBTVMsMEJBQTBCLFNBQUNDO1FBQy9CLElBQUlDLHNCQUFzQkoscUJBQXFCRztRQUNoRCxJQUFJQyxzQkFBc0IsR0FBRTtZQUMzQkEsc0JBQXNCVCxzRUFBd0IsR0FBRztRQUNsRCxPQUFPLElBQUlTLHVCQUF1QlQsc0VBQXdCLEVBQUM7WUFDMURTLHNCQUFzQjtRQUN2QjtRQUNBSCxrQkFBa0JHO0lBQ25CO0lBR0MsSUFBTUUsY0FBY1gsK0RBQWlCLENBQUNLLG1CQUFtQixDQUFDLEVBQUU7SUFDNUQsSUFBTU8sU0FBU1osK0RBQWlCLENBQUNLLG1CQUFtQixDQUFDLEVBQUU7SUFHdkQscUJBQ0UsOERBQUNRO1FBQUlDLElBQUlmLCtGQUE0Qjs7MEJBRXJDLDhEQUFDaUI7Z0JBQU9DLFNBQVM7MkJBQU1WLHdCQUF3QixDQUFFOzswQkFBSSw0RUFBQ04sMkVBQWVBO29CQUFDaUIsTUFBTWYsNEVBQWFBOzs7Ozs7Ozs7OzswQkFDekYsOERBQUNVO2dCQUFJQyxJQUFJZiwrRUFBWTs7a0NBQ3BCLDhEQUFDcUI7a0NBQVlUOzs7Ozs7a0NBQ2IsOERBQUNVO2tDQUFHVDs7Ozs7Ozs7Ozs7OzBCQUVMLDhEQUFDSTtnQkFBT0MsU0FBUzsyQkFBTVYsd0JBQXdCLENBQUU7OzBCQUFJLDRFQUFDTiwyRUFBZUE7b0JBQUNpQixNQUFNaEIsNkVBQWNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk3RjtHQWhDU0U7S0FBQUE7QUFrQ1QsK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGVzdGltb25pYWxzLmpzPzZjZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICwgeyB1c2VTdGF0ZSB9ZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvVGVzdGltb25pYWxzLm1vZHVsZS5zY3NzJztcbmltcG9ydCB0ZXN0aW1vbmlhbHNBcnJheSBmcm9tICcuLi9kYXRhL3Rlc3RpbW9uaWFsc0FycmF5JztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYUNoZXZyb25SaWdodCwgZmFDaGV2cm9uTGVmdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cblxuXG5mdW5jdGlvbiBUZXN0aW1vbmlhbHMgKCkge1xuXHRcbmNvbnN0IFtjdXJyZW50VGVzdGltb25pYWwsIGNoYW5nZVRlc3RpbW9uaWFsXSA9IHVzZVN0YXRlKDApO1xuXG5cbmNvbnN0IGhhbmRsZUNoYW5nZVRlc3RpbW9uaWFsID0gKGRpcmVjdGlvbikgPT4ge1xuXHRcdGxldCBuZXdUZXN0aW1vbmlhbEluZGV4ID0gY3VycmVudFRlc3RpbW9uaWFsICsgZGlyZWN0aW9uO1xuXHRpZiAobmV3VGVzdGltb25pYWxJbmRleCA8IDApe1xuXHRcdG5ld1Rlc3RpbW9uaWFsSW5kZXggPSB0ZXN0aW1vbmlhbHNBcnJheS5sZW5ndGggLSAxO1xuXHR9IGVsc2UgaWYgKG5ld1Rlc3RpbW9uaWFsSW5kZXggPj0gdGVzdGltb25pYWxzQXJyYXkubGVuZ3RoKXtcblx0XHRuZXdUZXN0aW1vbmlhbEluZGV4ID0gMDtcblx0fVxuXHRjaGFuZ2VUZXN0aW1vbmlhbChuZXdUZXN0aW1vbmlhbEluZGV4KTtcbn1cblxuXG5cdGNvbnN0IHRlc3RpbW9uaWFsID0gdGVzdGltb25pYWxzQXJyYXlbY3VycmVudFRlc3RpbW9uaWFsXVswXTtcblx0Y29uc3QgY2xpZW50ID0gdGVzdGltb25pYWxzQXJyYXlbY3VycmVudFRlc3RpbW9uaWFsXVsxXTtcblxuXG5cdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPXtzdHlsZXMudGVzdGltb25pYWxzQ29udGFpbmVyfT5cblxuXHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaGFuZ2VUZXN0aW1vbmlhbCgtIDEpfT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvbkxlZnR9IC8+PC9idXR0b24+XG5cdFx0XHQ8ZGl2IGlkPXtzdHlsZXMucXVvdGV9PlxuXHRcdFx0XHQ8YmxvY2txdW90ZT57dGVzdGltb25pYWx9PC9ibG9ja3F1b3RlPlxuXHRcdFx0XHQ8cD57Y2xpZW50fTwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaGFuZ2VUZXN0aW1vbmlhbCgrIDEpfT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSAvPjwvYnV0dG9uPlxuXG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdGltb25pYWxzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJ0ZXN0aW1vbmlhbHNBcnJheSIsIkZvbnRBd2Vzb21lSWNvbiIsImZhQ2hldnJvblJpZ2h0IiwiZmFDaGV2cm9uTGVmdCIsIlRlc3RpbW9uaWFscyIsImN1cnJlbnRUZXN0aW1vbmlhbCIsImNoYW5nZVRlc3RpbW9uaWFsIiwiaGFuZGxlQ2hhbmdlVGVzdGltb25pYWwiLCJkaXJlY3Rpb24iLCJuZXdUZXN0aW1vbmlhbEluZGV4IiwibGVuZ3RoIiwidGVzdGltb25pYWwiLCJjbGllbnQiLCJkaXYiLCJpZCIsInRlc3RpbW9uaWFsc0NvbnRhaW5lciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpY29uIiwicXVvdGUiLCJibG9ja3F1b3RlIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Testimonials.js\n"));

/***/ })

});
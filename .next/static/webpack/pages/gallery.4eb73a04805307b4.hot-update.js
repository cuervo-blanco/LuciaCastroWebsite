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

/***/ "./src/components/SubMenu.js":
/*!***********************************!*\
  !*** ./src/components/SubMenu.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_SubMenu_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/SubMenu.module.scss */ \"./src/styles/SubMenu.module.scss\");\n/* harmony import */ var _styles_SubMenu_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_SubMenu_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction SubMenu(props) {\n    var _this = this;\n    var direction = props.direction === \"horizontal\" ? [\n        {\n            flexDirection: \"row\"\n        },\n        {\n            justifyContent: \"center\"\n        }\n    ] : [\n        {\n            flexDirection: \"column\"\n        },\n        {\n            justifyContent: \"left\",\n            padding: \"100px\"\n        }\n    ];\n    var hoverClass = props.direction === \"vertical\" ? (_styles_SubMenu_module_scss__WEBPACK_IMPORTED_MODULE_2___default().menuItemVerticalHover) : \"\";\n    var subMenuOptions = props.options.map(function(option, index) {\n        var selectedStyle = props.selected === option ? {\n            fontWeight: \"bold\"\n        } : {\n            fontWeight: \"lighter\"\n        };\n        var combinedStyle = (0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__._)({}, direction[1], selectedStyle);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: \"\".concat((_styles_SubMenu_module_scss__WEBPACK_IMPORTED_MODULE_2___default().menuItemHover), \" \").concat(hoverClass),\n            style: combinedStyle,\n            onClick: function() {\n                return props.onChangeOption(option);\n            },\n            children: option\n        }, \"\".concat(props.id, \"-\").concat(index), false, {\n            fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/SubMenu.js\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: (_styles_SubMenu_module_scss__WEBPACK_IMPORTED_MODULE_2___default().subMenuContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"menu\", {\n            style: direction[0],\n            children: subMenuOptions\n        }, void 0, false, {\n            fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/SubMenu.js\",\n            lineNumber: 21,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/SubMenu.js\",\n        lineNumber: 20,\n        columnNumber: 3\n    }, this);\n}\n_c = SubMenu;\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SubMenu);\nvar _c;\n$RefreshReg$(_c, \"SubMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJNZW51LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDd0I7QUFFbEQsU0FBU0UsUUFBUUMsS0FBSzs7SUFDckIsSUFBTUMsWUFBWUQsTUFBTUMsU0FBUyxLQUFLLGVBQWU7UUFBQztZQUFDQyxlQUFlO1FBQUs7UUFBRztZQUFDQyxnQkFBZ0I7UUFBUTtLQUFFLEdBQUc7UUFBQztZQUFDRCxlQUFlO1FBQVE7UUFBRztZQUFDQyxnQkFBZ0I7WUFBUUMsU0FBUztRQUFPO0tBQUU7SUFDbkwsSUFBTUMsYUFBYUwsTUFBTUMsU0FBUyxLQUFLLGFBQWFILDBGQUE0QixHQUFHO0lBR3BGLElBQU1TLGlCQUFpQlAsTUFBTVEsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBQ0MsUUFBUUM7UUFDMUMsSUFBTUMsZ0JBQWdCWixNQUFNYSxRQUFRLEtBQUtILFNBQVM7WUFBRUksWUFBWTtRQUFPLElBQUk7WUFBRUEsWUFBWTtRQUFVO1FBQ3pHLElBQU1DLGdCQUFnQixrRUFBSWQsU0FBUyxDQUFDLEVBQUUsRUFBS1c7UUFDckMscUJBQ0ksOERBQUNJO1lBQWdDQyxXQUFXLEdBQTJCWixPQUF4QlAsa0ZBQW9CLEVBQUMsS0FBYyxPQUFYTztZQUFjYyxPQUFPSjtZQUFlSyxTQUFTO3VCQUFNcEIsTUFBTXFCLGNBQWMsQ0FBQ1g7O3NCQUMxSUE7V0FESSxHQUFlQyxPQUFaWCxNQUFNc0IsRUFBRSxFQUFDLEtBQVMsT0FBTlg7Ozs7O0lBSWhDO0lBRUgscUJBQ0MsOERBQUNZO1FBQUlELElBQUl4QixxRkFBdUI7a0JBQy9CLDRFQUFDMkI7WUFBS04sT0FBT2xCLFNBQVMsQ0FBQyxFQUFFO3NCQUN2Qk07Ozs7Ozs7Ozs7O0FBS0w7S0F2QlNSOztBQXlCVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TdWJNZW51LmpzPzNlZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1N1Yk1lbnUubW9kdWxlLnNjc3MnIFxuXG5mdW5jdGlvbiBTdWJNZW51KHByb3BzKSB7XG5cdGNvbnN0IGRpcmVjdGlvbiA9IHByb3BzLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnID8gW3tmbGV4RGlyZWN0aW9uOiAncm93J30sIHtqdXN0aWZ5Q29udGVudDogJ2NlbnRlcid9XSA6IFt7ZmxleERpcmVjdGlvbjogJ2NvbHVtbid9LCB7anVzdGlmeUNvbnRlbnQ6ICdsZWZ0JywgcGFkZGluZzogJzEwMHB4J31dO1xuXHRjb25zdCBob3ZlckNsYXNzID0gcHJvcHMuZGlyZWN0aW9uID09PSAndmVydGljYWwnID8gc3R5bGVzLm1lbnVJdGVtVmVydGljYWxIb3ZlciA6ICcnO1xuXG5cbmNvbnN0IHN1Yk1lbnVPcHRpb25zID0gcHJvcHMub3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRTdHlsZSA9IHByb3BzLnNlbGVjdGVkID09PSBvcHRpb24gPyB7IGZvbnRXZWlnaHQ6ICdib2xkJyB9IDogeyBmb250V2VpZ2h0OiAnbGlnaHRlcicgfTtcblx0XHRjb25zdCBjb21iaW5lZFN0eWxlID0gey4uLmRpcmVjdGlvblsxXSwgLi4uc2VsZWN0ZWRTdHlsZX07XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXtgJHtwcm9wcy5pZH0tJHtpbmRleH1gfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5tZW51SXRlbUhvdmVyfSAke2hvdmVyQ2xhc3N9YH0gc3R5bGU9e2NvbWJpbmVkU3R5bGV9IG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2hhbmdlT3B0aW9uKG9wdGlvbil9PlxuICAgICAgICAgICAgICAgIHtvcHRpb259XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgIH0pO1xuXG5cdHJldHVybihcblx0XHQ8ZGl2IGlkPXtzdHlsZXMuc3ViTWVudUNvbnRhaW5lcn0+XG5cdFx0XHQ8bWVudSBzdHlsZT17ZGlyZWN0aW9uWzBdfT5cblx0XHRcdFx0e3N1Yk1lbnVPcHRpb25zfVx0XG5cdFx0XHQ8L21lbnU+XHRcblx0XHQ8L2Rpdj5cblx0KVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdWJNZW51O1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiU3ViTWVudSIsInByb3BzIiwiZGlyZWN0aW9uIiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsImhvdmVyQ2xhc3MiLCJtZW51SXRlbVZlcnRpY2FsSG92ZXIiLCJzdWJNZW51T3B0aW9ucyIsIm9wdGlvbnMiLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsInNlbGVjdGVkU3R5bGUiLCJzZWxlY3RlZCIsImZvbnRXZWlnaHQiLCJjb21iaW5lZFN0eWxlIiwibGkiLCJjbGFzc05hbWUiLCJtZW51SXRlbUhvdmVyIiwic3R5bGUiLCJvbkNsaWNrIiwib25DaGFuZ2VPcHRpb24iLCJpZCIsImRpdiIsInN1Yk1lbnVDb250YWluZXIiLCJtZW51Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SubMenu.js\n"));

/***/ })

});
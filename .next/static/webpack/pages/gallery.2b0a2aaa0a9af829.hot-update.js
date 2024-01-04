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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_SubMenu_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/SubMenu.module.scss */ \"./src/styles/SubMenu.module.scss\");\n/* harmony import */ var _styles_SubMenu_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_SubMenu_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction SubMenu(props) {\n    var _this = this;\n    var direction = props.direction === \"horizontal\" ? [\n        {\n            flexDirection: \"row\"\n        },\n        {\n            justifyContent: \"center\"\n        }\n    ] : [\n        {\n            flexDirection: \"column\"\n        },\n        {\n            justifyContent: \"left\"\n        }\n    ];\n    var subMenuOptions = props.options.map(function(option, index) {\n        var selectedStyle = props.selected === option ? {\n            fontWeight: \"bold\"\n        } : {\n            fontWeight: \"normal\"\n        };\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            style: (0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_2__._)({}, direction, selectedStyle),\n            onClick: function() {\n                return props.onChangeOption(option);\n            },\n            children: option\n        }, index, false, {\n            fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/SubMenu.js\",\n            lineNumber: 11,\n            columnNumber: 13\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: (_styles_SubMenu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().subMenuContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"menu\", {\n            style: direction[0],\n            children: subMenuOptions\n        }, void 0, false, {\n            fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/SubMenu.js\",\n            lineNumber: 19,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/SubMenu.js\",\n        lineNumber: 18,\n        columnNumber: 3\n    }, this);\n}\n_c = SubMenu;\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SubMenu);\nvar _c;\n$RefreshReg$(_c, \"SubMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJNZW51LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDd0I7QUFFbEQsU0FBU0UsUUFBUUMsS0FBSzs7SUFDckIsSUFBTUMsWUFBWUQsTUFBTUMsU0FBUyxLQUFLLGVBQWU7UUFBQztZQUFDQyxlQUFlO1FBQUs7UUFBRztZQUFDQyxnQkFBZ0I7UUFBUTtLQUFFLEdBQUc7UUFBQztZQUFDRCxlQUFlO1FBQVE7UUFBRztZQUFDQyxnQkFBZ0I7UUFBTTtLQUFFO0lBR2xLLElBQU1DLGlCQUFpQkosTUFBTUssT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBQ0MsUUFBUUM7UUFDMUMsSUFBTUMsZ0JBQWdCVCxNQUFNVSxRQUFRLEtBQUtILFNBQVM7WUFBRUksWUFBWTtRQUFPLElBQUk7WUFBRUEsWUFBWTtRQUFTO1FBQ2xHLHFCQUNJLDhEQUFDQztZQUFlQyxPQUFPLGtFQUFLWixXQUFjUTtZQUFpQkssU0FBUzt1QkFBTWQsTUFBTWUsY0FBYyxDQUFDUjs7c0JBQzFGQTtXQURJQzs7Ozs7SUFJakI7SUFFSCxxQkFDQyw4REFBQ1E7UUFBSUMsSUFBSW5CLHFGQUF1QjtrQkFDL0IsNEVBQUNxQjtZQUFLTixPQUFPWixTQUFTLENBQUMsRUFBRTtzQkFDdkJHOzs7Ozs7Ozs7OztBQUtMO0tBckJTTDs7QUF1QlQsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3ViTWVudS5qcz8zZWY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9TdWJNZW51Lm1vZHVsZS5zY3NzJyBcblxuZnVuY3Rpb24gU3ViTWVudShwcm9wcykge1xuXHRjb25zdCBkaXJlY3Rpb24gPSBwcm9wcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyA/IFt7ZmxleERpcmVjdGlvbjogJ3Jvdyd9LCB7anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInfV0gOiBbe2ZsZXhEaXJlY3Rpb246ICdjb2x1bW4nfSwge2p1c3RpZnlDb250ZW50OiAnbGVmdCd9XTtcblxuXG5jb25zdCBzdWJNZW51T3B0aW9ucyA9IHByb3BzLm9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkU3R5bGUgPSBwcm9wcy5zZWxlY3RlZCA9PT0gb3B0aW9uID8geyBmb250V2VpZ2h0OiAnYm9sZCcgfSA6IHsgZm9udFdlaWdodDogJ25vcm1hbCcgfTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBzdHlsZT17eyAuLi5kaXJlY3Rpb24sIC4uLnNlbGVjdGVkU3R5bGUgfX0gb25DbGljaz17KCkgPT4gcHJvcHMub25DaGFuZ2VPcHRpb24ob3B0aW9uKX0+XG4gICAgICAgICAgICAgICAge29wdGlvbn1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgfSk7XG5cblx0cmV0dXJuKFxuXHRcdDxkaXYgaWQ9e3N0eWxlcy5zdWJNZW51Q29udGFpbmVyfT5cblx0XHRcdDxtZW51IHN0eWxlPXtkaXJlY3Rpb25bMF19PlxuXHRcdFx0XHR7c3ViTWVudU9wdGlvbnN9XHRcblx0XHRcdDwvbWVudT5cdFxuXHRcdDwvZGl2PlxuXHQpXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN1Yk1lbnU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJTdWJNZW51IiwicHJvcHMiLCJkaXJlY3Rpb24iLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJzdWJNZW51T3B0aW9ucyIsIm9wdGlvbnMiLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsInNlbGVjdGVkU3R5bGUiLCJzZWxlY3RlZCIsImZvbnRXZWlnaHQiLCJsaSIsInN0eWxlIiwib25DbGljayIsIm9uQ2hhbmdlT3B0aW9uIiwiZGl2IiwiaWQiLCJzdWJNZW51Q29udGFpbmVyIiwibWVudSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SubMenu.js\n"));

/***/ })

});
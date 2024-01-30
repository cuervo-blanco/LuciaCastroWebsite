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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Gallery.module.scss */ \"./src/styles/Gallery.module.scss\");\n/* harmony import */ var _styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_SubMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubMenu */ \"./src/components/SubMenu.js\");\n/* harmony import */ var _components_ContentLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ContentLoader */ \"./src/components/ContentLoader.js\");\n/* harmony import */ var _components_useSwipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/useSwipe */ \"./src/components/useSwipe.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar firstMenuOptions = [\n    \"ILLUSTRATIONS\",\n    \"PRODUCTS & SERVICES\",\n    \"CLIENTS\",\n    \"PRESS\"\n];\nvar secondMenuOptions = [\n    \"illustrations\",\n    \"posters\",\n    \"2d animation & motion graphics\",\n    \"character design\"\n];\nvar Gallery = function(param) {\n    var illustrations = param.illustrations, psIllustrations = param.psIllustrations, ps2dAnimation = param.ps2dAnimation, psCharacterDesign = param.psCharacterDesign, clientQuotes = param.clientQuotes, press = param.press;\n    _s();\n    var _useSwipe = (0,_components_useSwipe__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n        onLeftSwipe: \"/bio\",\n        onRightSwipe: \"/\"\n    }), handleTouchStart = _useSwipe.handleTouchStart, handleTouchEnd = _useSwipe.handleTouchEnd;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"ILLUSTRATIONS\"), 2), currentOption = _useState[0], setCurrentOption = _useState[1];\n    var handleOptionChange = function(option) {\n        setCurrentOption(option);\n    };\n    console.log(currentOption);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: (_styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_6___default().galleryContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            onTouchStart: handleTouchStart,\n            onTouchEnd: handleTouchEnd,\n            style: {\n                width: \"100%\",\n                height: \"100%\",\n                display: \"flex\",\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                flexDirection: \"column\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"gallery\"\n                }, void 0, false, {\n                    fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/gallery.js\",\n                    lineNumber: 33,\n                    columnNumber: 3\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    options: firstMenuOptions,\n                    onChangeOption: handleOptionChange,\n                    direction: \"horizontal\",\n                    selected: currentOption,\n                    id: \"GSM\"\n                }, void 0, false, {\n                    fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/gallery.js\",\n                    lineNumber: 34,\n                    columnNumber: 3\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContentLoader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    toLoad: currentOption,\n                    options: secondMenuOptions,\n                    illustrations: illustrations,\n                    mic1: psIllustrations,\n                    mic2: ps2dAnimation,\n                    mic3: psCharacterDesign,\n                    clients: clientQuotes,\n                    mic4: press\n                }, void 0, false, {\n                    fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/gallery.js\",\n                    lineNumber: 35,\n                    columnNumber: 3\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/gallery.js\",\n            lineNumber: 32,\n            columnNumber: 3\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/gallery.js\",\n        lineNumber: 31,\n        columnNumber: 3\n    }, _this);\n};\n_s(Gallery, \"T0afmDaFUWVSARhY6gvsretbEgU=\", false, function() {\n    return [\n        _components_useSwipe__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Gallery;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZ2FsbGVyeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDVTtBQUNQO0FBQ1k7QUFDVjtBQUU5QyxJQUFNTSxtQkFBbUI7SUFBQztJQUFpQjtJQUF1QjtJQUFXO0NBQVE7QUFDckYsSUFBTUMsb0JBQW9CO0lBQUM7SUFBaUI7SUFBVztJQUFrQztDQUFtQjtBQUU1RyxJQUFNQyxVQUFVO1FBQUdDLHNCQUFBQSxlQUNkQyx3QkFBQUEsaUJBQ0FDLHNCQUFBQSxlQUNBQywwQkFBQUEsbUJBQ0FDLHFCQUFBQSxjQUNBQyxjQUFBQTs7SUFHSixJQUE2Q1QsWUFBQUEsZ0VBQVFBLENBQUM7UUFBQ1UsYUFBYTtRQUFRQyxjQUFjO0lBQUcsSUFBckZDLG1CQUFxQ1osVUFBckNZLGtCQUFrQkMsaUJBQW1CYixVQUFuQmE7SUFJMUIsSUFBMENqQixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsc0JBQTVDa0IsZ0JBQW1DbEIsY0FBcEJtQixtQkFBb0JuQjtJQUUxQyxJQUFNb0IscUJBQXFCLFNBQUNDO1FBQzNCRixpQkFBaUJFO0lBQ2xCO0lBRUFDLFFBQVFDLEdBQUcsQ0FBQ0w7SUFFWixxQkFDQyw4REFBQ007UUFBSUMsSUFBSXhCLHFGQUF1QjtrQkFDaEMsNEVBQUN1QjtZQUFJRyxjQUFjWDtZQUFrQlksWUFBWVg7WUFBZ0JZLE9BQU87Z0JBQUVDLE9BQU87Z0JBQVFDLFFBQVE7Z0JBQVFDLFNBQVM7Z0JBQVFDLGdCQUFnQjtnQkFBVUMsWUFBWTtnQkFBVUMsZUFBZTtZQUFTOzs4QkFDbE0sOERBQUNDOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNsQywyREFBT0E7b0JBQUNtQyxTQUFTaEM7b0JBQWtCaUMsZ0JBQWdCbEI7b0JBQW9CbUIsV0FBVTtvQkFBYUMsVUFBVXRCO29CQUFlTyxJQUFHOzs7Ozs7OEJBQzNILDhEQUFDdEIsaUVBQWFBO29CQUFDc0MsUUFBUXZCO29CQUFlbUIsU0FBUy9CO29CQUFtQkUsZUFBZUE7b0JBQWVrQyxNQUFNakM7b0JBQWlCa0MsTUFBTWpDO29CQUFla0MsTUFBTWpDO29CQUFtQmtDLFNBQVNqQztvQkFBY2tDLE1BQU1qQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJcE07R0E3Qk1OOztRQVF3Q0gsNERBQVFBOzs7S0FSaERHOztBQXlETiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZ2FsbGVyeS5qcz8yNzRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9ICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9HYWxsZXJ5Lm1vZHVsZS5zY3NzJzsgXG5pbXBvcnQgU3ViTWVudSBmcm9tICcuLi9jb21wb25lbnRzL1N1Yk1lbnUnO1xuaW1wb3J0IENvbnRlbnRMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZW50TG9hZGVyJztcbmltcG9ydCB1c2VTd2lwZSBmcm9tICcuLi9jb21wb25lbnRzL3VzZVN3aXBlJztcblxuY29uc3QgZmlyc3RNZW51T3B0aW9ucyA9IFsnSUxMVVNUUkFUSU9OUycsICdQUk9EVUNUUyAmIFNFUlZJQ0VTJywgJ0NMSUVOVFMnLCAnUFJFU1MnXTtcbmNvbnN0IHNlY29uZE1lbnVPcHRpb25zID0gWydpbGx1c3RyYXRpb25zJywgJ3Bvc3RlcnMnLCAnMmQgYW5pbWF0aW9uICYgbW90aW9uIGdyYXBoaWNzJywgJ2NoYXJhY3RlciBkZXNpZ24nXTtcblxuY29uc3QgR2FsbGVyeSA9ICh7IGlsbHVzdHJhdGlvbnMsIFxuXHRcdFx0XHRcdHBzSWxsdXN0cmF0aW9ucyxcblx0XHRcdFx0XHRwczJkQW5pbWF0aW9uLFxuXHRcdFx0XHRcdHBzQ2hhcmFjdGVyRGVzaWduLCBcblx0XHRcdFx0XHRjbGllbnRRdW90ZXMsXG5cdFx0XHRcdFx0cHJlc3Ncblx0XHRcdFx0XHR9KSA9PiB7XG5cblx0Y29uc3QgeyBoYW5kbGVUb3VjaFN0YXJ0LCBoYW5kbGVUb3VjaEVuZCB9ID0gdXNlU3dpcGUoe29uTGVmdFN3aXBlOiAnL2JpbycsIG9uUmlnaHRTd2lwZTogJy8nfSk7XG5cblxuXG5cdGNvbnN0IFtjdXJyZW50T3B0aW9uLCBzZXRDdXJyZW50T3B0aW9uXSA9IHVzZVN0YXRlKCdJTExVU1RSQVRJT05TJyk7XG5cblx0Y29uc3QgaGFuZGxlT3B0aW9uQ2hhbmdlID0gKG9wdGlvbikgPT4ge1xuXHRcdHNldEN1cnJlbnRPcHRpb24ob3B0aW9uKTtcblx0fVxuXG5cdGNvbnNvbGUubG9nKGN1cnJlbnRPcHRpb24pO1xuXG5cdHJldHVybihcblx0XHQ8ZGl2IGlkPXtzdHlsZXMuZ2FsbGVyeUNvbnRhaW5lcn0+XG5cdFx0PGRpdiBvblRvdWNoU3RhcnQ9e2hhbmRsZVRvdWNoU3RhcnR9IG9uVG91Y2hFbmQ9e2hhbmRsZVRvdWNoRW5kfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyB9fSA+XG5cdFx0PGgxPmdhbGxlcnk8L2gxPlxuXHRcdDxTdWJNZW51IG9wdGlvbnM9e2ZpcnN0TWVudU9wdGlvbnN9IG9uQ2hhbmdlT3B0aW9uPXtoYW5kbGVPcHRpb25DaGFuZ2V9IGRpcmVjdGlvbj1cImhvcml6b250YWxcIiBzZWxlY3RlZD17Y3VycmVudE9wdGlvbn0gaWQ9XCJHU01cIi8+XG5cdFx0PENvbnRlbnRMb2FkZXIgdG9Mb2FkPXtjdXJyZW50T3B0aW9ufSBvcHRpb25zPXtzZWNvbmRNZW51T3B0aW9uc30gaWxsdXN0cmF0aW9ucz17aWxsdXN0cmF0aW9uc30gbWljMT17cHNJbGx1c3RyYXRpb25zfSBtaWMyPXtwczJkQW5pbWF0aW9ufSBtaWMzPXtwc0NoYXJhY3RlckRlc2lnbn0gY2xpZW50cz17Y2xpZW50UXVvdGVzfSBtaWM0PXtwcmVzc30vPlxuXHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpXG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJ2h0dHBzOi8vbHVjaWEtY2FzdHJvLmNvbScgOiAnaHR0cDovL2xvY2FsaG9zdDozMDAyJztcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vZ2V0LWNvbnRlbnRgKVxuXHRjb25zdCBjb250ZW50ID0gYXdhaXQgcmVzLmpzb24oKTtcblxuXHRjb25zb2xlLmxvZyhjb250ZW50KTtcblxuXHRjb25zdCBpbGx1c3RyYXRpb25zID0gY29udGVudC5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlY3Rpb25faWQgPT09ICdpbGx1c3RyYXRpb25zJyk7XG5cdGNvbnN0IHBzSWxsdXN0cmF0aW9ucyA9IGNvbnRlbnQuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWN0aW9uX2lkID09PSAncCZzOiBpbGx1c3RyYXRpb25zJyk7IFxuXHRjb25zdCBwczJkQW5pbWF0aW9uID0gY29udGVudC5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlY3Rpb25faWQgPT09ICdwJnM6IDJkIGFuaW1hdGlvbiAmIG1vdGlvbiBncmFwaGljcycpO1xuXHRjb25zdCBwc0NoYXJhY3RlckRlc2lnbiA9IGNvbnRlbnQuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWN0aW9uX2lkID09PSAncCZzOiBjaGFyYWN0ZXIgZGVzaWduJyk7XG5cdGNvbnN0IHByZXNzID0gY29udGVudC5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlY3Rpb25faWQgPT09ICdwcmVzcycpO1xuXHRjb25zdCBjbGllbnRRdW90ZXMgPSBjb250ZW50LmZpbHRlcihpdGVtID0+IGl0ZW0uc2VjdGlvbl9pZCA9PT0gJ2NsaWVudHMnKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG5cdFx0aWxsdXN0cmF0aW9ucyxcblx0XHRwc0lsbHVzdHJhdGlvbnMsXG5cdFx0cHMyZEFuaW1hdGlvbixcblx0XHRwc0NoYXJhY3RlckRlc2lnbixcblx0XHRjbGllbnRRdW90ZXMsXG5cdFx0cHJlc3Ncblx0fSwgLy8gV2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIlN1Yk1lbnUiLCJDb250ZW50TG9hZGVyIiwidXNlU3dpcGUiLCJmaXJzdE1lbnVPcHRpb25zIiwic2Vjb25kTWVudU9wdGlvbnMiLCJHYWxsZXJ5IiwiaWxsdXN0cmF0aW9ucyIsInBzSWxsdXN0cmF0aW9ucyIsInBzMmRBbmltYXRpb24iLCJwc0NoYXJhY3RlckRlc2lnbiIsImNsaWVudFF1b3RlcyIsInByZXNzIiwib25MZWZ0U3dpcGUiLCJvblJpZ2h0U3dpcGUiLCJoYW5kbGVUb3VjaFN0YXJ0IiwiaGFuZGxlVG91Y2hFbmQiLCJjdXJyZW50T3B0aW9uIiwic2V0Q3VycmVudE9wdGlvbiIsImhhbmRsZU9wdGlvbkNoYW5nZSIsIm9wdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJpZCIsImdhbGxlcnlDb250YWluZXIiLCJvblRvdWNoU3RhcnQiLCJvblRvdWNoRW5kIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwiaDEiLCJvcHRpb25zIiwib25DaGFuZ2VPcHRpb24iLCJkaXJlY3Rpb24iLCJzZWxlY3RlZCIsInRvTG9hZCIsIm1pYzEiLCJtaWMyIiwibWljMyIsImNsaWVudHMiLCJtaWM0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/gallery.js\n"));

/***/ })

});